import assert from "node:assert/strict";
import { test } from "node:test";
import { getLocationByPath, locationPath, locations, locationServices, markets, citiesOf } from "../data/locations/index.ts";
import { marketShapes, projectWorld } from "../data/locations/geo.generated.ts";
import { validateLocations } from "../data/locations/validate.ts";
import { sitemapGroups } from "../lib/seo/sitemap.ts";
import { getService } from "../data/services/index.ts";
import { getIndustry } from "../data/industries/index.ts";
import { getCaseStudy } from "../data/case-studies.ts";
import { articles } from "../data/resources/index.ts";

const sitemap = new Set(Object.values(sitemapGroups).flatMap((group) => group().map((e) => e.path)));
const noindexButReal = (path: string) => path.startsWith("/case-studies/") && getCaseStudy(path.split("/")[2]) !== undefined;

test("every record passes the publishing rules", () => {
  assert.doesNotThrow(() => validateLocations(locations));
});

test("the rules reject an incomplete or duplicated record", () => {
  const india = locations.find((l) => l.slug === "india")!;
  assert.throws(() => validateLocations([...locations, { ...india, slug: "copy" }]), /duplicates/);
  assert.throws(() => validateLocations([{ ...india, latitude: 200 }]), /coordinates/);
  assert.throws(() => validateLocations([{ ...india, faqs: india.faqs.slice(0, 2) }]), /FAQs/);
  assert.throws(() => validateLocations([{ ...india, market: "atlantis" }]), /map outline/);
});

test("every location has a map outline and its marker falls inside the market's box", () => {
  for (const l of locations) {
    const { lens } = marketShapes[l.market];
    assert.ok(lens.d.length > 20, `${l.slug} outline`);
    if (l.kind !== "city") continue;
    const x = (l.longitude - lens.lonMin) * lens.kx, y = (lens.latMax - l.latitude) * lens.ky;
    assert.ok(x >= 0 && x <= lens.w && y >= 0 && y <= lens.h, `${l.slug} sits outside the outline of ${l.market}`);
    const [wx, wy] = projectWorld(l.longitude, l.latitude);
    assert.ok(wx > 0 && wx < 1000 && wy > 0 && wy < 371, `${l.slug} is off the world map`);
  }
});

test("every location page, and every service and location page, is in the sitemap", () => {
  for (const l of locations) assert.ok(sitemap.has(locationPath(l)), locationPath(l));
  for (const s of locationServices) assert.ok(sitemap.has(`/locations/${s.country}/${s.city}/${s.slug}/`), s.slug);
});

test("paths resolve back to their record", () => {
  for (const l of locations) assert.equal(getLocationByPath(locationPath(l)), l);
  for (const m of markets) for (const c of citiesOf(m.slug)) assert.equal(c.parent, m.slug);
});

test("services, industries, case studies and resources on a location all exist", () => {
  const articleSlugs = new Set(articles.map((a) => a.slug));
  for (const l of locations) {
    for (const s of l.services) assert.ok(getService(s.slug), `${l.slug}: service ${s.slug}`);
    for (const i of l.industries) assert.ok(getIndustry(i.slug), `${l.slug}: industry ${i.slug}`);
    for (const c of l.caseStudies) assert.ok(getCaseStudy(c), `${l.slug}: case study ${c}`);
    for (const r of l.resources) assert.ok(articleSlugs.has(r), `${l.slug}: resource ${r}`);
  }
});

test("links written inside location copy point at real pages", () => {
  for (const l of locations) {
    for (const [, path] of JSON.stringify(l).matchAll(/\]\((\/[^)\s]*)\)/g)) {
      assert.ok(sitemap.has(path) || noindexButReal(path), `${l.slug}: ${path}`);
      assert.notEqual(path, locationPath(l), `${l.slug} links to itself`);
    }
  }
});

test("no location copy claims an office or uses a guarantee", () => {
  for (const l of locations) {
    const text = JSON.stringify(l);
    assert.doesNotMatch(text, /\bour [A-Za-z ]{0,20}office\b/i, `${l.slug}: office claim`);
    assert.doesNotMatch(text, /\b(we guarantee|guaranteed (rankings|results)|#1 agency|best agency|leading agency)\b/i, `${l.slug}: claim`);
  }
});
