import type { Service } from "@/types";
import { moreServices } from "./more";

/**
 * Core service pages. Each entry renders at /{slug}/.
 * Copy rules: no invented figures, no client names, no guarantees.
 * "measures" lists what we track – not results we claim.
 */
const coreServices: Service[] = [
  {
    slug: "seo-services",
    name: "SEO & Search",
    title: "SEO that is planned around revenue, not rankings",
    metaTitle: "SEO Services",
    metaDescription:
      "Expert-led SEO from SERPMOZ: technical foundations, search intent, content and authority, prioritised by commercial value and measured against leads and revenue.",
    category: "search-ai",
    summary:
      "Technical, content and authority work prioritised by commercial value and measured against pipeline.",
    intro:
      "Most SEO programmes report on positions and traffic. We start from the other end: which searches lead to customers, what is stopping you from winning them, and what order the work should happen in. AI speeds up the research and production. Our strategists decide what is worth doing.",
    problems: [
      "Traffic is growing but enquiries and sales are not following.",
      "Reports list hundreds of keywords with no view of which ones matter commercially.",
      "Technical issues are known but never prioritised or shipped.",
      "Competitors with weaker products keep outranking you for buying-intent searches.",
    ],
    scope: [
      {
        title: "Search opportunity model",
        body: "We map demand by intent and commercial value, then size each opportunity against the effort needed to win it. You get a ranked list of strategic search opportunities instead of a keyword spreadsheet.",
      },
      {
        title: "Technical SEO",
        body: "Crawlability, indexation, rendering, site architecture, internal linking, structured data and Core Web Vitals. Findings arrive as tickets your developers can act on, ordered by impact.",
      },
      {
        title: "Content built on intent",
        body: "Briefs written by strategists, drafts accelerated with AI, edits and fact-checks by subject specialists. Every page has a job in the buying journey.",
      },
      {
        title: "Authority and digital PR",
        body: "Earned coverage and references from publications your buyers and search systems already trust. No link schemes, no private networks.",
      },
      {
        title: "Measurement",
        body: "Visibility, qualified traffic, leads and revenue influenced, reported in one view so that search performance is read as a business number.",
      },
    ],
    ai: [
      "Clustering large keyword and query sets by intent",
      "Log file, crawl and SERP analysis at scale",
      "First-draft content and metadata variations",
      "Monitoring for ranking, indexation and competitor changes",
    ],
    experts: [
      "Which opportunities are commercially worth pursuing",
      "Site architecture and migration decisions",
      "Editorial judgement, accuracy and brand voice",
      "Trade-offs between quick wins and compounding work",
    ],
    measures: [
      "Non-brand organic visibility",
      "Qualified organic sessions",
      "Organic leads and assisted conversions",
      "Revenue influenced by organic search",
    ],
    faqs: [
      {
        q: "How long before SEO shows results?",
        a: "It depends on your starting point, competition and how quickly changes are shipped. Technical fixes can show within weeks; competitive positions usually take months of consistent work. We set expectations after the diagnostic, not before it.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No. Nobody controls search results, and anyone promising a position is guessing. We commit to a prioritised plan, transparent execution and honest reporting against business outcomes.",
      },
      {
        q: "Is the content written by AI?",
        a: "AI is used for research, outlining and first drafts where it saves time. Strategy, editing, fact-checking and final approval are done by people who understand your market.",
      },
    ],
    related: ["ai-seo-services", "local-seo-services", "cro"],
  },
  {
    slug: "ai-seo-services",
    name: "AI Search",
    title: "Be the answer when customers ask AI",
    metaTitle: "AI SEO Services: AEO & GEO",
    metaDescription:
      "AI search optimisation from SERPMOZ: see how your brand appears in AI-generated answers, close the gaps and build the authority these systems draw on.",
    category: "search-ai",
    summary:
      "Visibility in AI-generated answers: how your brand is described, cited and recommended, and what to do about the gaps.",
    intro:
      "Buyers increasingly ask an assistant before they open a search results page. The answer they get names a few companies and leaves the rest out. We audit how your brand shows up across AI discovery environments, identify why competitors are being mentioned instead, and build the content, structure and third-party evidence that improves your odds of being included.",
    problems: [
      "You do not know whether AI assistants mention your brand, or what they say when they do.",
      "Competitors are recommended in answers for categories you lead.",
      "Organic clicks are falling on queries where an AI summary now appears.",
      "Your content answers questions, but not in a form that is easy to extract or cite.",
    ],
    scope: [
      {
        title: "AI visibility audit",
        body: "We test a defined set of buying-journey prompts across major AI discovery environments and record mentions, citations, sentiment and which sources are being drawn on.",
      },
      {
        title: "Answer engine optimisation (AEO)",
        body: "Restructuring key pages so questions are answered directly, facts are unambiguous and structured data describes your entities accurately.",
      },
      {
        title: "Generative engine optimisation (GEO)",
        body: "Closing topic gaps, publishing original data and expert perspectives, and strengthening the evidence trail that generative systems rely on.",
      },
      {
        title: "Source and citation strategy",
        body: "Identifying the publications, directories, communities and review platforms that shape answers in your category, and earning a credible presence there.",
      },
      {
        title: "Ongoing tracking",
        body: "Repeatable prompt panels monitored over time, so changes in mention share and citation sources are visible alongside classic search metrics.",
      },
    ],
    ai: [
      "Running and scoring large prompt panels consistently",
      "Extracting cited sources and competitor mentions",
      "Detecting topic and entity gaps in existing content",
      "Drafting structured answer formats and schema",
    ],
    experts: [
      "Choosing prompts that reflect real buying behaviour",
      "Interpreting noisy, non-deterministic outputs responsibly",
      "Deciding which gaps are worth closing first",
      "Ensuring every claim on your site is accurate and defensible",
    ],
    measures: [
      "Brand mention rate across tracked prompts",
      "Share of recommendation versus named competitors",
      "Citation sources referencing your domain",
      "Referral sessions and leads from AI platforms",
    ],
    faqs: [
      {
        q: "Can you guarantee my brand appears in ChatGPT or Google AI answers?",
        a: "No, and no one can. AI systems are non-deterministic and their providers do not offer placement. What we can do is measure your current presence, improve the signals these systems rely on and track the change over time.",
      },
      {
        q: "Is AI SEO different from traditional SEO?",
        a: "It builds on the same foundations (crawlable pages, clear content, real authority) and adds new work: entity clarity, extractable answers, citation sources and prompt-based measurement.",
      },
      {
        q: "How do you measure AI visibility?",
        a: "With a fixed panel of prompts run on a schedule across platforms. Results vary between runs, so we report trends and ranges rather than single snapshots.",
      },
    ],
    related: ["seo-services", "enterprise-seo", "social-media-marketing"],
  },
  {
    slug: "local-seo-services",
    name: "Local & Maps",
    title: "Win the searches that happen near your locations",
    metaTitle: "Local SEO & Google Maps Services",
    metaDescription:
      "Local SEO and Google Maps optimisation for single and multi-location businesses: profiles, reviews, location pages and tracking tied to calls and bookings.",
    category: "search-ai",
    summary:
      "Google Business Profile, Maps visibility, reviews and location pages for single and multi-location businesses.",
    intro:
      "Local search is where intent is highest and patience is lowest. People want a provider nearby, open now, with evidence that others trust them. We manage the full local footprint (profiles, listings, reviews, location pages and tracking) so that each branch competes properly in its own catchment.",
    problems: [
      "Some locations appear in the map results and others never do.",
      "Business information is inconsistent across listings and directories.",
      "Reviews are unmanaged, or concentrated on one branch.",
      "Calls and direction requests are not attributed to any marketing activity.",
    ],
    scope: [
      {
        title: "Google Business Profile management",
        body: "Categories, services, attributes, photos, posts, Q&A and product listings maintained to a consistent standard across every profile.",
      },
      {
        title: "Listings and citations",
        body: "Name, address, phone and hours made consistent across the directories and data sources that matter in your country and sector.",
      },
      {
        title: "Review operations",
        body: "A compliant process for requesting, monitoring and responding to reviews. We never write, buy or gate reviews.",
      },
      {
        title: "Location pages with local value",
        body: "Pages that carry information a local customer needs: services at that branch, staff, access, areas served. Not templates with a city name swapped in.",
      },
      {
        title: "Local tracking",
        body: "Grid-based visibility tracking, call and form attribution, and reporting by location so that weak branches are easy to spot.",
      },
    ],
    ai: [
      "Auditing listing consistency across many locations",
      "Summarising review themes and flagging urgent ones",
      "Drafting profile posts and review responses for approval",
      "Monitoring visibility across map grid points",
    ],
    experts: [
      "Category and service selection per location",
      "Handling suspensions, duplicates and reinstatements",
      "Tone and escalation for sensitive reviews",
      "Deciding where new location content is justified",
    ],
    measures: [
      "Map pack visibility by location",
      "Calls, direction requests and bookings",
      "Review volume, rating and response time",
      "Local organic leads per branch",
    ],
    faqs: [
      {
        q: "Do you work with multi-location businesses?",
        a: "Yes. The process is designed for it: shared standards, location-level reporting and bulk management where the platform allows.",
      },
      {
        q: "Can you remove negative reviews?",
        a: "Only reviews that break platform policies can be reported for removal. For everything else we help you respond well and fix the underlying issue.",
      },
      {
        q: "Will you create pages for every city we serve?",
        a: "Only where there is something specific and useful to say. Thin pages that differ only by place name tend to perform poorly and can harm the rest of the site.",
      },
    ],
    related: ["seo-services", "ppc-management", "marketing-automation"],
  },
  {
    slug: "ecommerce-seo",
    name: "Ecommerce SEO",
    title: "Organic growth for stores with real catalogue complexity",
    metaTitle: "Ecommerce SEO Services",
    metaDescription:
      "Ecommerce SEO for Shopify, WooCommerce and custom stores: category architecture, faceted navigation, product data and content that brings buyers, not just browsers.",
    category: "search-ai",
    summary:
      "Category architecture, faceted navigation, product data and merchandising-aware content for online stores.",
    intro:
      "Ecommerce SEO is an architecture problem before it is a content problem. Thousands of URLs, filters that multiply them, products that go out of stock and feeds that feed everything else. We bring order to it, then build demand capture around the categories and products that carry margin.",
    problems: [
      "Filter and parameter URLs are flooding the index.",
      "Category pages are thin and compete with each other.",
      "Out-of-stock and discontinued products leak traffic and equity.",
      "Organic revenue is concentrated on brand searches.",
    ],
    scope: [
      {
        title: "Catalogue and category architecture",
        body: "A taxonomy that matches how people search, with clear rules for which filtered pages deserve to be indexed.",
      },
      {
        title: "Product and feed data",
        body: "Titles, attributes, structured data and merchant feeds aligned so that products are eligible for rich results and shopping surfaces.",
      },
      {
        title: "Category and buying-guide content",
        body: "Useful copy that helps people choose, placed where it supports conversion instead of pushing products down the page.",
      },
      {
        title: "Lifecycle rules",
        body: "Defined handling for out-of-stock, seasonal and discontinued items so demand is redirected instead of lost.",
      },
      {
        title: "Revenue reporting",
        body: "Organic performance by category, margin band and new versus returning customers.",
      },
    ],
    ai: [
      "Generating and testing product copy at catalogue scale",
      "Classifying queries to categories and attributes",
      "Detecting duplicate and near-duplicate pages",
      "Feed quality checks",
    ],
    experts: [
      "Indexation rules for faceted navigation",
      "Platform constraints and migration planning",
      "Balancing SEO with merchandising and UX",
      "Prioritising by margin, not only search volume",
    ],
    measures: [
      "Non-brand organic revenue",
      "Category-level visibility",
      "Indexed versus intended URL count",
      "Organic conversion rate",
    ],
    faqs: [
      {
        q: "Which platforms do you work with?",
        a: "Shopify, WooCommerce, Magento/Adobe Commerce and custom builds. Recommendations are adapted to what each platform can actually do.",
      },
      {
        q: "Do you write product descriptions?",
        a: "Yes, with AI used to scale drafts and people reviewing for accuracy, compliance and brand voice before anything is published.",
      },
      {
        q: "Can you help during a replatforming?",
        a: "Yes. Migrations are where most organic revenue is lost. We plan redirects, parity checks and monitoring before, during and after launch.",
      },
    ],
    related: ["seo-services", "cro", "ppc-management"],
  },
  {
    slug: "international-seo",
    name: "International SEO",
    title: "Enter new markets without splitting your authority",
    metaTitle: "International SEO Services",
    metaDescription:
      "International SEO strategy and execution: market selection, domain structure, hreflang, localisation and measurement across countries and languages.",
    category: "search-ai",
    summary:
      "Market selection, site structure, hreflang and localisation for companies selling across borders.",
    intro:
      "Going international multiplies every SEO decision. The wrong domain structure or a careless translation programme can cost years. We help you decide which markets justify investment, how the site should be structured for them, and how content is localised so it reads as native and ranks as intended.",
    problems: [
      "The wrong country or language version ranks in the wrong market.",
      "Translated pages exist but attract no demand.",
      "Regional teams publish independently with no shared standards.",
      "Leadership cannot compare organic performance across markets.",
    ],
    scope: [
      {
        title: "Market prioritisation",
        body: "Demand, competition and operational readiness assessed per market so investment follows opportunity.",
      },
      {
        title: "International architecture",
        body: "ccTLD, subdirectory or subdomain decisions, with hreflang and canonical logic specified and tested.",
      },
      {
        title: "Localisation, not translation",
        body: "Keyword research in the local language, local search behaviour, pricing, units and proof points adapted by native specialists.",
      },
      {
        title: "Local authority",
        body: "Coverage and references from publications that carry weight in each target country.",
      },
      {
        title: "Governance and reporting",
        body: "Shared standards for regional teams and a single view of performance by market.",
      },
    ],
    ai: [
      "Cross-market keyword discovery and clustering",
      "Hreflang validation across large sites",
      "Draft localisation for specialist review",
      "Monitoring wrong-market ranking issues",
    ],
    experts: [
      "Which markets to enter and in what order",
      "Domain and URL structure decisions",
      "Cultural and regulatory nuance in copy",
      "Coordination with regional stakeholders",
    ],
    measures: [
      "Visibility by country and language",
      "Correct-version ranking rate",
      "Leads and revenue by market",
      "Time from launch to first qualified demand",
    ],
    faqs: [
      {
        q: "Should we use separate country domains?",
        a: "Sometimes. It depends on brand, resources, legal requirements and existing authority. We model the options and recommend one with reasons.",
      },
      {
        q: "Is machine translation acceptable?",
        a: "As a first draft, often. As a final page in a market you care about, no. Local review is what makes content competitive.",
      },
      {
        q: "Which markets do you cover?",
        a: "We work across India, the USA, the UK, the UAE, Canada, Australia, Singapore and Europe, with native-language specialists engaged per market.",
      },
    ],
    related: ["seo-services", "enterprise-seo", "web-development"],
  },
  {
    slug: "enterprise-seo",
    name: "Enterprise SEO",
    title: "SEO for large sites and the organisations behind them",
    metaTitle: "Enterprise SEO Services",
    metaDescription:
      "Enterprise SEO for complex sites and teams: technical governance, prioritisation frameworks, stakeholder alignment and reporting that leadership can act on.",
    category: "search-ai",
    summary:
      "Governance, prioritisation and technical depth for large sites, multiple teams and long release cycles.",
    intro:
      "At enterprise scale the hard part of SEO is rarely knowing what to fix. It is getting the right fix through product, engineering, legal and brand in a reasonable time. We bring the technical depth and the operating model: business cases, tickets, QA and reporting that keeps search on the roadmap.",
    problems: [
      "SEO recommendations sit in backlogs for quarters.",
      "Multiple teams and agencies make conflicting changes.",
      "Releases regularly break things that were working.",
      "Leadership sees SEO as a cost because impact is not quantified.",
    ],
    scope: [
      {
        title: "Opportunity sizing and business cases",
        body: "Each initiative is framed with expected impact, confidence and effort so it can compete for engineering time.",
      },
      {
        title: "Technical governance",
        body: "Standards, templates, pre-release checks and automated monitoring that prevent regressions.",
      },
      {
        title: "Programme management",
        body: "A shared roadmap across teams, with clear ownership and a cadence that matches your release cycle.",
      },
      {
        title: "Content operations",
        body: "Briefing, production and review workflows that scale across business units without losing quality.",
      },
      {
        title: "Executive reporting",
        body: "Organic search expressed in pipeline and revenue terms, with a clear line from work shipped to outcome.",
      },
    ],
    ai: [
      "Crawling and analysing millions of URLs",
      "Anomaly detection after releases",
      "Template-level content and metadata generation",
      "Summarising performance for different stakeholders",
    ],
    experts: [
      "Building the case that gets work prioritised",
      "Navigating engineering and compliance constraints",
      "Deciding what not to do",
      "Training and aligning internal teams",
    ],
    measures: [
      "Recommendations shipped versus raised",
      "Regression incidents per release",
      "Non-brand visibility by business unit",
      "Organic pipeline and revenue contribution",
    ],
    faqs: [
      {
        q: "Do you replace our in-house team?",
        a: "No. We usually work alongside it, adding specialist depth, capacity and an outside view.",
      },
      {
        q: "Can you work within our ticketing and release process?",
        a: "Yes. Recommendations are delivered in the format your engineering team already uses, with acceptance criteria.",
      },
      {
        q: "How do you handle security and access?",
        a: "We follow your access policies, work with least-privilege permissions and can sign your NDA and data processing terms.",
      },
    ],
    related: ["seo-services", "international-seo", "ai-seo-services"],
  },
  {
    slug: "ppc-management",
    name: "Performance Marketing",
    title: "Paid media managed against profit, not platform metrics",
    metaTitle: "PPC Management & Performance Marketing",
    metaDescription:
      "PPC and paid media management across Google, Microsoft, Meta and LinkedIn. Account structure, creative testing and tracking built around qualified leads and return.",
    category: "performance",
    summary:
      "Google, Microsoft, Meta and LinkedIn campaigns structured around qualified demand and real return.",
    intro:
      "Ad platforms are very good at spending budgets and reporting their own success. We manage paid media from your numbers instead: lead quality, sales acceptance, customer acquisition cost and return. Automation handles bidding and variation. Our specialists decide what the machine is allowed to optimise for.",
    problems: [
      "Platform-reported conversions do not match what sales sees.",
      "Budgets drift to branded and low-intent traffic.",
      "Automated campaign types are running with no guardrails.",
      "Creative is refreshed rarely and tested never.",
    ],
    scope: [
      {
        title: "Tracking and conversion design",
        body: "Server-side and offline conversion imports so platforms learn from qualified leads and revenue, not form fills.",
      },
      {
        title: "Account architecture",
        body: "Campaign structure, audiences, exclusions and budgets designed around intent and margin.",
      },
      {
        title: "Creative and message testing",
        body: "A steady testing cadence for ads and landing pages, with AI used to produce variations and people choosing what to learn next.",
      },
      {
        title: "Channel mix",
        body: "Google Ads, Microsoft Ads, Meta, LinkedIn and retargeting used where they fit your buyer, with clear roles for each.",
      },
      {
        title: "Reporting",
        body: "CAC, ROAS and pipeline by campaign, reconciled with your CRM.",
      },
    ],
    ai: [
      "Bid and budget automation within set limits",
      "Ad copy and asset variation",
      "Search term mining and negative keyword suggestions",
      "Anomaly alerts on spend and performance",
    ],
    experts: [
      "What counts as a conversion worth paying for",
      "Where automation helps and where it wastes money",
      "Offer, positioning and landing page strategy",
      "Budget allocation across channels and markets",
    ],
    measures: [
      "Qualified leads and sales-accepted rate",
      "Customer acquisition cost",
      "Return on ad spend",
      "Pipeline and revenue by campaign",
    ],
    faqs: [
      {
        q: "Is there a minimum ad budget?",
        a: "There is a level below which platforms cannot learn and management fees are hard to justify. We will tell you plainly if paid media is not the right move yet.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. We work inside your accounts so that history, data and billing stay with you.",
      },
      {
        q: "Do you build landing pages?",
        a: "Yes. Paid performance is usually limited by the page, so landing page design and testing are part of the work.",
      },
    ],
    related: ["cro", "marketing-automation", "seo-services"],
  },
  {
    slug: "social-media-marketing",
    name: "Social & Content",
    title: "Content and social that build demand you can trace",
    metaTitle: "Social Media Marketing & Content Strategy",
    metaDescription:
      "Content strategy and social media marketing: editorial planning, LinkedIn, Instagram, YouTube, video and digital PR tied to search demand and pipeline.",
    category: "content-social",
    summary:
      "Editorial strategy, LinkedIn, Instagram, YouTube, video and digital PR working as one content system.",
    intro:
      "AI has made content cheap, which has made good content more valuable. We build an editorial programme around what your buyers need to understand before they choose, then distribute it across search, social and the publications they read. One strategy, many formats, measured by the demand it creates.",
    problems: [
      "Posting is consistent but nothing comes of it.",
      "Content is produced by channel, with no shared narrative.",
      "AI-generated posts read like everyone else's.",
      "Social and content are reported on reach, not business impact.",
    ],
    scope: [
      {
        title: "Content strategy",
        body: "Audience research, narrative, topic architecture and an editorial calendar tied to search demand and sales conversations.",
      },
      {
        title: "Expert-led production",
        body: "Articles, guides, reports and video built from interviews with your people and edited by ours, with AI supporting research and repurposing.",
      },
      {
        title: "Platform programmes",
        body: "LinkedIn for B2B authority, Instagram and YouTube where the audience and format fit. Company and leadership profiles handled together.",
      },
      {
        title: "Digital PR",
        body: "Original data and commentary pitched to relevant publications for coverage that also strengthens search and AI visibility.",
      },
      {
        title: "Attribution",
        body: "Content tracked through to engaged accounts, enquiries and influenced pipeline.",
      },
    ],
    ai: [
      "Research synthesis and outline generation",
      "Repurposing long-form into platform formats",
      "Transcription, clipping and captioning",
      "Performance pattern analysis",
    ],
    experts: [
      "Point of view and narrative",
      "Interviewing and extracting real expertise",
      "Editorial quality and factual accuracy",
      "Knowing which platforms deserve effort",
    ],
    measures: [
      "Engaged audience within target accounts",
      "Branded search demand",
      "Content-assisted leads",
      "Earned coverage and referring publications",
    ],
    faqs: [
      {
        q: "Do you post on our behalf?",
        a: "Yes, with an approval workflow you control. Nothing is published without sign-off unless you choose otherwise.",
      },
      {
        q: "Which platforms should we be on?",
        a: "The ones your buyers use when they are thinking about problems you solve. For most B2B companies that starts with LinkedIn and search. We will recommend a short list, not all of them.",
      },
      {
        q: "Can you work with our in-house writers?",
        a: "Yes. We can own production, or provide strategy, briefs and editing around your team.",
      },
    ],
    related: ["seo-services", "ai-seo-services", "ppc-management"],
  },
  {
    slug: "cro",
    name: "CRO & Conversion",
    title: "Turn the traffic you already have into customers",
    metaTitle: "Conversion Rate Optimisation (CRO) Services",
    metaDescription:
      "Conversion rate optimisation from SERPMOZ: research, analytics, landing pages and structured experimentation that raise leads and revenue from existing traffic.",
    category: "conversion-automation",
    summary:
      "Research, analytics, landing pages and experimentation that raise the return on every visit.",
    intro:
      "More traffic to a page that does not convert is an expensive way to stay where you are. CRO finds out why visitors hesitate, tests better answers and keeps what works. It is the fastest way to improve the economics of every other channel.",
    problems: [
      "Traffic is healthy but conversion rates are flat or unknown.",
      "Redesigns are driven by opinion, not evidence.",
      "Analytics is installed but nobody trusts the numbers.",
      "Forms and checkouts lose people at the same steps every month.",
    ],
    scope: [
      {
        title: "Analytics foundations",
        body: "Event tracking, funnels and data quality checks so decisions rest on numbers people believe.",
      },
      {
        title: "Conversion research",
        body: "Session recordings, heatmaps, form analytics, customer interviews and sales call reviews to find the real objections.",
      },
      {
        title: "Landing pages and funnels",
        body: "Message, structure, proof and form design reworked for the specific intent of each traffic source.",
      },
      {
        title: "Experimentation programme",
        body: "A prioritised backlog of hypotheses, tests run to proper sample sizes, and results recorded so learning accumulates.",
      },
      {
        title: "Lead quality feedback",
        body: "Conversion measured through to qualified pipeline, so that tests are not won by attracting the wrong leads.",
      },
    ],
    ai: [
      "Summarising recordings, surveys and call transcripts",
      "Generating copy and layout variations",
      "Segment-level analysis of test results",
      "Spotting funnel anomalies early",
    ],
    experts: [
      "Forming hypotheses worth testing",
      "Statistical discipline and test design",
      "Understanding buyer psychology in your category",
      "Knowing when not to test and just fix",
    ],
    measures: [
      "Conversion rate by source and device",
      "Qualified lead rate",
      "Revenue per visitor",
      "Test velocity and win rate",
    ],
    faqs: [
      {
        q: "Do we have enough traffic for A/B testing?",
        a: "Maybe not, and that is fine. Lower-traffic sites benefit more from research-led fixes and before/after measurement than from formal split tests.",
      },
      {
        q: "Will you redesign the whole site?",
        a: "Rarely as a first step. We start with the pages and steps that carry the most revenue and the clearest problems.",
      },
      {
        q: "Which tools do you use?",
        a: "We work with the analytics and testing stack you have where possible and recommend additions only when there is a gap.",
      },
    ],
    related: ["ppc-management", "marketing-automation", "web-development"],
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    title: "Follow up faster, and with more relevance, than a team can manually",
    metaTitle: "Marketing Automation, CRM & AI Agents",
    metaDescription:
      "Marketing automation from SERPMOZ: CRM setup, lead routing, email and WhatsApp journeys, and AI agents that respond, qualify and nurture with human oversight.",
    category: "conversion-automation",
    summary:
      "CRM, lead routing, email and WhatsApp journeys, and AI agents that qualify and nurture.",
    intro:
      "A large share of marketing spend is wasted after the lead arrives: slow responses, no nurture, no feedback to the channels that produced it. We design the systems that close that gap, connecting forms, CRM, messaging and sales so that every enquiry gets a timely, relevant next step.",
    problems: [
      "Leads wait hours or days for a first response.",
      "The CRM is a contact list, not a working pipeline.",
      "Nurture is a monthly newsletter sent to everyone.",
      "Marketing cannot see which leads became revenue.",
    ],
    scope: [
      {
        title: "CRM design and clean-up",
        body: "Pipeline stages, fields, scoring and ownership rules that reflect how you actually sell.",
      },
      {
        title: "Lead capture and routing",
        body: "Every form, chat, call and ad lead captured, enriched, deduplicated and assigned within minutes.",
      },
      {
        title: "Email and WhatsApp journeys",
        body: "Consent-based sequences triggered by behaviour and stage, written to be useful and easy to opt out of.",
      },
      {
        title: "AI agents",
        body: "Assistants that answer common questions, qualify enquiries and book meetings, with clear handover to people and clear disclosure that they are AI.",
      },
      {
        title: "Closed-loop reporting",
        body: "Revenue outcomes passed back to analytics and ad platforms so spend follows quality.",
      },
    ],
    ai: [
      "Instant first responses and qualification",
      "Lead enrichment and scoring",
      "Personalised message drafting",
      "Conversation summarisation for sales",
    ],
    experts: [
      "Journey design and what to automate at all",
      "Consent, privacy and platform policy compliance",
      "Sales and marketing alignment",
      "Guardrails and escalation rules for AI agents",
    ],
    measures: [
      "Speed to first response",
      "Lead-to-meeting and meeting-to-opportunity rates",
      "Nurture-sourced pipeline",
      "Attribution coverage",
    ],
    faqs: [
      {
        q: "Which CRMs and tools do you work with?",
        a: "We work with the major CRM and automation platforms and will recommend one if you are choosing. The design matters more than the logo.",
      },
      {
        q: "Is WhatsApp automation compliant?",
        a: "When built on the official Business Platform with opt-in consent and approved templates, yes. That is the only way we build it.",
      },
      {
        q: "Will AI agents talk to our customers unsupervised?",
        a: "Within limits you define. Agents handle defined tasks, disclose that they are automated and pass anything uncertain to a person.",
      },
    ],
    related: ["cro", "ppc-management", "web-development"],
  },
  {
    slug: "web-development",
    name: "Web & Digital",
    title: "Websites engineered to be found, to be fast and to convert",
    metaTitle: "Web Design & Development",
    metaDescription:
      "Web design and development from SERPMOZ: Next.js, WordPress, Shopify and Webflow builds with SEO, speed, accessibility and conversion designed in.",
    category: "web-digital",
    summary:
      "Next.js, WordPress, Shopify and Webflow builds with SEO, speed and conversion designed in from the first wireframe.",
    intro:
      "A website is the one channel you fully own, and every other channel depends on it. We design and build sites where search requirements, performance budgets, accessibility and conversion paths are part of the specification, not a retrofit after launch.",
    problems: [
      "The site looks fine but is slow, hard to update or invisible in search.",
      "A past redesign cost rankings and nobody knows why.",
      "Marketing depends on developers for every small change.",
      "Design, SEO and development were handled by three different suppliers.",
    ],
    scope: [
      {
        title: "Strategy and information architecture",
        body: "Site structure planned from search demand, user journeys and the content you can realistically maintain.",
      },
      {
        title: "Design systems",
        body: "A component library and brand system that keeps pages consistent and makes new ones quick to build.",
      },
      {
        title: "Engineering",
        body: "Next.js for performance-critical and custom builds; WordPress, Shopify or Webflow where editorial speed or commerce features matter more.",
      },
      {
        title: "Migrations",
        body: "Redirect mapping, parity testing and post-launch monitoring so that a relaunch protects existing visibility.",
      },
      {
        title: "Custom digital products",
        body: "Calculators, portals, configurators and internal tools that support acquisition and retention.",
      },
    ],
    ai: [
      "Accelerating component and test scaffolding",
      "Content migration and reformatting",
      "Automated accessibility and performance checks",
      "Image optimisation and alt-text drafts",
    ],
    experts: [
      "Architecture and platform choice",
      "Design craft and brand expression",
      "Code review, security and maintainability",
      "SEO and conversion requirements",
    ],
    measures: [
      "Core Web Vitals (LCP, INP, CLS)",
      "Organic visibility retained and gained after launch",
      "Conversion rate",
      "Time for marketing to publish a new page",
    ],
    faqs: [
      {
        q: "Which platform should we choose?",
        a: "It depends on your team, content volume, integrations and budget. We recommend after discovery and explain the trade-offs.",
      },
      {
        q: "Will we be able to edit the site ourselves?",
        a: "Yes. Editorial independence is a requirement in every build.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes, through maintenance and continuous improvement retainers.",
      },
    ],
    related: ["seo-services", "cro", "marketing-automation"],
  },
];

/** The eight capabilities in the main navigation plus three SEO specialisms. */
export const primaryServices = coreServices;

export const services: Service[] = [...coreServices, ...moreServices];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
