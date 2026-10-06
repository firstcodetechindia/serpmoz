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
    items: ["Research", "Generate", "Analyze", "Automate", "Experiment"],
  },
  decide: {
    label: "Experts decide",
    note: "Judgement built from seeing what works across markets, budgets and business models.",
    items: ["Strategy", "Positioning", "Prioritization", "Search Intent", "Validation", "Business Context"],
  },
  connect: {
    label: "SERPMOZ combines",
    note: "One team and one reporting view, so effort can be traced from first impression to closed revenue.",
    items: [
      { name: "AI", gives: "Speed and scale", body: "Research, drafts and analysis in hours, not weeks." },
      { name: "Experts", gives: "Judgement", body: "What is worth doing, and whether it is right." },
      { name: "Strategy", gives: "Direction", body: "Where to compete, in what order, and what to leave." },
      { name: "Execution", gives: "Shipped work", body: "Search, media, content and web that actually go live." },
    ],
    result: { name: "Growth you can trace", body: "Qualified demand, customers and revenue, each tied back to the work behind it." },
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
  { step: "Growth", note: "Qualified demand, customers and revenue you can trace" },
] as const;

export const searchSurfaces = [
  { name: "Google", detail: "Results, shopping, news" },
  { name: "AI Search", detail: "Assistants and AI answers" },
  { name: "Google Maps", detail: "Local packs and profiles" },
  { name: "YouTube", detail: "How-to and review video" },
  { name: "Instagram", detail: "Discovery and proof" },
  { name: "LinkedIn", detail: "People and companies" },
  { name: "Communities", detail: "Forums and Q&A" },
  { name: "Marketplaces", detail: "Product and service platforms" },
  { name: "Industry Websites", detail: "Directories, press, reviews" },
] as const;

export const searchServices = [
  { name: "SEO", href: "/seo-services/" },
  { name: "AI SEO", href: "/ai-seo-services/" },
  { name: "AEO", href: "/aeo-services/" },
  { name: "GEO", href: "/geo-services/" },
  { name: "Local SEO", href: "/local-seo-services/" },
  { name: "Google Maps SEO", href: "/google-maps-seo/" },
  { name: "YouTube", href: "/youtube-marketing/" },
  { name: "Instagram", href: "/instagram-marketing/" },
  { name: "LinkedIn", href: "/linkedin-marketing/" },
  { name: "Ecommerce SEO", href: "/ecommerce-seo/" },
  { name: "Digital PR", href: "/digital-pr/" },
] as const;

/** Named as platforms we work across. Not partnerships or endorsements. */
export const platforms = ["Google Search", "Google Ads", "Google Business Profile", "Microsoft Advertising", "Meta", "LinkedIn", "YouTube", "Shopify", "WordPress", "Webflow", "HubSpot", "GA4", "WhatsApp Business", "ChatGPT", "Gemini", "Perplexity"] as const;

