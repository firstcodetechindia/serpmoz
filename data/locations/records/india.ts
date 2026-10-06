import type { LocationRecord } from "@/types";

/**
 * /digital-marketing-agency-india/ : the country page. City detail (districts, locality
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
    title: "Digital Marketing Agency in India",
    description:
      "India is not one market. It has many states and languages, and its cities differ in size, industry and the way places are named. A plan that fits a software firm in Gurgaon will not fit a clinic in Jaipur without being reworked. SERPMOZ plans search, paid media, automation and web work around your own cities, languages and customers, city by city.",
  },

  facts: [
    { label: "Languages we plan for", value: "English, Hindi, Hinglish typed in Latin script, and regional languages where your customers use them" },
    { label: "Channels we plan for", value: "Google Search and Maps, YouTube, Instagram, WhatsApp, marketplaces and sector portals" },
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
      "The first thing we check on any Indian site is how it behaves on a phone, and that check shapes what a digital marketing agency should do first. Your own analytics show what share of visits arrive on mobile and on what kind of connection, and that share should set the priorities. Where it is high, pages have to load quickly on an ordinary connection, the phone number and the WhatsApp button have to be reachable with a thumb, and forms have to be short enough to finish in a minute. A site designed on a large monitor and approved in a boardroom can fail the one test that counts: whether a hurried person on a mid-range phone can understand the offer and get in touch within a few seconds.",
      "It is more useful to plan India as a set of city markets than as one audience. [Delhi](/digital-marketing-agency-delhi/) is a city of named colonies and markets. [Mumbai](/digital-marketing-agency-mumbai/) is laid out by suburb along its railway lines and is the country's financial centre. [Bangalore](/digital-marketing-agency-bangalore/) is known for its technology sector, and [Gurgaon](/digital-marketing-agency-gurgaon/) is known for corporate offices and is part of Delhi NCR. Hyderabad, Pune, Noida and Jaipur each differ again in naming, language and industry. Outside the metros we assume nothing: we check how contested your search terms are in each city, which languages appear in the queries and how your existing enquiries arrive, before recommending a budget.",
      "A page should let a visitor compare you without having to ask. Where you can publish fees, EMI options, offers and delivery terms, showing them early saves a round of questions. The signals a visitor can check for themselves are the ones we work on first: recent Google reviews, photographs of real premises and staff, registration and accreditation details, a working landline or mobile number, and a prompt reply. That is why [local SEO](/local-seo-services/) and reputation work sit close to revenue for any business with premises, and why we treat reply time on [WhatsApp](/whatsapp-automation/) as part of the marketing plan wherever you offer it.",
      "For an overseas company, a translated global campaign is a weak starting point: prices, payment methods, languages and place names all have to be set for India. For an Indian company, the first questions are usually about cost: what a click costs in each city you bid in, which sources produce enquiries that become sales, and which only produce form fills. We answer those from your own accounts. In both cases the work that pays is unglamorous. Decide which cities and languages are worth serving, measure enquiries through to sales instead of counting form fills, respond to leads quickly, and build organic and map visibility so that growth does not depend entirely on next month's advertising budget.",
    ],
  },

  discovery: {
    heading: "How customers discover businesses in India",
    intro:
      "A business in India can be found through search, maps, video, messaging, marketplaces and sector portals. Which of these deserve your effort depends on what you sell and to whom, so we start from where your current enquiries come from and treat the list below as channels to assess, in no fixed order.",
    channels: [
      {
        name: "Google Search on mobile",
        body: "Google is the main search engine to plan around in India. A query can be written in English, in Hindi or a regional script, or in Hinglish, with Hindi words spelled in Latin letters, and each form can return different pages. Google also localises results, so a search with a locality name or 'near me' can show different businesses from one neighbourhood to the next. We check your terms in each form and each place before choosing targets.",
      },
      {
        name: "Google Maps and business profiles",
        body: "For clinics, coaching centres, restaurants, showrooms and repair services, the Business Profile deserves as much care as the website. It shows the rating, recent reviews and photographs, and lets a searcher call or ask for directions without opening the site. Indian addresses are frequently written with a landmark, so we check that the pin sits on the right entrance and that the locality details match what is on your signboard.",
      },
      {
        name: "WhatsApp",
        body: "WhatsApp is widely used in India, by businesses as well as individuals, and enquiries, quotations, brochures, payment links and follow-ups can all be handled there. If your customers already message you, a WhatsApp button beside the form gives them the same route from the website, and both can be tracked. Done properly this runs on the official WhatsApp Business Platform, with opt-in and approved templates, and connects to the CRM.",
      },
      {
        name: "YouTube and short video",
        body: "YouTube has its own search, and videos also appear in Google results, so a product review, a how-to, a property walk-through or a health explanation can be found in either place, in Hindi and regional languages as well as English. Instagram Reels and YouTube Shorts suit categories that show well on camera, such as fashion, beauty, food, travel and local services. We track branded search alongside video activity to see whether one is feeding the other.",
      },
      {
        name: "Marketplaces and sector portals",
        body: "Amazon and Flipkart are large marketplaces in India with product search of their own, and quick-commerce apps deliver everyday goods in the larger cities. Services have their own portals: property sites for homes, Practo for doctors, Justdial for local trades, IndiaMART and TradeIndia for industrial and wholesale buyers, and travel and food apps for hospitality. Where your buyers use one of these, the listing there needs the same accuracy as your own site, and we plan the two together.",
      },
      {
        name: "Word of mouth, reviews and AI assistants",
        body: "Marketing cannot place a recommendation, but it can make sure a recommended name checks out. Anyone who hears of you from a relative, a colleague or a housing society group and then looks you up should find a complete profile, recent reviews and the same details everywhere. AI assistants and the AI answers shown in search add another place where your business may be described, and we measure that separately.",
      },
    ],
  },

  searchAi: {
    heading: "Search and AI discovery in India",
    paragraphs: [
      "Google is the main search engine to plan around in India, so strategy starts there, with Bing relevant mainly through desktop defaults and as a source for some AI assistants. Language is the first planning decision. English queries, Hindi queries and Hinglish queries for the same need can return different pages and different competitors, so we do not assume that one language version covers the others. We map demand by language and script before recommending content, because publishing a thin translated copy of every page is slower, costlier and usually less effective than a few well-made pages where customers actually search.",
      "The second decision is geography. A national plan suits ecommerce, SaaS, online education and financial products sold across the country. A clinic group, a developer, a coaching brand or a showroom chain competes one catchment at a time, where proximity, reviews and profile quality outweigh domain strength. A business with national reach and physical branches needs both: national pages that earn authority, and city and locality pages that say something true and specific about each place. Template pages cloned across many localities are a familiar shortcut, and they tend to be a liability instead of an advantage.",
      "AI assistants are a further place where a brand gets described. Anyone can ask ChatGPT, Gemini or a similar tool to compare software, shortlist colleges, explain insurance terms or suggest providers in a city, and Google can show AI-generated answers above its results. Our [AI SEO services](/ai-seo-services/) measure how these systems describe your brand, which sources they draw on, and where the gaps are, then work on the content and third-party coverage that inform them. AI answers vary by prompt, user, language and day, and nobody can guarantee placement in them. What can be done is honest measurement and steady improvement of the evidence.",
    ],
  },

  opportunities: [
    {
      title: "Regional-language demand competitors may miss",
      body: "We compare the results for your main terms in English, in Hindi and in the regional language of each city you serve. Where the English results are strong and the other-language results are thin, a few useful, well-written pages and videos in that language are worth testing before more English content is added.",
    },
    {
      title: "Smaller cities, assessed one by one",
      body: "Education, healthcare, property, retail and financial products are sold in tier-two and tier-three cities as well as in the metros. If you can deliver there, we compare click costs and the strength of the current results city by city. Where a smaller city is cheaper to reach, we set it up with its own profiles, pages and campaigns so its results can be read on their own.",
    },
    {
      title: "Speed of response as a competitive edge",
      body: "A reply that arrives while the enquirer is still looking is worth more than one that arrives the next day. WhatsApp automation, sensible lead routing and a short qualifying flow can convert more of the enquiries you already pay for, before any increase in media spend.",
    },
    {
      title: "Reviews and profiles as a trust asset",
      body: "A steady flow of genuine, recent reviews with thoughtful replies takes a routine that a local business may never have set up. Building that routine supports map visibility and gives a first-time visitor evidence that can be checked.",
    },
    {
      title: "Global demand served from India",
      body: "Indian SaaS, IT services, manufacturing and export-led ecommerce brands sell to buyers in North America, the UK, the Gulf and beyond. Search, content and AI visibility planned for those markets, in their spelling and with their proof points, opens revenue that domestic campaigns cannot reach.",
    },
  ],

  services: [
    {
      slug: "seo-services",
      title: "SEO Services in India",
      body: "Builds organic visibility for the queries that carry commercial value, sized by city, language and the revenue each enquiry is worth.",
      why: "An organic position does not have to be bought again every month, which matters most where your paid clicks are costly.",
    },
    {
      slug: "local-seo-services",
      title: "Local SEO in India",
      body: "Keeps every branch visible in map results and local listings, with accurate profiles, consistent details, real reviews and useful location pages.",
      why: "Google ranks map results partly by distance from the searcher, so each branch needs its own listing, and landmark-style addresses make accurate listings harder than they look.",
    },
    {
      slug: "google-ads",
      title: "Google Ads Management in India",
      body: "Runs search, Performance Max and YouTube campaigns that bid towards qualified enquiries and sales instead of raw lead counts.",
      why: "Automated bidding optimises for whatever it is told to count, so a campaign told to count raw leads will buy raw leads, whatever their quality.",
    },
    {
      slug: "meta-ads",
      title: "Meta Ads in India",
      body: "Creates demand on Instagram and Facebook with mobile-first creative, regional-language variants and campaigns that open a WhatsApp conversation.",
      why: "Meta campaigns can be targeted by city and language, and click-to-WhatsApp formats give a business that already sells by message a direct route from advertisement to conversation.",
    },
    {
      slug: "whatsapp-automation",
      title: "WhatsApp Automation in India",
      body: "Captures, qualifies and follows up enquiries on the official WhatsApp Business Platform, connected to your CRM and your sales team.",
      why: "If enquiries already reach you on WhatsApp, a managed flow keeps replies prompt and recorded, so a lead you have paid for is not lost to a missed message.",
    },
    {
      slug: "youtube-marketing",
      title: "YouTube Marketing in India",
      body: "Plans and optimises long-form videos and Shorts that answer buyer questions and appear in both YouTube and Google results.",
      why: "Video can explain a purchase, a course, a treatment or a property in Hindi or a regional language, and a well-labelled video can appear in Google results as well as on YouTube.",
    },
    {
      slug: "ecommerce-seo",
      title: "Ecommerce SEO in India",
      body: "Improves category, product and content pages so your own store earns search traffic that marketplaces do not take a commission on.",
      why: "A D2C brand that also sells on Amazon or Flipkart pays a commission there, so organic demand on its own store protects margin.",
    },
    {
      slug: "ai-seo-services",
      title: "AI SEO Services in India",
      body: "Measures and improves how AI assistants and AI search answers describe and cite your brand for the questions your buyers ask.",
      why: "AI assistants describe and compare brands when asked, so what they say about yours is worth measuring before you decide whether to act on it.",
    },
  ],

  industries: [
    { slug: "real-estate", note: "Property is a high-value purchase with listings spread across portals, so we judge campaigns on enquiries that reach a site visit instead of on enquiry counts." },
    { slug: "education", note: "Coaching centres, schools, universities and online courses need different plans: local visibility for a campus, national search for an online course, and clear pages on fees, faculty and outcomes for both." },
    { slug: "healthcare", note: "Hospitals, clinics and diagnostic chains need accurate profiles on Maps and on doctor portals, and marketing has to respect professional rules on what can be claimed." },
    { slug: "ecommerce", note: "D2C brands balance marketplaces, quick commerce and their own stores, and we look at how cash on delivery, returns and discounts affect the margin on each." },
    { slug: "saas", note: "A software company selling to Indian SMEs and to overseas buyers usually needs separate positioning, pricing pages and search plans for each." },
    { slug: "finance", note: "Lending, insurance, investment and fintech products are regulated, so advertising claims and landing pages need compliance review before they go live." },
    { slug: "manufacturing", note: "IndiaMART, TradeIndia and similar B2B portals list industrial suppliers, and a supplier's own site still needs findable specifications, certifications and a fast quotation process." },
    { slug: "hospitality", note: "Hotels, restaurants and venues are listed on Maps and on food and travel apps, and campaigns are planned around the festival, wedding and holiday calendar." },
  ],

  considerations: [
    {
      title: "Language, script and Hinglish",
      body: "English, Hindi in Devanagari, Hindi typed in Latin letters and regional languages can each show different intent and different competitors for the same need. Decide coverage from search and customer data, use native writers instead of machine translation alone, and set up language targeting correctly so versions do not compete with each other.",
    },
    {
      title: "Metros and smaller cities are different plans",
      body: "A budget, message or channel proven in Bangalore or Mumbai should not be assumed to carry over to a tier-two or tier-three city. Account structure, landing pages and reporting should separate city tiers, so that one does not hide the performance of another and each can be judged on its own results.",
    },
    {
      title: "Data protection and consent",
      body: "India has a national law governing digital personal data, built around notice, consent and the rights of the individual, and it gives particular attention to children's data. Tracking, lead forms, remarketing lists and CRM practices should be designed for clear consent and easy withdrawal, and reviewed with your legal adviser, since what applies to you can change.",
    },
    {
      title: "Rules for messaging and calls",
      body: "Commercial SMS and calls fall under the telecom regulator's rules, including registration of senders and message templates and respect for do-not-disturb preferences. WhatsApp outreach must use the official Business Platform with opt-in and approved templates, since unofficial bulk-sending tools risk number bans and damage trust.",
    },
    {
      title: "Sector advertising rules and payment habits",
      body: "Property advertising is expected to carry project registration details, medical promotion is restricted by professional conduct rules, financial products face regulator scrutiny, and the advertising standards body sets expectations on claims and influencer disclosure. Checkout and lead flows should also offer the payment methods in common use in India, such as UPI, EMI options and, where you support it, cash on delivery.",
    },
  ],

  whyUs: [
    {
      title: "Plans sized by value, not volume",
      body: "We estimate what each city, language and query group is worth to your business before recommending work. That keeps effort on the catchments and terms that can pay for themselves, instead of chasing national search volume that never converts.",
    },
    {
      title: "Measured through to revenue",
      body: "Lead sources can vary widely in quality, so we connect campaigns, calls and WhatsApp conversations to your CRM wherever your systems allow. Decisions are then made on qualified enquiries and sales, not on cost per form fill.",
    },
    {
      title: "AI for the work, experts for the judgement",
      body: "AI handles research, drafting, monitoring and analysis at a pace people cannot match. Experienced specialists decide what is worth doing, check what is published, and take responsibility for the choices that affect your brand and compliance.",
    },
    {
      title: "Search, paid, messaging and web in one plan",
      body: "The handover between an ad, a landing page and a WhatsApp reply is where campaigns often leak. Because we work across those disciplines together, remotely, the journey is designed and fixed as one system instead of by separate suppliers.",
    },
  ],

  related: ["/digital-marketing-agency-uae/", "/digital-marketing-agency-usa/", "/digital-marketing-agency-uk/"],
  caseStudies: ["d2c-ecommerce-margin", "b2b-saas-pipeline-quality"],
  resources: [
    "sizing-search-opportunities-by-value",
    "measuring-ai-search-visibility",
    "what-automated-bidding-should-optimise-for",
  ],

  faqs: [
    {
      q: "What services does SERPMOZ offer to businesses in India?",
      a: "We provide SEO, local SEO and Google Maps optimisation, Google Ads and Meta Ads, WhatsApp automation, YouTube and content marketing, ecommerce SEO, AI search optimisation, conversion work and web development. A plan for an Indian business is built around one commercial goal, such as better enquiry quality in specific cities or more revenue from an owned online store, and uses the two or three services that serve it.",
    },
    {
      q: "Does SERPMOZ have an office in India?",
      a: "We work with businesses in India remotely and do not claim a local office in any city on this site. Meetings, reporting and day-to-day collaboration happen by video call, shared dashboards, email and WhatsApp. For most digital work this makes no practical difference, and we would sooner be plain about it than imply a presence we cannot show you.",
    },
    {
      q: "How does local SEO work in India?",
      a: "It centres on Google Business Profiles and Maps, because that is where Google shows nearby businesses side by side. The work covers accurate pins and locality details, consistent name, address and phone listings, a routine for earning genuine reviews, a useful page per branch, and tracking of calls and direction requests. Results depend on proximity and competition in each locality.",
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
      a: "Both. For Indian SaaS, IT services, manufacturing and export brands we plan search, content and paid campaigns for the markets they sell into, written for those buyers. For overseas companies entering India we adapt positioning, pricing presentation, language coverage and channels to the Indian market, checked against search data, instead of translating an existing campaign.",
    },
    {
      q: "How does the growth audit work for an Indian business?",
      a: "We review your search visibility, map presence, paid accounts, tracking, website performance on mobile and the path from enquiry to sale, including WhatsApp. You receive a prioritised list of findings with the reasoning behind each, sized by likely commercial value. It tells you what we would do first and why, with no obligation to proceed.",
    },
    {
      q: "How do I choose a digital marketing agency in India?",
      a: "Start with how the agency plans for difference. Ask whether metros and smaller cities get separate budgets, landing pages and reporting, and how it decides between English, Hindi, Hinglish and regional languages: the answer should come from search and customer data, with fluent writers. Check that pages are tested on an ordinary Android phone on mobile data. Ask how WhatsApp is handled: it should be the official Business Platform with opt-in, never bulk-sending tools. Then look at what is reported, which should be enquiries and sales traced to their source, city by city. Be wary of anyone promising rankings. Where the agency sits matters less than these answers, since this work can be delivered remotely.",
    },
  ],

  cta: {
    title: "Discuss your growth strategy in India.",
    body: "Tell us which cities you serve, who your customers are and how they reach you today. We will review where you stand and set out what we would prioritise.",
  },
};
