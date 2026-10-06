import type { Service, ServiceMaster } from "@/types";

/**
 * /youtube-marketing/ : channel strategy and video SEO.
 * Rules: no client names, no result figures, no engagement benchmarks, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is YouTube marketing?",
    text: "YouTube marketing is the work of building a channel that people find when they search for, or are recommended, videos about what a business knows. It combines channel strategy, which decides the audience and the subjects the channel will cover, with video SEO: topic research, titles, thumbnails, descriptions and chapters that help YouTube and Google understand each video. Success is judged by whether the right viewers watch, stay and then take a next step.",
    takeaways: [
      "YouTube surfaces videos through search, the home page, suggested videos and the Shorts feed.",
      "Title and thumbnail decide the click. The video itself decides whether viewers stay.",
      "A useful video can keep earning views long after it is published.",
      "Subscriber count matters less than whether the intended audience watches and acts.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses with expertise or products worth demonstrating" },
    { label: "Works alongside", value: "SEO, video production, Google Ads and social" },
    { label: "Typical horizon", value: "Early search views in weeks, channel momentum in 6 to 12 months" },
    { label: "Measured in", value: "Views by source, retention and leads from video" },
  ],

  pillars: [
    {
      title: "Channel strategy and positioning",
      body: "A channel grows when viewers can tell at a glance what it covers and whether it is for them. We define the audience, the subject territory and a small number of repeatable series before a camera is switched on.",
      items: ["Audience and subject definition", "Competitor and adjacent channel review", "Series and format design", "Channel page, banner and trailer", "Playlists arranged by viewer need"],
    },
    {
      title: "Topic research and video SEO",
      body: "We look for the questions your buyers type into YouTube and Google, check what currently answers them and choose the ones you can answer better. Each video is then described so that the platform can match it to those searches.",
      items: ["Search-led topic and keyword research", "Review of videos currently ranking", "Descriptions, chapters and tags", "Accurate captions and transcripts", "Videos mapped to pages on your site"],
    },
    {
      title: "Titles and thumbnails",
      body: "A video that is not clicked is not watched, however good it is. Title and thumbnail are written and designed together, as one promise that the video then has to keep.",
      items: ["Title options written before scripting", "Thumbnail concepts and design system", "Promise matched to the opening seconds", "Thumbnail and title testing", "Refresh of underperforming older videos"],
    },
    {
      title: "Scripting and production planning",
      body: "Consistency depends on a format your team can repeat without a film crew every time. We write outlines and scripts, coach presenters and plan recording days that yield several videos.",
      items: ["Outlines and full scripts", "Openings written to hold attention", "On-camera coaching for your experts", "Batch recording schedule", "Editing brief and pacing notes"],
      href: "/video-marketing/",
    },
    {
      title: "Shorts and repurposing",
      body: "Shorts reach viewers who are browsing, while longer videos serve those who chose to watch. We cut Shorts from each recording and reuse the same material on other platforms and on your website.",
      items: ["Shorts cut from longer videos", "Standalone Shorts for quick answers", "Links from Shorts to full videos", "Clips for LinkedIn and Instagram", "Embeds and transcripts on site pages"],
      href: "/social-media-marketing/",
    },
    {
      title: "Analytics and paid support",
      body: "YouTube Studio shows where viewers came from, what they clicked and where they stopped watching. We use that to shape the next videos, and add video advertising through Google Ads where a strong video deserves a larger audience.",
      items: ["Traffic source analysis", "Impressions and click-through review", "Retention graphs read video by video", "End screens, cards and pinned comments", "Video campaigns for proven content"],
      href: "/google-ads/",
    },
  ],

  mechanics: {
    heading: "How does YouTube decide which videos to show?",
    intro: "YouTube's systems try to match each viewer with videos they are likely to choose and be satisfied by. That happens across several surfaces, and a video has to succeed at each of the following stages to keep being shown.",
    stages: [
      { name: "Understand", happens: "YouTube works out what a video is about from its title, description, captions and how viewers respond to it.", we: "Choose a clear topic, describe it accurately and supply clean captions and chapters." },
      { name: "Impression", happens: "The video is offered in search results, on the home page, beside other videos or in the Shorts feed.", we: "Target searches with real demand and build series so that one video leads to the next." },
      { name: "Click", happens: "The viewer sees a title and thumbnail among many others and picks one.", we: "Design title and thumbnail as a single honest promise, and test alternatives." },
      { name: "Watch", happens: "The viewer stays or leaves. How long people watch and how satisfied they are affect further recommendation.", we: "Deliver the promise early, cut what drags and study retention to improve the next script." },
      { name: "Next step", happens: "The viewer watches another video, subscribes, searches for the brand or visits the website.", we: "Use end screens, playlists, pinned comments and description links to offer one clear next action." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Channel and search audit", body: "A review of existing videos, traffic sources and retention, plus research into what your audience searches for and which channels currently answer it.", outputs: ["Channel audit", "Topic and keyword research"] },
    { when: "Weeks 3 to 4", title: "Channel strategy", body: "Audience, subject, series and formats are defined, with a first run of video topics ranked by demand and value to the business.", outputs: ["Channel strategy", "Prioritised video plan"] },
    { when: "Weeks 5 to 8", title: "First recordings", body: "Scripts are written, presenters are coached and the first batch is recorded and edited. Channel page, playlists and templates are set up.", outputs: ["Scripts and first videos", "Thumbnail and description templates"] },
    { when: "Month 3 onward", title: "Publish and optimise", body: "Videos are released on a regular schedule with Shorts cut from each. Older videos are re-titled or given new thumbnails where data supports it.", outputs: ["Published videos and Shorts", "Optimisation log"] },
    { when: "Every month", title: "Analytics review", body: "We read traffic sources, click-through, retention and website visits together and adjust topics, openings and packaging.", outputs: ["Channel analytics report", "Updated topic priorities"] },
  ],

  comparison: {
    heading: "Long-form videos or Shorts: which should a business make?",
    intro: "Both sit on the same channel but are found and watched in different ways. Most business channels need each to do a different job, so the decision is about proportion.",
    columns: ["Long-form video", "YouTube Shorts"],
    rows: [
      { label: "How it is found", a: "Search, suggested and home page", b: "Mostly the Shorts feed" },
      { label: "Viewer intent", a: "Chose to watch this topic", b: "Came across it while browsing" },
      { label: "Depth", a: "Explains, demonstrates, compares", b: "One idea, quickly" },
      { label: "Shelf life", a: "Can earn views for years", b: "Often a shorter burst" },
      { label: "Production effort", a: "Script, recording and edit", b: "Light, often cut from long-form" },
      { label: "Best use", a: "Consideration and search demand", b: "Awareness and first contact" },
    ],
    verdict: "If buyers research before they choose you, long-form video does the persuading and should take most of the effort. Shorts are a low-cost way to introduce the channel to new viewers, best cut from recordings you are already making.",
    link: { label: "See our video marketing service", href: "/video-marketing/" },
  },

  industries: ["saas", "education", "technology", "ecommerce", "finance", "automotive"],
  markets: ["india", "usa", "uk", "australia"],

  faqs: [
    { q: "How much does YouTube marketing cost?", a: "Cost depends on how many videos are planned each month, how much of the production we manage and whether strategy and optimisation alone are needed. Channels with an in-house presenter and editor need far less from us than those starting from nothing. We scope it after a growth audit." },
    { q: "How long does it take for YouTube videos to get views?", a: "A video that answers a specific search well can begin collecting views within weeks. Building a channel that is recommended regularly usually takes six to twelve months of consistent publishing. It depends on competition for your topics and how well viewers respond. Nobody outside YouTube can promise a timetable." },
    { q: "Is YouTube worth it for a B2B company?", a: "Usually, when the product or service needs explaining. Buyers watch demonstrations, comparisons and tutorials before they speak to sales, and a clear video from your own experts builds trust that text cannot. Audiences are smaller than in consumer categories, so we judge success by who watches, not by view counts." },
    { q: "What is video SEO?", a: "Video SEO is the practice of helping a video appear in YouTube and Google search for relevant queries. It covers choosing topics people search for, writing accurate titles and descriptions, adding captions and chapters, and designing thumbnails that earn the click. Viewer response then determines whether the video keeps its position." },
    { q: "Do we need expensive equipment to start a channel?", a: "No. Clear sound, steady framing and good light matter far more than an expensive camera, and a modern phone with a decent microphone is enough for many formats. Viewers forgive modest visuals. They do not forgive poor audio or a video that wastes their time." },
    { q: "How often should we upload?", a: "On a schedule you can keep for a year. For most business channels that means somewhere between weekly and monthly for longer videos, with Shorts in between. Regularity helps viewers and gives you data to learn from, but a rushed video that disappoints does more harm than a missed week." },
    { q: "What do you need from us to start?", a: "Manager access to the channel and YouTube Studio, one or more people willing to appear on camera, and time with whoever hears customer questions most often. Access to Google Search Console and website analytics lets us connect video to search demand and to enquiries." },
    { q: "How do you measure YouTube marketing?", a: "In YouTube Studio we track views by traffic source, impressions, click-through and audience retention for each video. Beyond the platform we follow visits and enquiries from tracked links, branded search and what new customers say they watched. Reports show the source of every figure and what we plan to change." },
    { q: "Do we need a lot of subscribers before YouTube works?", a: "No. Much of a search-led channel's viewing comes from people who are not subscribed and found a video through search or suggestions. A small channel can generate enquiries if it answers the questions buyers ask. Subscribers are a useful sign of loyalty, not a threshold you must cross first." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "YouTube Marketing Services & Video SEO",
  metaDescription:
    "YouTube marketing from SERPMOZ: channel strategy, topic research, video SEO, titles, thumbnails and Shorts, measured by who watches and what they do next.",
};