/** What an AI search programme covers. Capabilities, not promises. */
export const aiSearchCapabilities = [
  { name: "AI Search", body: "How assistants and AI results describe your category, and whether you appear." },
  { name: "Answer Engines", body: "Content structured to answer the questions buyers actually ask." },
  { name: "Generative Search", body: "Being a source that generated answers draw on and link to." },
  { name: "Entity Visibility", body: "A consistent, machine-readable account of who you are and what you do." },
  { name: "Brand Mentions", body: "Presence in the publications and communities that models learn from." },
  { name: "Citation Opportunities", body: "Pages and data worth citing, placed where they will be found." },
  { name: "Content Coverage", body: "The gaps between what buyers ask and what your site answers." },
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

/**
 * The six stages. `body` and `detail` feed the loop diagram and the homepage;
 * `happens`, `ai`, `experts` and `receive` feed the /methodology/ page.
 */
export const methodology = [
  {
    name: "Discover",
    body: "Understand business, market, customer and competition.",
    detail:
      "Stakeholder interviews, commercial model, existing data and a clear statement of what growth needs to look like.",
    happens:
      "We learn how the business makes money before we look at a single ranking. That means conversations with the people who own revenue, a read of the commercial model and a review of the data you already hold: analytics, CRM, ad accounts and past reports.",
    ai: ["Summarising interviews, documents and past reports", "Mapping the competitor set and its public footprint", "Collecting how buyers phrase the problem in search, forums and reviews"],
    experts: ["What growth has to mean for this business", "Which customers and markets matter most", "Which of your numbers can be trusted"],
    receive: ["A written growth brief: goals, constraints, audience and competitors", "A list of data and access gaps to close before diagnosis"],
  },
  {
    name: "Diagnose",
    body: "Identify visibility, demand, conversion and revenue gaps.",
    detail:
      "Audits across search, AI visibility, paid media, analytics and conversion paths, benchmarked against named competitors.",
    happens:
      "We audit the whole path from search to sale: technical health, organic and local visibility, presence in AI answers, paid media accounts, content, conversion paths and tracking. Each finding is checked against the competitors you actually lose to.",
    ai: ["Processing crawls, logs and large keyword sets", "Sampling AI assistants for where your brand does and does not appear", "Flagging waste and anomalies in ad accounts and analytics"],
    experts: ["Which findings are causes and which are symptoms", "How you compare with the competitors that matter", "What is a real constraint and what is noise"],
    receive: ["A diagnostic report with the evidence behind each finding", "A baseline for the measures we will track"],
  },
  {
    name: "Prioritize",
    body: "Focus resources on high-impact opportunities.",
    detail:
      "Every opportunity scored for impact, confidence and effort. The roadmap is as much about what is left out as what is included.",
    happens:
      "Every opportunity is scored for commercial impact, confidence and effort, then put in order. The roadmap says what will be done first and why. It also says what will not be done, which is usually the more useful half.",
    ai: ["Sizing demand and modelling scenarios for each opportunity", "Grouping related fixes into workstreams", "Checking dependencies between tasks"],
    experts: ["The order of work and what is left out", "Where budget and effort go", "What will count as success, and by when it should be judged"],
    receive: ["A prioritised roadmap with the reasoning shown", "Measures and targets set against your own baseline", "A recommended scope and engagement model"],
  },
  {
    name: "Execute",
    body: "Combine experts, AI, technology and automation.",
    detail:
      "Specialists own outcomes. AI handles volume and speed. Work ships in short cycles with review built in.",
    happens:
      "Work ships in short cycles: technical changes, content, campaigns, landing pages, automation. A specialist owns each workstream and reviews what goes out. AI carries the volume so that people can spend their time on the decisions.",
    ai: ["First drafts, briefs, structured data and ad variants", "Bulk technical changes and quality checks", "Routine reporting and monitoring"],
    experts: ["What is published under your name", "Technical, creative and positioning choices", "When a piece of work is good enough, and when to stop"],
    receive: ["Shipped work each cycle", "A change log of what went live and why", "Review points before anything significant is published"],
  },
  {
    name: "Measure",
    body: "Track visibility, leads, conversions and revenue.",
    detail:
      "One reporting view agreed at the start, reconciled with your CRM, read the same way by marketing, sales and finance.",
    happens:
      "Results are read in one reporting view agreed at the start, so marketing, sales and finance are looking at the same thing. Where you give us access, it is reconciled with your CRM so that leads can be followed to revenue.",
    ai: ["Joining data across platforms", "Watching for anomalies between reviews", "Tracking presence in AI answers over time"],
    experts: ["What the numbers mean and what they do not", "How much credit a channel should take", "How to report plainly when a result is unclear"],
    receive: ["One reporting view across visibility, leads, conversions and revenue", "Written commentary with each review", "Sources shown for every figure"],
  },
  {
    name: "Optimize",
    body: "Continuously improve based on evidence.",
    detail:
      "What worked gets more budget. What did not gets changed or stopped. The plan is revised every quarter.",
    happens:
      "Evidence from the last cycle decides the next one. What worked gets more budget, what did not is changed or stopped, and the roadmap is revised. Then the loop starts again with better information than it had before.",
    ai: ["Surfacing patterns across results", "Proposing tests and variants", "Re-running the diagnostic checks on a schedule"],
    experts: ["What gets more investment and what stops", "Whether a result is a trend or a blip", "How the plan should change"],
    receive: ["A revised roadmap each quarter", "A record of what was tested and what was learned", "The brief for the next cycle"],
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
    body: "Search engines, AI answers, maps, social and marketplaces treated as one discovery system.",
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

/** Engagement models live in data/engagement.ts. Re-exported for existing imports. */
export { engagements } from "./engagement";

export const caseStudyStructure = [
  { name: "Challenge", body: "The commercial problem, in the client's terms." },
  { name: "Strategy", body: "What we chose to do, and what we chose not to." },
  { name: "Execution", body: "The work that shipped, and who did it." },
  { name: "Result", body: "Measured change, with dates and sources." },
  { name: "Business Impact", body: "What it meant for pipeline and revenue." },
] as const;
