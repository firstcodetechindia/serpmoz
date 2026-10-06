import { photos } from "@/data/images";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import type { LocationRecord } from "@/types";
import { marketShapes } from "./geo.generated";

/**
 * Checks every location record when the registry loads. A record that fails
 * stops the build, so an incomplete or duplicated location page can never be
 * published by accident. See docs/LOCATION_ARCHITECTURE.md for the rules.
 */
export function validateLocations(all: LocationRecord[]) {
  const problems: string[] = [];
  const pathOf = (l: LocationRecord) => `/digital-marketing-agency-${l.slug}/`;
  const paths = new Set(all.map(pathOf));
  const seen = { title: new Map<string, string>(), description: new Map<string, string>(), h1: new Map<string, string>() };

  for (const l of all) {
    const at = pathOf(l);
    const fail = (message: string) => problems.push(`${at}: ${message}`);
    const unique = (kind: keyof typeof seen, value: string) => {
      const other = seen[kind].get(value);
      if (other) fail(`${kind} duplicates ${other}`);
      seen[kind].set(value, at);
    };

    if (all.filter((x) => x.slug === l.slug).length > 1) fail("slug is not unique; every place needs its own");

    // Geography and map
    if (!(l.latitude >= -90 && l.latitude <= 90 && l.longitude >= -180 && l.longitude <= 180)) fail("coordinates missing or out of range");
    if (!marketShapes[l.market]) fail(`no map outline for market "${l.market}"; add it to scripts/build-location-geo.mjs`);
    if (l.kind === "city" && !all.some((m) => m.kind !== "city" && m.slug === l.parent)) fail(`parent "${l.parent}" is not a market`);
    if (l.kind !== "region" && !l.countryCode) fail("countryCode missing");

    // Page essentials
    if (!l.hero.title || !l.hero.description) fail("hero title or description missing");
    if (!l.cta.title || !l.cta.body) fail("call to action missing");
    if (l.facts.length !== 4) fail("needs exactly four facts");
    if (!(l.photo in photos)) fail(`photo "${l.photo}" is not in data/images.ts`);

    // SEO
    unique("title", l.seo.title);
    unique("description", l.seo.metaDescription);
    unique("h1", l.hero.title);
    if (l.seo.title.length > 46) fail(`seo.title is ${l.seo.title.length} characters (46 at most)`);
    if (l.seo.metaDescription.length < 120 || l.seo.metaDescription.length > 160) fail(`metaDescription is ${l.seo.metaDescription.length} characters (120 to 160)`);
    if (!l.seo.primaryKeyword) fail("primaryKeyword missing");

    // Relationships
    if (l.services.length < 4) fail("needs at least four services");
    for (const s of l.services) if (!getService(s.slug)) fail(`unknown service "${s.slug}"`);
    if (l.industries.length < 3) fail("needs at least three industries");
    for (const i of l.industries) if (!getIndustry(i.slug)) fail(`unknown industry "${i.slug}"`);
    const children = all.filter((c) => c.kind === "city" && c.parent === l.slug).length;
    if (!l.related.length && !children) fail("needs related locations");
    for (const r of l.related) {
      if (r === at) fail("links to itself in related");
      else if (!paths.has(r)) fail(`related location ${r} does not exist`);
    }
    for (const n of l.nearby ?? []) if (!all.some((c) => c.kind === "city" && c.parent === l.parent && c.slug === n)) fail(`nearby city "${n}" does not exist in ${l.parent}`);

    // Content depth
    if (l.faqs.length < 5) fail("needs at least five FAQs");
    if (l.overview.paragraphs.length < 3) fail("overview needs at least three paragraphs");
    if (l.discovery.channels.length < 4) fail("needs at least four discovery channels");
    if (l.kind === "city" && !l.local) fail("city pages need a local search section");
  }

  if (problems.length) throw new Error(`Location records failed validation:\n- ${problems.join("\n- ")}`);
}
