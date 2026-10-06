import type { Service, ServiceMaster } from "@/types";

/**
 * /google-ads/ : Google only. Search, Shopping, Performance Max, YouTube.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Google Ads management?",
    text: "Google Ads management is the work of planning, building and continually improving campaigns on Google's advertising platform, which places ads on Search, Shopping, YouTube, Maps, Gmail and partner sites. It includes conversion tracking, keyword and feed strategy, bidding, ad copy, negative keywords and landing pages. Google decides which ads appear through an auction that weighs the bid against ad quality, so good management lowers cost by improving relevance as well as by adjusting what you are willing to pay.",
    takeaways: [
      "Google runs an auction for every search, and the highest bid does not automatically win.",
      "Ad Rank combines your bid, the quality of the ad and landing page, and the context of the search.",
      "Smart Bidding sets a bid for each auction from the conversion data the account supplies.",
      "Performance Max serves across all Google inventory and needs clear limits to stay accountable.",
    ],
  },

  facts: [
    { label: "Best for", value: "Demand people already search for on Google" },
    { label: "Works alongside", value: "SEO, landing pages, Microsoft Ads and Meta Ads" },
    { label: "Typical horizon", value: "Clicks at launch; bidding steadies over 4 to 8 weeks of data" },
    { label: "Measured in", value: "Non-brand cost per qualified lead or margin return" },
  ],

  pillars: [
    {
      title: "Conversion tracking and values",
      body: "Smart Bidding can only chase what it can see. We set up conversion actions that reflect real business outcomes, give them values, and feed back what happened after the form was submitted.",
      items: ["Primary and secondary conversion actions", "Enhanced conversions and consent mode", "Offline conversion imports from the CRM", "Call tracking and call conversions", "Values set by lead stage or margin"],
    },
    {
      title: "Search campaigns",
      body: "Search is where intent is stated in the searcher's own words. Structure, match types and negatives decide which of those words you pay for, and the search terms report shows whether the decision was right.",
      items: ["Campaigns grouped by intent and theme", "Match type policy, including broad match", "Negative keyword lists and governance", "Responsive search ads and assets", "Search term reviews on a schedule"],
    },
    {
      title: "Shopping and product feeds",
      body: "Shopping ads have no keywords. Google matches queries to the titles, attributes and categories in your Merchant Center feed, so the feed is the campaign.",
      items: ["Product titles written for how people search", "Complete attributes, GTINs and categories", "Disapproval and price mismatch fixes", "Custom labels for margin and stock", "Product-level performance reviews"],
      href: "/ecommerce-seo/",
    },
    {
      title: "Performance Max governance",
      body: "Performance Max places ads across Search, Shopping, YouTube, Display, Discover, Gmail and Maps from one campaign. It can perform well, and it can also quietly absorb brand demand and existing customers unless it is told not to.",
      items: ["Brand exclusions and negative keywords", "Asset groups built around product or audience", "Audience signals from first-party data", "Customer acquisition settings", "Channel and search term reporting reviewed"],
    },
    {
      title: "YouTube and Demand Gen",
      body: "Video and Demand Gen campaigns reach people who are not searching yet. We plan them as demand creation, with creative made for the format and expectations that differ from search.",
      items: ["Audience strategy from search and site data", "Video cut for skippable and Shorts formats", "Frequency and placement controls", "Measurement by lift in search and brand demand", "Remarketing lists built from viewers"],
      href: "/youtube-marketing/",
    },
    {
      title: "Landing page experience",
      body: "Google scores the page as part of ad quality, and the visitor judges it in seconds. A page that matches the search improves both the price you pay and the share of clicks that become enquiries.",
      items: ["Message match between keyword, ad and page", "Mobile speed and stability", "Clear next step above the fold", "Proof placed beside the form", "Separate pages for distinct intents"],
      href: "/landing-page-optimization/",
    },
  ],

  mechanics: {
    heading: "How does the Google Ads auction decide who appears?",
    intro: "An auction runs each time someone searches, and it finishes before the results page loads. Position is not simply sold to the highest bidder: Google ranks advertisers on a combination of bid and quality, which means a more relevant ad can appear above a higher bid and pay less for it.",
    stages: [
      { name: "Query match", happens: "Google checks which advertisers have keywords, feeds or signals that make them eligible for this search, after negatives and targeting are applied.", we: "Control eligibility with keywords, match types, negatives, locations and audiences." },
      { name: "Bid", happens: "Each eligible advertiser's bid is set, usually by Smart Bidding from signals such as device, location, time and query.", we: "Choose the bid strategy and target, and make sure the conversions it learns from are the right ones." },
      { name: "Quality", happens: "Google estimates expected clickthrough rate, ad relevance and landing page experience for this ad on this search.", we: "Tighten the link between keyword, ad and page, and use Quality Score as a diagnostic of where that link is weak." },
      { name: "Ad Rank", happens: "Bid, quality, the expected impact of assets and the context of the search produce an Ad Rank. Ads below a minimum threshold do not show.", we: "Add relevant assets and improve quality so the ad clears thresholds without relying on bid alone." },
      { name: "Price", happens: "The winner pays only what is needed to hold its position and clear the thresholds, which is often less than its maximum bid.", we: "Track actual cost per click against quality changes and read the result on cost per qualified lead." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Account audit", body: "We review conversion actions, campaign structure, search terms, Performance Max reporting and how much of the reported return comes from brand searches.", outputs: ["Google Ads audit", "Brand and non-brand split of spend and conversions"] },
    { when: "Weeks 2 to 3", title: "Conversion architecture", body: "Conversion actions are redefined with sales, enhanced conversions and consent mode are checked, and offline imports are connected so bidding can see qualified outcomes.", outputs: ["Conversion action plan", "Offline import running"] },
    { when: "Weeks 3 to 6", title: "Rebuild and launch", body: "Search campaigns are restructured by intent, feeds are cleaned, and Performance Max is given exclusions and a defined job. Changes are staged to avoid resetting every bid strategy at once.", outputs: ["New campaign structure", "Negative keyword and exclusion lists"] },
    { when: "Month 2 onward", title: "Optimise on evidence", body: "Search terms, ads, assets, feeds and landing pages are reviewed on a fixed rhythm. Bid targets move only when there is enough conversion data to justify it.", outputs: ["Search term and asset review notes", "Ad and landing page tests"] },
    { when: "Every month", title: "Reconcile with the CRM", body: "Google's reported conversions are compared with CRM outcomes by campaign, and budget shifts towards the campaigns producing qualified leads or margin.", outputs: ["Report by campaign on qualified outcomes", "Budget and target changes"] },
  ],

  comparison: {
    heading: "Search campaigns or Performance Max: which should you run?",
    intro: "Google encourages advertisers towards Performance Max, and many accounts now run it beside standard Search. They are different tools with different levels of control, and the right mix depends on your conversion data and what you sell.",
    columns: ["Search campaigns", "Performance Max"],
    rows: [
      { label: "Where ads appear", a: "Search results and search partners", b: "All Google inventory" },
      { label: "Targeting", a: "Keywords you choose", b: "Automated, guided by signals" },
      { label: "Visibility of spend", a: "Full search term detail", b: "Improving, still less granular" },
      { label: "Creative", a: "Text ads and assets", b: "Text, image, video and feed" },
      { label: "Data needed", a: "Works with modest volume", b: "Needs reliable conversion volume" },
      { label: "Best use", a: "High-intent lead generation", b: "Ecommerce with a clean feed" },
    ],
    verdict: "Search gives the control and visibility most lead generation accounts need, and Performance Max suits retailers with strong feeds and trustworthy conversion values. Many accounts run both, with Performance Max fenced off from brand terms and held to the same CRM reconciliation.",
    link: { label: "See how Google fits a wider paid media plan", href: "/ppc-management/" },
  },

  industries: ["ecommerce", "healthcare", "dental", "legal", "home-services", "saas"],
  markets: ["india", "usa", "uk", "australia"],
  scenario: "multi-location-dental-group",

  faqs: [
    { q: "How much does Google Ads management cost?", a: "There are two costs: what you pay Google for clicks, and the management fee. Click prices are set by the auction in your category and location. The fee depends on account size and scope. We do not quote a figure before a growth audit, because the audit shows what the account needs." },
    { q: "How long does Google Ads take to work?", a: "Ads can appear within hours of approval. Reliable performance takes longer: a new bid strategy needs a period of conversion data before it settles, and search term data needs time to show what to exclude. Most accounts need four to eight weeks before results are a fair guide." },
    { q: "Does the highest bidder always get the top position?", a: "No. Google ranks ads by Ad Rank, which combines the bid with expected clickthrough rate, ad relevance, landing page experience and the context of the search. A more relevant ad with a lower bid can outrank a less relevant one, and usually pays a lower price per click for it." },
    { q: "What is Quality Score and does it matter?", a: "Quality Score is a one to ten diagnostic shown at keyword level, summarising expected clickthrough rate, ad relevance and landing page experience. It is not used directly in the auction, where quality is calculated fresh for each search. It is still useful for spotting keywords where the ad or page is a poor match." },
    { q: "Is Google Ads worth it if we already rank organically?", a: "Often, though not for every term. Ads sit above organic results, and competitors can bid on searches where you rank well. Testing shows which paid clicks are additional and which you would have received anyway. That evidence should decide where paid and organic overlap and where they do not." },
    { q: "Google Ads or Meta Ads: which is better?", a: "They do different jobs. Google Ads reaches people at the moment they search for something, so it suits existing demand. Meta reaches people based on interests and behaviour, so it suits products people do not yet know to look for. Many businesses run both and report them separately." },
    { q: "What do you need from us to start?", a: "Admin access to the Google Ads account, Google Analytics, Tag Manager and Merchant Center if you sell products. Access to CRM or order data matters most, because it lets bidding learn from qualified leads or margin. If no account exists, it is created in your name so you keep ownership." },
    { q: "Why are we paying for irrelevant search terms?", a: "Usually because broad or phrase match keywords are matching to loosely related searches and nobody is adding negatives. Google's matching has widened over time. Regular search term reviews, shared negative lists and tighter conversion data bring it back under control, and are part of routine management." },
    { q: "Should we accept Google's recommendations and auto-apply settings?", a: "Review them, and do not accept them wholesale. Some recommendations are sound housekeeping. Others raise budgets, widen match types or add keywords in ways that increase spend without improving outcomes. We switch off auto-apply for anything that changes targeting or budget and judge each suggestion against your own data." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Google Ads Management: Search, Shopping, PMax",
  metaDescription:
    "Google Ads management for Search, Shopping, Performance Max and YouTube, with conversion tracking and bidding built around qualified leads and margin.",
};
