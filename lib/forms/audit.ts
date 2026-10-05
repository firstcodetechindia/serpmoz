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

const phone = z
  .string(required)
  .transform((v) => sanitize(v))
  .refine((v) => /^\+?[0-9\s().-]{7,22}$/.test(v), "Enter a valid phone number, including country code.")
  .refine((v) => {
    const digits = v.replace(/\D/g, "").length;
    return digits >= 7 && digits <= 15;
  }, "Enter a valid phone number, including country code.");

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
  fullName: text(80).pipe(z.string().min(2, "Enter your full name.")),
  businessName: text(120).pipe(z.string().min(2, "Enter your business name.")),
  email: z
    .string(required)
    .transform((v) => sanitize(v).toLowerCase())
    .pipe(z.email("Enter a valid work email address.").max(160)),
  phone,
  website,
  country: z.enum(countryOptions, "Select your country."),
  industry: text(80).pipe(z.string().min(2, "Select your industry.")),
  budget: z.enum(budgetOptions, "Select a budget range."),
  goal: z.enum(goalOptions, "Select your primary growth goal."),
  services: z.array(z.enum(serviceOptions)).max(serviceOptions.length).default([]),
  message: text(2000).default(""),
  consent: z.literal(true, "Please confirm so we can reply to you."),
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
