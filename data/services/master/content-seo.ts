import type { Service, ServiceMaster } from "@/types";

export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is content SEO?",
    text: "Content SEO is the practice of planning, writing and maintaining website content so that it matches what people search for and deserves to rank for it. It starts with search intent, organises pages into topic clusters, defines each page in a brief before it is written, and keeps published pages accurate through scheduled refreshes. Experience, expertise and clear sourcing are built in. It is measured by the qualified visits and enquiries that content produces, not by how much is published.",
    takeaways: [
      "Every page should target one intent; two pages chasing the same search weaken each other.",
      "A brief decides most of a page's quality before a word is written.",
      "Refreshing a page that already ranks is often quicker to pay back than publishing a new one.",
      "E-E-A-T is a quality framework, not a single score that can be optimised directly.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses whose buyers research before they enquire" },
    { label: "Works alongside", value: "Technical SEO, digital PR, AEO and content marketing" },
    { label: "Typical horizon", value: "Refreshes can move in weeks; new clusters often need 3 to 9 months, depending on competition" },
    { label: "Measured in", value: "Non-brand organic visits, leads and pipeline from content" },
  ],

  pillars: [
    {
      title: "Search intent research",
      body: "Before a page is planned we read the results for its target searches: what format ranks, which questions are answered and what is missing. That tells us what the searcher expects and where a better page is possible.",
      items: ["Query grouping by intent and buying stage", "Results page and competitor review", "Questions from sales and support teams", "Gaps no ranking page covers", "Topics not worth pursuing"],
    },
    {
      title: "Topic clusters and site architecture",
      body: "A cluster is a pillar page and the supporting pages around it, linked so that readers and search engines can see the whole subject is covered. We map every page to one role so that nothing overlaps and nothing is orphaned.",
      items: ["Pillar and supporting page map", "One primary intent per URL", "Internal links planned with the content", "Cannibalisation found and resolved", "Hub pages and navigation placement"],
      href: "/technical-seo/",
    },
    {
      title: "Content briefs",
      body: "A brief turns research into instructions a writer can follow. It fixes the angle, the structure and the evidence before drafting starts, which is the point where most weak content could have been prevented.",
      items: ["Target intent and reader described", "Heading outline and questions to answer", "Sources, data and examples required", "Internal links in and out", "Subject expert named for review"],
    },
    {
      title: "Expert-reviewed writing and E-E-A-T",
      body: "AI speeds up research and first drafts. Editors shape the piece, and someone with real knowledge of the subject checks it and adds what only experience provides.",
      items: ["AI-assisted drafts, edited by people", "Fact-checking against primary sources", "Named authors and reviewers with credentials", "First-hand examples and original detail", "Review dates shown on the page"],
    },
    {
      title: "Refresh, consolidation and pruning",
      body: "Content decays as facts change and competitors publish. A rolling schedule decides which pages to update, which to merge into a stronger one and which to remove.",
      items: ["Decay detection from Search Console data", "Updates to facts, examples and structure", "Overlapping pages merged with redirects", "Pages with no purpose removed", "Refresh calendar ordered by page value"],
    },
    {
      title: "Answer-ready structure for AI search",
      body: "Search features and AI assistants lift short, self-contained passages. Pages built around clear questions and direct answers are easier to quote, and easier for people to read.",
      items: ["Direct answers near the top", "Question-led headings", "Definitions, steps and comparison tables", "Schema that matches visible content", "Claims that can be cited and checked"],
      href: "/aeo-services/",
    },
  ],

  mechanics: {
    heading: "How does a page earn a ranking for a topic?",
    intro: "Search engines do not rank content for being long or frequent. A page is assessed against what the searcher wanted, in the context of the site it sits on, and that assessment is repeated as the web changes. Five things decide the outcome.",
    stages: [
      { name: "Intent", happens: "The engine interprets what the searcher wants: to learn, compare, buy or reach a specific site.", we: "Read the live results for each topic and choose the page type and angle that fit." },
      { name: "Relevance", happens: "Pages are judged on how fully and clearly they satisfy that need.", we: "Brief each page to answer the main question first, then the follow-up questions a reader would have." },
      { name: "Context", happens: "Links from related pages on the same site show that the subject is covered in depth.", we: "Build clusters and connect them, so that no page stands alone." },
      { name: "Trust", happens: "Signs of experience, expertise and reliability are weighed, most heavily on topics affecting health, money or safety.", we: "Use qualified reviewers, cite sources and show who wrote and checked each page." },
      { name: "Freshness", happens: "Over time facts change and competitors publish, so positions drift.", we: "Monitor decay and refresh pages before they lose visibility, not after." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Content inventory", body: "Every indexable page is scored for traffic, rankings, overlap and decay, so we know what to keep, improve, merge or remove.", outputs: ["Content audit with an action per URL", "Baseline of content-driven visits and leads"] },
    { when: "Weeks 3 to 5", title: "Topic map", body: "Demand is grouped into clusters and ranked by commercial value. Existing pages are assigned roles and gaps become planned pages.", outputs: ["Topic and cluster map", "Prioritised editorial plan"] },
    { when: "Weeks 5 to 6", title: "Briefs and workflow", body: "The first set of briefs is written and the production workflow agreed: who drafts, who edits, who reviews as subject expert and who approves.", outputs: ["First briefs", "Agreed review workflow"] },
    { when: "Month 2 onward", title: "Publish and refresh in cycles", body: "New pages and refreshes ship together each cycle, with internal links added as part of the same work.", outputs: ["Published and refreshed pages", "Internal link updates"] },
    { when: "Every month", title: "Cluster review", body: "Pages are read by cluster: what ranks, what earns visits and what produces enquiries. The plan is adjusted to match.", outputs: ["Report by cluster", "Updated plan and refresh list"] },
  ],

  comparison: {
    heading: "Content SEO or content marketing: which do you need?",
    intro: "The two overlap and are often confused. Content SEO starts from existing search demand; content marketing starts from the audience and the brand, and uses many channels to reach them.",
    columns: ["Content SEO", "Content marketing"],
    rows: [
      { label: "Starting point", a: "What people already search for", b: "What the audience should hear" },
      { label: "Distribution", a: "Organic search and AI answers", b: "Social, email, events, PR, search" },
      { label: "Typical formats", a: "Guides, comparisons, service pages", b: "Research, opinion, video, newsletters" },
      { label: "Demand", a: "Captures existing demand", b: "Can create new demand" },
      { label: "Lifespan", a: "Compounds while maintained", b: "Often peaks at launch" },
      { label: "Measured by", a: "Rankings, organic visits, leads", b: "Reach, engagement, influenced pipeline" },
    ],
    verdict: "If buyers already search for what you sell, content SEO is usually the more direct route to enquiries. If the category is new or the sale depends on reputation, content marketing has to do more of the work, and the two should share one plan.",
    link: { label: "See our content marketing service", href: "/content-marketing/" },
  },

  industries: ["saas", "b2b", "finance", "healthcare", "professional-services", "education"],
  markets: ["india", "usa", "uk", "australia"],
  scenario: "b2b-saas-pipeline-quality",

  faqs: [
    { q: "How much does content SEO cost?", a: "Cost depends on how many pages are needed, how specialist the subject is and how much review your own experts can provide. A technical or regulated topic takes more research and checking than a general one. We scope after a growth audit, once the content inventory shows how much can be refreshed instead of written new." },
    { q: "How long does content take to rank?", a: "It varies with competition and the authority of the site. Refreshed pages that already rank can improve within weeks of being recrawled. New pages on competitive topics commonly take several months, and a cluster tends to strengthen as more of it is published. We set expectations per topic after the audit." },
    { q: "Is AI-written content bad for SEO?", a: "Not because of how it was produced. Search engines assess whether content is helpful and reliable, and mass-produced pages with nothing original tend to fail that test however they were written. We use AI for research and drafts, then rely on editors and subject experts for accuracy, experience and judgement." },
    { q: "What is a topic cluster?", a: "A topic cluster is a group of pages covering one subject: a broad pillar page and narrower supporting pages, each targeting a distinct search and all linked together. The structure helps readers move through the subject and helps search engines see that the site covers it in depth, not in isolated articles." },
    { q: "What is E-E-A-T and is it a ranking factor?", a: "E-E-A-T stands for experience, expertise, authoritativeness and trust. It comes from the guidelines Google gives its quality raters and describes what reliable content looks like. It is not a single measurable score, but the things it describes, such as accurate information, credible authors and clear sourcing, are what ranking systems aim to reward." },
    { q: "How often should we publish new content?", a: "As often as you can maintain quality, and no more. There is no reward for frequency in itself. A smaller number of well-briefed, expert-reviewed pages that complete a cluster will usually outperform a steady stream of thin articles. Many sites benefit more from refreshing what exists than from adding to it." },
    { q: "Is content SEO worth it for a small site?", a: "It can be, if the scope is narrow. A small site rarely wins broad, competitive terms early, but it can cover one specialist subject more thoroughly than larger competitors bother to. We would start with the searches closest to a purchase decision and build outward from there." },
    { q: "What do you need from us to start?", a: "Access to Search Console, analytics and the CMS, plus time with the people who know the subject and the customers: sales, support and product. Their questions and objections are the raw material for briefs. We also need a named reviewer who can confirm that what we publish is accurate." },
    { q: "How do you measure content SEO?", a: "By cluster, not by article count. We track rankings and non-brand organic visits for each topic, the share of published pages that earn traffic, and the leads or pipeline that content contributes where CRM data allows. Pages that earn nothing after a fair period are improved, merged or removed." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Content SEO Services: Briefs & Topic Clusters",
  metaDescription: "Content SEO services built on search intent: topic clusters, detailed briefs, expert-reviewed writing and scheduled refreshes that earn organic demand.",
};
