import type { Service, ServiceMaster } from "@/types";

/**
 * /linkedin-marketing/ : organic LinkedIn for company pages and leadership voices.
 * Advertising on the platform belongs to /linkedin-ads/.
 * Rules: no client names, no result figures, no engagement benchmarks, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is LinkedIn marketing?",
    text: "LinkedIn marketing is the organic use of LinkedIn to build a company's reputation with the professionals who influence its sales. It combines a company page, which acts as the official record of the business, with the personal profiles of leaders and specialists, whose posts tend to travel further and earn more trust. The work covers positioning, regular content in each person's own voice, participation in other people's conversations and measurement of who is paying attention.",
    takeaways: [
      "Organic LinkedIn marketing is unpaid. Sponsored content and lead forms are a separate, paid discipline.",
      "Posts from individuals usually reach further than posts from a company page.",
      "Comments on other people's posts are part of the work, not an extra.",
      "The useful measure is who engages, by company and role, not how many.",
    ],
  },

  facts: [
    { label: "Best for", value: "B2B firms whose buyers research people before they call" },
    { label: "Works alongside", value: "LinkedIn Ads, content marketing and sales outreach" },
    { label: "Typical horizon", value: "A steady voice in 2 to 3 months, inbound interest over 6 to 12" },
    { label: "Measured in", value: "Engagement from target accounts and inbound conversations" },
  ],

  pillars: [
    {
      title: "Positioning and audience",
      body: "Before anything is written we decide what the company and each individual should be known for, and by whom. A leader with a clear subject is easier to follow than one who comments on everything.",
      items: ["Target roles, industries and accounts", "Subject territory for each voice", "Competitor and peer review", "Topics to avoid", "Profile headlines and summaries"],
    },
    {
      title: "Leadership voices",
      body: "Most leaders have opinions worth reading and no time to write them down. We interview them briefly and regularly, draft posts in their own words and publish only what they have approved.",
      items: ["Recorded interviews as source material", "Posts drafted in the leader's voice", "Approval before anything is published", "Profile photography and featured section", "Coaching on commenting and replies"],
    },
    {
      title: "Company page",
      body: "The page is where a prospect, a candidate or a journalist checks that the company is what it claims to be. It carries proof, product news and the people behind the work, and it gives employees something worth resharing.",
      items: ["Page setup, tagline and About section", "Customer proof and project stories", "Product and company announcements", "Hiring and culture content", "Showcase pages where they are justified"],
    },
    {
      title: "Formats and repurposing",
      body: "LinkedIn supports text posts, document carousels, native video, newsletters, live sessions and events. We choose formats by what the idea needs, and draw most of the material from content the business has already produced.",
      items: ["Text posts and document carousels", "Short native video with captions", "LinkedIn newsletters and articles", "Events and live sessions", "Posts cut from webinars, guides and talks"],
      href: "/content-marketing/",
    },
    {
      title: "Employee advocacy",
      body: "A company's combined employee network is usually far larger than its page following. We make it easy for specialists to share and contribute without turning their profiles into noticeboards.",
      items: ["Short guidance on what to share", "Suggested posts people can rewrite", "Support for specialists who want to write", "Profile clean-up sessions", "Clear social media guidelines"],
    },
    {
      title: "Measurement and sales follow-up",
      body: "Attention on LinkedIn only becomes pipeline if somebody acts on it. We review who is engaging, match them against the accounts sales cares about and agree how warm interest is followed up.",
      items: ["Engagement reviewed by company and role", "Follower and visitor demographics", "Inbound messages and connection requests", "Handover of warm accounts to sales", "CRM source and self-reported attribution"],
      href: "/lead-generation/",
    },
  ],

  mechanics: {
    heading: "How does a LinkedIn post travel beyond your own followers?",
    intro: "The LinkedIn feed is ranked by relevance to each member, not by time. A post reaches new people mainly through the actions of those who see it first, which is why who engages matters as much as how many.",
    stages: [
      { name: "Publish", happens: "A post goes out from a personal profile or a company page and is assessed for subject and quality.", we: "Write a clear opening line on a subject the author is credible on, in a format that suits the idea." },
      { name: "First showing", happens: "It appears in the feeds of some of the author's connections and followers.", we: "Build each voice's network deliberately among the roles and companies that matter." },
      { name: "Response", happens: "Those people read on, react, comment, repost or scroll past.", we: "Give readers something to respond to, and have the author reply to comments promptly." },
      { name: "Extension", happens: "Engagement can surface the post to the networks of those who engaged and to members interested in the topic.", we: "Encourage colleagues to add a real comment, and take part in relevant conversations elsewhere." },
      { name: "Conversation", happens: "Interested readers view the profile, follow, connect, message or look up the company.", we: "Keep profiles and the page ready for that visit, and route warm interest to sales." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audit and positioning", body: "A review of the page, key profiles, competitors and current audience, followed by a positioning session for each voice.", outputs: ["LinkedIn audit", "Positioning note per voice"] },
    { when: "Weeks 3 to 4", title: "Profiles and plan", body: "Profiles and page are rewritten, themes and formats are set for each voice, and the approval workflow is agreed.", outputs: ["Optimised profiles and page", "Content plan and cadence"] },
    { when: "Weeks 4 to 6", title: "First interviews and posts", body: "The first recorded conversations supply several weeks of material. Early posts are used to calibrate voice with each leader.", outputs: ["Interview recordings and notes", "First approved post batch"] },
    { when: "Month 2 onward", title: "Publish and participate", body: "Posts go out on a steady cadence, authors are prompted to reply and comment, and employees receive shareable content.", outputs: ["Scheduled posts each week", "Advocacy pack"] },
    { when: "Every month", title: "Audience review", body: "We look at who engaged, by company and role, which themes earned attention and what inbound interest followed.", outputs: ["Audience and engagement report", "Themes for the next month"] },
  ],

  comparison: {
    heading: "Organic LinkedIn or LinkedIn Ads: which comes first?",
    intro: "They use the same platform for different purposes. Organic content earns attention through people; advertising buys placement in front of a defined audience. Most B2B companies end up using both, in a sensible order.",
    columns: ["Organic LinkedIn", "LinkedIn Ads"],
    rows: [
      { label: "Speed", a: "Builds over months", b: "Reaches the audience at launch" },
      { label: "Cost", a: "Time, content and consistency", b: "Media spend plus management" },
      { label: "Audience", a: "Networks of your people", b: "Chosen by role, company and industry" },
      { label: "Trust", a: "A person speaking in public", b: "Labelled as promoted" },
      { label: "When you stop", a: "Reputation and followers remain", b: "Delivery ends with the budget" },
      { label: "Best use", a: "Authority and warm conversations", b: "Offers, events and account targeting" },
    ],
    verdict: "Start with organic if nobody in your market yet knows your people, because adverts from an unfamiliar company with a quiet page tend to work harder for less. Add advertising when you have a specific audience to reach and something worth offering them.",
    link: { label: "See our LinkedIn Ads service", href: "/linkedin-ads/" },
  },

  industries: ["saas", "b2b", "professional-services", "technology", "finance", "manufacturing"],
  markets: ["india", "usa", "uk", "europe"],

  faqs: [
    { q: "How much does LinkedIn marketing cost?", a: "Cost depends mainly on how many voices we write for, how much design and video is involved and whether employee advocacy is in scope. A programme for one founder is a very different size from one covering a leadership team. We scope it after a growth audit and explain the reasoning in the proposal." },
    { q: "How long does LinkedIn marketing take to work?", a: "Allow two to three months for a consistent voice and the first signs of the right people engaging. Inbound conversations and influence on sales usually build over six to twelve months. It moves faster when leaders already have relevant networks and reply to comments themselves, and slower when approvals stall." },
    { q: "Is LinkedIn marketing worth it for a small B2B company?", a: "Often it is the most sensible place to start. A small firm cannot outspend larger competitors, but a founder or specialist with real knowledge can be as visible as anyone. It is less suitable where buyers are consumers or where nobody in the business is willing to be seen." },
    { q: "Should we focus on the company page or personal profiles?", a: "Both, with different roles. Personal profiles generally earn more reach and more trust, so they carry opinion and expertise. The company page holds proof, announcements and hiring, and is where people verify the business. A programme built on the page alone tends to struggle for attention." },
    { q: "Does ghost-writing for executives come across as fake?", a: "It does when the words are invented. Our drafts come from recorded conversations with the leader, use their phrasing and their examples, and are published only after they approve. The thinking is theirs; we supply the time and the editing. Comments and replies are best written by the leader directly." },
    { q: "How much time does it need from our leaders?", a: "Usually a short recorded conversation every two to four weeks, a few minutes to approve each post and some time each week replying to comments. The replies matter. A leader who posts and then disappears gets less from the platform than one who takes part in the discussion." },
    { q: "What do you need from us to start?", a: "Admin access to the company page, agreement from each person whose profile is involved, and time for a positioning session. A list of target accounts or buyer roles from sales helps a great deal, as does access to existing material such as talks, webinars and guides we can draw on." },
    { q: "How do you measure LinkedIn marketing?", a: "We look at who is engaging, not only how many: job roles, seniority and companies, matched against your target list where one exists. Alongside that we track follower quality, profile visits, inbound messages and what prospects tell sales about how they found you, recorded in the CRM." },
    { q: "Do we need posts to go viral?", a: "No. A post seen by a few hundred of the right people is worth more than one seen widely by people who will never buy. Chasing broad reach usually pulls content away from your subject. We aim for consistent attention within a defined audience and judge posts by who responded." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "LinkedIn Marketing Services for B2B Brands",
  metaDescription:
    "Organic LinkedIn marketing from SERPMOZ: positioning, leadership posts, company page content and employee advocacy, measured by who engages and enquires.",
};
