import type { Service, ServiceMaster } from "@/types";

/**
 * /retargeting/ : audience design, sequencing, frequency and incrementality.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is retargeting?",
    text: "Retargeting, which Google calls remarketing, is advertising shown to people who have already interacted with a business: visited its website, viewed a product, watched a video, opened a lead form or appeared in its customer list. Platforms such as Google, Meta and LinkedIn build these audiences from tags, server-side events and uploaded data. Good retargeting groups people by what they did, limits how often and for how long they see ads, and tests whether the ads changed the outcome.",
    takeaways: [
      "Retargeting and remarketing mean the same thing in everyday use.",
      "Audiences come from site tags, server events, platform engagement and customer lists.",
      "Platform reports overstate retargeting, because many of these people would have bought anyway.",
      "A holdout test is the reliable way to learn what retargeting really adds.",
    ],
  },

  facts: [
    { label: "Best for", value: "Sites with steady traffic and a considered purchase" },
    { label: "Works alongside", value: "Prospecting ads, email, CRO and CRM data" },
    { label: "Typical horizon", value: "Live in 2 to 4 weeks; incrementality read over 1 to 3 months" },
    { label: "Measured in", value: "Incremental conversions against a holdout group" },
  ],

  pillars: [
    {
      title: "Audience design",
      body: "Someone who abandoned a checkout and someone who read one blog post are not the same prospect. We segment by what people did and how recently, and give each segment its own budget and message.",
      items: ["Segments by page depth and action", "Recency windows matched to buying cycle", "Cart, form and pricing page audiences", "Video and lead form engagement audiences", "Minimum sizes checked on each platform"],
    },
    {
      title: "First-party data and tagging",
      body: "Browser restrictions have shortened the life of cookies and shrunk tag-based audiences. Server-side events and consented customer lists rebuild part of what was lost.",
      items: ["Tags audited on every platform", "Server-side event delivery", "Customer list uploads, hashed and consented", "CRM stage audiences synced automatically", "Consent mode and regional compliance"],
    },
    {
      title: "Message sequencing",
      body: "Repeating the ad someone has already ignored rarely helps. We plan a short sequence that answers the next question a buyer is likely to have, then stops.",
      items: ["Proof and reviews after a first visit", "Objection handling for pricing visitors", "Offers reserved for late-stage segments", "Dynamic product ads from the feed", "A defined end to every sequence"],
      href: "/meta-ads/",
    },
    {
      title: "Frequency and exclusions",
      body: "Who you stop advertising to matters as much as who you reach. Exclusions protect the budget and the buyer's patience.",
      items: ["Recent purchasers and converters excluded", "Existing customers suppressed from acquisition ads", "Frequency limits where the platform allows", "Audience size and budget balanced elsewhere", "Sensitive categories and placements excluded"],
    },
    {
      title: "Cross-channel coordination",
      body: "The same person may sit in audiences on Google, Meta and LinkedIn, and on your email list. We plan them together so the buyer sees one coherent follow-up, not four competing ones.",
      items: ["One segment map across platforms", "Email and ads sequenced, not stacked", "Combined frequency estimated", "Budget split by platform role", "Shared exclusion lists"],
      href: "/email-marketing/",
    },
    {
      title: "Incrementality testing",
      body: "Retargeting audiences are full of people who were about to convert anyway, so last-click and view-through figures flatter it. We test what happens when a comparable group sees no ads.",
      items: ["Holdout groups by audience or region", "Platform conversion lift studies", "View-through credit reported separately", "Results set against blended sales", "Budget adjusted to what the test shows"],
      href: "/ppc-management/",
    },
  ],

  mechanics: {
    heading: "How does a retargeting ad find someone who visited your site?",
    intro: "Nothing follows an individual around the web. A platform records that a browser or logged-in account met a condition you defined, adds it to a list, and lets you bid when a member of that list appears in its inventory.",
    stages: [
      { name: "Signal", happens: "A visitor triggers a tag or server event, engages with content on the platform, or is matched from an uploaded customer list.", we: "Make sure the right events fire, with consent, and that server-side delivery covers what browsers block." },
      { name: "Audience", happens: "The platform adds the person to every list whose rules they meet, for the membership duration you set.", we: "Define rules and durations by intent, so lists are meaningful and large enough to serve." },
      { name: "Auction", happens: "When a list member opens a feed, a site or a search, your ad enters the auction like any other, often with a higher bid.", we: "Set bids by segment value and apply exclusions so budget is not spent on people who have converted." },
      { name: "Exposure", happens: "The person sees the ad, possibly several times across devices and platforms.", we: "Control frequency, rotate the sequence and end it when the window closes." },
      { name: "Attribution", happens: "If the person converts, each platform that showed or was clicked claims the conversion within its window.", we: "Report click and view credit separately and compare against a holdout to find the true contribution." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audience and tag audit", body: "We review every audience, its size, overlap, membership duration and exclusions, and test whether tags and server events are recording what they should.", outputs: ["Retargeting audit", "Tag and consent fix list"] },
    { when: "Weeks 2 to 3", title: "Segment plan", body: "Audiences are redefined around behaviour and recency, each with a message, a time limit and a rule for when the person leaves the audience.", outputs: ["Segment map across platforms", "Exclusion and frequency rules"] },
    { when: "Weeks 3 to 5", title: "Build and launch", body: "Lists are created, customer data is synced, creative sequences are produced and campaigns go live. New lists need time to fill before they can serve.", outputs: ["Campaigns and sequences live", "CRM audience sync"] },
    { when: "Month 2 onward", title: "Tune and test", body: "Frequency, windows and creative are adjusted from observed behaviour. A holdout test is set up where audience volume is large enough to give a clear answer.", outputs: ["Frequency and window adjustments", "Holdout test design"] },
    { when: "Every month", title: "Honest reporting", body: "Platform-reported conversions are shown beside incremental estimates and blended sales, and budget follows the incremental figure.", outputs: ["Report separating click, view and incremental credit", "Budget recommendation"] },
  ],

  comparison: {
    heading: "Retargeting ads or email follow-up: which brings people back?",
    intro: "Both exist to recover interest that did not convert first time. They reach different people at different costs, and most businesses with a list and a site need a plan for how the two share the job.",
    columns: ["Retargeting ads", "Email follow-up"],
    rows: [
      { label: "Who it reaches", a: "Anonymous and known visitors", b: "Only people who gave an address" },
      { label: "Cost", a: "Paid per impression or click", b: "Low cost per send" },
      { label: "Data needed", a: "Tags, events or lists", b: "Consented email address" },
      { label: "Space for message", a: "A few seconds of attention", b: "Room to explain" },
      { label: "Control of timing", a: "When they next browse", b: "Sent when you choose" },
      { label: "Best use", a: "Visitors you cannot contact", b: "Abandoned carts and known leads" },
    ],
    verdict: "Use email first for anyone whose address you hold, because it is cheaper and more direct. Use retargeting for the larger group who left without identifying themselves, and suppress people from ads once email has brought them back.",
    link: { label: "See our email marketing service", href: "/email-marketing/" },
  },

  industries: ["ecommerce", "saas", "b2b", "real-estate", "education", "travel"],
  markets: ["usa", "uk", "europe", "india"],

  faqs: [
    { q: "What is the difference between retargeting and remarketing?", a: "In practice, none. Google uses remarketing for its list-based ad features, while most other platforms say retargeting. Some marketers reserve remarketing for email to past customers. Both terms describe reaching people who have already interacted with your business, and the planning is the same." },
    { q: "How much does retargeting cost?", a: "Media cost is usually a small share of a paid budget, because the audiences are small. Impressions can be priced higher than prospecting, since many advertisers want the same people. Management cost depends on the number of platforms and segments. We scope it after a growth audit." },
    { q: "Is retargeting worth it?", a: "Usually, at a sensible size. It reaches people who already know you, which makes it efficient. Its reported return is also inflated by people who would have come back unprompted. Run with exclusions, limits and a holdout test, it earns its place. Left unchecked, it mostly pays for sales you already had." },
    { q: "How much website traffic do we need for retargeting?", a: "Enough to fill audiences above each platform's minimum size and still leave room to segment. Low-traffic sites can retarget all visitors as a single group or lean on platform engagement audiences and customer lists. Fine-grained segments only make sense once each one holds enough people to serve consistently." },
    { q: "How do we know whether retargeting is really adding sales?", a: "By withholding ads from a comparable group and measuring the difference. Platforms offer lift studies, and simpler tests exclude a random share of the audience or a region. Last-click and view-through reports cannot answer this, because they credit the ad whenever a conversion follows it." },
    { q: "What are view-through conversions and should we count them?", a: "A view-through conversion is recorded when someone sees an ad, does not click, and converts later. For retargeting it is weak evidence, since the person was already likely to return. We report view-through separately, never add it to click conversions, and rely on holdout results instead." },
    { q: "Can we retarget people using our email list?", a: "Yes. Google, Meta and LinkedIn accept uploaded customer lists, which are hashed and matched to user accounts. You need a lawful basis and appropriate consent for that use, and match rates vary. Lists are also valuable for exclusions, so current customers stop seeing acquisition ads." },
    { q: "How many times should someone see a retargeting ad?", a: "Enough to be remembered and not so often that it irritates. No single number fits every case: it depends on the purchase, the window and the creative. We set limits where platforms allow, watch response as frequency rises, and reduce exposure once extra impressions stop producing results." },
    { q: "What do you need from us to set up retargeting?", a: "Access to your ad accounts, tag manager and analytics, a consent setup that meets the rules in your markets, and CRM or customer data for lists and exclusions. For ecommerce, a product feed enables dynamic ads. It also helps to know your typical time from first visit to purchase." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Retargeting Services: Audiences & Frequency",
  metaDescription:
    "Retargeting services across Google, Meta and LinkedIn: audiences segmented by behaviour, sequenced messages, frequency limits and holdout tests of impact.",
};
