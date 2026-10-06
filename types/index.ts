export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** Short code shown in place of an icon, e.g. a country code */
  badge?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  /** Short line shown at the top of the mega menu panel */
  summary?: string;
  links?: NavLink[];
  /** Titled columns, for menus too large for one list */
  columns?: { id: string; title: string; href: string; description: string; links: NavLink[] }[];
  /** Label for the link back to the section index */
  all?: string;
};

export type Service = {
  slug: string;
  /** Short name for navigation and cards */
  name: string;
  /** Page H1 */
  title: string;
  /** Meta title (without brand suffix) */
  metaTitle: string;
  metaDescription: string;
  category: ServiceCategoryId;
  /** One-sentence positioning statement */
  summary: string;
  /** Opening paragraph on the service page */
  intro: string;
  /** The business problem this service addresses */
  problems: string[];
  /** What the engagement covers */
  scope: { title: string; body: string }[];
  /** What AI accelerates vs. what experts decide for this service */
  ai: string[];
  experts: string[];
  /** Outcomes we measure – names of metrics, never invented figures */
  measures: string[];
  /** Why this service matters to the business */
  why: string;
  /** How an engagement runs, in order */
  process: { title: string; body: string }[];
  deliverables: string[];
  /** Platforms and tools typically involved. Not partnerships. */
  tools: string[];
  /** Who the service is for */
  audience: string[];
  /** Label for the primary button on this page */
  cta?: string;
  faqs: { q: string; a: string }[];
  related: string[];
  /** Long-form content for pages built to the master standard. Absent on pages not yet upgraded. */
  master?: ServiceMaster;
};

/**
 * Everything a master-standard service page carries beyond the base record.
 * Each service writes its own: nothing here is shared copy.
 */
export type ServiceMaster = {
  /** ISO date the page was last reviewed by a specialist; shown on the page and in schema */
  reviewed: string;
  /** The direct answer to the question the page is searched for */
  answer: { question: string; text: string; takeaways: string[] };
  /** Three or four facts shown beside the hero */
  facts: { label: string; value: string }[];
  /** What the service is made of. Each part can link to its specialist page. */
  pillars: { title: string; body: string; items: string[]; href?: string }[];
  /** How the channel works, stage by stage, and what we do at each */
  mechanics: { heading: string; intro: string; stages: { name: string; happens: string; we: string }[] };
  /** The engagement over time */
  timeline: { when: string; title: string; body: string; outputs: string[] }[];
  /** An honest comparison with the nearest alternative */
  comparison: {
    heading: string;
    intro: string;
    columns: [string, string];
    rows: { label: string; a: string; b: string }[];
    verdict: string;
    link: { label: string; href: string };
  };
  /** Slugs in data/industries and data/locations where this service matters most */
  industries: string[];
  markets: string[];
  /** Slug in data/case-studies, if one involves this service */
  scenario?: string;
  /** Question-led FAQs; these replace the base FAQs on the page and in schema */
  faqs: { q: string; a: string }[];
};

export type ServiceCategoryId =
  | "search-ai"
  | "performance"
  | "content-social"
  | "conversion-automation"
  | "web-digital";

export type ServiceCategory = {
  id: ServiceCategoryId;
  label: string;
  statement: string;
  href: string;
  items: { name: string; href: string; summary: string }[];
};

export type Industry = {
  slug: string;
  name: string;
  /** One line used in indexes */
  line: string;
  /** How buyers in this industry search and decide */
  buyerBehaviour: string;
  /** Business and marketing problems specific to the sector */
  challenges: string[];
  /** How demand is generated: which channels, and why */
  demand: string;
  /** Kinds of content the sector needs */
  contentNeeds: string[];
  /** Where enquiries and sales are lost between interest and commitment */
  conversion: { title: string; body: string }[];
  /** How SERPMOZ approaches the sector */
  focus: { title: string; body: string }[];
  /** Work we would do, phrased as work. Never results or client stories. */
  examples: string[];
  measures: string[];
  /** Slugs in data/services */
  services: string[];
  /** Slugs of neighbouring industries */
  related: string[];
};

/** Old, compact shapes. Still used by the homepage and menus; derived from LocationRecord in data/locations. */
export type City = {
  slug: string;
  name: string;
  context: string;
  considerations: string[];
  services: string[];
  industries: string[];
};

export type Country = {
  slug: string;
  name: string;
  short: string;
  context: string;
  considerations: { title: string; body: string }[];
  services: string[];
  industries: string[];
  cities: City[];
};

export type LocationKind = "country" | "region" | "city";

/**
 * One location page. Everything the page shows comes from this record:
 * add a record and the route, map highlight, breadcrumbs, metadata, schema,
 * related links and sitemap entry follow from it.
 *
 * Text fields marked "rich" may contain links written as [label](/path/).
 */
