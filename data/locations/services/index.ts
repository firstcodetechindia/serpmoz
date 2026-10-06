import { getIndustry } from "@/data/industries";
import { getLocation } from "@/data/locations";
import { getService } from "@/data/services";
import type { LocalServicePage } from "@/types";
import { pages as australia } from "./australia";
import { pages as bangalore } from "./bangalore";
import { pages as canada } from "./canada";
import { pages as delhi } from "./delhi";
import { pages as dubai } from "./dubai";
import { pages as europe } from "./europe";
import { pages as gurgaon } from "./gurgaon";
import { pages as hyderabad } from "./hyderabad";
import { pages as india } from "./india";
import { pages as jaipur } from "./jaipur";
import { pages as london } from "./london";
import { pages as mumbai } from "./mumbai";
import { pages as newYork } from "./new-york";
import { pages as noida } from "./noida";
import { pages as pune } from "./pune";
import { pages as singapore } from "./singapore";
import { pages as sydney } from "./sydney";
import { pages as toronto } from "./toronto";
import { pages as uae } from "./uae";
import { pages as uk } from "./uk";
import { pages as usa } from "./usa";

/**
 * One service in one place ("Local SEO in Delhi"), at /{service}-{place}/.
 * To add one: add a page object to the place's file here (or a new file for a
 * new place) and list the service on that place's location record. The page,
 * its links from the place and the service, schema and sitemap entry follow.
 * Never generate these from a template: each must be written for its pairing.
 */
export const localServices: LocalServicePage[] = [
  ...india, ...delhi, ...gurgaon, ...noida, ...mumbai, ...bangalore, ...hyderabad, ...pune, ...jaipur, ...usa, ...newYork, ...uk, ...london, ...uae, ...dubai, ...canada, ...toronto, ...australia, ...sydney, ...singapore, ...europe,
];

/** The flat URL: service first, then place. */
export const localServiceSlug = (p: Pick<LocalServicePage, "service" | "place">) => `${p.service}-${p.place}`;
export const localServicePath = (p: Pick<LocalServicePage, "service" | "place">) => `/${localServiceSlug(p)}/`;

// A page that points at a missing place, service or sector, or repeats a title, stops the build.
{
  const problems: string[] = [];
  const seen = new Map<string, string>();
  for (const p of localServices) {
    const at = localServicePath(p);
    const fail = (message: string) => problems.push(`${at}: ${message}`);
    if (!getLocation(p.place)) fail(`unknown place "${p.place}"`);
    if (!getService(p.service)) fail(`unknown service "${p.service}"`);
    for (const s of p.sectors) if (!getIndustry(s.slug)) fail(`unknown sector "${s.slug}"`);
    for (const [kind, value] of [["path", at], ["title", p.seo.title], ["h1", p.h1], ["description", p.seo.metaDescription], ["keyword", p.seo.primaryKeyword]] as const) {
      const key = `${kind}:${value}`;
      if (seen.has(key)) fail(`${kind} duplicates ${seen.get(key)}`);
      seen.set(key, at);
    }
    if (p.seo.title.length > 46) fail(`seo.title is ${p.seo.title.length} characters (46 at most)`);
    if (p.seo.metaDescription.length < 120 || p.seo.metaDescription.length > 160) fail(`metaDescription is ${p.seo.metaDescription.length} characters (120 to 160)`);
    if (p.h1 === p.seo.title) fail("h1 repeats the title");
    if (p.searches.length !== 3 || p.localFactors.length !== 4 || p.sectors.length !== 3) fail("needs 3 searches, 4 local factors and 3 sectors");
    if (p.areas.length < 4) fail("needs at least four areas");
    if (p.faqs.length < 5) fail("needs at least five FAQs");
    if (!/remote/i.test(p.intro)) fail("intro must say the work is delivered remotely");
  }
  if (problems.length) throw new Error(`Local service pages failed validation:\n- ${problems.join("\n- ")}`);
}

export const getLocalService = (service: string, place: string) => localServices.find((p) => p.service === service && p.place === place);
/** Pages written for one place. */
export const localServicesIn = (place: string) => localServices.filter((p) => p.place === place);
/** Pages written about one service, across places. */
export const localServicesFor = (service: string) => localServices.filter((p) => p.service === service);
