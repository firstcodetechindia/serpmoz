import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/healthcare/local-seo-services/
 * Rules: no medical advice, no claims about clinical outcomes, no client
 * names, no figures, no guarantees. Platform and regulatory rules are stated
 * in general terms only. Search examples are patterns, not data.
 */
export const record: IndustryServiceRecord = {
  industry: "healthcare",
  service: "local-seo-services",
  slug: "local-seo-services",
  name: "Local SEO for Healthcare",
  audience: "hospitals, clinics and multi-branch healthcare groups",

  seo: {
    title: "Local SEO for Hospitals and Clinics: Services",
    metaDescription:
      "Local SEO for hospitals and clinics: accurate listings for each location, clinician-reviewed pages, privacy-aware reviews and easier appointment booking.",
    primaryKeyword: "local SEO for hospitals and clinics",
    secondaryKeywords: [
      "local SEO for doctors",
      "hospital SEO services",
      "healthcare local SEO",
      "medical practice local SEO",
      "Google Business Profile for clinics",
      "multi-location healthcare SEO",
    ],
    searchIntent: "A hospital or clinic marketing lead wants to know what local SEO involves for healthcare within privacy and advertising limits.",
  },

  hero: {
    title: "Local SEO for Hospitals and Clinics, Location by Location",
    description:
      "Patients look for care by doctor, speciality and condition, and choose from nearby map results. SERPMOZ runs local SEO for hospitals and clinics around accurate listings for every real location, clinician-reviewed pages, reviews handled with patient privacy in mind and an appointment route that works on a phone.",
  },

  facts: [
    { label: "Best for", value: "Hospitals, clinics and groups that see patients at physical locations" },
    { label: "Works alongside", value: "Google Maps SEO, clinical content review and appointment systems" },
    { label: "Typical horizon", value: "Listing fixes typically show in weeks; competitive areas take months" },
    { label: "Measured in", value: "Calls, direction requests and appointment requests per location" },
  ],

  answer: {
    question: "What does local SEO for hospitals and clinics involve?",
    text: "Local SEO for hospitals and clinics makes each real location, department and practitioner findable when someone nearby searches for a doctor, a speciality or help with a condition. It covers profiles and directory listings, a page for every branch and speciality, medical content checked by qualified clinicians, a review routine that protects patient privacy and a clear route to an appointment.",
  },

  buyers: {
    heading: "How do patients search for and choose a hospital or clinic?",
    paragraphs: [
      "People rarely search for a hospital in the abstract. They search for a kind of doctor near them, a speciality in their city, a recommended practitioner, or a symptom they want explained. The first three are local searches, answered by a map of nearby providers. The fourth is informational and often comes weeks earlier. A provider that helps early is more familiar later, which is why [healthcare marketing](/industries/healthcare/) treats both together.",
      "On the map, the comparison is quick and practical. Patients look at distance, opening hours, whether the speciality they need is listed and recent reviews. Many then open the profile or location page to confirm which doctors consult there, on which days, and how to book. Wrong hours, a closed branch still listed or a phone that nobody answers ends the visit. The patient is judging whether the information can be relied on.",
      "The choice involves more than one person and moment. A relative may research for a patient. An urgent need is decided in minutes on a phone, while a planned procedure is researched over several sittings, with questions about the consultant, the visit and fees or insurance. In a multi-branch group, each branch competes in its own catchment against local clinics, so a strong name in one area does not carry to the next.",
    ],
  },

  problems: [
    {
      title: "Listings drift out of date",
      body: "Hours, phone numbers, departments and consultants change, and nobody owns the update. Profiles and directories show different details, so patients arrive at closed clinics or call numbers that nobody answers.",
    },
    {
      title: "Duplicate and unowned profiles",
      body: "Old branches, departments and individual doctors have profiles created by staff who have left, or generated automatically. Duplicates split reviews, show conflicting details and are hard to correct without proof of ownership.",
    },
    {
      title: "One page for every branch",
      body: "A single locations page lists addresses and nothing more. Search engines have no page to match with each profile, and patients cannot see which specialities, doctors and facilities a branch offers.",
    },
    {
      title: "Medical content nobody reviewed",
      body: "Condition and treatment pages were written for search volume, without a clinician checking them. They age, overstate what a treatment does and weaken trust in a subject where accuracy matters most.",
    },
    {
      title: "Review replies that reveal too much",
      body: "Well-meaning staff answer a review by discussing the visit, which can confirm that the reviewer was a patient. Others avoid the risk by never replying, and complaints sit unanswered in public.",
    },
  ],

  approach: [
    {
      title: "A profile for each real location",
      body: "We audit every profile and listing, then set one source of truth for names, addresses, phone numbers, hours and services. Each location that sees patients gets one accurate profile, and duplicates are resolved. This is our [local SEO services](/local-seo-services/) programme, applied to healthcare.",
    },
    {
      title: "Departments and practitioner listings",
      body: "Platforms set their own conditions for when a department or an individual practitioner may have a listing alongside the facility. We follow each platform's current guidelines and agree a naming pattern, so listings for a hospital, its departments and its doctors do not compete.",
    },
    {
      title: "Location, speciality and doctor pages",
      body: "Each branch gets a page with its specialities, consulting doctors, hours, access and booking route. Speciality pages explain what the department treats, and doctor profiles set out qualifications, registrations and where each person consults. Internal links connect doctors, specialities and places.",
    },
    {
      title: "Clinician-reviewed medical content",
      body: "Condition and treatment pages are planned from what patients ask and drafted in plain language. A qualified clinician from your organisation checks every page and is named with a review date. Content informs, prompts readers to consult a doctor and is scheduled for re-review.",
    },
    {
      title: "Privacy-aware review routine",
      body: "We help set up a feedback request that suits your patient communication policies, with no filtering by satisfaction. Reply guidelines keep responses general, never confirming that someone was a patient, and route complaints to a private channel. Map visibility sits under [Google Maps SEO](/google-maps-seo/).",
    },
    {
      title: "Appointment journeys and measurement",
      body: "We follow the route from search to appointment on a phone: the call button, the booking link, the form and after-hours handling. Measurement counts calls and appointment requests by location, designed so health information is not passed to advertising or analytics platforms.",
    },
  ],

  searches: {
    heading: "Which local searches matter for hospitals and clinics?",
    intro:
      "These are illustrative patterns. Your own list comes from the specialities you offer, the areas each branch serves and the words patients use, which are often plainer than clinical terms.",
    groups: [
      {
        name: "Doctor and speciality",
        examples: ["type of doctor + near me", "speciality + doctor + in + city", "type of clinic + open now"],
        note: "The core of local demand. Won through accurate profiles with the right categories, plus a page for each speciality at each branch.",
      },
      {
        name: "Named practitioner",
        examples: ["doctor name + clinic", "doctor name + appointment", "doctor name + reviews"],
        note: "Usually a recommendation being checked. A complete profile page with qualifications, consulting locations and a booking route should be what the patient finds.",
      },
      {
        name: "Condition and treatment",
        examples: ["condition + treatment + in + city", "symptom + which doctor to see", "procedure + what to expect"],
        note: "Informational and sensitive. Publish only clinician-reviewed pages that explain and direct people to appropriate care, without diagnosing or implying a particular result.",
      },
      {
        name: "Practical and branch",
        examples: ["hospital name + area", "hospital name + timings", "type of test + near me"],
        note: "People who have nearly decided. Correct hours, phone numbers, directions and parking details on the profile and location page matter more than copy.",
      },
    ],
  },

  rules: [
    {
      title: "Claims about treatments and results",
      body: "Healthcare advertising is restricted in many countries, often covering claims of cure, comparisons, patient testimonials and before-and-after material. We write to inform and avoid promises. Your compliance adviser should confirm what is permitted.",
    },
    {
      title: "Patient privacy in reviews and tracking",
      body: "Health information is specially protected in many jurisdictions. Review replies, forms and analytics must be designed so patient details are not disclosed or shared. Confirm the approach with your privacy or legal adviser.",
    },
    {
      title: "Practitioner titles and credentials",
      body: "How doctors describe qualifications, specialities and registration is often governed by professional bodies. Profiles should state only what each practitioner is entitled to claim, confirmed with your legal adviser where doubtful.",
    },
  ],

  measures: [
    "Calls and direction requests from search, by location",
    "Appointment requests and bookings that began in search",
    "Share of calls from listings that are answered",
    "Listings with correct hours, phone numbers and services across branches",
    "Recency and volume of reviews at each branch",
  ],

  timeline: [
    {
      phase: "Listings and content audit",
      when: "Weeks 1 to 3",
      body: "Every profile, listing, location page and medical page is inventoried by branch. We record duplicates, wrong details and unreviewed content, and set a baseline of calls and appointment requests from search.",
    },
    {
      phase: "Correct the data",
      when: "Weeks 3 to 6",
      body: "One agreed record for each location is applied across profiles and directories, and duplicate or closed listings are addressed. Verification and directory updates can take weeks, so timing is typical only.",
    },
    {
      phase: "Pages and clinical review",
      when: "Months 2 to 4",
      body: "Location, speciality and doctor pages are built or rebuilt, with structured data. Medical content enters the clinician review process, and its pace depends on reviewer availability. Booking journeys are fixed alongside.",
    },
    {
      phase: "Reviews and branch-level upkeep",
      when: "Month 3 onward",
      body: "The feedback routine runs at each branch, listings are checked on a schedule and results are compared by location every month. Visibility in competitive areas typically builds gradually over several months.",
    },
  ],

  faqs: [
    {
      q: "How is local SEO for hospitals different from other local SEO?",
      a: "The mechanics are shared: profiles, listings, reviews and location pages. Healthcare adds layers most sectors lack. A single facility can involve departments and individual practitioners, medical content needs clinical review, advertising claims are restricted, and reviews and tracking touch protected health information. Compliance has to be planned from the first day.",
    },
    {
      q: "How long does local SEO take for a hospital or clinic?",
      a: "It depends on the state of your listings, the number of branches and how competitive each area is. Corrections to profiles and directories typically show within weeks, once platforms process them. Gaining ground on established providers in a busy area usually takes several months, because reviews and local reputation build slowly.",
    },
    {
      q: "How much does local SEO for hospitals and clinics cost?",
      a: "Cost depends mainly on the number of locations, departments and practitioners, the condition of existing listings and pages, how much medical content needs writing and review, and how competitive each catchment is. We scope the work after a [growth audit](/growth-audit/) and explain the reasoning in the proposal, with no fixed package.",
    },
    {
      q: "Should every doctor have a separate listing?",
      a: "It depends on the platform's current guidelines and on how each doctor practises. Some platforms allow listings for individual practitioners who see patients directly, alongside the facility, under certain conditions. Unplanned listings often create duplicates and split reviews. We check the guidelines in force and recommend a structure for your team to approve.",
    },
    {
      q: "How should we respond to patient reviews?",
      a: "Carefully and in general terms. A reply should thank the person or acknowledge the concern, avoid confirming that they were a patient, mention no detail of any visit and offer a private route to resolve the matter. We draft guidelines for your staff, and your privacy or legal adviser should approve them.",
    },
    {
      q: "Who writes and checks the medical content?",
      a: "Our writers draft pages in plain language from briefs agreed with your team, using reputable clinical sources. A qualified clinician in your organisation reviews every page for accuracy before publication and is named as reviewer. Nothing is published without that step, and nothing we write is intended to replace a consultation.",
    },
    {
      q: "Can you track appointments without compromising patient privacy?",
      a: "In most set-ups, a useful picture is possible. Calls, direction requests and booking starts can be counted by location and channel without recording why someone sought care. We avoid sending health details to advertising or analytics platforms. The exact design depends on your booking software and the privacy law that applies to you.",
    },
  ],

  related: {
    services: ["google-maps-seo", "seo-services", "content-seo", "web-development"],
    locations: ["/digital-marketing-agency-delhi/", "/digital-marketing-agency-mumbai/", "/digital-marketing-agency-dubai/"],
    articles: ["attribution-questions-worth-answering", "sizing-search-opportunities-by-value"],
  },

  cta: {
    title: "Find out what patients see when they search nearby",
    body: "A growth audit reviews your listings, location pages and booking journey for each branch, and returns a prioritised list of corrections and gaps.",
  },
};
