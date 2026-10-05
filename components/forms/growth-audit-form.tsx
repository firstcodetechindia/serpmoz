"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "@/components/forms/fields";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { track } from "@/lib/analytics";
import {
  auditSchema, budgetOptions, countryOptions, fieldErrorsFrom, goalOptions, serviceOptions,
  type AuditField, type AuditResponse,
} from "@/lib/forms/audit";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<AuditField, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const industryOptions = [...industries.map((i) => i.name), "Other"];

export function GrowthAuditForm({ className }: { className?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  function markStarted() {
    if (startedAt.current) return;
    startedAt.current = Date.now();
    track({ event: "audit_form_start" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      businessName: String(fd.get("businessName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      website: String(fd.get("website") ?? ""),
      country: String(fd.get("country") ?? ""),
      industry: String(fd.get("industry") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      goal: String(fd.get("goal") ?? ""),
      services: fd.getAll("services").map(String),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };

    const parsed = auditSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = fieldErrorsFrom(parsed.error);
      setErrors(fieldErrors);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      track({ event: "audit_form_error", reason: "validation" });
      const first = Object.keys(fieldErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/growth-audit/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, companyUrl: String(fd.get("companyUrl") ?? ""), startedAt: startedAt.current || Date.now() }),
      });
      const data = (await res.json()) as AuditResponse;
      if (data.ok) {
        setStatus("success");
        track({ event: "audit_form_submit", services: payload.services.length });
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }
      setErrors(data.fieldErrors ?? {});
      setMessage(data.message);
      setStatus("error");
      track({ event: "audit_form_error", reason: data.fieldErrors ? "validation" : "server" });
    } catch {
      setMessage("We could not reach the server. Check your connection and try again.");
      setStatus("error");
      track({ event: "audit_form_error", reason: "server" });
    }
  }

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className={cn("rounded-panel border border-line bg-surface p-8 outline-none md:p-10", className)}>
        <span className="flex size-10 items-center justify-center rounded-full bg-success/10 text-success-ink">
          <Check aria-hidden className="size-5" />
        </span>
        <h3 className="mt-6 text-h3 font-semibold text-navy">Thank you. Your request is with us.</h3>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
          A growth strategist will review what you have shared and reply by email. If we need more context before the
          audit, we will ask.
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      onFocus={markStarted}
      noValidate
      aria-labelledby="growth-audit-title"
      className={cn("rounded-panel border border-line bg-surface p-6 shadow-soft md:p-9", className)}
    >
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <TextField label="Full name" name="fullName" autoComplete="name" maxLength={80} error={errors.fullName} />
        <TextField label="Business name" name="businessName" autoComplete="organization" maxLength={120} error={errors.businessName} />
        <TextField label="Work email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={160} error={errors.email} />
        <TextField label="Phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={22} placeholder="+91 98765 43210" hint="Include your country code." error={errors.phone} />
        <TextField label="Website" name="website" inputMode="url" autoComplete="url" maxLength={200} placeholder="yourcompany.com" optional error={errors.website} />
        <SelectField label="Country" name="country" options={countryOptions} autoComplete="country-name" error={errors.country} />
        <SelectField label="Industry" name="industry" options={industryOptions} error={errors.industry} />
        <SelectField label="Monthly marketing budget" name="budget" options={budgetOptions} error={errors.budget} />
        <SelectField label="Primary growth goal" name="goal" options={goalOptions} className="sm:col-span-2" error={errors.goal} />

        <fieldset className="sm:col-span-2">
          <legend className="flex w-full items-baseline justify-between text-sm font-medium text-ink">
            Services interested in <span className="text-xs font-normal text-muted">Optional</span>
          </legend>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {serviceOptions.map((s) => (
              <label
                key={s}
                className="cursor-pointer rounded-full border border-line-strong px-3.5 py-2 text-sm text-ink transition-colors select-none hover:border-navy/40 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue"
              >
                <input type="checkbox" name="services" value={s} className="sr-only" />
                {s}
              </label>
            ))}
          </div>
        </fieldset>

        <TextAreaField
          label="Message"
          name="message"
          optional
          maxLength={2000}
          className="sm:col-span-2"
          placeholder="Where are you today, where do you want to be, and what is in the way?"
          error={errors.message}
        />

        {/* Honeypot: hidden from people and assistive tech, attractive to bots */}
        <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
          <label>
            Company URL
            <input type="text" name="companyUrl" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 size-4 shrink-0 rounded border-line-strong accent-navy"
            />
            <span>
              I agree that SERPMOZ may use these details to respond to my request, as described in the{" "}
              <Link href="/privacy-policy/" target="_blank" className="text-blue-ink underline underline-offset-2">Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent ? <p id="consent-error" role="alert" className="mt-1.5 text-[0.8125rem] text-danger">{errors.consent}</p> : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className={cn("text-sm", status === "error" ? "text-danger" : "text-muted")}>
          {status === "error" ? message : "No obligation. We reply by email."}
        </p>
        <Button type="submit" variant="primary" size="lg" disabled={busy} className="shrink-0">
          {busy ? <Loader2 aria-hidden className="animate-spin" /> : null}
          {busy ? "Sending…" : "Request my growth audit"}
        </Button>
      </div>
    </form>
  );
}
