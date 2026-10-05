/**
 * Sample figures for product mock-ups. Every surface that renders these
 * must carry an "Illustrative data" label – they describe no real account.
 */
export const heroKpis = [
  { label: "Organic Visibility", value: 38, prefix: "+", suffix: "%", trend: [12, 14, 13, 17, 19, 22, 24, 29, 33, 38], tone: "blue" },
  { label: "AI Search Visibility", value: 52, prefix: "+", suffix: "%", trend: [4, 6, 9, 9, 15, 21, 28, 37, 44, 52], tone: "cyan" },
  { label: "Qualified Leads", value: 31, prefix: "+", suffix: "%", trend: [10, 9, 13, 15, 14, 19, 22, 24, 28, 31], tone: "blue" },
  { label: "Conversion Rate", value: 18, prefix: "+", suffix: "%", trend: [6, 7, 7, 9, 11, 10, 13, 15, 16, 18], tone: "blue" },
] as const;

export const revenueSeries = {
  current: [14.2, 15.1, 14.8, 17.9, 19.6, 22.4, 24.1, 27.8, 31.5, 34.2, 38.9, 42.8],
  previous: [13.1, 13.6, 14.4, 14.9, 15.8, 16.1, 17.4, 18.2, 19.6, 20.3, 21.8, 22.9],
  labels: ["Week 1", "Week 4", "Week 8", "Week 12"],
};

export const aiPlatforms = [
  { name: "Google AI experiences", value: 64 },
  { name: "ChatGPT", value: 48 },
  { name: "Gemini", value: 41 },
  { name: "Perplexity", value: 57 },
] as const;

export const opportunities = [
  { topic: "Comparison & alternatives", intent: "Commercial", value: "High", status: "In progress" },
  { topic: "Pricing & ROI questions", intent: "Transactional", value: "High", status: "Briefed" },
  { topic: "Integration how-tos", intent: "Informational", value: "Medium", status: "Queued" },
] as const;

export const signals = [
  { text: "Competitor A cited in 6 new AI answers for pricing topics", kind: "risk" },
  { text: "Your share of map results up in 3 of 5 service areas", kind: "gain" },
] as const;

/* AI Search Visibility interface */
export const aiVisibility = {
  prompt: "Which platforms should a mid-sized retailer shortlist for inventory planning?",
  score: 62,
  scoreChange: 9,
  brandMentions: 148,
  competitorMentions: 391,
  share: [
    { name: "Your brand", value: 22, self: true },
    { name: "Competitor A", value: 31 },
    { name: "Competitor B", value: 27 },
    { name: "Competitor C", value: 12 },
    { name: "Others", value: 8 },
  ],
  sources: [
    { name: "Industry review platforms", count: 34 },
    { name: "Trade publications", count: 21 },
    { name: "Your website", count: 17 },
    { name: "Community threads", count: 12 },
  ],
  missingTopics: ["Implementation timeline", "Total cost of ownership", "Migration from spreadsheets"],
  opportunities: [
    { title: "Publish a pricing explainer with worked examples", impact: "High" },
    { title: "Earn a presence in two category round-ups", impact: "High" },
    { title: "Add structured FAQs to integration pages", impact: "Medium" },
  ],
  platforms: ["Google AI experiences", "ChatGPT", "Gemini", "Perplexity", "Other AI discovery environments"],
} as const;

export const trafficSources = [
  { name: "Organic search", value: 41 },
  { name: "Paid media", value: 33 },
  { name: "AI & referral", value: 14 },
  { name: "Direct", value: 12 },
] as const;

/** Floating context cards around the hero dashboard */
export const heroSignals = {
  ai: { label: "AI Search", caption: "Visibility", value: 62 },
  google: { label: "Google", caption: "Organic", value: "+38%", trend: [12, 14, 13, 17, 19, 22, 24, 29, 33, 38] },
  leads: { label: "Leads", caption: "Qualified this quarter", value: "312" },
  revenue: { label: "Revenue", caption: "Influenced", value: "₹42.8L" },
} as const;

/** Named as platforms we work across. Not partners, not clients. */
export const platforms = [
  "Google Search", "Google Ads", "Google Business Profile", "Microsoft Advertising", "Meta", "LinkedIn", "YouTube",
  "ChatGPT", "Gemini", "Perplexity", "Shopify", "WordPress", "Webflow", "GA4", "HubSpot", "WhatsApp Business",
] as const;

/** Per-environment variants of the AI visibility sample, for the interface tabs. */
export const aiVisibilityViews = [
  { id: "all", name: "All environments", score: 62, change: 9, brand: 148, competitors: 391, share: [22, 31, 27, 12, 8] },
  { id: "google-ai", name: "Google AI experiences", score: 64, change: 6, brand: 52, competitors: 118, share: [24, 30, 26, 12, 8] },
  { id: "chatgpt", name: "ChatGPT", score: 58, change: 11, brand: 41, competitors: 121, share: [19, 33, 28, 11, 9] },
  { id: "gemini", name: "Gemini", score: 55, change: 7, brand: 24, competitors: 79, share: [18, 32, 29, 13, 8] },
  { id: "perplexity", name: "Perplexity", score: 69, change: 12, brand: 31, competitors: 73, share: [27, 29, 25, 12, 7] },
] as const;

/** A simulated assistant answer used to show what "share of recommendation" means. */
export const aiAnswer = {
  intro: "For a mid-sized retailer, three platforms are commonly shortlisted for inventory planning:",
  picks: [
    { name: "Competitor A", why: "Frequently cited for forecasting depth and enterprise integrations.", cites: [1, 2] },
    { name: "Competitor B", why: "Often recommended for multi-location stock visibility.", cites: [2] },
    { name: "Your brand", why: "Mentioned for fast implementation and retail-specific workflows.", cites: [3], self: true },
  ],
  gap: "Pricing and total cost of ownership were not addressed for your brand: no source was found.",
} as const;
