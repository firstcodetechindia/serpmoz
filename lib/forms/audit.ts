import { z } from "zod";

/** Options shared by the form UI and the server-side validator. */
export const budgetOptions = [
  "Not sure yet",
  "Under ₹1L / $1.5k per month",
  "₹1L–₹5L / $1.5k–$6k per month",
  "₹5L–₹15L / $6k–$18k per month",
  "₹15L+ / $18k+ per month",
] as const;

export const goalOptions = [
  "More qualified leads",
  "More online revenue",
  "Visibility in AI search",
  "Lower acquisition cost",
  "Enter a new market",
  "Fix measurement and attribution",
  "Something else",
] as const;

export const serviceOptions = [
  "SEO & Search",
  "AI Search",
  "Local & Maps",
  "Performance Marketing",
  "Social & Content",
  "CRO & Conversion",
  "Marketing Automation",
  "Web & Digital",
  "GrowthOS",
] as const;

export const countryOptions = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Singapore",
  "Europe",
  "Other",
] as const;

/** Strip control characters and angle brackets, collapse whitespace. */
export function sanitize(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

const required = "This field is required.";

const text = (max: number) => z.string(required).transform(sanitize).pipe(z.string().max(max, `Keep this under ${max} characters.`));

/**
 * Country-aware phone rules. `pattern` is tested against the national number
 * (country code and trunk zero removed). Markets without a rule fall back to
 * the E.164 length check.
 */
export const phoneRules: Partial<Record<(typeof countryOptions)[number], { code: string; pattern: RegExp; example: string; hint: string }>> = {
  India: { code: "91", pattern: /^[6-9]\d{9}$/, example: "+91 98765 43210", hint: "10-digit mobile number." },
  "United States": { code: "1", pattern: /^[2-9]\d{2}[2-9]\d{6}$/, example: "+1 415 555 0132", hint: "10-digit number including area code." },
  Canada: { code: "1", pattern: /^[2-9]\d{2}[2-9]\d{6}$/, example: "+1 416 555 0132", hint: "10-digit number including area code." },
  "United Kingdom": { code: "44", pattern: /^[1237]\d{8,9}$/, example: "+44 7700 900123", hint: "Mobile or landline, without the leading 0." },
  "United Arab Emirates": { code: "971", pattern: /^(5\d{8}|[2-4679]\d{7})$/, example: "+971 50 123 4567", hint: "Mobile or landline, without the leading 0." },
  Australia: { code: "61", pattern: /^[2-478]\d{8}$/, example: "+61 412 345 678", hint: "9 digits after the country code." },
  Singapore: { code: "65", pattern: /^[3689]\d{7}$/, example: "+65 8123 4567", hint: "8-digit number." },
};

/** Validates a phone number for a country and returns it in +E.164 form, or null. */
export function normalizePhone(raw: string, country?: string): string | null {
  const value = sanitize(raw);
  if (!/^\+?[0-9\s().-]{7,24}$/.test(value)) return null;
  const international = value.startsWith("+") || value.startsWith("00");
  let digits = value.replace(/\D/g, "").replace(/^00/, "");
  const rule = phoneRules[country as keyof typeof phoneRules];

  if (!rule) return digits.length >= 7 && digits.length <= 15 ? `+${digits}` : null;

  if (international || (digits.startsWith(rule.code) && digits.length > 10)) {
    if (!digits.startsWith(rule.code)) return null; // an international prefix for a different country
    digits = digits.slice(rule.code.length);
  }
  digits = digits.replace(/^0/, "");
  return rule.pattern.test(digits) ? `+${rule.code}${digits}` : null;
}

const phoneMessage = (country?: string) => {
  const rule = phoneRules[country as keyof typeof phoneRules];
  return rule ? `Enter a valid phone number for ${country}, for example ${rule.example}.` : "Enter a valid phone number, including country code.";
};

const website = z
  .string()
  .default("")
  .transform((v) => sanitize(v))
  .transform((v) => (v && !/^https?:\/\//i.test(v) ? `https://${v}` : v))
  .refine((v) => {
    if (!v) return true;
    try {
      const u = new URL(v);
      return /^https?:$/.test(u.protocol) && /^[^.\s]+(\.[^.\s]+)+$/.test(u.hostname);
    } catch {
      return false;
    }
  }, "Enter a valid website address, for example yourcompany.com.");

export const auditSchema = z.object({
  fullName: text(80).pipe(
    z
      .string()
      .min(2, "Enter your full name.")
      .regex(/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u, "Use letters, spaces, hyphens and apostrophes only."),
  ),
  businessName: text(120).pipe(z.string().min(2, "Enter your business name.")),
  email: z
    .string(required)
    .transform((v) => sanitize(v).toLowerCase())
    .pipe(z.email("Enter a valid work email address.").max(160)),
  phone: z.string(required).transform(sanitize),
  website,
  country: z.enum(countryOptions, "Select your country."),
  industry: text(80).pipe(z.string().min(2, "Select your industry.")),
  budget: z.enum(budgetOptions, "Select a budget range."),
  goal: z.enum(goalOptions, "Select your primary growth goal."),
  services: z.array(z.enum(serviceOptions)).max(serviceOptions.length).default([]),
  message: text(2000).default(""),
  consent: z.literal(true, "Please confirm so we can reply to you."),
}).transform((data, ctx) => {
  // Phone depends on country, so it is checked once both are known.
  const normalized = normalizePhone(data.phone, data.country);
  if (!normalized) {
    ctx.addIssue({ code: "custom", path: ["phone"], message: phoneMessage(data.country) });
    return z.NEVER;
  }
  return { ...data, phone: normalized };
});

export type AuditInput = z.input<typeof auditSchema>;
export type AuditSubmission = z.output<typeof auditSchema>;
export type AuditField = keyof AuditSubmission;

export type AuditResponse =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Partial<Record<AuditField, string>> };

export function fieldErrorsFrom(error: z.ZodError): Partial<Record<AuditField, string>> {
  const out: Partial<Record<AuditField, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as AuditField | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
