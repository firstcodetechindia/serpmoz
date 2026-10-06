import type { Service, ServiceMaster } from "@/types";

/**
 * /aeo-services/ : answer engine optimization. Direct answers, featured
 * snippets, People Also Ask, voice and structured Q&A. Being named inside
 * generated answers belongs to /geo-services/.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is answer engine optimization (AEO)?",
    text: "Answer engine optimization is the practice of structuring content so that a search engine or voice assistant can lift a direct answer from it and attribute that answer to you. It focuses on question-led searches: featured snippets, People Also Ask boxes, spoken answers and other results where one source is quoted above the ordinary listings. The work involves finding the questions buyers ask, answering each one plainly near the top of a relevant page, and marking up the content accurately.",
    takeaways: [
      "AEO targets searches phrased as questions, where one source is quoted directly.",
      "A page usually needs to rank well already before it is chosen as the answer.",
      "Format matters: a short definition, a numbered list or a table is easier to extract than a long paragraph.",
      "Search engines choose and change answer sources freely, so no provider can guarantee a snippet.",
    ],
  },

  facts: [
    { label: "Best for", value: "Categories where buyers ask questions before they compare suppliers" },
    { label: "Works alongside", value: "SEO, content and GEO" },
    { label: "Typical horizon", value: "Weeks on pages that already rank; months where rankings must be earned first" },
    { label: "Measured in", value: "Answer features held, question coverage, assisted enquiries" },
  ],

  pillars: [
    {
      title: "Question research",
      body: "The questions worth answering rarely come from a keyword tool alone. We collect them from search data and from the people in your business who hear them every day, then sort them by what the asker is close to buying.",
      items: ["People Also Ask chains for core topics", "Question queries from Search Console", "Sales call and support ticket themes", "Forum and community threads", "Questions grouped by buying stage"],
    },
    {
      title: "Answer formatting",
      body: "Search engines extract passages, so the passage has to stand on its own. We rewrite priority pages so the answer follows the question immediately, in the form the results page already favours for that query.",
      items: ["Definitions in two or three sentences", "Numbered steps for how-to questions", "Tables for comparisons and specifications", "Question-form headings matched to real wording", "Detail and nuance placed after the short answer"],
      href: "/content-seo/",
    },
    {
      title: "Featured snippets and People Also Ask",
      body: "For each priority question we look at who holds the answer now, what format it takes and how close your page is to competing. Effort goes to the questions where you are within reach.",
      items: ["Current answer source recorded per question", "Snippet format identified: paragraph, list or table", "Pages ranking close enough to compete", "Rewrites tested and tracked over time", "Lost snippets investigated and recovered"],
    },
    {
      title: "Structured data for questions and answers",
      body: "Markup tells a search engine what a block of content is. It supports understanding, and it only helps when it describes content a visitor can see on the page.",
      items: ["Schema matched to visible content only", "FAQ and Q&A markup where appropriate", "Article, author and organisation markup", "Validation before and after release", "Rich result eligibility checked against current rules"],
      href: "/technical-seo/",
    },
    {
      title: "Voice and spoken answers",
      body: "Voice assistants usually read a single short answer aloud and name its source. The same content that wins a snippet tends to serve here, with extra attention to natural phrasing and local details.",
      items: ["Conversational, full-sentence question wording", "Answers that make sense when read aloud", "Opening hours, location and contact facts kept current", "Business listings accurate for assistant lookups", "Fast, mobile-friendly pages"],
    },
    {
      title: "Trust signals behind the answer",
      body: "An engine quoting one source is taking a risk on it. Evidence of who wrote the answer, what it is based on and when it was last checked makes your page the safer choice.",
      items: ["Named authors with relevant credentials", "Sources cited for factual claims", "Review dates shown and kept honest", "Specialist review on health, legal and financial topics", "Consistent facts across every page that mentions them"],
    },
  ],

  mechanics: {
    heading: "How does a search engine choose which answer to show?",
    intro: "A direct answer is not written by the search engine. It is a passage taken from a page it already trusts for that query. Five things happen between the question being asked and your wording appearing on the screen or being read aloud.",
    stages: [
      { name: "Question", happens: "The engine recognises the search as a question and decides whether a direct answer would help.", we: "Identify which of your priority queries trigger answer features, and which never do." },
      { name: "Candidates", happens: "It considers pages that already rank well for that query, usually those on the first page.", we: "Bring the right page into contention with on-page and authority work where it is not yet close." },
      { name: "Extraction", happens: "It looks for a self-contained passage, list or table that answers the question directly.", we: "Place a clear answer beneath a matching heading, in the format the engine is already showing." },
      { name: "Display", happens: "The chosen passage appears above the listings, inside People Also Ask, or is spoken by an assistant.", we: "Make sure the quoted text carries your brand and gives a reason to read further." },
      { name: "Follow-up", happens: "The searcher stops there, clicks through, or asks the next question.", we: "Answer the related questions on the same page or a linked one, so the next step stays with you." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Question map", body: "Questions are collected from search data, your sales and support teams and public communities, then grouped by topic and buying stage.", outputs: ["Question and intent map", "Priority list agreed with your team"] },
    { when: "Weeks 2 to 4", title: "Answer gap audit", body: "Each priority question is checked against your site and the live results: whether you answer it, where you rank, who is quoted now and in what format.", outputs: ["Answer gap analysis", "Shortlist of questions within reach"] },
    { when: "Weeks 4 to 8", title: "Restructure priority pages", body: "Existing pages are rewritten for direct answers first, because pages that already rank respond soonest. Subject specialists check every answer for accuracy.", outputs: ["Rewritten priority pages", "Structured data specification"] },
    { when: "Month 3 onward", title: "Fill the gaps", body: "New pages and sections are written for questions you do not yet cover, and supporting SEO work continues on pages that are not yet ranking close enough.", outputs: ["New answer-led content", "Validated markup on each release"] },
    { when: "Every month", title: "Track and adjust", body: "Answer features change hands often. We record what you hold, what you lost and why, and revise formats where a competitor's version is being preferred.", outputs: ["Answer visibility report", "Revision list for the next cycle"] },
  ],

  comparison: {
    heading: "AEO or traditional SEO: do you need both?",
    intro: "AEO is not a replacement for SEO. It is what you do with pages once they can rank, so the practical question is when it becomes worth adding.",
    columns: ["AEO", "Traditional SEO"],
    rows: [
      { label: "Goal", a: "Be quoted as the answer", b: "Rank among the listings" },
      { label: "Query type", a: "Questions and definitions", b: "All search intents" },
      { label: "Unit of work", a: "The passage", b: "The page and the site" },
      { label: "Main levers", a: "Structure, clarity, markup", b: "Technical health, content, authority" },
      { label: "Clicks", a: "Fewer, brand still seen", b: "More, depends on position" },
      { label: "Depends on", a: "Already ranking near the top", b: "Crawlable, relevant, trusted site" },
    ],
    verdict: "If your important pages are not yet on the first page, SEO comes first, because answers are drawn from pages that already rank. Once they are, AEO is a relatively small amount of work that decides whether you or a competitor is the one quoted.",
    link: { label: "See our SEO services", href: "/seo-services/" },
  },

  industries: ["healthcare", "finance", "legal", "education", "saas", "professional-services"],
  markets: ["usa", "uk", "india", "australia"],

  faqs: [
    { q: "What does AEO stand for?", a: "AEO stands for answer engine optimization. An answer engine is any system that responds to a question with an answer instead of a list of links: a search engine showing a featured snippet, a voice assistant reading a reply, or a People Also Ask box. AEO is the work of becoming the source of that answer." },
    { q: "How much do AEO services cost?", a: "It depends on how many questions matter to your business, how many existing pages need restructuring and how much specialist review your subject requires. We do not quote a standard price. After a growth audit you receive a scoped proposal showing which questions we would pursue and why." },
    { q: "How long does it take to win a featured snippet?", a: "Where a page already ranks on the first page, a well-formatted answer can be picked up within weeks of being recrawled. Where the page does not rank yet, the ranking has to be earned first, and that usually takes months. Snippets are also lost and regained as engines test alternatives." },
    { q: "Is AEO worth it if answers mean fewer clicks?", a: "Usually, yes. The answer is displayed whether you supply it or a competitor does. Holding it keeps your name in front of the searcher at the moment they are forming a view, and the people who do click through have often read your answer and want more." },
    { q: "AEO vs GEO: what is the difference?", a: "AEO concerns answers extracted from a single page and shown or spoken as they are, such as featured snippets and voice replies. GEO concerns answers an AI model writes by combining many sources, where the aim is to be named or cited. The content principles overlap, and the measurement is different." },
    { q: "Does FAQ schema still help?", a: "It helps search engines understand that a block of content is a question and its answer. Whether it produces a visible rich result depends on the search engine's current rules, which have narrowed over time. We add it where the questions are visible on the page and useful to readers, never as markup alone." },
    { q: "Do we need new content, or can existing pages be optimised?", a: "Most early gains come from existing pages. Many sites already contain good answers that are placed too far down the page or wrapped in a long paragraph. We restructure those first, then write new content only for questions you do not cover at all." },
    { q: "How do you measure AEO?", a: "We track a fixed set of priority questions and record which answer features appear, who holds them and whether you are the source. That sits beside Search Console impressions and clicks for question queries, and enquiries from the pages involved. Voice answers are spot-checked manually, as assistants provide no reporting." },
    { q: "Is AEO only for voice search?", a: "No. Voice is one output, and for most businesses a small one. The larger share of answer-led results appears on screen: featured snippets, People Also Ask and similar boxes on ordinary search pages. Content that is structured for those tends to serve spoken answers as well." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "AEO Services: Answer Engine Optimization",
  metaDescription:
    "AEO services that structure your content for featured snippets, People Also Ask and voice answers: question research, direct answers and accurate schema.",
};
