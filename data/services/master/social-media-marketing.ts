import type { Service, ServiceMaster } from "@/types";

/**
 * /social-media-marketing/ : the organic social programme across platforms.
 * Rules: no client names, no result figures, no engagement benchmarks, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is social media marketing?",
    text: "Social media marketing is the planned use of platforms such as Instagram, LinkedIn, YouTube, Facebook and X to build an audience that knows, trusts and eventually buys from a business. An organic programme has four parts: a strategy that gives each platform a defined role, content built around a small set of recurring themes, community management that answers the people who respond, and measurement that connects attention to enquiries and sales instead of counting followers.",
    takeaways: [
      "Organic social builds familiarity and trust over months. It is rarely a fast source of leads.",
      "Each platform distributes content in its own way, so one post copied everywhere seldom performs.",
      "Platforms now recommend content to people who do not follow you, based on predicted interest.",
      "Followers and likes are indicators. The outcomes that matter are enquiries, sales and branded search.",
    ],
  },

  facts: [
    { label: "Best for", value: "Brands with something to show, teach or say regularly" },
    { label: "Works alongside", value: "Paid social, content, video and email" },
    { label: "Typical horizon", value: "A working rhythm in 2 to 3 months, audience effects over 6 to 12" },
    { label: "Measured in", value: "Reach in the right audience, enquiries and branded search" },
  ],

  pillars: [
    {
      title: "Social strategy and content pillars",
      body: "A programme starts with decisions, not posts: who it is for, which platforms deserve effort and what the brand will be known for. We settle on three to five content pillars and give every platform a job, including the decision to leave one alone.",
      items: ["Audience and competitor review", "A defined role for each platform", "Content pillars and recurring series", "Tone of voice and visual rules", "Cadence the team can sustain"],
    },
    {
      title: "LinkedIn for professional audiences",
      body: "Where the buyer is a professional, LinkedIn usually carries the most weight. Company page and leadership voices are planned together so that each supports the other.",
      items: ["Company page content plan", "Leadership and specialist posts", "Documents, short video and newsletters", "Employee sharing made simple", "Engagement reviewed by audience fit"],
      href: "/linkedin-marketing/",
    },
    {
      title: "Instagram and Facebook",
      body: "On Meta platforms discovery is driven by short video and recommendations, while Facebook still matters for local communities, groups and events. We produce for how each surface is used instead of resizing one asset.",
      items: ["Reels, carousels and Stories", "Profile and caption optimisation", "Facebook page, groups and events", "Creator and customer content", "Messages handled as enquiries"],
      href: "/instagram-marketing/",
    },
    {
      title: "YouTube and short video",
      body: "Video is the format most platforms now favour, and YouTube is where it keeps working longest. Longer videos answer questions in depth; short clips cut from them feed every other platform.",
      items: ["Channel role within the programme", "Search-led video topics", "Shorts and clips from each recording", "Titles, thumbnails and descriptions", "Video embedded on key pages"],
      href: "/youtube-marketing/",
    },
    {
      title: "Community management and X",
      body: "A reply is content too, and often the part people remember. We answer comments and messages within agreed hours, follow conversations on X and elsewhere, and pass sales and service issues to the right person.",
      items: ["Comment and message response", "Response guidelines and escalation rules", "Conversation monitoring on X", "Handling complaints in public", "Customer questions fed back to content"],
    },
    {
      title: "Measurement and reporting",
      body: "Platform dashboards reward activity. We report what the activity produced: whether the right people saw it, what they did next and how that shows up in enquiries.",
      items: ["Tracked links and consistent tagging", "Reach among the intended audience", "Saves, shares and replies by pillar", "Enquiries and sales that touched social", "Branded search trend"],
    },
  ],

  mechanics: {
    heading: "How does a social post reach people who do not follow you?",
    intro: "Every major platform now ranks content by predicted interest, not by time posted. The details differ by platform and change often, but the sequence a post goes through is broadly the same, and each stage can be planned for.",
    stages: [
      { name: "Publish", happens: "The platform reads the post: its format, caption, audio, topic and the account it came from.", we: "Produce natively for each platform and state the subject clearly in the words and the first frame." },
      { name: "First audience", happens: "The post is shown to a portion of your followers and people with similar interests.", we: "Publish when your audience is active and open with a reason to stop scrolling." },
      { name: "Response", happens: "The platform observes what people do: watch, read on, save, share, comment or skip.", we: "Make content worth finishing and sharing, and reply to early comments quickly." },
      { name: "Wider reach", happens: "Posts that hold attention are recommended further, including to people who do not follow you.", we: "Study which pillars travel beyond followers and build series around them." },
      { name: "Action", happens: "An interested viewer visits the profile, follows, messages, searches the brand or clicks through.", we: "Keep profiles, links and message replies ready to turn that interest into an enquiry." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audit and listening", body: "A review of every profile, past content, competitors and what your audience responds to, along with how social currently shows up in enquiries.", outputs: ["Social audit", "Baseline for each platform"] },
    { when: "Weeks 3 to 4", title: "Strategy and pillars", body: "Platform roles, content pillars, series ideas, tone and cadence agreed with the people who will approve the work.", outputs: ["Social strategy", "Content pillar framework"] },
    { when: "Weeks 5 to 6", title: "Production system", body: "Templates, a capture routine with your team, approval workflow and response guidelines, then the first full calendar.", outputs: ["First monthly calendar", "Approval and response guidelines"] },
    { when: "Month 2 onward", title: "Publish and engage", body: "Content is produced in monthly batches, published natively on each platform and supported by daily community management.", outputs: ["Published content each week", "Community log"] },
    { when: "Every month", title: "Review and adjust", body: "We read reach, response and enquiries together, keep the formats that earn attention and retire the ones that do not.", outputs: ["Performance report", "Next month's plan"] },
  ],

  comparison: {
    heading: "Should social media be run in-house or by an agency?",
    intro: "Both can work, and the honest answer for most businesses is a division of labour. The question is which parts need to sit close to the business and which benefit from specialist skills.",
    columns: ["In-house team", "Agency programme"],
    rows: [
      { label: "Brand knowledge", a: "Deep and first-hand", b: "Learned through interviews and briefs" },
      { label: "Range of skills", a: "Limited to who you hire", b: "Strategy, design, video and analytics" },
      { label: "Speed of reply", a: "Can respond in the moment", b: "Agreed hours and escalation rules" },
      { label: "Cost shape", a: "Salaries, tools and training", b: "Scoped fee that can flex" },
      { label: "Continuity", a: "Depends on one or two people", b: "Covered across a team" },
      { label: "Best use", a: "Live moments and customer conversations", b: "Strategy, production and measurement" },
    ],
    verdict: "Most businesses do best with a mix: someone inside who knows the customers and can respond quickly, supported by specialists for strategy, production and reporting. We can run the whole programme or only the parts your team cannot cover.",
    link: { label: "See our engagement models", href: "/engagement-models/" },
  },

  industries: ["ecommerce", "hospitality", "education", "real-estate", "b2b", "local-business"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does social media marketing cost?", a: "Cost depends on how many platforms are involved, how much video and design the plan needs and whether we handle community management as well. We do not quote a package price because scopes differ too much. A growth audit comes first, and the proposal that follows explains what each part of the fee pays for." },
    { q: "How long does social media marketing take to show results?", a: "Expect two to three months to establish a rhythm and learn what your audience responds to. Effects on enquiries and branded search usually build over six to twelve months of consistent work. Timing depends on your starting audience, your category and how quickly content can be approved. Paid support can shorten the wait." },
    { q: "Is organic social media still worth it when reach is so low?", a: "Yes, for most brands, but for different reasons than a decade ago. Follower feeds matter less and recommendations matter more, so strong content can reach people who have never heard of you. Buyers also check social profiles before they enquire. A neglected presence can quietly cost you that enquiry." },
    { q: "Which social media platforms should my business be on?", a: "The ones your buyers actually use, and no more than you can run well. LinkedIn suits professional audiences, Instagram suits visual and consumer products, and YouTube suits anything that needs explaining. We would sooner run two platforms properly than five thinly, and we say so in the strategy." },
    { q: "Do we need organic social, paid social or both?", a: "Usually both, doing different jobs. Organic builds familiarity, proof and community, and shows which messages people respond to. Paid delivers reach to a chosen audience on a chosen date. Advertising a profile nobody maintains is wasteful, and relying on organic alone is slow. We plan them together." },
    { q: "How often should a business post on social media?", a: "As often as it can publish something worth seeing. A steady cadence your team can sustain for a year is more valuable than a burst of daily posts followed by silence. We set frequency per platform after the audit, based on format, resources and how your audience behaves." },
    { q: "What do you need from us to get started?", a: "Admin access to your profiles and their analytics, brand guidelines if they exist, and an hour or two with the people who know your customers best. Ongoing, we need a named approver and regular access to raw material: photos, short recordings, customer questions and news from inside the business." },
    { q: "How do you measure whether social media is working?", a: "We look at three layers together: whether the intended audience is seeing the content, whether they respond in ways that signal interest, such as saves, shares, replies and profile visits, and what follows in enquiries, sales and branded search. Tracked links and CRM source fields make the last layer visible." },
    { q: "Do more followers mean more sales?", a: "Not by themselves. A large following of the wrong people produces nothing, and bought followers actively harm an account by diluting response. A smaller audience that matches your buyers is worth far more. We track follower quality and what the audience does, not the headline count." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Social Media Marketing Services & Strategy",
  metaDescription:
    "Social media marketing services from SERPMOZ: organic strategy, content pillars, community management and measurement across the platforms your buyers use.",
};
