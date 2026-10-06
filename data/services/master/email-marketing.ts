import type { Service, ServiceMaster } from "@/types";

/**
 * /email-marketing/ : lifecycle email, segmentation and deliverability.
 * Rules: no client names, no result figures, no guarantees. Cross-channel
 * CRM, scoring and routing live on /marketing-automation/.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are email marketing services?",
    text: "Email marketing services cover the planning, writing, building and sending of email to people who have agreed to receive it, together with the technical work that gets those messages into the inbox. That includes lifecycle sequences such as welcome, nurture and win-back, segmentation so each person receives what is relevant to them, and deliverability: domain authentication with SPF, DKIM and DMARC, list hygiene and sender reputation. Results are measured by revenue or pipeline per recipient, not by open rates.",
    takeaways: [
      "Automated lifecycle emails are triggered by behaviour; campaigns are sent on your schedule.",
      "SPF, DKIM and DMARC prove to mailbox providers that a message really comes from your domain.",
      "Sender reputation is earned through engagement and low complaint rates, and lost quickly.",
      "Open rates are unreliable because some mail apps load messages automatically.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses with a consented list and repeat or considered purchases" },
    { label: "Works alongside", value: "CRM, marketing automation, WhatsApp and paid retargeting" },
    { label: "Typical horizon", value: "Core flows live in 4 to 8 weeks; reputation repair can take longer" },
    { label: "Measured in", value: "Revenue or pipeline per recipient, and complaint rate" },
  ],

  pillars: [
    {
      title: "Lifecycle flows",
      body: "The most valuable emails are usually the ones sent automatically at a relevant moment. We map the moments in your customer lifecycle and build a flow for each, with rules for when a person leaves it.",
      items: ["Welcome and first-purchase series", "Abandoned basket and browse reminders", "Lead nurture by stage", "Onboarding and activation", "Win-back and replenishment"],
      href: "/marketing-automation/",
    },
    {
      title: "Segmentation",
      body: "Sending everything to everyone trains people to ignore you and teaches mailbox providers that your mail is unwanted. We divide the list by what people have done and how recently.",
      items: ["Engagement recency tiers", "Purchase history and value", "Lifecycle stage and lead status", "Stated interests and preferences", "Suppression of unengaged contacts"],
    },
    {
      title: "Deliverability and authentication",
      body: "Mailbox providers decide where a message lands by checking who sent it and how recipients have reacted before. We configure authentication correctly and manage the sending practices that shape reputation.",
      items: ["SPF, DKIM and DMARC configuration", "Sending domain and subdomain strategy", "Warm-up for new domains or platforms", "Bounce, complaint and blocklist monitoring", "One-click unsubscribe headers"],
    },
    {
      title: "Copy and design",
      body: "An email should be readable in a few seconds on a phone and ask for one thing. We write for clarity and build templates that hold up across mail clients, dark mode and screen readers.",
      items: ["Subject lines and preview text", "One primary action per email", "Mobile-first, accessible templates", "Plain-text style for sales-led messages", "Rendering tests across mail clients"],
    },
    {
      title: "List growth and consent",
      body: "A list is only as good as the way it was collected. We grow it through clear sign-up offers and record consent properly. We do not send to bought or scraped lists.",
      items: ["Sign-up forms and incentives", "Consent wording and records", "Double opt-in where appropriate", "Preference centre", "Regular removal of invalid addresses"],
      href: "/lead-generation/",
    },
    {
      title: "Testing and measurement",
      body: "We test what could change a decision: the offer, the timing, the sequence. Results are read on clicks, conversions and revenue, since opens alone say little.",
      items: ["Holdout groups to measure true lift", "Subject, content and timing tests", "Revenue or pipeline attribution per flow", "Inbox placement monitoring", "Unsubscribe and complaint tracking"],
    },
  ],

  mechanics: {
    heading: "How does an email reach the inbox instead of the spam folder?",
    intro: "Between pressing send and a customer acting, a message passes through five stages. Two of them are decided by the receiving mailbox provider, not by you, which is why deliverability is treated as a discipline of its own.",
    stages: [
      { name: "Trigger", happens: "A person's action or a scheduled campaign selects who receives which message.", we: "Define triggers, segments and exclusions so the message is relevant to everyone it reaches." },
      { name: "Authenticate", happens: "The receiving server checks SPF, DKIM and DMARC to confirm the sender is who it claims to be.", we: "Set up and align all three records for every system that sends as your domain." },
      { name: "Filter", happens: "The mailbox provider weighs sender reputation, past engagement and complaints to choose inbox, promotions or spam.", we: "Protect reputation through list hygiene, sensible volume and sending first to engaged contacts." },
      { name: "Open", happens: "The recipient sees the sender name, subject and preview, and decides whether to read.", we: "Write honest subject lines and use a recognisable sender name people chose to hear from." },
      { name: "Act", happens: "They click through, reply, ignore, unsubscribe or mark the message as spam.", we: "Give each email one clear action, make leaving easy and feed the response back into segmentation." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audit", body: "We review the platform setup, authentication records, list health, existing flows and how email revenue or pipeline is currently attributed.", outputs: ["Deliverability and list health audit", "Review of current flows"] },
    { when: "Weeks 2 to 3", title: "Lifecycle and segment plan", body: "The customer lifecycle is mapped into flows and segments, with a clear order of build based on likely value and effort.", outputs: ["Lifecycle journey map", "Segmentation model"] },
    { when: "Weeks 3 to 6", title: "Authentication and build", body: "Domain records are corrected, templates designed, and the core flows written, built and tested across mail clients before any volume is sent.", outputs: ["Authenticated sending domain", "Core flows and templates"] },
    { when: "Weeks 6 to 8", title: "Launch and warm-up", body: "Flows go live and campaign volume is increased gradually, starting with the most engaged contacts, while bounces and complaints are watched closely.", outputs: ["Live flows", "Sending and warm-up schedule"] },
    { when: "Every month", title: "Test, prune and report", body: "Each flow is reviewed, one or two tests are run, inactive contacts are suppressed and results are reported against revenue or pipeline.", outputs: ["Performance report", "Test results and list hygiene log"] },
  ],

  comparison: {
    heading: "Email or WhatsApp: which should carry your customer messaging?",
    intro: "Both are owned, consent-based channels, and many businesses use the two together. They differ in what each is suited to, what each costs to send and how strictly each is policed.",
    columns: ["Email", "WhatsApp"],
    rows: [
      { label: "Consent", a: "Opt-in under local law", b: "Opt-in required by platform policy" },
      { label: "Cost to send", a: "Platform subscription", b: "Charged per template message" },
      { label: "Content", a: "Long form, rich layouts", b: "Short, conversational" },
      { label: "Attention", a: "Read later, easy to skim", b: "Read quickly, more intrusive" },
      { label: "Gatekeeper", a: "Mailbox spam filters", b: "Meta template approval and limits" },
      { label: "Best use", a: "Nurture, education, offers, receipts", b: "Time-sensitive replies and reminders" },
    ],
    verdict: "Use email for depth, regular contact and anything a person may want to keep. Use WhatsApp sparingly for moments that are urgent or conversational, in markets where customers expect it.",
    link: { label: "See our WhatsApp automation service", href: "/whatsapp-automation/" },
  },

  industries: ["ecommerce", "saas", "b2b", "education", "finance", "travel"],
  markets: ["usa", "uk", "india", "europe"],
  scenario: "d2c-ecommerce-margin",

  faqs: [
    { q: "How much do email marketing services cost?", a: "Cost depends on list size, the number of flows to build, how much copy and design is needed and whether deliverability problems have to be repaired first. Your email platform bills separately. We set a price after a growth audit and do not publish fixed fees." },
    { q: "How long does email marketing take to show results?", a: "Automated flows begin working as soon as they are live, since they reach people at a relevant moment. Building them usually takes a few weeks. If your domain reputation is damaged, recovery is slower and depends on how mailbox providers respond to better sending over time." },
    { q: "Is email marketing still worth it?", a: "Yes, for most businesses with a consented list. Email is one of the few channels you own, with no charge per click and no algorithm deciding reach in the way social feeds do. It works when messages are relevant and fails when the whole list is mailed indiscriminately." },
    { q: "Why are our emails going to spam?", a: "The usual causes are missing or misaligned authentication, sending to old or unengaged addresses, sudden jumps in volume, and recipients marking messages as spam. Content plays a smaller part than most people expect. An audit of records, list health and complaint rates normally identifies the cause." },
    { q: "What are SPF, DKIM and DMARC?", a: "They are DNS records that authenticate email. SPF lists the servers allowed to send for your domain. DKIM adds a cryptographic signature to each message. DMARC tells receiving servers what to do when those checks fail and sends you reports. Major mailbox providers expect bulk senders to have all three." },
    { q: "Can we buy an email list to get started?", a: "No. Purchased lists contain people who never agreed to hear from you, along with invalid addresses and spam traps. Sending to them breaches most platform terms and privacy laws in many markets, and it damages your domain reputation. We build lists through consented sign-up only." },
    { q: "What is the difference between a newsletter and an automated flow?", a: "A newsletter or campaign is sent to a segment at a time you choose. An automated flow is sent to one person when they do something, such as subscribing or abandoning a basket. A sound programme uses both, with flows carrying the moments that matter most." },
    { q: "What do you need from us to start?", a: "Admin access to your email platform and CRM, access to DNS or someone who can edit it, and your ecommerce or analytics data. We also ask for brand guidelines, past campaign results and a description of how consent has been collected so far." },
    { q: "Is a high open rate a sign that our emails are working?", a: "Not reliably. Some mail apps, including Apple Mail with privacy protection enabled, load messages automatically and register an open whether or not the person read it. We treat opens as a rough signal and judge performance on clicks, conversions, revenue and complaints." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Email Marketing: Lifecycle & Deliverability",
  metaDescription:
    "Email marketing from SERPMOZ: lifecycle flows, segmentation and deliverability work, including SPF, DKIM and DMARC, measured by revenue per recipient.",
};
