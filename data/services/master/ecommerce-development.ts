import type { Service, ServiceMaster } from "@/types";

/**
 * /ecommerce-development/ : platform choice and store builds across platforms.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is ecommerce development?",
    text: "Ecommerce development is the work of building an online store and connecting it to the systems that run the business behind it. It includes choosing a platform such as Shopify, WooCommerce or Adobe Commerce, structuring the catalogue, designing product pages and checkout, setting up payments, tax and shipping, and integrating inventory, fulfilment and accounting. The aim is a store where customers can find and buy products easily, and where every order flows through operations without manual re-entry.",
    takeaways: [
      "Platform choice depends on catalogue complexity, operations, markets and the team who will run the store.",
      "Hosted platforms trade flexibility for lower technical responsibility; open-source platforms do the reverse.",
      "Integrations with stock, fulfilment and accounting often take more effort than the storefront.",
      "Replatforming changes URLs and data, so migration planning protects existing revenue.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses launching a store, replatforming or untangling disconnected systems" },
    { label: "Works alongside", value: "Ecommerce SEO, CRO, email marketing and paid media" },
    { label: "Typical horizon", value: "Roughly 2 to 6 months, driven by platform, catalogue size and integrations" },
    { label: "Measured in", value: "Conversion rate, average order value, order accuracy, organic revenue after launch" },
  ],

  pillars: [
    {
      title: "Platform selection",
      body: "We compare platforms against your catalogue, order volume, markets and internal skills, and include the running costs over several years. The recommendation comes with what you give up, because every platform takes something away.",
      items: ["Shopify for standard catalogues and fast launch", "WooCommerce for content-led, flexible stores", "Adobe Commerce for complex catalogues and B2B", "Custom or headless where a real limit exists", "Running costs compared, not only build cost"],
      href: "/shopify-development/",
    },
    {
      title: "Catalogue and product data",
      body: "Most findability problems are data problems. Products need consistent attributes before filters, search, feeds and structured data can work, so we fix the data model first.",
      items: ["Product types, attributes and variants", "Category hierarchy and navigation", "Filters built from clean attributes", "On-site search tuning and synonyms", "Data clean-up before migration"],
    },
    {
      title: "Product page, cart and checkout",
      body: "Shoppers decide on the product page and abandon in the checkout. We design both around the questions a buyer has at each point: price, availability, delivery, returns and trust.",
      items: ["Product templates with clear buying information", "Delivery and returns shown before checkout", "Guest checkout and saved details", "Payment methods suited to each market", "Error handling and form usability"],
      href: "/cro/",
    },
    {
      title: "Payments, tax and shipping",
      body: "These rules differ in every country you sell to and are easy to get subtly wrong. We configure gateways, tax and shipping for each market and test with real transactions before launch.",
      items: ["Payment gateways and local methods", "Tax rules by region", "Shipping zones, rates and carriers", "Multi-currency and localised pricing", "Refund and returns workflows"],
    },
    {
      title: "Integrations",
      body: "A store that does not talk to stock, warehouse and accounts creates work with every order. We define which system is the source of truth for each type of data, then connect them accordingly.",
      items: ["Inventory and ERP synchronisation", "Warehouse and fulfilment systems", "Accounting and invoicing", "CRM, email and marketing platforms", "Marketplace and shopping feed connections"],
    },
    {
      title: "Search, speed and migration",
      body: "Category and product pages are where organic revenue comes from, and a replatform changes all of them at once. We build templates for speed and search, and treat migration as its own workstream.",
      items: ["Fast category and product templates", "Product and breadcrumb structured data", "Rules for filtered and paginated URLs", "Redirect map for every indexed URL", "Ecommerce analytics verified against orders"],
      href: "/ecommerce-seo/",
    },
  ],

  mechanics: {
    heading: "What has to work between a product search and a delivered order?",
    intro: "An online purchase crosses several systems, and customers experience the weakest one. The storefront is the visible part; the unseen parts, stock, payment and fulfilment, are where stores most often let people down.",
    stages: [
      { name: "Find", happens: "A shopper arrives from search, an ad or a link and looks for a product through categories, filters or site search.", we: "Structure the catalogue and attributes so navigation, filters and search return relevant products." },
      { name: "Evaluate", happens: "On the product page they check price, options, stock, delivery time and returns.", we: "Present accurate stock and delivery information, clear imagery and answers to common objections." },
      { name: "Pay", happens: "The checkout calculates tax and shipping, and the payment gateway authorises the transaction.", we: "Shorten the checkout, offer suitable payment methods and test every tax and shipping rule." },
      { name: "Sync", happens: "The order is recorded, stock is reduced and the details pass to inventory, ERP and accounting.", we: "Build reliable integrations with error alerts, so failed syncs are noticed and corrected." },
      { name: "Fulfil", happens: "The warehouse picks and ships the order, and the customer receives tracking and, sometimes, makes a return.", we: "Connect fulfilment and notifications, and set up post-purchase and returns flows." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Assess", body: "We review the current store, catalogue, order flow and every connected system, and speak to the people who handle orders day to day.", outputs: ["Requirements and systems map", "Catalogue and data audit"] },
    { when: "Weeks 3 to 4", title: "Choose the platform", body: "Options are scored against the requirements with build and running costs. You receive one recommendation and the reasoning behind it.", outputs: ["Platform recommendation", "Architecture and integration plan"] },
    { when: "Weeks 4 to 8", title: "Design the journeys", body: "Category, product, cart and checkout templates are designed, alongside the catalogue structure and attribute model.", outputs: ["Template designs", "Catalogue structure"] },
    { when: "Weeks 6 to 20", title: "Build, integrate and migrate", body: "The store is built, integrations are developed and tested with real data, and products, customers and orders are migrated in rehearsal runs.", outputs: ["Staging store with live integrations", "Migration rehearsal report"] },
    { when: "Launch onward", title: "Launch and optimise", body: "Go-live is scheduled for a quiet trading period with test orders in every market. Afterwards we watch orders, sync errors, search visibility and conversion.", outputs: ["Launch and redirect checklist", "Post-launch performance review"] },
  ],

  comparison: {
    heading: "Standard platform storefront or headless commerce: which do you need?",
    intro: "Once a platform is chosen, the next question is whether to use its own theme layer or build a separate custom front end on top of it. Headless is fashionable and is right for a minority of stores.",
    columns: ["Platform theme", "Headless storefront"],
    rows: [
      { label: "Front end", a: "Platform's theme system", b: "Custom, often React or Next.js" },
      { label: "Time and cost", a: "Lower", b: "Considerably higher" },
      { label: "Apps and plugins", a: "Work as designed", b: "Many need rebuilding or replacing" },
      { label: "Design freedom", a: "Wide, within the theme model", b: "Unrestricted" },
      { label: "Maintenance", a: "Mostly the platform's", b: "Two systems to maintain" },
      { label: "Best fit", a: "Most stores", b: "Several front ends or unusual experiences" },
    ],
    verdict: "A well-built theme on the right platform serves most stores and keeps the app ecosystem available. Go headless when you can name a requirement the theme layer cannot meet and you have developers to maintain the result.",
    link: { label: "See our Next.js development service", href: "/nextjs-development/" },
  },

  industries: ["ecommerce", "manufacturing", "b2b", "automotive", "hospitality", "healthcare"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does it cost to build an ecommerce website?", a: "Cost depends on the platform, the number of products and variants, custom design and, above all, integrations with stock, fulfilment and accounting systems. Platform fees, payment charges and maintenance are ongoing costs on top of the build. We provide a specific proposal after a growth audit, with both build and running costs." },
    { q: "How long does an ecommerce build or replatform take?", a: "A straightforward store on a hosted platform can launch in about two months. A replatform with a large catalogue, customer accounts and ERP integration commonly takes four to six months. Data clean-up and integration testing are the stages that most often run long, so we start them early." },
    { q: "Shopify, WooCommerce or Magento: which is best?", a: "Shopify is the simplest to run and suits most direct-to-consumer stores. WooCommerce offers more flexibility and strong content tools, with maintenance to match. Magento, sold commercially as Adobe Commerce, handles complex catalogues, multiple stores and B2B needs, and requires a larger budget and technical team. The right answer follows your operations." },
    { q: "When should we build a custom ecommerce platform?", a: "Rarely. A custom build makes sense when the buying process is unlike a normal store, such as complex configuration, quoting or marketplace logic, and no platform supports it without heavy modification. You then own every feature, security patch and payment compliance obligation, which is a permanent cost." },
    { q: "Is it worth replatforming, or should we fix our current store?", a: "Fix it if the problems are speed, design, data quality or conversion, since those travel with you to any platform. Replatform if the current system cannot support your catalogue, markets or integrations, or has become expensive to keep running. We audit first because replatforming is disruptive and often avoidable." },
    { q: "Will we lose search traffic when we change platform?", a: "There is risk, because URLs, templates and often content change together. We reduce it by mapping every indexed URL to its new address, carrying over metadata and structured data, keeping category and product content, and comparing crawls before and after launch. Some short-term fluctuation is normal." },
    { q: "Can the store connect to our ERP, inventory or accounting software?", a: "Usually, through an existing connector, a middleware tool or a custom integration built on the systems' APIs. The important decisions are which system owns stock, prices and customer records, and how often data is synchronised. We settle those before development, as they shape the whole build." },
    { q: "What do you need from us to start?", a: "Access to the current store and analytics, a product data export, documentation or contacts for each connected system, and details of the payment and shipping providers you use. We also need time with whoever manages orders and stock, because they know where the present setup fails." },
    { q: "Is a good-looking store enough to sell more?", a: "No. Appearance earns initial trust, but sales depend on findable products, accurate stock, clear delivery costs, a short checkout and reliable fulfilment. Many attractive stores underperform because of slow pages or surprises at checkout. Development effort is best spent on those fundamentals before visual refinement." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Ecommerce Development: Platform & Store Build",
  metaDescription:
    "Ecommerce development from SERPMOZ: platform choice across Shopify, WooCommerce, Adobe Commerce and custom, plus store builds, integrations and migration.",
};
