export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  /** Short line shown at the top of the mega menu panel */
  summary?: string;
  links?: NavLink[];
  /** Titled columns, for menus too large for one list */
  columns?: { title: string; href: string; links: NavLink[] }[];
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

export type City = {
  slug: string;
  name: string;
  /** What is specific about competing for demand in this city */
  context: string;
  considerations: string[];
  /** Slugs in data/services: the work most often needed in this city */
  services: string[];
  /** Slugs in data/industries: sectors with real weight in this city */
  industries: string[];
};

export type Country = {
  slug: string;
  name: string;
  short: string;
  /** What is specific about this market */
  context: string;
  considerations: { title: string; body: string }[];
  /** Slugs in data/services: the work most often needed in this market */
  services: string[];
  /** Slugs in data/industries: sectors with real weight in this market */
  industries: string[];
  cities: City[];
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
