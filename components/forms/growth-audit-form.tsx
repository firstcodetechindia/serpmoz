"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "@/components/forms/fields";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { track } from "@/lib/analytics";
import {
  NO_CHANNELS, budgetOptions, channelOptions, countryOptions, formSchemas, fieldErrorsFrom, goalOptions, phoneRules, serviceOptions,
  type AuditField, type AuditResponse, type FormKind,
} from "@/lib/forms/audit";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<AuditField, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const industryOptions = [...industries.map((i) => i.name), "Other"];

const chip =
  "cursor-pointer rounded-full border border-line-strong px-3.5 py-2 text-sm text-ink transition-colors select-none hover:border-navy/40 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue";

const copy = {
  contact: {
    submit: "Send My Enquiry",
    idle: "No obligation. We reply by email.",
    successTitle: "Thank you. Your message is with us.",
    successBody: "A growth strategist will read what you have shared and reply by email. If we need more context first, we will ask.",
    messagePlaceholder: "Where are you today, where do you want to be, and what is in the way?",
  },
  audit: {
    submit: "Request My Growth Audit",
    idle: "No obligation. A strategist replies by email.",
    successTitle: "Thank you. Your audit request is with us.",
    successBody:
      "A growth strategist will review your website and the details you shared, then reply by email with what we found and what we would look at first. If we need access or more context, we will ask.",
    messagePlaceholder: "Anything we should know: markets, competitors, what you have already tried.",
  },
} as const;

type Props = {
  /** "contact" is the general enquiry form; "audit" is the growth audit request. */
  variant?: FormKind;
  /** Set on the form (and on the confirmation that replaces it) so links can target it. */
  id?: string;
  /** Id of the heading that names this form. */
  labelledBy?: string;
  className?: string;
};

/**
 * The site's lead form. Both variants share fields, validation, spam traps and
 * the endpoint; they differ in the questions asked and the schema applied.
 */
