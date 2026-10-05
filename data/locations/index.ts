import type { Country, LocationService } from "@/types";

/**
 * Location content. A page exists only where there is something specific to
 * say about competing in that market. Do not add entries that differ only by
 * place name – they will be thin, and they will be treated as such.
 */
export const countries: Country[] = [
  {
    slug: "india",
    name: "India",
    short: "IN",
    context:
      "India is a mobile-first, multilingual market where search behaviour changes sharply between metros and smaller cities. WhatsApp is a primary business channel, price sensitivity is high and competition for commercial keywords in the major cities is intense.",
    considerations: [
      { title: "Language and script", body: "English, Hindi and regional-language queries often show different intent and different competitors. Coverage should follow where your customers actually search." },
      { title: "WhatsApp in the funnel", body: "Many buyers prefer to enquire and follow up on WhatsApp. Lead capture and automation should be designed around it, on the official Business Platform." },
      { title: "City-level competition", body: "Delhi NCR, Mumbai and Bangalore behave like separate markets. Local presence and reviews are decisive for service businesses." },
    ],
    cities: [
      { slug: "delhi", name: "Delhi", context: "A dense, price-competitive market where locality names drive search and service businesses compete neighbourhood by neighbourhood.", considerations: ["Locality-level targeting across a very large urban area", "Hindi and English search behaviour side by side", "High advertiser density in services, education and healthcare"] },
      { slug: "gurgaon", name: "Gurgaon", context: "A corporate and technology hub with a concentration of company headquarters, SaaS firms, real-estate developers and premium healthcare. Buyers are senior, research carefully and expect a professional digital experience.", considerations: ["B2B and enterprise buyers concentrated in a small geography", "Strong real-estate and premium-services competition", "Search under both Gurgaon and Gurugram spellings"] },
      { slug: "noida", name: "Noida", context: "An IT, manufacturing and education centre with fast residential growth, where sector numbers are part of how people search.", considerations: ["Sector-based local search patterns", "Real-estate and education demand", "Overlap with Delhi and Greater Noida catchments"] },
      { slug: "mumbai", name: "Mumbai", context: "India's financial capital, with strong demand in finance, media, real estate and consumer brands, and very high local competition.", considerations: ["Suburb-specific intent across a long, linear city", "Finance and professional-services advertisers bidding heavily", "English, Hindi and Marathi queries"] },
      { slug: "bangalore", name: "Bangalore", context: "The country's technology centre: a high concentration of SaaS companies, startups and digitally sophisticated buyers.", considerations: ["Technically literate audience that checks claims", "SaaS and startup competition for talent and customers", "Search under both Bangalore and Bengaluru"] },
      { slug: "hyderabad", name: "Hyderabad", context: "A fast-growing technology, pharmaceutical and healthcare market with expanding commercial districts.", considerations: ["Pharma, healthcare and IT services demand", "Telugu and English search behaviour", "Rapidly developing western corridor"] },
      { slug: "pune", name: "Pune", context: "An education, automotive, manufacturing and IT city with a large student and young-professional population.", considerations: ["Education and automotive sectors", "Manufacturing and B2B supply chains", "Marathi and English queries"] },
      { slug: "jaipur", name: "Jaipur", context: "A tourism, jewellery, handicraft and growing startup market, with strong export and hospitality demand.", considerations: ["Tourism and hospitality seasonality", "Export-oriented ecommerce", "Hindi-first local search"] },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    short: "US",
    context:
      "The largest and most competitive digital market. Paid costs are high, privacy rules differ by state and buyers expect polished, fast experiences. Most strategies need to be regional or vertical to be affordable.",
    considerations: [
      { title: "State-level privacy", body: "Consent and data handling requirements vary by state and affect tracking and remarketing design." },
      { title: "Cost of paid demand", body: "Click costs in legal, finance and SaaS reward tight targeting and strong conversion rates." },
      { title: "Regional strategy", body: "National visibility is expensive. Metro and state-level plans often produce better economics." },
    ],
    cities: [
      { slug: "new-york", name: "New York", context: "Borough- and neighbourhood-level competition across finance, legal, real estate, media and hospitality, with some of the highest paid costs anywhere.", considerations: ["Neighbourhood-specific local intent", "Very high cost per click in professional services", "Dense review ecosystems"] },
    ],
  },
  {
    slug: "uk",
    name: "UK",
    short: "UK",
    context:
      "A mature search market with strict advertising standards and data protection rules. British spelling, pricing and proof points are expected; content written for another market is recognised quickly.",
    considerations: [
      { title: "UK GDPR and consent", body: "Tracking and marketing communications must be designed for explicit, recorded consent." },
      { title: "Advertising standards", body: "Claims need substantiation, particularly in finance, health and legal categories." },
      { title: "Localisation", body: "Spelling, terminology and regulation references should be British, not adapted American copy." },
    ],
    cities: [
      { slug: "london", name: "London", context: "A global hub for finance, technology, legal and professional services, with borough-level local search and international audiences.", considerations: ["Borough and postcode-level intent", "International buyers researching UK providers", "Highly competitive professional-services search"] },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    short: "AE",
    context:
      "A bilingual, high-income market with a large expatriate population. English and Arabic search coexist, WhatsApp is widely used for business and sectors such as real estate, healthcare and hospitality are heavily advertised.",
    considerations: [
      { title: "English and Arabic", body: "Both languages matter, and Arabic content needs native writing and right-to-left design, not translation alone." },
      { title: "Sector regulation", body: "Healthcare, real estate and finance advertising require approvals from the relevant authorities." },
      { title: "Expat search behaviour", body: "Audiences search with habits formed in their home countries, which widens the keyword landscape." },
    ],
    cities: [
      { slug: "dubai", name: "Dubai", context: "Intense competition in real estate, hospitality, healthcare and professional services, serving residents, investors and visitors at once.", considerations: ["Community and development names as search terms", "International investor audiences", "Bilingual English and Arabic demand"] },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    short: "CA",
    context:
      "A bilingual market with strict anti-spam and privacy legislation. Search demand is concentrated in a few large metros, and US competitors often rank for Canadian queries.",
    considerations: [
      { title: "English and French", body: "Quebec requires French-language content; hreflang and localisation need care." },
      { title: "Anti-spam law", body: "Email and messaging programmes must meet express consent requirements." },
      { title: "Competing with US sites", body: "Clear Canadian signals in content, pricing and structure help the right version rank." },
    ],
    cities: [
      { slug: "toronto", name: "Toronto", context: "Canada's largest business centre, strong in finance, technology, real estate and professional services, with a highly multicultural audience.", considerations: ["Greater Toronto Area suburb targeting", "Finance and real-estate competition", "Multilingual communities"] },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    short: "AU",
    context:
      "A concentrated market of a few large cities separated by distance. Local search matters greatly for services, and Australian consumer law sets firm rules on claims and reviews.",
    considerations: [
      { title: "City concentration", body: "Most demand sits in five metros, each best treated as its own market." },
      { title: "Consumer law", body: "Testimonials, reviews and performance claims are regulated and must be genuine." },
      { title: "Localisation", body: "Australian spelling, terminology and seasons, which run opposite to the northern hemisphere." },
    ],
    cities: [
      { slug: "sydney", name: "Sydney", context: "Australia's largest city and financial centre, with suburb-level search behaviour and strong competition in trades, property and professional services.", considerations: ["Suburb-specific service searches", "Property and finance sectors", "High mobile and maps usage"] },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    short: "SG",
    context:
      "A compact, high-trust, English-first market that also serves as a regional headquarters for Southeast Asia. Competition is dense and buyers are sophisticated.",
    considerations: [
      { title: "Regional gateway", body: "Many strategies need to serve Singapore and the wider region with clear market targeting." },
      { title: "Data protection", body: "Consent and do-not-call requirements shape lead generation and messaging." },
      { title: "Multilingual audience", body: "English leads, with Mandarin, Malay and Tamil relevant for some consumer categories." },
    ],
    cities: [],
  },
  {
    slug: "europe",
    name: "Europe",
    short: "EU",
    context:
      "Not one market but many: different languages, search habits, competitors and legal details under a shared privacy framework. Sequencing markets well matters more than entering them all.",
    considerations: [
      { title: "GDPR and consent", body: "Analytics and advertising must work with consent rates that vary by country." },
      { title: "Language by market", body: "Native keyword research and writing for each language; English-only coverage leaves most demand untouched." },
      { title: "Site structure", body: "Domain and hreflang decisions made early prevent expensive rework." },
    ],
    cities: [],
  },
];

/** Service × location pages. Add only with genuinely local content. */
export const locationServices: LocationService[] = [
  {
    country: "india",
    city: "gurgaon",
    slug: "seo-services",
    service: "seo-services",
    title: "SEO services in Gurgaon",
    metaDescription:
      "SEO for Gurgaon businesses: B2B, SaaS, real estate and healthcare search strategy built around how buyers in Gurugram and Delhi NCR actually search.",
    intro:
      "Gurgaon concentrates corporate headquarters, technology companies, developers and premium healthcare into a few business districts. The buyers are senior and well informed, and the same handful of competitors appear for most commercial searches. SEO here is less about volume and more about being the most credible result for a small number of valuable queries.",
    localFactors: [
      { title: "Two names, one city", body: "People search for both Gurgaon and Gurugram. Content, profiles and tracking should account for both without duplicating pages." },
      { title: "NCR overlap", body: "Many Gurgaon businesses serve Delhi, Noida and Faridabad. Site structure needs to reflect real service areas instead of a page per place." },
      { title: "B2B density", body: "A large share of demand is company-to-company. Content has to satisfy procurement and leadership readers, not only rank." },
      { title: "Sector and locality terms", body: "Real estate and local services are searched by sector number, road and development name. Those patterns shape the opportunity model." },
    ],
  },
  {
    country: "india",
    city: "gurgaon",
    slug: "ai-seo",
    service: "ai-seo-services",
    title: "AI SEO in Gurgaon",
    metaDescription:
      "AI search optimisation for Gurgaon companies: understand how AI assistants describe and recommend your brand to buyers in Delhi NCR and beyond.",
    intro:
      "Technology and corporate buyers increasingly use AI assistants for vendor research. When someone asks for the leading providers in your category in Delhi NCR, the answer names a short list. We measure whether you are on it, find out which sources the answer drew on and work on the gaps.",
    localFactors: [
      { title: "Location-qualified prompts", body: "We test prompts that include Gurgaon, Gurugram, Delhi NCR and India to see how answers change with geography." },
      { title: "Regional sources", body: "Indian business media, directories and review platforms carry different weight from global ones. The citation strategy reflects that." },
      { title: "Entity clarity", body: "Consistent company details, addresses and leadership information across the web help AI systems describe a local business accurately." },
      { title: "Verification on your site", body: "Careful buyers check an AI answer against the source. The page they land on has to confirm what the assistant said." },
    ],
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getCity(country: string, city: string) {
  return getCountry(country)?.cities.find((c) => c.slug === city);
}

export function getLocationService(country: string, city: string, slug: string) {
  return locationServices.find(
    (l) => l.country === country && l.city === city && l.slug === slug,
  );
}

export const featuredCities = countries.flatMap((c) =>
  c.cities.map((city) => ({ ...city, country: c.slug, countryName: c.name })),
);
