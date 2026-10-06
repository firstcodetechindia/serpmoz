import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/finance/seo-services/
 * Rules: no client names, no figures, no guarantees, no claims about returns or
 * outcomes. Regulation is described in general terms only. Search examples are
 * phrasing patterns, not demand data.
 */
export const record: IndustryServiceRecord = {
  industry: "finance",
  service: "seo-services",
  slug: "seo-services",
  name: "SEO for Finance",
  audience: "lenders, insurers, advisers, wealth managers and fintech firms",

  seo: {
    title: "SEO for Financial Services: Trust and Accuracy",
    metaDescription:
      "SEO for financial services firms: expert-reviewed content, accurate product pages, calculators and compliance-aware publishing, measured by applications.",
    primaryKeyword: "SEO for financial services",
    secondaryKeywords: [
      "financial services SEO",
      "SEO for fintech",
      "SEO for banks",
      "SEO for insurance companies",
      "SEO for financial advisers",
      "SEO for lenders",
      "finance SEO agency",
    ],
    searchIntent:
      "A marketing head at a regulated financial firm looking for an SEO provider that can work with compliance and compete with comparison sites.",
  },

  hero: {
    title: "SEO for financial services, built on accuracy and trust",
    description:
      "Comparison sites and large brands hold the generic product searches, and search engines hold financial pages to a stricter standard than most. SEO for financial services earns visibility through named expertise, accurate product information, useful calculators and answers to the specific questions people ask before they apply.",
  },

  facts: [
    { label: "Best for", value: "Regulated firms whose customers research carefully before applying" },
    { label: "Works alongside", value: "Digital PR, paid search, conversion work and compliance review" },
    { label: "Typical horizon", value: "Usually several months; longer where large brands hold the terms" },
    { label: "Measured in", value: "Qualified applications and enquiries from organic search, by product" },
  ],

  answer: {
    question: "How does SEO work for financial services companies?",
    text: "SEO for financial services makes a regulated firm visible when people research a financial product or adviser. The work rests on demonstrable expertise: named, qualified authors, dated reviews, accurate product terms and required disclosures. Because comparison sites and big brands hold many generic terms, most of the opportunity lies in specific questions, calculators and explainers, and in being described correctly by AI assistants.",
  },

  buyers: {
    heading: "How people research a financial product",
    paragraphs: [
      "A financial search usually follows an event: a property purchase, a tax deadline or a new business. People begin with questions about how a product works, what it costs over time and whether they qualify. They use calculators early, before choosing a provider. Only later do they compare named products, and last of all search for a provider. A firm that appears only at the final step has left the trust-forming stages to others. Our [finance work](/industries/finance/) starts earlier.",
      "At the comparison stage, the generic product terms are mostly held by comparison platforms, large publishers and household brands. A smaller or newer firm rarely displaces them quickly. The long tail is different. Searches that combine a product with a situation, a profession, an amount, a term or a specific worry are numerous, less contested and closer to a decision. Winning them takes pages that answer one question completely, written by someone qualified to answer it.",
      "Trust is checked before any details are shared. People look for who wrote the page, whether the firm is authorised, when the information was last reviewed, and what others say about it. Many now ask an AI assistant to explain a product or compare options, and the assistant draws on pages it judges reliable. Out-of-date rates or vague terms damage both human and machine confidence. Plain, complete and current information tends to be what earns the application.",
    ],
  },

  problems: [
    {
      title: "Chasing generic terms held by giants",
      body: "The plan targets the broadest product searches, where comparison sites and national brands are entrenched. Months pass with little movement, while hundreds of specific, winnable questions go unanswered on the site.",
    },
    {
      title: "Anonymous or unreviewed financial guidance",
      body: "Articles carry no author, no qualification and no review date. Search systems that weigh expertise heavily for money topics have little reason to prefer them, and careful readers draw the same conclusion.",
    },
    {
      title: "Product pages that drift out of date",
      body: "Rates, fees or eligibility change in the product system and the website lags. Old figures persist in search snippets and AI answers, creating a compliance exposure as well as a loss of trust.",
    },
    {
      title: "Compliance brought in at the end",
      body: "Content is written, then sent for sign-off, then rewritten. Production slows to a crawl, writers learn to say nothing specific, and the published page is too cautious to answer the question searched.",
    },
    {
      title: "Calculators that search engines cannot read",
      body: "A useful tool sits on a page with no explanatory text, no worked example and a script-only interface. It attracts no searches of its own and passes visitors nowhere when they finish.",
    },
  ],

  approach: [
    {
      title: "Opportunity model beyond head terms",
      body: "We map demand by product, situation and stage, then score it by value and difficulty, using the same foundations as our [SEO services](/seo-services/). Generic terms held by comparison platforms are marked as long-term or left alone, and effort goes first to questions the firm can credibly win.",
    },
    {
      title: "Author and reviewer framework",
      body: "Every piece of guidance is tied to a named person with relevant qualifications, a reviewer where needed, and a visible review date. Author pages, credentials and regulatory status are marked up so search engines and readers can verify who stands behind the content.",
    },
    {
      title: "Product pages tied to source data",
      body: "Product pages state terms, costs, eligibility and risks in full, and are connected to an owner and an update process, so a change in terms reaches the site promptly. Superseded pages are redirected, and structured data is kept in step with the visible text.",
    },
    {
      title: "Calculators and explainers that rank",
      body: "Tools are given their own indexable pages with a plain explanation of the method, assumptions, a worked example and a clear next step. Explainers answer one question each, begin with the answer, and link to the relevant product without overstating what it does.",
    },
    {
      title: "Compliance built into the workflow",
      body: "Briefs are agreed with your compliance team before writing starts, with pre-approved wording for recurring disclosures and risk statements. Reviewers see changes marked clearly, with the reason. This shortens sign-off and lets pages be specific within the limits your advisers set.",
    },
    {
      title: "Authority and AI assistant visibility",
      body: "Financial credibility is partly earned elsewhere. We pursue coverage through [digital PR](/digital-pr/) based on the firm's own expertise and data, keep facts about the firm consistent across the web, and check how AI assistants describe its products so inaccuracies can be traced and corrected at source.",
    },
  ],

  searches: {
    heading: "Searches worth winning in financial services",
    intro:
      "Head terms matter less here than the many specific searches around them. The groups below show how such searches are typically phrased. They are illustrative patterns only, not measured demand.",
    groups: [
      {
        name: "Situation and eligibility questions",
        examples: ["product type + for + profession or situation", "can I get + product + with + circumstance", "product type + eligibility"],
        note: "Answer each on its own page, reviewed by a qualified person. State who qualifies in general terms, without implying approval for anyone.",
      },
      {
        name: "Calculator and cost searches",
        examples: ["product type + calculator", "how much + product + for + amount", "product type + charges explained"],
        note: "Give the tool an indexable page with assumptions stated. Present results as illustrations, and keep figures in line with current terms.",
      },
      {
        name: "Comparison and alternative searches",
        examples: ["product A versus product B", "provider name + alternatives", "product type + pros and cons"],
        note: "Explain differences fairly, including where your product is the weaker fit. Balanced comparison earns trust and is easier for assistants to cite.",
      },
      {
        name: "Brand and trust searches",
        examples: ["firm name + reviews", "is + firm name + regulated", "firm name + complaints"],
        note: "Make regulatory status, complaints routes and contact details easy to find. These searches come just before an application and should land on your own pages.",
      },
    ],
  },

  rules: [
    {
      title: "Financial promotions and approvals",
      body: "In many markets, content that invites people to take up a financial product counts as a promotion and needs approval before publication. Your own legal or compliance adviser should confirm what applies to you.",
    },
    {
      title: "Risk warnings and required disclosures",
      body: "Regulators commonly require risk statements, cost information and status disclosures to be shown with suitable prominence. We build these into templates, and the exact wording and placement should be confirmed by your compliance adviser.",
    },
    {
      title: "Claims, comparisons and testimonials",
      body: "Statements about performance, savings, approval likelihood or superiority over rivals are tightly controlled, and testimonials may be restricted. We avoid such claims by default. Check any exception with your legal or compliance adviser.",
    },
  ],

  measures: [
    "Qualified applications and enquiries from organic search, by product",
    "Completed applications that began on an organic landing page",
    "Visibility across the question groups chosen as priorities",
    "Calculator and explainer visits that continue to a product page",
    "How accurately AI assistants describe the firm's products",
  ],

  timeline: [
    {
      phase: "Audit and risk review",
      when: "Weeks 1 to 4, typically",
      body: "Technical crawl, content inventory and authority review, plus a check of every product page against current terms. Outdated or unattributed pages are listed with a named owner for each correction.",
    },
    {
      phase: "Framework and workflow",
      when: "Weeks 4 to 8, typically",
      body: "The opportunity model is agreed, the author and reviewer framework is set up, and the compliance workflow is defined with your team, including pre-approved wording for recurring disclosures and risk statements.",
    },
    {
      phase: "Publishing in cycles",
      when: "Month 3 onward, pace set by sign-off",
      body: "Product pages are corrected and attributed first. Explainers, calculators and question pages follow in regular batches, each reviewed and approved before going live, while outreach for credible coverage begins in parallel.",
    },
    {
      phase: "Review and maintenance",
      when: "Every month, with periodic full reviews",
      body: "Visibility, applications and AI descriptions are reviewed together. Pages are re-reviewed on a schedule and whenever terms change, since stale financial content loses position and trust. Priorities are then reset for the next cycle.",
    },
  ],

  faqs: [
    {
      q: "How long does SEO take for a financial services firm?",
      a: "It depends on the firm's existing authority, the products involved, and how fast compliance can approve content. Technical and accuracy fixes can show within weeks. Specific question pages often gain visibility over a few months. Generic product terms held by comparison sites and large brands can take much longer and may not be realistic at all.",
    },
    {
      q: "How much does SEO for financial services cost?",
      a: "The main drivers are the number of products and markets, the volume of content that needs qualified authorship and review, the condition of the existing site, the cost of building or repairing calculators, and how much sign-off time each page needs. We scope the work after a [growth audit](/growth-audit/) and explain the reasoning behind each part.",
    },
    {
      q: "Can a smaller firm compete with comparison sites?",
      a: "On the broadest product terms, rarely. On specific questions, yes, quite often, because a specialist firm can answer a narrow question with more authority than a general platform. Many firms also choose to appear on comparison sites while building direct demand, so that fewer customers arrive through an intermediary over time.",
    },
    {
      q: "Who should write our financial content?",
      a: "People with relevant qualifications, or writers working from their input with a qualified reviewer who signs off the final text. The author and reviewer should be named, with credentials and a review date shown. AI can help with research and drafts, though nothing should be published without expert review and your compliance approval.",
    },
    {
      q: "How do you keep product pages accurate when terms change?",
      a: "Each product page has a named owner, a link to the system or document that holds the current terms, and a trigger for update when those change. Old versions are redirected, structured data is refreshed, and we check search snippets afterwards. A scheduled review catches anything the trigger missed. Final accuracy remains the firm's responsibility.",
    },
    {
      q: "Will working with compliance slow everything down?",
      a: "It slows the first few pieces and speeds up the rest. Once briefs, templates and standard disclosures are agreed in advance, reviewers are checking exceptions instead of rereading everything. The slowest arrangement is the common one, where compliance sees content only when it is finished and has to send it back.",
    },
    {
      q: "Do AI assistants matter for financial research?",
      a: "Increasingly, yes. People ask assistants to explain products and compare options, and the answers are built from sources the system considers reliable. Clear, current, well-attributed pages are more likely to be used and quoted correctly. We structure content for direct answers through our [AEO services](/aeo-services/) and review how the firm is described.",
    },
  ],

  related: {
    services: ["content-seo", "digital-pr", "aeo-services", "cro"],
    locations: ["/locations/india/mumbai/", "/locations/uk/london/", "/locations/singapore/"],
    articles: ["measuring-ai-search-visibility", "sizing-search-opportunities-by-value"],
  },

  cta: {
    title: "Find the financial searches you can credibly win",
    body: "A growth audit reviews your product pages, authorship and authority, and separates the searches worth pursuing from those held by comparison sites. No promised positions.",
  },
};
