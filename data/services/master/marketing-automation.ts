import type { Service, ServiceMaster } from "@/types";

/**
 * /marketing-automation/ : CRM, lifecycle journeys, scoring and routing.
 * Rules: no client names, no result figures, no guarantees. Channel detail
 * lives on /email-marketing/, /whatsapp-automation/ and /ai-agents/.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is marketing automation?",
    text: "Marketing automation is the use of software to capture leads, record them in a CRM, score and route them, and send relevant follow-up across channels such as email and WhatsApp, triggered by what each person does and where they are in the buying process. Its purpose is to make sure every enquiry gets a timely, appropriate next step without relying on someone remembering. It is measured by speed of response, conversion between stages and the revenue that follows.",
    takeaways: [
      "Automation executes a process; it cannot repair one that sales and marketing have not agreed.",
      "The CRM data model decides what can be automated and what can be reported.",
      "Lead scoring combines fit, meaning who the lead is, with intent, meaning what they did.",
      "Consent and an easy opt-out apply to every automated message, on every channel.",
    ],
  },

  facts: [
    { label: "Best for", value: "Teams with steady lead flow and slow or uneven follow-up" },
    { label: "Works alongside", value: "Lead generation, paid media, email, WhatsApp and sales" },
    { label: "Typical horizon", value: "Routing and first journeys in 6 to 10 weeks, depending on CRM state" },
    { label: "Measured in", value: "Response time, stage conversion and revenue by source" },
  ],

  pillars: [
    {
      title: "CRM and data model",
      body: "Everything downstream depends on how records, stages and fields are defined. We design the model around how you actually sell, then clean what is already there so that automation acts on accurate data.",
      items: ["Lifecycle and pipeline stage definitions", "Required fields and naming rules", "Deduplication and merge rules", "Ownership and permission settings", "Migration or clean-up of existing records"],
    },
    {
      title: "Lead capture and routing",
      body: "A lead that sits unassigned loses value by the hour. We connect every entry point to the CRM and set rules that put each lead with the right person, with the context they need.",
      items: ["Forms, chat, calls and ad lead forms connected", "Source and campaign captured on every record", "Assignment by territory, product or round robin", "Instant alerts with lead context", "Response-time targets with escalation"],
      href: "/lead-generation/",
    },
    {
      title: "Lead scoring and qualification",
      body: "Scoring exists to tell sales who to call first. We build it from two kinds of signal, agree the handover threshold with sales and revise it against what actually closes.",
      items: ["Fit criteria from your best customers", "Intent signals from behaviour", "Negative scoring and score decay", "Agreed definition of a sales-ready lead", "Regular recalibration against closed deals"],
    },
    {
      title: "Email journeys",
      body: "Email carries most of the nurture load in longer sales cycles. Journeys are triggered by stage and behaviour, and they stop when the person buys, replies or opts out.",
      items: ["Welcome and enquiry follow-up", "Stage-based nurture sequences", "Onboarding and renewal reminders", "Re-engagement of dormant leads", "Exit rules and frequency limits"],
      href: "/email-marketing/",
    },
    {
      title: "WhatsApp and conversational follow-up",
      body: "In markets where buyers prefer chat, follow-up belongs there, on the official Business Platform and with consent. AI assistants can take the first response where the task is well defined.",
      items: ["Opt-in captured and stored in the CRM", "Template-based reminders and confirmations", "Qualification flows before handover", "AI assistants for first response", "Conversation history written to the record"],
      href: "/whatsapp-automation/",
    },
    {
      title: "Closed-loop reporting",
      body: "The loop closes when marketing can see which sources produced revenue, and ad platforms can optimise towards it. We connect CRM outcomes back to analytics and campaigns.",
      items: ["Source-to-revenue reporting", "Stage conversion and velocity", "Offline conversion uploads to ad platforms", "Journey performance by step", "Data quality monitoring"],
    },
  ],

  mechanics: {
    heading: "What happens to a lead after the form is submitted?",
    intro: "In a working system, five things happen within minutes of an enquiry and continue for as long as the person remains a prospect. In most businesses at least one of them is done by hand, late, or not at all.",
    stages: [
      { name: "Capture", happens: "The enquiry is created as a CRM record, with its source and consent status attached.", we: "Connect every entry point and make sure no lead lives only in an inbox or spreadsheet." },
      { name: "Qualify", happens: "The record is enriched, checked for duplicates and scored for fit and intent.", we: "Build scoring from agreed criteria and keep it explainable, so sales trusts the number." },
      { name: "Route", happens: "The lead is assigned to an owner and that person is told immediately.", we: "Write assignment rules, alerts and escalation for leads that are not picked up in time." },
      { name: "Nurture", happens: "Leads not ready to buy receive relevant follow-up until they are, or until they opt out.", we: "Design journeys by stage and behaviour, with clear exit rules and limits on frequency." },
      { name: "Report", happens: "Outcomes are recorded against the original source and sent back to analytics and ad platforms.", we: "Tie revenue to source, and feed qualified and closed outcomes back so campaigns optimise for quality." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Process and systems audit", body: "We trace real leads from first touch to closed deal, review CRM data quality and list every tool, form and integration currently in use.", outputs: ["Lead flow map", "CRM and data quality audit"] },
    { when: "Weeks 3 to 4", title: "Design and agreement", body: "Lifecycle stages, scoring criteria, routing rules and journeys are designed on paper and agreed with both sales and marketing before anything is built.", outputs: ["Lifecycle and scoring specification", "Journey blueprints"] },
    { when: "Weeks 5 to 8", title: "Build and integrate", body: "CRM changes, integrations, routing and the first journeys are built and tested with sample records, including consent handling and failure cases.", outputs: ["Configured CRM and integrations", "Tested routing and journeys"] },
    { when: "Weeks 8 to 10", title: "Launch and training", body: "The system goes live in stages. Sales and marketing are trained on what changed, what they must record and how to read the new reports.", outputs: ["Live automation", "Team guide and training session"] },
    { when: "Every month", title: "Review and recalibrate", body: "Response times, stage conversion and journey performance are reviewed. Scoring is adjusted against closed deals and weak steps are rewritten or removed.", outputs: ["Performance review", "Scoring and journey updates"] },
  ],

  comparison: {
    heading: "All-in-one platform or a connected stack of specialist tools?",
    intro: "Most buyers face this choice early, usually framed as a choice between vendors. It is really a choice about where complexity should sit: inside one product, or in the connections between several.",
    columns: ["All-in-one platform", "Connected specialist tools"],
    rows: [
      { label: "Data", a: "One record across teams", b: "Synced between systems" },
      { label: "Setup", a: "Faster to a working baseline", b: "More integration work" },
      { label: "Depth", a: "Adequate in most areas", b: "Strongest tool for each job" },
      { label: "Cost shape", a: "Often rises with contacts and seats", b: "Several smaller subscriptions" },
      { label: "Maintenance", a: "One vendor to manage", b: "Integrations need an owner" },
      { label: "Best fit", a: "Small teams wanting simplicity", b: "Teams with specific, proven needs" },
    ],
    verdict: "Start with the simplest setup that fits how you sell today, and add specialist tools only when a clear limit appears. The design of stages, scoring and routing matters more than which platform carries it.",
    link: { label: "Start with a growth audit", href: "/growth-audit/" },
  },

  industries: ["b2b", "saas", "real-estate", "education", "finance", "professional-services"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does marketing automation cost?", a: "There are two costs: the software licences, which you pay to the vendor, and the design and build work. Both depend on contact volume, the number of journeys and the state of your CRM. We scope and price the work after a growth audit and do not publish fixed fees." },
    { q: "How long does it take to implement marketing automation?", a: "Routing and a first set of journeys are commonly live within two to three months when the CRM is in reasonable shape. A migration, heavy data clean-up or slow agreement between sales and marketing extends that. We set a schedule after the audit shows what state things are in." },
    { q: "Is marketing automation worth it for a small business?", a: "It can be, if you receive enough enquiries that some go unanswered or are followed up late. A small team usually needs only a CRM, instant routing and two or three journeys. If lead volume is very low, a disciplined manual process may serve you better for now." },
    { q: "What is the difference between a CRM and marketing automation?", a: "A CRM stores people, companies, deals and the history of contact with them. Marketing automation acts on that data: it scores, routes and sends follow-up when conditions are met. Many platforms now combine both, but the CRM remains the record everything else depends on." },
    { q: "What is lead scoring and do we need it?", a: "Lead scoring ranks leads by how well they fit your ideal customer and how much buying intent they have shown. It earns its place when sales cannot contact everyone promptly. With a small number of leads, simple routing rules and a fast response are usually enough." },
    { q: "What do you need from us to start?", a: "Admin access to your CRM, forms and messaging tools, a walkthrough of how a lead is handled today, and time with both sales and marketing leads. The most important input is agreement on stage definitions, because automation built on a disputed process will be ignored." },
    { q: "How is marketing automation measured?", a: "By what happens to leads, not by how many messages are sent. We track time to first response, conversion between lifecycle stages, pipeline and revenue by original source, and opt-out rates. Email opens and clicks are diagnostic signals, not outcomes." },
    { q: "Will automated messages feel impersonal to our customers?", a: "They do when everyone receives the same sequence. Journeys triggered by a person's own actions, limited in frequency and stopped as soon as they reply or buy tend to feel timely. We also decide which moments should never be automated and should go to a person." },
    { q: "Does marketing automation replace salespeople?", a: "No. It removes the administrative gaps around them: logging, assigning, reminding and first follow-up. Conversations that involve judgement, negotiation or a complicated need stay with people, who should arrive at each call with better context than they had before." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Marketing Automation: CRM, Scoring & Journeys",
  metaDescription:
    "Marketing automation from SERPMOZ: CRM design, lead scoring and routing, and consent-based lifecycle journeys across email and WhatsApp, tied to revenue.",
};
