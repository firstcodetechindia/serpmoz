/**
 * Engagement models. One source for the homepage ladder
 * (components/sections/engagement-ladder.tsx, via the re-export in data/growth.ts)
 * and the /engagement-models/ page.
 *
 * No prices and no performance figures: scope and cost follow the diagnostic.
 */
export type EngagementModel = {
  slug: string;
  name: string;
  /** One word for where the business is */
  stage: string;
  forWhom: string;
  focus: string;
  /** Short line for the homepage ladder */
  collaboration: string;
  outcome: string;
  /** Short list for the homepage ladder */
  includes: readonly string[];
  /** Signs this is the right model */
  suits: readonly string[];
  /** Typical scope, by dimension */
  channels: string;
  cadence: string;
  team: string;
  /** How the engagement is run */
  run: string;
  /** Short cells for the comparison table */
  compare: { channels: string; cadence: string; team: string; reporting: string; planning: string; inHouse: string };
};

export const engagements: readonly EngagementModel[] = [
  {
    slug: "growth-starter",
    name: "Growth Starter",
    stage: "Establishing",
    forWhom: "Businesses building their first structured growth programme.",
    focus: "Foundations in one core channel",
    collaboration: "A strategist and a specialist, monthly reviews",
    outcome: "A measured baseline and the first compounding channel",
    includes: [
      "Growth audit and first-quarter roadmap",
      "A prioritised set of search opportunities",
      "Technical and tracking foundations",
      "Monthly performance review",
    ],
    suits: [
      "Your product or service sells, but marketing has been done in bursts.",
      "You want one channel working properly before you add another.",
      "Tracking is incomplete, so you cannot yet say what is paying back.",
    ],
    channels: "One core channel, usually organic or local search, plus the tracking and technical foundations it depends on.",
    cadence: "A monthly performance review with a written summary of what shipped, what moved and what comes next.",
    team: "A strategist who sets direction and a specialist who does the work. One point of contact on your side is enough.",
    run: "We start from the growth audit, agree a roadmap for the first quarter and work through it in order. Foundations come first: technical fixes, measurement and the pages closest to revenue. Nothing is added until the baseline is trustworthy.",
    compare: {
      channels: "One core channel",
      cadence: "Monthly review",
      team: "Strategist and one specialist",
      reporting: "Baseline and channel performance",
      planning: "Quarter by quarter",
      inHouse: "Not required",
    },
  },
  {
    slug: "growth",
    name: "Growth",
    stage: "Compounding",
    forWhom: "Companies with traction that need consistent, compounding demand.",
    focus: "Search plus one acquisition channel",
    collaboration: "A small dedicated team, fortnightly working sessions",
    outcome: "Predictable qualified demand from two channels",
    includes: [
      "Expanded search opportunity portfolio",
      "Content and authority programme",
      "Paid media or CRO workstream",
      "AI search visibility tracking",
    ],
    suits: [
      "One channel already produces leads or sales and you want a second.",
      "Demand arrives unevenly and you need it to be steadier.",
      "Buyers in your category have started asking AI assistants for recommendations.",
    ],
    channels: "Search plus one further workstream, typically paid media or conversion optimisation. A content and authority programme supports both, and AI search visibility is tracked alongside.",
    cadence: "Fortnightly working sessions to review progress and unblock decisions, and a monthly performance review.",
    team: "A small dedicated team: a strategist, a search specialist and a paid media or conversion specialist. Your marketing lead joins the working sessions.",
    run: "Two workstreams run to one plan, so that what search learns about demand informs paid media and landing pages, and the reverse. Budget moves between them when the evidence says it should.",
    compare: {
      channels: "Search plus one workstream",
      cadence: "Fortnightly sessions, monthly review",
      team: "Small dedicated team",
      reporting: "Leads and pipeline by channel",
      planning: "Quarter by quarter",
      inHouse: "A marketing lead helps",
    },
  },
  {
    slug: "scale",
    name: "Scale",
    stage: "Integrating",
    forWhom: "Multi-channel teams that need integration and pace.",
    focus: "Integrated search, media, content and conversion",
    collaboration: "Cross-functional pod working alongside your team",
    outcome: "Channels planned together and reported against revenue",
    includes: [
      "Cross-channel strategy and planning",
      "Experimentation programme",
      "Marketing automation and CRM alignment",
      "Revenue attribution reporting",
    ],
    suits: [
      "Several channels are active, each with its own plan and its own report.",
      "Marketing and sales disagree about which activity produces revenue.",
      "You have people in-house and need more pace, depth or coordination.",
    ],
    channels: "Search, paid media, content and conversion planned as one programme, with marketing automation and CRM alignment so that leads can be followed through to revenue.",
    cadence: "A weekly working rhythm with your team, a monthly performance review and quarterly planning.",
    team: "A cross-functional pod working alongside your in-house team, with a shared backlog and a shared reporting view.",
    run: "Channels are planned together and tested deliberately. An experimentation programme decides what to try next, and attribution reporting connects the results to pipeline and revenue instead of channel metrics.",
    compare: {
      channels: "Integrated, multi-channel",
      cadence: "Weekly rhythm, monthly review, quarterly planning",
      team: "Cross-functional pod",
      reporting: "Revenue attribution across channels",
      planning: "Quarterly, with an annual view",
      inHouse: "Expected",
    },
  },
  {
    slug: "growth-partner",
    name: "Growth Partner",
    stage: "Embedding",
    forWhom: "Leadership teams that want an embedded growth function.",
    focus: "Shared targets, embedded team",
    collaboration: "Senior strategist in your leadership rhythm",
    outcome: "A growth function accountable to the same targets you are",
    includes: [
      "Dedicated senior strategist",
      "Quarterly planning with leadership",
      "Unified reporting across every channel",
      "Multi-market execution",
    ],
    suits: [
      "Growth is a leadership agenda item, not a marketing task.",
      "You want one team accountable across every channel and market.",
      "You would rather share targets with a partner than manage a supplier.",
    ],
    channels: "Every channel in scope, across the markets you operate in, managed against targets we agree with your leadership team.",
    cadence: "A weekly working rhythm, a monthly review with leadership and quarterly planning that we take part in.",
    team: "A dedicated senior strategist who sits in your leadership rhythm, supported by the specialists the plan calls for at each stage.",
    run: "We operate as your growth function. Planning, prioritisation and reporting happen inside your own cycle, and the strategist answers for the same targets your leadership team does.",
    compare: {
      channels: "All channels, multiple markets",
      cadence: "Weekly rhythm, leadership review, quarterly planning",
      team: "Dedicated senior strategist and specialists",
      reporting: "One view shared with leadership",
      planning: "Annual plan, revised quarterly",
      inHouse: "Works with or in place of one",
    },
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    stage: "Governing",
    forWhom: "Complex organisations with multiple brands, markets or business units.",
    focus: "Governance, scale and custom scope",
    collaboration: "Programme office, service levels and enablement",
    outcome: "Consistent standards across brands, markets and teams",
    includes: [
      "Custom scope and service levels",
      "Governance and enablement for internal teams",
      "Security, legal and procurement alignment",
      "Executive reporting",
    ],
    suits: [
      "Several brands, markets or business units need to work to one standard.",
      "Internal teams and other agencies need governance and enablement more than extra hands.",
      "Security, legal and procurement requirements shape how any supplier can work.",
    ],
    channels: "A custom scope across brands, markets or business units, defined with your stakeholders. It can cover execution, governance, enablement or a combination.",
    cadence: "Set out in the service levels: operational reviews, executive reporting and governance checkpoints agreed with you.",
    team: "A programme office on our side working with your marketing, product, legal, security and procurement teams.",
    run: "The engagement begins with a scoping phase that documents standards, responsibilities and service levels. Delivery then runs as a governed programme, with playbooks and training so that internal teams can apply the same standards themselves.",
    compare: {
      channels: "Custom, across brands and markets",
      cadence: "Defined in service levels",
      team: "Programme office",
      reporting: "Executive reporting across the organisation",
      planning: "Aligned to your planning cycle",
      inHouse: "Expected, often several",
    },
  },
];

