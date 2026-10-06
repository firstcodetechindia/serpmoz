import type { Service, ServiceMaster } from "@/types";

/**
 * /ai-agents/ : assistants that answer, qualify and book.
 * Rules: no client names, no result figures, no guarantees. Never claim an
 * agent is error-free: grounding and review reduce mistakes, they do not end them.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is an AI agent for marketing and sales?",
    text: "An AI agent for marketing and sales is a software assistant built on a large language model that holds a conversation with a prospect, answers questions from approved company information, asks qualifying questions and takes simple actions such as booking a meeting or creating a CRM record. A responsible agent discloses that it is automated, stays within a defined scope and hands the conversation to a person when it is unsure. It can make mistakes, so its conversations are reviewed.",
    takeaways: [
      "An AI agent generates replies, where a rule-based chatbot follows a fixed script.",
      "Grounding means the agent answers from your approved content, not from general knowledge.",
      "Language models can state wrong information confidently, so guardrails and review are essential.",
      "A person should always be reachable, and the agent should say that it is AI.",
    ],
  },

  facts: [
    { label: "Best for", value: "High enquiry volume with repetitive pre-sales questions" },
    { label: "Works alongside", value: "CRM, WhatsApp, website chat, calendars and sales teams" },
    { label: "Typical horizon", value: "Pilot in 4 to 8 weeks; wider scope only as accuracy is shown" },
    { label: "Measured in", value: "Reviewed accuracy, qualified meetings booked and handover rate" },
  ],

  pillars: [
    {
      title: "Use-case selection",
      body: "Not every conversation should be given to an agent. We look for tasks that are frequent, well documented and low in consequence if handled imperfectly, and we rule out the ones that are not.",
      items: ["Enquiry volume and topic analysis", "Risk rating for each task", "Tasks reserved for people", "Success criteria agreed before build", "A narrow first scope"],
    },
    {
      title: "Knowledge and grounding",
      body: "An agent is only as accurate as what it is given to read. We assemble approved content into a structured knowledge base and instruct the agent to answer from it, and to say so when the answer is not there.",
      items: ["Approved source documents and FAQs", "Content structured for retrieval", "Named owner for each topic", "Update process when facts change", "Answers that cite their source"],
    },
    {
      title: "Guardrails and disclosure",
      body: "Guardrails define what the agent must not do. They cover topics it will not discuss, commitments it cannot make and the wording it uses to tell people they are talking to AI.",
      items: ["Clear AI disclosure at the start", "Prohibited topics and claims", "No pricing or commitments beyond approved text", "Handling of personal and sensitive data", "Resistance testing against misuse"],
    },
    {
      title: "Website and WhatsApp deployment",
      body: "The agent should be available where enquiries already arrive. On WhatsApp that means the official Business Platform, with its consent and template rules respected.",
      items: ["Website chat widget", "WhatsApp Business Platform channel", "Consistent behaviour across channels", "Out-of-hours coverage", "Language support where content exists"],
      href: "/whatsapp-automation/",
    },
    {
      title: "CRM, calendar and handover",
      body: "An answer is useful; a booked meeting with context is more useful. We connect the agent to your systems with the minimum permissions it needs, and define how a chat reaches a person.",
      items: ["Lead creation and updates in the CRM", "Calendar availability and booking", "Qualification answers saved to the record", "Handover triggers and routing", "Conversation summary for the salesperson"],
      href: "/marketing-automation/",
    },
    {
      title: "Review and evaluation",
      body: "Deployment is the start of the work. Conversations are sampled and scored, errors are traced to their cause and the knowledge base or instructions are corrected.",
      items: ["Test set of real questions before launch", "Regular sampled conversation review", "Accuracy and tone scoring", "Error log with root cause", "Re-testing after every change"],
    },
  ],

  mechanics: {
    heading: "How does an AI agent decide what to say?",
    intro: "An agent does not look answers up the way a database does. It generates text, guided by instructions and whatever information it is shown. Understanding the five steps explains both what it does well and where it can go wrong.",
    stages: [
      { name: "Receive", happens: "The agent reads the visitor's message together with the conversation so far.", we: "Open with a clear disclosure and a short statement of what the agent can help with." },
      { name: "Retrieve", happens: "It searches the knowledge base for passages relevant to the question.", we: "Structure and maintain approved content so the right passage is found, and gaps are visible." },
      { name: "Generate", happens: "The language model writes a reply from its instructions and the retrieved passages.", we: "Instruct it to answer only from supplied content and to admit when it does not know." },
      { name: "Act", happens: "Where permitted, it calls a tool: check a calendar, book a slot or update the CRM.", we: "Limit tools to low-risk actions with narrow permissions, and confirm details with the visitor first." },
      { name: "Escalate", happens: "If the request is out of scope, sensitive or unclear, the conversation passes to a person.", we: "Define escalation triggers, route to the right team and pass on a summary of the chat." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Use-case assessment", body: "We analyse the enquiries you receive, rate candidate tasks for value and risk, and agree a narrow first scope with measurable success criteria.", outputs: ["Use-case assessment", "Scope and success criteria"] },
    { when: "Weeks 2 to 4", title: "Knowledge base and guardrails", body: "Approved content is gathered, gaps are filled by your subject experts, and the rules for what the agent may and may not say are written down.", outputs: ["Structured knowledge base", "Guardrail and escalation rules"] },
    { when: "Weeks 4 to 6", title: "Build and internal testing", body: "The agent is configured and connected to your CRM and calendar, then tested against a set of real and deliberately awkward questions.", outputs: ["Configured agent with integrations", "Test results and fixes"] },
    { when: "Weeks 6 to 8", title: "Limited pilot", body: "The agent goes live on one channel or a share of traffic. Every conversation is reviewed during this period, and errors are corrected at source.", outputs: ["Pilot deployment", "Reviewed conversation log"] },
    { when: "Every month", title: "Review and controlled expansion", body: "Sampled conversations are scored and the knowledge base updated. Scope is widened only where reviewed accuracy supports it.", outputs: ["Quality report", "Knowledge and scope updates"] },
  ],

  comparison: {
    heading: "AI agent or rule-based chatbot: which is right for your enquiries?",
    intro: "Both automate conversations, by very different means. A rule-based chatbot follows a decision tree somebody wrote. An AI agent composes its replies, which makes it more flexible and less predictable.",
    columns: ["AI agent", "Rule-based chatbot"],
    rows: [
      { label: "How it replies", a: "Generates text from your content", b: "Follows scripted paths" },
      { label: "Open questions", a: "Handles varied phrasing", b: "Only what was anticipated" },
      { label: "Predictability", a: "Lower; needs guardrails", b: "High; says only scripted text" },
      { label: "Error type", a: "Can state something wrong", b: "Gets stuck or misroutes" },
      { label: "Upkeep", a: "Knowledge and review", b: "Rewriting flows" },
      { label: "Best use", a: "Varied pre-sales questions", b: "Fixed, regulated or transactional steps" },
    ],
    verdict: "Choose rules where the wording must never vary, such as regulated statements or payment steps, and an AI agent where questions are too varied to script. Many good builds combine them: fixed flows for the critical steps and an agent for everything around them.",
    link: { label: "See our WhatsApp automation service", href: "/whatsapp-automation/" },
  },

  industries: ["real-estate", "education", "saas", "home-services", "hospitality", "healthcare"],
  markets: ["usa", "uk", "india", "uae"],

  faqs: [
    { q: "How much does an AI agent cost to build?", a: "Cost depends on the number of tasks, the condition of your existing content, the channels and the integrations required. There are also ongoing model usage and review costs. We scope and price the work after a growth audit, and do not publish a fixed fee." },
    { q: "How long does it take to deploy an AI agent?", a: "A narrow pilot is commonly live within one to two months. Most of that time goes on preparing accurate content and testing, not on the technology. Widening the scope afterwards is gradual, and depends on how the agent performs in reviewed conversations." },
    { q: "Are AI agents worth it for a small business?", a: "They can be if you receive enough repetitive enquiries that replies are slow or missed, particularly out of hours. If enquiries are few, or each one is complicated, a person with good templates is usually the better answer. We check volume and topics before recommending a build." },
    { q: "What is the difference between an AI agent and a chatbot?", a: "A traditional chatbot follows a fixed decision tree and can only handle what its author anticipated. An AI agent uses a language model to understand varied questions, compose answers from your content and take actions through connected tools. It is more flexible and needs more supervision." },
    { q: "Can an AI agent give wrong answers?", a: "Yes. Language models can produce confident statements that are incorrect or unsupported. Grounding in approved content, a narrow scope, guardrails and regular review reduce how often this happens, but nothing removes it completely. That is why high-stakes topics are routed to a person." },
    { q: "Do we have to tell people they are talking to AI?", a: "We always do. It is honest, customers respond better when they know, and some jurisdictions and platforms require it. The agent introduces itself as automated at the start and offers a route to a person at any point in the conversation." },
    { q: "What do you need from us to start?", a: "A sample of real enquiries, your approved product, service and policy content, and access to the CRM, calendar and chat channels. We also need a named person who can confirm facts, and agreement on which team receives conversations the agent hands over." },
    { q: "How do you measure whether an AI agent is working?", a: "We score a sample of conversations for accuracy and appropriateness, and track response time, handover rate, qualified meetings booked and what sales says about lead quality. A high share of chats resolved without a person is only good if the answers were correct." },
    { q: "Is our customer data safe with an AI agent?", a: "It depends on how the agent is built, so we design for it. We limit what the agent collects and can access, review the data terms of the model and tools used, and avoid sensitive categories unless there is a clear, lawful basis. Your own legal review should confirm the setup." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "AI Agents for Sales Enquiries & Lead Booking",
  metaDescription:
    "AI agents from SERPMOZ answer enquiries, qualify leads and book meetings from approved content, with guardrails, clear AI disclosure and human handover.",
};
