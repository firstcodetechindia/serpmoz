import type { LocationRecord } from "@/types";

/**
 * /locations/india/ : the country page. City detail (districts, locality
 * naming, local competition) belongs to the city records, not here.
 * Rules: no statistics, no client names, no guarantees, no local office claims.
 */
export const location: LocationRecord = {
  slug: "india",
  kind: "country",
  name: "India",
  inSentence: "India",
  code: "IN",
  countryCode: "IN",
  continent: "Asia",
  market: "india",
  latitude: 20.5937,
  longitude: 78.9629,
  photo: "skyline",

  seo: {
    title: "Digital Marketing Agency in India",
    metaDescription:
      "Digital marketing agency in India for SEO, local search, Google Ads and WhatsApp follow-up, planned by city, language and buyer and delivered remotely.",
    primaryKeyword: "digital marketing agency in India",
    secondaryKeywords: [
      "SEO company in India",
      "SEO agency in India",
      "digital marketing company in India",
      "SEO services in India",
      "local SEO India",
      "Google Ads management India",
      "AI SEO services India",
    ],
    searchIntent:
      "Founders and marketing heads of Indian businesses, and overseas companies entering India, who are ready to hire a digital marketing agency or SEO company and are comparing providers on how well they understand Indian search, languages and enquiry habits.",
  },

  hero: {
    title: "Digital Marketing Agency and SEO Company in India",
    description:
      "India is not one market. A buyer in Gurgaon, a patient in Jaipur and a shopper in a smaller town search in different languages, on different budgets, and trust different proof. Almost all of them do it on a phone, and many would sooner message a business on WhatsApp than fill in a form. SERPMOZ plans search, paid media, automation and web work around those differences, city by city.",
  },

  facts: [
    { label: "Languages we plan for", value: "English, Hindi, Hinglish typed in Latin script, and regional languages where your customers use them" },
    { label: "Where discovery happens", value: "Google Search and Maps, YouTube, Instagram, WhatsApp, marketplaces and sector portals" },
    { label: "Sectors with weight", value: "Real estate, education, healthcare, ecommerce, SaaS and IT services, financial services" },
    { label: "Cities covered", value: "Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Pune and Jaipur" },
  ],

  answer: {
    question: "What does a digital marketing agency do for businesses in India?",
    text: "A digital marketing agency in India plans and runs the work that brings a business customers online: SEO, local SEO and Google Maps optimisation, Google Ads and Meta Ads, WhatsApp automation, content, conversion work and web development. SERPMOZ, an AI-powered digital growth company, does this work for businesses in India remotely. Each plan is built around the cities you serve, the languages your customers search in and the way they prefer to enquire, and every engagement starts with a growth audit of your current position.",
  },

  overview: {
    heading: "About digital growth in India",
    paragraphs: [
      "Most Indian customers meet a business for the first time on a phone screen, often a modest Android handset on mobile data. That single fact shapes almost everything else, including what a digital marketing agency should do first. Pages have to load quickly on an ordinary connection, the phone number and the WhatsApp button have to be reachable with a thumb, and forms have to be short enough to finish on a commute. A site designed on a large monitor and approved in a boardroom frequently fails the one test that counts here: whether a hurried person on a mid-range phone can understand the offer and get in touch within a few seconds.",
      "The country behaves as a set of city markets with their own competitors and habits. [Delhi](/locations/india/delhi/) is searched locality by locality and argues about price. [Mumbai](/locations/india/mumbai/) is organised by suburb and carries heavy finance and property advertising. [Bangalore](/locations/india/bangalore/) has a technical audience that checks claims before it believes them, and [Gurgaon](/locations/india/gurgaon/) concentrates corporate and B2B buyers in a small area. Hyderabad, Pune, Noida and Jaipur each differ again. Outside the metros, competition for search terms is often lighter, regional languages matter more, and buyers lean harder on a phone call or a recommendation before they commit.",
      "Indian buyers compare carefully, and price is rarely absent from the comparison. They look for fees, EMI options, offers and delivery terms early, and they are wary of businesses that hide them. Trust is built with visible, checkable signals: recent Google reviews, photographs of real premises and staff, registration and accreditation details, a working landline or mobile number, and a prompt reply. That is why [local SEO](/local-seo-services/) and reputation work sit so close to revenue here, and why a quick, helpful answer on [WhatsApp](/whatsapp-automation/) frequently wins an enquiry that a slower competitor with a better website loses.",
      "For an overseas company, India rewards patience and local detail more than a translated global campaign. For an Indian company, the pressure is usually the opposite: paid costs in the metros keep rising, the same advertisers appear on every commercial search, and enquiry quality varies wildly by source. In both cases the work that pays is unglamorous. Decide which cities and languages are worth serving, measure enquiries through to sales instead of counting form fills, respond to leads faster than competitors do, and build organic and map visibility so that growth does not depend entirely on next month's advertising budget.",
    ],
  },

  discovery: {
    heading: "How customers discover businesses in India",
    intro:
      "Discovery in India is spread across search, maps, video, messaging and marketplaces, and most journeys touch several of them before a purchase or an enquiry. The mix changes with city size, language, age and how much money is at stake.",
    channels: [
      {
        name: "Google Search on mobile",
        body: "Google is the dominant search engine in India and most queries are typed or spoken on a phone. People search in English, in Hindi and regional scripts, and very often in Hinglish, with Hindi words spelled in Latin letters. Queries tend to carry a locality, a price word or 'near me', so results and competitors shift from one neighbourhood to the next.",
      },
      {
        name: "Google Maps and business profiles",
        body: "For clinics, coaching centres, restaurants, showrooms and repair services, the map result is often the whole decision. People read the rating, scan recent reviews and photographs, then tap to call or ask for directions without visiting the website. Because Indian addresses are frequently described by landmark, an accurate pin and clear locality details matter more than they do in markets with tidy street numbering.",
      },
      {
        name: "WhatsApp",
        body: "WhatsApp is widely used by Indian businesses and is where a large share of enquiries, quotations, brochures, payment links and follow-ups actually happen. Many customers click a WhatsApp button in preference to a form because they expect a human reply and a record of the conversation. Done properly this runs on the official WhatsApp Business Platform, with opt-in and approved templates, and connects to the CRM.",
      },
      {
        name: "YouTube and short video",
        body: "YouTube works as a search engine in its own right for product reviews, how-to guidance, exam preparation, property walk-throughs and health explanations, much of it in Hindi and regional languages. Instagram Reels and YouTube Shorts drive discovery for fashion, beauty, food, travel and local services, with creators acting as a trust signal. Buyers commonly watch a video and then search for the brand by name.",
      },
      {
        name: "Marketplaces and sector portals",
        body: "Product searches often start on Amazon, Flipkart, Meesho, Myntra or Nykaa instead of a search engine, and quick-commerce apps have changed expectations for everyday goods in the larger cities. Services have their own portals: property sites for homes, Practo for doctors, Justdial for local trades, IndiaMART and TradeIndia for industrial and wholesale buyers, and travel and food apps for hospitality. A business usually needs both its own site and a deliberate presence on the portals its buyers use.",
      },
      {
        name: "Word of mouth, reviews and AI assistants",
        body: "Recommendations from family, colleagues, housing society groups and community WhatsApp groups still decide a great many purchases, and people then check that recommendation against Google reviews. Alongside this, AI assistants and the AI answers shown in search are becoming a research step for English-speaking, urban and professional buyers, especially for software, education and financial choices.",
      },
    ],
  },

  searchAi: {
    heading: "Search and AI discovery in India",
    paragraphs: [
      "Google carries the overwhelming majority of Indian web search, so strategy starts there, with Bing mattering mainly as a source for some AI assistants and for desktop users in corporate settings. Language is the first planning decision. English queries, Hindi queries and Hinglish queries for the same need can return different pages and different competitors, and commercial intent is not spread evenly between them. We map demand by language and script before recommending content, because publishing a thin translated copy of every page is slower, costlier and usually less effective than a few well-made pages where customers actually search.",
      "The second decision is geography. A national plan suits ecommerce, SaaS, online education and financial products sold across the country. A clinic group, a developer, a coaching brand or a showroom chain competes one catchment at a time, where proximity, reviews and profile quality outweigh domain strength. Most Indian businesses of any size need both: national pages that earn authority, and city and locality pages that say something true and specific about each place. Template pages cloned across hundreds of localities remain common in India, and they are increasingly a liability instead of an advantage.",
      "AI assistants have entered the research journey quickly. Indian buyers ask ChatGPT, Gemini and similar tools to compare software, shortlist colleges, explain insurance terms or suggest providers in a city, and Google shows AI-generated answers on many Indian results. Our [AI SEO services](/ai-seo-services/) measure how these systems describe your brand, which sources they draw on, and where the gaps are, then work on the content and third-party coverage that inform them. AI answers vary by prompt, user, language and day, and nobody can guarantee placement in them. What can be done is honest measurement and steady improvement of the evidence.",
    ],
  },

  opportunities: [
    {
      title: "Regional-language demand that competitors ignore",
      body: "Many categories are fought hard in English and barely contested in Hindi or a regional language, even where the customers plainly prefer it. A business that publishes useful, well-written pages and videos in the language its buyers use often meets lighter competition and warmer enquiries.",
    },
    {
      title: "Smaller cities with rising demand and thinner competition",
      body: "Advertisers crowd into the metros while demand for education, healthcare, property, retail and financial products grows steadily in tier-two and tier-three cities. Local profiles, city pages and regionally targeted campaigns there frequently reach customers at a lower cost than the same effort in Delhi NCR or Mumbai.",
    },
    {
      title: "Speed of response as a competitive edge",
      body: "In high-enquiry sectors, the business that replies first with something useful tends to win the conversation. WhatsApp automation, sensible lead routing and a short qualifying flow convert more of the enquiries you already pay for, before any increase in media spend.",
    },
    {
      title: "Reviews and profiles as a trust asset",
      body: "A steady flow of genuine, recent reviews with thoughtful replies is still uncommon among Indian local businesses, including well-funded ones. Building that routine improves map visibility and gives cautious, price-aware buyers a reason to choose you over a cheaper unknown.",
    },
    {
      title: "Global demand served from India",
      body: "Indian SaaS, IT services, manufacturing and export-led ecommerce brands sell to buyers in North America, the UK, the Gulf and beyond. Search, content and AI visibility planned for those markets, in their spelling and with their proof points, opens revenue that domestic campaigns never touch.",
    },
  ],

  services: [
    {
      slug: "seo-services",
      title: "SEO Services in India",
      body: "Builds organic visibility for the queries that carry commercial value, sized by city, language and the revenue each enquiry is worth.",
      why: "Paid costs in the metros keep climbing, so an organic position that does not need to be bought again every month changes the economics of growth.",
    },
    {
      slug: "local-seo-services",
      title: "Local SEO in India",
      body: "Keeps every branch visible in map results and local listings, with accurate profiles, consistent details, real reviews and useful location pages.",
      why: "Service businesses here are chosen locality by locality, often from the Google Maps result alone, and landmark-style addresses make accurate listings harder than they look.",
    },
    {
      slug: "google-ads",
      title: "Google Ads Management in India",
      body: "Runs search, Performance Max and YouTube campaigns that bid towards qualified enquiries and sales instead of raw lead counts.",
      why: "Commercial search in Delhi NCR, Mumbai and Bangalore is crowded with advertisers, and lead quality varies enough that optimising for volume alone wastes budget quickly.",
    },
    {
      slug: "meta-ads",
      title: "Meta Ads in India",
      body: "Creates demand on Instagram and Facebook with mobile-first creative, regional-language variants and campaigns that open a WhatsApp conversation.",
      why: "Instagram and Facebook reach deep into smaller cities, and click-to-WhatsApp formats match how Indian customers prefer to make contact.",
    },
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation in India",
      body: "Captures, qualifies and follows up enquiries on the official WhatsApp Business Platform, connected to your CRM and your sales team.",
      why: "Buyers expect to enquire, receive documents and be reminded on WhatsApp, and slow or unmanaged replies are where many Indian businesses lose paid-for leads.",
    },
    {
      slug: "youtube-marketing",
      title: "YouTube Marketing in India",
      body: "Plans and optimises long-form videos and Shorts that answer buyer questions and appear in both YouTube and Google results.",
      why: "Indians research purchases, courses, treatments and properties on YouTube, much of it in Hindi and regional languages where written content is thin.",
    },
    {
      slug: "ecommerce-seo",
      title: "Ecommerce SEO in India",
      body: "Improves category, product and content pages so your own store earns search traffic that marketplaces do not take a commission on.",
      why: "D2C brands here compete with Amazon, Flipkart and quick commerce for the same shopper, so owned organic demand protects margin.",
    },
    {
      slug: "ai-seo-services",
      title: "AI SEO Services in India",
      body: "Measures and improves how AI assistants and AI search answers describe and cite your brand for the questions your buyers ask.",
      why: "Urban, English-speaking and professional buyers in India have adopted AI assistants quickly for software, education and financial research.",
    },
  ],

  industries: [
    { slug: "real-estate", note: "Developers and brokers advertise heavily in every metro, buyers research for months across portals, and enquiry quality matters far more than enquiry volume." },
    { slug: "education", note: "Coaching, schools, universities and online courses compete nationally and locally, with parents and students comparing fees, results and reviews in detail." },
    { slug: "healthcare", note: "Hospitals, clinics and diagnostic chains are found through Maps and doctor portals, and marketing has to respect professional rules on what can be claimed." },
    { slug: "ecommerce", note: "D2C brands balance marketplaces, quick commerce and their own stores, with cash on delivery, returns and discount expectations shaping margin." },
    { slug: "saas", note: "Indian software companies sell to domestic SMEs and to overseas buyers, usually with separate positioning, pricing and search strategies for each." },
    { slug: "finance", note: "Lending, insurance, investment and fintech products draw intense search competition and sit under close regulatory attention to advertising claims." },
    { slug: "manufacturing", note: "Industrial buyers source through B2B portals, search and trade networks, so suppliers need findable specifications, certifications and a fast quotation process." },
    { slug: "hospitality", note: "Hotels, restaurants and venues depend on Maps, food and travel apps and Instagram, with demand moving around festivals, wedding season and holidays." },
  ],

  considerations: [
    {
      title: "Language, script and Hinglish",
      body: "English, Hindi in Devanagari, Hindi typed in Latin letters and regional languages can each show different intent and different competitors for the same need. Decide coverage from search and customer data, use native writers instead of machine translation alone, and set up language targeting correctly so versions do not compete with each other.",
    },
    {
      title: "Metros and smaller cities are different plans",
      body: "Budgets, messaging and channels that work in Bangalore or Mumbai often misfire in tier-two and tier-three cities, where trust, price and a phone call weigh more heavily. Account structure, landing pages and reporting should separate city tiers so that one does not hide the performance of another.",
    },
    {
      title: "Data protection and consent",
      body: "India has a national law governing digital personal data, built around notice, consent and the rights of the individual, with its obligations coming into force in stages and stricter treatment of children's data. Tracking, lead forms, remarketing lists and CRM practices should be designed for clear consent and easy withdrawal, and reviewed with your legal adviser as the rules settle.",
    },
    {
      title: "Rules for messaging and calls",
      body: "Commercial SMS and calls fall under the telecom regulator's rules, including registration of senders and message templates and respect for do-not-disturb preferences. WhatsApp outreach must use the official Business Platform with opt-in and approved templates, since unofficial bulk-sending tools risk number bans and damage trust.",
    },
    {
      title: "Sector advertising rules and payment habits",
      body: "Property advertising is expected to carry project registration details, medical promotion is restricted by professional conduct rules, financial products face regulator scrutiny, and the advertising standards body sets expectations on claims and influencer disclosure. Checkout and lead flows also need to suit local habits: UPI, EMI options and, for many buyers outside the metros, cash on delivery.",
    },
  ],

  whyUs: [
    {
      title: "Plans sized by value, not volume",
      body: "We estimate what each city, language and query group is worth to your business before recommending work. That keeps effort on the catchments and terms that can pay for themselves, instead of chasing national search volume that never converts.",
    },
    {
      title: "Measured through to revenue",
      body: "Indian lead sources vary enormously in quality, so we connect campaigns, calls and WhatsApp conversations to your CRM wherever your systems allow. Decisions are then made on qualified enquiries and sales, not on cost per form fill.",
    },
    {
      title: "AI for the work, experts for the judgement",
      body: "AI handles research, drafting, monitoring and analysis at a pace people cannot match. Experienced specialists decide what is worth doing, check what is published, and take responsibility for the choices that affect your brand and compliance.",
    },
    {
      title: "Search, paid, messaging and web in one plan",
      body: "The handover between an ad, a landing page and a WhatsApp reply is where Indian campaigns usually leak. Because we work across those disciplines together, the journey is designed and fixed as one system instead of by separate suppliers.",
    },
  ],

  related: ["/locations/uae/", "/locations/usa/", "/locations/uk/"],
  caseStudies: ["d2c-ecommerce-margin", "b2b-saas-pipeline-quality"],
  resources: [
    "sizing-search-opportunities-by-value",
    "measuring-ai-search-visibility",
    "what-automated-bidding-should-optimise-for",
  ],

  faqs: [
    {
      q: "What services does SERPMOZ offer to businesses in India?",
      a: "We provide SEO, local SEO and Google Maps optimisation, Google Ads and Meta Ads, WhatsApp automation, YouTube and content marketing, ecommerce SEO, AI search optimisation, conversion work and web development. Most Indian engagements combine two or three of these around one commercial goal, such as better enquiry quality in specific cities or more revenue from an owned online store.",
    },
    {
      q: "Does SERPMOZ have an office in India?",
      a: "We work with businesses in India remotely and do not claim a local office in any city on this site. Meetings, reporting and day-to-day collaboration happen by video call, shared dashboards, email and WhatsApp. For most digital work this makes no practical difference, and we would sooner be plain about it than imply a presence we cannot show you.",
    },
    {
      q: "How does local SEO work in India?",
      a: "It centres on Google Business Profiles and Maps, because that is where Indian customers compare nearby businesses. The work covers accurate pins and locality details, consistent name, address and phone listings, a routine for earning genuine reviews, a useful page per branch, and tracking of calls and direction requests. Results depend on proximity and competition in each locality.",
    },
    {
      q: "Do you create content in Hindi and regional languages?",
      a: "Yes, where the demand justifies it. We first check how your customers search, including Hindi typed in Latin letters, then recommend which pages, ads and videos deserve a language version. Copy is written or reviewed by fluent writers instead of relying on machine translation alone, and the site is configured so that language versions are indexed correctly.",
    },
    {
      q: "Can you set up WhatsApp for lead capture and follow-up?",
      a: "Yes. We build enquiry, qualification and follow-up flows on the official WhatsApp Business Platform, with customer opt-in, approved templates and a handover to your team when a person is needed. Conversations are linked to your CRM so that leads can be traced to their source. We do not use unofficial bulk-messaging tools.",
    },
    {
      q: "Do you work with Indian companies selling overseas, and foreign companies entering India?",
      a: "Both. For Indian SaaS, IT services, manufacturing and export brands we plan search, content and paid campaigns for the markets they sell into, written for those buyers. For overseas companies entering India we adapt positioning, pricing presentation, language coverage and channels to Indian behaviour instead of translating an existing campaign.",
    },
    {
      q: "How does the growth audit work for an Indian business?",
      a: "We review your search visibility, map presence, paid accounts, tracking, website performance on mobile and the path from enquiry to sale, including WhatsApp. You receive a prioritised list of findings with the reasoning behind each, sized by likely commercial value. It tells you what we would do first and why, with no obligation to proceed.",
    },
    {
      q: "How do I choose a digital marketing agency in India?",
      a: "Start with how the agency plans for difference. Ask whether metros and smaller cities get separate budgets, landing pages and reporting, and how it decides between English, Hindi, Hinglish and regional languages: the answer should come from search and customer data, with fluent writers. Check that pages are tested on an ordinary Android phone on mobile data. Ask how WhatsApp is handled: it should be the official Business Platform with opt-in, never bulk-sending tools. Then look at what is reported, which should be enquiries and sales traced to their source, city by city. Be wary of anyone promising rankings. Where the agency sits matters less than these answers, since most of this work is delivered remotely.",
    },
  ],

  cta: {
    title: "Discuss your growth strategy in India.",
    body: "Tell us which cities you serve, who your customers are and how they reach you today. We will review where you stand and set out what we would prioritise.",
  },
};
