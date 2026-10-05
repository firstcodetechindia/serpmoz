/** Structured content for the homepage narrative sections. */

export const promise = ["Search", "Discovery", "Trust", "Conversion", "Revenue"] as const;

export const promiseSteps = [
  { name: "Search", body: "A buyer asks a question, in a search box, a map or an assistant." },
  { name: "Discovery", body: "Your brand is among the answers they are given." },
  { name: "Trust", body: "What they find next confirms you are credible." },
  { name: "Conversion", body: "The next step is obvious and easy to take." },
  { name: "Revenue", body: "The enquiry becomes a customer, and you can trace why." },
] as const;

export const aiReality = {
  execute: {
    label: "AI can execute",
    note: "Fast, tireless and increasingly capable. Also indifferent to whether the task was the right one.",
    items: ["Research", "Analysis", "Content", "Automation", "Experimentation"],
  },
  decide: {
    label: "Experts decide",
    note: "Judgement built from seeing what works across markets, budgets and business models.",
    items: [
      "Strategy",
      "Prioritization",
      "Positioning",
      "Search Intent",
      "Technical Decisions",
      "Validation",
    ],
  },
  connect: {
    label: "SERPMOZ connects",
    note: "One team and one reporting view, so effort can be traced from first impression to closed revenue.",
    items: ["Data", "Execution", "Visibility", "Leads", "Conversion", "Revenue"],
  },
} as const;

export const expertQuestions = [
  "What to ask AI",
  "What data matters",
  "Which opportunities to prioritise",
  "Which keywords carry commercial value",
  "Which channels deserve investment",
  "Why competitors are winning",
  "How AI search changes discovery",
  "Why traffic is not converting",
  "How activity connects to leads, and leads to revenue",
] as const;

export const diyPath = ["Tools", "Tasks", "Output"] as const;

export const serpmozPath = [
  { step: "Business Goals", note: "What growth has to mean for this company" },
  { step: "Intelligence", note: "Market, search, competitor and customer evidence" },
  { step: "Strategy", note: "Where to play, in what order, and what to ignore" },
  { step: "AI + Experts", note: "Machines for speed, people for judgement" },
  { step: "Execution", note: "Shipped work across search, media, content and web" },
  { step: "Optimization", note: "Evidence in, decisions out, every cycle" },
  { step: "Revenue", note: "The only result that settles the argument" },
] as const;

export const searchSurfaces = [
  { name: "Google", detail: "Classic results, shopping, news, video" },
  { name: "AI Search", detail: "Google AI experiences, ChatGPT, Gemini, Perplexity" },
  { name: "Maps", detail: "Local packs, profiles, reviews" },
  { name: "Social", detail: "LinkedIn, Instagram, YouTube" },
  { name: "Communities", detail: "Forums, Q&A, niche groups" },
  { name: "Marketplaces", detail: "Product and service platforms" },
  { name: "Websites", detail: "Yours, and the ones that talk about you" },
] as const;

export const searchServices = [
  { name: "SEO", href: "/seo-services/" },
  { name: "AI Search", href: "/ai-seo-services/" },
  { name: "AEO", href: "/ai-seo-services/" },
  { name: "GEO", href: "/ai-seo-services/" },
  { name: "Local SEO", href: "/local-seo-services/" },
  { name: "Google Maps", href: "/local-seo-services/" },
  { name: "International SEO", href: "/international-seo/" },
  { name: "Ecommerce SEO", href: "/ecommerce-seo/" },
  { name: "Enterprise SEO", href: "/enterprise-seo/" },
  { name: "Content SEO", href: "/seo-services/" },
  { name: "Technical SEO", href: "/seo-services/" },
  { name: "Digital PR", href: "/social-media-marketing/" },
  { name: "Brand Search Visibility", href: "/seo-services/" },
] as const;

export const growthSystem = [
  {
    name: "Market Intelligence",
    body: "Who buys, why they buy, what they compare you with and where the category is heading.",
  },
  {
    name: "Search Intelligence",
    body: "Demand mapped by intent and value across search engines, AI answers, maps and platforms.",
  },
  {
    name: "Demand Generation",
    body: "Paid and organic programmes that reach buyers before they have a shortlist.",
  },
  {
    name: "Content & Authority",
    body: "Evidence that you know the subject, published where buyers and algorithms look for it.",
  },
  {
    name: "Conversion Optimization",
    body: "Pages, offers and journeys tested until more of the right visitors take the next step.",
  },
  {
    name: "Lead Generation",
    body: "Capture, qualification and routing so enquiries reach the right person quickly.",
  },
  {
    name: "Sales Intelligence",
    body: "What marketing learned about the account, handed to sales in a usable form.",
  },
  {
    name: "Revenue Attribution",
    body: "Closed revenue traced back to the channels, campaigns and content that influenced it.",
  },
  {
    name: "Continuous Optimization",
    body: "Budgets and effort reallocated on evidence, cycle after cycle.",
  },
] as const;

