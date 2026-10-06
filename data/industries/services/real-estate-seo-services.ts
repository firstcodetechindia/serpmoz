import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/real-estate/seo-services/
 * Rules: no client names, no figures, no guarantees. Timings are typical and
 * conditional. Regulation is described generally; readers are sent to their
 * own adviser.
 */
export const record: IndustryServiceRecord = {
  industry: "real-estate",
  service: "seo-services",
  slug: "seo-services",
  name: "SEO for Real Estate",
  audience: "real estate developers, brokers and channel partners",

  seo: {
    title: "SEO for Real Estate Developers and Brokers",
    metaDescription:
      "SEO for real estate developers, brokers and channel partners: project-name search, locality pages and enquiry quality, measured in site visits.",
    primaryKeyword: "SEO for real estate developers",
    secondaryKeywords: [
      "real estate SEO services",
      "SEO for property developers",
      "SEO for real estate brokers",
      "real estate SEO company",
      "locality SEO for real estate",
      "project page SEO",
    ],
    searchIntent:
      "A developer, broker or marketing head wants to know what real estate SEO covers and whether their own site can win searches the portals hold.",
  },

  hero: {
    title: "SEO for Real Estate Developers, Brokers and Channel Partners",
    description:
      "Property buyers search by project name, locality and configuration for months before they visit a site. SERPMOZ plans SEO for real estate developers, brokers and channel partners around those searches, so your own pages are found beside the portals and the enquiries that arrive are worth a sales call.",
  },

  facts: [
    { label: "Best for", value: "Developers, brokers and channel partners with named projects" },
    { label: "Works alongside", value: "Google Ads, portal listings and the sales CRM" },
    { label: "Typical horizon", value: "Project-name gains in weeks; localities typically take months" },
    { label: "Measured in", value: "Qualified enquiries and site visits from organic search" },
  ],

  answer: {
    question: "What does SEO for real estate developers involve?",
    text: "SEO for real estate developers means making your own website the place buyers land when they search a project name, a locality or a configuration. It covers project pages that stay useful after launch, locality guides written from real knowledge of the area, and sound technical foundations. It is judged by qualified enquiries and site visits, since rankings alone do not sell a home.",
  },

  buyers: {
    heading: "How property buyers search before they enquire",
    paragraphs: [
      "A home is one of the largest purchases most people make, so the search is long and happens in stages. Early on, a buyer types broad phrases about a city or a budget and lands on a portal. Weeks later the same person searches a named locality and starts to recognise developer names. By the time a project name is typed, the shortlist is nearly formed. Each stage needs a different page.",
      "Portals are both a competitor and a channel. They hold most generic property searches and sell the same enquiry to several developers and brokers. Your own site can win where portals are thin: detailed project pages, micro-market guides and plain answers about payment schedules, possession and approvals. Treat portal listings as paid distribution that must be kept accurate and current. Our wider work for [real estate businesses](/industries/real-estate/) follows the same split.",
      "Investors and overseas buyers, including non-residents buying in a home country, search differently. They ask about rental demand, resale and buying from abroad, and they rely on documents, construction updates and video because they cannot walk past the site. Brokers and channel partners face another problem: many publish near-identical pages for one project. The page with first-hand detail tends to be the one search engines keep, which is where our [SEO services](/seo-services/) start.",
    ],
  },

  problems: [
    {
      title: "Project pages deleted after sell-out",
      body: "When a project sells out, its page is often removed or left to decay. Searches continue for years from resale buyers, tenants and people checking the developer's record, and that attention goes to portals and brokers.",
    },
    {
      title: "Channel partners outrank the developer",
      body: "Brokers and channel partners publish pages for your project name, sometimes with outdated prices or plans. If your own page is thin or slow, a third-party page takes the click and the enquiry is resold.",
    },
    {
      title: "Locality pages with nothing local",
      body: "Many sites produce one template per locality and change only the place name. Buyers and search engines both recognise it. Without real detail on roads, commute and schools, the page earns neither position nor trust.",
    },
    {
      title: "Counting enquiries instead of visits",
      body: "Organic reports often stop at form fills. Enquiry numbers can rise while site visits stay flat, because the pages attract renters, job seekers and brokers. Nobody notices until the sales team complains.",
    },
    {
      title: "Brochure sites built for launch",
      body: "Launch microsites are built quickly on separate domains, heavy with animation and light on text. They start with no authority, are hard for search engines to read, and are abandoned once the campaign ends.",
    },
  ],

  approach: [
    {
      title: "Project-name search you own",
      body: "We make the developer's page the fullest answer for each project name: configurations, floor plans, pricing approach, construction status, approvals and location. Price list, brochure and possession date each get a clear section, so buyers need no third-party page to find them.",
    },
    {
      title: "Locality and micro-market guides",
      body: "Each guide is written with people who know the area: sales staff, site teams, local brokers. It covers connectivity, social infrastructure, the buyer it suits and your inventory in that area. Sales and site offices are supported through our [local SEO services](/local-seo-services/).",
    },
    {
      title: "Pages that outlive a launch",
      body: "Projects live on the main domain in a permanent structure. A page moves through pre-launch, selling, sold-out and delivered states without changing its address, keeping what it has earned. Delivered projects become proof for the next one, with handover photographs and resident information.",
    },
    {
      title: "Technical foundations for property sites",
      body: "Listing filters, map views and gallery scripts create duplicate addresses and slow mobile pages. We decide which filter combinations deserve an indexable page, make plans and specifications readable as text, and add structured data describing the project, the developer and the sales office.",
    },
    {
      title: "Investor and overseas buyer content",
      body: "We build a section for people buying from a distance: how the purchase works remotely, what documents are involved, how rental and resale are handled, and whom to contact in their time zone. Legal and tax points are stated generally and reviewed by your advisers.",
    },
    {
      title: "Enquiry quality and CRM tracking",
      body: "Forms ask purpose, budget band and timeline without becoming a barrier. Every organic enquiry carries its landing page into the CRM, so we can report which project and locality pages produce site visits, and move effort away from pages that attract brokers or renters.",
    },
  ],

  searches: {
    heading: "Which searches are worth winning in real estate?",
    intro:
      "These are patterns, written in words, to show how we group demand. The actual queries and their value come from your own Search Console, CRM and sales conversations, and differ by city and project.",
    groups: [
      {
        name: "Project-name searches",
        examples: ["project name + price list", "project name + floor plan", "project name + possession date"],
        note: "Highest intent and the first priority. Hold these with one complete page per project, kept current through every stage of the sale and after handover.",
      },
      {
        name: "Locality and micro-market searches",
        examples: ["2 BHK in a named locality", "apartments near a named metro station", "new projects in a named sector"],
        note: "Portals are strong here, so depth wins over breadth. Choose micro-markets where you hold inventory and write guides from first-hand knowledge of the area.",
      },
      {
        name: "Investor and overseas buyer searches",
        examples: ["buying property in a named city from abroad", "rental demand in a named locality", "ready to move versus under construction"],
        note: "Fewer searches, each from a buyer with larger intent. Answer plainly, avoid any promise of returns, and offer a call in the buyer's time zone.",
      },
      {
        name: "Process and trust searches",
        examples: ["how to check project approvals", "payment plan types explained", "developer name + reviews"],
        note: "These rarely convert on the first visit. They build familiarity with the developer's name and feed later project-name searches. Have a qualified adviser review them.",
      },
    ],
  },

  rules: [
    {
      title: "Project registration and approvals",
      body: "Many markets require a project to be registered with the real estate regulator before it is advertised, and to show registration details in marketing. Requirements differ by place, so confirm what applies with your own legal or compliance adviser.",
    },
    {
      title: "Price, return and possession claims",
      body: "Statements on appreciation, rental yield, possession dates and starting prices are representations to buyers. We avoid promises of return and date every price reference. Have your legal adviser approve the wording for each project.",
    },
    {
      title: "Buyer data and consent",
      body: "Enquiry forms collect phone numbers and financial details, and follow-up by call or WhatsApp usually needs consent. Privacy and telemarketing rules vary by country. Ask your compliance adviser to confirm the consent wording.",
    },
  ],

  measures: [
    "Qualified organic enquiries by project, excluding brokers and duplicates",
    "Site visits booked from organic search, by page",
    "Bookings traced to an organic first visit",
    "Share of project-name clicks landing on your domain",
    "Non-brand visibility in micro-markets where you hold inventory",
  ],

  timeline: [
    {
      phase: "Audit and baseline",
      when: "Weeks 1 to 3",
      body: "A technical crawl, a review of every project and locality page, and a read of who currently holds your project-name searches. We baseline organic enquiries and site visits from the CRM.",
    },
    {
      phase: "Project pages first",
      when: "Weeks 3 to 8",
      body: "Live projects get complete, permanent pages on the main domain, with old microsites redirected. This is typically where the earliest movement appears, because buyers are already searching for those project names.",
    },
    {
      phase: "Locality and investor content",
      when: "Months 2 to 5",
      body: "Micro-market guides and investor sections are published in order of value, with internal links to inventory. Positions against portals usually build slowly and depend on competition and the first-hand detail you supply.",
    },
    {
      phase: "Review against site visits",
      when: "Month 3 onward",
      body: "Each month we read visibility, enquiries, visits and bookings together, by page. Pages that draw unqualified enquiries are changed or dropped, and new launches enter the same structure without starting from nothing.",
    },
  ],

  faqs: [
    {
      q: "Can a developer's website outrank the property portals?",
      a: "For generic city-wide searches, rarely. Portals have scale a single developer cannot match. For project names, named micro-markets and detailed buyer questions, a developer's site can appear above them, because it holds information no portal has. We plan around those searches and treat portals as paid distribution for the rest.",
    },
    {
      q: "How long does SEO take for a real estate project?",
      a: "It depends on the authority of the domain, competition in the micro-market and how quickly pages are built. Project-name searches can respond within weeks once a complete page exists. Locality positions typically take several months of consistent work. For a short selling window, we usually suggest running [Google Ads](/google-ads/) beside SEO.",
    },
    {
      q: "How much does real estate SEO cost?",
      a: "Cost is driven by the number of live and delivered projects, the micro-markets you want to cover, the state of the current site and how much writing and development your own team will carry. Consolidating several launch microsites needs more technical work than one clean site. We scope the work after a [growth audit](/growth-audit/).",
    },
    {
      q: "Should each project have its own website?",
      a: "Usually not. A separate domain starts with no history, splits the references your brand earns and tends to be abandoned after the campaign. A project section on the main domain inherits existing authority and keeps contributing after sell-out. Separate landing pages for paid campaigns can sit alongside without competing in organic results.",
    },
    {
      q: "Does SEO work for brokers and channel partners?",
      a: "Yes, with a different emphasis. A broker cannot be the definitive source for a developer's project, so copying the brochure produces a page identical to many others. Brokers do better with locality expertise, fair comparisons between projects, resale and rental inventory, and guidance on the buying process, which stay useful whichever developer is launching.",
    },
    {
      q: "How do you improve enquiry quality from organic search?",
      a: "Quality is mostly decided by which pages attract the visit. Pages about price lists, floor plans and specific configurations draw buyers; pages about jobs, rentals or general news draw others. We track each enquiry's landing page into the CRM, compare it with site visits, and adjust content and form questions accordingly.",
    },
    {
      q: "What happens to a project page after sell-out?",
      a: "It stays at the same address and changes role. The page records what was built and when it was handed over. People continue to search delivered project names for resale, rental and due diligence on the developer. A maintained page answers them, supports the next launch and passes its authority to new project pages.",
    },
  ],

  related: {
    services: ["local-seo-services", "google-ads", "content-seo", "lead-generation"],
    locations: ["/locations/india/gurgaon/", "/locations/india/mumbai/", "/locations/uae/dubai/"],
    articles: ["sizing-search-opportunities-by-value", "attribution-questions-worth-answering"],
  },

  cta: {
    title: "Find out who holds your project-name searches",
    body: "A growth audit shows which searches portals and partners take from you, which pages bring site visits, and what to build first. No ranking promises.",
  },
};
