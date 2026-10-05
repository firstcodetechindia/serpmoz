import { createHmac } from "node:crypto";
import type { FormSubmission } from "@/lib/forms/audit";

export type DeliveryResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

/**
 * Hands a validated submission (contact enquiry or growth audit request) to whatever system owns leads (CRM, automation
 * tool, internal API) through a webhook. Kept apart from the route handler so
 * the destination can change – or become a database write for GrowthOS –
 * without touching validation or HTTP code.
 *
 * The webhook body is `{ type, form, receivedAt, submission }` where `type` is
 * "growth_audit_request" or "contact_enquiry", so the receiver can route on it.
 */
export async function deliverSubmission({ form, ...submission }: FormSubmission): Promise<DeliveryResult> {
  const url = process.env.AUDIT_WEBHOOK_URL?.trim();

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      // Development convenience. Field names only – never log personal data.
      console.info(`[${form}-form] received (no AUDIT_WEBHOOK_URL set):`, Object.keys(submission).join(", "));
      return { ok: true };
    }
    return { ok: false, reason: "not_configured" };
  }

  const body = JSON.stringify({ type: form === "audit" ? "growth_audit_request" : "contact_enquiry", form, receivedAt: new Date().toISOString(), submission });
  const secret = process.env.AUDIT_WEBHOOK_SECRET?.trim();
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (secret) headers["x-serpmoz-signature"] = createHmac("sha256", secret).update(body).digest("hex");

  try {
    const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(8000), cache: "no-store" });
    return res.ok ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
