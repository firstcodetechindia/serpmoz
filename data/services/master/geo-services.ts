import type { Service, ServiceMaster } from "@/types";

/**
 * /geo-services/ : generative engine optimization. Being named and cited
 * inside AI-generated answers. Extracted answers and snippets belong to
 * /aeo-services/.
 * Rules: no client names, no result figures, no guarantees of placement.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is generative engine optimization (GEO)?",
    text: "Generative engine optimization is the work of improving how often, and how accurately, a brand is named and cited in answers written by AI systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews. These systems compose a reply from their training data and from pages they retrieve at the time of asking. GEO strengthens both inputs: what your own site says, and what credible third parties say about you. Outputs vary between runs, so results are measured as trends and never guaranteed.",
    takeaways: [
      "Generative answers are composed from many sources, and usually name only a few brands.",
      "The same prompt can return different brands on different runs, so one check proves nothing.",
      "What independent sources say about you often carries more weight than your own pages.",
      "There is no paid or technical route to guaranteed placement in a generated answer.",
    ],
  },

  facts: [
    { label: "Best for", value: "Brands in categories buyers research by asking an AI assistant" },
    { label: "Works alongside", value: "SEO, AEO and digital PR" },
    { label: "Typical horizon", value: "Baseline in weeks; movement over several months, reported as ranges" },
    { label: "Measured in", value: "Mention rate, citation share and AI referral visits across a prompt panel" },
  ],

  pillars: [
    {
      title: "Prompt panel and baseline",
      body: "Before changing anything we need to know what the assistants say today. We write a fixed set of prompts that mirror how your buyers ask, and run each one several times on each platform to see the spread.",
      items: ["Prompts covering category, comparison and problem questions", "Repeated runs per prompt and platform", "Brands named and in what order", "Sources cited beside each answer", "Accuracy of how your business is described"],
    },
    {
      title: "Entity clarity",
      body: "A model can only name you confidently if the facts about you agree wherever it looks. We make your company, products and people unambiguous on your site and on the profiles that describe you elsewhere.",
      items: ["One consistent description of what you do", "Organisation and product structured data", "About, team and product pages with plain facts", "Third-party profiles and directories corrected", "Outdated or conflicting claims removed"],
    },
    {
      title: "Citable content",
      body: "Systems that retrieve pages look for passages that state something specific and can stand alone. Vague marketing copy is rarely quoted. Clear claims, definitions, comparisons and original data are.",
      items: ["Specific statements instead of general claims", "Original data, methods and definitions", "Honest comparison and alternatives pages", "Depth on the topics you want to be known for", "Dates and authorship shown on key pages"],
      href: "/content-seo/",
    },
    {
      title: "Third-party sources",
      body: "When an assistant recommends suppliers, it leans on reviews, round-ups, industry publications and community discussion. We identify which sources are cited for your prompts and work to earn a fair place in them.",
      items: ["Cited sources mapped per prompt", "Expert comment and data-led stories", "Review platform presence and recency", "Inclusion in credible lists and comparisons", "Community answers given openly under your name"],
      href: "/digital-pr/",
    },
    {
      title: "Retrieval and crawler access",
      body: "Several assistants fetch live pages through a search index or their own crawlers. If those crawlers are blocked, or the content only appears after scripts run, your pages may not be available to quote.",
      items: ["Robots rules reviewed for AI crawlers", "Key content present in the HTML response", "Indexation in the search engines assistants draw on", "Server logs checked for AI crawler visits", "A deliberate policy on what to allow and block"],
      href: "/technical-seo/",
    },
    {
      title: "Trend measurement",
      body: "Because outputs vary, a single screenshot is not evidence. We repeat the panel on a schedule and report the direction of travel, with the uncertainty shown.",
      items: ["Mention rate per platform as a range", "Share of recommendation against named competitors", "Citations pointing to your own pages", "Referral visits from AI platforms in analytics", "Changes logged against the work that preceded them"],
    },
  ],

  mechanics: {
    heading: "How does an AI assistant choose which brands to name?",
    intro: "A generated answer is assembled, not looked up. The exact process differs by platform and is not fully disclosed, but the broad sequence is consistent, and each stage is somewhere a brand can be included or left out.",
    stages: [
      { name: "Prompt", happens: "The buyer asks in their own words, often with more context than a search query would carry.", we: "Build the prompt panel from real buyer language, including the constraints people add." },
      { name: "Search", happens: "Where live retrieval is used, the system turns the prompt into one or more searches and fetches pages.", we: "Make sure your pages are indexed, accessible to AI crawlers and relevant to those underlying searches." },
      { name: "Selection", happens: "Passages are chosen from retrieved pages, and combined with what the model learned in training.", we: "Write passages that state clear facts, and correct what third-party sources say about you." },
      { name: "Composition", happens: "The model writes the answer, naming a handful of brands. Wording and choices vary between runs.", we: "Strengthen consistent association between your brand and the category across many sources." },
      { name: "Citation", happens: "Some platforms show source links. The buyer may click, ask a follow-up or simply form a shortlist.", we: "Track citations and AI referral visits, and make the landing pages worth arriving at." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Visibility baseline", body: "We agree the prompts and competitors, run the panel repeatedly across platforms and record mentions, descriptions and cited sources.", outputs: ["AI visibility baseline report", "Prompt panel and tracking setup"] },
    { when: "Weeks 3 to 5", title: "Diagnosis", body: "For each prompt where competitors are named and you are not, we trace the likely reason: missing content, weak third-party presence, unclear entity facts or blocked access.", outputs: ["Entity and source audit", "Ranked list of gaps"] },
    { when: "Month 2 to 3", title: "Fix what you control", body: "Your own site comes first because it moves quickest: entity facts corrected, crawler access settled, and citable content written for the priority topics.", outputs: ["Corrected entity and structured data", "Content coverage plan in production"] },
    { when: "Month 3 onward", title: "Earn third-party presence", body: "Digital PR, review activity and expert contributions are aimed at the specific sources assistants cite for your prompts. This is the slowest part and the one competitors find hardest to copy.", outputs: ["Citation opportunity list worked through", "Coverage and profile updates logged"] },
    { when: "Every quarter", title: "Re-run and report", body: "The full panel is repeated under the same conditions and compared with the baseline. Models change without notice, so we report ranges and say plainly what we cannot attribute.", outputs: ["Trend report with ranges", "Revised priorities"] },
  ],

  comparison: {
    heading: "GEO or AEO: which do you need?",
    intro: "The two are often used as if they meant the same thing. They share foundations, but they target different kinds of answer and are measured differently, so it helps to know which problem you have.",
    columns: ["GEO", "AEO"],
    rows: [
      { label: "Answer type", a: "Written by a model", b: "Extracted from one page" },
      { label: "Where", a: "AI assistants and AI Overviews", b: "Snippets, People Also Ask, voice" },
      { label: "Aim", a: "Be named and cited", b: "Be the quoted source" },
      { label: "Key input", a: "What the wider web says", b: "How your page is structured" },
      { label: "Consistency", a: "Varies between runs", b: "Fairly stable, still changes" },
      { label: "Measurement", a: "Prompt panels, reported as ranges", b: "Features held per question" },
    ],
    verdict: "If buyers in your category ask assistants for recommendations and competitors are the ones named, GEO addresses that. If the gap is that your pages answer questions poorly in ordinary search results, start with AEO, since much of that work also supports generated answers.",
    link: { label: "See our AEO services", href: "/aeo-services/" },
  },

  industries: ["saas", "b2b", "technology", "finance", "professional-services", "ecommerce"],
  markets: ["usa", "uk", "india", "europe"],

  faqs: [
    { q: "What is GEO in marketing?", a: "GEO stands for generative engine optimization. It is the practice of improving a brand's presence in answers produced by generative AI, such as ChatGPT, Gemini, Perplexity and Google AI Overviews. It is unrelated to geographic targeting, which is a common confusion because of the abbreviation." },
    { q: "How much do GEO services cost?", a: "Cost depends on the number of prompts, platforms and competitors tracked, and on how much content and third-party work the diagnosis calls for. We do not publish a price. A growth audit and visibility baseline come first, and the proposal is built from what they show." },
    { q: "Is GEO worth it yet, or is it too early?", a: "It depends on your buyers. If they research suppliers by asking an assistant, the shortlist is being shaped there now, and a baseline is inexpensive to run. If they do not, strong SEO and PR are a better use of budget, and they build the same foundations for later." },
    { q: "Why does ChatGPT give a different answer each time I ask?", a: "Generative models choose words with a degree of randomness, and many also fetch different pages on each run. Personalisation, location and model updates add further variation. This is why we run every prompt several times and report a mention rate, not a single yes or no." },
    { q: "Can we pay to appear in AI answers?", a: "Not within the generated answer itself. Some platforms show or are testing advertising beside answers, and that is a separate paid channel. Anyone selling guaranteed inclusion in the answer text is selling something that does not exist." },
    { q: "Should we block or allow AI crawlers?", a: "It is a business decision. Blocking crawlers used for live retrieval can stop your pages being fetched and cited. Blocking those used for model training is a different choice with different trade-offs. We set out which crawler does what and help you choose a policy deliberately." },
    { q: "An AI assistant says something wrong about our company. Can you fix it?", a: "We cannot edit a model's output. We can find where the wrong information comes from, correct it on your site and on the third-party sources involved, and publish clear facts for systems to retrieve. Corrections tend to appear sooner on platforms that search the live web." },
    { q: "How do you measure GEO if results keep changing?", a: "With a fixed prompt panel run repeatedly under the same conditions. We report how often you are mentioned, how you are described, which sources are cited and how that compares with competitors, each as a range. Referral visits from AI platforms in your analytics are a second, independent signal." },
    { q: "What do you need from us to begin?", a: "The questions your buyers actually ask, ideally from sales conversations, a list of the competitors you are compared with, and access to analytics and Search Console. Server log access is useful for seeing which AI crawlers already visit the site." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "GEO Services: Generative Engine Optimization",
  metaDescription:
    "GEO services that measure and improve how AI assistants name and cite your brand: prompt panels, entity clarity, citable content and third-party sources.",
};
