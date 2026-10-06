import type { City, Country, LocationRecord } from "@/types";
import { validateLocations } from "./validate";
import { location as india } from "./records/india";
import { location as usa } from "./records/usa";
import { location as uk } from "./records/uk";
import { location as uae } from "./records/uae";
import { location as canada } from "./records/canada";
import { location as australia } from "./records/australia";
import { location as singapore } from "./records/singapore";
import { location as europe } from "./records/europe";
import { location as indiaDelhi } from "./records/india-delhi";
import { location as indiaGurgaon } from "./records/india-gurgaon";
import { location as indiaNoida } from "./records/india-noida";
import { location as indiaMumbai } from "./records/india-mumbai";
import { location as indiaBangalore } from "./records/india-bangalore";
import { location as indiaHyderabad } from "./records/india-hyderabad";
import { location as indiaPune } from "./records/india-pune";
import { location as indiaJaipur } from "./records/india-jaipur";
import { location as uaeDubai } from "./records/uae-dubai";
import { location as ukLondon } from "./records/uk-london";
import { location as usaNewYork } from "./records/usa-new-york";
import { location as canadaToronto } from "./records/canada-toronto";
import { location as australiaSydney } from "./records/australia-sydney";

/**
 * The location engine's registry. To add a location, write a record in
 * ./records/, import it here and add it to the list. The route, map
 * highlight, breadcrumbs, metadata, schema, related links and sitemap entry
 * all follow from the record. See docs/LOCATION_ARCHITECTURE.md.
 *
 * A page exists only where there is something specific to say about competing
 * in that market. Do not add records that differ only by place name.
 */
export const locations: LocationRecord[] = [
  india, usa, uk, uae, canada, australia, singapore, europe, indiaDelhi, indiaGurgaon, indiaNoida, indiaMumbai, indiaBangalore, indiaHyderabad, indiaPune, indiaJaipur, uaeDubai, ukLondon, usaNewYork, canadaToronto, australiaSydney,
];

validateLocations(locations);

/** Countries and multi-country regions, in display order. */
export const markets = locations.filter((l) => l.kind !== "city");

export const citiesOf = (market: string) => locations.filter((l) => l.kind === "city" && l.parent === market);

export function getMarket(slug: string) {
  return markets.find((l) => l.slug === slug);
}

export function getCityRecord(market: string, city: string) {
  return locations.find((l) => l.kind === "city" && l.parent === market && l.slug === city);
}

/**
 * Every place has one flat, keyword-first URL: /digital-marketing-agency-{place}/.
 * The hierarchy (country, then city) lives in the breadcrumbs and links, not in the path.
 */
export const LOCATION_PREFIX = "digital-marketing-agency-";
export function locationPath(l: Pick<LocationRecord, "slug">) {
  return `/${LOCATION_PREFIX}${l.slug}/`;
}

/** A place by its own slug ("delhi", "india"). Slugs are unique across markets and cities. */
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export function getLocationByPath(path: string) {
  return locations.find((l) => locationPath(l) === path);
}

/* ------------------------------------------------------------------
   Compact views for the homepage, menus and service pages.
   ------------------------------------------------------------------ */
const asCity = (l: LocationRecord): City => ({
  slug: l.slug,
  name: l.name,
  context: l.hero.description,
  considerations: l.considerations.map((c) => c.title),
  services: l.services.map((s) => s.slug),
  industries: l.industries.map((i) => i.slug),
});

export const countries: Country[] = markets.map((l) => ({
  slug: l.slug,
  name: l.name,
  short: l.code,
  context: l.hero.description,
  considerations: l.considerations,
  services: l.services.map((s) => s.slug),
  industries: l.industries.map((i) => i.slug),
  cities: citiesOf(l.slug).map(asCity),
}));

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getCity(country: string, city: string) {
  return getCountry(country)?.cities.find((c) => c.slug === city);
}

export const featuredCities = countries.flatMap((c) => c.cities.map((city) => ({ ...city, country: c.slug, countryName: c.name })));
