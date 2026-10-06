import type { Service, ServiceMaster } from "@/types";

export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is ecommerce SEO?",
    text: "Ecommerce SEO is the work of making an online store's category, product and guide pages easy for search engines to crawl, understand and list, so that shoppers find them when they search for what the store sells. It covers catalogue structure, control of filter and variant URLs, product data and structured markup, merchant feeds and content that helps people choose. Its measure is revenue and margin from non-brand organic search, not the number of pages indexed.",
    takeaways: [
      "Category pages usually win broad searches; product pages win specific model and variant searches.",
      "Filters can create far more URLs than a store has products, and most of them should not be indexed.",
      "Product structured data and a Merchant Center feed make products eligible for richer listings; neither guarantees them.",
      "Each platform imposes different limits, so the same recommendation is implemented differently on Shopify, WooCommerce and Magento.",
    ],
  },

  facts: [
    { label: "Best for", value: "Stores whose buyers search by category, product or need" },
    { label: "Works alongside", value: "Shopping ads, CRO, email and store development" },
    { label: "Typical horizon", value: "Index clean-up in weeks; category growth over 4 to 9 months, depending on competition" },
    { label: "Measured in", value: "Non-brand organic revenue and margin by category" },
  ],

  pillars: [
    {
      title: "Category and collection architecture",
      body: "Categories are where most non-brand demand lands, so the taxonomy has to mirror how people search and not how the warehouse is organised. We map demand to categories, find the gaps and overlaps, and set the hierarchy and internal links that tell search engines which page answers which search.",
      items: ["Demand mapped to category and subcategory", "Hierarchy depth and breadcrumb logic", "Overlapping categories merged or differentiated", "Internal links from navigation, guides and products", "Pagination that keeps deep products reachable"],
    },
    {
      title: "Faceted navigation and index control",
      body: "Size, colour, brand and price filters can combine into millions of URLs. We decide which combinations have real search demand and deserve an indexable page, and keep the rest out of the crawl path using the method each platform supports.",
      items: ["Facet audit against real search demand", "Rules for indexable filter pages", "Canonical, noindex and robots.txt used correctly", "Parameter, sort and session URL handling", "Crawl log review to confirm the result"],
      href: "/technical-seo/",
    },
    {
      title: "Product pages and structured data",
      body: "A product page has to answer a specific search and give search engines clean facts about the item. We set title and description patterns, handle variants deliberately and mark up price, availability and reviews so they match what the shopper sees.",
      items: ["Title and description patterns by product type", "Variant and duplicate product handling", "Product, Offer and review markup", "Out-of-stock and discontinued product rules", "Image naming, alt text and compression"],
    },
    {
      title: "Merchant listings and feeds",
      body: "Google can show products in free listings and richer merchant results using structured data on the page, a Merchant Center feed, or both. We align the two so price and availability agree, and complete the attributes that decide where a product is eligible to appear.",
      items: ["Merchant Center feed audit and fixes", "Identifiers such as GTIN, brand and MPN", "Shipping and returns information", "Feed and page price consistency", "Disapprovals and warnings monitored"],
    },
    {
      title: "Platform-specific implementation",
      body: "The right answer on one platform can be impossible or harmful on another. Recommendations are written for the platform you run, with its URL patterns, template system and app or extension ecosystem in mind.",
      items: ["Shopify: collection, tag and duplicate product paths", "WooCommerce: attribute archives, plugins and hosting speed", "Magento / Adobe Commerce: layered navigation and canonical settings", "BigCommerce: filter URLs and theme markup", "Custom stores: rendering, routing and sitemap generation"],
      href: "/ecommerce-development/",
    },
    {
      title: "Category copy and buying guides",
      body: "Shoppers who are not ready to buy search for comparisons, sizing and how to choose. Content that answers those questions earns visibility earlier in the journey and passes relevance to the categories it links to.",
      items: ["Category introductions that help people choose", "Buying guides and comparison pages", "Sizing, compatibility and care content", "FAQs drawn from customer service questions", "Guides linked into categories and products"],
      href: "/content-seo/",
    },
  ],

  mechanics: {
    heading: "How does a product get from your catalogue into a search result?",
    intro: "A store page passes through five stages before organic search produces an order. Stores tend to lose most at the second, where duplicate and filtered URLs dilute the pages that should rank, and at the fourth, where a plain listing loses the click to a richer one.",
    stages: [
      { name: "Discovery", happens: "Search engines find URLs through navigation, internal links, sitemaps and product feeds.", we: "Make priority categories and products reachable in few clicks and keep filter traps out of the crawl path." },
      { name: "Selection", happens: "From many near-identical URLs, the search engine picks one version to index and may ignore the rest.", we: "Set canonicals, variant rules and index controls so the chosen version is the one you intended." },
      { name: "Matching", happens: "Each search is matched to a page type: broad searches to categories, specific ones to products, questions to guides.", we: "Give every valuable search one clear target page and remove pages that compete with it." },
      { name: "Listing", happens: "The result may show price, availability, ratings and delivery details, drawn from structured data and feeds.", we: "Supply accurate markup and feed data so listings are eligible for richer formats." },
      { name: "Purchase", happens: "The shopper compares, checks delivery and returns, and buys or leaves.", we: "Keep copy from pushing products down the page and pass what we learn to conversion work." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Crawl, index and revenue baseline", body: "A full crawl is compared with what is indexed and what you intend to be indexed, alongside organic revenue by category and a review of feed health.", outputs: ["Technical and index audit", "Organic revenue baseline by category"] },
    { when: "Weeks 3 to 5", title: "Demand and category map", body: "Search demand is grouped and assigned to categories, filter pages, products and guides, then weighted by margin and stock depth with your merchandising team.", outputs: ["Category and facet map", "Priority list weighted by margin"] },
    { when: "Weeks 5 to 8", title: "Index clean-up and template fixes", body: "The structural changes with the widest effect ship first: facet rules, canonicals, template titles, structured data and lifecycle rules for unavailable products.", outputs: ["Developer tickets with acceptance criteria", "Structured data and feed fixes"] },
    { when: "Month 3 onward", title: "Category and content build", body: "Priority categories are rewritten and relinked, new landing pages are created where demand justifies them, and buying guides are published in cycles.", outputs: ["Optimised category pages each cycle", "Buying guides and internal links"] },
    { when: "Every month", title: "Trading review", body: "Organic revenue is read by category alongside stock, seasonality and paid activity, and priorities are reset ahead of peak periods.", outputs: ["Report by category and margin band", "Updated priorities and seasonal plan"] },
  ],

  comparison: {
    heading: "Ecommerce SEO or Google Shopping ads: where should the budget go?",
    intro: "Both put products in front of people who are searching to buy, and both draw on the same product data. They differ in how quickly they pay back and in what happens when spending stops.",
    columns: ["Ecommerce SEO", "Google Shopping ads"],
    rows: [
      { label: "Speed", a: "Builds over months", b: "Live once the feed is approved" },
      { label: "Cost model", a: "Work on assets you keep", b: "Paid per click" },
      { label: "Margin effect", a: "No media cost per order", b: "Media cost on every paid order" },
      { label: "Coverage", a: "Categories, products and guides", b: "Product listings driven by the feed" },
      { label: "Control", a: "Earned, no fixed position", b: "Bids, budgets and product groups" },
      { label: "Best use", a: "Evergreen categories with steady demand", b: "Launches, peaks and proven sellers" },
    ],
    verdict: "Shopping ads show quickly which products and searches sell, and SEO lowers the cost of the demand that proves durable. Most stores need both, planned from one view of margin by category.",
    link: { label: "See our Google Ads service", href: "/google-ads/" },
  },

  industries: ["ecommerce", "b2b", "manufacturing", "automotive", "technology", "healthcare"],
  markets: ["india", "usa", "uk", "uae"],
  scenario: "d2c-ecommerce-margin",

  faqs: [
    { q: "How much does ecommerce SEO cost?", a: "Cost depends on the size of the catalogue, the platform, how much development the fixes need and how much content your team can produce. A store with a few hundred products is a different project from one with hundreds of thousands. We scope after a growth audit and explain what each part of the proposal is for." },
    { q: "How long does ecommerce SEO take to show results?", a: "Structural fixes such as index clean-up and corrected canonicals can show within weeks of being crawled. Growth on competitive category searches usually takes several months and depends on your authority, your competitors and how quickly changes are released. We give a realistic range after the audit, not before it." },
    { q: "Is ecommerce SEO worth it if we already run Shopping ads?", a: "Usually, yes. Ads pay for each visit, while organic visibility on the same categories reduces the share of revenue that depends on media spend. The two also share product data, so feed and page improvements help both. Where margin is thin, lowering blended acquisition cost is often the main reason to invest." },
    { q: "Is Shopify good for SEO?", a: "Shopify handles the basics well: hosting, sitemaps, canonical tags and a fast checkout. Its limits are a fixed URL structure and duplicate product paths through collections, which need theme-level handling. WooCommerce and Magento allow more control and demand more maintenance. Platform rarely decides success; how the store is configured does." },
    { q: "Should filter pages be indexed?", a: "Only the ones people search for. A filtered page such as a brand within a category can deserve its own indexable URL, title and copy. Most combinations, along with sort orders and price ranges, have no search demand and should be kept out of the index so they do not dilute the pages that matter." },
    { q: "What should we do with out-of-stock products?", a: "It depends on whether the product is coming back. Temporarily unavailable items should stay live with accurate availability markup and alternatives shown. Permanently discontinued items should redirect to the closest replacement or parent category when one exists, or return a not-found status when nothing relevant remains." },
    { q: "Does product schema guarantee rich results?", a: "No. Structured data makes a page eligible for price, availability and review features; the search engine decides whether to show them. Markup must match what is visible on the page, and merchant listing features expect additional details such as shipping and returns. We validate markup and monitor reports for errors." },
    { q: "What do you need from us to begin?", a: "Access to Google Search Console, analytics and Merchant Center, a read-only login or export from the store platform, and a conversation with whoever owns merchandising. Margin by category is valuable if you can share it, because it changes which categories we would prioritise first." },
    { q: "How is ecommerce SEO measured?", a: "By non-brand organic revenue, read by category and margin band, with conversion rate and new customer share alongside. Supporting measures are category visibility and the gap between indexed URLs and the URLs you intend to have indexed. Rankings are reported as a diagnostic, not as the result." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Ecommerce SEO Services for Online Stores",
  metaDescription: "Ecommerce SEO services for Shopify, WooCommerce, Magento, BigCommerce and custom stores: category structure, faceted navigation, product schema and feeds.",
};
