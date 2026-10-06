import type { Service, ServiceMaster } from "@/types";

/**
 * /ai-seo-services/ : the umbrella page for AI-assisted SEO with human
 * validation, plus readiness for AI search. AEO and GEO have their own pages.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are AI SEO services?",
    text: "AI SEO services combine two things. The first is using AI models to do search work faster and across more data: grouping queries, finding content gaps, drafting briefs and pages, and watching a site for problems. The second is preparing that site to be read and cited by AI search features. In both, a specialist decides what to target and checks every output before it is published, because a model can produce fluent text that is wrong.",
    takeaways: [
      "AI changes the speed and coverage of SEO work, not the factors that make a page deserve to rank.",
      "Search engines judge whether content is helpful and reliable, not which tool drafted it.",
      "Every AI-assisted output needs a named person responsible for its accuracy.",
      "AI search readiness starts with ordinary SEO foundations, then adds clear entities and citable content.",
    ],
  },

  facts: [
    { label: "Best for", value: "Teams with more search opportunity than hours to pursue it" },
    { label: "Works alongside", value: "Core SEO, content, AEO and GEO" },
    { label: "Typical horizon", value: "Faster production within weeks; ranking gains follow the usual months" },
    { label: "Measured in", value: "Time to publish, share of pages earning traffic, organic leads" },
  ],

  pillars: [
    {
      title: "Search data analysis at full scale",
      body: "Manual research samples a market because nobody has time to read all of it. With models doing the sorting, we can classify every query your site and its competitors appear for, then let a strategist decide what the patterns mean.",
      items: ["Query clustering by intent and topic", "Search Console data mined beyond the interface limits", "Results page feature mapping per cluster", "Competitor coverage compared page by page", "Opportunities scored for value and effort"],
    },
    {
      title: "Evidence-based content briefs",
      body: "A brief is where most AI content goes wrong, because the model is asked to write before anyone has decided what the page is for. Ours start from search evidence and your own subject knowledge, and a strategist signs each one off.",
      items: ["One search intent and one job per page", "Questions and subtopics the page must cover", "Facts, sources and examples supplied by your experts", "Internal links to and from the page", "Points the draft must not claim"],
      href: "/content-seo/",
    },
    {
      title: "Assisted drafting and refresh",
      body: "Models are good at first versions, restructuring and spotting what an old page is missing. They are unreliable on facts, figures and anything specific to your business, so drafts are treated as raw material for an editor.",
      items: ["First drafts written from approved briefs", "Refreshes for pages losing visibility", "Titles and descriptions for large page sets", "Consolidation of overlapping pages", "House style and terminology enforced by rules"],
    },
    {
      title: "Human validation and editorial control",
      body: "This is the part that makes the rest safe to use. Every batch passes a review with defined checks, and some categories of content are never automated at all.",
      items: ["Fact and source checks on every claim", "Subject specialist review for regulated topics", "Duplicate and near-duplicate detection", "Named reviewer recorded against each page", "A written list of tasks kept fully manual"],
    },
    {
      title: "Automation for technical upkeep",
      body: "Much of technical SEO is repetitive checking that slips when a team is busy. Scripts and models take over the watching, and people act on what they find.",
      items: ["Internal link suggestions across the site", "Structured data generated from page content", "Alerts for indexing and status code changes", "Content decay detection by page group", "Crawl comparisons after each release"],
      href: "/technical-seo/",
    },
    {
      title: "Readiness for AI search",
      body: "AI search features read your pages through the same crawling and indexing as classic search, then summarise or cite them. We make sure the site is accessible to those systems and that its key facts are stated plainly enough to be reused.",
      items: ["Crawler access rules reviewed for AI user agents", "Answer-first structure on priority pages", "Consistent brand and product facts across the site", "Original data and statements worth citing", "A baseline of how assistants currently describe you"],
      href: "/geo-services/",
    },
  ],

  mechanics: {
    heading: "How does AI-assisted SEO keep quality under control?",
    intro: "The risk in AI SEO is not the model. It is a process with no checkpoint between a prompt and a published page. A sound workflow has five stages, and a person owns the decision at the first and fourth.",
    stages: [
      { name: "Gather", happens: "Search, crawl and analytics data is collected into one place, far more than a person could read.", we: "Connect Search Console, crawl output and competitor data, and remove noise such as brand and irrelevant queries." },
      { name: "Classify", happens: "Models group queries and pages by intent and flag gaps, overlap and decay.", we: "Review the groupings, correct mislabelled intent and choose which opportunities are worth the effort." },
      { name: "Draft", happens: "Briefs, metadata and first versions are generated from the approved evidence.", we: "Supply the facts, constraints and examples the model cannot know, so it is not left to invent them." },
      { name: "Validate", happens: "Each output is checked against sources, existing pages and editorial rules.", we: "Edit, fact-check and reject. Anything a specialist would not put their name to does not go live." },
      { name: "Monitor", happens: "Published pages are crawled, indexed and judged by searchers over the following weeks.", we: "Track which assisted pages earn traffic and leads, and feed the result back into the next cycle." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Assessment", body: "We review current organic performance, how your team already uses AI tools and where hours are being lost. Existing AI-written pages are sampled for accuracy and duplication.", outputs: ["Baseline of organic performance and production time", "Risk review of existing AI-assisted content"] },
    { when: "Weeks 2 to 4", title: "Market analysis", body: "Query and competitor data is clustered and scored. A strategist turns the output into a ranked list of what to build, refresh, merge or leave.", outputs: ["Opportunity and gap analysis", "Priority list with reasoning"] },
    { when: "Weeks 4 to 6", title: "Workflow design", body: "Pipelines are built around your CMS and tools for the tasks where models are dependable. Review points and manual-only tasks are written down before anything is produced.", outputs: ["Workflow library with checkpoints", "Quality and accuracy guidelines"] },
    { when: "Month 2 onward", title: "Assisted production", body: "Briefs, pages and refreshes ship in batches. Each batch is reviewed by a specialist, and technical monitoring runs in the background.", outputs: ["Reviewed pages and refreshes each cycle", "Alerts triaged by a person"] },
    { when: "Every month", title: "Quality and results review", body: "We read output quality and business results side by side. Workflows that produce pages nobody visits are changed or switched off.", outputs: ["Performance report tied to leads", "Adjusted workflows and priorities"] },
  ],

  comparison: {
    heading: "AI-assisted SEO or fully automated AI content?",
    intro: "Both use the same models. The difference is whether a person decides what gets made and checks it before it is published, and that difference shows in what happens to the pages afterwards.",
    columns: ["AI-assisted SEO", "Fully automated content"],
    rows: [
      { label: "Who decides topics", a: "A strategist, from evidence", b: "A keyword list and a prompt" },
      { label: "Accuracy", a: "Checked against sources", b: "Unverified, errors go live" },
      { label: "Volume", a: "Fewer pages, each with a purpose", b: "Very high, mostly similar" },
      { label: "Risk", a: "Low, with accountable review", b: "Spam policies and brand damage" },
      { label: "Cost per page", a: "Higher, includes expert time", b: "Very low" },
      { label: "Best use", a: "Pages buyers rely on", b: "Internal drafts and prototypes" },
    ],
    verdict: "Automation is cheap per page and expensive per useful page, because most of what it publishes earns nothing and some of it harms trust. Assisted work costs more to produce and is the only version we would put on a site that depends on its reputation.",
    link: { label: "See how we approach content SEO", href: "/content-seo/" },
  },

  industries: ["saas", "ecommerce", "technology", "b2b", "finance", "education"],
  markets: ["india", "usa", "uk", "singapore"],
  scenario: "b2b-saas-pipeline-quality",

  faqs: [
    { q: "What is AI SEO?", a: "AI SEO is search engine optimisation carried out with the help of AI models, and increasingly it also means preparing a site for AI search features. Models handle analysis, drafting and monitoring. People choose the strategy and verify the output. The ranking factors themselves are the same as for any other SEO work." },
    { q: "How much do AI SEO services cost?", a: "Cost depends on the size of your site, how much content needs producing or refreshing, and how much review your sector demands. Regulated subjects need more specialist time. We do not publish a fixed price. A growth audit comes first, and the proposal that follows explains the scope and the reasoning." },
    { q: "Does Google penalise AI-generated content?", a: "Not for being AI-generated. Google's guidance is about whether content is helpful, original and reliable, however it was produced. What its spam policies do target is content produced at scale mainly to manipulate rankings, with little value to readers. Unreviewed bulk publishing falls into that category very easily." },
    { q: "Is AI SEO cheaper than traditional SEO?", a: "It lowers the cost of research and first drafts, and it does not remove the cost of judgement. The saving is usually spent on covering more of the market at the same budget instead of on a smaller invoice. If a quote is far cheaper than expected, ask who reviews the output." },
    { q: "AI SEO vs GEO: what is the difference?", a: "AI SEO is the umbrella: using AI to do search work well, and making a site ready for AI search in general. GEO is a specialism within it that measures and improves how often your brand is named and cited inside generated answers. Many businesses start with the first and add the second." },
    { q: "Can we just use ChatGPT for SEO ourselves?", a: "You can, and for outlines, rewrites and idea generation it is useful. It does not have your Search Console data, your competitors' coverage or your product facts unless you supply them, and it will fill gaps with plausible guesses. The value of a managed service is the data, the process and the checking." },
    { q: "How quickly will we see results from AI SEO?", a: "Production speeds up within the first few weeks, once workflows are in place. Search results follow the normal pattern: refreshed pages can respond within weeks, and new pages in competitive areas usually take several months. Publishing faster does not make search engines evaluate pages faster." },
    { q: "What do you need from us to get started?", a: "Access to Search Console, analytics and your CMS, a list of the AI tools your team already uses, and time with someone who knows the product well enough to correct a draft. That last item matters most. Without subject input, models produce generic pages." },
    { q: "How do you measure whether AI-assisted content is working?", a: "We tag assisted pages and track them as a group: how many are indexed, how many earn impressions and clicks, and how many contribute to leads. That is reported alongside production time. A workflow that produces pages quickly and none of them earn traffic is counted as a failure." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "AI SEO Services: Expert-Checked AI Workflows",
  metaDescription:
    "AI SEO services that use models for research, briefs, drafting and monitoring, with specialists checking every page and preparing your site for AI search.",
};
