import type { Service, ServiceMaster } from "@/types";

/**
 * /whatsapp-automation/ : official WhatsApp Business Platform only.
 * Rules: no client names, no result figures, no guarantees. Platform policy is
 * described conservatively; pricing and limits change and are confirmed at scoping.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is WhatsApp automation?",
    text: "WhatsApp automation is the use of the official WhatsApp Business Platform to send and answer customer messages through software instead of a single phone. It covers collecting opt-in, sending template messages that Meta has approved, running conversation flows that answer questions, qualify enquiries and book appointments, and passing the chat to a person when needed. Done properly, it is consent-based, connected to your CRM and measured by response time, completed conversations and block rate.",
    takeaways: [
      "Compliant automation runs on the WhatsApp Business Platform, not on unofficial bulk-sending tools.",
      "Businesses need opt-in before sending messages to a customer on WhatsApp.",
      "Messages a business starts must use templates approved by Meta.",
      "When a customer messages you, a 24-hour window opens in which free-form replies are allowed.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses whose customers already enquire on WhatsApp" },
    { label: "Works alongside", value: "CRM, click-to-WhatsApp ads, email and AI agents" },
    { label: "Typical horizon", value: "Live in 4 to 8 weeks, subject to Meta verification and template review" },
    { label: "Measured in", value: "Response time, completed flows, booked meetings and block rate" },
  ],

  pillars: [
    {
      title: "Business Platform setup",
      body: "The Platform is an API, not an app, so it needs a Meta business account, a registered number and software to operate it. We handle the setup and help you choose a provider suited to your volume and systems.",
      items: ["Meta business portfolio and verification", "WhatsApp Business Account and number registration", "Display name and business profile", "Provider selection: direct Cloud API or a solution provider", "Number migration planning"],
    },
    {
      title: "Opt-in and consent",
      body: "Consent is a policy requirement and the best protection for your number. People who asked to hear from you rarely block you. We design opt-in that is clear about what they will receive, and record it.",
      items: ["Opt-in wording for forms and checkout", "Consent stored against the CRM record", "Preferences by message type", "Simple opt-out by reply", "Suppression lists honoured across tools"],
    },
    {
      title: "Message templates",
      body: "Any message you send outside an open conversation must use a template reviewed by Meta, in the marketing, utility or authentication category. We write templates that pass review and that people find useful.",
      items: ["Template copy in each language you serve", "Correct category for each use", "Variables, buttons and media headers", "Rejection handling and resubmission", "Frequency rules for marketing templates"],
    },
    {
      title: "Conversation flows and AI replies",
      body: "A flow is the scripted path a chat follows: greet, ask, answer, book. Menus and buttons suit predictable requests, and an AI assistant grounded in approved content can handle open questions within limits.",
      items: ["Enquiry and qualification flows", "Appointment booking and reminders", "Order and delivery updates", "Frequently asked questions", "Fallback when the message is not understood"],
      href: "/ai-agents/",
    },
    {
      title: "Human handover and team inbox",
      body: "Automation should know when to stop. We define the triggers for passing a chat to a person, and set up a shared inbox so the agent sees the whole conversation and the customer does not repeat themselves.",
      items: ["Handover triggers and keywords", "Shared inbox with assignment rules", "Working hours and out-of-hours messages", "Full history and summary for the agent", "Service-level targets for human replies"],
    },
    {
      title: "CRM integration and entry points",
      body: "A WhatsApp chat should create or update a CRM record like any other lead. We connect the Platform to your systems and to the places customers start a chat.",
      items: ["Contact and conversation sync with CRM", "Click-to-WhatsApp ads", "Website chat buttons and QR codes", "Source captured for each conversation", "Triggers from CRM stage changes"],
      href: "/marketing-automation/",
    },
  ],

  mechanics: {
    heading: "How does a business conversation on WhatsApp actually work?",
    intro: "WhatsApp is deliberately stricter than email. A business cannot message whoever it likes, whenever it likes. The Platform's rules follow a sequence, and automation has to be designed around it.",
    stages: [
      { name: "Opt-in", happens: "The customer agrees to receive messages from your business on WhatsApp.", we: "Build clear opt-in into forms, checkout and chat, and store it with the contact record." },
      { name: "Entry", happens: "The customer messages you first, or you send them an approved template.", we: "Create entry points such as ads, buttons and QR codes, and write templates that pass Meta review." },
      { name: "Window", happens: "A customer message opens a 24-hour customer service window for free-form replies.", we: "Make sure the first reply is immediate and useful, and plan template follow-ups for after the window closes." },
      { name: "Flow", happens: "Automation answers, asks qualifying questions and offers actions such as booking.", we: "Design short flows with buttons and plain language, connected to your CRM and calendar." },
      { name: "Handover", happens: "The chat is closed or passed to a person, and the customer's reaction affects your number's quality rating.", we: "Set handover rules, monitor blocks and reports, and adjust frequency before limits are affected." },
    ],
  },

  timeline: [
    { when: "Week 1", title: "Journey mapping", body: "We map where customers already use WhatsApp with you, which conversations repeat and which of them are safe and worthwhile to automate.", outputs: ["Conversation map", "Automation shortlist"] },
    { when: "Weeks 2 to 3", title: "Account and provider setup", body: "Business verification, number registration and provider onboarding. Timing here depends partly on Meta's review, which is outside anyone's control.", outputs: ["Verified account and number", "Provider and inbox configured"] },
    { when: "Weeks 3 to 5", title: "Templates, flows and consent", body: "Opt-in wording, message templates, conversation flows and handover rules are written, submitted for approval where required and tested end to end.", outputs: ["Approved message templates", "Tested conversation flows"] },
    { when: "Weeks 5 to 7", title: "Integration and staged launch", body: "CRM, website and ad entry points are connected. Volume is increased gradually so that messaging limits and quality rating develop without sudden spikes.", outputs: ["CRM integration", "Live flows with handover"] },
    { when: "Every month", title: "Quality and conversion review", body: "Response times, flow completion, handover reasons, opt-outs and blocks are reviewed. Templates and flows that underperform are rewritten or retired.", outputs: ["Performance and quality report", "Template and flow updates"] },
  ],

  comparison: {
    heading: "WhatsApp Business app or WhatsApp Business Platform: which do you need?",
    intro: "Meta offers two products for businesses, and they are easily confused. The app is a phone application for small teams. The Platform is an API for automation and scale.",
    columns: ["WhatsApp Business app", "WhatsApp Business Platform"],
    rows: [
      { label: "Built for", a: "Owners and very small teams", b: "Multiple agents and systems" },
      { label: "Automation", a: "Greetings, away messages, quick replies", b: "Flows, bots and integrations" },
      { label: "Outbound messages", a: "Manual sends and broadcast lists", b: "Approved templates to opted-in users" },
      { label: "CRM integration", a: "Limited", b: "Through the API" },
      { label: "Message charges", a: "None for standard chat", b: "Meta charges for templates, plus provider fees" },
      { label: "Setup", a: "Download and register", b: "Verification and provider onboarding" },
    ],
    verdict: "If one or two people can comfortably handle every chat, the app is enough. Once enquiries outgrow a single phone, or need to reach your CRM, the Platform is the appropriate and policy-compliant route.",
    link: { label: "See our marketing automation service", href: "/marketing-automation/" },
  },

  industries: ["real-estate", "education", "healthcare", "dental", "ecommerce", "hospitality"],
  markets: ["india", "uae", "singapore", "uk"],
  scenario: "multi-location-dental-group",

  faqs: [
    { q: "How much does WhatsApp automation cost?", a: "There are three parts: Meta's charges for template messages, which vary by category and country, any fee from the solution provider, and our design and build work. Meta revises its pricing from time to time, so we confirm current rates during scoping and quote after a growth audit." },
    { q: "How long does it take to set up the WhatsApp Business Platform?", a: "Commonly four to eight weeks from kickoff to live flows. Part of that is Meta's business verification and template review, which can be quick or can take longer if documents or templates need resubmitting. CRM integration is usually the other factor that sets the schedule." },
    { q: "Is WhatsApp marketing worth it for our business?", a: "It tends to be where your customers already use WhatsApp to enquire, and where a fast reply affects whether they buy. It is less useful where buyers prefer email or where you lack a real reason to message them. We check existing enquiry behaviour before recommending it." },
    { q: "What is the difference between the WhatsApp Business app and the API?", a: "The app runs on a phone and suits a small team answering by hand. The API, officially the WhatsApp Business Platform, has no interface of its own. It connects to software for automation, shared inboxes and CRM integration, and requires approved templates for messages you initiate." },
    { q: "Can we get banned for sending WhatsApp messages in bulk?", a: "Yes, if you message people who did not opt in or use unofficial tools that break WhatsApp's terms. Even on the official Platform, high block and report rates lower your quality rating and can restrict sending. Consent and relevance are the practical safeguards." },
    { q: "What is the 24-hour window on WhatsApp?", a: "When a customer messages your business, a customer service window opens for 24 hours from their latest message. Inside it you can reply with free-form messages. Outside it, you can only contact them with an approved template. Each new customer message restarts the window." },
    { q: "Can we keep our existing WhatsApp number?", a: "Usually, yes. An existing number can generally be moved to the Platform, but the options and their effect on your current app and chat history depend on the provider and on Meta's rules at the time. We check the migration route for your number before anything is changed." },
    { q: "What do you need from us to start?", a: "Admin access to your Meta business account, business documents for verification, the phone number you plan to use, CRM access and a list of the questions customers most often send. We also need to know who will answer chats that are handed to a person." },
    { q: "Is a WhatsApp chatbot allowed to send promotional messages whenever we like?", a: "No. Promotional messages need opt-in and an approved marketing template, and Meta limits how many marketing messages a person receives from businesses. Rules also vary by country. We plan frequency conservatively, because a blocked number costs more than a missed promotion." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "WhatsApp Automation on the Business Platform",
  metaDescription:
    "WhatsApp automation from SERPMOZ, built on the official Business Platform: opt-in, approved templates, conversation flows, CRM sync and human handover.",
};
