import type { Service, ServiceMaster } from "@/types";

/**
 * /google-maps-seo/ : Google Business Profile and map pack visibility only.
 * Citations, location pages and the wider programme belong to
 * /local-seo-services/.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Google Maps SEO?",
    text: "Google Maps SEO is the work of improving how a business appears in Google Maps and in the map pack, the block of local businesses shown on a Google results page. It centres on the Google Business Profile: verifying it, choosing accurate categories, completing services, hours and attributes, adding real photographs, and earning and answering reviews. Google states that it orders these results by relevance, distance and prominence, so the work concentrates on the two a business can influence.",
    takeaways: [
      "Map results are drawn from Google Business Profiles, not directly from websites.",
      "Google describes three factors for local results: relevance, distance and prominence.",
      "The primary category is among the most influential choices on a profile.",
      "Rankings in Maps change with the searcher's position, so they are tracked across a grid.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses customers find by searching nearby on a phone" },
    { label: "Works alongside", value: "Local SEO, location landing pages and local ads" },
    { label: "Typical horizon", value: "Profile fixes within weeks; wider coverage over several months" },
    { label: "Measured in", value: "Calls, direction requests and bookings from the profile" },
  ],

  pillars: [
    {
      title: "Verification and profile integrity",
      body: "A profile that is unverified, duplicated or in breach of Google's guidelines cannot perform, and may disappear without warning. We start by making sure each one is legitimate, owned by you and unlikely to be suspended.",
      items: ["Ownership claimed and verification completed", "Duplicate profiles found and merged or removed", "Business name matched to real-world signage", "Address or service area set correctly", "Suspension appeals prepared with evidence"],
    },
    {
      title: "Categories, services and attributes",
      body: "These fields tell Google which searches the business is relevant to. Most profiles we audit have a workable primary category and little else, which leaves relevance for specific services to chance.",
      items: ["Primary category chosen against competitors", "Secondary categories that are true and useful", "Service list with plain descriptions", "Attributes such as accessibility and payment options", "Opening hours, including holidays and special hours"],
    },
    {
      title: "Photos, posts and products",
      body: "People judge a business from its profile in seconds, largely on pictures. Fresh, real images and occasional updates show the business is active and help a searcher choose it over the listing beside it.",
      items: ["Exterior, interior and team photographs", "Images of real work, not stock pictures", "Posts for offers, events and updates", "Product or service listings where supported", "Customer-uploaded content monitored"],
    },
    {
      title: "Reviews on the profile",
      body: "Review count, rating and recency contribute to prominence and decide a great many choices. We set up a way of asking every real customer and replying to what they write, within Google's review policies.",
      items: ["Direct review link and QR code for staff", "Requests timed after a completed visit or job", "Replies to positive and negative reviews", "Policy-breaking reviews reported for removal", "No incentives, gating or written-for-you reviews"],
    },
    {
      title: "Website signals behind the profile",
      body: "Google also draws on the website a profile links to when judging relevance and prominence. The page behind each profile should confirm the same services, address and hours.",
      items: ["Profile linked to its own location page", "Matching name, address and phone on that page", "Services on the page mirroring the profile", "Local business structured data", "Local links and mentions pointing to the site"],
      href: "/local-seo-services/",
    },
    {
      title: "Calls, bookings and tracking",
      body: "Visibility in the map is only useful if it becomes an enquiry that someone answers. We measure what people do on the profile and what happens after they tap through.",
      items: ["Grid scans across the service area", "Profile performance data: calls, directions, clicks", "Tagged website and appointment links", "Booking links where the category supports them", "Landing pages checked on mobile"],
      href: "/landing-page-optimization/",
    },
  ],

  mechanics: {
    heading: "How does Google decide which businesses appear in the map pack?",
    intro: "Google publishes the outline of how local results are chosen, though not the detail or the weighting. The factors work together, but it helps to think of them in the order a profile has to pass them.",
    stages: [
      { name: "Eligibility", happens: "Only verified profiles that follow Google's guidelines can be shown. Suspended or duplicate profiles drop out.", we: "Verify, clean up duplicates and remove anything in the profile that risks suspension." },
      { name: "Relevance", happens: "Google matches the search to profiles using categories, services, the business description and the linked website.", we: "Choose categories carefully and describe each service in the words customers use." },
      { name: "Distance", happens: "It considers how far each business is from the searcher, or from the place named in the search.", we: "Set the address or service area accurately, and track where visibility falls away." },
      { name: "Prominence", happens: "It weighs how well known the business is: reviews, ratings, links, mentions and its standing in web results.", we: "Build genuine reviews and strengthen the website and local references behind the profile." },
      { name: "Choice", happens: "A small set of businesses is shown. The searcher compares rating, photos and opening hours, then taps one.", we: "Make the listing the easy choice, and make calling, booking or getting directions effortless." },
    ],
  },

  timeline: [
    { when: "Week 1", title: "Profile and competitor audit", body: "We review every field on the profile, look for duplicates and guideline risks, and study the businesses currently shown for your main searches.", outputs: ["Google Business Profile audit", "First grid scan of the service area"] },
    { when: "Weeks 2 to 3", title: "Repair", body: "Verification, duplicates, wrong pins, incorrect hours and name issues are resolved first. Reinstatement after a suspension depends on Google's review and can take longer.", outputs: ["Clean, verified profile", "Log of changes submitted"] },
    { when: "Weeks 3 to 5", title: "Complete and align", body: "Categories, services, attributes, descriptions and imagery are filled in properly, and the profile is linked to a page that says the same things.", outputs: ["Category and attribute strategy applied", "Profile content and photographs published"] },
    { when: "Month 2 onward", title: "Reviews and regular activity", body: "The review request routine goes live with your front-line staff, and photos and posts are added on a steady cadence. Prominence builds from here, gradually.", outputs: ["Review request and reply process", "Monthly photo and post schedule"] },
    { when: "Every month", title: "Grid and actions report", body: "We rescan the grid, read profile actions against the previous period and check for unwanted edits, since Google and the public can suggest changes to a profile.", outputs: ["Grid ranking report", "Calls, directions and bookings summary"] },
  ],

  comparison: {
    heading: "Google Maps SEO on its own, or a full local SEO programme?",
    intro: "Maps SEO is a focused piece of work on one asset, the Business Profile. Full local SEO includes it and adds the website, directories and local authority around it. Which you need depends on how much competition there is and how many locations you run.",
    columns: ["Google Maps SEO", "Full local SEO"],
    rows: [
      { label: "Focus", a: "Business Profile and map pack", b: "Profile, website, listings, links" },
      { label: "Results targeted", a: "Map pack and Google Maps", b: "Map pack plus local organic" },
      { label: "Website work", a: "Light, alignment only", b: "Location pages and schema" },
      { label: "Effort", a: "Smaller, quicker to set up", b: "Larger, ongoing" },
      { label: "Platforms", a: "Google only", b: "Google, Bing, Apple, directories" },
      { label: "Suits", a: "One location, moderate competition", b: "Many locations or crowded areas" },
    ],
    verdict: "A single-location business with a neglected profile will often get most of the early benefit from Maps SEO alone. Where competitors already have complete profiles and plenty of reviews, the difference is made by the website and local authority behind the profile, which is the wider programme.",
    link: { label: "See our local SEO services", href: "/local-seo-services/" },
  },

  industries: ["dental", "healthcare", "hospitality", "home-services", "automotive", "local-business"],
  markets: ["india", "uae", "usa", "uk"],
  scenario: "multi-location-dental-group",

  faqs: [
    { q: "How do I rank higher on Google Maps?", a: "Start with a verified profile that has the right primary category, a full service list, accurate hours and real photographs. Then earn recent reviews from genuine customers and reply to them. Make sure the linked web page confirms the same details. Distance from the searcher still limits how far any business can appear." },
    { q: "How much does Google Maps SEO cost?", a: "The Business Profile itself is free to create and manage. The cost of a managed service depends on the number of locations, the condition of the existing profiles and how competitive each area is. We scope it after a growth audit, and do not quote before we have seen the profiles." },
    { q: "How long does it take to appear in the map pack?", a: "Edits to a profile are often reflected within days, and their effect on visibility tends to show over a few weeks. Gaining a regular place for competitive searches depends on reviews and prominence, which usually take several months to build. Proximity means results will always differ from street to street." },
    { q: "Why does a competitor further away appear above us?", a: "Distance is one factor of three. A business further away can outrank a closer one if Google judges it more relevant to the search or more prominent, typically through a better-matched category, more and newer reviews, or a stronger website. An audit usually shows which of those applies." },
    { q: "Does adding keywords to our business name help?", a: "The name field does influence relevance, which is why some businesses stuff it. Google's guidelines require the name to match the one used in the real world, and profiles that break this can be edited or suspended. We use your true name and build relevance through categories and services." },
    { q: "Our Google Business Profile was suspended. What should we do?", a: "Do not create a new profile, as that often makes matters worse. Work out which guideline was likely breached, correct it, and submit an appeal with evidence that the business is real and operates at that address. We prepare appeals, but the decision and its timing rest with Google." },
    { q: "Is Google Maps SEO worth it if we already run Google Ads?", a: "Yes, for different reasons. Ads can place you in Maps and search results immediately, at a cost per click. The organic map listing costs nothing per call and is trusted partly because it is earned. A well-reviewed profile also tends to improve how people respond to your ads." },
    { q: "What is a grid ranking report?", a: "It is a map of your service area divided into points, with your position checked from each one for a given search. Because Maps results change with the searcher's location, a single ranking figure misleads. The grid shows where you appear, where you fade and how that shifts over time." },
    { q: "What do you need from us to start?", a: "Manager access to your Google Business Profile, the correct details for each location, access to original photographs or permission to take them, and a contact who can involve front-line staff in asking for reviews. Analytics access helps us follow what profile visitors do next." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Google Maps SEO: Business Profile & Map Pack",
  metaDescription:
    "Google Maps SEO for your Business Profile: verification, categories, photos and reviews that improve map pack visibility, tracked to calls and directions.",
};
