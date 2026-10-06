import type { Service, ServiceMaster } from "@/types";

/**
 * /lead-generation/ : the whole system from offer to sales-accepted lead.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are lead generation services?",
    text: "Lead generation services attract people who could become customers and turn their interest into an enquiry a sales team can act on. The work joins several parts into one system: defining who counts as a qualified lead, choosing channels, creating offers and landing pages, capturing and qualifying enquiries, and routing them to sales quickly. A serious provider measures it by the leads sales accepts and the pipeline they create, because a count of form submissions says little about revenue.",
    takeaways: [
      "A lead is a person who has shown interest and given a way to be contacted.",
      "A qualified lead also fits the customer profile and has a real need.",
      "Speed of first response strongly affects whether a lead becomes a conversation.",
      "Cost per lead is misleading unless it is read with the share sales accepts.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses that sell through a conversation" },
    { label: "Works alongside", value: "Paid media, SEO, landing pages, CRM and automation" },
    { label: "Typical horizon", value: "First leads within weeks of launch; pipeline over a sales cycle" },
    { label: "Measured in", value: "Sales-accepted leads and cost per opportunity" },
  ],

  pillars: [
    {
      title: "Lead definition and economics",
      body: "Before any campaign, marketing and sales need the same written answer to what a good lead is, and finance needs to say what one is worth. Every later decision depends on those two answers.",
      items: ["Ideal customer profile in writing", "Stages from enquiry to sales-accepted", "Disqualifying criteria agreed with sales", "Allowable cost per lead and per opportunity", "Capacity of the sales team to respond"],
    },
    {
      title: "Offers",
      body: "The offer is the reason someone gives you their details today. A vague invitation to get in touch attracts few people, and a free giveaway attracts the wrong ones.",
      items: ["Offers matched to buying stage", "Consultations, assessments and quotes", "Calculators and tools that show value", "Guides for early-stage research", "Offer tests read on lead quality"],
    },
    {
      title: "Channels and campaigns",
      body: "Leads come from wherever your buyers already spend attention. Search catches those who are looking, paid social and LinkedIn reach those who are not yet, and organic content keeps producing after the spend stops.",
      items: ["Search campaigns on high-intent terms", "Paid social and LinkedIn for defined audiences", "Organic search and content", "Retargeting for unconverted visitors", "Budget set by cost per qualified lead"],
      href: "/ppc-management/",
    },
    {
      title: "Landing pages and forms",
      body: "The page is where interest becomes an enquiry or is lost. Each added form field removes some people, which is sometimes exactly what you want.",
      items: ["One page per offer and audience", "Proof and specifics near the form", "Fields chosen to qualify, not to collect", "Call, chat and WhatsApp options", "Tracking of every enquiry route"],
      href: "/landing-page-optimization/",
    },
    {
      title: "Qualification and scoring",
      body: "Sales cannot treat every enquiry equally, nor should it. We sort leads by fit and intent, so the best get an immediate call and the rest get an appropriate next step.",
      items: ["Fit scoring from company and role data", "Intent scoring from behaviour", "Enrichment of incomplete records", "Spam and duplicate filtering", "Nurture path for not-yet-ready leads"],
      href: "/marketing-automation/",
    },
    {
      title: "Routing, response and feedback",
      body: "A qualified lead loses value by the hour. We build the handover so the right person is alerted at once, and so what sales learns flows back to the campaigns.",
      items: ["Instant alerts and assignment rules", "First response time monitored", "Automated acknowledgement and booking", "Sales outcomes recorded in the CRM", "Qualified-lead data returned to ad platforms"],
    },
  ],

  mechanics: {
    heading: "How does a stranger become a sales-accepted lead?",
    intro: "A lead passes through five hand-offs, and it can be lost at each. Most programmes pour budget into the first and leave the last two to chance, which is where good enquiries usually go missing.",
    stages: [
      { name: "Attention", happens: "A person with a relevant problem meets your ad, search result or content.", we: "Choose channels and targeting by where qualified buyers are found, not where clicks are cheapest." },
      { name: "Offer", happens: "They decide whether what you propose is worth their time and their contact details.", we: "Design offers that appeal to the right buyer and hold little attraction for anyone else." },
      { name: "Capture", happens: "They complete a form, call, or send a message, and a record is created.", we: "Build pages and forms that make this easy, and track every route so the source is known." },
      { name: "Qualification", happens: "The record is checked against fit and intent, by rules, by enrichment or by a person.", we: "Apply the agreed definition consistently and send each lead down the right path." },
      { name: "Acceptance", happens: "Sales makes contact, confirms the need and accepts or rejects the lead.", we: "Monitor response time, collect the reason for every rejection and adjust campaigns to match." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Alignment", body: "Workshops with sales and marketing produce a written lead definition, the stages a lead moves through and the economics that set what a lead can cost.", outputs: ["Lead definition and stage model", "Allowable cost targets"] },
    { when: "Weeks 2 to 4", title: "Funnel design", body: "We map audience, offer, channel and page for each segment, and review how leads are currently handled between the form and the first sales call.", outputs: ["Channel and offer plan", "Handover process review"] },
    { when: "Weeks 4 to 6", title: "Build", body: "Campaigns, landing pages, forms, tracking, scoring and routing are built and tested end to end with real test leads before launch.", outputs: ["Campaigns and pages ready", "Tested routing and alerts"] },
    { when: "Month 2 onward", title: "Run and refine", body: "Campaigns run against qualified outcomes. Offers, pages and audiences are tested, and the mix shifts towards sources sales accepts most often.", outputs: ["Weekly lead quality review with sales", "Offer and page tests"] },
    { when: "Every month", title: "Pipeline review", body: "Leads are followed through to opportunity and customer by source, and next month's budget is set from cost per opportunity.", outputs: ["Pipeline report by source", "Revised budget and priorities"] },
  ],

  comparison: {
    heading: "Should you generate your own leads or buy them?",
    intro: "Many businesses in property, education, finance and home services are offered leads by marketplaces, aggregators and pay-per-lead vendors. Bought leads can fill a gap, and the trade-offs are worth understanding before depending on them.",
    columns: ["Generating your own", "Buying leads"],
    rows: [
      { label: "Speed", a: "Weeks to build", b: "Available almost at once" },
      { label: "Exclusivity", a: "The lead contacted only you", b: "Often sold to several buyers" },
      { label: "Intent", a: "Responded to your offer", b: "Responded to a generic one" },
      { label: "Consent and data", a: "Collected by you, traceable", b: "Depends on the vendor" },
      { label: "Asset built", a: "Audience, pages and data you keep", b: "Nothing once you stop paying" },
      { label: "Control of quality", a: "Adjustable at every stage", b: "Limited to disputes and refunds" },
    ],
    verdict: "Buying leads can make sense as a short-term supplement, provided consent is verifiable and quality is tracked to sale. Building your own system takes longer and usually produces leads that are exclusive, better informed about you and cheaper over time.",
    link: { label: "See how we run paid campaigns", href: "/ppc-management/" },
  },

  industries: ["b2b", "real-estate", "education", "finance", "healthcare", "home-services"],
  markets: ["india", "uae", "usa", "uk"],

  faqs: [
    { q: "How much do lead generation services cost?", a: "Cost has two parts: the media or content budget, and the work of building and running the system. Both depend on your market, the channels involved and how much of the funnel already exists. We scope it after a growth audit, with the reasoning behind each line." },
    { q: "How long does it take to start getting leads?", a: "Paid campaigns can produce enquiries within days of launch, once pages and tracking are ready, which usually takes four to six weeks. Organic sources take months. Knowing whether those leads turn into customers takes at least one sales cycle, so early judgement should rest on sales acceptance." },
    { q: "What is the difference between an MQL and an SQL?", a: "A marketing qualified lead meets marketing's criteria for fit and interest. A sales qualified lead has been reviewed by sales and accepted as worth pursuing. The gap between the two is where most disputes arise, which is why we ask both teams to agree the definitions in writing before launch." },
    { q: "What is a good cost per lead?", a: "There is no universal figure. A good cost per lead is one that, after your acceptance and close rates, leaves an acceptable cost per customer against what that customer is worth. We work backwards from your own economics to set the target and avoid outside benchmarks." },
    { q: "Why are we getting leads that never answer the phone?", a: "Common causes are forms that are too easy to submit, offers that attract curiosity, slow follow-up and campaigns optimised for form volume. The fix is rarely one thing. We check the offer, the form, response time and what the ad platform has been told to optimise towards." },
    { q: "Is it better to have more leads or better leads?", a: "Better, in nearly every case where a sales team handles them. Each poor lead uses sales time that a good one needed. Volume matters only once quality is steady and sales has capacity. The useful measure is qualified opportunities per unit of spend, not enquiries." },
    { q: "Which channel is best for lead generation?", a: "It depends on how your buyers look for a solution. Search suits needs people already recognise. LinkedIn suits defined business roles. Meta suits broad consumer and small business audiences. Organic content suits long research cycles. Most programmes combine two or three and compare them on qualified leads." },
    { q: "How fast should we respond to a new lead?", a: "As fast as you reliably can, ideally within minutes during working hours. Interest fades quickly, and many buyers contact more than one provider. Automated acknowledgement, instant alerts and a booking link help, though they do not replace a prompt reply from a person who can answer questions." },
    { q: "What do you need from us to get started?", a: "Access to your CRM, ad accounts and analytics, time with sales leadership to agree what qualifies as a lead, and an honest view of how enquiries are handled today. Figures for average deal value and close rate allow us to set cost targets that make commercial sense." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Lead Generation Services: Qualified Leads",
  metaDescription:
    "Lead generation services covering offers, campaigns, landing pages, qualification and routing, built around leads your sales team accepts, not form volume.",
};
