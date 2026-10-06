import { z } from "zod";

/** Options shared by the form UI and the server-side validator. */
export const budgetOptions = [
  "Not sure yet",
  "Under ₹1L / $1.5k per month",
  "₹1L to ₹5L / $1.5k to $6k per month",
  "₹5L to ₹15L / $6k to $18k per month",
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

/** The five service categories, plus the specifics people ask for by name. */
export const serviceOptions = [
  "SEO",
  "AI Search (AEO/GEO)",
  "Local SEO",
  "Paid Media",
  "Social Media",
  "Content",
  "CRO",
  "Marketing Automation",
  "Web Development",
  "Not sure yet",
] as const;

/** Channels a business already runs. Asked on the growth audit form only. */
export const channelOptions = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "LinkedIn",
  "Social Media",
  "Content",
  "Email",
  "WhatsApp",
  "Marketplaces",
  "None yet",
] as const;

export const NO_CHANNELS = "None yet" satisfies (typeof channelOptions)[number];

/** The two public forms. Sent as `form` in the request body. */
export const formKinds = ["contact", "audit"] as const;
export type FormKind = (typeof formKinds)[number];

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

const websiteMessage = "Enter a valid website address, for example yourcompany.com.";

const isWebUrl = (v: string) => {
  try {
    const u = new URL(v);
    return /^https?:$/.test(u.protocol) && /^[^.\s]+(\.[^.\s]+)+$/.test(u.hostname);
  } catch {
    return false;
  }
};

const withProtocol = (v: string) => (v && !/^https?:\/\//i.test(v) ? `https://${v}` : v);

/** Optional on the contact form. */
const website = z
  .string()
  .default("")
  .transform((v) => withProtocol(sanitize(v)))
  .refine((v) => !v || isWebUrl(v), websiteMessage);

/** Required on the audit form: the site is what gets reviewed. */
const websiteRequired = z
  .string("Enter the website you would like reviewed.")
  .transform((v) => withProtocol(sanitize(v)))
  .refine((v) => v.length > 0, "Enter the website you would like reviewed.")
  .refine((v) => !v || isWebUrl(v), websiteMessage);

/** Fields both forms share, validated and sanitised the same way. */
const shared = {
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
    .pipe(z.email("Enter a valid email address.").max(160)),
  phone: z.string(required).transform(sanitize),
  country: z.enum(countryOptions, "Select your country."),
  industry: text(80).pipe(z.string().min(2, "Select your industry.")),
  goal: z.enum(goalOptions, "Select your primary growth goal."),
  message: text(2000).default(""),
  consent: z.literal(true, "Please confirm so we can reply to you."),
};

type IssueSink = { addIssue: (issue: { code: "custom"; path: string[]; message: string }) => void };

/** Phone depends on country, so it is checked once both are known. Returns +E.164 or null. */
function checkPhone(data: { phone: string; country: string }, ctx: IssueSink) {
  const normalized = normalizePhone(data.phone, data.country);
  if (!normalized) ctx.addIssue({ code: "custom", path: ["phone"], message: phoneMessage(data.country) });
  return normalized;
}

/** /contact/ : a general enquiry, with budget and services of interest. */
export const contactSchema = z
  .object({
    ...shared,
    website,
    budget: z.enum(budgetOptions, "Select a budget range."),
    services: z.array(z.enum(serviceOptions)).max(serviceOptions.length).default([]),
  })
  .transform((data, ctx) => {
    const phone = checkPhone(data, ctx);
    return phone ? { ...data, phone } : z.NEVER;
  });

/** /growth-audit/ : a request for the audit, with the channels already in use. */
export const growthAuditSchema = z
  .object({
    ...shared,
    website: websiteRequired,
    channels: z
      .array(z.enum(channelOptions), "Select the channels you use, or choose None yet.")
      .min(1, "Select the channels you use, or choose None yet.")
      .max(channelOptions.length),
  })
  .transform((data, ctx) => {
    const phone = checkPhone(data, ctx);
    if (!phone) return z.NEVER;
    // De-duplicate, and "None yet" only stands when nothing else is selected.
    const unique = [...new Set(data.channels)];
    const channels = unique.length > 1 ? unique.filter((c) => c !== NO_CHANNELS) : unique;
    return { ...data, phone, channels };
  });

/**
 * Kept under its original name for existing imports. This is the contact form
 * schema; the audit request form uses `growthAuditSchema`.
 */
export const auditSchema = contactSchema;

export const formSchemas = { contact: contactSchema, audit: growthAuditSchema } as const;

export type ContactInput = z.input<typeof contactSchema>;
export type ContactSubmission = z.output<typeof contactSchema>;
export type GrowthAuditInput = z.input<typeof growthAuditSchema>;
export type GrowthAuditSubmission = z.output<typeof growthAuditSchema>;

/** A validated submission, tagged with the form it came from. */
export type FormSubmission =
  | ({ form: "contact" } & ContactSubmission)
  | ({ form: "audit" } & GrowthAuditSubmission);

export type AuditInput = ContactInput;
export type AuditSubmission = ContactSubmission;
export type AuditField = keyof ContactSubmission | keyof GrowthAuditSubmission;

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

/** Reads the `form` discriminator from a request body. Absent means the contact form. */
export function parseFormKind(value: unknown): FormKind | null {
  if (value === undefined || value === null || value === "") return "contact";
  return typeof value === "string" && (formKinds as readonly string[]).includes(value) ? (value as FormKind) : null;
}

/** Validates a body against the schema for its form and tags the result. */
export function validateSubmission(
  form: FormKind,
  data: unknown,
): { ok: true; submission: FormSubmission } | { ok: false; fieldErrors: Partial<Record<AuditField, string>> } {
  if (form === "audit") {
    const parsed = growthAuditSchema.safeParse(data);
    return parsed.success
      ? { ok: true, submission: { form, ...parsed.data } }
      : { ok: false, fieldErrors: fieldErrorsFrom(parsed.error) };
  }
  const parsed = contactSchema.safeParse(data);
  return parsed.success
    ? { ok: true, submission: { form, ...parsed.data } }
    : { ok: false, fieldErrors: fieldErrorsFrom(parsed.error) };
}