/** Rows of the comparison table, in display order. Qualitative only. */
export const comparisonRows: { key: keyof EngagementModel["compare"] | "stage" | "pricing"; label: string }[] = [
  { key: "stage", label: "Business stage" },
  { key: "channels", label: "Channel scope" },
  { key: "cadence", label: "Review cadence" },
  { key: "team", label: "Our team" },
  { key: "inHouse", label: "In-house marketing team" },
  { key: "reporting", label: "Reporting" },
  { key: "planning", label: "Planning horizon" },
  { key: "pricing", label: "Pricing" },
];

export const howToChoose = [
  {
    title: "Start from your stage",
    body: "Choose by where the business is today, not where you want it to be. A model that is too large spends budget on coordination you do not need yet.",
  },
  {
    title: "Count the channels that work",
    body: "If no channel is reliably producing leads or sales, begin with one. If one already is, add the next. Integration only pays once there is something to integrate.",
  },
  {
    title: "Look at who you have in-house",
    body: "With no marketing team, a smaller model with clear ownership works best. With a team in place, the question becomes pace, depth and coordination.",
  },
  {
    title: "Decide how close you want us",
    body: "A supplier delivers a scope. A partner shares targets and sits in your planning. Both are valid; they are different relationships.",
  },
] as const;

export const engagementFaqs = [
  {
    q: "Why are there no prices on this page?",
    a: "Because the cost of an engagement depends on things we do not know yet: your market, the competition, how many channels are involved and where you are starting from. After the growth audit you receive a specific proposal with the scope, the cost and the reasoning behind both.",
  },
  {
    q: "Do we have to pick a model before we talk to you?",
    a: "No. The growth audit ends with a recommendation, including which model fits and why. This page is here so you can see how the options differ before that conversation.",
  },
  {
    q: "Can we move between models?",
    a: "Yes. The models describe scope, and scope should change as the business does. It is common sense to start with a narrower engagement and widen it once the evidence supports it. How scope changes are handled is set out in your proposal.",
  },
  {
    q: "Do we need an in-house marketing team?",
    a: "Not for Growth Starter or Growth, where one point of contact is enough. Scale and Enterprise assume you have people in-house, because the value comes from working alongside them. Growth Partner can work either way.",
  },
  {
    q: "What if we only need one service?",
    a: "Then a single-channel scope is the right answer, and Growth Starter is built for it. We would still begin with the audit, so that the one channel we work on is the one most likely to matter.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Rankings, AI citations, cost per lead and revenue depend on competitors, platforms and your own sales process, none of which any agency controls. What we commit to is a defined scope, a clear method, targets set against your own baseline and reporting that shows what happened either way.",
  },
  {
    q: "How is AI used in an engagement?",
    a: "AI is used at every stage to speed up research, analysis, drafting and monitoring. It does not set priorities or approve work. A named specialist reviews anything that is published or changed on your behalf.",
  },
] as const;
