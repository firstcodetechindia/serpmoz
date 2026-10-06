import type { Service, ServiceMaster } from "@/types";

/**
 * /cro/ : site-wide conversion research and experimentation.
 * Rules: no client names, no result figures, no guarantees. Campaign page work
 * lives on /landing-page-optimization/; this page is about the method.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is conversion rate optimisation (CRO)?",
    text: "Conversion rate optimisation (CRO) is the practice of increasing the share of website visitors who take a valuable action, such as buying, booking or enquiring, by finding out why they do not and changing the site in response. It combines analytics people can trust, qualitative research into visitor behaviour, written hypotheses and controlled experiments. Good CRO is judged by revenue and qualified leads per visitor, not by the conversion rate alone, and it is honest about what each test did and did not prove.",
    takeaways: [
      "CRO is a research method first and a testing method second.",
      "A/B tests need enough traffic and a sample size fixed before the test starts.",
      "A higher conversion rate is worthless if the extra leads or orders are poor quality.",
      "Most tests do not produce a clear winner, and an inconclusive result is still information.",
    ],
  },

  facts: [
    { label: "Best for", value: "Sites with steady traffic and a conversion problem nobody can explain" },
    { label: "Works alongside", value: "Paid media, SEO, UX design and development" },
    { label: "Typical horizon", value: "Research findings in weeks; test results depend on your traffic" },
    { label: "Measured in", value: "Revenue or qualified leads per visitor" },
  ],

  pillars: [
    {
      title: "Measurement you can rely on",
      body: "An experiment is only as sound as the data underneath it. Before any test we check that conversions are defined properly, fire once and reconcile with what your CRM or order system records.",
      items: ["Conversion and event definitions", "Funnel and step tracking", "Reconciliation with CRM or order data", "Consent and tag behaviour checks", "Segments by source, device and visitor type"],
    },
    {
      title: "Qualitative research",
      body: "Numbers show where people leave. They do not say why. We watch, read and listen until the same objections appear often enough to act on.",
      items: ["Session recording review", "Heatmaps and scroll depth", "On-site polls and post-purchase surveys", "Customer and lost-prospect interviews", "Sales call and support ticket review"],
    },
    {
      title: "UX and heuristic review",
      body: "A structured walk through the journey on real devices, scored against clarity, relevance, friction and trust. It catches plain faults that should be fixed, not tested.",
      items: ["Mobile and desktop journey walkthroughs", "Navigation and findability", "Form and checkout usability", "Accessibility barriers", "Error states and empty states"],
      href: "/ui-ux-design/",
    },
    {
      title: "Hypotheses and prioritisation",
      body: "Each idea is written as a hypothesis: the evidence behind it, the change, the expected effect and the metric that would show it. Ideas are then ranked by likely value, confidence and effort.",
      items: ["Evidence-backed hypothesis statements", "Scoring by impact, confidence and effort", "A single shared backlog", "Fix-now list for obvious faults", "Ideas deliberately parked, with reasons"],
    },
    {
      title: "Experiment design and statistics",
      body: "This is where most programmes go wrong. We set the sample size and duration before launch, name one primary metric, and do not stop a test early because the graph looks good.",
      items: ["Sample size and duration planning", "One primary metric plus guardrail metrics", "Sample ratio and tracking checks", "Full weekly cycles before any reading", "Segment analysis treated as a lead, not proof"],
    },
    {
      title: "Campaign pages and funnel steps",
      body: "Findings from site-wide research feed straight into the pages that carry paid traffic and the steps where money changes hands. Those pages have their own discipline and their own specialist service.",
      items: ["Paid traffic landing pages", "Pricing and plan pages", "Basket and checkout steps", "Demo and enquiry forms", "Post-conversion confirmation steps"],
      href: "/landing-page-optimization/",
    },
  ],

  mechanics: {
    heading: "What happens between a visit and a conversion?",
    intro: "A visitor passes through five moments before they become a customer, and they can leave at any of them. CRO works out which moment is losing the most value on your site, then tests a better answer there first.",
    stages: [
      { name: "Arrive", happens: "The visitor lands with an expectation set by the ad, search result or link they clicked.", we: "Compare what each traffic source promises with what its landing page says, and close the gaps." },
      { name: "Orient", happens: "Within moments they judge whether this page is for them and where to go next.", we: "Clarify headlines, navigation and page hierarchy so the relevant path is obvious on a phone." },
      { name: "Evaluate", happens: "They weigh the offer, the price, the proof and the risk of being wrong.", we: "Find the unanswered objections in research and answer them where the doubt arises." },
      { name: "Act", happens: "They start a form, basket or booking, and meet whatever friction it contains.", we: "Remove needless fields and steps, fix errors and make the commitment feel proportionate." },
      { name: "Qualify", happens: "The order is paid or the lead reaches sales, and its real value becomes clear.", we: "Measure through to revenue or qualified pipeline, so a test cannot win on volume alone." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Measurement audit", body: "We check what is tracked, what is missing and whether the figures match your CRM or order system. Nothing is tested on data nobody trusts.", outputs: ["Tracking audit and fixes", "Agreed conversion definitions"] },
    { when: "Weeks 2 to 5", title: "Conversion research", body: "Funnel analysis, recordings, surveys, interviews and a heuristic review, brought together into a short list of where and why visitors are lost.", outputs: ["Research findings report", "Ranked list of problem areas"] },
    { when: "Weeks 5 to 6", title: "Backlog and test plan", body: "Findings become written hypotheses, scored and ordered. We also say plainly whether your traffic supports split testing, and on which pages.", outputs: ["Prioritised hypothesis backlog", "Traffic and sample size assessment"] },
    { when: "Month 2 onward", title: "Fixes and experiments", body: "Obvious faults are fixed and measured before and after. Uncertain ideas run as controlled tests for their planned duration, one clear question at a time.", outputs: ["Shipped fixes", "Experiments with a written result"] },
    { when: "Every month", title: "Review and learning log", body: "Results are read against revenue and lead quality, recorded whether they won, lost or were inconclusive, and used to reorder the backlog.", outputs: ["Learning log", "Updated priorities"] },
  ],

  comparison: {
    heading: "CRO or more traffic: where should the next budget go?",
    intro: "Both raise revenue, by different routes. The right order depends on how much traffic you already have, how well it converts and whether you can explain the difference between your best and worst sources.",
    columns: ["CRO", "More traffic"],
    rows: [
      { label: "What it changes", a: "Value of each existing visit", b: "Number of visits" },
      { label: "Cost pattern", a: "Research and build time", b: "Ongoing media or content spend" },
      { label: "Needs", a: "Enough traffic to learn from", b: "A page that already converts" },
      { label: "Speed", a: "Fixes fast, tests take weeks", b: "Paid is immediate, organic slower" },
      { label: "Effect lasts", a: "Until the page or market changes", b: "Paid stops with the budget" },
      { label: "Main risk", a: "False winners from weak tests", b: "Paying to scale a leak" },
    ],
    verdict: "If traffic is healthy and conversion is unexplained, fix conversion first, because every later visit benefits. If traffic is too thin to learn from, buy or earn some qualified visits first and optimise as the data arrives.",
    link: { label: "See our PPC management service", href: "/ppc-management/" },
  },

  industries: ["saas", "ecommerce", "b2b", "finance", "education", "travel"],
  markets: ["usa", "uk", "india", "australia"],
  scenario: "b2b-saas-pipeline-quality",

  faqs: [
    { q: "How much does CRO cost?", a: "Cost depends on how much measurement needs repairing, how many journeys are in scope and whether we build the changes or your developers do. We do not publish a fixed price. After a growth audit you receive a proposal that sets out the scope and the reasoning behind it." },
    { q: "How long does a CRO programme take to show results?", a: "Research findings and obvious fixes usually arrive within the first few weeks. Experiment results take longer, because a test must run until it reaches its planned sample, and that depends entirely on your traffic and conversion volume. We give you an estimated duration for each test before it starts." },
    { q: "Is CRO worth it for a small website?", a: "Often yes, but not through A/B testing. With low traffic a split test may need many months to reach a reliable answer. Smaller sites usually gain more from research, fixing clear faults and measuring before and after, with the limits of that method stated openly." },
    { q: "What is a good conversion rate?", a: "There is no universal figure. Conversion rates vary with industry, price, traffic source, device and what you count as a conversion. Published averages are a poor target. The useful comparison is your own rate by source and device over time, read alongside lead quality or order value." },
    { q: "What is the difference between CRO and A/B testing?", a: "A/B testing is one tool inside CRO. CRO also covers measurement, research, prioritisation and fixing things that need no test. A programme that only runs tests, without research behind the ideas, tends to produce small or random results and little learning." },
    { q: "What does statistical significance actually mean in a test?", a: "It means a difference this large would be unlikely if the two versions truly performed the same. It does not prove the size of the gain, and it is unreliable if you check repeatedly and stop at the first good reading. That is why sample size is set in advance." },
    { q: "Can a test win and still hurt the business?", a: "Yes. A variant can raise form submissions while lowering lead quality, or lift orders while cutting average order value or raising returns. We set guardrail metrics for each experiment and follow leads and orders into your CRM or sales data before calling a result." },
    { q: "What do you need from us to start?", a: "Access to analytics, tag management and any testing or recording tools, plus a view of CRM or order data so we can check figures against reality. Time with sales or support staff is valuable too, because they hear objections that never appear in analytics." },
    { q: "Does A/B testing harm SEO?", a: "Not when it is set up properly. Search engines accept testing as long as crawlers see the same content as users, variant URLs point to the original with a canonical tag, redirects are temporary and the test is removed once it ends." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Conversion Rate Optimisation & A/B Testing",
  metaDescription:
    "Conversion rate optimisation from SERPMOZ: reliable analytics, visitor research, written hypotheses and A/B tests run with statistical honesty.",
};
