import assert from "node:assert/strict";
import { test } from "node:test";
import { auditSchema, contactSchema, growthAuditSchema, normalizePhone, parseFormKind, sanitize, validateSubmission } from "../lib/forms/audit.ts";

const valid = {
  fullName: "Asha Rao",
  businessName: "Example Pvt Ltd",
  email: "Asha@Example.com",
  phone: "+91 98765 43210",
  website: "example.com",
  country: "India",
  industry: "SaaS",
  budget: "Not sure yet",
  goal: "More qualified leads",
  services: ["AI Search (AEO/GEO)"],
  message: "Hello",
  consent: true,
};

test("accepts a complete submission and normalises it", () => {
  const out = auditSchema.parse(valid);
  assert.equal(out.email, "asha@example.com");
  assert.equal(out.website, "https://example.com");
});

test("strips markup and control characters", () => {
  assert.equal(sanitize("  <b>Hi</b>\u0000  there "), "bHi/b there");
  assert.equal(auditSchema.safeParse({ ...valid, fullName: "<script>Asha</script>" }).success, false);
  assert.equal(auditSchema.safeParse({ ...valid, fullName: "Asha; DROP TABLE" }).success, false);
  assert.equal(auditSchema.parse({ ...valid, fullName: "Seán O’Brien-Rao" }).fullName, "Seán O’Brien-Rao");
  const out = auditSchema.parse({ ...valid, message: "<img src=x onerror=alert(1)> hello" });
  assert.ok(!/[<>]/.test(out.message));
});

test("rejects bad email, phone and website", () => {
  for (const patch of [{ email: "nope" }, { phone: "12" }, { phone: "call me" }, { website: "javascript:alert(1)" }]) {
    assert.equal(auditSchema.safeParse({ ...valid, ...patch }).success, false, JSON.stringify(patch));
  }
});

test("requires consent and known option values", () => {
  assert.equal(auditSchema.safeParse({ ...valid, consent: false }).success, false);
  assert.equal(auditSchema.safeParse({ ...valid, country: "Atlantis" }).success, false);
  assert.equal(auditSchema.safeParse({ ...valid, services: ["Free backlinks"] }).success, false);
});

test("validates phone numbers by country and normalises to E.164", () => {
  assert.equal(normalizePhone("98765 43210", "India"), "+919876543210");
  assert.equal(normalizePhone("+91 98765 43210", "India"), "+919876543210");
  assert.equal(normalizePhone("09876543210", "India"), "+919876543210");
  assert.equal(normalizePhone("12345 67890", "India"), null); // Indian mobiles start 6-9
  assert.equal(normalizePhone("98765 4321", "India"), null); // nine digits
  assert.equal(normalizePhone("+44 7700 900123", "India"), null); // wrong country code
  assert.equal(normalizePhone("(415) 555-0132", "United States"), "+14155550132");
  assert.equal(normalizePhone("07700 900123", "United Kingdom"), "+447700900123");
  assert.equal(normalizePhone("050 123 4567", "United Arab Emirates"), "+971501234567");
  assert.equal(normalizePhone("8123 4567", "Singapore"), "+6581234567");
  assert.equal(normalizePhone("+49 30 901820", "Europe"), "+4930901820");
  assert.equal(auditSchema.parse(valid).phone, "+919876543210");
  assert.equal(auditSchema.safeParse({ ...valid, phone: "12345" }).success, false);
});

const validAudit = {
  fullName: "Asha Rao",
  businessName: "Example Pvt Ltd",
  email: "Asha@Example.com",
  phone: "98765 43210",
  website: "example.com",
  country: "India",
  industry: "SaaS",
  goal: "Visibility in AI search",
  channels: ["SEO", "Google Ads"],
  message: "",
  consent: true,
};

test("contact form: service options are current and GrowthOS is not one of them", () => {
  assert.equal(auditSchema, contactSchema);
  assert.equal(contactSchema.safeParse({ ...valid, services: ["Web Development", "Not sure yet"] }).success, true);
  assert.equal(contactSchema.safeParse({ ...valid, services: ["GrowthOS"] }).success, false);
  assert.equal(contactSchema.safeParse({ ...valid, budget: undefined }).success, false);
});

test("audit form: accepts a complete request and normalises it", () => {
  const out = growthAuditSchema.parse(validAudit);
  assert.equal(out.email, "asha@example.com");
  assert.equal(out.website, "https://example.com");
  assert.equal(out.phone, "+919876543210");
  assert.deepEqual(out.channels, ["SEO", "Google Ads"]);
  assert.equal(out.message, "");
  assert.ok(!("budget" in out) && !("services" in out));
});

test("audit form: message is optional, everything else is required", () => {
  const without = (key: keyof typeof validAudit) => Object.fromEntries(Object.entries(validAudit).filter(([k]) => k !== key));
  assert.equal(growthAuditSchema.safeParse(without("message")).success, true);
  for (const key of ["fullName", "businessName", "email", "phone", "website", "country", "industry", "goal", "channels", "consent"] as const) {
    assert.equal(growthAuditSchema.safeParse(without(key)).success, false, key);
  }
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, website: "" }).success, false);
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, website: "javascript:alert(1)" }).success, false);
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, consent: false }).success, false);
});

test("audit form: channels must be known, non-empty, and None yet stands alone", () => {
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, channels: [] }).success, false);
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, channels: ["Billboards"] }).success, false);
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, channels: "SEO" }).success, false);
  assert.deepEqual(growthAuditSchema.parse({ ...validAudit, channels: ["None yet"] }).channels, ["None yet"]);
  assert.deepEqual(growthAuditSchema.parse({ ...validAudit, channels: ["None yet", "Email", "Email"] }).channels, ["Email"]);
});

test("audit form: shares sanitisation and country-aware phone rules", () => {
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, fullName: "<script>Asha</script>" }).success, false);
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, phone: "12345 67890" }).success, false); // Indian mobiles start 6-9
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, phone: "98765 4321" }).success, false); // nine digits
  assert.equal(growthAuditSchema.safeParse({ ...validAudit, phone: "+44 7700 900123" }).success, false); // wrong country
  assert.equal(growthAuditSchema.parse({ ...validAudit, country: "United Kingdom", phone: "07700 900123" }).phone, "+447700900123");
  const out = growthAuditSchema.parse({ ...validAudit, message: "<img src=x onerror=alert(1)> hello" });
  assert.ok(!/[<>]/.test(out.message));
});

test("form discriminator selects the schema", () => {
  assert.equal(parseFormKind(undefined), "contact");
  assert.equal(parseFormKind("contact"), "contact");
  assert.equal(parseFormKind("audit"), "audit");
  assert.equal(parseFormKind("newsletter"), null);
  assert.equal(parseFormKind(1), null);

  const audit = validateSubmission("audit", validAudit);
  assert.ok(audit.ok && audit.submission.form === "audit");
  const contact = validateSubmission("contact", valid);
  assert.ok(contact.ok && contact.submission.form === "contact");

  // A contact body is not a valid audit request, and the reverse.
  const wrong = validateSubmission("audit", valid);
  assert.ok(!wrong.ok && wrong.fieldErrors.channels);
  const reverse = validateSubmission("contact", validAudit);
  assert.ok(!reverse.ok && reverse.fieldErrors.budget);
});
