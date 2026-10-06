import type { Service, ServiceMaster } from "@/types";

export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is enterprise SEO?",
    text: "Enterprise SEO is search optimisation for very large websites and the organisations that run them. The principles are the same as any SEO, but the work changes: improvements are made to templates and systems instead of single pages, crawling and indexation are managed across hundreds of thousands or millions of URLs, and progress depends on governance, automation and agreement between engineering, product, legal and brand teams. It is measured by organic revenue and by how much recommended work reaches production.",
    takeaways: [
      "At scale, one template change affects thousands of pages, for better or worse.",
      "Very large sites are not crawled in full, so which URLs get crawled has to be managed.",
      "Most enterprise SEO value is lost in backlogs and releases, not in strategy.",
      "Automated monitoring exists to catch regressions before they turn into lost traffic.",
    ],
  },

  facts: [
    { label: "Best for", value: "Large sites with many templates, teams and release cycles" },
    { label: "Works alongside", value: "Engineering, product, analytics, content and paid search" },
    { label: "Typical horizon", value: "Fixes follow your release cycle; a programme is usually judged over 6 to 12 months" },
    { label: "Measured in", value: "Organic revenue, pipeline and recommended work shipped" },
  ],

  pillars: [
    {
      title: "Crawl and index management",
      body: "On a very large site, search engines choose what to crawl and what to keep. We use log files and crawl data to see where that attention goes, then steer it toward the pages that earn revenue.",
      items: ["Log file analysis by template", "Crawl waste from parameters and duplicates", "Sitemap segmentation and freshness", "Index coverage against intended URLs", "Rendering checks for JavaScript templates"],
      href: "/technical-seo/",
    },
    {
      title: "Template-level optimisation",
      body: "Pages on a large site are produced by a small number of templates. Improving a template, and the data that feeds it, changes every page built from it in one release.",
      items: ["Template inventory and traffic share", "Title, heading and metadata rules", "Structured data by page type", "Internal linking modules", "Quality thresholds for generated pages"],
    },
    {
      title: "Governance and release QA",
      body: "Sites of this size break through ordinary releases. Written standards, checks in the deployment process and clear ownership stop most regressions reaching production, and shorten the time taken to find the ones that do.",
      items: ["SEO standards for design and engineering", "Pre-release checks on staging", "Acceptance criteria on every ticket", "Ownership by template and section", "Incident process for regressions"],
    },
    {
      title: "Business cases and stakeholder alignment",
      body: "Search work competes with every other request for engineering time. We frame each initiative in the terms a roadmap owner uses: expected impact, confidence, effort and the risk of not acting.",
      items: ["Opportunity sizing with stated assumptions", "Prioritisation shared with product owners", "Legal, brand and compliance review paths", "Training for developers and editors", "A regular forum for search decisions"],
    },
    {
      title: "Automation and monitoring",
      body: "Nobody can review a million pages by hand. Scheduled crawls, alerts and AI-assisted analysis do the watching, and specialists decide what the findings mean and what to do about them.",
      items: ["Scheduled crawls of key templates", "Alerts on indexation and status changes", "Robots, canonical and metadata change detection", "Anomaly detection after releases", "Dashboards by business unit"],
    },
    {
      title: "Content operations at scale",
      body: "Many teams publish, often on the same topics. Shared briefs, workflows and a view of what already exists keep quality consistent and stop pages competing with each other.",
      items: ["Content inventory across business units", "Briefing and review workflow", "Cannibalisation between teams resolved", "Refresh schedule for high-value pages", "Rules for retiring content"],
      href: "/content-seo/",
    },
  ],

  mechanics: {
    heading: "How do search engines handle a site with millions of pages?",
    intro: "A small site is crawled and indexed almost in full. A very large one is sampled, prioritised and filtered, so the question becomes which pages receive attention. Each of these five stages removes pages from contention.",
    stages: [
      { name: "Allocation", happens: "The engine decides how much to crawl from how well the servers cope and how much it wants the content.", we: "Keep responses fast and remove low-value URLs so crawling concentrates on pages that matter." },
      { name: "Rendering", happens: "Pages that depend on JavaScript are rendered in a further step, which can delay or miss content.", we: "Check that critical content and links are present in the delivered HTML for each template." },
      { name: "Consolidation", happens: "Duplicate and near-duplicate URLs are grouped and one is chosen as the canonical.", we: "Make the intended canonical unambiguous through consistent links, tags, redirects and sitemaps." },
      { name: "Selection", happens: "Not every crawled page is indexed; pages judged thin or redundant are left out.", we: "Raise template quality and stop generating pages that have no search demand." },
      { name: "Ranking", happens: "Indexed pages compete on relevance, quality and the authority that internal and external links pass to them.", we: "Direct internal links to priority sections and improve the templates that underperform." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 4", title: "Discovery and access", body: "Crawls, log files, analytics and Search Console data are gathered by template, and we meet the teams who own platform, product, content and compliance.", outputs: ["Template-level technical audit", "Stakeholder and ownership map"] },
    { when: "Weeks 4 to 8", title: "Opportunity sizing", body: "Findings are grouped into initiatives, each with expected impact, confidence, effort and the assumptions behind the estimate.", outputs: ["Sized initiative list", "Business cases for the leading items"] },
    { when: "Weeks 8 to 12", title: "Roadmap and governance", body: "Initiatives are fitted to your release calendar, and standards, QA checks and monitoring are agreed with engineering.", outputs: ["Roadmap aligned to releases", "SEO standards and QA checklist"] },
    { when: "Month 4 onward", title: "Delivery through your process", body: "Tickets move through your backlog with acceptance criteria. We test on staging, verify in production and record what changed.", outputs: ["Verified releases", "Change log linked to performance"] },
    { when: "Every month", title: "Working and leadership reviews", body: "A working review with delivery teams covers progress and blockers. A shorter leadership view covers organic revenue, risks and the decisions needed.", outputs: ["Leadership report", "Reprioritised backlog"] },
  ],

  comparison: {
    heading: "In-house team or enterprise SEO agency: which do you need?",
    intro: "For most large organisations this is not an either-or decision. The useful question is which work needs someone inside the business every day, and which benefits from specialist depth and an outside perspective.",
    columns: ["In-house SEO team", "Enterprise SEO agency"],
    rows: [
      { label: "Context", a: "Deep knowledge of product and politics", b: "Learns it; brings an outside view" },
      { label: "Specialist depth", a: "Limited by headcount", b: "Specialists engaged as needed" },
      { label: "Influence", a: "Present in daily planning", b: "Independent voice for business cases" },
      { label: "Capacity", a: "Fixed and hard to flex", b: "Scales with the programme" },
      { label: "Continuity", a: "Exposed to staff turnover", b: "Documented and shared across a team" },
      { label: "Best use", a: "Ownership, relationships, daily decisions", b: "Audits, tooling, surges, second opinion" },
    ],
    verdict: "Keep ownership and internal relationships in-house, and use an agency for depth, capacity and an independent view. The arrangement works when both share one roadmap and one set of numbers.",
    link: { label: "See our engagement models", href: "/engagement-models/" },
  },

  industries: ["ecommerce", "finance", "travel", "real-estate", "technology", "healthcare"],
  markets: ["usa", "uk", "india", "europe"],

  faqs: [
    { q: "How is enterprise SEO different from regular SEO?", a: "The principles are identical; the constraints are not. On a large site, changes are made to templates and systems, crawling and indexation have to be managed deliberately, and every fix passes through several teams and a release cycle. Much of the work is governance, prioritisation and persuasion, alongside technical depth." },
    { q: "How much does enterprise SEO cost?", a: "Cost depends on the size of the site, the number of markets and business units, and how much of the work your internal teams will carry. Some organisations need an advisory layer; others need delivery capacity as well. We scope after a growth audit and set out what each part of the proposal covers." },
    { q: "How long before enterprise SEO shows results?", a: "It follows your release cycle more than any search engine. A template fix can show within weeks of going live, but getting it live may take a quarter. Early work therefore targets changes that are both high in impact and realistic to ship, while larger initiatives move through planning." },
    { q: "Is an enterprise SEO agency worth it if we already have an in-house team?", a: "Often, yes, for specific gaps. In-house teams know the business and hold the relationships, but are usually short of specialist depth, tooling or hours. An outside team adds those, along with an independent view that can help a business case land. It is not worth it if nobody internally can act on the output." },
    { q: "What is crawl budget and should we worry about it?", a: "Crawl budget is the amount of crawling a search engine is willing and able to do on your site. Most sites never need to think about it. It matters when a site has very many URLs, changes often, or generates large numbers of low-value pages that draw crawling away from important ones." },
    { q: "Which enterprise SEO tools do you use?", a: "We work with the crawling, log analysis, rank tracking and analytics tools you already license where they are fit for purpose, and add our own where there are gaps. Tools find issues; they do not rank them by business value or get them shipped. That part is specialist judgement and programme management." },
    { q: "How do you get SEO work prioritised by engineering?", a: "By presenting it the way other roadmap items are presented: sized impact with stated assumptions, effort agreed with the engineers who would do it, and clear acceptance criteria. We also separate small fixes that fit into existing sprints from initiatives that need their own slot, and report what shipped." },
    { q: "What do you need from us to start?", a: "Access to Search Console, analytics and, ideally, server log files; a staging environment; and introductions to the people who own platform, product, content and compliance. A named internal sponsor matters more than any tool, because someone has to be able to put search work on the roadmap." },
    { q: "How do you report enterprise SEO to leadership?", a: "In commercial terms: organic revenue or pipeline, non-brand visibility by business unit, and the share of recommended work that has shipped. Each figure shows its source and the assumptions behind any estimate. Delivery teams receive a more detailed view covering templates, indexation and regressions per release." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Enterprise SEO Services for Large Websites",
  metaDescription: "Enterprise SEO services for large, complex sites: crawl management, template optimisation, governance, automation and stakeholder alignment at scale.",
};
