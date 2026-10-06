import type { Service, ServiceMaster } from "@/types";

export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is international SEO?",
    text: "International SEO is the practice of structuring and localising a website so that search engines show the right country and language version to the right searcher. It covers which markets to enter, whether each market gets its own domain, subdomain or subfolder, how hreflang annotations connect equivalent pages, and how content is adapted to local search behaviour. It is measured by qualified demand in each market, not by the number of languages published.",
    takeaways: [
      "Hreflang tells search engines which pages are equivalents for different languages or regions; it does not raise rankings by itself.",
      "Country domains send the strongest location signal, but each one has to build authority separately.",
      "Translation carries meaning across; localisation starts from how people in that market actually search.",
      "Search engines differ by market, so a plan built only for Google will miss some countries.",
    ],
  },

  facts: [
    { label: "Best for", value: "Companies selling, or about to sell, in more than one country or language" },
    { label: "Works alongside", value: "Technical SEO, content, digital PR and web development" },
    { label: "Typical horizon", value: "Targeting fixes in weeks; a new market often needs 6 to 12 months, depending on competition" },
    { label: "Measured in", value: "Leads and revenue by market, and correct-version visibility" },
  ],

  pillars: [
    {
      title: "Market selection",
      body: "Not every market justifies a localised site. We size search demand in the local language, read who already holds the results, and weigh that against whether you can sell, deliver and support there.",
      items: ["Local-language demand sizing", "Competitor strength by market", "Legal, payment and delivery readiness", "Entry order and investment level", "Markets to postpone, with reasons"],
    },
    {
      title: "Domain and URL structure",
      body: "Country domains, subdomains and subfolders each trade location signal against shared authority and running cost. We model the options against your brand, platform and resources, and recommend one with the reasoning written down.",
      items: ["ccTLD, subdomain and subfolder modelling", "Language versus country targeting", "URL conventions for each locale", "Migration and redirect planning", "Hosting, CDN and speed by region"],
      href: "/technical-seo/",
    },
    {
      title: "Hreflang and canonical logic",
      body: "Hreflang fails quietly: one missing return link, or a canonical pointing at another locale, and the wrong version ranks. We specify the annotations, choose where they live and test them across the whole site.",
      items: ["Hreflang in HTML, HTTP headers or sitemaps", "Reciprocal return links verified", "Self-referencing canonicals per locale", "x-default for unmatched searchers", "Locale selectors instead of forced redirects"],
    },
    {
      title: "Localisation and local keyword research",
      body: "People in two countries that share a language often search with different words, expect different proof and buy in different ways. Research is done in the local language by native specialists, and content is adapted to what it finds.",
      items: ["Keyword research in the local language", "Terminology, spelling and units", "Currency, pricing and payment methods", "Local proof, regulation and examples", "Native review of machine drafts"],
      href: "/content-seo/",
    },
    {
      title: "Local authority",
      body: "A site with strong references at home can be unknown in a new country. Coverage and links from publications that matter locally help search engines and buyers accept the site as relevant there.",
      items: ["Local media and trade publications", "Country-specific stories and data", "Local business listings where relevant", "Regional partners and associations", "Referring domains tracked by country"],
      href: "/digital-pr/",
    },
    {
      title: "Governance and measurement",
      body: "Regional teams and agencies will change the site. Shared standards keep the structure intact, and a single reporting view lets leadership compare markets on the same terms.",
      items: ["Standards for regional publishing", "Launch checklist for new locales", "Wrong-version ranking monitoring", "Reporting by country and language", "Search engines beyond Google where relevant"],
      href: "/enterprise-seo/",
    },
  ],

  mechanics: {
    heading: "How does a search engine decide which country version to show?",
    intro: "Search engines combine several signals to match a page to a searcher's language and location. None of them is a switch you can simply set, which is why international sites so often show the wrong version. These are the five stages, in order.",
    stages: [
      { name: "Crawl", happens: "Each locale's URLs must be discovered and fetched. Crawlers often arrive from one country and may not state a language preference.", we: "Give every version its own crawlable URL and avoid redirects based on IP address or browser language." },
      { name: "Language", happens: "The language of a page is read from its visible content, not from code labels alone.", we: "Keep one language per page, including navigation and boilerplate, and remove half-translated templates." },
      { name: "Grouping", happens: "Hreflang annotations, when valid and reciprocal, tell the engine that pages are alternates of one another.", we: "Generate hreflang from a single source of truth and test that every link is returned." },
      { name: "Targeting", happens: "Location is inferred from signals such as a country domain, hreflang, local links, currency and addresses.", we: "Align those signals for each market so they all point the same way." },
      { name: "Serving", happens: "In results, the engine shows the version that best fits the searcher's language and location.", we: "Monitor which URL ranks in each country and correct the cases where the wrong one appears." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "International audit", body: "The current structure, hreflang, canonicals and redirects are tested, and visibility is split by country to show where the wrong version ranks or nothing ranks at all.", outputs: ["International technical audit", "Visibility baseline by country"] },
    { when: "Weeks 3 to 6", title: "Market and structure decisions", body: "Demand and competition are sized per market, and domain structure options are modelled with their cost, risk and expected benefit.", outputs: ["Market prioritisation model", "Structure recommendation with reasoning"] },
    { when: "Weeks 6 to 10", title: "Specification and build", body: "Hreflang, canonical and URL rules are written as a specification, implemented with your developers and validated on staging before release.", outputs: ["Hreflang and URL specification", "Pre-launch test report"] },
    { when: "Month 3 onward", title: "Localisation in waves", body: "Priority pages are localised market by market from local keyword research, reviewed by native specialists and supported by local coverage.", outputs: ["Localised pages per market", "Local keyword maps"] },
    { when: "Every month", title: "Market review", body: "Each market is read on the same measures: correct-version visibility, qualified traffic, leads and revenue.", outputs: ["Report by country and language", "Next market and page priorities"] },
  ],

  comparison: {
    heading: "Country domains or subfolders: which structure should you choose?",
    intro: "This is the decision that is hardest to reverse. Subdomains sit between the two and are usually chosen for platform or infrastructure reasons, so the practical choice for most companies is between separate country domains and folders on one domain.",
    columns: ["Country domains (ccTLDs)", "Subfolders on one domain"],
    rows: [
      { label: "Location signal", a: "Strongest, tied to one country", b: "Relies on hreflang and content" },
      { label: "Authority", a: "Each domain builds its own", b: "Shared across all markets" },
      { label: "Running cost", a: "Higher: many sites to maintain", b: "Lower: one site, one platform" },
      { label: "Local trust", a: "Familiar to local buyers", b: "Depends on brand recognition" },
      { label: "Targeting", a: "A country, not a language", b: "Country or language" },
      { label: "Best use", a: "Deep commitment to few markets", b: "Many markets, limited resources" },
    ],
    verdict: "Subfolders suit most companies because authority and effort are shared, and they are the safer default when resources are limited. Country domains earn their cost where local trust, regulation or a dedicated local team make a separate presence worthwhile.",
    link: { label: "See our technical SEO service", href: "/technical-seo/" },
  },

  industries: ["saas", "ecommerce", "travel", "manufacturing", "education", "b2b"],
  markets: ["europe", "usa", "uae", "canada"],

  faqs: [
    { q: "What is hreflang and do we need it?", a: "Hreflang is an annotation that tells search engines which pages are equivalent versions for different languages or regions. You need it when the same content exists for more than one locale, particularly where versions share a language, such as English pages for the UK, USA and Australia. It prevents the wrong version appearing; it does not raise rankings." },
    { q: "How much does international SEO cost?", a: "Cost depends on the number of markets and languages, the state of the current site structure and how much localisation is needed. Fixing hreflang on one domain is a small project; entering five markets with native content is not. We scope after a growth audit and show which markets the proposal covers and why." },
    { q: "How long does it take to rank in a new country?", a: "Correcting targeting errors on an established site can show within weeks. Building visibility in a market where the brand is unknown usually takes many months, because local relevance and authority have to be earned there. A new country domain generally takes longer than a new subfolder on a domain that already has authority." },
    { q: "Is a subdomain or a subfolder better for international SEO?", a: "A subfolder is usually the simpler choice, because it sits on the main domain and shares its platform and reputation more directly. A subdomain can make sense when a market needs separate hosting, a different platform or a team that runs its own site. Both can rank; the difference is mostly maintenance." },
    { q: "Can we just translate our existing pages?", a: "You can, and it is rarely enough. Direct translation keeps the wording of your home market, while local buyers may use different terms, expect different proof and compare you with different competitors. We start from keyword research in the local language, then adapt pages so they match how that market searches and buys." },
    { q: "Should we redirect visitors automatically by location?", a: "Generally, no. Forced redirects based on IP address or browser language can stop search engine crawlers reaching other versions, and they frustrate travellers and expatriates. A better pattern is to let every version load at its own URL and show a dismissible suggestion to switch, with hreflang doing the work in search results." },
    { q: "Do we need a separate strategy for search engines other than Google?", a: "In some markets, yes. Google leads in most countries, but other engines hold meaningful share in places such as China, Russia and South Korea, and Bing matters for some audiences. Each handles language and location signals somewhat differently, so we check which engines your buyers use before finalising the plan." },
    { q: "What do you need from us to start?", a: "Access to Search Console and analytics, a list of the markets you sell in or plan to enter, and an honest picture of what you can deliver and support in each. Contact with regional teams and whoever manages the CMS helps, because most international fixes depend on templates and publishing workflow." },
    { q: "How do you measure international SEO?", a: "Market by market, on the same measures: whether the correct version ranks, non-brand visibility, qualified traffic, and leads or revenue attributed to that country. Reporting is segmented by country and language so a strong home market cannot hide a weak one. Where CRM data is available, organic demand is tied to pipeline per market." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "International SEO Services: Hreflang & Markets",
  metaDescription: "International SEO services covering market selection, domain structure, hreflang and localisation, so the right country and language version ranks.",
};
