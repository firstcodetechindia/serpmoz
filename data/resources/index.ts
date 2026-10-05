import type { ResourceCategory } from "@/types";

/**
 * Editorial categories. Published pieces live in ./articles.ts.
 */
export const resourceCategories: ResourceCategory[] = [
  {
    slug: "ai-search",
    name: "AI Search",
    scope: "How generative answers select, cite and recommend brands, and what that changes for marketers.",
    questions: [
      "Which sources shape AI answers in a given category?",
      "How should visibility be measured when outputs vary between runs?",
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    scope: "Technical, content and authority practice for search as it works now.",
    questions: [
      "How do you size a search opportunity by commercial value?",
      "What should a technical audit prioritise first?",
    ],
  },
  {
    slug: "digital-growth",
    name: "Digital Growth",
    scope: "Strategy, planning and operating models for teams accountable for revenue.",
    questions: [
      "How should budget be split between capturing and creating demand?",
      "What does an AI-assisted marketing team actually look like?",
    ],
  },
  {
    slug: "paid-media",
    name: "Paid Media",
    scope: "Account structure, automation guardrails and creative testing across ad platforms.",
    questions: [
      "What should automated bidding be allowed to optimise for?",
      "How do you reconcile platform data with CRM outcomes?",
    ],
  },
  {
    slug: "cro",
    name: "CRO",
    scope: "Research methods, experiment design and landing page practice.",
    questions: [
      "What can low-traffic sites do instead of A/B testing?",
      "How do you stop tests being won by low-quality leads?",
    ],
  },
  {
    slug: "analytics",
    name: "Analytics",
    scope: "Measurement design, attribution and reporting that leadership can use.",
    questions: [
      "Which attribution questions are worth answering, and which are not?",
      "How do you build a revenue view from imperfect data?",
    ],
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    scope: "CRM, lifecycle messaging and AI agents in the lead-to-revenue process.",
    questions: [
      "Which parts of follow-up should never be automated?",
      "How do you design handover between AI agents and people?",
    ],
  },
  {
    slug: "industry-insights",
    name: "Industry Insights",
    scope: "How search and buying behaviour differ by sector, and what that means for planning.",
    questions: [
      "Where do buyers in regulated industries look for reassurance?",
      "How does local intent change the playbook?",
    ],
  },
];

export { articles, getArticle, readingTime, type Article } from "./articles";

export const resourceFormats = [
  {
    id: "insights",
    name: "Insights",
    body: "Short, argued pieces on a single question, written by the strategist closest to it.",
  },
  {
    id: "guides",
    name: "Guides",
    body: "Practical, step-by-step references for teams doing the work.",
  },
  {
    id: "reports",
    name: "Reports",
    body: "Original analysis with the method shown, so findings can be checked and reused.",
  },
] as const;
