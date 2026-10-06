import type { Service, ServiceMaster } from "@/types";

/**
 * /video-marketing/ : planning, scripting, production and distribution of
 * video by purpose.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is video marketing?",
    text: "Video marketing is the use of video to explain, demonstrate and prove what a business offers, at the points where buyers are deciding. It covers choosing which videos are needed and why, scripting, production, editing into versions for each platform, and placing them where they will be seen: on the website, in advertising, on social channels and in sales conversations. Each video is planned around one purpose and judged against it.",
    takeaways: [
      "Every video should have one purpose, one audience and one measure of success.",
      "The opening seconds decide whether the remainder is watched.",
      "One planned shoot can supply many videos across several channels.",
      "Production quality should match the purpose. Simple footage is often enough for social.",
    ],
  },

  facts: [
    { label: "Best for", value: "Offers that are easier to show than to describe" },
    { label: "Works alongside", value: "YouTube, paid social, landing pages and sales" },
    { label: "Typical horizon", value: "First videos in 4 to 8 weeks, a working library in 3 to 6 months" },
    { label: "Measured in", value: "Retention, page conversion and creative performance" },
  ],

  pillars: [
    {
      title: "Video strategy by purpose",
      body: "We start by listing the moments where a buyer hesitates and asking whether video would help. That produces a short roadmap of videos, each with a purpose, a place it will live and a measure.",
      items: ["Audit of existing footage and videos", "Videos mapped to buying stages", "Purpose and measure for each video", "Format and production level per video", "Roadmap ordered by commercial value"],
    },
    {
      title: "Scripting and storyboarding",
      body: "Most of a video's quality is decided on paper. Scripts are written for the ear, timed, and built around an opening that earns attention before the brand asks for anything.",
      items: ["Concept and key message", "Scripts timed to length", "Storyboards and shot lists", "Interview questions for unscripted pieces", "Alternative openings for testing"],
    },
    {
      title: "Production management",
      body: "We plan shoots to capture as much usable material as possible in one visit, working with trusted crews, animators or your own team. Locations, people, releases and schedules are handled before the day.",
      items: ["Crew, kit and location planning", "Call sheets and shoot schedules", "Presenter and interviewee preparation", "Motion graphics and animation", "Release forms and music licensing"],
    },
    {
      title: "Editing and versioning",
      body: "A master edit is only the first deliverable. Each platform needs its own length, aspect ratio and pacing, and most viewing on social begins without sound.",
      items: ["Master edit and review rounds", "Vertical, square and widescreen cuts", "Burned-in captions and subtitle files", "Short cut-downs and teasers", "Thumbnails and cover frames"],
    },
    {
      title: "Distribution and measurement",
      body: "A video earns its cost only when it is placed where the intended viewer will meet it. We publish to the website, YouTube, social and sales material, then read how far people watched and what they did.",
      items: ["Placement on key website pages", "YouTube upload with full metadata", "Social publishing by platform", "Sales and email versions", "Retention and conversion reporting"],
      href: "/youtube-marketing/",
    },
    {
      title: "Video for paid campaigns",
      body: "Advertising uses up creative quickly and rewards variety. We produce sets of variations around different openings and messages, so campaigns have material to test and replace.",
      items: ["Ad concepts by audience and offer", "Several openings per concept", "Platform-specific lengths and ratios", "Customer and creator-style footage", "Creative results fed back into scripts"],
      href: "/meta-ads/",
    },
  ],

  mechanics: {
    heading: "What makes someone watch a video and then act on it?",
    intro: "A video succeeds or fails in a predictable order. Viewers have to encounter it, decide to keep watching, believe what they see and know what to do next. Planning backwards from that sequence prevents most wasted production.",
    stages: [
      { name: "Placement", happens: "A viewer meets the video on a page, in a feed, as an advert or in an email from sales.", we: "Decide where each video will live before scripting, because placement sets length, shape and tone." },
      { name: "Opening", happens: "In the first few seconds, often with sound off, the viewer decides whether to continue.", we: "Open with the viewer's problem or the result, add captions and leave logos for later." },
      { name: "Attention", happens: "Viewers stay while each moment gives them a reason to, and leave when it stops.", we: "Script tightly, change the picture often and cut anything that does not serve the purpose." },
      { name: "Proof", happens: "The viewer weighs whether the claim is believable from what is shown and who is speaking.", we: "Show the product working and let real customers and specialists speak in their own words." },
      { name: "Next step", happens: "A convinced viewer looks for what to do: read more, book, buy or ask a question.", we: "End on one clear action and place the video beside the means to take it." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Brief and video roadmap", body: "We review existing footage, speak to marketing and sales about where buyers hesitate, and agree which videos to make first and why.", outputs: ["Video roadmap", "Brief for each video"] },
    { when: "Weeks 2 to 4", title: "Script and pre-production", body: "Scripts, storyboards and shot lists are written and approved. Crew, locations, presenters and schedule are confirmed.", outputs: ["Approved scripts and storyboards", "Shoot plan"] },
    { when: "Weeks 4 to 6", title: "Shoot or animation", body: "Production runs to a plan designed to capture several videos and a stock of supporting footage in one go.", outputs: ["Raw footage and audio", "Supporting footage library"] },
    { when: "Weeks 6 to 8", title: "Edit and versions", body: "Master edits go through review, then are cut into platform versions with captions, thumbnails and metadata.", outputs: ["Master videos", "Platform cut-downs with captions"] },
    { when: "Month 3 onward", title: "Distribute and learn", body: "Videos are placed on pages, channels and campaigns. Viewing and conversion data shapes the next round of scripts.", outputs: ["Performance report", "Next production brief"] },
  ],

  comparison: {
    heading: "Professional production or simple self-shot video?",
    intro: "This is the budget decision most teams face, and the answer differs by video. Polish signals credibility in some settings and reads as advertising in others.",
    columns: ["Professional production", "Simple self-shot video"],
    rows: [
      { label: "Look and sound", a: "Polished and controlled", b: "Plain, informal, immediate" },
      { label: "Cost per video", a: "Higher", b: "Low" },
      { label: "Turnaround", a: "Weeks", b: "Days or hours" },
      { label: "Volume for testing", a: "Few versions", b: "Many variations" },
      { label: "Shelf life", a: "Often a year or more", b: "Short, replaced often" },
      { label: "Best use", a: "Homepage, brand and customer films", b: "Social, ads and quick answers" },
    ],
    verdict: "Spend on production where a video will sit in a prominent place for a long time and represent the company. Use simple footage where speed, volume and a natural feel matter more, which covers much of social and paid social.",
    link: { label: "See our YouTube marketing service", href: "/youtube-marketing/" },
  },

  industries: ["saas", "ecommerce", "real-estate", "education", "manufacturing", "hospitality"],
  markets: ["india", "usa", "uae", "australia"],

  faqs: [
    { q: "How much do video marketing services cost?", a: "Cost is driven by the number of videos, the production level, shoot days, animation and how many versions are needed. A filmed customer story and a set of phone-shot social clips sit at opposite ends. We set the scope after a growth audit and show what a given budget can realistically produce." },
    { q: "How long does it take to produce a marketing video?", a: "A filmed video typically takes four to eight weeks from brief to final versions, with most of that spent on scripting, scheduling and review rounds. Simple social videos can be turned around in days. Animation often takes longer. Delays usually come from approvals, so we agree reviewers and rounds at the start." },
    { q: "Is video marketing worth it for a small business?", a: "It can be, if you begin with the one or two videos that remove a real obstacle to buying, such as a clear demonstration or a customer explaining why they chose you. Those can be made modestly. A costly brand film with no plan for where it will be used rarely pays back." },
    { q: "Should we use animation or live action?", a: "Live action suits anything that depends on trust in people or seeing a physical product. Animation suits software, processes and abstract ideas that cannot be filmed, and is easier to update later. Many explainers combine the two: a real presenter with screen recordings or motion graphics to show the detail." },
    { q: "How long should a marketing video be?", a: "As long as it stays useful to that viewer in that place. Adverts and social clips generally need to make their point within seconds. A product demonstration or tutorial for someone actively researching can run for several minutes. We set length from purpose and placement, then check it against retention data." },
    { q: "Can one shoot really produce several videos?", a: "Yes, when it is planned that way. Before the day we list every asset the shoot should yield: the main film, shorter cuts, interview clips, product shots and general footage for later use. Capturing those deliberately costs little extra on the day and is very hard to recreate afterwards." },
    { q: "What do you need from us to start?", a: "Clarity on what you want the videos to achieve, access to the product, locations and people who will appear, and brand guidelines. We also ask for existing footage, a named approver, and access to website and advertising analytics so that performance can be measured from the first release." },
    { q: "How do you measure video marketing?", a: "Against the purpose set in the brief. For a page video we compare conversion and how far people watch. For adverts we compare creative versions on cost and response. For sales videos we look at usage and feedback from the team. View counts alone are reported but never treated as the result." },
    { q: "Does a video need to go viral to be worth making?", a: "No. Most commercially useful videos are watched by a modest number of people who are close to a decision. A demonstration seen by a few hundred qualified buyers can do more for sales than an entertaining clip seen very widely. We plan for the right viewers, not the largest audience." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Video Marketing Services: Script to Screen",
  metaDescription:
    "Video marketing services from SERPMOZ: strategy, scripting, production, platform versions and distribution, with each video planned around one purpose.",
};
