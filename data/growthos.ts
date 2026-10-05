/**
 * GrowthOS product preview content. Figures are illustrative and must be
 * labelled as such wherever they render.
 */
export const growthosMetrics = [
  { name: "Organic Traffic", value: "48.2k", delta: "+22%" },
  { name: "AI Visibility", value: "62", delta: "+9 pts" },
  { name: "Qualified Leads", value: "312", delta: "+31%" },
  { name: "Conversion Rate", value: "3.4%", delta: "+18%" },
  { name: "CAC", value: "₹6,420", delta: "−12%" },
  { name: "ROAS", value: "4.6×", delta: "+0.8" },
  { name: "Revenue Influenced", value: "₹42.8L", delta: "+24%" },
] as const;

export type GrowthosModule = {
  id: string;
  name: string;
  /** The business question the module answers */
  question: string;
  chartLabel: string;
  series: number[];
  rows: { label: string; value: string }[];
};

export const growthosModules: GrowthosModule[] = [
  {
    id: "overview",
    name: "Overview",
    question: "Is marketing producing revenue, and where is it coming from?",
    chartLabel: "Revenue influenced",
    series: [14, 15, 15, 18, 20, 22, 24, 28, 31, 34, 39, 43],
    rows: [
      { label: "Organic search", value: "41%" },
      { label: "Paid media", value: "33%" },
      { label: "AI and referral", value: "14%" },
      { label: "Direct and other", value: "12%" },
    ],
  },
  {
    id: "seo",
    name: "SEO",
    question: "Which search opportunities are we winning, and which are still open?",
    chartLabel: "Non-brand visibility",
    series: [22, 23, 25, 24, 27, 30, 31, 35, 36, 40, 42, 46],
    rows: [
      { label: "Opportunities in progress", value: "18" },
      { label: "Pages in top results", value: "64" },
      { label: "Technical issues open", value: "7" },
      { label: "Organic leads", value: "128" },
    ],
  },
  {
    id: "ai-search",
    name: "AI Search",
    question: "Are AI assistants recommending us, and what are they citing?",
    chartLabel: "AI visibility score",
    series: [31, 33, 32, 38, 41, 44, 47, 49, 53, 56, 59, 62],
    rows: [
      { label: "Tracked prompts", value: "40" },
      { label: "Brand mention rate", value: "38%" },
      { label: "Share of recommendation", value: "22%" },
      { label: "Missing topics", value: "3" },
    ],
  },
  {
    id: "local",
    name: "Local",
    question: "How visible is each location in its own catchment?",
    chartLabel: "Map pack visibility",
    series: [40, 41, 44, 43, 47, 49, 52, 51, 55, 58, 60, 63],
    rows: [
      { label: "Locations tracked", value: "12" },
      { label: "Calls from profiles", value: "846" },
      { label: "Average rating", value: "4.6" },
      { label: "Reviews awaiting reply", value: "5" },
    ],
  },
  {
    id: "competitors",
    name: "Competitors",
    question: "Who is gaining ground, on which topics, and why?",
    chartLabel: "Share of voice",
    series: [18, 18, 19, 21, 20, 22, 23, 23, 25, 26, 26, 28],
    rows: [
      { label: "Competitors tracked", value: "6" },
      { label: "Topics lost this month", value: "2" },
      { label: "Topics gained", value: "5" },
      { label: "New competitor pages", value: "14" },
    ],
  },
  {
    id: "content",
    name: "Content",
    question: "Which content creates demand, and which is just published?",
    chartLabel: "Content-assisted leads",
    series: [8, 9, 12, 11, 14, 16, 15, 19, 21, 24, 23, 27],
    rows: [
      { label: "Pieces in production", value: "9" },
      { label: "Awaiting expert review", value: "3" },
      { label: "Pieces driving leads", value: "22" },
      { label: "Due for refresh", value: "11" },
    ],
  },
  {
    id: "ppc",
    name: "PPC",
    question: "Is paid spend buying qualified demand at an acceptable cost?",
    chartLabel: "Return on ad spend",
    series: [3.1, 3.3, 3.2, 3.6, 3.8, 3.7, 4.0, 4.1, 4.3, 4.2, 4.5, 4.6],
    rows: [
      { label: "Spend this period", value: "₹9.3L" },
      { label: "Qualified lead rate", value: "44%" },
      { label: "Cost per qualified lead", value: "₹2,980" },
      { label: "Tests running", value: "4" },
    ],
  },
  {
    id: "leads",
    name: "Leads",
    question: "How many enquiries are real opportunities, and how fast do we respond?",
    chartLabel: "Qualified leads",
    series: [180, 176, 195, 210, 204, 231, 248, 255, 270, 288, 301, 312],
    rows: [
      { label: "Median response time", value: "6 min" },
      { label: "Sales-accepted rate", value: "58%" },
      { label: "Meetings booked", value: "94" },
      { label: "Unassigned leads", value: "0" },
    ],
  },
  {
    id: "cro",
    name: "CRO",
    question: "Where do visitors hesitate, and which changes fixed it?",
    chartLabel: "Conversion rate",
    series: [2.6, 2.7, 2.7, 2.9, 2.8, 3.0, 3.1, 3.1, 3.2, 3.3, 3.3, 3.4],
    rows: [
      { label: "Experiments live", value: "3" },
      { label: "Concluded this quarter", value: "8" },
      { label: "Winning changes shipped", value: "5" },
      { label: "Largest drop-off", value: "Step 2" },
    ],
  },
  {
    id: "revenue",
    name: "Revenue",
    question: "Which channels, campaigns and content influenced closed revenue?",
    chartLabel: "Revenue influenced",
    series: [14, 15, 15, 18, 20, 22, 24, 28, 31, 34, 39, 43],
    rows: [
      { label: "Deals attributed", value: "37" },
      { label: "Average deal value", value: "₹1.16L" },
      { label: "CAC", value: "₹6,420" },
      { label: "Attribution coverage", value: "86%" },
    ],
  },
  {
    id: "copilot",
    name: "AI Copilot",
    question: "What changed this week, and what should we do about it?",
    chartLabel: "Recommendations acted on",
    series: [2, 3, 3, 5, 4, 6, 7, 6, 8, 9, 9, 11],
    rows: [
      { label: "Open recommendations", value: "6" },
      { label: "Approved by strategist", value: "4" },
      { label: "Anomalies flagged", value: "2" },
      { label: "Questions answered", value: "53" },
    ],
  },
];

