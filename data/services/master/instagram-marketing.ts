import type { Service, ServiceMaster } from "@/types";

/**
 * /instagram-marketing/ : organic Instagram. Paid placements belong to /meta-ads/.
 * Rules: no client names, no result figures, no engagement benchmarks, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Instagram marketing?",
    text: "Instagram marketing is the organic work of getting a brand discovered, followed and bought from on Instagram. It covers a content strategy built around Reels, carousels and Stories, a profile and captions written so the account can be found through in-app search, collaborations with creators whose audiences match yours, and community management across comments and direct messages. For brands that sell products, it also includes product tagging and shop features where they are available.",
    takeaways: [
      "Instagram ranks Feed, Stories, Reels and Explore separately, each according to predicted interest.",
      "Reels are the main route to people who do not already follow an account.",
      "Captions, profile name and bio help the account appear in Instagram search.",
      "Bought followers and engagement damage an account. Growth has to be earned.",
    ],
  },

  facts: [
    { label: "Best for", value: "Consumer brands and businesses people want to see" },
    { label: "Works alongside", value: "Meta Ads, video production and email" },
    { label: "Typical horizon", value: "Clear creative learning in 2 to 3 months, steady growth after" },
    { label: "Measured in", value: "Non-follower reach, saves, shares, messages and sales" },
  ],

  pillars: [
    {
      title: "Content strategy and visual identity",
      body: "An account needs a recognisable subject and a recognisable look. We define content pillars, recurring series and visual rules that hold together on the grid and in Reels, then set a cadence the business can keep.",
      items: ["Content pillars and series formats", "Visual identity for grid and video", "Format mix across Reels, carousels and Stories", "Monthly content calendar", "Highlights and pinned posts"],
    },
    {
      title: "Reels and short video",
      body: "Short video is how most new people meet a brand on Instagram. We plan Reels in batches, script the opening seconds with care and edit for viewing without sound.",
      items: ["Concepts and hooks per pillar", "Batch shoots with your team or ours", "Editing, captions and cover frames", "Original audio and licensed music", "Clips reused for Stories and other platforms"],
      href: "/video-marketing/",
    },
    {
      title: "Discovery and in-app search",
      body: "People search Instagram for products, places and ideas, much as they would a search engine. The words on your profile and in your captions help decide whether you appear.",
      items: ["Profile name, handle and bio", "Keyword-led captions and alt text", "Location tags for local businesses", "Topics and hashtags used sparingly", "Content that meets recommendation guidelines"],
    },
    {
      title: "Creator collaborations",
      body: "A creator lends a brand both reach and credibility with an audience that already trusts them. We choose by audience fit, agree terms in writing and make sure paid relationships are disclosed.",
      items: ["Creator shortlisting by audience fit", "Briefs that leave room for the creator", "Contracts, usage rights and disclosure", "Collaborative posts and product seeding", "Review of what each partnership produced"],
    },
    {
      title: "Community, messages and shopping",
      body: "Comments and direct messages are where interest turns into a sale or a booking. We respond within agreed hours and set up product tagging and shop features where your market and catalogue support them.",
      items: ["Comment and message response", "Saved replies and enquiry routing", "Product tagging and catalogue checks", "Customer content reshared with permission", "Broadcast channels for engaged followers"],
    },
    {
      title: "Measurement and paid support",
      body: "Organic results show which creative deserves a budget. We report what reached new people and what they did next, and put spend behind proven posts when that makes commercial sense.",
      items: ["Reach split by followers and non-followers", "Saves, shares and profile visits", "Link, message and shop actions", "Tracked links into site analytics", "Best organic posts passed to paid"],
      href: "/meta-ads/",
    },
  ],

  mechanics: {
    heading: "How does Instagram decide who sees a Reel or a post?",
    intro: "Instagram does not use one ranking system. Feed, Stories, Explore and Reels are each ordered separately, using signals about the content, the account and the viewer's past behaviour. The specifics change regularly, so we plan for the stable sequence underneath them.",
    stages: [
      { name: "Publish", happens: "Instagram interprets the post from its video, images, audio, caption and the account's history.", we: "Make the subject obvious on screen and in the caption, in a format native to the surface." },
      { name: "Followers", happens: "It is shown to some of your followers in Feed, Stories or Reels, ordered by their likely interest.", we: "Keep a core audience engaged with series they recognise and return to." },
      { name: "Signals", happens: "Viewers watch through, replay, like, comment, save, share by message or swipe away.", we: "Earn the full watch with a strong opening and a reason to save or send it on." },
      { name: "Recommendation", happens: "Eligible content that performs is suggested to non-followers in Reels, Explore and Feed.", we: "Publish original content within recommendation guidelines and repeat the formats that travel." },
      { name: "Action", happens: "A new viewer taps through to the profile, follows, sends a message or opens a product or link.", we: "Shape the bio, pinned posts, highlights and replies to convert that first visit." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Account audit", body: "A review of content history, reach sources, audience, profile, competitors and how Instagram currently contributes to sales or bookings.", outputs: ["Instagram audit", "Baseline of reach and actions"] },
    { when: "Weeks 3 to 4", title: "Strategy and look", body: "Pillars, series, visual identity and cadence are defined, the profile is rewritten and tracking is put in place.", outputs: ["Instagram strategy", "Optimised profile and highlights"] },
    { when: "Weeks 5 to 6", title: "First production batch", body: "A shoot and edit produce the first month of Reels, carousels and Stories, tested across several hooks and formats.", outputs: ["First content batch", "Monthly calendar"] },
    { when: "Month 2 onward", title: "Publish, engage, collaborate", body: "Content goes out on schedule, comments and messages are answered, and creator collaborations begin once the account is ready to receive visitors.", outputs: ["Published content each week", "Creator shortlist and briefs"] },
    { when: "Every month", title: "Creative review", body: "We compare formats and pillars by what reached new people and prompted action, and that decides the next batch.", outputs: ["Performance report", "Brief for the next shoot"] },
  ],

  comparison: {
    heading: "Organic Instagram or Instagram ads: where should the effort go?",
    intro: "Instagram ads are bought through Meta Ads and appear in the same places as organic content. The two are not alternatives so much as stages, and the balance depends on how soon you need sales and how much creative you can produce.",
    columns: ["Organic Instagram", "Instagram ads"],
    rows: [
      { label: "Reach", a: "Earned through recommendations", b: "Bought, with audience controls" },
      { label: "Speed", a: "Builds over months", b: "Delivers from launch" },
      { label: "Cost", a: "Production and community time", b: "Media spend plus creative" },
      { label: "Predictability", a: "Varies post to post", b: "Steadier, tied to budget" },
      { label: "What remains", a: "Followers, proof and a profile", b: "Data and customers gained" },
      { label: "Best use", a: "Brand, community and creative testing", b: "Launches, offers and scaling sales" },
    ],
    verdict: "A maintained profile makes advertising more believable, and organic posts show which ideas deserve spend. If you need sales soon, run ads alongside organic from the start instead of waiting for reach to arrive.",
    link: { label: "See our Meta Ads service", href: "/meta-ads/" },
  },

  industries: ["ecommerce", "hospitality", "travel", "real-estate", "dental", "local-business"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does Instagram marketing cost?", a: "The main cost drivers are production, since video and photography take the most time, followed by community management hours and any creator fees. We do not publish a package price because those vary so much between brands. A growth audit comes first, then a proposal sized to what the account needs." },
    { q: "How long does it take to grow on Instagram?", a: "Plan for two to three months before you have reliable evidence of which formats reach new people, and steady growth from there if production continues. Speed depends on your category, the quality of the creative and how often you publish. Nobody can promise a follower figure by a date." },
    { q: "Is Instagram marketing worth it for a small business?", a: "It is where your customers look at a business before visiting, booking or buying, which covers most consumer and local categories. A small account with clear, regular content and prompt replies can do well. If your buyers are procurement teams, the effort is usually better spent on LinkedIn." },
    { q: "Should we post Reels, carousels or photos?", a: "A mix, each for a different job. Reels are the strongest route to people who do not follow you. Carousels suit explanation and tend to be saved. Stories keep existing followers close. Single photos still work for strong imagery. We set the balance from your own account data." },
    { q: "Do hashtags still matter on Instagram?", a: "Less than many people assume. Hashtags help categorise a post, but they are not a route to reach by themselves. Clear wording in the caption, on screen and in the profile does more to help Instagram understand the content and show it in search. We use a few relevant tags." },
    { q: "Can we sell directly on Instagram?", a: "Product tagging and shop features let people browse items from posts and Reels, but availability and checkout options differ by country and by product category. In many markets the purchase completes on your own website. We check eligibility for your market and catalogue before planning around it." },
    { q: "What do you need from us to start?", a: "Access to the account through Meta Business Suite, brand assets, and a clear picture of what you sell and to whom. For production we need access to products, locations and people willing to appear on camera. A named approver keeps the calendar moving." },
    { q: "How do you measure Instagram marketing?", a: "We start with reach among non-followers, then the actions that signal real interest: saves, shares, profile visits and messages. From there we follow link clicks, shop actions and tracked sales or bookings. Where a sale cannot be traced directly, we watch branded search and ask customers how they found you." },
    { q: "Does buying followers help an account get started?", a: "No, it harms it. Purchased followers do not watch, save or buy, so each post appears to perform poorly with its own audience, which holds back wider distribution. It also breaks platform rules and is easy for customers and creators to spot. We never buy followers or engagement." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Instagram Marketing Services: Reels & Growth",
  metaDescription:
    "Organic Instagram marketing from SERPMOZ: content strategy, Reels production, in-app discovery, creator collaborations and community management tied to sales.",
};