export function GrowthAuditForm({ variant = "contact", id, labelledBy = "growth-audit-title", className }: Props) {
  const isAudit = variant === "audit";
  const t = copy[variant];
  const [channels, setChannels] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const phoneRule = phoneRules[country as keyof typeof phoneRules];
  const startedAt = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  function markStarted() {
    if (startedAt.current) return;
    startedAt.current = Date.now();
    track({ event: "audit_form_start", form: variant });
  }

  /** "None yet" clears the other channels, and choosing a channel clears "None yet". */
  function toggleChannel(value: string, checked: boolean) {
    setChannels((current) => {
      if (!checked) return current.filter((c) => c !== value);
      if (value === NO_CHANNELS) return [NO_CHANNELS];
      return [...current.filter((c) => c !== NO_CHANNELS && c !== value), value];
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const str = (name: string) => String(fd.get(name) ?? "");
    const common = {
      form: variant,
      fullName: str("fullName"),
      businessName: str("businessName"),
      email: str("email"),
      phone: str("phone"),
      website: str("website"),
      country: str("country"),
      industry: str("industry"),
      goal: str("goal"),
      message: str("message"),
      consent: fd.get("consent") === "on",
    };
    const payload = isAudit
      ? { ...common, channels }
      : { ...common, budget: str("budget"), services: fd.getAll("services").map(String) };

    const parsed = formSchemas[variant].safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = fieldErrorsFrom(parsed.error);
      setErrors(fieldErrors);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      track({ event: "audit_form_error", form: variant, reason: "validation" });
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
        body: JSON.stringify({ ...payload, companyUrl: str("companyUrl"), startedAt: startedAt.current || Date.now() }),
      });
      const data = (await res.json()) as AuditResponse;
      if (data.ok) {
        setStatus("success");
        track({ event: "audit_form_submit", form: variant, ...("channels" in payload ? { channels: payload.channels.length } : { services: payload.services.length }) });
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }
      setErrors(data.fieldErrors ?? {});
      setMessage(data.message);
      setStatus("error");
      track({ event: "audit_form_error", form: variant, reason: data.fieldErrors ? "validation" : "server" });
    } catch {
      setMessage("We could not reach the server. Check your connection and try again.");
      setStatus("error");
      track({ event: "audit_form_error", form: variant, reason: "server" });
    }
  }

  if (status === "success") {
    return (
      <div id={id} ref={statusRef} tabIndex={-1} role="status" className={cn("scroll-mt-28 rounded-panel border border-line bg-surface p-8 text-ink outline-none md:p-10", className)}>
        <span className="flex size-10 items-center justify-center rounded-full bg-success/10 text-success-ink">
          <Check aria-hidden className="size-5" />
        </span>
        <p className="mt-6 text-h3 font-semibold text-navy">{t.successTitle}</p>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">{t.successBody}</p>
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
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-28 rounded-panel border border-line bg-surface p-5 text-ink shadow-soft sm:p-6 md:p-9", className)}
    >
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <TextField label="Full Name" name="fullName" autoComplete="name" maxLength={80} error={errors.fullName} />
        <TextField label="Business Name" name="businessName" autoComplete="organization" maxLength={120} error={errors.businessName} />
        <TextField label={isAudit ? "Email" : "Work Email"} name="email" type="email" inputMode="email" autoComplete="email" maxLength={160} error={errors.email} />
        <SelectField label="Country" name="country" options={countryOptions} autoComplete="country-name" error={errors.country} onChange={(e) => setCountry(e.target.value)} />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={24}
          placeholder={phoneRule?.example ?? "+91 98765 43210"}
          hint={phoneRule ? phoneRule.hint : "Include your country code."}
          error={errors.phone}
        />
        <TextField
          label="Website"
          name="website"
          inputMode="url"
          autoComplete="url"
          maxLength={200}
          placeholder="yourcompany.com"
          optional={!isAudit}
          hint={isAudit ? "The site you would like reviewed." : undefined}
          error={errors.website}
        />
        <SelectField label="Industry" name="industry" options={industryOptions} error={errors.industry} />
        {isAudit ? (
          <SelectField label="Primary Growth Goal" name="goal" options={goalOptions} error={errors.goal} />
        ) : (
          <>
            <SelectField label="Monthly Marketing Budget" name="budget" options={budgetOptions} error={errors.budget} />
            <SelectField label="Primary Growth Goal" name="goal" options={goalOptions} className="sm:col-span-2" error={errors.goal} />
          </>
        )}

        {isAudit ? (
          <fieldset className="min-w-0 sm:col-span-2" aria-describedby={errors.channels ? "channels-error" : "channels-hint"}>
            <legend className="text-sm font-medium text-ink">Current Marketing Channels</legend>
            <p id="channels-hint" className="mt-1 text-xs text-muted">Select all that you run today.</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {channelOptions.map((c) => (
                <label key={c} className={chip}>
                  <input
                    type="checkbox"
                    name="channels"
                    value={c}
                    checked={channels.includes(c)}
                    onChange={(e) => toggleChannel(c, e.target.checked)}
                    aria-invalid={errors.channels ? true : undefined}
                    className="sr-only"
                  />
                  {c}
                </label>
              ))}
            </div>
            {errors.channels ? <p id="channels-error" role="alert" className="mt-1.5 text-[0.8125rem] text-danger">{errors.channels}</p> : null}
          </fieldset>
        ) : (
          <fieldset className="min-w-0 sm:col-span-2">
            <legend className="flex w-full items-baseline justify-between text-sm font-medium text-ink">
              Services Interested In <span className="text-xs font-normal text-muted">Optional</span>
            </legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {serviceOptions.map((s) => (
                <label key={s} className={chip}>
                  <input type="checkbox" name="services" value={s} className="sr-only" />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <TextAreaField
          label="Message"
          name="message"
          optional
          maxLength={2000}
          className="sm:col-span-2"
          placeholder={t.messagePlaceholder}
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
          {status === "error" ? message : t.idle}
        </p>
        <Button type="submit" variant="primary" size="lg" disabled={busy} className="shrink-0">
          {busy ? <Loader2 aria-hidden className="animate-spin" /> : null}
          {busy ? "Sending…" : t.submit}
        </Button>
      </div>
    </form>
  );
}
