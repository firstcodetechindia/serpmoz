import type { Service, ServiceMaster } from "@/types";

/**
 * /content-marketing/ : editorial strategy and production across formats,
 * tied to the buying journey.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is content marketing?",
    text: "Content marketing is the practice of publishing useful material, such as articles, guides, research, video and newsletters, so that the people a business wants as customers find it, learn from it and come to trust the source. It works by answering the questions buyers have at each stage of a decision, from first recognising a problem to comparing suppliers. It is planned editorially, distributed deliberately and measured by its contribution to enquiries and sales.",
    takeaways: [
      "Content marketing earns attention by being useful, where advertising pays for it.",
      "Each piece should serve a defined stage of the buying journey.",
      "First-hand expertise is what separates useful content from generic output.",
      "Distribution and maintenance matter as much as the writing.",
    ],
  },

  facts: [
    { label: "Best for", value: "Considered purchases where buyers research before choosing" },
    { label: "Works alongside", value: "SEO, social, email, digital PR and sales" },
    { label: "Typical horizon", value: "First pieces in 4 to 8 weeks, compounding over 6 to 12 months" },
    { label: "Measured in", value: "Content-assisted leads and sales conversations" },
  ],

  pillars: [
    {
      title: "Editorial strategy and journey mapping",
      body: "We begin with the decisions your buyers make and the questions that come before each one. Topics are drawn from sales calls, support tickets, search data and what people now ask AI assistants, then mapped to a stage and a purpose.",
      items: ["Audience and buyer interviews", "Questions mapped to journey stages", "Topic architecture and priorities", "Editorial calendar with owners", "Style guide and editorial standards"],
    },
    {
      title: "Expert capture",
      body: "The knowledge that makes content worth reading sits in the heads of people too busy to write. Our editors interview them, record the conversation and return with a draft that sounds like someone who has done the work.",
      items: ["Short recorded specialist interviews", "Question sets prepared in advance", "Drafts returned for expert review", "Named authors and reviewer credits", "A reusable library of transcripts"],
    },
    {
      title: "Production across formats",
      body: "One strong idea can become an article, a guide, a short video, a newsletter issue and a sales handout. We plan the formats before writing, so each version is made for its place.",
      items: ["Articles, guides and explainers", "Comparison and decision content", "Case stories and customer interviews", "Newsletters and email sequences", "Scripts for video and webinars"],
    },
    {
      title: "Search and AI-ready content",
      body: "Much content is found through a search engine or an AI assistant, so structure matters. Pages answer the question directly, name their sources and connect to related pages on the site.",
      items: ["Intent-matched briefs", "Answer-first page structure", "Clear entities, sources and authorship", "Internal linking and topic clusters", "Refresh schedule for ageing pages"],
      href: "/content-seo/",
    },
    {
      title: "Original research",
      body: "A finding nobody else has published gives other writers a reason to cite you. We design surveys and data studies with a published method, so the result stands up to scrutiny.",
      items: ["Research questions with news value", "Survey and data study design", "Analysis and published methodology", "Report, summary and charts", "Pitching findings to publications"],
      href: "/digital-pr/",
    },
    {
      title: "Distribution and measurement",
      body: "Publishing is the midpoint. Each piece has a plan for reaching readers through search, social, email and the sales team, and is tracked for what it contributes afterwards.",
      items: ["Social posts cut from each piece", "Email and newsletter placement", "Content packaged for sales use", "Tracking through to enquiries", "Quarterly content performance review"],
      href: "/social-media-marketing/",
    },
  ],

  mechanics: {
    heading: "How does a piece of content turn into a customer?",
    intro: "Content rarely produces a sale in one visit. It works across several encounters, each of which moves a buyer a little closer to trusting you. Knowing the sequence tells you what to publish and where to look for its effect.",
    stages: [
      { name: "Question", happens: "A buyer runs into a problem or a decision and goes looking for an answer.", we: "Collect the real questions from sales, support and search data and rank them by commercial value." },
      { name: "Discovery", happens: "They find a source through search, an AI assistant, a social post, a newsletter or a colleague.", we: "Structure each piece for search and plan its distribution across the channels your buyers use." },
      { name: "Judgement", happens: "They decide within moments whether the piece is credible and worth their time.", we: "Answer directly, show who wrote it and include detail only a practitioner would know." },
      { name: "Return", happens: "A useful source is remembered, subscribed to, shared internally and searched for by name.", we: "Link related pieces, offer a newsletter and publish consistently enough to be worth returning to." },
      { name: "Enquiry", happens: "When the need becomes pressing, they contact the supplier they already trust.", we: "Place a relevant next step on every piece and track content through to the CRM." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Audit and research", body: "An inventory of existing content and how it performs, interviews with sales and customers, and research into search demand and competitor coverage.", outputs: ["Content audit", "Buyer question research"] },
    { when: "Weeks 3 to 5", title: "Editorial strategy", body: "Topics are mapped to journey stages and ranked. Formats, standards, authors and approval steps are agreed.", outputs: ["Editorial strategy", "Prioritised topic map"] },
    { when: "Weeks 5 to 8", title: "First interviews and pieces", body: "Specialist interviews begin and the first pieces are drafted, reviewed and published, which also tests the workflow.", outputs: ["First published pieces", "Editorial calendar for the quarter"] },
    { when: "Month 3 onward", title: "Production and distribution", body: "Pieces are produced on a steady cadence, each with its social, email and sales versions. Older content is refreshed or merged on schedule.", outputs: ["Published content each month", "Distribution assets per piece"] },
    { when: "Every month", title: "Performance review", body: "We look at which pieces were found, read and involved in enquiries, and move effort towards the topics and formats that earn their place.", outputs: ["Content performance report", "Updated priorities"] },
  ],

  comparison: {
    heading: "Content marketing or SEO content: what is the difference?",
    intro: "The two overlap and are often confused. SEO content is written to win specific searches. Content marketing is the wider editorial programme, of which search is one distribution route among several.",
    columns: ["Content marketing", "SEO content"],
    rows: [
      { label: "Starting point", a: "Buyer questions across the journey", b: "Search demand and intent" },
      { label: "Formats", a: "Articles, research, video, email", b: "Pages built to rank" },
      { label: "Distribution", a: "Search, social, email, PR, sales", b: "Organic search and AI answers" },
      { label: "Main aim", a: "Trust and preference", b: "Visibility for target queries" },
      { label: "Measured by", a: "Assisted leads and sales use", b: "Rankings, traffic and conversions" },
      { label: "Best use", a: "Long, considered buying decisions", b: "Demand that already exists in search" },
    ],
    verdict: "If buyers already search for what you sell, start with SEO content and widen into a full programme as it proves its value. Where demand has to be created or the sale is long and complex, the broader editorial approach is the better starting point.",
    link: { label: "See our content SEO service", href: "/content-seo/" },
  },

  industries: ["saas", "b2b", "finance", "healthcare", "professional-services", "technology"],
  markets: ["india", "usa", "uk", "europe"],

  faqs: [
    { q: "How much does content marketing cost?", a: "Cost depends on how many pieces are produced, the formats involved and how much specialist interviewing and original research the plan includes. A research report and a monthly article programme are very different undertakings. We scope the work after a growth audit and explain what each part of the proposal covers." },
    { q: "How long does content marketing take to work?", a: "First pieces are usually live within four to eight weeks. Search visibility and regular readership tend to build over six to twelve months, because each piece adds to the last. Content written for sales to use can help sooner. The pace depends on competition, cadence and how quickly your experts can review drafts." },
    { q: "Is content marketing still worth it now that AI can write anything?", a: "More so, provided the content contains something a model could not produce unaided: first-hand experience, original data and a clear point of view. Generic articles have lost most of their value. Buyers and AI assistants alike favour sources with evidence of real expertise, which is what an editorial programme is designed to capture." },
    { q: "Is content marketing better than paid advertising?", a: "They do different jobs. Advertising reaches a chosen audience quickly and stops when spending stops. Content takes longer, then keeps working and makes every other channel more persuasive. Businesses with long sales cycles usually need both, and good content often becomes the material that adverts and sales emails point to." },
    { q: "Is content marketing just blogging?", a: "No. A blog is one place to publish. A content programme also covers guides, comparison pages, research reports, case stories, video, newsletters and material for the sales team, chosen by what the buyer needs at each stage. Many programmes that underperform consist only of blog posts aimed at the earliest stage." },
    { q: "Should we gate our content behind a form?", a: "Only when it is valuable enough that a reader would willingly trade contact details for it, such as original research or a practical tool. Gating ordinary guides reduces readership, search visibility and citations by AI assistants. We usually keep most content open and offer a gated asset where the exchange is fair." },
    { q: "How much time will our subject experts need to give?", a: "Typically a recorded conversation of thirty to forty five minutes for each substantial piece, plus time to review the draft for accuracy. We prepare the questions and do the writing. One interview often supplies material for several pieces, so the demand on any individual stays modest." },
    { q: "What do you need from us to start?", a: "Access to analytics and Google Search Console, your existing content and brand guidelines, and conversations with sales and customer-facing staff. We also need named subject experts, an approver with authority to sign off, and visibility of the CRM if content is to be tied to pipeline." },
    { q: "How do you measure content marketing?", a: "We track three things for each piece and for the programme: whether the intended readers found it, whether they engaged with it, and whether it featured in the journey of people who enquired. That means search visibility, readership and subscriptions, content-assisted leads in the CRM and feedback from sales." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Content Marketing Services & Strategy",
  metaDescription:
    "Content marketing services from SERPMOZ: editorial strategy, expert interviews and production across formats, mapped to each stage of the buying journey.",
};
