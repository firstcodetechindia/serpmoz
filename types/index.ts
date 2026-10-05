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
  items: { name: string; href?: string }[];
};

export type Industry = {
  slug: string;
  name: string;
  /** One line used in indexes */
  line: string;
  /** How buyers in this industry search and decide */
  buyerBehaviour: string;
  focus: { title: string; body: string }[];
  measures: string[];
  services: string[];
};

export type City = {
  slug: string;
  name: string;
  /** What is specific about competing for demand in this city */
  context: string;
  considerations: string[];
};

export type Country = {
  slug: string;
  name: string;
  short: string;
  /** What is specific about this market */
  context: string;
  considerations: { title: string; body: string }[];
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
