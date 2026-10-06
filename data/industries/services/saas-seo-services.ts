import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/saas/seo-services/
 * Rules: no client names, no figures, no guarantees. Timings are typical and
 * conditional. Search examples are patterns, not data.
 */
export const record: IndustryServiceRecord = {
  industry: "saas",
  service: "seo-services",
  slug: "seo-services",
  name: "SEO for SaaS",
  audience: "SaaS and software companies",

  seo: {
    title: "SEO for SaaS Companies: Pipeline Over Sign-Ups",
    metaDescription:
      "SEO for SaaS companies: comparison, integration, pricing and documentation pages planned by buying stage and measured in qualified pipeline, not sign-ups.",
    primaryKeyword: "SEO for SaaS companies",
    secondaryKeywords: [
      "SaaS SEO services",
      "SaaS SEO agency",
      "B2B SaaS SEO",
      "SEO for software companies",
      "SaaS comparison pages",
      "SaaS content strategy",
    ],
    searchIntent: "A SaaS marketing head wants to know what SEO work suits a software product and how it ties to pipeline.",
  },

  hero: {
    title: "SEO for SaaS Companies, Measured in Qualified Pipeline",
    description:
      "Software buyers research in stages: the problem, the category, then named products side by side. SERPMOZ plans SEO for SaaS companies around those stages, with comparison, integration, pricing and documentation pages each doing a distinct job, and reports organic search against pipeline that sales accepts.",
  },

  facts: [
    { label: "Best for", value: "SaaS teams whose buyers research categories and alternatives in search" },
    { label: "Works alongside", value: "Paid search, AI search work, product marketing and sales" },
    { label: "Typical horizon", value: "Technical gains in weeks; category terms typically take many months" },
    { label: "Measured in", value: "Qualified trials, demos and pipeline from organic search" },
  ],

  answer: {
    question: "What does SEO for SaaS companies involve?",
    text: "SEO for SaaS companies makes a software product findable at each stage of vendor research: when a buyer describes a problem, searches a category, compares named products, checks an integration or reads pricing. It covers the technical health of the site and documentation, pages built for each of those searches, and earned authority. It is judged by qualified trials, demos and pipeline.",
  },

  buyers: {
    heading: "How do software buyers search before they choose a vendor?",
    paragraphs: [
      "A software purchase usually starts with someone who has a problem and no product in mind. They search for a way to do a job, such as reconciling invoices faster. A feature page tells them little. Later the same person, or a colleague, searches the category by name and starts collecting vendors. These two searches need different pages and calls to action, and merging them is a common planning error in [SaaS marketing](/industries/saas/).",
      "Once a shortlist exists, searches become specific. Buyers set one product name against another, look for alternatives to the tool they use, check whether a product connects to their systems and read pricing closely. Review platforms and comparison publishers often hold these results, so the vendor's own account is missing. Many buyers now ask an AI assistant the same questions, and it answers from whichever public sources describe the product most clearly.",
      "The decision is rarely made by one person. A user finds the product, a manager checks the price, and someone technical reads the documentation and security pages. Each searches separately, often weeks apart, and each can stop the purchase. Organic search has to serve the whole group. A trial started by a student and a demo requested by a buyer with budget look identical in analytics until the CRM says otherwise.",
    ],
  },

  problems: [
    {
      title: "Content aimed only at early research",
      body: "The blog attracts readers learning about a problem and never moves them towards the product. Traffic rises and pipeline does not, because nothing links those guides to category or comparison pages.",
    },
    {
      title: "Others own your comparison searches",
      body: "Review sites, affiliates and competitors rank for your product name beside the words alternative and versus. Buyers at the last stage read someone else's account of your strengths, limits and pricing.",
    },
    {
      title: "Integration pages that say nothing",
      body: "Each integration gets a logo and one line of text. A buyer searching for how the product works with a tool they use finds no detail, and neither does a search engine.",
    },
    {
      title: "Documentation hidden or competing",
      body: "Help content sits behind a login, on a subdomain nobody maintains, or duplicates marketing pages. Useful answers go unindexed, or old documentation ranks above the page that should win the search.",
    },
    {
      title: "Sign-ups reported as success",
      body: "Organic search is credited with trial volume while sales rejects most accounts. Without a link between the search, the page and the CRM stage, nobody can say which content brings buyers.",
    },
  ],

  approach: [
    {
      title: "Map searches to buying stages",
      body: "We group demand into problem, category, comparison, integration and pricing searches, then score each group by commercial value and difficulty. Each existing page is assigned a stage, showing where pages compete and where none exist. The method follows our main [SEO services](/seo-services/) page.",
    },
    {
      title: "Comparison and alternative pages",
      body: "We plan a page for each competitor buyers name most often, written with product and sales involved. Each states who the other product suits and where yours differs, with claims that can be checked. A fair page persuades buyers and draws fewer complaints.",
    },
    {
      title: "Integration and use-case pages",
      body: "Each integration gets a page explaining what data moves, what set-up involves and what the combination lets a team do. Use-case and role pages are written in the language of the job. A consistent structure lets the set grow without thin, near-identical pages.",
    },
    {
      title: "Pricing and packaging content",
      body: "Pricing pages are searched by name and read closely. We make plan limits, inclusions and who each plan suits readable by people, search engines and AI assistants, and answer questions about contracts, seats and upgrades. Where prices are private, we explain how they are set.",
    },
    {
      title: "Documentation as a search asset",
      body: "We audit help and developer content for indexation, duplication and structure, then agree with your team what should be public. Well-organised documentation answers specific how-to searches, reassures technical evaluators and gives AI assistants accurate material to quote. Fixes are delivered as developer tickets.",
    },
    {
      title: "Markets, languages and AI visibility",
      body: "For products sold in several countries, we plan which markets need their own pages, language or pricing, and which signals tell search engines where each version belongs, through [international SEO](/international-seo/). We also track how AI assistants describe and shortlist the product, as part of [AI search work](/ai-seo-services/).",
    },
  ],

  searches: {
    heading: "Which searches are worth winning for a SaaS product?",
    intro:
      "These are patterns; your real list comes from your category, competitors and sales conversations. Each group sits at a different distance from purchase and needs its own page type and measure.",
    groups: [
      {
        name: "Problem-aware",
        examples: ["how to + job to be done", "task + template or checklist", "problem + for + team or role"],
        note: "Answer the question fully, then show the product doing the job. Judge by assisted pipeline, since few readers convert at first.",
      },
      {
        name: "Category and use case",
        examples: ["product category + software", "product category + for + industry", "tool for + use case"],
        note: "Usually the most contested group. A clear category page with supporting use-case pages does better than a homepage asked to rank for everything.",
      },
      {
        name: "Comparison and alternatives",
        examples: ["named competitor + alternative", "your product + versus + named competitor", "your product + reviews"],
        note: "Write the fair version yourself and keep it current. Buyers here are near a decision, so these pages outweigh their traffic.",
      },
      {
        name: "Integration, pricing and how-to",
        examples: ["your product + pricing", "your product + named tool + integration", "how to + task + in + your product"],
        note: "Often searched by people already evaluating or using the product. Accurate pricing, integration and documentation pages reduce hesitation and support retention.",
      },
    ],
  },

  rules: [
    {
      title: "Comparative claims about competitors",
      body: "Comparison pages name other companies. Statements should be accurate, current and evidenced, and rules on comparative advertising and trade marks differ by country. Have your legal adviser review them before publication.",
    },
    {
      title: "Security, compliance and performance claims",
      body: "Buyers rely on statements about certifications, uptime, data residency and results. Publish only what the company can substantiate today, and remove lapsed claims. Confirm the wording with your compliance or legal adviser.",
    },
    {
      title: "Tracking and personal data",
      body: "Connecting searches to trials and pipeline means handling personal data across analytics, forms and the CRM. Consent and data protection requirements vary by market, so your privacy adviser should confirm the measurement set-up.",
    },
  ],

  measures: [
    "Qualified trials and demo requests from organic search",
    "Opportunities and pipeline value created from organic sessions",
    "Trial-to-paid conversion for accounts arriving through organic search",
    "Comparison and category searches where your own page appears",
    "How accurately AI assistants describe and shortlist the product",
  ],

  timeline: [
    {
      phase: "Audit and baseline",
      when: "Weeks 1 to 3",
      body: "A technical crawl of the marketing site and documentation, a content inventory by buying stage, and a baseline connecting organic sessions to trials, demos and CRM stages where your data allows.",
    },
    {
      phase: "Opportunity model and roadmap",
      when: "Weeks 3 to 6",
      body: "Searches are grouped, scored and mapped to pages. You see which comparison, integration, pricing and category pages we would build first, what we would leave alone, and the developer tickets needed.",
    },
    {
      phase: "Build the commercial pages",
      when: "Months 2 to 4",
      body: "Technical fixes ship and the pages closest to a decision are published first: comparison, alternatives, pricing and priority integrations. Product and sales review each one. Timing depends on your release process.",
    },
    {
      phase: "Expand and reprioritise",
      when: "Month 4 onward",
      body: "Use-case, problem-led and documentation work widens coverage while authority is earned through credible references. Visibility is read against qualified pipeline each month. Competitive category positions typically build over many months.",
    },
  ],

  faqs: [
    {
      q: "How is SEO for a SaaS company different from ordinary SEO?",
      a: "The foundations are the same: a site search engines can crawl, content matched to intent and earned authority. The difference is the buying journey. Software is researched over weeks by several people, compared against named competitors and tested before purchase. That puts unusual weight on comparison, integration, pricing and documentation pages, and on measuring pipeline.",
    },
    {
      q: "How long does SaaS SEO take to show results?",
      a: "It depends on the state of the site, the strength of competitors and how quickly changes ship. Technical corrections and pages for searches that include your own product name can show within weeks. Contested category terms typically take many months of steady work. We give a view for your product after the audit.",
    },
    {
      q: "How much does SEO for a SaaS company cost?",
      a: "Cost is driven by the size of the site and documentation, the number of competitors and integrations that need pages, how many markets and languages are in scope, and how much writing and development your team will carry. After a [growth audit](/growth-audit/) you receive a scoped proposal with the reasoning behind it.",
    },
    {
      q: "Should we publish pages comparing ourselves with competitors?",
      a: "In most cases, yes. Those searches happen whether or not you take part, and a missing page leaves the answer to review sites. The page has to be fair to be believed: say who the other product suits, keep details current and avoid claims you cannot support. Have your legal adviser check it.",
    },
    {
      q: "Should our documentation be indexed by search engines?",
      a: "Usually the public parts should be. Documentation answers precise how-to searches, helps technical evaluators and gives AI assistants accurate material. The risks are duplication with marketing pages, outdated versions ranking and private content being exposed. We agree with your product team what is indexed, consolidated or kept behind a login.",
    },
    {
      q: "Do you report on sign-ups or on pipeline?",
      a: "Both, with pipeline deciding priorities. Sign-ups are an early signal and easy to inflate with content that attracts the wrong audience. Where your CRM allows, we connect the landing page and search type to the stage each account reaches, so the report shows which pages bring accounts that sales accepts.",
    },
    {
      q: "Does SEO matter if buyers ask AI assistants about software?",
      a: "Yes. Assistants build answers from public web content, including vendor pages, documentation, reviews and third-party coverage. Clear category, pricing and comparison pages make an accurate description more likely, though no one controls what an assistant says. We track a set of buyer questions across assistants and report how the product is described.",
    },
  ],

  related: {
    services: ["ai-seo-services", "content-seo", "international-seo", "technical-seo"],
    locations: ["/locations/usa/", "/locations/india/bangalore/", "/locations/uk/london/"],
    articles: ["sizing-search-opportunities-by-value", "measuring-ai-search-visibility"],
  },

  cta: {
    title: "See where your SaaS pipeline is leaking in search",
    body: "A growth audit reviews your site, documentation and comparison coverage against how buyers search, and returns a prioritised list of fixes and gaps.",
  },
};
