import type { Service, ServiceMaster } from "@/types";

/**
 * /landing-page-optimization/ : campaign pages only.
 * Rules: no client names, no result figures, no guarantees. Site-wide research
 * and experimentation method lives on /cro/.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is landing page optimization?",
    text: "Landing page optimization is the work of improving the page a visitor reaches after clicking an advertisement, email or campaign link, so that more of those visitors take the one action the campaign exists for. It covers how closely the page matches the promise of the click, the order in which it makes its case, the proof it offers, the form or call to action, and how quickly it loads on a phone. Success is measured by qualified leads or sales per click.",
    takeaways: [
      "A landing page serves one audience, one offer and one action.",
      "The headline should repeat the promise that earned the click.",
      "Every extra form field needs a reason that outweighs the leads it costs.",
      "Speed on mobile is part of the offer, because slow pages lose visitors before they read anything.",
    ],
  },

  facts: [
    { label: "Best for", value: "Advertisers paying for clicks that land on generic pages" },
    { label: "Works alongside", value: "Google Ads, Meta Ads, LinkedIn Ads, email and CRO" },
    { label: "Typical horizon", value: "First pages live in weeks; testing pace depends on click volume" },
    { label: "Measured in", value: "Qualified leads or sales per click, and cost per qualified lead" },
  ],

  pillars: [
    {
      title: "Message match",
      body: "The visitor arrives with a sentence in their head: the one from the ad. If the page opens with a different sentence, they assume they are in the wrong place. We write pages from the ad group outward.",
      items: ["Headline matched to ad and keyword theme", "Offer stated the same way as the ad", "One page per distinct audience or intent", "Consistent imagery between ad and page", "Dynamic text only where it reads naturally"],
      href: "/ppc-management/",
    },
    {
      title: "Page structure",
      body: "A campaign page is an argument in a fixed order: what this is, who it is for, why believe it, what happens next. We arrange sections so each one answers the question the previous one raised.",
      items: ["Above-the-fold clarity on a phone", "Benefit and objection sequence", "A single primary call to action", "Navigation reduced to what the visitor needs", "Layouts designed for thumb reach"],
      href: "/ui-ux-design/",
    },
    {
      title: "Proof and reassurance",
      body: "Doubt appears at predictable points: at the price, at the form, at the claim. We place genuine evidence at those points and leave out anything that cannot be substantiated.",
      items: ["Permissioned testimonials and reviews", "Accreditations you actually hold", "Clear pricing or pricing guidance", "What happens after you submit", "Privacy and data-use statements"],
    },
    {
      title: "Forms and calls to action",
      body: "The form is where intent turns into a lead, and where most pages lose people. We ask for the minimum that lets sales act, and offer phone or WhatsApp where buyers prefer them.",
      items: ["Field-by-field justification", "Multi-step forms where they reduce effort", "Inline validation and clear error messages", "Click-to-call and click-to-chat options", "Spam filtering without punishing real users"],
    },
    {
      title: "Speed and build quality",
      body: "Most paid clicks arrive on mobile networks. We build pages that render quickly, stay stable while loading and carry only the scripts they need.",
      items: ["Core Web Vitals on mobile", "Compressed and correctly sized images", "Third-party script audit", "Reusable templates on your platform", "Checks across devices and browsers"],
      href: "/web-development/",
    },
    {
      title: "Tracking and testing",
      body: "A page cannot be improved if its conversions are miscounted. We set up tracking that separates sources and passes lead quality back, then test at a pace your click volume can support.",
      items: ["Form, call and chat conversion tracking", "Source and campaign parameters captured", "Lead quality fed back from the CRM", "Split tests where volume allows", "Before-and-after measurement where it does not"],
      href: "/cro/",
    },
  ],

  mechanics: {
    heading: "What happens between an ad click and a submitted form?",
    intro: "Five things happen in the short time after a click, and a page can fail at each. Because every click has already been paid for, each failure has a direct cost.",
    stages: [
      { name: "Click", happens: "The visitor acts on a specific promise made by an ad, email or link.", we: "Map every ad group and campaign to the page it should land on, and stop sending paid traffic to the homepage." },
      { name: "Load", happens: "The page begins to render on whatever device and connection the visitor has.", we: "Cut page weight and scripts so the main content appears quickly and does not shift about." },
      { name: "Match", happens: "The visitor checks whether the first screen reflects what they clicked on.", we: "Repeat the promise in the headline and show the offer and the next step without scrolling." },
      { name: "Weigh", happens: "They read or skim for answers to their objections and for signs the business is credible.", we: "Order the sections around real objections and place genuine proof beside each claim." },
      { name: "Submit", happens: "They complete the form, call or start a chat, or abandon it part way.", we: "Shorten the form, fix validation and confirm what happens next, then track the lead through to quality." },
    ],
  },

  timeline: [
    { when: "Week 1", title: "Traffic and page review", body: "We read where paid and campaign clicks currently land, how each page converts by source and device, and whether conversions are being counted correctly.", outputs: ["Landing page audit", "Campaign-to-page map"] },
    { when: "Weeks 2 to 3", title: "Research and wireframes", body: "Objections are gathered from recordings, sales conversations and search terms, then turned into wireframes and copy for the highest-spend campaigns first.", outputs: ["Wireframes and copy", "Form specification"] },
    { when: "Weeks 3 to 5", title: "Design and build", body: "Pages are designed, built on your CMS or landing page platform, tested across devices and connected to analytics and your CRM.", outputs: ["Built and tracked pages", "Reusable page template"] },
    { when: "Weeks 5 to 6", title: "Launch and verification", body: "Traffic is moved to the new pages in stages. We verify that leads arrive, tracking fires once and nothing has broken in the handover to sales.", outputs: ["Live pages receiving traffic", "Tracking verification record"] },
    { when: "Month 2 onward", title: "Test and extend", body: "Variants are tested where click volume allows, results are read against lead quality, and the template is extended to further campaigns and audiences.", outputs: ["Test results with commentary", "Additional campaign pages"] },
  ],

  comparison: {
    heading: "Dedicated landing page or homepage: where should ads send people?",
    intro: "It is the first decision in any paid campaign and the one most often made by default. The two pages do different jobs, and the difference shows in what each click costs you.",
    columns: ["Dedicated landing page", "Homepage"],
    rows: [
      { label: "Purpose", a: "One offer, one action", b: "Introduces the whole business" },
      { label: "Message match", a: "Written for the ad", b: "Generic by design" },
      { label: "Navigation", a: "Minimal, focused on the action", b: "Full menu, many exits" },
      { label: "Measurement", a: "Clean read per campaign", b: "Mixed with all other traffic" },
      { label: "Effort", a: "Needs building and upkeep", b: "Already exists" },
      { label: "Best use", a: "Paid and campaign traffic", b: "Brand searches and direct visits" },
    ],
    verdict: "For non-brand paid traffic, a dedicated page matched to the ad is nearly always the better destination. The homepage remains a reasonable choice for brand searches, where visitors want to look around.",
    link: { label: "See our Google Ads service", href: "/google-ads/" },
  },

  industries: ["dental", "home-services", "real-estate", "education", "saas", "finance"],
  markets: ["usa", "uk", "india", "uae"],
  scenario: "multi-location-dental-group",

  faqs: [
    { q: "How much does landing page optimization cost?", a: "Cost depends on how many pages are needed, whether we design and build them or advise your team, and how much tracking has to be repaired first. We do not publish fixed prices. A growth audit comes first, followed by a proposal with a defined scope." },
    { q: "How long does it take to build and launch a landing page?", a: "A first page typically takes a few weeks from review to launch, covering research, copy, design, build and tracking. Later pages are quicker because they reuse the template. Sign-off speed and access to your platform affect the schedule more than the build itself." },
    { q: "Is it worth optimising landing pages before increasing ad spend?", a: "Usually, yes. A page that converts poorly makes every click more expensive, and extra budget multiplies that cost. Improving the page first means later spend buys more leads. The exception is very low traffic, where you may need more clicks before you can learn anything." },
    { q: "Does the landing page affect Google Ads Quality Score?", a: "Yes. Landing page experience is one of the three components Google reports for Quality Score, alongside expected click-through rate and ad relevance. A relevant, fast and easy-to-use page can support better ad positions and costs, although Google does not publish the exact weighting." },
    { q: "Should a landing page have a navigation menu?", a: "Usually a reduced one. Removing every link can lift focus, but some visitors want to verify who you are before enquiring. We keep the route to the action dominant and retain only links that build trust, such as the brand home, policies and contact details." },
    { q: "How many form fields should a landing page have?", a: "As few as let your sales team act on the lead. Each field should earn its place. Where qualification matters, a short multi-step form or a single qualifying question often works better than a long form, and we judge the outcome by lead quality as well as volume." },
    { q: "Landing page builder or our own website: which is better?", a: "Either can work. A dedicated builder is faster for marketing teams without developer time. Building on your own CMS gives more control over speed, design consistency and data. We choose by who will maintain the pages, how fast they must load and how they connect to your CRM." },
    { q: "Should paid landing pages be indexed by search engines?", a: "It depends on the page. Campaign pages that duplicate existing service pages, or carry offers meant only for an ad audience, are commonly set to noindex. Pages with substantial unique content can be indexed. We decide page by page so paid and organic pages do not compete." },
    { q: "Is a higher conversion rate always better?", a: "No. Dropping a qualifying field or softening the offer can raise submissions while filling the pipeline with leads that never buy. We track leads into your CRM and judge a page on cost per qualified lead or sale, not on form completions alone." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Landing Page Optimization for Paid Campaigns",
  metaDescription:
    "Landing page optimization from SERPMOZ: message match, page structure, proof, short forms and mobile speed, measured by qualified leads per click.",
};
