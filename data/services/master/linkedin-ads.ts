import type { Service, ServiceMaster } from "@/types";

/**
 * /linkedin-ads/ : B2B advertising by company, role and seniority.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is LinkedIn Ads management?",
    text: "LinkedIn Ads management is the planning and running of paid campaigns in LinkedIn Campaign Manager for business-to-business marketing. Its distinguishing feature is targeting built on professional data that members supply themselves: company, industry, company size, job title, function and seniority. The work covers audience and account list design, ad formats, bidding, lead capture and CRM reporting. Clicks cost more than on most platforms, so it suits offers where a single won deal is worth enough to justify the price.",
    takeaways: [
      "LinkedIn targets by company, industry, job function, title and seniority.",
      "Its auction weighs your bid together with how relevant the ad is predicted to be.",
      "Cost per click is high, which makes deal value the test of whether it pays.",
      "Results are best read at account level in the CRM, over a full sales cycle.",
    ],
  },

  facts: [
    { label: "Best for", value: "B2B offers with high deal value and named buyers" },
    { label: "Works alongside", value: "Organic LinkedIn, sales outreach, search and email" },
    { label: "Typical horizon", value: "Engagement in weeks; pipeline over one full sales cycle" },
    { label: "Measured in", value: "Target accounts engaged and cost per opportunity" },
  ],

  pillars: [
    {
      title: "Account and audience design",
      body: "The audience is the strategy on LinkedIn. We build it with sales from the companies they want and the roles that sit on the buying committee, then check it is large enough to deliver and narrow enough to be worth the cost.",
      items: ["Company lists uploaded as matched audiences", "Job function and seniority layers", "Buying committee roles mapped", "Exclusions for customers, competitors and staff", "Audience size checked before launch"],
    },
    {
      title: "Offers and messaging by role",
      body: "A finance director and an engineering lead at the same company care about different things. Each role gets a message and an offer that justify a senior person's time.",
      items: ["Value propositions written for each role", "Ungated content for first contact", "Offers matched to buying stage", "Proof drawn from the buyer's own sector", "Messages reviewed with sales"],
      href: "/content-marketing/",
    },
    {
      title: "Ad formats and thought leadership",
      body: "Formats do different jobs. Posts promoted from a real person's profile build familiarity, document ads let people read before they commit, and sponsored messaging suits specific invitations where it is available.",
      items: ["Single image, video and carousel ads", "Document ads for guides and reports", "Thought Leader Ads from employee posts", "Sponsored messaging where available", "Formats rotated against fatigue"],
      href: "/linkedin-marketing/",
    },
    {
      title: "Lead Gen Forms and landing pages",
      body: "Native forms fill in profile data for the member, which raises completion and can lower intent. We choose between a form and a landing page according to what sales accepts.",
      items: ["Form fields limited to what sales needs", "Custom qualifying questions", "Work email handling", "Landing pages for high-intent offers", "Lead sync to the CRM in real time"],
      href: "/landing-page-optimization/",
    },
    {
      title: "Bidding and budget control",
      body: "LinkedIn will spend a budget quickly on a broad audience. Bid strategy, audience size and placement settings decide whether that spend reaches the people on your list.",
      items: ["Bid strategy chosen per objective", "Audience expansion reviewed, usually off", "Audience Network placement decisions", "Budgets sized from the account list", "Frequency watched by segment"],
    },
    {
      title: "CRM and pipeline measurement",
      body: "A B2B decision involves several people over months, and few of them click an ad then fill in a form. We measure at company level, connecting campaign engagement to opportunities in the CRM.",
      items: ["Insight Tag and Conversions API", "Offline conversions from CRM stages", "Company-level engagement reporting", "Pipeline influenced by target account", "Engaged-account lists passed to sales"],
      href: "/marketing-automation/",
    },
  ],

  mechanics: {
    heading: "How does LinkedIn decide which ad a member sees?",
    intro: "LinkedIn fills a limited number of sponsored slots in each member's feed through an auction. Because targeting comes from what members state about their work, the process starts with who the person is professionally, not what they have searched for.",
    stages: [
      { name: "Audience match", happens: "A member opens LinkedIn and qualifies for every campaign whose company, role, seniority or list criteria they fit.", we: "Build audiences from target account lists and buying roles, with exclusions agreed with sales." },
      { name: "Auction", happens: "Qualifying ads compete. LinkedIn combines each bid with a predicted relevance score, so engaging ads can win at a lower price.", we: "Pick a bid strategy suited to the objective and improve relevance with role-specific creative." },
      { name: "Engagement", happens: "The member reads, watches, opens a document or clicks. Many will engage several times before doing anything measurable.", we: "Sequence content from familiarity to offer, and retarget people who engaged with earlier ads." },
      { name: "Capture", happens: "A lead form, landing page visit or website conversion is recorded through the form itself, the Insight Tag or the Conversions API.", we: "Ask only for what sales needs, and route the lead to the CRM with campaign and company context." },
      { name: "Pipeline", happens: "Sales works the account, often alongside colleagues of the original lead, and an opportunity is created or not.", we: "Send CRM outcomes back to LinkedIn and report which target accounts moved, without overclaiming credit." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audience and economics", body: "We agree target accounts and roles with sales, review past campaigns, and check that deal value and close rates can support LinkedIn's costs.", outputs: ["Target account and role definition", "Unit economics check"] },
    { when: "Weeks 2 to 3", title: "Tracking and CRM connection", body: "The Insight Tag, conversion events, lead sync and offline conversion feed are set up, so that reporting can follow an account from impression to opportunity.", outputs: ["Verified tracking", "CRM lead sync"] },
    { when: "Weeks 3 to 5", title: "Content and campaign build", body: "Messages and offers are written by role, creative is produced across formats, and campaigns are built in stages from awareness to conversion.", outputs: ["Messaging matrix by role", "Campaigns live"] },
    { when: "Month 2 onward", title: "Optimise and hand over", body: "Audiences, formats and offers are refined on engagement and lead quality. Lists of engaged accounts go to sales with context for outreach.", outputs: ["Engaged-account lists for sales", "Creative and audience tests"] },
    { when: "Every quarter", title: "Pipeline review", body: "Because sales cycles are long, the full picture is read quarterly: which target accounts were reached, which opened opportunities, and what that cost.", outputs: ["Pipeline influence report", "Account list and budget revisions"] },
  ],

  comparison: {
    heading: "LinkedIn Ads or Meta Ads for B2B: which is the better use of budget?",
    intro: "B2B marketers often weigh LinkedIn's precision against Meta's much lower cost of reach. The same people use both, and what differs is how accurately you can find them and what frame of mind they are in.",
    columns: ["LinkedIn Ads", "Meta Ads"],
    rows: [
      { label: "Targeting", a: "Company, role and seniority", b: "Behaviour, interests and lookalikes" },
      { label: "Account lists", a: "Strong company matching", b: "Contact lists only" },
      { label: "Cost of reach", a: "High", b: "Much lower" },
      { label: "Mindset", a: "Professional context", b: "Personal browsing" },
      { label: "Lead quality control", a: "Filter by firmographics upfront", b: "Qualify after capture" },
      { label: "Best use", a: "Named accounts, senior buyers", b: "Broad SMB audiences, retargeting" },
    ],
    verdict: "Where the market is a defined list of companies and the deal is large, LinkedIn's precision usually justifies its price. Where buyers are numerous small businesses or the deal is modest, Meta often reaches them more economically, and many B2B programmes use it to retarget audiences LinkedIn first reached.",
    link: { label: "See our Meta Ads service", href: "/meta-ads/" },
  },

  industries: ["saas", "b2b", "technology", "professional-services", "finance", "manufacturing"],
  markets: ["usa", "uk", "india", "singapore"],
  scenario: "b2b-saas-pipeline-quality",

  faqs: [
    { q: "How much do LinkedIn Ads cost?", a: "LinkedIn sets prices by auction, and clicks generally cost more than on Meta or Google because advertisers compete for a limited professional audience. Total cost depends on audience size and how often you want to reach it. Management fees follow scope, which we define after a growth audit." },
    { q: "Are LinkedIn Ads worth it?", a: "They are when a won customer is worth a lot and the buyers can be defined by company and role. They rarely pay for low-priced products or broad consumer audiences. The test is cost per qualified opportunity against deal value, not cost per click against other platforms." },
    { q: "How long do LinkedIn Ads take to show results?", a: "Engagement data arrives within the first few weeks. Pipeline takes as long as your sales cycle, which in B2B is often months. Early on, judge whether the right accounts and roles are engaging. Judge revenue only after enough time has passed for deals to progress." },
    { q: "Can we target specific companies on LinkedIn?", a: "Yes. You can upload a list of company names or domains as a matched audience, and LinkedIn matches it to company pages. You then layer job function or seniority on top. The matched audience has to meet a minimum size before it will serve, so very short lists need broader role criteria." },
    { q: "Should we target by job title or by job function?", a: "Usually function with seniority. Titles are precise and inconsistent: the same role carries dozens of names, so title targeting misses many people and shrinks the audience. Function and seniority cover the role more completely. Titles work best as a narrow supplement or for exclusions." },
    { q: "Are Lead Gen Forms better than landing pages?", a: "They produce more leads at a lower cost each, because LinkedIn fills in the member's details. They can also produce weaker intent, since submitting takes little effort. Landing pages yield fewer and often more committed leads. We compare both on sales acceptance, then keep whichever produces opportunities." },
    { q: "What are Thought Leader Ads?", a: "They are posts from an individual's profile, usually an executive or subject expert, promoted by the company with that person's approval. They appear under the person's name, not the brand's, and tend to be read as opinion more than advertising. They work well early, when the aim is familiarity among target accounts." },
    { q: "What do we need before starting LinkedIn Ads?", a: "A clear picture of target companies and buying roles, something worth a senior person's attention, a CRM that records lead source and opportunity stages, and agreement from sales to follow up. Without the CRM link, LinkedIn can only be judged on cost per lead, which is where it looks worst." },
    { q: "Do LinkedIn Ads work with a small budget?", a: "Only with a small audience. A modest budget spread across a large audience reaches each person too rarely to register. Concentrated on a short list of accounts and a few roles, the same money can achieve useful frequency. We size the audience to the budget, or advise against the channel." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "LinkedIn Ads Management for B2B Companies",
  metaDescription:
    "LinkedIn Ads management for B2B: targeting by company, role and seniority, formats matched to buying stage, and reporting on pipeline from your CRM.",
};
