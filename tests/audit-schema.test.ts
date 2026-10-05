import assert from "node:assert/strict";
import { test } from "node:test";
import { auditSchema, normalizePhone, sanitize } from "../lib/forms/audit.ts";

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
  services: ["AI Search"],
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
