import type { City, Country, LocationRecord, LocationService } from "@/types";
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

export function locationPath(l: Pick<LocationRecord, "kind" | "slug" | "parent">) {
  return l.kind === "city" ? `/locations/${l.parent}/${l.slug}/` : `/locations/${l.slug}/`;
}

export function getLocationByPath(path: string) {
  return locations.find((l) => locationPath(l) === path);
}

/* ------------------------------------------------------------------
   Service + location pages. Each one must earn its place with content
   that is about that service in that city. Never generate these in bulk.
   ------------------------------------------------------------------ */
export const locationServices: LocationService[] = [
  {
    country: "india",
    city: "gurgaon",
    slug: "seo-services",
    service: "seo-services",
    title: "SEO services in Gurgaon",
    metaDescription:
      "SEO for Gurgaon businesses: B2B, SaaS, real estate and healthcare search strategy built around how buyers in Gurugram and Delhi NCR actually search.",
    intro:
      "Gurgaon concentrates corporate headquarters, technology companies, developers and premium healthcare into a few business districts. The buyers are senior and well informed, and the same handful of competitors appear for most commercial searches. SEO here is less about volume and more about being the most credible result for a small number of valuable queries.",
    localFactors: [
      { title: "Two names, one city", body: "People search for both Gurgaon and Gurugram. Content, profiles and tracking should account for both without duplicating pages." },
      { title: "NCR overlap", body: "Many Gurgaon businesses serve Delhi, Noida and Faridabad. Site structure needs to reflect real service areas instead of a page per place." },
      { title: "B2B density", body: "A large share of demand is company-to-company. Content has to satisfy procurement and leadership readers, not only rank." },
      { title: "Sector and locality terms", body: "Real estate and local services are searched by sector number, road and development name. Those patterns shape the opportunity model." },
    ],
    faqs: [
      { q: "Should our pages target Gurgaon or Gurugram?", a: "Both names are searched, and search engines treat them as the same place. We use one page per topic, name both naturally in the content and profiles, and track the two spellings together. Creating a separate page for each name splits authority and risks duplication." },
      { q: "We serve all of Delhi NCR. Do we need a page for every city?", a: "Only where you have something different to say or a real presence. A clear service-area structure with a few strong pages usually outperforms a page per place. Thin pages that differ only by city name tend not to rank and can weaken the rest of the site." },
      { q: "How is SEO for a B2B company in Gurgaon different?", a: "Search volumes are smaller and each enquiry is worth more, so the plan is built around buyer questions, comparison and evaluation content, and proof. Success is measured in qualified pipeline from organic search, not in traffic." },
      { q: "Do you need to be based in Gurgaon to do this work?", a: "No. SERPMOZ works with Gurgaon businesses remotely. What matters is understanding how local buyers search, which we build into the research, and having access to your analytics, Search Console and sales data." },
    ],
  },
  {
    country: "india",
    city: "gurgaon",
    slug: "ai-seo",
    service: "ai-seo-services",
    title: "AI SEO in Gurgaon",
    metaDescription:
      "AI search optimisation for Gurgaon companies: understand how AI assistants describe and recommend your brand to buyers in Delhi NCR and beyond.",
    intro:
      "Technology and corporate buyers increasingly use AI assistants for vendor research. When someone asks for the leading providers in your category in Delhi NCR, the answer names a short list. We measure whether you are on it, find out which sources the answer drew on and work on the gaps.",
    localFactors: [
      { title: "Location-qualified prompts", body: "We test prompts that include Gurgaon, Gurugram, Delhi NCR and India to see how answers change with geography." },
      { title: "Regional sources", body: "Indian business media, directories and review platforms carry different weight from global ones. The citation strategy reflects that." },
      { title: "Entity clarity", body: "Consistent company details, addresses and leadership information across the web help AI systems describe a local business accurately." },
      { title: "Verification on your site", body: "Careful buyers check an AI answer against the source. The page they land on has to confirm what the assistant said." },
    ],
    faqs: [
      { q: "Can you make an AI assistant recommend our company?", a: "No one can guarantee that. AI answers change between runs and platforms. What we can do is measure how often and how accurately you appear for the questions your buyers ask, find out which sources those answers draw on, and strengthen your presence there." },
      { q: "Do AI answers change when the question mentions Gurgaon or Delhi NCR?", a: "Often, yes. Adding a place tends to change which companies are named and which sources are cited. That is why we test prompts with and without Gurgaon, Gurugram, Delhi NCR and India, and report them separately." },
      { q: "Is this separate from SEO?", a: "It builds on it. Assistants rely heavily on content that search engines can already crawl and trust. We plan AI visibility alongside SEO so the same pages, facts and citations serve both." },
      { q: "How do you measure progress?", a: "By running a fixed set of buyer questions across the main assistants at regular intervals and recording whether you are named, how you are described and which sources are cited. Results are reported as ranges, because individual answers vary." },
    ],
  },
];


export function getLocationService(country: string, city: string, slug: string) {
  return locationServices.find((l) => l.country === country && l.city === city && l.slug === slug);
}

export const locationServicesIn = (country: string, city: string) => locationServices.filter((l) => l.country === country && l.city === city);

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
