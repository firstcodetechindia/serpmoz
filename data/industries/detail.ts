import type { Industry } from "@/types";

/**
 * The long-form half of each industry page. Kept apart from the index seeds so
 * that the short fields used in navigation and cards stay easy to scan.
 *
 * House rules apply: examples describe work we would do, never results, and
 * nothing here names a client or quotes a figure.
 */
export type IndustryDetail = Pick<Industry, "challenges" | "demand" | "contentNeeds" | "conversion" | "examples" | "services" | "related">;

type Seed = {
  challenges: string[];
  demand: string;
  contentNeeds: string[];
  conversion: [title: string, body: string][];
  examples: string[];
  services: string[];
  related: string[];
};

const seeds: Record<string, Seed> = {
  saas: {
    challenges: [
      "The category is crowded and competitors describe themselves in almost the same words, so feature pages alone do not separate you.",
      "Sign-ups and demo requests are counted as success, while sales reports that most of them will never buy.",
      "Review sites, affiliates and comparison publishers outrank the vendor for its own category and alternatives searches.",
      "Paid acquisition costs keep rising and nobody can say which campaigns produce customers that stay.",
    ],
    demand:
      "Most SaaS demand is captured, not created, at the moment someone searches for a category, an alternative to a named product or a way to do a specific job. Organic search and AI answers carry the research stage, review platforms and communities carry the validation stage, and paid search on competitor and category terms catches buyers who are close to a decision. LinkedIn earns its place when the product is sold to a defined set of roles or accounts. Content that shows the product doing the work, such as templates, calculators and documentation, tends to keep producing demand long after a campaign has ended.",
    contentNeeds: [
      "Comparison and alternatives pages that are fair enough to be believed",
      "Use-case and role pages written in the language of the job, not the feature list",
      "Integration pages for each tool the product connects to",
      "Public documentation and help content that is indexable and current",
      "Pricing and packaging explained clearly enough to survive an AI summary",
    ],
    conversion: [
      ["Demo or trial", "Offering both without guidance splits intent. The right default depends on deal size and how much setup the product needs before it shows value."],
      ["Form length against lead quality", "Short forms raise volume and lower fit. We test qualification questions against what sales accepts, not against submission rate."],
      ["Activation after sign-up", "A trial that never reaches the first useful outcome is an acquisition cost with no return. Onboarding emails and in-app prompts belong in the same plan as the ads."],
      ["Pricing page hesitation", "Buyers leave when they cannot tell which plan fits. Clear limits, a plan recommendation and a visible route to a person reduce that."],
    ],
    examples: [
      "A comparison hub covering the three alternatives buyers name most often, each page reviewed by product and sales before it goes live.",
      "A prompt panel that tracks how AI assistants describe and shortlist the product for its main use cases, with the sources behind each answer.",
      "Offline conversion imports from the CRM so that paid campaigns bid towards opportunities instead of form fills.",
    ],
    services: ["seo-services", "ai-seo-services", "content-seo", "linkedin-ads", "google-ads", "cro"],
    related: ["technology", "b2b", "professional-services"],
  },
  ecommerce: {
    challenges: [
      "Advertising costs rise faster than average order value, and margin after ad spend is thinner each year.",
      "Faceted navigation creates thousands of near-duplicate URLs while the categories that matter stay thin.",
      "A large share of revenue comes from brand searches and returning customers, which hides weak new-customer acquisition.",
      "Marketplaces hold the top of the results for product searches and train shoppers to compare on price alone.",
    ],
    demand:
      "Ecommerce demand arrives through shopping surfaces first: product listings in search, marketplaces and social feeds where people see the product, the price and the delivery promise before they see the brand. Non-brand category search is the most durable source because it captures people who know what they want but not who to buy from. Meta and video build demand for products nobody is searching for yet, and email and WhatsApp bring existing customers back at a far lower cost than any first purchase. The balance between those channels is decided by margin and repeat rate, not by channel preference.",
    contentNeeds: [
      "Category pages with real selection guidance, not a paragraph of keywords under the grid",
      "Product pages with complete attributes, sizing, materials and care information",
      "Buying guides and comparison pages for considered purchases",
      "Delivery, returns and warranty information that is easy to find and unambiguous",
      "Clean product feeds with accurate titles, identifiers and availability",
    ],
    conversion: [
      ["Mobile product pages", "Most sessions are on a phone, where images, variant selection and the add-to-basket control compete for one small screen."],
      ["Delivery and returns clarity", "Unexpected cost or uncertainty at checkout is a common reason for abandonment. The answer should be visible on the product page."],
      ["Checkout friction", "Forced account creation, limited payment options and slow steps lose orders that were already won."],
      ["The second purchase", "Profit in most stores depends on repeat orders. Post-purchase flows deserve the same testing as the checkout."],
    ],
    examples: [
      "An indexation plan for filtered pages that states which combinations earn their own URL and which are kept out of the index.",
      "A feed clean-up that aligns product titles, attributes and structured data with how shoppers phrase their searches.",
      "Abandoned-basket and replenishment flows across email and WhatsApp, measured on margin instead of revenue.",
    ],
    services: ["ecommerce-seo", "google-ads", "meta-ads", "cro", "email-marketing", "ecommerce-development"],
    related: ["local-business", "hospitality", "travel"],
  },
  healthcare: {
    challenges: [
      "Advertising platforms restrict targeting, claims and remarketing for health topics, which removes tactics other sectors rely on.",
      "Clinical accuracy and regulatory review slow publishing, so content calendars slip and pages go stale.",
      "A provider with several sites, departments and practitioners has dozens of listings that drift out of date.",
      "Patient privacy rules limit what can be tracked, which makes it hard to connect marketing to booked appointments.",
    ],
    demand:
      "Healthcare demand starts with a symptom or a diagnosis, usually typed into a search engine or put to an AI assistant, and ends with a choice of provider that is heavily local. Informational search builds familiarity and trust long before an appointment is needed. Map results, practitioner profiles and reviews decide the provider at the moment of need. Paid search works for specific treatments and specialities where policy allows it, and referral from other clinicians remains a channel that digital activity should support instead of ignore.",
    contentNeeds: [
      "Condition and treatment pages reviewed by a named, qualified clinician",
      "Practitioner profiles with qualifications, specialisms and where they consult",
      "Location pages with services, opening hours, access and parking",
      "Plain-language guidance on what to expect before, during and after a procedure",
      "Clear information on fees, insurance and referral requirements",
    ],
    conversion: [
      ["Booking friction", "A patient who cannot see availability or book online often rings the next provider. Online booking should be the easy path, with the phone as a clear alternative."],
      ["Calls that go unanswered", "Much healthcare demand still converts by phone. Answer rates and call handling are conversion work, even though they sit outside the website."],
      ["Reassurance before commitment", "Anxious visitors look for who will treat them, what it involves and what it costs. Pages that hide those answers lose them."],
      ["Privacy-safe measurement", "Tracking has to be designed so that health information is never passed to advertising platforms, while still showing which channels lead to appointments."],
    ],
    examples: [
      "A clinical review workflow where each condition page carries a named reviewer, a review date and a schedule for the next check.",
      "A listings audit across every site and practitioner, with one source of truth for names, addresses, hours and services.",
      "A measurement design that reports booked appointments by channel without sending patient details to ad platforms.",
    ],
    services: ["local-seo-services", "google-maps-seo", "seo-services", "google-ads", "web-development", "whatsapp-automation"],
    related: ["dental", "local-business", "education"],
  },
  dental: {
    challenges: [
      "Several practices within a short drive offer the same treatments, and patients struggle to tell them apart.",
      "The treatments that carry the practice financially, such as implants and orthodontics, are the ones with the longest decision time.",
      "Front-desk teams are busy with patients in the building, so new enquiries wait and some are never returned.",
      "Groups with several practices find that each location has a different profile, a different review history and different local competitors.",
    ],
    demand:
      "Routine and emergency dental demand comes almost entirely from map results and local search, decided on proximity, rating and whether the practice is open. High-value treatments behave differently: people research for weeks, read about procedure and recovery, compare prices and look at before-and-after evidence. That research happens in organic search, video and AI answers, and paid search and paid social can reach it when the landing page answers the real questions. Existing patients are the third source, through recalls and treatment plans that were discussed but never booked.",
    contentNeeds: [
      "Treatment pages covering procedure, suitability, recovery, risks and how pricing works",
      "Dentist and team profiles with qualifications and clinical interests",
      "A page for each practice with its own team, hours, directions and photographs",
      "Guidance for nervous patients and for parents booking for children",
      "Finance and payment plan information stated plainly",
    ],
    conversion: [
      ["Enquiry to booked consultation", "The gap between a form submission and a call back is where most high-value enquiries are lost. Response time is the first thing we measure."],
      ["Price anxiety", "Patients expect at least a guide to cost. Pages that refuse to discuss it send them to a competitor that will."],
      ["Out-of-hours demand", "People research treatment in the evening. Online booking and WhatsApp follow-up keep that demand until the practice opens."],
    ],
    examples: [
      "A per-practice Google Business Profile plan covering categories, services, photographs and a compliant routine for requesting reviews.",
      "Implant and aligner landing pages built around the questions patients ask at consultation, reviewed by the treating dentist.",
      "Missed-call and enquiry follow-up on WhatsApp so that a new patient gets an answer and a booking link within minutes.",
    ],
    services: ["google-maps-seo", "local-seo-services", "google-ads", "landing-page-optimization", "whatsapp-automation", "web-development"],
    related: ["healthcare", "local-business", "home-services"],
  },
  "real-estate": {
    challenges: [
      "Portals own most generic property searches and sell the resulting leads to several developers and agents at once.",
      "Lead volume is high and intent is low, so sales teams spend their day calling people who were only browsing.",
      "Each project has a short selling window, which leaves little time for organic visibility to build.",
      "Advertising and disclosure rules differ by market and apply to claims about price, completion and returns.",
    ],
    demand:
      "Property demand is created as much as it is captured. Paid social and video introduce a project to people who fit the buyer profile before they have searched for it, and paid search catches those who are already looking by locality, configuration and budget. Organic search matters most at the micro-market level, where buyers research neighbourhoods, connectivity and price trends over months. Portals still deliver volume, and the practical question is how to qualify and respond to those leads faster than the others who received the same enquiry.",
    contentNeeds: [
      "Project pages with floor plans, specifications, pricing approach and construction status",
      "Locality guides covering connectivity, schools, amenities and the kind of buyer the area suits",
      "Clear explanations of the buying process, payment schedules and financing",
      "Video walkthroughs and site-progress updates",
      "Regulatory registration and approval details where the market requires them",
    ],
    conversion: [
      ["Speed to first contact", "The first relevant response usually wins the conversation. Routing and automated acknowledgement matter more than another creative variation."],
      ["Qualification before the call", "Budget, timeline and purpose can be asked in a form or a WhatsApp flow, so that sales starts with the enquiries most likely to visit."],
      ["From enquiry to site visit", "The site visit is the real conversion. Scheduling, reminders and directions are part of the funnel."],
      ["Long nurture", "Many buyers take months. A CRM sequence that shares progress and availability keeps the project in mind without pestering."],
    ],
    examples: [
      "A locality content hub for the micro-markets around a project, written from first-hand knowledge of the area.",
      "A WhatsApp qualification flow that asks budget, configuration and timeline, then books a site visit into the sales calendar.",
      "Campaign reporting that follows a lead from first click to site visit and booking, so spend moves towards the sources that produce visits.",
    ],
    services: ["lead-generation", "google-ads", "meta-ads", "whatsapp-automation", "local-seo-services", "landing-page-optimization"],
    related: ["construction", "finance", "home-services"],
  },
  finance: {
    challenges: [
      "Every public claim needs compliance sign-off, which lengthens production and discourages testing.",
      "Comparison sites and aggregators dominate product searches and take a margin on each customer they refer.",
      "Search systems hold financial content to a higher standard, so anonymous or outdated pages struggle to rank.",
      "Fraud checks and identity verification are necessary and are also where many genuine applicants give up.",
    ],
    demand:
      "Financial demand tends to be triggered by a life or business event: a house purchase, a tax deadline, a funding need. People begin with explanatory searches and calculators, move to comparison, and only then search for a provider by name. Organic search and AI answers shape the early stages, where trust is formed. Paid search is effective and expensive at the product stage, and comparison platforms sit between you and the customer unless brand demand is strong enough to bring people direct. Earned coverage in credible publications supports all three.",
    contentNeeds: [
      "Product pages with rates, fees, eligibility and risks stated in full",
      "Calculators and tools that answer a real question and are kept accurate",
      "Explanatory guides written or reviewed by named, qualified professionals",
      "Regulatory status, disclosures and complaints information that is easy to find",
      "Comparison content that is honest about who the product does not suit",
    ],
    conversion: [
      ["Long application journeys", "Multi-step forms lose people at every stage. Saving progress, explaining why each detail is needed and showing what comes next all reduce drop-off."],
      ["Trust at the point of data entry", "Applicants hesitate before sharing identity or income details. Security, regulation and human contact should be visible on that screen."],
      ["Eligibility uncertainty", "A soft eligibility check early in the journey prevents wasted applications and improves the quality of those that complete."],
      ["Compliance without clutter", "Required disclosures can be presented clearly without burying the action the page exists for."],
    ],
    examples: [
      "An author and reviewer framework that attaches qualifications and review dates to every piece of financial guidance.",
      "An application funnel study that identifies the step with the highest abandonment and tests a clearer version with compliance involved from the start.",
      "A digital PR programme built on the firm's own data and expertise, aimed at publications its customers already read.",
    ],
    services: ["seo-services", "content-seo", "cro", "google-ads", "aeo-services", "digital-pr"],
    related: ["accounting", "legal", "real-estate"],
  },
  education: {
    challenges: [
      "Enquiry volume is high and conversion to enrolment is low, with admissions teams unable to tell serious applicants from casual ones.",
      "Aggregator and ranking sites capture programme searches and resell the same student to several institutions.",
      "Demand is concentrated around intake dates, which leaves little room to correct a campaign that starts badly.",
      "The student and the person paying are often different people with different questions.",
    ],
    demand:
      "Education demand builds over a long research period and converts in a short window. Prospective students search by programme, career outcome and location, watch video from current students, read forums and ask AI assistants to compare options. Organic search and YouTube carry that research. Paid search and paid social are most useful close to application deadlines, when intent is highest, and for programmes with unfilled places. Messaging channels, WhatsApp in particular in several markets, are where enquiries are actually nurtured to application.",
    contentNeeds: [
      "A full page for each programme: curriculum, entry requirements, fees, duration and outcomes",
      "Faculty profiles and evidence of teaching and research quality",
      "Career and progression information supported by data the institution can stand behind",
      "Student life, accommodation and location content, including video",
      "Admissions guidance covering deadlines, documents, scholarships and visas where relevant",
    ],
    conversion: [
      ["Enquiry form design", "Asking for programme, intake and qualification level lets admissions prioritise without making the form a barrier."],
      ["Application abandonment", "Applications are long and often completed over several sessions. Save-and-return and timely reminders recover many of them."],
      ["Counsellor response", "A prospective student who waits days for a reply has usually spoken to another institution in the meantime."],
      ["Parents as a second audience", "Fees, safety and outcomes need answering for the person funding the decision, in a place they can find without help."],
    ],
    examples: [
      "Programme pages rebuilt as products, each with its own search demand analysis, proof and enquiry path.",
      "An intake-cycle campaign calendar that shifts budget between awareness and application as deadlines approach.",
      "Lead scoring that passes programme interest, engagement and eligibility to counsellors before the first call.",
    ],
    services: ["seo-services", "google-ads", "meta-ads", "whatsapp-automation", "youtube-marketing", "lead-generation"],
    related: ["technology", "healthcare", "professional-services"],
  },
  legal: {
    challenges: [
      "Paid clicks in personal injury, family and commercial law are among the costliest in search, so wasted clicks are expensive.",
      "Professional conduct rules limit how firms may advertise, compare themselves and describe outcomes.",
      "A large share of enquiries concern matters the firm does not handle or clients it cannot help.",
      "Directories and lead sellers sit above firms in results and sell the same enquiry more than once.",
    ],
    demand:
      "Legal demand begins with a problem, not with a wish to hire a lawyer. People search for what their situation means, what their options are and what it might cost, and many now put those questions to an AI assistant first. Organic guidance earns the early attention, and local search and reviews decide which firm is called, particularly for private-client work. Paid search suits urgent, high-value matters where the firm can answer immediately. For commercial work, referrals and reputation lead, and search confirms what the referrer said.",
    contentNeeds: [
      "Practice-area pages that explain process, timescales and likely costs in plain language",
      "Lawyer profiles with admissions, experience and the matters each person handles",
      "Guides to common situations, kept current as legislation and case law change",
      "Fee information: fixed fees where offered, and how hourly work is estimated",
      "Office pages with accurate contact details and accessibility information",
    ],
    conversion: [
      ["First response", "Someone in distress contacts several firms and instructs the first that responds helpfully. Call answering and out-of-hours cover are decisive."],
      ["Qualifying without deterring", "Intake questions should establish matter type and jurisdiction early, and still feel like help to the person asking."],
      ["Fee transparency", "Uncertainty about cost stops people making contact. Even an explanation of how fees are worked out lowers that barrier."],
      ["Confidential contact options", "Some clients cannot take a call. Secure forms and messaging give them a way to start."],
    ],
    examples: [
      "A practice-area content plan in which every guide is attributed to, and reviewed by, the lawyer who does that work.",
      "Search campaigns structured by matter type with negative keyword lists that exclude the work the firm declines.",
      "An intake audit that listens to how calls are handled and measures the share of qualified enquiries that become opened matters.",
    ],
    services: ["local-seo-services", "google-maps-seo", "seo-services", "google-ads", "landing-page-optimization", "content-seo"],
    related: ["accounting", "finance", "professional-services"],
  },
  accounting: {
    challenges: [
      "Firms describe the same services in the same terms, and buyers default to price or to whoever a friend recommends.",
      "Demand surges before filing deadlines, when the team has the least capacity to respond to new enquiries.",
      "Low-cost software and online-only providers have reset expectations on price for basic compliance work.",
      "The clients a firm most wants, such as growing companies needing advisory work, are the hardest to reach through generic marketing.",
    ],
    demand:
      "Accounting demand follows the calendar and the rulebook. Searches rise around tax deadlines, year ends and whenever legislation changes, and the firms that explain a change clearly and early collect attention that lasts for years. Local search matters for owner-managed businesses that want an accountant nearby. Sector specialism is the strongest differentiator in organic search and on LinkedIn, because a restaurant owner or a contractor looks for someone who already understands their business. Referrals remain the largest source, and useful email keeps existing clients referring.",
    contentNeeds: [
      "Timely explanations of tax and regulatory changes, reviewed by qualified staff",
      "Service pages that separate compliance, advisory and outsourced finance work",
      "Sector pages for the client types the firm serves best",
      "Deadline calendars, checklists and calculators clients return to",
      "Team profiles with qualifications and areas of specialism",
    ],
    conversion: [
      ["From question to consultation", "Many visitors arrive with one tax question. A clear route from the answer to a conversation turns readers into prospects."],
      ["Quoting", "Buyers want an indication of fees. A structured enquiry that captures turnover, entity type and services needed allows a fast, credible quote."],
      ["Switching anxiety", "Changing accountant feels risky and awkward. Explaining the handover process removes a real objection."],
    ],
    examples: [
      "A rapid-response process for regulatory announcements, so that reviewed guidance is live while people are still searching for it.",
      "Sector landing pages for the three client types the partners want more of, each with its own enquiry path.",
      "A seasonal nurture sequence that reminds one-off enquirers of the next deadline and what the firm can take off their hands.",
    ],
    services: ["seo-services", "local-seo-services", "content-marketing", "email-marketing", "linkedin-marketing", "aeo-services"],
    related: ["legal", "finance", "professional-services"],
  },
  automotive: {
    challenges: [
      "Marketplaces and manufacturer sites hold the buyer's attention until late in the journey, leaving the dealer to compete on stock and price.",
      "Inventory changes daily, and pages for vehicles that have sold keep ranking and keep disappointing.",
      "Sales and service are run as separate businesses with separate budgets, although they share one customer.",
      "Leads arrive from many sources and are followed up inconsistently across branches.",
    ],
    demand:
      "Vehicle demand is shaped by the manufacturer and captured by the dealer. Buyers choose a model through reviews, video and comparison content, then search locally for availability, price and a test drive. Local search, vehicle listing surfaces and paid search on model-plus-location terms are where a dealer wins or loses that moment. Paid social and video help move specific stock and promote offers. Servicing is a separate and steadier stream, driven by map results, reminders to existing customers and reputation.",
    contentNeeds: [
      "Vehicle pages with full specification, real photographs, price and availability",
      "Model pages that persist when individual stock changes",
      "Service, MOT or inspection, and parts pages for each branch",
      "Finance, part-exchange and warranty information explained simply",
      "Walkaround and handover video for stock and for the dealership itself",
    ],
    conversion: [
      ["Lead response time", "A buyer who enquires about a specific car is usually enquiring about two or three. The first useful reply sets the terms."],
      ["Test drive booking", "Booking should take seconds and confirm a time, a vehicle and a named person."],
      ["Finance and part-exchange questions", "These decide affordability. Tools that give an early indication keep buyers on the dealer's site."],
      ["Service booking", "Online booking with visible slots and prices competes directly with independent garages."],
    ],
    examples: [
      "A URL and structured data plan for inventory that keeps model pages stable while individual vehicles come and go.",
      "Separate profile and review routines for the sales and service departments of each branch.",
      "A lead routing rule set that assigns every enquiry to a named person and escalates any that go unanswered.",
    ],
    services: ["google-maps-seo", "local-seo-services", "google-ads", "meta-ads", "video-marketing", "whatsapp-automation"],
    related: ["local-business", "home-services", "manufacturing"],
  },
  hospitality: {
    challenges: [
      "Online travel agencies bid on the property's own name and charge commission on guests who were already looking for it.",
      "Occupancy swings with season, events and weather, so a flat marketing plan is wrong for most of the year.",
      "A handful of reviews on a few platforms can change booking rates more than any campaign.",
      "Booking engines are often third-party tools that are slow, poorly tracked and hard to change.",
    ],
    demand:
      "Hospitality demand is discovered on maps, travel platforms and social media, and confirmed in reviews. Guests often find a property through an intermediary and then search for it by name, which makes brand search the cheapest place to win a direct booking. Local and map visibility captures people searching by area and occasion. Visual content on Instagram and short video creates the wish to visit, and email brings previous guests back in quieter periods. Restaurants and venues follow the same pattern over a much shorter decision time.",
    contentNeeds: [
      "Room, suite and venue pages with honest photography and complete details",
      "Location content: how to get there and what is nearby",
      "Menus, event spaces and packages kept up to date",
      "A clear statement of why booking direct is worthwhile",
      "Seasonal and occasion-led pages planned ahead of each booking window",
    ],
    conversion: [
      ["Booking engine handover", "The step from the website to the booking engine is where tracking breaks and guests drop out. It should feel like one journey."],
      ["Rate confidence", "Guests check whether the direct price matches the intermediary's. If it does not, or they cannot tell, they book elsewhere."],
      ["Mobile booking", "Many bookings are made on a phone, sometimes on the day. Date selection and payment need to work with one thumb."],
      ["Review response", "Prospective guests read how management replies to criticism. A considered response is part of the conversion path."],
    ],
    examples: [
      "A brand search campaign and landing experience designed to bring guests who know the property's name to the direct booking path.",
      "A seasonal content and campaign calendar built from the property's own booking lead times.",
      "A review monitoring and response routine across the platforms guests check before they book.",
    ],
    services: ["google-maps-seo", "local-seo-services", "google-ads", "instagram-marketing", "cro", "email-marketing"],
    related: ["travel", "local-business", "real-estate"],
  },
  travel: {
    challenges: [
      "Large aggregators outspend and outrank operators on generic destination and flight-plus-hotel searches.",
      "AI assistants now draft whole itineraries, and operators that are not cited as sources are absent from the plan.",
      "Demand is seasonal and sensitive to events outside anyone's control, so budgets need to move quickly.",
      "Booking journeys are long, involve several people and several devices, and are hard to attribute.",
    ],
    demand:
      "Travel demand starts as inspiration and turns into logistics. Video and social content create the wish to go somewhere, long-form destination and itinerary content answers the planning questions, and search captures the booking. Specialist operators do best where they can be specific: a route, an activity, a type of traveller. AI planning tools reward first-hand, detailed and well-structured guidance by citing it. Paid search works at the point of booking, and email to past travellers is usually the most efficient channel an operator has.",
    contentNeeds: [
      "Destination and itinerary guides based on first-hand experience",
      "Tour and package pages with daily detail, inclusions, exclusions and physical demands",
      "Practical information: seasons, visas, health, safety and what to pack",
      "Transparent pricing, deposit and cancellation terms",
      "Original photography and video from the trips themselves",
    ],
    conversion: [
      ["Price and inclusion clarity", "Travellers compare like for like. A page that leaves doubt about what is included loses to one that does not."],
      ["Enquiry or instant booking", "Complex trips need a conversation and simple ones need a checkout. Offering the wrong one adds friction either way."],
      ["Group decisions", "Trips are often agreed by several people. Shareable itineraries and saved quotes help the decision travel."],
      ["Reassurance on change and cancellation", "Flexible terms, stated clearly beside the price, remove a common reason to wait."],
    ],
    examples: [
      "An itinerary library structured so that search engines and AI planning tools can quote routes, durations and seasons accurately.",
      "Campaigns organised by route and booking window, with budgets that follow lead time instead of the calendar month.",
      "A booking funnel review that follows a traveller from search to payment and removes the steps that add no information.",
    ],
    services: ["seo-services", "geo-services", "google-ads", "cro", "video-marketing", "email-marketing"],
    related: ["hospitality", "ecommerce", "education"],
  },
  manufacturing: {
    challenges: [
      "Technical data lives in PDF catalogues and distributor portals that search engines and AI systems read poorly.",
      "Sales cycles are long and involve engineers, procurement and management, each looking for different information.",
      "Websites attract enquiries from students, job seekers and suppliers in greater numbers than from buyers.",
      "Growth depends on export markets where the company has no visibility in the local language.",
    ],
    demand:
      "Manufacturing demand is specification-led. An engineer searches for a material grade, a tolerance, a standard or an application, often with a part number, and shortlists the suppliers whose technical pages answer the question. Organic search does most of that work, provided the data is published as pages and not locked in documents. Trade directories, marketplaces and exhibitions still generate enquiries, and LinkedIn supports relationships with larger accounts. For exporters, search in the buyer's own language and country is frequently the largest untouched opportunity.",
    contentNeeds: [
      "Product pages with specifications, tolerances, materials and standards as structured, indexable data",
      "Application notes showing where and how products are used",
      "Capability pages covering processes, capacity, quality systems and testing",
      "Downloadable drawings and data sheets alongside, not instead of, web pages",
      "Translated and localised pages for priority export markets",
    ],
    conversion: [
      ["RFQ form design", "A good request for quotation captures quantity, specification, drawings and timeline, which lets sales respond with a real number."],
      ["Filtering poor-fit enquiries", "Clear minimum order quantities and capability statements reduce time spent on requests that will never convert."],
      ["Samples and technical contact", "Engineers often want a sample or a conversation with another engineer before procurement is involved. Offer both."],
      ["Distributor routing", "Where sales go through distributors, the site should pass the enquiry to the right one and record that it did."],
    ],
    examples: [
      "A migration of catalogue data from PDFs into structured product pages that can be found by specification and standard.",
      "A market prioritisation study for export, followed by native-language keyword research for the first two countries.",
      "An RFQ workflow that scores enquiries by fit and routes them to the right sales engineer or distributor.",
    ],
    services: ["technical-seo", "international-seo", "seo-services", "linkedin-marketing", "lead-generation", "web-development"],
    related: ["logistics", "construction", "b2b"],
  },
  logistics: {
    challenges: [
      "Services are hard to tell apart, and buyers reduce the decision to rate per shipment.",
      "Freight marketplaces and digital forwarders have taken the top of search results for generic terms.",
      "Enterprise contracts are won through tenders and relationships that marketing rarely gets credit for.",
      "Quote requests arrive incomplete, so the first response is a list of questions instead of a price.",
    ],
    demand:
      "Logistics demand is specific. Shippers search by lane, mode, cargo type and compliance requirement: temperature-controlled, hazardous, oversized, bonded. Pages that match those specifics capture intent that a general services page never will. Paid search is efficient for narrow, high-intent terms and wasteful on broad ones. Larger accounts are influenced over time through LinkedIn, trade media and the experience of smaller shipments, so the programme has to serve both the quick quote and the long tender.",
    contentNeeds: [
      "Lane and route pages with transit times, frequency and modes",
      "Service pages by cargo type and handling requirement",
      "Industry pages showing an understanding of each sector's supply chain",
      "Compliance, licences, insurance and safety information",
      "Tracking, documentation and customs guidance that customers return to",
    ],
    conversion: [
      ["The quote form", "Origin, destination, cargo details and dates, asked in a structured way, allow a priced response the first time."],
      ["Speed of acknowledgement", "Shippers ask several providers at once. An immediate acknowledgement with a realistic response time keeps you in consideration."],
      ["Spot enquiry to account", "A single shipment is an audition. Follow-up should aim at the regular lane, not just the next quote."],
    ],
    examples: [
      "A set of lane pages for the company's strongest routes, each with real operational detail supplied by the operations team.",
      "A structured quote journey with conditional questions by mode and cargo type, connected to the CRM.",
      "A LinkedIn programme aimed at supply chain and procurement roles in the sectors the company already serves well.",
    ],
    services: ["seo-services", "google-ads", "linkedin-ads", "lead-generation", "marketing-automation", "content-marketing"],
    related: ["manufacturing", "ecommerce", "b2b"],
  },
  construction: {
    challenges: [
      "Past work is the main proof of capability and is usually presented as a photo gallery with no detail.",
      "Residential contractors receive many small or unsuitable enquiries, while commercial work arrives through tender lists.",
      "Operating areas are regional, and a firm known in one area is invisible fifty miles away.",
      "Project cycles are long, so marketing results are slow to appear and easy to stop funding.",
    ],
    demand:
      "Construction demand divides into two patterns. Homeowners and small developers search locally by project type, such as extensions, fit-outs and roofing, and decide on reviews, photographs and responsiveness. Commercial clients, architects and consultants look for evidence of similar projects, accreditations and financial stability, often after hearing a name through their network. Local search and detailed project pages serve the first group. A credible website, LinkedIn presence and searchable case material serve the second, where the aim is to be invited to tender.",
    contentNeeds: [
      "Project pages with scope, sector, location, programme and the client's problem",
      "Service and sector pages for each type of work the firm wants",
      "Accreditations, health and safety record and insurance details",
      "Regional pages for genuine operating areas",
      "Process content explaining how a project runs from survey to handover",
    ],
    conversion: [
      ["Enquiry qualification", "Project type, location, budget range and timing let the firm prioritise serious work and decline the rest politely."],
      ["Proof at the point of enquiry", "Relevant projects shown beside the form give a prospect a reason to complete it."],
      ["Pre-qualification material", "Commercial buyers need documents. Making them easy to request shortens the path to a tender list."],
      ["Follow-up over long timelines", "A project discussed today may start next year. Contact should continue without becoming a nuisance."],
    ],
    examples: [
      "A project library in which each completed job becomes a structured, searchable page tagged by sector, service and region.",
      "Local search work for each operating region, tied to the offices and project locations that actually exist.",
      "An enquiry form that asks for project value and timeline, and a routing rule that sends each to the right estimator.",
    ],
    services: ["local-seo-services", "seo-services", "web-development", "linkedin-marketing", "video-marketing", "lead-generation"],
    related: ["real-estate", "home-services", "manufacturing"],
  },
  "home-services": {
    challenges: [
      "Lead marketplaces sell the same job to several tradespeople and push prices down.",
      "The phone rings while the team is on a job, and unanswered calls go to the next listing.",
      "Demand moves with weather and season, so capacity and advertising are rarely in step.",
      "Service areas are wide, while map visibility falls away quickly with distance from the registered address.",
    ],
    demand:
      "Home services demand is urgent, local and decided in minutes. The map pack and local service ads take most of it, and the choice comes down to proximity, rating, number of reviews and whether someone answers. Paid search covers emergencies and the areas where organic map visibility is weak. Planned work such as installations and renovations involves more research and rewards project photographs, clear pricing guidance and reviews that mention the same kind of job. Existing customers are an undervalued source through servicing reminders and referrals.",
    contentNeeds: [
      "A page for each service with what is included and how pricing works",
      "Service-area pages for the places the business really covers",
      "Photographs of completed jobs with a short description",
      "Licences, insurance, guarantees and trade body membership where held",
      "Answers to the questions customers ask before booking, including call-out terms",
    ],
    conversion: [
      ["Answering the phone", "The largest conversion gain is often outside the website: answering more calls and returning missed ones quickly."],
      ["Booking without a call", "Some customers prefer to book online or by message. Offer it, and confirm at once."],
      ["Price expectations", "A guide price or call-out fee stated upfront screens out poor fits and reassures the rest."],
      ["Review generation", "Asking every satisfied customer, at the right moment, compounds into map visibility and conversion."],
    ],
    examples: [
      "A Google Business Profile and service-area plan that reflects where jobs are actually won and where the business wants more.",
      "Call tracking that separates booked jobs from enquiries, so that campaigns are judged on work done.",
      "A missed-call text-back and WhatsApp booking flow for out-of-hours enquiries.",
    ],
    services: ["google-maps-seo", "local-seo-services", "google-ads", "landing-page-optimization", "whatsapp-automation", "marketing-automation"],
    related: ["local-business", "construction", "dental"],
  },
  b2b: {
    challenges: [
      "Marketing is measured on leads while sales is measured on revenue, and the two numbers rarely agree.",
      "Buying groups are large, and the person who fills in the form is seldom the person who decides.",
      "Most research happens out of sight, in private conversations, communities and AI tools.",
      "Sales cycles outlast reporting periods, so effective programmes are cut before they pay back.",
    ],
    demand:
      "B2B demand is built slowly and harvested briefly. At any moment only a small part of a market is actively buying, and the rest are forming impressions that will decide the shortlist later. Organic search and AI answers serve buyers researching a problem, LinkedIn reaches defined roles and accounts whether or not they are searching, and paid search catches the few who are ready now. Email and events maintain relationships between buying windows. The programme works when all of it is measured against pipeline in the CRM and not against lead counts.",
    contentNeeds: [
      "Problem-led content that helps a buyer make the internal case for change",
      "Role-specific material for finance, technical and operational stakeholders",
      "Comparison and evaluation guides, including the build-or-buy question",
      "Pricing, implementation and security information that procurement will ask for",
      "Evidence of method: how the work is done and what the client must provide",
    ],
    conversion: [
      ["Lead definitions", "Until marketing and sales agree what a qualified lead is, conversion rates measure nothing useful."],
      ["Gating", "Forms in front of every asset reduce reach and fill the CRM with people who wanted a PDF. Gate sparingly."],
      ["Handover speed and context", "An enquiry passed to sales with its history is worked sooner and with more care."],
      ["Multi-stakeholder journeys", "Give a champion what they need to persuade colleagues: summaries, business case material and answers to objections."],
    ],
    examples: [
      "A content map that assigns each asset to a role in the buying group and a stage in the decision.",
      "A LinkedIn and search programme planned around a named account list agreed with sales.",
      "A pipeline dashboard connecting channel, campaign and content to opportunities and closed revenue in the CRM.",
    ],
    services: ["lead-generation", "linkedin-ads", "seo-services", "content-marketing", "marketing-automation", "ai-seo-services"],
    related: ["saas", "professional-services", "manufacturing"],
  },
  "professional-services": {
    challenges: [
      "The product is expertise, which is invisible until someone has already hired the firm.",
      "Partners are the firm's best marketing asset and have the least time to spare for it.",
      "Work arrives through referral, which is healthy and also leaves growth dependent on a few relationships.",
      "Confidentiality limits what can be said about past engagements.",
    ],
    demand:
      "Professional services demand is relational. A buyer hears a name from a colleague, sees a partner's article or talk, then searches for the firm and the individual to confirm the impression. That makes named-expert search, LinkedIn and the firm's own published thinking the channels that matter most. Organic search for specific problems brings in buyers who have no existing adviser, and AI assistants are becoming a source of shortlists for specialist expertise. Earned coverage in trade and business media lends the independent validation that a firm cannot supply for itself.",
    contentNeeds: [
      "Points of view on the problems clients face, written by the people who solve them",
      "Partner and practitioner profiles that show specialism and published work",
      "Service pages describing the engagement: scope, method and what the client gets",
      "Anonymised or approved case material that explains the problem and the reasoning",
      "Original research or analysis that others have reason to cite",
    ],
    conversion: [
      ["A low-commitment first step", "Few buyers are ready to request a proposal. A short diagnostic conversation or a useful briefing is an easier yes."],
      ["Finding the right person", "Visitors want to speak to the expert, not a general inbox. Make the relevant partner reachable from the content they wrote."],
      ["Proof under confidentiality", "Where clients cannot be named, describe the type of organisation, the problem and the approach in enough detail to be credible."],
    ],
    examples: [
      "An expert publishing programme that turns one partner conversation a month into an article, a LinkedIn series and a briefing.",
      "Profile pages and structured data that connect each practitioner to their specialisms and published work.",
      "A digital PR plan built on the firm's own analysis, aimed at the trade titles its clients read.",
    ],
    services: ["linkedin-marketing", "seo-services", "digital-pr", "aeo-services", "content-marketing", "web-development"],
    related: ["legal", "accounting", "b2b"],
  },
  technology: {
    challenges: [
      "Technical buyers discount marketing claims and trust documentation, benchmarks and peers.",
      "Products are complex, and the website explains what they are without making clear what they are for.",
      "Developers adopt a tool long before anyone with a budget hears of it, and the commercial path is unclear.",
      "Documentation sites are built on JavaScript frameworks that search engines and AI crawlers render poorly.",
    ],
    demand:
      "Technology demand runs on two tracks. Practitioners find tools through documentation, tutorials, code repositories, community threads and, increasingly, AI coding and research assistants, and they judge by whether the thing works as described. Executives arrive later, through analyst coverage, peer recommendation and searches for a business outcome. Technical SEO and accurate, well-structured documentation serve the first track. Commercial pages, LinkedIn and earned media serve the second, and the commercial result depends on connecting them.",
    contentNeeds: [
      "Documentation that is accurate, versioned, indexable and fast",
      "Tutorials and reference implementations for common use cases",
      "Benchmarks and comparisons with the method published",
      "Architecture, security and compliance material for evaluation teams",
      "Business-level pages that translate capability into outcomes for non-technical buyers",
    ],
    conversion: [
      ["Time to first success", "A developer who gets something working quickly keeps going. Quick-start paths are conversion work."],
      ["From free use to evaluation", "Signals of team adoption should prompt a helpful commercial conversation, not an aggressive one."],
      ["Security and procurement", "Enterprise deals stall on questionnaires. Publishing the answers in advance shortens the cycle."],
      ["Two audiences, one site", "Engineers and executives need different routes from the same home page, each without wading through the other's content."],
    ],
    examples: [
      "A rendering and crawl audit of the documentation site, with fixes specified as tickets for the engineering team.",
      "A citation study showing which sources AI assistants draw on when asked about the product's category, and where the gaps are.",
      "A commercial journey design that links documentation usage to evaluation requests without placing forms in front of the docs.",
    ],
    services: ["technical-seo", "geo-services", "content-seo", "linkedin-ads", "digital-pr", "nextjs-development"],
    related: ["saas", "b2b", "education"],
  },
  "local-business": {
    challenges: [
      "The owner is also the marketing department and has an hour a week for it at most.",
      "Chains and franchises with larger budgets appear above independents in ads and often in maps.",
      "Listings on maps, directories and social profiles disagree about hours, address or phone number.",
      "Budgets are small, so a campaign that does not pay back in weeks cannot continue.",
    ],
    demand:
      "Local demand comes from people nearby who want something soon. Map results and the business profile do most of the work, followed by reviews and photographs. Social media, Instagram in particular for food, retail and personal services, reminds people the business exists and gives them a reason to visit. A small, tightly targeted paid search or local campaign can cover the gaps. WhatsApp and messaging have become the way many customers ask a quick question before they come in, and repeat custom and word of mouth still outweigh everything else.",
    contentNeeds: [
      "A complete, accurate business profile with categories, services, hours and photographs",
      "A simple, fast website that states what you do, where and when",
      "Prices, menus or service lists that are current",
      "Recent photographs of the premises, the work and the people",
      "Regular, honest replies to reviews",
    ],
    conversion: [
      ["Being reachable", "A wrong phone number or out-of-date opening hours loses customers who had already decided to come."],
      ["Calls and messages", "Quick answers to simple questions about stock, price and availability convert better than any page."],
      ["Booking and ordering", "Where it suits the business, letting customers book or order without calling removes a step."],
      ["Reviews as proof", "A steady flow of recent reviews matters more than a perfect score from long ago."],
    ],
    examples: [
      "A listings clean-up that makes name, address, phone and hours consistent everywhere customers look.",
      "A review routine the team can run in five minutes a day, with a printed prompt at the counter.",
      "A small search campaign limited to the real catchment and to the hours someone is there to answer.",
    ],
    services: ["google-maps-seo", "local-seo-services", "google-ads", "whatsapp-automation", "wordpress-development", "instagram-marketing"],
    related: ["home-services", "hospitality", "dental"],
  },
};

export const industryDetail: Record<string, IndustryDetail> = Object.fromEntries(
  Object.entries(seeds).map(([slug, s]) => [slug, { ...s, conversion: s.conversion.map(([title, body]) => ({ title, body })) }]),
);
