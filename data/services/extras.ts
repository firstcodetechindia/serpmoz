import type { Service } from "@/types";

type Extra = Pick<Service, "why" | "process" | "deliverables" | "tools" | "audience"> & Partial<Pick<Service, "title" | "cta">>;

const p = (...steps: [string, string][]) => steps.map(([title, body]) => ({ title, body }));

/**
 * The second half of each established service page: why it matters, the
 * process, deliverables, tools and audience. Kept beside the core entries so
 * each page stays editable as one record once a CMS is connected.
 */
export const serviceExtras: Record<string, Extra> = {
  "seo-services": {
    title: "SEO That Builds Sustainable Search Growth",
    cta: "Get Your SEO Growth Audit",
    why: "Organic search is the one acquisition channel that compounds. A page that earns its position keeps producing enquiries without a media bill, and the technical and content foundations that make that possible also raise the performance of paid search, AI visibility and conversion.",
    process: p(
      ["Audit", "Technical crawl, content inventory, authority profile and a review of how organic currently contributes to leads."],
      ["Opportunity model", "Demand grouped by intent and scored for value and effort, with a line drawn under what we will not pursue."],
      ["Roadmap", "A 90-day plan sequencing technical fixes, on-page work, content and authority."],
      ["Execution", "Tickets for developers, briefs for writers, internal linking and outreach, shipped in fortnightly cycles."],
      ["Review", "Monthly reading of visibility, leads and revenue, with the plan adjusted on evidence."],
    ),
    deliverables: ["Technical SEO audit with prioritised tickets", "Search opportunity model and keyword strategy", "On-page and internal linking recommendations", "Content briefs and editorial calendar", "Authority and digital PR plan", "Monthly performance report tied to leads"],
    tools: ["Google Search Console", "GA4", "Screaming Frog", "Ahrefs or Semrush", "Looker Studio", "PageSpeed Insights"],
    audience: ["Businesses whose organic traffic is not turning into enquiries", "Teams that have outgrown checklist SEO", "Companies planning a redesign or migration", "Brands entering a more competitive market"],
  },
  "local-seo-services": {
    why: "For a business with physical locations or service areas, most high-intent demand never reaches the website. It is decided in the map results, on the profile and in the reviews. Local SEO is the work of winning that decision, branch by branch.",
    process: p(
      ["Footprint audit", "Every profile, listing and location page checked for accuracy, completeness and duplication."],
      ["Foundations", "Google Business Profile, NAP consistency and local schema brought to one standard."],
      ["Relevance", "Categories, services, location content and local links aligned to what each branch should be found for."],
      ["Reputation", "A compliant routine for requesting, monitoring and answering reviews."],
      ["Tracking", "Grid-based ranking, calls and bookings reported by location."],
    ),
    deliverables: ["Local SEO audit by location", "Google Business Profile optimisation", "Citation and NAP clean-up", "Local landing pages with real local content", "Local business schema", "Review management process", "Location-level reporting"],
    tools: ["Google Business Profile", "Google Maps", "BrightLocal or Local Falcon", "Google Search Console", "Call tracking", "GA4"],
    audience: ["Multi-location retailers, clinics and franchises", "Service-area businesses", "Single-location businesses in competitive cities", "Brands opening new branches"],
  },
  "ecommerce-seo": {
    why: "In ecommerce, search architecture is revenue architecture. How categories, filters and products are structured decides which pages can rank, which are wasted and how much of your catalogue search engines ever see.",
    process: p(
      ["Catalogue audit", "Indexation, faceted navigation, duplication and template quality across the whole store."],
      ["Architecture", "Category taxonomy and rules for which filtered pages deserve to exist in search."],
      ["Templates", "Product and category templates rebuilt for content, schema and internal linking."],
      ["Content", "Category copy, buying guides and product content prioritised by margin."],
      ["Measure", "Organic revenue by category, with conversion tracked alongside rankings."],
    ),
    deliverables: ["Ecommerce technical audit", "Faceted navigation and indexation rules", "Category and product template specifications", "Product and offer schema", "Internal linking plan", "Category and product content", "Merchant feed review"],
    tools: ["Shopify", "WooCommerce", "Magento / Adobe Commerce", "BigCommerce", "Google Merchant Center", "Google Search Console", "GA4"],
    audience: ["Stores with large or fast-changing catalogues", "Brands dependent on paid search for most revenue", "Retailers planning a replatform", "Marketplaces and multi-brand stores"],
  },
  "international-seo": {
    why: "Search engines need to be told, precisely, which page is for which country and language. When that signal is wrong or missing, the wrong version ranks, authority is split between duplicates and local competitors win by default.",
    process: p(
      ["Market selection", "Demand, competition and operational readiness assessed for each candidate market."],
      ["Architecture", "Domain structure, hreflang and canonical logic specified and tested."],
      ["Research", "Keyword research in each language by native specialists, not translated from English."],
      ["Localisation", "Content adapted for local search behaviour, pricing, units and proof."],
      ["Authority", "Coverage and links from publications that matter in each country."],
    ),
    deliverables: ["Market prioritisation report", "International site architecture specification", "Hreflang implementation and validation", "Per-market keyword research", "Localisation guidelines and reviewed content", "International link strategy", "Reporting by country and language"],
    tools: ["Google Search Console (per property)", "Hreflang validators", "Ahrefs or Semrush", "GA4", "Translation management systems"],
    audience: ["Companies expanding into new countries", "Exporters and cross-border ecommerce", "SaaS companies localising product and site", "Brands whose wrong country version ranks"],
  },
  "enterprise-seo": {
    why: "On a large site, a template decision affects hundreds of thousands of URLs and a release can undo a year of work in an afternoon. Enterprise SEO is as much governance and stakeholder management as it is optimisation.",
    process: p(
      ["Discovery", "Stakeholders, release process, tech stack and existing roadmap mapped before any audit."],
      ["Sizing", "Each initiative given an expected impact, confidence and engineering effort."],
      ["Governance", "Standards, pre-release checks and monitoring agreed with engineering."],
      ["Delivery", "Work managed through your ticketing system with acceptance criteria."],
      ["Reporting", "Executive view in pipeline terms, with shipped work linked to outcomes."],
    ),
    deliverables: ["Opportunity sizing and business cases", "Template-level technical specifications", "SEO governance standards and QA checklist", "Automated monitoring and alerting", "Programme roadmap", "Internal enablement sessions", "Executive reporting"],
    tools: ["Enterprise crawlers (Lumar, Botify, Screaming Frog)", "Log file analysis", "BigQuery", "Jira", "Looker Studio", "Google Search Console API"],
    audience: ["Sites with very large URL counts", "Organisations with several teams touching the website", "Regulated industries with long approval chains", "Multi-brand and multi-market groups"],
  },
  "ppc-management": {
    why: "Paid media is the fastest way to reach buyers and the fastest way to waste a budget. The difference is rarely the platform. It is the strategy behind the account: what is being optimised for, who is being reached and where they land.",
    process: p(
      ["Strategy", "Goals, unit economics and the role of each channel agreed before any campaign is built."],
      ["Architecture", "Campaign structure, audiences and exclusions designed around intent and margin."],
      ["Creative and landing pages", "Messages and pages built for each audience and tested continuously."],
      ["Tracking", "Conversion tracking that reports qualified outcomes back to the platforms."],
      ["Optimisation", "Weekly account work and monthly reconciliation against CRM data."],
    ),
    deliverables: ["Paid media strategy and channel plan", "Account and campaign architecture", "Audience and keyword plan", "Ad creative and copy testing plan", "Landing page recommendations", "Conversion tracking setup", "Reporting on CAC and ROAS"],
    tools: ["Google Ads", "Microsoft Advertising", "Meta Ads Manager", "LinkedIn Campaign Manager", "GA4", "Google Tag Manager", "CRM integrations"],
    audience: ["Businesses spending on ads without clear return", "Teams scaling budget into new channels", "B2B companies with long sales cycles", "Ecommerce brands managing margin"],
  },
  "social-media-marketing": {
    why: "Social platforms are where buyers form impressions long before they search. Managed with a strategy, they build familiarity, distribute expertise and feed every other channel. Managed as a posting schedule, they consume time and prove nothing.",
    process: p(
      ["Strategy", "Audience, platform roles, narrative and what success means for the business."],
      ["Content", "A system for producing platform-native content from a shared set of ideas."],
      ["Creative", "Design and video formats built for each platform’s behaviour."],
      ["Distribution and community", "Publishing, employee advocacy, replies and conversations."],
      ["Amplification and analytics", "Paid support for what works, and reporting on business impact."],
    ),
    deliverables: ["Social media strategy", "Content pillars and monthly calendar", "Platform-native creative and video", "Community management guidelines", "Paid amplification plan", "Monthly analytics report"],
    tools: ["LinkedIn", "Instagram", "YouTube", "Facebook", "X where the audience is active", "Scheduling and social listening tools", "GA4"],
    audience: ["B2B companies building authority", "Consumer brands that rely on visual discovery", "Founders and leadership teams", "Businesses whose social effort has no measurable result"],
  },
  cro: {
    why: "Every channel pays for the same visit. Conversion rate decides what that visit is worth. Raising it lowers acquisition cost across search, paid and social at once, which is why it is usually the highest-return work available.",
    process: p(
      ["Measure", "Analytics and funnels verified so the numbers can be trusted."],
      ["Research", "Recordings, form analytics, surveys and sales feedback to find the real objections."],
      ["Hypothesise", "A ranked backlog of changes with a reason for each."],
      ["Test or ship", "A/B tests where traffic allows; measured before-and-after changes where it does not."],
      ["Learn", "Results recorded and fed into the next cycle and into ad and SEO messaging."],
    ),
    deliverables: ["Analytics and tracking audit", "Conversion research report", "Prioritised test backlog", "Landing page and form designs", "A/B test setup and analysis", "Messaging recommendations", "Experiment log"],
    tools: ["GA4", "Microsoft Clarity or Hotjar", "VWO or Optimizely", "Google Tag Manager", "Form analytics", "Survey tools"],
    audience: ["Sites with healthy traffic and flat enquiries", "Teams spending heavily on paid acquisition", "Ecommerce stores with checkout drop-off", "Businesses redesigning on opinion"],
  },
  "marketing-automation": {
    why: "Most leads are lost after they arrive: answered late, followed up once or handed to sales without context. Automation closes that gap, so that speed and relevance do not depend on someone remembering.",
    process: p(
      ["Map", "The current journey from first enquiry to sale, including where leads stall."],
      ["Design", "Stages, segments, scoring and the messages each stage needs."],
      ["Build", "CRM, forms, email, WhatsApp and routing connected and tested."],
      ["Launch", "Workflows released in stages with monitoring for errors and deliverability."],
      ["Report", "Response time, conversion by stage and revenue fed back to marketing."],
    ),
    deliverables: ["Lead journey map", "CRM configuration and pipeline design", "Segmentation and lead scoring model", "Email and WhatsApp workflows", "AI-assisted follow-up sequences", "Lead routing rules", "Closed-loop reporting"],
    tools: ["HubSpot", "Zoho CRM", "Salesforce", "WhatsApp Business Platform", "Email service providers", "Zapier, Make or n8n"],
    audience: ["Teams responding to leads manually", "Businesses with a CRM nobody trusts", "Companies with long consideration cycles", "High-volume lead generators"],
  },
  "web-development": {
    why: "A website is the destination for every other channel, and the one asset you fully control. If it is slow, hard to change or built without search in mind, every campaign that points to it underperforms.",
    process: p(
      ["Discover", "Goals, audiences, content and technical requirements agreed."],
      ["Architecture", "Sitemap, URL structure and templates planned from search demand and user journeys."],
      ["Design", "A design system and page designs in your brand."],
      ["Build", "Development with performance, accessibility and SEO acceptance criteria."],
      ["Launch and improve", "Migration, monitoring and continuous optimisation."],
    ),
    deliverables: ["Information architecture and sitemap", "UI/UX design and design system", "Responsive front-end build", "CMS setup and editor training", "Technical SEO and schema", "Performance optimisation", "Redirect map and launch plan"],
    tools: ["Next.js", "WordPress", "Shopify", "Webflow", "Figma", "Vercel", "Core Web Vitals tooling"],
    audience: ["Businesses relaunching an outdated site", "Marketing teams blocked by developers", "Companies replatforming", "Brands that need a faster, more credible site"],
  },
  "google-ads": {
    why: "Google Ads reaches people at the moment they are looking. That makes it the most direct paid channel available, and the most sensitive to how conversions are defined.",
    process: p(
      ["Audit", "Account structure, search terms, conversion setup and wasted spend."],
      ["Rebuild", "Campaigns restructured around intent, with brand separated."],
      ["Feed the algorithm", "Offline conversions and values imported so bidding learns from quality."],
      ["Test", "Ads, assets and landing pages on a fixed cadence."],
      ["Reconcile", "Platform data compared with CRM outcomes monthly."],
    ),
    deliverables: ["Google Ads account audit", "Campaign and keyword architecture", "Conversion and offline import setup", "Ad copy and asset library", "Negative keyword governance", "Performance Max guardrails", "Monthly reconciliation report"],
    tools: ["Google Ads", "Google Merchant Center", "GA4", "Google Tag Manager", "Looker Studio", "CRM offline conversion imports"],
    audience: ["Lead-generation businesses", "Ecommerce stores", "Local service providers", "Advertisers unhappy with Performance Max"],
  },
  "meta-ads": {
    why: "Meta reaches people who are not searching yet. It creates demand that search later captures, and for many consumer categories it is the largest source of new customers.",
    process: p(
      ["Measurement first", "Conversions API and qualified-lead feedback in place before scaling."],
      ["Creative strategy", "Concepts built around customer motivations and objections."],
      ["Structure", "Simplified campaigns that give delivery enough signal."],
      ["Test and scale", "Weekly creative testing with rules for scaling winners."],
      ["Validate", "Blended results and incrementality checked outside the platform."],
    ),
    deliverables: ["Meta account audit", "Conversions API setup", "Creative strategy and testing plan", "Ad creative and video production", "Audience and exclusion plan", "Lead form design", "Blended performance reporting"],
    tools: ["Meta Ads Manager", "Meta Conversions API", "Instagram", "Facebook", "GA4", "Creative production tools"],
    audience: ["D2C and ecommerce brands", "Local and regional consumer services", "Education, real estate and lifestyle categories", "Brands with stalled creative"],
  },
  "linkedin-ads": {
    why: "For considered B2B purchases, the buyer is a small group of people in a known set of companies. LinkedIn is the only major platform that lets you reach exactly them.",
    process: p(
      ["Define the audience", "Target accounts, roles and seniority agreed with sales."],
      ["Plan by stage", "Awareness, engagement and conversion campaigns with separate goals."],
      ["Create", "Role-specific ads and offers worth a senior person’s time."],
      ["Connect", "CRM sync and account-level engagement tracking."],
      ["Hand over", "Engaged accounts passed to sales with context."],
    ),
    deliverables: ["Target account and audience definition", "Campaign plan by funnel stage", "Thought-leadership and document ads", "Lead gen forms and offers", "CRM integration", "Pipeline influence reporting"],
    tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "CRM integrations", "Sales Navigator", "GA4"],
    audience: ["B2B SaaS and technology companies", "Professional and financial services", "Companies running account-based marketing", "Recruiters and education providers"],
  },
  "content-marketing": {
    why: "Content is how a company proves it understands the buyer’s problem before a conversation happens. It is also the raw material for search rankings, AI citations, social distribution and sales enablement.",
    process: p(
      ["Strategy", "Audience, topics and narrative drawn from search data and sales conversations."],
      ["Capture", "Interviews with your experts to gather what only they know."],
      ["Produce", "AI-assisted drafting, human editing and fact-checking."],
      ["Distribute", "Publication, internal linking, social and email."],
      ["Maintain", "Refresh cycles for content that already performs."],
    ),
    deliverables: ["Content strategy and topic map", "Editorial calendar", "SEO content and blog articles", "Thought-leadership pieces", "Landing page and industry content", "Original research", "Content performance reporting"],
    tools: ["Google Search Console", "Ahrefs or Semrush", "AI writing and research assistants", "CMS of your choice", "GA4"],
    audience: ["Companies with expertise that is not visible online", "Teams producing content without results", "B2B firms with complex products", "Brands building topical authority"],
  },
  "digital-pr": {
    why: "Authority is conferred by others. Coverage in publications your buyers trust is what search engines and AI systems read as evidence that a brand is worth recommending.",
    process: p(
      ["Find the story", "Data, expertise and news hooks that are worth a journalist’s time."],
      ["Build the asset", "Research, analysis or commentary with the method shown."],
      ["Pitch", "Personal outreach to relevant journalists and editors."],
      ["Amplify", "Coverage reused across site, social and sales material."],
      ["Measure", "Coverage, links, branded search and citation presence."],
    ),
    deliverables: ["Digital PR strategy", "Data-led campaign assets", "Expert commentary programme", "Media list and outreach", "Coverage and link reporting", "Citation tracking in AI answers"],
    tools: ["Media databases", "Journalist request services", "Ahrefs", "Google Trends", "Survey and data tools"],
    audience: ["Brands outranked by better-known competitors", "Companies with proprietary data", "Founders and experts with a point of view", "Businesses absent from AI answers"],
  },
  "shopify-development": {
    why: "Shopify lets a brand sell quickly, and the store’s theme, apps and structure then decide how fast it loads, how well it ranks and how many visitors complete checkout.",
    process: p(
      ["Audit", "Theme, apps, speed, tracking and SEO reviewed."],
      ["Plan", "What to build custom, what to buy and what to remove."],
      ["Build", "Theme development with editable sections and a performance budget."],
      ["Migrate", "Redirects, product data and parity checks where replatforming."],
      ["Optimise", "Conversion and speed improvements after launch."],
    ),
    deliverables: ["Shopify store audit", "Custom or adapted theme", "App rationalisation plan", "Migration and redirect map", "Structured data and SEO setup", "Checkout and product page improvements"],
    tools: ["Shopify and Shopify Plus", "Liquid", "Shopify Functions", "Hydrogen where headless is justified", "Google Merchant Center", "Klaviyo"],
    audience: ["D2C brands outgrowing a starter theme", "Retailers migrating to Shopify", "Stores slowed by apps", "Shopify Plus merchants"],
  },
  "wordpress-development": {
    why: "WordPress gives marketing teams independence. Built carelessly it also gives them slow pages and security worries. The build quality decides which of those you live with.",
    process: p(
      ["Audit or discover", "Existing site reviewed, or requirements gathered."],
      ["Design system", "Blocks and patterns defined from your brand."],
      ["Build", "A lean custom theme without page-builder weight."],
      ["Harden", "Security, caching, backups and update process."],
      ["Train", "Editors shown how to build pages safely."],
    ),
    deliverables: ["Custom block-based theme", "Reusable block and pattern library", "Performance and caching setup", "Security hardening", "SEO foundations and schema", "Editor training", "Maintenance plan"],
    tools: ["WordPress", "Block editor", "Advanced Custom Fields", "WP Engine or Kinsta", "Cloudflare", "Yoast or Rank Math"],
    audience: ["Content-led businesses", "Publishers and education providers", "Marketing teams that publish often", "Sites weighed down by page builders"],
  },
};
