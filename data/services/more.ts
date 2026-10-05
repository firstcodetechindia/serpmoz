import type { Service } from "@/types";

type Base = Omit<Service, "why" | "process" | "deliverables" | "tools" | "audience" | "cta">;

/** Specialist service pages that sit under the eight core capabilities. */
export const moreServices: Base[] = [
  {
    slug: "google-ads",
    name: "Google Ads",
    title: "Google Ads managed to qualified demand",
    metaTitle: "Google Ads Management",
    metaDescription:
      "Google Ads management from SERPMOZ: search, shopping, Performance Max and YouTube structured around qualified leads, margin and offline conversion data.",
    category: "performance",
    summary: "Search, Shopping, Performance Max and YouTube run against qualified leads and margin.",
    intro:
      "Google Ads will spend whatever it is given and report success in its own terms. We structure accounts so that the system learns from the outcomes your business values, and so that automation works inside limits a specialist has set.",
    problems: [
      "Performance Max is running, and nobody can say what it is buying.",
      "Brand terms are flattering the account’s reported return.",
      "Conversions are counted at the form, not at the qualified lead.",
      "Search terms have not been reviewed in months.",
    ],
    scope: [
      { title: "Conversion architecture", body: "Primary and secondary conversions defined with sales, with offline imports so bidding learns from qualified outcomes." },
      { title: "Search", body: "Intent-based campaign structure, match-type strategy, negative keyword governance and ad copy testing." },
      { title: "Shopping and Performance Max", body: "Feed quality, asset groups, brand exclusions and reporting that shows where spend actually went." },
      { title: "YouTube and demand creation", body: "Video campaigns planned as demand creation and measured with the right expectations." },
      { title: "Reconciliation", body: "Monthly comparison of platform data with CRM outcomes, by campaign." },
    ],
    ai: ["Smart bidding within set targets", "Responsive ad and asset variation", "Search term clustering", "Budget pacing alerts"],
    experts: ["What counts as a conversion", "Where Performance Max is allowed to run", "Brand versus non-brand budget policy", "When to override the algorithm"],
    measures: ["Qualified leads by campaign", "Non-brand cost per qualified lead", "Return on ad spend by margin", "Search impression share on priority terms"],
    faqs: [
      { q: "Should we bid on our own brand name?", a: "Often yes, at a controlled level, and always reported separately so it does not disguise the performance of everything else." },
      { q: "Is Performance Max right for us?", a: "It can be, with good conversion data, a clean feed and brand exclusions. Without those it tends to buy the cheapest conversions available." },
      { q: "Who owns the account?", a: "You do. We work in your account so the history and data stay with you." },
    ],
    related: ["ppc-management", "cro", "meta-ads"],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    title: "Meta advertising that creates demand you can account for",
    metaTitle: "Meta Ads Management: Facebook & Instagram",
    metaDescription:
      "Meta Ads management for Facebook and Instagram: creative testing, audience strategy, Conversions API and measurement that connects paid social to revenue.",
    category: "performance",
    summary: "Facebook and Instagram campaigns built on creative testing and server-side measurement.",
    intro:
      "On Meta, the creative is the targeting. Audiences have broadened, signal has thinned and the accounts that perform are the ones with a steady supply of tested ideas and clean conversion data. We run both.",
    problems: [
      "Results fell after tracking changes and never recovered.",
      "The same three ads have been running for a year.",
      "Leads from instant forms are cheap and rarely answer the phone.",
      "Reported return does not match what the business sees.",
    ],
    scope: [
      { title: "Measurement", body: "Conversions API, event deduplication and qualified-lead feedback so optimisation has something reliable to learn from." },
      { title: "Creative system", body: "A testing cadence across concepts, formats and hooks, with clear rules for scaling and retiring ads." },
      { title: "Account structure", body: "Consolidated campaigns that give the algorithm volume, with exclusions and budget rules that protect efficiency." },
      { title: "Lead quality", body: "Form design, qualifying questions and instant follow-up to separate interest from intent." },
      { title: "Incrementality", body: "Holdout and geography tests where budget allows, to estimate what the spend truly adds." },
    ],
    ai: ["Creative variation and resizing", "Audience expansion within limits", "Comment and message triage", "Performance anomaly detection"],
    experts: ["Creative strategy and the offer", "What to test next and why", "Reading results past platform attribution", "Brand safety and policy compliance"],
    measures: ["Cost per qualified lead or new customer", "Creative win rate", "Blended acquisition cost", "Incremental revenue where tested"],
    faqs: [
      { q: "Do we need video?", a: "It helps, and it does not need to be expensive. Simple, clear creative made consistently usually beats one polished film." },
      { q: "Does Meta work for B2B?", a: "For some B2B offers, particularly with strong creative and a simple first step. We will say so if LinkedIn or search is the better use of the budget." },
      { q: "Can you produce the creative?", a: "Yes. Creative production and testing are part of the engagement." },
    ],
    related: ["ppc-management", "social-media-marketing", "cro"],
  },
  {
    slug: "linkedin-ads",
    name: "LinkedIn Ads",
    title: "LinkedIn advertising for accounts worth winning",
    metaTitle: "LinkedIn Ads Management for B2B",
    metaDescription:
      "LinkedIn Ads for B2B: account and role targeting, thought-leadership and conversation formats, and CRM-level reporting on pipeline influenced.",
    category: "performance",
    summary: "Account and role targeting with reporting on pipeline, for considered B2B sales.",
    intro:
      "LinkedIn is expensive per click and precise per account. It rewards advertisers who know exactly which companies and roles they want, have something worth saying to them and can measure influence on pipeline instead of counting leads.",
    problems: [
      "Cost per lead looks unaffordable next to other channels.",
      "Campaigns target job titles so broadly that sales rejects the leads.",
      "Gated content generates downloads and no conversations.",
      "There is no view of which target accounts have been reached.",
    ],
    scope: [
      { title: "Account and audience design", body: "Target account lists, role and seniority layers, and exclusions agreed with sales." },
      { title: "Message by stage", body: "Thought-leadership and document ads to build familiarity; conversion formats only once an account is engaged." },
      { title: "Creative and offers", body: "Ads written for the specific role, with offers that justify a senior person’s attention." },
      { title: "CRM integration", body: "Lead sync, account-level engagement and pipeline influence reported from your CRM." },
      { title: "Sales alignment", body: "Engaged-account lists passed to sales with context, so outreach lands warm." },
    ],
    ai: ["Account list enrichment", "Ad copy variation by role", "Engagement scoring", "Summaries for sales follow-up"],
    experts: ["Which accounts and roles matter", "The point of view worth promoting", "Budget split between reach and conversion", "Interpreting influence without overclaiming"],
    measures: ["Target accounts reached and engaged", "Pipeline influenced", "Cost per qualified opportunity", "Sales acceptance rate"],
    faqs: [
      { q: "Why is LinkedIn so expensive?", a: "Because the audience is narrow and valuable. Judged by cost per qualified opportunity in a considered sale, it is often competitive." },
      { q: "Should content be gated?", a: "Rarely at first contact. Ungated content that is actually read tends to produce better conversations later." },
      { q: "What budget makes sense?", a: "Enough to reach the target account list with meaningful frequency. We size it from the list, not from a round number." },
    ],
    related: ["ppc-management", "social-media-marketing", "marketing-automation"],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    title: "Content built from expertise, not from prompts",
    metaTitle: "Content Marketing & SEO Content",
    metaDescription:
      "Content marketing from SERPMOZ: strategy, expert interviews, SEO content and original research that earns rankings, AI citations and sales conversations.",
    category: "content-social",
    summary: "Strategy, expert-led production and original research that earns rankings and citations.",
    intro:
      "Anyone can now publish a competent article on any subject. What cannot be generated is first-hand knowledge: what your people have learned from doing the work. We build content programmes around extracting that, and use AI for everything around it.",
    problems: [
      "The blog is busy and the pipeline has not noticed.",
      "AI-assisted articles read like every competitor’s.",
      "Subject experts have no time to write.",
      "Nobody can say which content led to a customer.",
    ],
    scope: [
      { title: "Content strategy", body: "Topics chosen from search demand, sales conversations and the questions AI assistants are being asked in your category." },
      { title: "Expert capture", body: "Short interviews with your specialists, turned into articles, guides and video by our editors." },
      { title: "SEO content", body: "Pages structured to answer the query directly, with clear entities, sources and internal links." },
      { title: "Original research", body: "Surveys, data studies and benchmarks that give other publications a reason to cite you." },
      { title: "Maintenance", body: "A refresh schedule so that what already ranks keeps earning." },
    ],
    ai: ["Research synthesis and outlining", "Transcription and first drafts from interviews", "Repurposing into other formats", "Content decay detection"],
    experts: ["The argument each piece makes", "Accuracy and anything that could mislead", "Editorial voice", "What not to publish"],
    measures: ["Content-assisted leads", "Non-brand visibility on priority topics", "Citations and referring publications", "Share of content that earns traffic"],
    faqs: [
      { q: "How much content do we need?", a: "Less than most plans assume. A small number of pieces that are clearly the best answer outperforms a large number of adequate ones." },
      { q: "Do you use AI to write?", a: "For research, structure and drafts from interview transcripts. A human editor is responsible for every published word." },
      { q: "Can you work with our writers?", a: "Yes. We can provide strategy, briefs and editing around an in-house team." },
    ],
    related: ["social-media-marketing", "seo-services", "digital-pr"],
  },
  {
    slug: "digital-pr",
    name: "Digital PR",
    title: "Coverage that builds authority with people and with algorithms",
    metaTitle: "Digital PR & Authority Building",
    metaDescription:
      "Digital PR from SERPMOZ: data-led stories, expert commentary and relationships with relevant publications that earn coverage, links and AI citations.",
    category: "search-ai",
    summary: "Data-led stories and expert commentary that earn coverage, links and citations.",
    intro:
      "Search engines and AI assistants both lean on what credible third parties say about you. Digital PR is how that evidence is earned: by giving journalists and editors something worth publishing, not by buying placements.",
    problems: [
      "Competitors are cited in round-ups and AI answers where you are absent.",
      "Link building has meant directories and paid posts.",
      "There is expertise in the business that no journalist has heard of.",
      "PR and SEO are run separately and measure different things.",
    ],
    scope: [
      { title: "Story development", body: "Angles drawn from your data, your experts and what the press is already covering." },
      { title: "Original data", body: "Surveys and analyses designed to be quotable, with the method published." },
      { title: "Expert commentary", body: "Your specialists positioned as sources for the publications your buyers read." },
      { title: "Outreach", body: "Personal pitching to relevant journalists. No link schemes, no paid placements presented as editorial." },
      { title: "Measurement", body: "Coverage, referring domains, branded search and presence in AI answers tracked together." },
    ],
    ai: ["Media list research", "Trend and news monitoring", "Data analysis for stories", "Coverage tracking"],
    experts: ["What is actually newsworthy", "Relationships with journalists", "Accuracy of every claim made", "Reputation risk"],
    measures: ["Relevant coverage earned", "Referring domains from target publications", "Branded search demand", "Citation presence in AI answers"],
    faqs: [
      { q: "Do you guarantee a number of links?", a: "No. Guaranteed link counts are a sign the links are being bought. We commit to the campaigns and report honestly on what they earn." },
      { q: "How is this different from traditional PR?", a: "The craft is similar. The difference is that campaigns are designed and measured for search and AI visibility as well as awareness." },
      { q: "Do we need to have data?", a: "It helps, and most businesses have more than they realise. Where there is none, we can commission research." },
    ],
    related: ["content-marketing", "ai-seo-services", "seo-services"],
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    title: "Shopify stores engineered for search and conversion",
    metaTitle: "Shopify Development & Optimisation",
    metaDescription:
      "Shopify development from SERPMOZ: theme builds, migrations, speed, structured data and checkout optimisation, with SEO protected at every step.",
    category: "web-digital",
    summary: "Theme builds, migrations and optimisation with SEO and speed protected throughout.",
    intro:
      "Shopify makes it easy to launch a store and easy to slow one down. We build and maintain themes that stay fast as apps accumulate, keep collection architecture clean for search and remove friction between product page and paid order.",
    problems: [
      "Apps have piled up and the store has slowed.",
      "A migration to Shopify is planned and organic revenue is at risk.",
      "Collection and filter URLs are creating duplicate pages.",
      "Small theme changes depend on a developer every time.",
    ],
    scope: [
      { title: "Theme development", body: "Custom or adapted themes built on current Shopify architecture, with sections your team can edit." },
      { title: "Migration", body: "URL mapping, redirects, product data and metadata moved with parity checks before and after launch." },
      { title: "Performance", body: "App audit, script control and image handling against a Core Web Vitals budget." },
      { title: "Search foundations", body: "Collection structure, canonical rules, structured data and feed quality." },
      { title: "Conversion", body: "Product page, cart and checkout improvements informed by analytics and testing." },
    ],
    ai: ["Product data clean-up and enrichment", "Alt text and metadata drafts", "Automated regression checks", "Search and merchandising analysis"],
    experts: ["Theme architecture and app choices", "Migration planning", "What to build custom and what to buy", "Trade-offs between features and speed"],
    measures: ["Core Web Vitals", "Organic revenue retained after migration", "Conversion rate", "Checkout completion"],
    faqs: [
      { q: "Do you work with Shopify Plus?", a: "Yes, including checkout customisation and multi-store setups." },
      { q: "Can you take over an existing store?", a: "Yes. We start with an audit of theme, apps and tracking, then prioritise fixes by revenue impact." },
      { q: "Will a migration hurt our rankings?", a: "It carries risk, which is why redirect mapping and parity testing come first. Handled properly, visibility should be retained." },
    ],
    related: ["web-development", "ecommerce-seo", "cro"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    title: "WordPress sites that marketing can run without breaking",
    metaTitle: "WordPress Development",
    metaDescription:
      "WordPress development from SERPMOZ: custom themes, block-based editing, performance, security and SEO foundations for content-led business websites.",
    category: "web-digital",
    summary: "Custom, fast, secure WordPress builds with editing that marketing teams can own.",
    intro:
      "WordPress still powers a large share of business websites because it puts publishing in the hands of the people who need it. Its weaknesses, slow pages, plugin sprawl and security exposure, are consequences of how a site is built. We build it properly.",
    problems: [
      "The site depends on a page builder and dozens of plugins.",
      "Pages are slow and Core Web Vitals are failing.",
      "Updates are avoided because something breaks every time.",
      "Editors cannot create a new page without help.",
    ],
    scope: [
      { title: "Custom theme", body: "A lean, block-based theme built on your design system, without page-builder overhead." },
      { title: "Editorial experience", body: "Reusable blocks and patterns with guardrails, so new pages stay on brand." },
      { title: "Performance", body: "Caching, image handling and script control engineered for Core Web Vitals." },
      { title: "Security and maintenance", body: "Minimal plugins, managed updates, backups and monitoring." },
      { title: "SEO foundations", body: "Structured data, clean templates, redirects and migration support." },
    ],
    ai: ["Content migration and reformatting", "Automated accessibility and performance checks", "Code scaffolding and tests", "Image optimisation"],
    experts: ["Architecture and plugin decisions", "Design craft", "Security review", "Deciding when WordPress is the wrong tool"],
    measures: ["Core Web Vitals", "Time to publish a new page", "Organic visibility after launch", "Plugin count and update health"],
    faqs: [
      { q: "Is WordPress still a good choice?", a: "For content-led sites with editorial teams, often yes. For application-like experiences or extreme performance needs, we may recommend Next.js instead." },
      { q: "Can you rescue an existing site?", a: "Usually. We audit first and tell you plainly whether to repair or rebuild." },
      { q: "Do you offer headless WordPress?", a: "Yes, where the benefits justify the added complexity." },
    ],
    related: ["web-development", "seo-services", "cro"],
  },
];
