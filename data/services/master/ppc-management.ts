import type { Service, ServiceMaster } from "@/types";

/**
 * /ppc-management/ : the cross-platform paid media programme.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is PPC management?",
    text: "PPC management is the ongoing planning, building and optimisation of paid advertising across search engines and social platforms, where the advertiser pays for clicks or impressions. It covers conversion tracking, account structure, bidding, creative, landing pages and the split of budget between platforms such as Google, Microsoft, Meta and LinkedIn. A well-run programme is judged on what it costs to win a qualified lead or customer, read from the business's own records and not from each platform's dashboard.",
    takeaways: [
      "PPC management spans several platforms, and the hardest decision is how budget is divided between them.",
      "Every platform now bids automatically, so the conversion data you feed it decides what it buys.",
      "Each platform claims credit by its own rules, which is why their reported totals rarely match your sales.",
      "Paid traffic starts on launch day and stops when the budget does.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses that know what a customer is worth" },
    { label: "Works alongside", value: "SEO, landing pages, CRO and CRM follow-up" },
    { label: "Typical horizon", value: "Traffic at launch; steady efficiency after 2 to 3 months of data" },
    { label: "Measured in", value: "Acquisition cost and return, reconciled with your CRM" },
  ],

  pillars: [
    {
      title: "Measurement and conversion design",
      body: "Automated bidding optimises towards whatever you call a conversion. We agree with sales and finance which outcomes deserve that name, then make sure every platform receives the same definition and the same values.",
      items: ["One conversion definition used on every platform", "Server-side tagging and consent handling", "Offline conversion imports from the CRM", "Conversion values weighted by lead quality or margin", "A single source of truth outside the ad platforms"],
    },
    {
      title: "Account structure and governance",
      body: "Structure decides how much data each campaign has to learn from and how much control you keep. We consolidate where volume is thin and separate where intent, margin or geography genuinely differ.",
      items: ["Campaigns split by intent, not by habit", "Brand and non-brand kept apart", "Shared negative keyword and exclusion lists", "Naming conventions that make reporting possible", "A change log for every edit"],
    },
    {
      title: "Budget allocation across channels",
      body: "Each platform has a point where the next unit of spend buys less than the last. We look for that point per channel and move money to wherever the next qualified customer is cheapest.",
      items: ["A defined role for each platform", "Marginal return read channel by channel", "Budget rules by market and product line", "Pacing against monthly and quarterly limits", "A reserved share for testing"],
    },
    {
      title: "Search engine advertising",
      body: "Search captures people who have already described what they want. Google carries most of that demand, and Microsoft adds a smaller audience that is often cheaper to reach.",
      items: ["Keyword and match type strategy", "Search term review and negatives", "Shopping feeds and Performance Max limits", "Ad copy and asset testing", "Impression share on priority terms"],
      href: "/google-ads/",
    },
    {
      title: "Paid social advertising",
      body: "Social platforms reach people before they search. Meta rewards a steady supply of tested creative, and LinkedIn rewards a precise list of companies and roles. Neither behaves like search, and neither should be reported like it.",
      items: ["Creative concepts tested on a schedule", "Broad and list-based audiences", "Server-side event sharing", "Lead form quality controls", "Retargeting with frequency limits"],
      href: "/meta-ads/",
    },
    {
      title: "Landing pages and offers",
      body: "A click is a cost until the page turns it into something. We treat the offer and the page as part of the campaign, because improving them lowers acquisition cost on every platform at once.",
      items: ["One page per intent, matched to the ad", "Offer and proof tested before layout", "Form length set by lead quality", "Page speed on mobile connections", "Tests read on qualified outcomes"],
      href: "/landing-page-optimization/",
    },
  ],

  mechanics: {
    heading: "What happens between a paid click and a customer?",
    intro: "On every platform, paid media follows the same chain: a person becomes eligible to see an ad, an auction decides whether yours is shown, and what happens afterwards is reported back to the bidding system. The last link is the one most accounts leave broken.",
    stages: [
      { name: "Eligibility", happens: "A search query or an audience match makes your ad a candidate for one impression.", we: "Define keywords, audiences and exclusions so the ad is a candidate only where a buyer is plausible." },
      { name: "Auction", happens: "The platform ranks candidates on bid and predicted response, then sets the price.", we: "Set targets and limits the bidding system works within, and improve the ads it has to work with." },
      { name: "Click", happens: "The person chooses your ad over the organic results, competitors and everything else on screen.", we: "Write and test messages that attract the right buyer and put off the wrong one." },
      { name: "Conversion", happens: "On the page, the visitor enquires, buys or leaves.", we: "Match the page to the promise in the ad and remove whatever makes the next step hard." },
      { name: "Feedback", happens: "The outcome is sent back to the platform, which adjusts future bids towards similar people.", we: "Send back qualified leads and revenue, so the system learns from sales outcomes and not form fills." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audit and tracking review", body: "We read every account, compare platform conversions with CRM records and note where spend is going to branded, low-intent or unmeasured traffic.", outputs: ["Account and tracking audit", "Reconciliation of platform and CRM figures"] },
    { when: "Weeks 2 to 4", title: "Measurement rebuild", body: "Conversion actions, values, consent handling and offline imports are corrected before any budget is moved. Bidding cannot improve on bad data.", outputs: ["Conversion design agreed with sales", "Working offline conversion import"] },
    { when: "Weeks 4 to 6", title: "Restructure and relaunch", body: "Campaigns are rebuilt around intent and margin, with shared exclusions and a defined role for each platform. Changes are staged so automated bidding is not reset everywhere at once.", outputs: ["New account structure", "Channel roles and budget plan"] },
    { when: "Month 2 onward", title: "Testing in cycles", body: "Creative, offers, audiences and landing pages are tested on a fixed cadence. Each test has a question written down before it starts.", outputs: ["Test log with decisions", "New creative and page variants"] },
    { when: "Every month", title: "Reconcile and reallocate", body: "Platform data is reconciled with the CRM by campaign, and budget moves towards whatever is producing qualified customers at the lowest marginal cost.", outputs: ["Report on acquisition cost and return", "Budget reallocation for the next month"] },
  ],

  comparison: {
    heading: "Should you manage PPC in-house or use an agency?",
    intro: "Both can work. The decision usually turns on how many platforms you run, how much the accounts change from month to month, and whether one person can cover tracking, creative and analysis at once.",
    columns: ["In-house team", "PPC agency"],
    rows: [
      { label: "Business knowledge", a: "Deep, and immediate", b: "Learned during onboarding" },
      { label: "Platform breadth", a: "Limited by who you hire", b: "Specialists for each platform" },
      { label: "Tracking and data skills", a: "Often a gap", b: "Normally part of the service" },
      { label: "Cover and continuity", a: "Exposed when one person leaves", b: "Shared across a team" },
      { label: "Cost shape", a: "Salaries, tools and training", b: "Fee that follows scope" },
      { label: "Best fit", a: "Large, steady single-platform spend", b: "Several platforms or changing needs" },
    ],
    verdict: "An in-house specialist makes sense once spend is large and stable enough to fill the role. Until then, or where several platforms are involved, an agency working inside accounts you own is usually the lower-risk arrangement.",
    link: { label: "See how engagements are structured", href: "/engagement-models/" },
  },

  industries: ["ecommerce", "saas", "b2b", "healthcare", "real-estate", "education"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does PPC management cost?", a: "It depends on the number of platforms, the size and complexity of the accounts and how much creative and landing page work is included. We do not publish a fixed fee because scope varies too much. A growth audit comes first, and the proposal that follows explains what is included and why." },
    { q: "How long does PPC take to work?", a: "Ads can deliver traffic on the day they launch. Efficient performance takes longer, because automated bidding needs conversion data to learn from and tests need time to reach a conclusion. Expect the first two to three months to be about fixing measurement and finding what works, with steadier results after that." },
    { q: "Is PPC worth it for a small business?", a: "It can be, if you know roughly what a customer is worth and can afford enough clicks to learn from. With a small budget, concentrate on one platform and a narrow set of high-intent searches. Spreading thin across four platforms usually means none of them gathers enough data to improve." },
    { q: "What is the difference between PPC and paid social?", a: "PPC originally meant search ads, where you pay when someone clicks after searching. Paid social shows ads to people based on who they are and what they engage with, before they search. Search captures existing demand. Social creates it. Most programmes use both, with different expectations for each." },
    { q: "Which platform should we start with?", a: "Start where your buyers already show intent. If people search for what you sell, that is usually Google search. If the product is new or visual, Meta may come first. For a narrow set of business buyers, LinkedIn can lead. We recommend an order after looking at demand and unit economics." },
    { q: "Why do our platform numbers not match our CRM?", a: "Each platform counts a conversion when its own ad was seen or clicked within its own time window, so two platforms can claim the same sale. Tracking gaps, consent choices and duplicate leads widen the difference. Reconciling against CRM records, campaign by campaign, is the only way to see the real picture." },
    { q: "Should we let the platforms automate bidding?", a: "In most cases, yes. Bidding systems read signals at the moment of each auction that no person can. The risk lies in what they are told to chase. Given cheap form fills as the goal, they will find cheap form fills. Specialists set the goal, the limits and the exclusions." },
    { q: "What do you need from us to begin?", a: "Admin access to your ad accounts, analytics and tag manager, a view of your CRM or order data, and a conversation with whoever owns the sales target. It also helps to know your margins and what a qualified lead looks like, since both shape what the campaigns should optimise towards." },
    { q: "Does a higher budget always mean more customers?", a: "No. Every campaign reaches a point where extra spend buys less relevant clicks at a higher price. Past that point, cost per customer rises faster than volume. Part of managing paid media is finding that ceiling for each channel and moving additional budget somewhere it still earns its place." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "PPC Management: Search & Paid Social Ads",
  metaDescription:
    "PPC management across Google, Microsoft, Meta and LinkedIn: tracking, account structure and budgets judged on acquisition cost, not platform figures.",
};
