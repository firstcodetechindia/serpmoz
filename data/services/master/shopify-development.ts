import type { Service, ServiceMaster } from "@/types";

/**
 * /shopify-development/ : themes, sections, apps, checkout limits, migrations.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What does a Shopify development agency do?",
    text: "A Shopify development agency builds, customises and maintains online stores on Shopify, a hosted ecommerce platform. The work covers theme development in Liquid, editable sections and templates, product data structured with metafields, careful selection of apps, integrations with payment, shipping and back-office systems, and migrations from other platforms. Because Shopify hosts the store and controls the checkout, much of the skill lies in knowing what can be customised, what requires Shopify Plus and what should be left alone.",
    takeaways: [
      "Shopify is a hosted platform: it runs the servers, security, updates and checkout for you.",
      "Themes are written in Liquid, and Online Store 2.0 makes sections editable on every page type.",
      "Apps add features quickly but each one can add scripts, cost and a dependency.",
      "Checkout customisation is restricted by design, with the most control on Shopify Plus.",
    ],
  },

  facts: [
    { label: "Best for", value: "Brands selling a standard catalogue direct to customers" },
    { label: "Works alongside", value: "Ecommerce SEO, CRO, email marketing and paid media" },
    { label: "Typical horizon", value: "Often 6 to 12 weeks for a theme build; migrations take longer with large catalogues" },
    { label: "Measured in", value: "Conversion rate, checkout completion, Core Web Vitals, organic revenue retained" },
  ],

  pillars: [
    {
      title: "Theme development",
      body: "A theme controls everything a shopper sees before checkout. We build custom themes, or adapt a well-made existing one where that is the sensible economy, and keep the code in version control.",
      items: ["Custom or adapted Liquid themes", "Product, collection and cart templates", "Predictive search and filtering", "Responsive images and lazy loading", "Version control and preview themes"],
      href: "/ui-ux-design/",
    },
    {
      title: "Online Store 2.0 sections and content",
      body: "Online Store 2.0 uses JSON templates, so sections and blocks can be added, reordered and configured on any page from the theme editor. Structured product information lives in metafields and metaobjects instead of being pasted into descriptions.",
      items: ["Sections and blocks on every template", "Alternate templates per product or collection", "Metafields for specifications and content", "Metaobjects for reusable content", "Theme settings your team can change safely"],
    },
    {
      title: "Apps and custom functionality",
      body: "The app store solves many problems in minutes and creates others over months. We audit what is installed, remove what overlaps and build small custom features where an app would add more weight than value.",
      items: ["App audit and consolidation", "App blocks in place of injected code", "Leftover code removed after uninstalls", "Custom apps for specific needs", "Recurring app costs reviewed"],
    },
    {
      title: "Checkout and conversion",
      body: "Shopify hosts the checkout and limits how it can be changed. We work within those limits, and concentrate effort on the product page and cart, where a theme gives full control.",
      items: ["Checkout branding and settings", "Checkout extensions on Shopify Plus", "Cart design, shipping messaging and offers", "Payment methods suited to each market", "Changes informed by analytics and testing"],
      href: "/cro/",
    },
    {
      title: "Migration to Shopify",
      body: "Shopify uses fixed URL patterns for products, collections and pages, so almost every URL changes when you move to it. Redirects, data mapping and parity checks decide whether organic revenue survives.",
      items: ["Product, customer and order data migration", "URL redirects for every indexed page", "Metadata and structured data carried over", "Collection structure rebuilt for search", "Before and after crawl comparison"],
      href: "/ecommerce-seo/",
    },
    {
      title: "Integrations and operations",
      body: "A store is only as reliable as its connections to stock, fulfilment and accounting. We connect Shopify to the systems you already run and make sure tracking reports the same revenue your finance team sees.",
      items: ["Inventory, ERP and fulfilment connections", "Shipping rates and carrier setup", "Email, SMS and review platforms", "Analytics and ad platform tracking", "Shopify Markets for international selling"],
    },
  ],

  mechanics: {
    heading: "How does a Shopify store turn a visit into a paid order?",
    intro: "Shopify splits the store into parts you control and parts it controls. The theme and apps are yours to shape; the checkout and infrastructure are largely Shopify's. Knowing where the line falls saves a great deal of wasted effort.",
    stages: [
      { name: "Storefront", happens: "Shopify renders your Liquid theme on its own servers and delivers pages through its CDN.", we: "Write efficient templates and sections, and size images for each layout." },
      { name: "Apps", happens: "Installed apps add scripts, blocks and tracking to storefront pages as they load.", we: "Remove unused apps, clear leftover code and load the rest only where needed." },
      { name: "Cart", happens: "The shopper adds items; the theme shows the cart with totals, offers and delivery information.", we: "Design a clear cart with honest shipping messaging and relevant add-ons." },
      { name: "Checkout", happens: "Shopify's hosted checkout collects address, shipping method and payment, then authorises the charge.", we: "Configure payment and shipping options, branding and, on Plus, checkout extensions." },
      { name: "Order", happens: "An order is created, and notifications, fulfilment and connected systems are triggered.", we: "Connect inventory, fulfilment and email flows, and verify revenue tracking matches actual orders." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Store and requirements audit", body: "Theme, apps, tracking, catalogue structure and current performance are reviewed. For a migration we also crawl the existing store and export its data.", outputs: ["Theme and app audit", "Catalogue and URL inventory"] },
    { when: "Weeks 2 to 5", title: "Design and data structure", body: "Key templates are designed, and product data is modelled with metafields so content can be managed in one place.", outputs: ["Template designs", "Metafield and collection plan"] },
    { when: "Weeks 4 to 10", title: "Theme build and integrations", body: "The theme is built on a development store or unpublished theme, with sections your team can edit. Apps and integrations are configured and tested.", outputs: ["Preview theme", "Integration test results"] },
    { when: "Weeks 8 to 12", title: "Migration and launch", body: "Data is imported, redirects are loaded, payments and shipping are tested with real transactions, and the store goes live at a quiet trading time.", outputs: ["Redirect file and data import", "Launch and test-order checklist"] },
    { when: "Every month", title: "Optimise and maintain", body: "We monitor speed, tracking and search visibility, review new apps before they are installed and ship improvements to product pages and cart.", outputs: ["Performance and tracking review", "Shipped improvements"] },
  ],

  comparison: {
    heading: "Shopify or WooCommerce: which should you build your store on?",
    intro: "Both can run a successful store. Shopify is a hosted service with firm boundaries; WooCommerce is a WordPress plugin you host and can change without limit. The difference is mostly about who carries the technical responsibility.",
    columns: ["Shopify", "WooCommerce"],
    rows: [
      { label: "Hosting and security", a: "Handled by Shopify", b: "Your responsibility" },
      { label: "Cost model", a: "Subscription, apps, payment fees", b: "Hosting, extensions, maintenance" },
      { label: "Checkout", a: "Hosted, limited customisation", b: "Fully customisable" },
      { label: "URL structure", a: "Fixed patterns", b: "Fully configurable" },
      { label: "Content and blogging", a: "Basic", b: "Full WordPress" },
      { label: "Technical upkeep", a: "Low", b: "Ongoing updates and monitoring" },
    ],
    verdict: "Shopify suits most direct-to-consumer brands that want to spend time selling instead of maintaining software. WooCommerce suits stores that need unusual checkout logic or deep content alongside commerce, and have someone to look after it.",
    link: { label: "See our ecommerce development service", href: "/ecommerce-development/" },
  },

  industries: ["ecommerce", "manufacturing", "hospitality", "automotive", "b2b", "local-business"],
  markets: ["usa", "uk", "india", "uae"],

  faqs: [
    { q: "How much does it cost to build a Shopify store?", a: "Cost depends on whether the theme is custom or adapted, the size of the catalogue, the integrations and whether data is being migrated. Shopify's subscription, app fees and payment charges are separate running costs. We give a specific proposal after a growth audit, with the build and running costs set out." },
    { q: "How long does a Shopify build or migration take?", a: "A new store on an adapted theme can launch in a few weeks. A custom theme typically takes two to three months, and a migration with a large catalogue, customer accounts and integrations takes longer. Data quality in the old store is usually what determines the timetable." },
    { q: "Do we need Shopify Plus?", a: "Only if you need what it adds: deeper checkout customisation, more automation, wholesale features, multiple expansion stores and higher API limits. Many stores trade well on standard plans for years. We recommend Plus when a specific requirement justifies the fee, not as a default for a growing brand." },
    { q: "Can the Shopify checkout be customised?", a: "Partly. All plans can adjust branding, payment and shipping options. Adding fields, content or custom logic to the checkout steps is done through extensions and is largely reserved for Shopify Plus. The checkout code itself cannot be freely edited, which is a deliberate trade for stability and security." },
    { q: "Why is our Shopify store slow when Shopify hosting is fast?", a: "Shopify's infrastructure is fast, so slowness nearly always comes from the theme and apps. Each app can add scripts to every page, and uninstalled apps often leave code behind. Oversized images, large sliders and several tracking tags add to it. An audit usually finds removable weight quickly." },
    { q: "When is Shopify the wrong platform?", a: "When you need a checkout Shopify does not permit, complex B2B pricing and quoting beyond its features, heavily configurable products, or complete control over URLs and hosting. It can also be costly where its own payment service is unavailable in your country. In those cases WooCommerce, Adobe Commerce or a custom build may fit better." },
    { q: "Is Shopify good for SEO?", a: "It covers the fundamentals well: fast hosting, automatic sitemaps, canonical tags and editable metadata. Its limits are a fixed URL structure, duplicate product paths through collections and a modest blogging tool. None prevents strong organic performance, but they need handling in the theme and collection setup." },
    { q: "Should we buy a theme or have one built?", a: "A good paid theme is a reasonable start for a new store with a limited budget. A custom theme makes sense when the brand needs a distinct experience, when speed matters commercially or when workarounds on a bought theme have accumulated. We often adapt first and rebuild once the store proves itself." },
    { q: "What do you need from us to start a Shopify project?", a: "Collaborator access to the store or, for a migration, access to the current platform and its data exports. We also need analytics and Search Console access, brand assets, a list of the systems Shopify must connect to and a named person who can make decisions on catalogue and content." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Shopify Development: Themes, Apps & Migration",
  metaDescription:
    "Shopify development from SERPMOZ: custom themes, Online Store 2.0 sections, app audits, checkout work within platform limits and search-safe migrations.",
};
