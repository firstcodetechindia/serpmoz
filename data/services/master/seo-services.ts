import type { ServiceMaster } from "@/types";

/**
 * /seo-services/ — the benchmark page.
 * Rules: no client names, no result figures, no guarantees. Time ranges are
 * described as typical and conditional, never promised.
 */
export const seoServices: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are SEO services?",
    text: "SEO services are the ongoing work of making a website easier for search engines to crawl, understand and trust, so that it appears when people search for what the business sells. That work covers three things: the technical health of the site, the content that answers what buyers search for, and the authority the site earns from other credible sources. Done properly, it is measured by the enquiries and revenue organic search produces, not by rankings alone.",
    takeaways: [
      "SEO has three parts: technical foundations, content matched to search intent, and earned authority.",
      "It compounds. Pages that earn a position keep producing enquiries without a cost per click.",
      "Technical fixes can show within weeks; competitive positions usually take months of consistent work.",
      "No one can guarantee a ranking. A credible provider commits to a plan, execution and honest reporting.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses with demand people already search for" },
    { label: "Works alongside", value: "Paid search, content, CRO and AI search" },
    { label: "Typical horizon", value: "Early gains in weeks, compounding over 6 to 12 months" },
    { label: "Measured in", value: "Qualified leads and revenue from organic search" },
  ],

  pillars: [
    {
      title: "Technical SEO",
      body: "If search engines cannot reach, render and understand your pages, nothing else matters. We find what is blocking them and hand your developers a short, ordered list of fixes.",
      items: ["Crawling, indexation and rendering", "Site architecture and internal linking", "Core Web Vitals and page speed", "Structured data and canonicalisation", "Migrations and redesigns without traffic loss"],
      href: "/technical-seo/",
    },
    {
      title: "Search intent and keyword strategy",
      body: "We group demand by what the searcher is trying to do, then score each group for commercial value and difficulty. The output is a ranked set of opportunities, with a line under what is not worth pursuing.",
      items: ["Intent mapping across the buying journey", "Opportunity sizing by value, not volume", "Competitor gap analysis", "Page-to-query mapping", "Cannibalisation clean-up"],
    },
    {
      title: "On-page and content",
      body: "Every page has one job in the buying journey. Strategists write the briefs, AI speeds up the drafts, and subject specialists edit and fact-check before anything is published.",
      items: ["Service, category and comparison pages", "Topic clusters and supporting guides", "Titles, headings and metadata", "Content refresh and consolidation", "E-E-A-T signals: authorship, sources, review"],
      href: "/content-seo/",
    },
    {
      title: "Authority and digital PR",
      body: "Search systems weigh who vouches for you. We earn coverage and references from publications your buyers already trust, using original data and expert comment. No link schemes and no private networks.",
      items: ["Backlink profile audit and risk review", "Data-led stories and expert commentary", "Unlinked mention and broken link recovery", "Industry and local citations", "Brand search growth"],
      href: "/digital-pr/",
    },
    {
      title: "Local and map visibility",
      body: "For businesses with locations or service areas, a large share of high-intent demand is decided in map results before anyone reaches the website.",
      items: ["Google Business Profile management", "Reviews and reputation", "Location pages and local schema", "Citation consistency", "Map ranking tracked by area"],
      href: "/local-seo-services/",
    },
    {
      title: "AI search readiness",
      body: "Buyers increasingly read an AI-generated answer instead of a results page. The same foundations that earn rankings, plus clear entities and citable content, decide whether you are named in that answer.",
      items: ["Answer-first content structure", "Entity and brand consistency", "Citable facts and original data", "Presence in sources AI systems draw on", "Visibility tracked across assistants"],
      href: "/ai-seo-services/",
    },
  ],

  mechanics: {
    heading: "How does SEO actually work?",
    intro: "A page has to pass five stages before organic search produces a customer. Most programmes concentrate on the middle one. We work on all five, because a failure at any stage wastes the effort spent on the others.",
    stages: [
      { name: "Crawl", happens: "Search engines discover your pages by following links and sitemaps.", we: "Remove crawl traps, fix broken paths and make important pages easy to reach." },
      { name: "Index", happens: "Pages are rendered, understood and stored, or left out.", we: "Resolve duplication, rendering and quality issues that keep pages out of the index." },
      { name: "Rank", happens: "For each search, pages are ordered by relevance, quality and authority.", we: "Match pages to intent, improve the content and earn credible references." },
      { name: "Click", happens: "The searcher chooses between results, AI answers, maps and ads.", we: "Write titles and descriptions worth choosing, and earn rich results with structured data." },
      { name: "Convert", happens: "The visitor decides whether to enquire, buy or leave.", we: "Align the page with the promise of the search and make the next step obvious." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Audit and baseline", body: "A full technical crawl, content inventory, authority review and a read of how organic search currently contributes to leads.", outputs: ["Technical audit", "Baseline for every metric we plan to move"] },
    { when: "Weeks 3 to 5", title: "Opportunity model", body: "Demand grouped by intent and scored for value and effort. You see what we would pursue, in what order, and what we would leave alone.", outputs: ["Ranked opportunity model", "Page-to-query map"] },
    { when: "Week 6", title: "90-day roadmap", body: "Technical fixes, on-page work, content and authority sequenced into a plan your team and ours can ship.", outputs: ["Prioritised roadmap", "Developer tickets and content briefs"] },
    { when: "Month 2 onward", title: "Execution in cycles", body: "Work ships in fortnightly cycles: fixes implemented, pages published, links earned. A specialist reviews everything that goes live.", outputs: ["Shipped work each cycle", "Change log"] },
    { when: "Every month", title: "Review and reprioritise", body: "Visibility, leads and revenue are read together. What worked gets more effort; what did not is changed or stopped.", outputs: ["Performance report tied to leads", "Updated priorities"] },
  ],

  comparison: {
    heading: "SEO or paid search: which should you invest in?",
    intro: "They answer different needs, and most growing businesses use both. The useful question is the mix, and that depends on how soon you need results and how long you intend to keep them.",
    columns: ["SEO", "Paid search (PPC)"],
    rows: [
      { label: "Speed", a: "Builds over months", b: "Traffic from the day campaigns launch" },
      { label: "Cost model", a: "Investment in assets you keep", b: "Pay for every click" },
      { label: "When you stop", a: "Results taper slowly", b: "Traffic stops immediately" },
      { label: "Trust", a: "Organic results are widely trusted", b: "Labelled as advertising" },
      { label: "Control", a: "Earned, not bought; no fixed position", b: "Precise control of message, timing and budget" },
      { label: "Best use", a: "Durable demand you want to own", b: "Launches, testing and immediate pipeline" },
    ],
    verdict: "Use paid search to learn quickly which searches convert, and SEO to own the ones that prove valuable. Planned together, each makes the other cheaper.",
    link: { label: "See our PPC management service", href: "/ppc-management/" },
  },

  industries: ["saas", "ecommerce", "healthcare", "real-estate", "legal", "local-business"],
  markets: ["india", "usa", "uk", "uae"],
  scenario: "b2b-saas-pipeline-quality",

  faqs: [
    { q: "How long does SEO take to work?", a: "It depends on your starting point, your competition and how quickly changes are implemented. Technical fixes can show within a few weeks. Competitive positions usually take several months of consistent work, and the benefit keeps building after that. We set expectations after the audit, when we can see what is actually holding the site back." },
    { q: "How much do SEO services cost?", a: "Cost depends on the size of the site, how competitive the market is and how much of the work your own team will carry. We do not publish a fixed price because a fixed scope rarely fits. After a growth audit you receive a specific proposal with the reasoning behind it." },
    { q: "Do you guarantee first-page rankings?", a: "No. Search engines control their results, and anyone promising a position is guessing. We commit to a prioritised plan, transparent execution and honest reporting against business outcomes." },
    { q: "What is the difference between SEO and PPC?", a: "SEO earns visibility in organic results and compounds over time. PPC buys visibility immediately and stops when the budget does. Most businesses benefit from both: paid search for speed and testing, SEO for durable, lower-cost demand." },
    { q: "Is SEO still worth it now that people use AI search?", a: "Yes. AI answers are built from the same web that search engines index, and they favour sources that are clear, credible and well structured. Strong SEO foundations are the starting point for appearing in AI-generated answers, which is why we plan the two together." },
    { q: "Is your content written by AI?", a: "AI is used for research, outlining and first drafts where it saves time. Strategy, editing, fact-checking and final approval are done by people who understand your market. Nothing is published under your name without specialist review." },
    { q: "Can you work with our developers and content team?", a: "Yes. Findings are delivered as tickets and briefs your team can act on, or we can implement directly where you would prefer that. Most engagements are a mix of both." },
    { q: "What do you need from us to start?", a: "Access to Google Search Console and analytics, a conversation with whoever owns revenue targets, and visibility of your CRM or lead data if you want organic search tied to pipeline." },
    { q: "How do you report on SEO?", a: "One monthly view covering visibility, qualified traffic, leads and revenue influenced by organic search, with written commentary and the source of every figure shown." },
  ],
};
