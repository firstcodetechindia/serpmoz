import type { Service, ServiceMaster } from "@/types";

/**
 * /meta-ads/ : Facebook and Instagram advertising.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Meta Ads management?",
    text: "Meta Ads management is the planning, production and optimisation of paid campaigns on Facebook, Instagram, Messenger and the Audience Network, all run from Meta Ads Manager. It includes conversion tracking through the Meta Pixel and Conversions API, campaign structure, audience strategy, creative testing and reporting. Meta's delivery system decides who sees each ad from predicted behaviour, not from search queries, so results depend heavily on the quality of the creative and of the conversion data the account sends back.",
    takeaways: [
      "Meta Ads covers Facebook, Instagram, Messenger and the Audience Network from one account.",
      "People are not searching on Meta, so the ad has to create the interest.",
      "The auction weighs bid, predicted action and ad quality, not bid alone.",
      "The Conversions API sends events from your server, recovering signal that browsers block.",
    ],
  },

  facts: [
    { label: "Best for", value: "Products that can be shown, explained or demonstrated" },
    { label: "Works alongside", value: "Google Ads, email, landing pages and organic social" },
    { label: "Typical horizon", value: "Delivery in days; reliable winners after several test cycles" },
    { label: "Measured in", value: "Blended acquisition cost and incremental revenue" },
  ],

  pillars: [
    {
      title: "Pixel and Conversions API",
      body: "Browser tracking alone now misses a meaningful share of events. We pair the Pixel with server-side events so Meta's delivery system receives a fuller, deduplicated record of what happened after the click.",
      items: ["Pixel and Conversions API sending the same events", "Event deduplication with shared event IDs", "Event match quality improved with hashed customer data", "Domain verification and event prioritisation", "CRM stages passed back for lead campaigns"],
    },
    {
      title: "Creative strategy and production",
      body: "With broad targeting now the norm, the creative does the job audiences used to do: it decides who stops and who scrolls past. We plan concepts around distinct buyer motivations and produce them in volume.",
      items: ["Concepts mapped to motivations and objections", "Hooks tested in the opening seconds", "Static, video, carousel and creator formats", "Versions cut for feed, Stories and Reels", "A brief for each concept stating what it tests"],
      href: "/video-marketing/",
    },
    {
      title: "Campaign structure and the learning phase",
      body: "Each ad set learns separately, and it learns faster with more conversions. We keep structures simple so budget is not split across ad sets that never gather enough data to settle.",
      items: ["Few campaigns, each with a clear objective", "Advantage+ and manual setups chosen deliberately", "Budgets sized to the optimisation event", "Edits batched to avoid resetting learning", "Separate testing and scaling campaigns"],
    },
    {
      title: "Audiences and exclusions",
      body: "Meta increasingly finds people on its own, and what you supply is treated as a suggestion. The decisions left to the advertiser are mostly about who to leave out and which first-party lists to share.",
      items: ["Broad targeting with first-party signals", "Customer lists for exclusion and lookalikes", "Existing customers separated from prospecting", "Engagement and site visitor audiences", "Location, age and placement controls"],
      href: "/retargeting/",
    },
    {
      title: "Lead forms and landing pages",
      body: "Instant forms are convenient and can attract people who barely noticed they submitted one. We decide form or page by lead quality, and design each so that the right people complete it.",
      items: ["Higher-intent form settings and review screens", "Qualifying questions that screen without deterring", "Landing pages matched to each concept", "Instant lead sync to the CRM", "Follow-up within minutes"],
      href: "/landing-page-optimization/",
    },
    {
      title: "Measurement beyond Ads Manager",
      body: "Ads Manager attributes conversions inside its own click and view windows, so it tends to count sales other channels also claim. We read it beside blended figures and, where budget allows, controlled tests.",
      items: ["Attribution settings chosen and documented", "Blended acquisition cost across channels", "Conversion lift or holdout tests", "New versus returning customer split", "Post-purchase survey data where available"],
    },
  ],

  mechanics: {
    heading: "How does Meta decide who sees your ad?",
    intro: "Nobody types a query into Instagram. Each time a person opens Facebook or Instagram, Meta runs an auction among every advertiser who could reach them, and the winner is the ad with the highest total value, which is not the same as the highest bid.",
    stages: [
      { name: "Eligibility", happens: "Your ad becomes a candidate for a person who fits the targeting, placements and exclusions, and has not been filtered out by policy review.", we: "Set exclusions and placements deliberately and keep ads within policy so delivery is not restricted." },
      { name: "Prediction", happens: "Meta estimates how likely this person is to take the action you are optimising for, using their behaviour and your past conversion data.", we: "Choose the optimisation event carefully and supply accurate conversion data through the Pixel and Conversions API." },
      { name: "Auction", happens: "Your bid, the estimated action rate and an ad quality score are combined into a total value. The highest total value wins the impression.", we: "Improve the two parts money cannot buy directly: creative people respond to, and a page that delivers on it." },
      { name: "Learning", happens: "A new or heavily edited ad set explores different people and placements until it has enough optimisation events. Results are unstable during this period.", we: "Give each ad set enough budget and time, and avoid edits that restart the process without good reason." },
      { name: "Fatigue", happens: "As the same people see an ad repeatedly, response falls and costs rise.", we: "Watch frequency and response by creative, and replace ads from a tested pipeline before performance drops." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Account and signal audit", body: "We review event setup, match quality, structure, audience overlap, creative history and how far Ads Manager figures sit from your own sales records.", outputs: ["Meta account audit", "Tracking gap list"] },
    { when: "Weeks 2 to 3", title: "Measurement fixes", body: "The Conversions API is implemented or repaired, events are deduplicated, and for lead campaigns CRM stages are connected so optimisation can aim at qualified leads.", outputs: ["Working Conversions API", "Agreed optimisation events"] },
    { when: "Weeks 3 to 5", title: "Creative plan and first batch", body: "Concepts are drawn from customer reviews, sales calls and competitor ads, then briefed and produced. Campaigns are consolidated into a structure that can gather data.", outputs: ["Creative testing roadmap", "First set of ads live"] },
    { when: "Month 2 onward", title: "Test, scale, retire", body: "New concepts enter testing on a regular cadence. Winners move to scaling campaigns, and losers are stopped with a note on what was learned.", outputs: ["Creative test results", "New batch each cycle"] },
    { when: "Every month", title: "Blended review", body: "Meta's reported results are read beside total sales and other channels. Where spend is large enough, we run lift tests to estimate what Meta truly adds.", outputs: ["Report on blended acquisition cost", "Next month's testing priorities"] },
  ],

  comparison: {
    heading: "Meta Ads or Google Ads: which fits your business?",
    intro: "They reach people in different states of mind. One interrupts someone who is scrolling, and the other answers someone who is searching. Which should lead depends on whether your buyers already know to look for you.",
    columns: ["Meta Ads", "Google Ads"],
    rows: [
      { label: "Buyer state", a: "Browsing, not looking", b: "Actively searching" },
      { label: "Targeting basis", a: "Predicted behaviour and creative", b: "Keywords and search intent" },
      { label: "Main lever", a: "Creative quality and volume", b: "Keywords, bids and relevance" },
      { label: "Demand", a: "Creates new demand", b: "Captures existing demand" },
      { label: "Attribution", a: "Harder; views and delayed purchases", b: "Clearer; click then conversion" },
      { label: "Best use", a: "New, visual or impulse products", b: "Known needs and urgent problems" },
    ],
    verdict: "If people already search for what you sell, Google usually earns the first budget and Meta widens the pool of people who will search later. If the product is new or bought on sight, Meta often leads and Google collects the demand it creates.",
    link: { label: "See our Google Ads service", href: "/google-ads/" },
  },

  industries: ["ecommerce", "education", "real-estate", "hospitality", "healthcare", "local-business"],
  markets: ["india", "usa", "uae", "uk"],
  scenario: "d2c-ecommerce-margin",

  faqs: [
    { q: "How much do Facebook and Instagram ads cost?", a: "Meta charges mainly by impressions, with the price set by auction and varying by audience, season and how well the ad performs. Management and creative production are separate costs that depend on scope. We give a specific proposal after a growth audit, not a figure in advance." },
    { q: "How long do Meta Ads take to work?", a: "Ads usually start delivering within a day of approval. Early results are unstable while each ad set is in its learning phase. Finding creative that works reliably normally takes several rounds of testing, so judge the programme over two to three months, not the first fortnight." },
    { q: "What is the learning phase?", a: "It is the period after an ad set launches, or is significantly edited, when Meta's delivery system is still working out who responds. Performance fluctuates and costs are often higher. It ends once the ad set has gathered enough optimisation events. Frequent edits restart it, which is why changes should be batched." },
    { q: "What is the Conversions API and do we need it?", a: "The Conversions API sends conversion events from your server or platform straight to Meta, alongside the browser Pixel. Browsers and privacy settings block part of what the Pixel sees. Using both, with deduplication, gives Meta more complete data to optimise from. For most advertisers it is now standard practice." },
    { q: "Are Meta Ads worth it for a small business?", a: "They can be, particularly for local and visual businesses. You need an offer people can understand in seconds, a way to capture and follow up interest, and enough budget for an ad set to gather conversions. Without those, spend tends to produce reach and little else." },
    { q: "Should we boost posts or use Ads Manager?", a: "Use Ads Manager for anything you expect a return from. Boosting is quick and offers limited control over objective, optimisation event, placements and exclusions. It typically optimises for engagement, which is a different thing from enquiries or sales. Ads Manager lets you choose precisely what the system pursues." },
    { q: "Why did our Meta results drop after privacy changes?", a: "Apple's tracking prompt and browser restrictions reduced the data Meta receives, which weakened both optimisation and reporting. Some of the drop is real and some is conversions that happened and were not recorded. Server-side events, better match quality and blended measurement recover a good part of it." },
    { q: "Do we still need detailed interest targeting?", a: "Much less than before. Meta's system now treats most audience inputs as suggestions and looks beyond them when it predicts better results. Broad targeting with strong creative and good conversion data often performs as well or better. Exclusions and customer lists remain worth setting carefully." },
    { q: "How often do we need new ads?", a: "It depends on spend and audience size. Larger budgets and smaller audiences wear creative out sooner. Instead of a fixed schedule, we watch frequency and response for each ad and keep a pipeline of tested replacements ready, so that a new concept is live before the current one fades." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Meta Ads Management: Facebook & Instagram Ads",
  metaDescription:
    "Meta Ads management for Facebook and Instagram: Conversions API setup, creative testing and campaign structure, measured on blended acquisition cost.",
};
