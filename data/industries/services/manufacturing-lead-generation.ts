import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/manufacturing/lead-generation/
 * Rules: no client names, no figures, no guarantees, no prices. Search examples
 * are phrasing patterns, not demand data.
 */
export const record: IndustryServiceRecord = {
  industry: "manufacturing",
  service: "lead-generation",
  slug: "lead-generation",
  name: "Lead Generation for Manufacturing",
  audience: "manufacturers, industrial suppliers and exporters",

  seo: {
    title: "Lead Generation for Manufacturers: Better RFQs",
    metaDescription:
      "Lead generation for manufacturers: specification-stage visibility, datasheet and CAD downloads, RFQ forms and routing, measured by quotes sales accepts.",
    primaryKeyword: "lead generation for manufacturers",
    secondaryKeywords: [
      "manufacturing lead generation",
      "B2B lead generation for manufacturers",
      "industrial lead generation",
      "RFQ lead generation",
      "lead generation for industrial companies",
      "export lead generation for manufacturers",
    ],
    searchIntent:
      "A sales or marketing head at a manufacturer looking for a provider to increase qualified RFQs from engineers and buyers at home and in export markets.",
  },

  hero: {
    title: "Lead generation for manufacturers, measured in qualified RFQs",
    description:
      "Engineers and buyers shortlist suppliers by specification, standard and part number before they speak to anyone. Lead generation for manufacturers puts technical data where those searches find it, turns datasheet and drawing downloads into identified interest, and shapes the RFQ so sales receives requests it can quote.",
  },

  facts: [
    { label: "Best for", value: "Manufacturers selling engineered or specified products through a quotation" },
    { label: "Works alongside", value: "Technical SEO, LinkedIn, distributors, trade directories and the CRM" },
    { label: "Typical horizon", value: "Enquiries within weeks of launch; orders over a full sales cycle" },
    { label: "Measured in", value: "Quotable RFQs accepted by sales, and orders traced to source" },
  ],

  answer: {
    question: "How do manufacturers generate qualified leads online?",
    text: "Lead generation for manufacturers works by being found at the specification stage. That means technical pages that match searches for materials, standards and part numbers, datasheets and CAD files offered as conversion points, and an RFQ form that collects quantity, drawings and timeline. Enquiries are scored, routed to the right sales engineer or distributor, and followed through a long sales cycle, so the measure is quotable RFQs and the orders that follow.",
  },

  buyers: {
    heading: "How engineers and buyers find and choose a supplier",
    paragraphs: [
      "The search starts with a specification. A design engineer looks for a material grade, a tolerance, a rating, a standard number or an equivalent to an existing part number, and opens the suppliers whose pages show that data. They want facts and a file: a datasheet, a drawing or a CAD model. A supplier whose data sits only in a PDF catalogue or a distributor portal is often missing from the shortlist, a pattern we describe on our [manufacturing page](/industries/manufacturing/).",
      "Several people decide, and they arrive at different times. The engineer specifies, procurement compares price, lead time and supplier risk, quality asks about certification and testing, and management approves a new vendor. Each looks for different evidence, and the cycle can run for months. Useful lead generation records every contact from the same company, shows sales who has looked at what, and keeps the supplier present while the decision moves between departments.",
      "Buyers also use channels the manufacturer does not own. Distributors, industrial marketplaces and trade directories hold part of the demand. LinkedIn is where engineers and procurement heads at larger accounts can be reached by role and company. Export buyers search in their own language and country, with local standards and units. A plan has to decide what each channel is for, and how an enquiry from each is recorded, so that sources can be compared on orders.",
    ],
  },

  problems: [
    {
      title: "Enquiries from everyone except buyers",
      body: "The contact form collects students, job seekers, vendors and requests for a single piece. Sales stops reading web enquiries, and the occasional serious request waits days for a reply alongside the noise.",
    },
    {
      title: "RFQs too thin to quote",
      body: "A request arrives with a name and a product, without quantity, material, drawing or delivery date. Sales spends several emails gathering basics, and many buyers have their quote from elsewhere by then.",
    },
    {
      title: "Datasheets given away without a trace",
      body: "Technical files are downloaded freely, or gated so heavily that engineers leave. Either way the company cannot see which accounts are specifying its products, and has nothing to follow up.",
    },
    {
      title: "Part numbers and standards not searchable",
      body: "Products are named by internal series codes. Pages omit the standard designations, competitor equivalents and specifications engineers type, so specification-stage searches go to the distributors and marketplaces that do list the data.",
    },
    {
      title: "Distributor leads disappear from view",
      body: "Enquiries passed to distributors or agents are never recorded. Nobody knows whether they were contacted or converted, and marketing cannot tell which channels and markets deserve more budget next year.",
    },
  ],

  approach: [
    {
      title: "A written definition of a quotable RFQ",
      body: "With sales, we agree what a request must contain to be quoted, minimum order quantities, capabilities you do not offer, and which markets go to distributors. That definition sets form fields, scoring and reporting, following the method in our [lead generation services](/lead-generation/).",
    },
    {
      title: "Technical content for specification searches",
      body: "Product data moves from PDFs into indexable pages with specifications, standards, materials and equivalent part numbers as structured content. Application notes show where products are used. This is the organic base of the programme, and large catalogues need careful technical SEO to stay crawlable.",
    },
    {
      title: "Datasheets and CAD as conversion points",
      body: "Datasheets stay open to read. Higher-value files such as CAD models, full drawings and test reports sit behind a short form asking for company, role and application. Each download is recorded against the account, which gives sales a reason and a context to call.",
    },
    {
      title: "RFQ forms built for engineers",
      body: "The form asks for quantity, specification, drawing upload, target date and delivery country, with optional fields kept optional. Stated minimums and capabilities deter poor fits before they submit. Students and job seekers get their own routes, so they stop arriving in the sales inbox.",
    },
    {
      title: "LinkedIn, directories and marketplaces",
      body: "We choose paid and listed channels by where qualified buyers are found. [LinkedIn advertising](/linkedin-ads/) reaches named roles at target accounts, search campaigns cover high-intent product terms, and directory or marketplace listings are kept accurate and tagged, so each can be judged on RFQ quality.",
    },
    {
      title: "Scoring, routing and long-cycle follow-up",
      body: "Enquiries are scored on fit and completeness, then sent at once to the right sales engineer, regional agent or distributor, with the outcome recorded. Contacts not ready to buy receive technical updates. Sales feedback on every rejected RFQ returns to the campaigns.",
    },
  ],

  searches: {
    heading: "Searches worth winning in manufacturing",
    intro:
      "Industrial searches are precise, low in volume and high in value. The groups below show typical phrasing so the approach is clear. They are illustrative patterns; real terms come from your own products and sales team.",
    groups: [
      {
        name: "Specification and standard searches",
        examples: ["standard number + supplier", "material grade + product type", "tolerance or rating + component"],
        note: "Publish the data as page content, with the standard designation in headings and tables. Offer the datasheet beside it, never as the only source.",
      },
      {
        name: "Part number and equivalent searches",
        examples: ["part number + datasheet", "competitor part number + equivalent", "part number + drawing"],
        note: "Give each part or series an address of its own, with cross-references where you can lawfully state them. Show the RFQ route.",
      },
      {
        name: "Capability and process searches",
        examples: ["process name + manufacturer", "product type + custom manufacturer", "industry + component supplier"],
        note: "Capability pages should state processes, capacity ranges, quality systems and what you do not make. Clear limits improve RFQ quality more than broad claims do.",
      },
      {
        name: "Export and local-market searches",
        examples: ["product type + supplier + country", "local standard + product type", "product term in the buyer's language"],
        note: "Research terms natively in each priority market and localise units, standards and contact routes. Translated pages without local research tend to miss how buyers search.",
      },
    ],
  },

  rules: [
    {
      title: "Certifications and standards claims",
      body: "State conformity to a standard, or a certification, only for the products and sites it covers, and remove it when it lapses. Cross-references to competitor part numbers raise trademark questions. Confirm wording with your own legal or compliance adviser.",
    },
    {
      title: "Business contact data and consent",
      body: "Gated downloads, enrichment and follow-up emails are governed by data protection and marketing consent rules that differ between countries. We set forms and retention conservatively, and your legal adviser should confirm the position in each market.",
    },
    {
      title: "Export controls and restricted buyers",
      body: "Some products, technical files and destinations are subject to export controls or sanctions. Open CAD and specification downloads may need limits, and enquiries may need screening. Which rules apply is a question for your own legal or compliance adviser.",
    },
  ],

  measures: [
    "Quotable RFQs accepted by sales, by product line and market",
    "Share of RFQs arriving with quantity, specification and drawing attached",
    "Quotes issued and orders won, traced back to source",
    "Target accounts identified through datasheet and CAD downloads",
    "Cost per accepted RFQ and per order, by channel",
  ],

  timeline: [
    {
      phase: "Alignment with sales",
      when: "Weeks 1 to 3, typically",
      body: "Workshops produce the definition of a quotable RFQ, the routing map for sales engineers and distributors, and the priority products and markets. Current enquiries are sampled to see what arrives today.",
    },
    {
      phase: "Content and conversion build",
      when: "Weeks 3 to 8, depending on catalogue size",
      body: "Priority product data is published as pages, download gates and RFQ forms are built, and tracking, scoring and routing are tested end to end with trial enquiries before anything launches.",
    },
    {
      phase: "Channels go live",
      when: "Months 2 to 4, typically",
      body: "Search and LinkedIn campaigns start on the priority lines, listings are corrected, and the first export market is opened. Sales reviews RFQ quality weekly so forms and targeting can be adjusted.",
    },
    {
      phase: "Sales-cycle review",
      when: "Ongoing, read over a full sales cycle",
      body: "RFQs are followed to quote and order by source and market. Budget moves towards what sales accepts, further product lines and countries are added, and nurture keeps slower accounts informed.",
    },
  ],

  faqs: [
    {
      q: "How long does lead generation take for a manufacturer?",
      a: "Paid search and LinkedIn can bring enquiries within weeks of launch, once pages, forms and tracking are ready. Organic visibility for specification searches usually builds over several months, faster where data only needs moving out of PDFs. Whether those enquiries become orders can only be judged over one of your sales cycles.",
    },
    {
      q: "How much does lead generation for manufacturers cost?",
      a: "Cost depends on the size of the catalogue to be published, the number of markets and languages, the media budget for search and LinkedIn, the state of your CRM, and how much technical writing your engineers can support. We scope it after a [growth audit](/growth-audit/) and show the reasoning for each line.",
    },
    {
      q: "How do we stop irrelevant enquiries reaching sales?",
      a: "State minimum order quantities and capabilities plainly, give students, job applicants and vendors separate routes, and ask for the details a real buyer already has. Scoring then sorts what remains by fit and completeness. The aim is to protect sales time while keeping the route open for a serious buyer with little information yet.",
    },
    {
      q: "Should datasheets and CAD files be gated?",
      a: "Datasheets are usually better left open, because engineers and search engines both need to read them. Files that signal real design intent, such as CAD models, detailed drawings and test reports, can reasonably sit behind a short form. Keep the form brief. Check consent wording and any export restrictions with your adviser.",
    },
    {
      q: "Do trade directories and marketplaces still work?",
      a: "They can, depending on the product and market. Some hold real buyer demand and others mainly sell listings. We treat each as a channel to be measured: tag the enquiries, record the outcome and compare cost per accepted RFQ. Listings that produce quotable requests stay, and the rest are stopped.",
    },
    {
      q: "How do you handle leads that belong to a distributor?",
      a: "Routing rules send each enquiry to the correct distributor or agent by territory and product, with an acknowledgement to the buyer and a record in your CRM. Where the relationship allows, the distributor reports the outcome. That gives you a view of demand by market and shows which partners follow up.",
    },
    {
      q: "Can you generate leads in export markets?",
      a: "Yes, working remotely with your export team. We prioritise countries by fit, research how buyers search there in their own language, and localise pages for standards, units and contact routes. Paid campaigns can test a market before larger investment. Our [international SEO](/international-seo/) service covers the organic side. Local regulation and trade rules need your own adviser's confirmation.",
    },
  ],

  related: {
    services: ["technical-seo", "international-seo", "linkedin-ads", "marketing-automation"],
    locations: ["/locations/india/pune/", "/locations/europe/", "/locations/usa/"],
    articles: ["attribution-questions-worth-answering", "sizing-search-opportunities-by-value"],
  },

  cta: {
    title: "Find out why your RFQs are hard to quote",
    body: "A growth audit reviews your technical pages, download points, RFQ form and routing, and shows where qualified buyers are being lost. No promised lead volumes.",
  },
};