export type LocationRecord = {
  slug: string;
  kind: LocationKind;
  name: string;
  /** How the name reads mid-sentence: "the UAE", "India", "Gurgaon" */
  inSentence: string;
  /** Short code for the hero label: IN, UK, EU, or the country code for a city */
  code: string;
  /** ISO 3166-1 alpha-2 of the country; omitted for multi-country regions */
  countryCode?: string;
  continent: string;
  /** Slug of the country a city belongs to */
  parent?: string;
  /** Key in data/locations/geo.generated.ts: which outline the map highlights */
  market: string;
  latitude: number;
  longitude: number;
  /** Other names people search by, e.g. Gurugram */
  aka?: string[];
  /** The wider area a city is searched within, e.g. "Delhi NCR" */
  cluster?: string;
  /** City slugs (same country) that are close enough to mention together */
  nearby?: string[];
  /** Key in data/images.ts */
  photo: string;
  seo: {
    /** Without the brand; the site appends " | SERPMOZ". 46 characters at most. */
    title: string;
    metaDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    searchIntent: string;
  };
  hero: { title: string; description: string };
  /** Three or four plain facts about the market, as text beside the map */
  facts: { label: string; value: string }[];
  /** The direct answer to the question the page is searched for */
  answer: { question: string; text: string };
  /** rich */
  overview: { heading: string; paragraphs: string[] };
  discovery: { heading: string; intro: string; channels: { name: string; body: string }[] };
  /** rich */
  searchAi: { heading: string; paragraphs: string[] };
  /** Cities: why local search and maps matter here. rich */
  local?: { heading: string; paragraphs: string[]; points: string[] };
  opportunities: { title: string; body: string }[];
  /** Services relevant here, each with its own local reasoning */
  services: { slug: string; title: string; body: string; why: string }[];
  industries: { slug: string; note: string }[];
  /** Regional or local things a plan has to account for */
  considerations: { title: string; body: string }[];
  /** Why businesses here work with us. Capabilities only: no local offices, client counts or rankings. */
  whyUs: { title: string; body: string }[];
  /** Paths of related location pages beyond a country's own cities */
  related: string[];
  caseStudies: string[];
  resources: string[];
  faqs: { q: string; a: string }[];
  cta: { title: string; body: string };
};

export type LocationService = {
  country: string;
  city: string;
  /** URL segment, e.g. "seo-services" */
  slug: string;
  /** Slug of the parent service in data/services */
  service: string;
  title: string;
  metaDescription: string;
  intro: string;
  localFactors: { title: string; body: string }[];
  /** Questions specific to this service in this city */
  faqs: { q: string; a: string }[];
};

export type ResourceCategory = {
  slug: string;
  name: string;
  /** What we publish under this heading */
  scope: string;
  /** Questions the research in this category sets out to answer */
  questions: string[];
};

export type Crumb = { name: string; href: string };

/**
 * A service written for one industry, e.g. "SEO for real estate developers".
 * Lives at /industries/{industry}/{slug}/. Written by hand: it must say things
 * that are only true of this service in this sector.
 * Body text may contain links written as [label](/path/).
 */
export type IndustryServiceRecord = {
  /** Slug in data/industries */
  industry: string;
  /** Slug in data/services */
  service: string;
  /** URL segment, normally the service slug */
  slug: string;
  /** Short name for menus and cards, e.g. "SEO for Real Estate" */
  name: string;
  /** The buyers, as written mid-sentence, e.g. "real estate developers and brokers" */
  audience: string;
  seo: { title: string; metaDescription: string; primaryKeyword: string; secondaryKeywords: string[]; searchIntent: string };
  /** hero.title is the H1 */
  hero: { title: string; description: string };
  /** Exactly four short facts under the hero */
  facts: { label: string; value: string }[];
  /** A question and a direct answer of 60 to 90 words */
  answer: { question: string; text: string };
  /** How buyers in this sector search and decide, for this service */
  buyers: { heading: string; paragraphs: string[] };
  /** What usually goes wrong: four or five */
  problems: { title: string; body: string }[];
  /** What the work includes: five or six parts */
  approach: { title: string; body: string }[];
  /** The kinds of searches worth winning. Examples are query patterns, not data. */
  searches: { heading: string; intro: string; groups: { name: string; examples: string[]; note: string }[] };
  /** Advertising, claims or data rules the work has to respect. General terms only. */
  rules: { title: string; body: string }[];
  /** How success is measured: four or five */
  measures: string[];
  /** Three or four phases with typical timing */
  timeline: { phase: string; when: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: {
    /** Other service slugs */
    services: string[];
    /** Location paths, e.g. "/locations/india/gurgaon/" */
    locations: string[];
    /** Article slugs */
    articles: string[];
  };
  cta: { title: string; body: string };
};

/**
 * One service in one place, e.g. "Local SEO in Delhi". Lives at
 * /{service}-{place}/ (for example /local-seo-services-delhi/). Written by
 * hand for that pairing: everything here must be specific to this service in
 * this place. Plain text only, no links: the page adds its links itself.
 */
export type LocalServicePage = {
  /** Location slug: a market ("india") or a city ("delhi") */
  place: string;
  /** Slug in data/services */
  service: string;
  seo: { title: string; metaDescription: string; primaryKeyword: string; secondaryKeywords: string[] };
  /** The H1 */
  h1: string;
  /** Opening paragraph under the H1 */
  intro: string;
  /** A question as people ask it, and a direct answer */
  answer: { question: string; text: string };
  /** How people in this place search for this service: three */
  searches: { title: string; body: string }[];
  /** What is different about doing this service here: four */
  localFactors: { title: string; body: string }[];
  /** For a city: localities and nearby places. For a market: cities and regions. Four to six. */
  areas: { name: string; note: string }[];
  /** Sectors this service matters most for here: three. Slugs in data/industries. */
  sectors: { slug: string; note: string }[];
  /** Five questions */
  faqs: { q: string; a: string }[];
};
