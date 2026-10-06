import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/ecommerce/google-ads/
 * Rules: no client names, no figures, no guarantees. Timings are typical and
 * conditional. Platform features are described generally because they change.
 */
export const record: IndustryServiceRecord = {
  industry: "ecommerce",
  service: "google-ads",
  slug: "google-ads",
  name: "Google Ads for Ecommerce",
  audience: "online retailers and direct-to-consumer brands",

  seo: {
    title: "Google Ads for Ecommerce: Feeds and Margin",
    metaDescription:
      "Google Ads for ecommerce stores: product feed quality, Shopping and automated campaigns, and bidding on margin with new customers reported separately.",
    primaryKeyword: "Google Ads for ecommerce",
    secondaryKeywords: [
      "ecommerce Google Ads management",
      "Google Shopping ads management",
      "product feed optimisation",
      "Performance Max for ecommerce",
      "ecommerce PPC",
      "Google Ads for online stores",
    ],
    searchIntent:
      "An online retailer wants to know how Google Ads should be run for a store so that it adds profit and new customers, and what a specialist would change.",
  },

  hero: {
    title: "Google Ads for Ecommerce, Managed on Margin",
    description:
      "Shopping ads are built from your product feed, and automated campaigns chase whatever value you report. SERPMOZ manages Google Ads for ecommerce stores by fixing the feed first, setting targets on margin instead of revenue, separating new customers from returning ones, and keeping brand searches out of the headline result.",
  },

  facts: [
    { label: "Best for", value: "Stores with a clean catalogue, known margins and order tracking" },
    { label: "Works alongside", value: "Ecommerce SEO, Meta Ads, email and conversion work" },
    { label: "Typical horizon", value: "Sales at launch; automated bidding typically settles over weeks" },
    { label: "Measured in", value: "Contribution margin after ad spend, and new customers" },
  ],

  answer: {
    question: "How does Google Ads work for an ecommerce store?",
    text: "Google Ads for ecommerce shows your products to people searching for them, and most of it runs from a product feed instead of keywords. Google matches searches to feed titles and attributes, and automated campaigns set bids from the order values you report. The work is therefore feed quality, accurate values, targets based on margin, and reporting that separates new customers from sales you would have made anyway.",
  },

  buyers: {
    heading: "How online shoppers search and choose",
    paragraphs: [
      "A shopper sees a row of product images with prices before reading a line of text. The decision to click is made on photograph, title, price, delivery promise and reviews, beside marketplaces and competitors. Your brand name carries little weight unless the shopper already knows it. For [ecommerce businesses](/industries/ecommerce/) this means the feed does the job that ad copy does elsewhere, and a weak title or missing attribute removes a product from searches it should have matched.",
      "Searches fall into recognisable kinds. Some name a product type and a feature, some name a brand and a model, and some describe a need without knowing what the product is called. The first two convert on a product page; the third needs a category page with guidance. Sending every click to the home page wastes the visit. Good [Google Ads](/google-ads/) management maps each kind of search to the page that finishes the purchase.",
      "Returning customers behave differently from new ones. They search the brand name, click an ad out of habit and buy what they intended to buy regardless. Automated campaigns are drawn to these easy sales because they make reported return look strong. The new shopper, who costs more to win, is the one growth depends on. Seasonal peaks sharpen all of this: demand, click prices and stock shift together within days.",
    ],
  },

  problems: [
    {
      title: "Feed titles written for the warehouse",
      body: "Product titles copied from internal systems carry codes and abbreviations shoppers never type. Missing colour, size, material or identifiers narrow the searches a product can match, and disapprovals remove items without anyone noticing.",
    },
    {
      title: "Targets set on revenue alone",
      body: "A return target on revenue treats a low-margin bestseller and a high-margin accessory as equal. Automated bidding pushes whatever sells easily, and reported return can look strong while contribution after ad spend and returns shrinks.",
    },
    {
      title: "Brand search inflating the result",
      body: "Automated campaigns pick up searches for your own name and present those orders as their achievement. Remove brand and returning customers, and the cost of winning a new shopper is often far higher.",
    },
    {
      title: "Ads running on unavailable products",
      body: "Prices and stock change faster than the feed updates. Ads show an old price or an item that has sold out, the click is paid for, and the mismatch can lead to product disapprovals.",
    },
    {
      title: "Seasonal peaks handled by habit",
      body: "Budgets and targets stay fixed while demand and competition jump before a sale period, or a short promotion teaches bidding to expect conversion rates that vanish the following week. Both distort spending afterwards.",
    },
  ],

  approach: [
    {
      title: "Product feed rebuilt for search",
      body: "Titles are rewritten in the order shoppers search: product type, key attribute, brand, variant. We complete identifiers, categories, images and attributes, fix disapprovals and add custom labels for margin band, stock depth and season, so campaigns can follow commercial reality.",
    },
    {
      title: "Margin as the bidding target",
      body: "We pass profit-aware values where your systems allow, or set separate targets by margin band. Our note on [what automated bidding should optimise for](/resources/what-automated-bidding-should-optimise-for/) sets out the principle: the system pursues the number it is given, so that number must reflect profit.",
    },
    {
      title: "Shopping and automated campaigns governed",
      body: "Standard Shopping, automated cross-channel campaigns and Search each get a defined job. Automated campaigns receive brand exclusions, sensible asset groups and first-party audience signals, and their placement and search term reports are reviewed on a schedule to confirm where spend is going.",
    },
    {
      title: "New and returning customers separated",
      body: "Customer lists are uploaded with consent so campaigns can distinguish existing buyers. New customer acquisition is reported and, where suitable, bid for separately. Existing customers are usually cheaper to reach by email or messaging than through a paid click on their own brand search.",
    },
    {
      title: "Stock and price kept in sync",
      body: "Feed updates are scheduled to match how often prices and inventory change, with supplementary feeds or automated rules for fast-moving lines. Low-stock and out-of-season products are held back by label, and promotions are submitted in a way the platform can display.",
    },
    {
      title: "The right product or category page",
      body: "Product ads land on the variant advertised, with price and availability matching the feed. Broad searches land on a filtered category page instead of the home page. We check mobile speed and the visibility of delivery and returns terms on both.",
    },
  ],

  searches: {
    heading: "Which search themes deserve budget or exclusion",
    intro:
      "Shopping campaigns have no keywords, so these themes are steered through feed titles, campaign structure and negatives. They are patterns in words; your own search term reports supply the real list.",
    groups: [
      {
        name: "Product type and attribute",
        examples: ["product type + material", "product type + size or colour", "product type for a named use"],
        note: "The core of non-brand demand. Make sure feed titles carry these attributes, bid by margin band, and land the click on the matching product or category.",
      },
      {
        name: "Your own brand",
        examples: ["brand name alone", "brand name + product type", "brand name + discount code"],
        note: "Keep in a separate, low-cost campaign and exclude from automated campaigns where possible. Report it apart, since most of these shoppers would have arrived anyway.",
      },
      {
        name: "Other brands you stock",
        examples: ["manufacturer name + model number", "manufacturer name + product type", "model name + price"],
        note: "Shoppers compare on price and delivery, so margins are thin. Bid only where you are competitive, and use feed identifiers so the correct product is matched.",
      },
      {
        name: "Themes to exclude",
        examples: ["product type + repair or manual", "product type + second hand", "product type + wholesale or free"],
        note: "Add as account-level negatives and review search terms regularly. Support, repair, used and trade searches rarely buy, and automated campaigns will otherwise test them.",
      },
    ],
  },

  rules: [
    {
      title: "Price, discount and availability accuracy",
      body: "The price, sale claim and stock status shown in an ad must match the product page, and consumer law in most markets restricts misleading reference prices. Ask your legal adviser to confirm how discounts may be presented.",
    },
    {
      title: "Product claims and restricted categories",
      body: "Health, safety, environmental and performance claims need evidence, and platforms restrict or prohibit some product categories. Policies change, so check current platform rules and have your compliance adviser review claims before they enter the feed.",
    },
    {
      title: "Customer data and consent",
      body: "Uploading customer lists, measuring conversions and remarketing all depend on consent and on privacy law in each market you sell to. Confirm with your legal or compliance adviser what may be collected and shared with platforms.",
    },
  ],

  measures: [
    "Contribution margin after ad spend, shipping and returns",
    "New customers acquired and the cost of each",
    "Non-brand revenue and margin, apart from brand search",
    "Share of catalogue approved, in stock and showing",
    "Repeat purchase rate of customers won through ads",
  ],

  timeline: [
    {
      phase: "Audit and measurement",
      when: "Weeks 1 to 2",
      body: "We audit the feed, conversion values, campaign structure and the split between brand and non-brand, new and returning. Order values are checked against the store's own records so reported revenue can be trusted.",
    },
    {
      phase: "Feed and structure rebuild",
      when: "Weeks 2 to 5",
      body: "Titles, attributes and labels are corrected, disapprovals cleared and campaigns reorganised by margin band and role. Changes are staged, since restructuring everything at once typically resets what bidding has learned so far.",
    },
    {
      phase: "Bidding settles",
      when: "Weeks 5 to 10",
      body: "Automated bidding typically needs several weeks of clean data on the new values before results are a fair guide. Smaller catalogues and lower order volumes take longer. Targets are left alone during this period.",
    },
    {
      phase: "Optimise and plan seasons",
      when: "Month 3 onward",
      body: "Product-level reviews move budget towards items that add margin and new customers. Peak periods are planned ahead with stock, budget and target changes agreed, and promotions excluded from bidding data where they would mislead.",
    },
  ],

  faqs: [
    {
      q: "Should we use Performance Max or standard Shopping?",
      a: "It depends on the feed, the volume of orders and how much visibility you need. Automated campaigns reach more placements and can perform well with accurate values and enough conversions. Standard Shopping offers more control over search terms and bids, which suits smaller catalogues or thin margins. Many stores run both with distinct roles.",
    },
    {
      q: "Why does reported return look good while profit is flat?",
      a: "Usually because the figure blends things that should be separate. Brand searches and returning customers produce orders that would mostly have happened without an ad. Revenue also ignores margin, shipping, discounts and returns. Splitting the account into brand and non-brand, new and returning, and reading it on contribution after costs normally explains the gap.",
    },
    {
      q: "How much does Google Ads cost for an ecommerce store?",
      a: "Media spend is set by you and shaped by click prices in your category, which depend on competition and season. Management cost depends on catalogue size, the condition of the feed, the number of markets and how much tracking and margin data work is needed. We scope it after a [growth audit](/growth-audit/).",
    },
    {
      q: "How long does Google Ads take to work for a store?",
      a: "Product ads can show within days of the feed being approved. A fair reading takes longer: automated bidding typically needs several weeks of consistent data, and any large change to feed, values or structure restarts part of that learning. Stores with few orders per week need more time before patterns are reliable.",
    },
    {
      q: "Can you optimise for profit without our exact margins?",
      a: "Partly. Exact product margins give the most accurate result, but margin bands are usually enough: a label marking each product as high, medium or low margin lets campaigns carry different targets. Where even that is unavailable, we can use category-level assumptions agreed with your finance team and refine them later.",
    },
    {
      q: "How should we handle sales periods and seasonal peaks?",
      a: "Plan before the peak instead of reacting inside it. That means confirming stock, setting budgets that can absorb higher demand, adjusting targets for expected conversion rates and telling the platform about short promotions where it offers a way. After the peak, targets return to normal and the unusual period is kept from distorting bidding.",
    },
    {
      q: "Do we still need SEO if Shopping ads are working?",
      a: "Yes, in most cases. Paid product listings stop when the budget does, and category searches also show organic results. Strong category and product pages improve landing page quality for ads too. Planning both together shows where you are paying for clicks you would win anyway, which is how our [ecommerce SEO](/ecommerce-seo/) work is designed.",
    },
  ],

  related: {
    services: ["ecommerce-seo", "meta-ads", "cro", "email-marketing"],
    locations: ["/digital-marketing-agency-india/", "/digital-marketing-agency-usa/", "/digital-marketing-agency-uk/"],
    articles: ["what-automated-bidding-should-optimise-for", "attribution-questions-worth-answering"],
  },

  cta: {
    title: "See what your ad spend earns after margin",
    body: "A growth audit separates brand from non-brand and new from returning customers, reviews the feed, and shows which products add profit and which only add revenue.",
  },
};