export const methodology = [
  {
    name: "Discover",
    body: "Understand business, market, customer and competition.",
    detail:
      "Stakeholder interviews, commercial model, existing data and a clear statement of what growth needs to look like.",
  },
  {
    name: "Diagnose",
    body: "Identify visibility, demand, conversion and revenue gaps.",
    detail:
      "Audits across search, AI visibility, paid media, analytics and conversion paths, benchmarked against named competitors.",
  },
  {
    name: "Prioritize",
    body: "Focus resources on high-impact opportunities.",
    detail:
      "Every opportunity scored for impact, confidence and effort. The roadmap is as much about what is left out as what is included.",
  },
  {
    name: "Execute",
    body: "Combine experts, AI, technology and automation.",
    detail:
      "Specialists own outcomes. AI handles volume and speed. Work ships in short cycles with review built in.",
  },
  {
    name: "Measure",
    body: "Track visibility, leads, conversions and revenue.",
    detail:
      "One reporting view agreed at the start, reconciled with your CRM, read the same way by marketing, sales and finance.",
  },
  {
    name: "Optimize",
    body: "Continuously improve based on evidence.",
    detail:
      "What worked gets more budget. What did not gets changed or stopped. The plan is revised every quarter.",
  },
] as const;

export const pillars = [
  {
    name: "Expert-Led",
    body: "Strategy and sign-off sit with senior specialists who are accountable for the outcome.",
  },
  {
    name: "AI Accelerated",
    body: "Research, analysis and production move faster, so more time goes to thinking.",
  },
  {
    name: "Revenue Focused",
    body: "Plans and reports are built around pipeline and revenue. Activity metrics are supporting detail.",
  },
  {
    name: "Search Everywhere",
    body: "Search engines, AI answers, maps, social and marketplaces treated as one discovery landscape.",
  },
  {
    name: "Data Driven",
    body: "Decisions are made on evidence you can inspect, with the method shown.",
  },
  {
    name: "Built for Scale",
    body: "Processes, tooling and governance that hold up across markets, brands and teams.",
  },
] as const;

export const engagements = [
  {
    name: "Growth Starter",
    stage: "Establishing",
    forWhom: "Businesses building their first structured growth programme.",
    focus: "Foundations in one core channel",
    collaboration: "A strategist and a specialist, monthly reviews",
    outcome: "A measured baseline and the first compounding channel",
    includes: [
      "Growth audit and 90-day roadmap",
      "25 strategic search opportunities",
      "Technical and tracking foundations",
      "Monthly performance review",
    ],
  },
  {
    name: "Growth",
    stage: "Compounding",
    forWhom: "Companies with traction that need consistent, compounding demand.",
    focus: "Search plus one acquisition channel",
    collaboration: "A small dedicated team, fortnightly working sessions",
    outcome: "Predictable qualified demand from two channels",
    includes: [
      "Expanded search opportunity portfolio",
      "Content and authority programme",
      "Paid media or CRO workstream",
      "AI search visibility tracking",
    ],
  },
  {
    name: "Scale",
    stage: "Integrating",
    forWhom: "Multi-channel teams that need integration and pace.",
    focus: "Integrated search, media, content and conversion",
    collaboration: "Cross-functional pod working alongside your team",
    outcome: "Channels planned together and reported against revenue",
    includes: [
      "Cross-channel strategy and planning",
      "Experimentation programme",
      "Marketing automation and CRM alignment",
      "Revenue attribution reporting",
    ],
  },
  {
    name: "Growth Partner",
    stage: "Embedding",
    forWhom: "Leadership teams that want an embedded growth function.",
    focus: "Shared targets, embedded team",
    collaboration: "Senior strategist in your leadership rhythm",
    outcome: "A growth function accountable to the same targets you are",
    includes: [
      "Dedicated senior strategist",
      "Quarterly planning with leadership",
      "Unified reporting across every channel",
      "Multi-market execution",
    ],
  },
  {
    name: "Enterprise",
    stage: "Governing",
    forWhom: "Complex organisations with multiple brands, markets or business units.",
    focus: "Governance, scale and custom scope",
    collaboration: "Programme office, service levels and enablement",
    outcome: "Consistent standards across brands, markets and teams",
    includes: [
      "Custom scope and service levels",
      "Governance and enablement for internal teams",
      "Security, legal and procurement alignment",
      "Executive reporting",
    ],
  },
] as const;

export const caseStudyStructure = [
  { name: "Challenge", body: "The commercial problem, in the client's terms." },
  { name: "Strategy", body: "What we chose to do, and what we chose not to." },
  { name: "Execution", body: "The work that shipped, and who did it." },
  { name: "Result", body: "Measured change, with dates and sources." },
  { name: "Business Impact", body: "What it meant for pipeline and revenue." },
] as const;
