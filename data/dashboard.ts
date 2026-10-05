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