export const growthosNav = [
  { group: "Insight", ids: ["overview", "revenue", "copilot"] },
  { group: "Visibility", ids: ["seo", "ai-search", "local", "competitors"] },
  { group: "Demand", ids: ["content", "ppc"] },
  { group: "Conversion", ids: ["leads", "cro"] },
] as const;

export const growthosOpportunities = [
  { topic: "Comparison & alternatives pages", intent: "Commercial", value: "High", effort: "Medium", status: "In progress" },
  { topic: "Pricing & ROI questions", intent: "Transactional", value: "High", effort: "Low", status: "Briefed" },
  { topic: "Category round-up citations", intent: "AI answers", value: "High", effort: "High", status: "Outreach" },
  { topic: "Integration how-tos", intent: "Informational", value: "Medium", effort: "Low", status: "Queued" },
  { topic: "Location pages: 3 service areas", intent: "Local", value: "Medium", effort: "Medium", status: "Queued" },
] as const;

export const growthosAttribution = [
  { channel: "Organic search", revenue: "₹17.5L", share: 41 },
  { channel: "Paid media", revenue: "₹14.1L", share: 33 },
  { channel: "AI & referral", revenue: "₹6.0L", share: 14 },
  { channel: "Direct & other", revenue: "₹5.2L", share: 12 },
] as const;

export const growthosCompetitors = [
  { name: "Your brand", sov: 28, change: "+3", self: true },
  { name: "Competitor A", sov: 34, change: "−1" },
  { name: "Competitor B", sov: 22, change: "+1" },
  { name: "Competitor C", sov: 16, change: "−3" },
] as const;

