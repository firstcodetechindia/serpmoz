import type { Service, ServiceMaster } from "@/types";

/**
 * /microsoft-ads/ : Bing and Microsoft Advertising as its own channel.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Microsoft Ads management?",
    text: "Microsoft Ads management is the setup and ongoing optimisation of campaigns on Microsoft Advertising, the platform formerly called Bing Ads. It places search and shopping ads on Bing and partner search sites, and audience ads across Microsoft properties such as MSN, Outlook and Edge. The work covers UET conversion tracking, campaign structure, bidding, ad copy and audience targeting. The platform works much like Google Ads, with a smaller audience and fewer advertisers competing for each search.",
    takeaways: [
      "Microsoft Advertising was previously known as Bing Ads.",
      "Its auction ranks ads on bid and quality, in a similar way to Google's.",
      "Conversion tracking uses Microsoft's own UET tag, which a Google import does not install for you.",
      "It usually adds volume to a search programme that already works; it rarely replaces one.",
    ],
  },

  facts: [
    { label: "Best for", value: "Advertisers already profitable on Google search" },
    { label: "Works alongside", value: "Google Ads, LinkedIn Ads and landing page work" },
    { label: "Typical horizon", value: "Live in days; judged over 2 to 3 months as data builds slowly" },
    { label: "Measured in", value: "Additional qualified leads and cost against Google" },
  ],

  pillars: [
    {
      title: "Opportunity assessment",
      body: "The channel is worth running only if enough of your buyers use it. We estimate search volume and likely cost in your category and market before anyone builds a campaign.",
      items: ["Keyword volume estimates for your market", "Bing share of your existing organic traffic", "Device and audience profile", "Expected cost against Google", "A clear recommendation to proceed or not"],
    },
    {
      title: "UET tracking and conversions",
      body: "Microsoft measures conversions through the Universal Event Tracking tag and its own conversion goals. Without them the account has nothing to bid towards, and this is the step most imported accounts skip.",
      items: ["UET tag deployed through tag manager", "Conversion goals matched to Google's", "Consent mode configured", "Offline conversion imports", "Microsoft Clarity for session insight"],
    },
    {
      title: "Search campaigns built for Bing",
      body: "Importing from Google is a sensible start, and only a start. Queries, devices and competitors differ here, so bids, negatives and ad copy need their own evidence.",
      items: ["Import settings reviewed line by line", "Bids reset for this auction", "Search partner performance checked", "Negatives from Microsoft search terms", "Ad assets rebuilt where formats differ"],
      href: "/google-ads/",
    },
    {
      title: "Shopping and feeds",
      body: "Product ads run from Microsoft Merchant Center, which can take the same feed you send to Google. Feed errors and disapprovals are reported separately and need separate attention.",
      items: ["Merchant Center store setup", "Feed import and scheduling", "Disapproval fixes", "Product group structure", "Price and stock accuracy checks"],
    },
    {
      title: "Audience and LinkedIn profile targeting",
      body: "Microsoft owns LinkedIn, and in supported markets advertisers can adjust bids or target by company, industry and job function. Audience ads extend reach across Microsoft's own sites and apps.",
      items: ["Company, industry and job function layers", "Remarketing lists from UET", "Customer match lists", "In-market audiences", "Audience ad placements reviewed"],
      href: "/linkedin-ads/",
    },
    {
      title: "Cross-engine reporting",
      body: "Microsoft is easiest to judge beside Google, term for term. We report both engines in one view so that budget moves to wherever the next qualified lead is cheaper.",
      items: ["Like-for-like campaign comparison", "Shared naming conventions", "Cost per qualified lead by engine", "Impression share on priority terms", "Budget split reviewed monthly"],
      href: "/ppc-management/",
    },
  ],

  mechanics: {
    heading: "How does a search on Bing become a lead from Microsoft Ads?",
    intro: "The sequence will look familiar to anyone who has run Google Ads, which is why imports are possible at all. The differences are in who is searching, how many advertisers are competing and how long it takes to gather enough data to make a decision.",
    stages: [
      { name: "Search", happens: "Someone searches on Bing, in Edge or Windows, or on a partner site that shows Microsoft's ads.", we: "Confirm which queries carry worthwhile volume here, and decide whether search partners stay switched on." },
      { name: "Match", happens: "The platform checks which keywords and product offers are eligible for that query, after negatives and targeting.", we: "Review Microsoft's own search terms, since matching differs from Google's and imported negatives do not cover everything." },
      { name: "Auction", happens: "Eligible ads are ranked on bid and quality, including expected clickthrough rate, ad relevance and landing page experience.", we: "Set bids for this auction's level of competition instead of carrying Google's across." },
      { name: "Visit", happens: "The searcher clicks, and the UET tag records the visit and what the visitor does next.", we: "Verify the tag fires on every page and that conversion goals count the same outcomes as Google." },
      { name: "Learning", happens: "Conversions feed automated bidding, which adjusts future bids. With lower volume, this takes longer than on Google.", we: "Import offline outcomes, hold targets steady and wait for enough data before changing course." },
    ],
  },

  timeline: [
    { when: "Week 1", title: "Channel assessment", body: "We size the opportunity from keyword estimates, your analytics and your Google Ads history, and say plainly whether it is worth pursuing.", outputs: ["Opportunity assessment", "Proposed starting budget share"] },
    { when: "Weeks 1 to 2", title: "Tracking setup", body: "The UET tag, conversion goals, consent settings and any offline import are put in place and tested before a campaign goes live.", outputs: ["Verified UET tag", "Conversion goals aligned with Google"] },
    { when: "Weeks 2 to 3", title: "Import and adapt", body: "Proven campaigns are imported from Google, then bids, budgets, assets, targeting and negatives are corrected for this platform. Recurring imports are limited so they do not overwrite that work.", outputs: ["Adapted campaign build", "Import rules document"] },
    { when: "Month 2 onward", title: "Manage on its own evidence", body: "Search terms, ads and audiences are optimised from Microsoft data. LinkedIn profile targeting and audience ads are tested where they fit the buyer.", outputs: ["Search term and bid reviews", "Audience test results"] },
    { when: "Every month", title: "Compare engines", body: "Cost per qualified lead is read beside Google's, and budget is shifted between the two according to marginal return.", outputs: ["Cross-engine report", "Budget split recommendation"] },
  ],

  comparison: {
    heading: "Microsoft Ads or Google Ads: where should search budget go?",
    intro: "This is seldom an either-or choice. The practical question is whether Microsoft deserves a share of the budget once Google is working, and how large that share should be.",
    columns: ["Microsoft Ads", "Google Ads"],
    rows: [
      { label: "Search volume", a: "Smaller, varies by market", b: "Largest in most markets" },
      { label: "Auction competition", a: "Fewer advertisers per search", b: "Heavily contested" },
      { label: "Audience", a: "More desktop and workplace use", b: "Broad, mobile-heavy" },
      { label: "Professional targeting", a: "LinkedIn profile data, where available", b: "No LinkedIn data" },
      { label: "Speed of learning", a: "Slower, with less data", b: "Faster, with more data" },
      { label: "Role", a: "Efficient addition", b: "Core of most search budgets" },
    ],
    verdict: "Google comes first for nearly every advertiser because that is where most searches happen. Once it is profitable, Microsoft is often the simplest next step, provided it is tracked and managed in its own right.",
    link: { label: "See our Google Ads service", href: "/google-ads/" },
  },

  industries: ["b2b", "finance", "professional-services", "saas", "legal", "manufacturing"],
  markets: ["usa", "uk", "canada", "australia"],

  faqs: [
    { q: "Is Microsoft Ads the same as Bing Ads?", a: "Yes. Bing Ads was renamed Microsoft Advertising, and most people now call it Microsoft Ads. The platform places ads on Bing search results, on partner search sites, and across Microsoft properties such as MSN, Outlook and the Edge browser through its audience network." },
    { q: "How much does Microsoft Ads management cost?", a: "The fee depends on whether Microsoft is managed alone or as part of a wider search programme, and on the size of the account. It is usually a smaller piece of work than Google. We scope it after a growth audit, once we can see whether the channel has enough volume to justify it." },
    { q: "Does anyone actually use Bing?", a: "Yes, though far fewer people than use Google, and the share varies by country and device. Bing is the default search engine in Windows and Edge, so usage is higher on work computers. Whether that audience matters to you depends on your category, which is what the assessment checks." },
    { q: "Are clicks cheaper on Microsoft Ads than Google Ads?", a: "Often, because fewer advertisers compete in each auction, although it is not a rule. Some categories are just as contested. Cheaper clicks also mean little if they convert less well. The comparison that counts is cost per qualified lead on each engine for the same kind of search." },
    { q: "How long before we know if Microsoft Ads is working?", a: "Longer than on Google, because lower volume means conversions accumulate slowly. Campaigns can be live within days. A fair judgement on cost per qualified lead usually needs two to three months, and longer for niche keywords with few searches." },
    { q: "Do we need separate conversion tracking for Microsoft Ads?", a: "Yes. Microsoft uses its own Universal Event Tracking tag and conversion goals. Importing campaigns from Google copies structure and ads, not working tracking. Without UET in place, the account reports clicks and no outcomes, and automated bidding has nothing to learn from." },
    { q: "What is LinkedIn profile targeting in Microsoft Ads?", a: "Because Microsoft owns LinkedIn, advertisers in supported markets can target or adjust bids by a searcher's company, industry or job function. It applies to people signed in with a linked Microsoft account, so coverage is partial. It is useful for B2B search campaigns and is not a substitute for advertising on LinkedIn itself." },
    { q: "Should we keep syncing our Google campaigns automatically?", a: "With care. Scheduled imports keep the accounts aligned and can also overwrite bids, budgets and negatives you have tuned for Microsoft. We normally import structure and new ads while protecting the settings that have been adjusted, and review what each sync changed." },
    { q: "Do Microsoft Ads appear in Copilot?", a: "Microsoft shows advertising within its Copilot experiences, drawing on campaigns already running in Microsoft Advertising. Formats and eligibility are still changing, so we treat it as additional reach from existing campaigns, watch how it reports, and avoid building a plan around placements that may change." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Microsoft Ads Management: Bing Search Ads",
  metaDescription:
    "Microsoft Ads management for Bing search, shopping and audience campaigns: UET tracking, purpose-built structure and reporting compared directly with Google.",
};
