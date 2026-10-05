/**
 * Case studies.
 *
 * Two kinds of entry share one model:
 *
 *  - `illustrative: true`  An "Illustrative Growth Scenario". A realistic
 *    starting situation and the plan we would propose. It names no company,
 *    contains no result figures, is labelled on the page and is NOT indexed.
 *
 *  - `illustrative: false` A real, client-approved case study. It is indexed,
 *    should be added to the sitemap (use `publishedCaseStudies`) and may carry
 *    `client` and `results`. Publish only with written approval and figures
 *    taken from the client's own systems, with the date range stated.
 *
 * Never add a result figure or a client name to an illustrative entry.
 */
export type CaseStudyStep = { title: string; body: string };

/** A measured change in a real case study. Never used on illustrative entries. */
export type CaseStudyResult = {
  metric: string;
  value: string;
  /** Date range the figure covers, e.g. "Jan to Jun 2027" */
  period: string;
  /** System the figure was read from, e.g. "Client CRM" */
  source: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** One or two sentences for index cards and meta descriptions */
  summary: string;
  /** Slug in data/industries */
  industry: string;
  /** Slugs in data/services */
  services: string[];
  /** Geography in plain words */
  market: string;
  /** Short description of the kind of business, without naming it */
  profile: string;
  situation: string[];
  constraints: string[];
  /** What the diagnostic would be expected to establish */
  diagnosis: CaseStudyStep[];
  /** The plan, in order */
  approach: CaseStudyStep[];
  /** Metric names only */
  measures: string[];
  /** What a result report for this engagement would contain */
  reportContents: string[];
  illustrative: boolean;
  /** Real case studies only, with written approval */
  client?: string;
  /** Real case studies only */
  results?: CaseStudyResult[];
  /** ISO date. Real case studies only */
  publishedAt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-location-dental-group",
    title: "A multi-location dental group that wants more implant and orthodontic patients",
    summary:
      "A dental group with several practices in one metropolitan area has steady routine demand and wants growth in high-value treatments without adding to front-desk workload.",
    industry: "dental",
    services: ["google-maps-seo", "local-seo-services", "google-ads", "landing-page-optimization", "whatsapp-automation"],
    market: "A single metropolitan area",
    profile: "A privately owned dental group with several practices, each with its own team and local reputation.",
    situation: [
      "Routine check-ups and emergency appointments fill the diary through word of mouth and map searches. Implant and orthodontic consultations, which matter most to the group commercially, are uneven between practices and hard to forecast.",
      "Each practice has its own Google Business Profile, set up at different times by different people. One group website lists all treatments on shared pages, so no practice has a page that speaks for it locally.",
      "Paid search runs as one campaign for the whole area, sending traffic to the home page. Enquiries arrive by phone, form and social message, and nobody can say how many became booked consultations.",
    ],
    constraints: [
      "Reception teams are at capacity and cannot take on manual follow-up.",
      "Clinical content must be reviewed by a dentist before publication.",
      "Advertising of dental treatments has to follow the local regulator's rules on claims and before-and-after imagery.",
      "Patient information must stay out of advertising platforms.",
    ],
    diagnosis: [
      { title: "Visibility differs by practice, not by group", body: "Map visibility would be measured on a grid around each practice. We would expect some locations to be strong close to the door and absent a short distance away, with categories and services set inconsistently." },
      { title: "Treatment intent has nowhere to land", body: "People researching implants need procedure, suitability, recovery and cost guidance. A shared treatment list cannot answer that or show which practice offers it." },
      { title: "The leak is after the enquiry", body: "Call and form handling would be reviewed to see how long a high-value enquiry waits for a response and how many are never reached." },
    ],
    approach: [
      { title: "Fix the foundations per practice", body: "Profiles standardised for categories, services, hours and photographs, with a location page for each practice carrying its own team, directions and treatments offered." },
      { title: "Build treatment pages worth reading", body: "Implant and aligner pages written around consultation questions, reviewed and signed by the treating dentist, with a clear explanation of how pricing works." },
      { title: "Restructure paid search by treatment and catchment", body: "Separate campaigns for high-value treatments, each pointed at a dedicated landing page, with radius targeting matched to how far patients travel for that treatment." },
      { title: "Automate the first response", body: "Missed calls and form enquiries receive a WhatsApp message with a booking link, on the official Business Platform, so the first reply does not depend on reception being free." },
      { title: "Connect enquiries to consultations", body: "Call tracking and booking data joined in one report, designed so that no health information reaches an ad platform." },
    ],
    measures: [
      "Consultation bookings by treatment and practice",
      "Enquiry response time",
      "Enquiry-to-consultation rate",
      "Map visibility across each practice's catchment",
      "Cost per booked consultation",
    ],
    reportContents: [
      "Baseline and current figures for each practice, read from the practice management system and call tracking",
      "The date range and any seasonal effects that bear on the comparison",
      "Which changes shipped, in what order, and who reviewed the clinical content",
      "Tests that did not improve bookings and what was changed as a result",
      "Open questions and the plan for the next quarter",
    ],
    illustrative: true,
  },
  {
    slug: "b2b-saas-pipeline-quality",
    title: "A B2B SaaS company with plenty of sign-ups and not enough pipeline",
    summary:
      "A mid-market software company generates trial sign-ups at a healthy rate, but sales accepts few of them and the category conversation is happening on other people's websites.",
    industry: "saas",
    services: ["seo-services", "ai-seo-services", "content-seo", "linkedin-ads", "google-ads", "cro"],
    market: "English-speaking markets, sold remotely",
    profile: "A venture-backed B2B software company selling to operations teams in mid-sized businesses, with a free trial and a sales-assisted upgrade path.",
    situation: [
      "Marketing reports on sign-ups, and the number looks good. Sales reports that most trials come from individuals and very small companies outside the ideal customer profile.",
      "Organic traffic is concentrated on the blog, which attracts readers looking for definitions. Searches for the category, for alternatives to competitors and for specific use cases are won by review sites and by two better-known rivals.",
      "When prospects ask AI assistants for a shortlist in the category, the company appears inconsistently and is sometimes described with an out-of-date feature set.",
    ],
    constraints: [
      "A small marketing team with limited engineering time for website changes.",
      "Paid budget cannot increase until payback is shown.",
      "Comparison content must be accurate and defensible, with legal review of any competitor claims.",
      "The CRM holds opportunity data but campaign source is recorded unreliably.",
    ],
    diagnosis: [
      { title: "The target is wrong before the tactics are", body: "Campaigns optimised for sign-ups will find the cheapest sign-ups. We would expect bidding and reporting to need a move to a signal that sales recognises." },
      { title: "Content serves readers, not buyers", body: "An intent map would show where the site has pages for learning and gaps for comparing, evaluating and justifying a purchase." },
      { title: "AI answers draw on sources the company does not influence", body: "A prompt panel, run repeatedly, would record which third-party sources shape the answers and where the company's own pages are unclear or outdated." },
    ],
    approach: [
      { title: "Agree the qualified signal", body: "Marketing and sales define a qualified account together. That definition is passed back to ad platforms through offline conversion imports." },
      { title: "Build the evaluation layer", body: "Comparison, alternatives, use-case and integration pages, each reviewed by product and sales, with pricing and limits stated plainly." },
      { title: "Correct the record", body: "Product facts updated on the company's own pages and on the review platforms and directories AI assistants cite, with structured data where it applies." },
      { title: "Reach the roles that decide", body: "LinkedIn campaigns aimed at the job functions and company sizes that match closed deals, carrying evaluation content instead of trial offers." },
      { title: "Qualify inside the trial", body: "Sign-up and onboarding tested so that fit is established early and good-fit accounts reach a person sooner." },
    ],
    measures: [
      "Sales-accepted opportunities by channel",
      "Trial-to-qualified-account rate",
      "Non-brand visibility for category and comparison searches",
      "Share of recommendation across the prompt panel, reported as a range",
      "CAC payback by channel",
    ],
    reportContents: [
      "Pipeline and revenue by channel from the CRM, with the attribution method stated",
      "Prompt panel results as ranges over repeated runs, with the sources cited",
      "Before and after for the qualified signal, including any fall in raw sign-up volume and why that is acceptable",
      "Experiments run on sign-up and onboarding, including those that lost",
      "What remains unmeasured and how we would close the gap",
    ],
    illustrative: true,
  },
  {
    slug: "d2c-ecommerce-margin",
    title: "A D2C ecommerce brand whose growth depends on rising ad spend",
    summary:
      "A direct-to-consumer brand has grown on paid social. Revenue is up, margin after advertising is down, and organic search contributes little beyond the brand name.",
    industry: "ecommerce",
    services: ["ecommerce-seo", "google-ads", "meta-ads", "cro", "email-marketing"],
    market: "One home market, with early international orders",
    profile: "A direct-to-consumer brand with a few hundred products across a handful of categories, selling through its own Shopify store.",
    situation: [
      "Most new customers arrive through paid social. Each year the same revenue costs more to buy, and the founders can no longer tell which campaigns are profitable once returns and discounts are counted.",
      "Organic search revenue is almost entirely brand searches. Category pages are product grids with no guidance, and filter combinations have created a large number of thin, indexable URLs.",
      "Email is used for promotions. There is no structured welcome, post-purchase or replenishment sequence, and repeat purchase is left to chance.",
    ],
    constraints: [
      "Margin, not revenue, is the measure the business cares about.",
      "A small team with one developer shared across all store work.",
      "Peak trading periods limit when structural site changes can be made.",
      "Platform reporting and the store's own numbers disagree.",
    ],
    diagnosis: [
      { title: "Paid and organic are buying the same sale", body: "We would expect a meaningful share of paid spend to fall on searches and audiences that already know the brand. An overlap analysis would size it." },
      { title: "The catalogue is not built for search", body: "A crawl would show which filtered URLs are indexed, which categories compete with each other and where product data is incomplete for shopping surfaces." },
      { title: "The second order is unmanaged", body: "Cohort analysis from store data would show how many customers buy again and how long it takes, which sets what an acquisition is worth." },
    ],
    approach: [
      { title: "Report on contribution margin", body: "A single view built from store data, joining ad spend, discounts, returns and cost of goods, so that channel decisions are made on profit." },
      { title: "Put the catalogue in order", body: "Indexation rules for filters, consolidated categories, complete product attributes and a clean merchant feed." },
      { title: "Make categories useful", body: "Selection guidance and buying guides for the categories with the most non-brand demand, written with the people who know the product." },
      { title: "Separate brand from prospecting", body: "Paid campaigns restructured so that brand, existing customers and new audiences are budgeted and judged separately." },
      { title: "Build the retention flows", body: "Welcome, post-purchase, replenishment and win-back sequences across email and, where customers opt in, WhatsApp." },
      { title: "Test the product page and checkout", body: "Research-led changes to mobile product pages, delivery information and checkout, tested where traffic allows." },
    ],
    measures: [
      "Contribution margin after ad spend",
      "New-customer revenue by channel",
      "Non-brand organic revenue",
      "Conversion rate on mobile",
      "Repeat purchase rate by cohort",
    ],
    reportContents: [
      "Margin by channel from the store's own data, with the reconciliation to platform figures explained",
      "Non-brand and brand organic revenue reported separately",
      "Cohort tables showing repeat purchase before and after the retention flows went live",
      "Each experiment with its hypothesis, sample and outcome, including inconclusive tests",
      "Seasonality and promotions that affect how the period should be read",
    ],
    illustrative: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Labelled scenarios. Not indexed. */
export const illustrativeScenarios = caseStudies.filter((c) => c.illustrative);

/** Real, approved case studies. Indexed: add these to the sitemap. */
export const publishedCaseStudies = caseStudies.filter((c) => !c.illustrative);