export const growthosInsights = [
  {
    title: "Two thirds of qualified leads come from one topic cluster",
    body: "Comparison content is carrying the quarter. Building out the remaining alternatives pages is likely to return more than additional paid spend.",
    action: "Prioritise 4 comparison pages",
    status: "Approved by strategist",
  },
  {
    title: "Competitor A gained citations on pricing topics",
    body: "Six new AI answers cite their pricing guide. Your brand has no equivalent source for assistants to draw on.",
    action: "Brief a pricing explainer",
    status: "Awaiting review",
  },
] as const;

export const growthosPlatforms = [
  { name: "Google AI experiences", value: 64 },
  { name: "ChatGPT", value: 58 },
  { name: "Gemini", value: 55 },
  { name: "Perplexity", value: 69 },
] as const;

/** Module pages at /growthos/{slug}/. Each opens the product preview on that module. */
export const growthosPages = [
  {
    slug: "ai-search",
    module: "ai-search",
    name: "AI Search",
    title: "See how AI assistants describe and recommend your brand.",
    metaDescription:
      "The GrowthOS AI Search module tracks brand mentions, share of recommendation, citation sources and missing topics across AI discovery environments.",
    lead: "The AI Search module runs a fixed panel of buying-journey prompts across AI discovery environments and turns the answers into trends you can act on.",
    points: [
      { title: "Prompt panels", body: "A stable set of prompts covering category, comparison, problem and evaluation questions, run on a schedule." },
      { title: "Share of recommendation", body: "How often your brand is named beside each competitor, reported as a range over a period." },
      { title: "Citation sources", body: "The publications, platforms and pages that answers draw on, and where you are absent." },
      { title: "Missing topics and opportunities", body: "Subjects where competitors are cited and you have no source, turned into a prioritised content list." },
    ],
    service: "/ai-seo-services/",
    caveat: "AI answers vary between runs and no platform offers guaranteed placement. The module reports trends, not promises.",
  },
  {
    slug: "seo",
    module: "seo",
    name: "SEO",
    title: "Search opportunities ranked by what they are worth.",
    metaDescription:
      "The GrowthOS SEO module tracks search opportunities by commercial value, non-brand visibility, technical health and the organic leads they produce.",
    lead: "The SEO module replaces the keyword report with a portfolio of opportunities, each with an owner, a status and a line to the leads it produces.",
    points: [
      { title: "Opportunity portfolio", body: "Queries grouped into buyer needs and scored for intent, fit, value and effort." },
      { title: "Non-brand visibility", body: "Presence on the searches that find new customers, separated from people already looking for you." },
      { title: "Technical health", body: "Open issues ranked by impact, with the ticket status from your own backlog." },
      { title: "Organic pipeline", body: "Leads and revenue traced to the pages and opportunities that preceded them." },
    ],
    service: "/seo-services/",
    caveat: "Visibility metrics are indicators. The module always shows them beside leads and revenue.",
  },
  {
    slug: "revenue",
    module: "revenue",
    name: "Revenue",
    title: "Closed revenue, traced back to what influenced it.",
    metaDescription:
      "The GrowthOS Revenue module connects CRM outcomes to channels, campaigns and content, with acquisition cost and attribution coverage shown.",
    lead: "The Revenue module reads outcomes from your CRM and connects them to the channels, campaigns and content that came before, with the method and its limits stated.",
    points: [
      { title: "Revenue influenced", body: "Closed revenue by first and last touch, side by side, so that neither view is mistaken for the truth." },
      { title: "Acquisition cost by route", body: "What a customer costs to win through each channel, using finance-agreed definitions." },
      { title: "Attribution coverage", body: "The share of revenue the data can explain, shown openly instead of hidden." },
      { title: "Budget reallocation", body: "Where evidence supports moving spend, and what was changed last cycle as a result." },
    ],
    service: "/cro/",
    caveat: "Attribution is an estimate. The module shows how much revenue it can account for and how.",
  },
] as const;
