import assert from "node:assert/strict";
import { test } from "node:test";
import { auditSchema, sanitize } from "../lib/forms/audit.ts";

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
  const out = auditSchema.parse({ ...valid, fullName: "<script>Asha</script>" });
  assert.ok(!/[<>]/.test(out.fullName));
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
