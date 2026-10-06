import type { Service, ServiceMaster } from "@/types";

/**
 * /local-seo-services/ : the whole local programme. Profiles, reviews,
 * citations, NAP, location pages, local schema and attribution. The Business
 * Profile and map pack in depth belong to /google-maps-seo/.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are local SEO services?",
    text: "Local SEO services are the ongoing work of making a business visible to people searching in a specific area, in both map results and the ordinary listings beneath them. The programme covers business profiles, consistent name, address and phone details across directories, a steady flow of genuine reviews, a useful page for each location, local structured data and links from the surrounding community. It is measured by the calls, direction requests, bookings and enquiries each location receives from search.",
    takeaways: [
      "Local SEO covers two sets of results: the map pack and the local organic listings below it.",
      "Name, address and phone details should match everywhere the business is listed.",
      "Each location competes in its own catchment, so each needs its own profile, page and reviews.",
      "Where the searcher is standing affects what they see, and no provider can change that.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses that serve customers at premises or within a service area" },
    { label: "Works alongside", value: "Google Maps SEO, local paid ads and review follow-up" },
    { label: "Typical horizon", value: "Data fixes show in weeks; competitive areas take 3 to 6 months or more" },
    { label: "Measured in", value: "Calls, direction requests, bookings and leads per location" },
  ],

  pillars: [
    {
      title: "Business profiles",
      body: "The profile is often the first and only thing a local searcher reads. We keep every profile complete, accurate and aligned with the website, on Google and on the other platforms your customers use.",
      items: ["Google Business Profile for every location", "Bing Places and Apple Business Connect listings", "Categories and services chosen per branch", "Hours, holiday hours and contact details kept current", "Ownership and access tidied under one account"],
      href: "/google-maps-seo/",
    },
    {
      title: "Citations and NAP consistency",
      body: "A citation is any listing of your name, address and phone number on another site. Conflicting versions confuse customers and weaken a search engine's confidence that it has the right details.",
      items: ["Audit of existing listings and duplicates", "One agreed format for name, address and phone", "Corrections on the directories that matter in your country", "Sector directories and professional registers", "Closed and moved locations cleaned up"],
    },
    {
      title: "Review operations",
      body: "Reviews influence both visibility and choice, and they decay: a strong rating from three years ago persuades fewer people than recent feedback. We build a routine your staff can keep up without incentives or filtering.",
      items: ["Request process built into the customer journey", "Every customer asked, with no gating by satisfaction", "Response guidelines and escalation for complaints", "Monitoring across Google and sector review sites", "Review themes reported back to operations"],
    },
    {
      title: "Location pages",
      body: "A location page should tell a nearby customer something the homepage cannot. We write one per branch with the details that matter locally, and resist publishing pages for places where you have nothing distinct to say.",
      items: ["Services, prices or menus offered at that branch", "Staff, facilities, parking and access", "Areas and neighbourhoods served", "Embedded map, opening hours and click-to-call", "Unique photos and local testimonials"],
    },
    {
      title: "Local schema and site structure",
      body: "Structured data states your locations in a form machines can read without guessing. Combined with sensible URLs and internal links, it helps search engines connect each branch page to its profile.",
      items: ["LocalBusiness markup per location", "Address, geo-coordinates and opening hours in schema", "A store locator that search engines can crawl", "Internal links from service pages to branches", "Profile website links pointed at the right page"],
      href: "/technical-seo/",
    },
    {
      title: "Local links and attribution",
      body: "Prominence is partly earned through mentions from the community around you. And none of the work can be judged unless calls and visits from search are traced back to the location that received them.",
      items: ["Local press, sponsorships and associations", "Supplier, partner and chamber listings", "Tagged profile links for analytics", "Call tracking that keeps NAP details intact", "Reporting by location, not only in total"],
      href: "/digital-pr/",
    },
  ],

  mechanics: {
    heading: "What happens between a nearby search and a new customer?",
    intro: "A local search is usually over in a minute or two, and much of it happens before your website is opened. Five steps separate the search from the enquiry, and a different part of the local programme decides each one.",
    stages: [
      { name: "Search", happens: "Someone searches for a service, with or without a place name. The search engine infers local intent and their location.", we: "Map the service and area combinations people use, for each branch's catchment." },
      { name: "Results", happens: "A map pack of nearby businesses appears, usually with local organic listings and ads around it.", we: "Work on both: the profile for the map pack, and location pages for the organic listings." },
      { name: "Comparison", happens: "The searcher scans ratings, review counts, distance, photos and whether each business is open.", we: "Build recent reviews, accurate hours and real photographs, so the listing stands up beside its neighbours." },
      { name: "Check", happens: "Many open the profile or the location page to confirm the service, the price range or how to get there.", we: "Make that page answer the practical questions quickly and match what the profile says." },
      { name: "Contact", happens: "They call, ask for directions, book online or send a message. Some simply walk in.", we: "Track each action by location, and flag branches where enquiries arrive and go unanswered." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Local audit", body: "Every profile, listing and location page is reviewed, with a first visibility scan across each catchment and a count of calls and bookings currently traced to search.", outputs: ["Local audit by location", "Baseline visibility and enquiry figures"] },
    { when: "Weeks 2 to 5", title: "Fix the data", body: "Wrong details, duplicate listings and unclaimed profiles are corrected first, because nothing else works on top of bad data. Some directories take weeks to reflect changes.", outputs: ["Corrected profiles and citations", "Agreed NAP standard"] },
    { when: "Weeks 4 to 8", title: "Pages and schema", body: "Location pages are written or rebuilt with branch-specific content, structured data is added, and each profile is linked to its own page.", outputs: ["Location pages live", "Validated local schema"] },
    { when: "Month 2 onward", title: "Reviews and local presence", body: "The review routine starts in each branch, alongside local link and community work. This is slow, cumulative effort and it is where most of the lasting gain comes from.", outputs: ["Review process running per branch", "Local mentions and links earned"] },
    { when: "Every month", title: "Branch-level review", body: "Visibility, profile actions and enquiries are compared across locations. Weak branches get specific attention, and strong ones show what to repeat.", outputs: ["Report by location", "Next month's priorities"] },
  ],

  comparison: {
    heading: "Local SEO or Google Ads: which brings better local customers?",
    intro: "Both put you in front of people searching nearby, in every market we work in. One is earned and builds slowly; the other is bought and starts at once. Most local businesses end up using both, and the useful question is how to split the budget.",
    columns: ["Local SEO", "Google Ads for local searches"],
    rows: [
      { label: "Cost model", a: "Ongoing work, no cost per click", b: "Pay for each click or call" },
      { label: "Speed", a: "Builds over months", b: "Enquiries once campaigns are live" },
      { label: "Where you appear", a: "Map pack and organic listings", b: "Ad slots above and within results" },
      { label: "Trust", a: "Reviews and profile do the persuading", b: "Marked as sponsored" },
      { label: "Control", a: "Earned position, not fixed", b: "Choose areas, hours and budget" },
      { label: "When you stop", a: "Visibility fades gradually", b: "Enquiries stop at once" },
    ],
    verdict: "Use Google Ads to bring in enquiries while local SEO builds, and to cover areas where your profile is not yet strong. Local SEO is the part you keep, and the reviews it earns make the ads convert better too.",
    link: { label: "See our Google Ads service", href: "/google-ads/" },
  },

  industries: ["local-business", "healthcare", "dental", "home-services", "legal", "automotive"],
  markets: ["india", "uae", "uk", "usa"],
  scenario: "multi-location-dental-group",

  faqs: [
    { q: "What does a local SEO company actually do?", a: "It manages everything that affects how a business appears for nearby searches: business profiles, directory listings, reviews, location pages, local structured data and local links. It also sets up tracking so that calls and bookings can be traced to search. Much of the work is careful upkeep, repeated every month." },
    { q: "How much do local SEO services cost?", a: "Cost depends mainly on the number of locations, how competitive each area is and the state of your existing listings and pages. A single branch with clean data is a different job from forty branches with duplicates. We scope it after a growth audit and explain the reasoning in the proposal." },
    { q: "How long does local SEO take to work?", a: "Corrections to profiles and listings can show within a few weeks. Gaining ground against established competitors in a busy area usually takes three to six months and sometimes longer, because reviews and local reputation build gradually. We give a view per location once the audit shows where each one starts." },
    { q: "Is local SEO worth it for a small business?", a: "For most businesses that depend on nearby customers, yes, because local searches carry strong intent and the essentials are not expensive. A complete profile, accurate listings and a regular review habit cover much of the ground. A larger programme only makes sense where competition or the number of locations demands it." },
    { q: "What is the difference between local SEO and regular SEO?", a: "Regular SEO competes for searches where location does not matter. Local SEO competes for searches where the engine shows results based on where the person is. It adds business profiles, reviews, citations and location pages to the usual technical, content and authority work." },
    { q: "Do we need a physical address to do local SEO?", a: "You need a real business that meets customers in person, either at your premises or at theirs. Service-area businesses such as plumbers can hide their address and list the areas they cover. Virtual offices and addresses where no staff are present do not meet Google's guidelines and risk suspension." },
    { q: "Do citations still matter?", a: "They matter less as a way of climbing rankings than they once did, and they still matter for accuracy. Wrong phone numbers and old addresses lose customers directly, and conflicting data makes it harder for search engines to trust your details. We concentrate on the main platforms and sector directories, not hundreds of minor ones." },
    { q: "How do you track calls and visits from local search?", a: "Profile reporting shows calls, direction requests and website clicks. We add tagged links so analytics separates profile traffic from other organic visits, and call tracking set up so your listed number stays consistent. Bookings and form enquiries are attributed by location wherever your systems allow." },
    { q: "Can you get us to number one in the map results?", a: "Nobody can promise that. Map results depend heavily on where the searcher is, so there is no single position to hold. We can widen the area in which a branch appears and improve how it compares with neighbours, and we report that plainly on a grid." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Local SEO Services: Maps, Reviews & Pages",
  metaDescription:
    "Local SEO services for single and multi-location businesses: profiles, citations, reviews, location pages and local schema, tracked to calls and bookings.",
};
