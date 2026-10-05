import { NextResponse } from "next/server";
import { parseFormKind, validateSubmission, type AuditResponse } from "@/lib/forms/audit";
import { deliverSubmission } from "@/lib/server/audit-delivery";
import { rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 16 * 1024;
const MIN_FILL_MS = 2500;

const json = (body: AuditResponse, status = 200) =>
  NextResponse.json(body, { status, headers: { "cache-control": "no-store" } });

/**
 * One endpoint for both public forms. The body carries `form: "contact" | "audit"`
 * (absent means "contact") and is validated against that form's schema. Every
 * guard below applies to both.
 */
export async function POST(request: Request) {
  // Same-origin only: the form posts from this site.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return json({ ok: false, message: "This request could not be accepted." }, 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, message: "Unsupported request." }, 415);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`audit:${ip}`).allowed) {
    return json({ ok: false, message: "Too many requests. Please try again in a few minutes." }, 429);
  }

  const raw = await request.text();
  if (raw.length > MAX_BYTES) return json({ ok: false, message: "The submission is too large." }, 413);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
    if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("shape");
  } catch {
    return json({ ok: false, message: "The submission could not be read." }, 400);
  }

  // Spam traps: a hidden field people never fill, and a minimum time on the form.
  // Bots get a success response so they learn nothing.
  const elapsed = Date.now() - Number(data.startedAt);
  if (data.companyUrl || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return json({ ok: true });
  }

  const form = parseFormKind(data.form);
  if (!form) return json({ ok: false, message: "The submission could not be read." }, 400);

  const parsed = validateSubmission(form, data);
  if (!parsed.ok) {
    return json({ ok: false, message: "Please check the highlighted fields.", fieldErrors: parsed.fieldErrors }, 422);
  }

  const result = await deliverSubmission(parsed.submission);
  if (!result.ok) {
    return json(
      {
        ok: false,
        message:
          result.reason === "not_configured"
            ? "Our form is not accepting submissions at the moment. Please try again later."
            : "We could not send your request. Please try again in a moment.",
      },
      result.reason === "not_configured" ? 503 : 502,
    );
  }

  return json({ ok: true });
}
