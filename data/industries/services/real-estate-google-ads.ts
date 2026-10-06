import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/real-estate/google-ads/
 * Rules: no client names, no figures, no guarantees. Timings are typical and
 * conditional. Platform and regulatory points are general; readers are sent
 * to their own adviser.
 */
export const record: IndustryServiceRecord = {
  industry: "real-estate",
  service: "google-ads",
  slug: "google-ads",
  name: "Google Ads for Real Estate",
  audience: "real estate developers, brokers and channel partners",

  seo: {
    title: "Google Ads for Real Estate: Qualified Leads",
    metaDescription:
      "Google Ads for real estate developers and brokers: project campaigns, lead quality controls, fast follow-up and bidding that learns from site visits.",
    primaryKeyword: "Google Ads for real estate",
    secondaryKeywords: [
      "real estate PPC",
      "Google Ads for real estate developers",
      "Google Ads for property brokers",
      "real estate lead generation ads",
      "real estate lead quality",
      "project landing pages",
    ],
    searchIntent:
      "A developer or broker running or planning property campaigns wants to know how to get site visits from Google Ads instead of unqualified form fills.",
  },

  hero: {
    title: "Google Ads for Real Estate, Built Around Site Visits",
    description:
      "Property campaigns produce enquiries easily and site visits with difficulty. SERPMOZ runs Google Ads for real estate developers, brokers and channel partners with one landing page per project, tight location targeting, spam and duplicate controls, and bidding that learns from what the sales team records after the first call.",
  },

  facts: [
    { label: "Best for", value: "Live projects with inventory, a sales team and a CRM" },
    { label: "Works alongside", value: "Meta Ads, WhatsApp follow-up, landing pages and project SEO" },
    { label: "Typical horizon", value: "Enquiries at launch; lead quality typically steadies over weeks" },
    { label: "Measured in", value: "Cost per site visit and per booking, by project" },
  ],

  answer: {
    question: "How does Google Ads work for real estate?",
    text: "Google Ads for real estate puts your project in front of people searching by project name, locality, configuration or budget, and sends them to a page built for that project. The hard part is quality. The account has to filter spam, brokers and repeat submissions, reach real buyers within minutes, and report site visits back to the platform so that bidding favours buyers over form fillers.",
  },

  buyers: {
    heading: "How property buyers respond to search ads",
    paragraphs: [
      "Someone who clicks a property ad is rarely ready to buy that day. They are comparing several projects in a micro-market and will submit the same details on several pages within an hour. The first relevant reply usually earns the conversation. Paid search for [real estate](/industries/real-estate/) is therefore as much an operations problem as an advertising one: the ad buys attention, and the response decides whether it becomes a visit.",
      "Search terms reveal where a buyer is in the decision. A project name signals someone who has seen a hoarding, a portal listing or a social ad. A locality plus configuration signals an open shortlist. A budget phrase with a city signals an early stage. These deserve separate campaigns, bids and pages, because their value differs sharply. Blending them lets the least serious enquiries steer the account, the common failure in generic [Google Ads](/google-ads/) setups.",
      "Developers also compete with their own distribution. Channel partners and brokers bid on the project name, send the click to their own form and pass the lead back for commission, raising click prices for everyone. Overseas and investor buyers add another pattern: they search at different hours, from other countries, and need a callback in their own time zone. Both call for a deliberate policy, written down before budget is set.",
    ],
  },

  problems: [
    {
      title: "Partners bidding on your project name",
      body: "Several channel partners advertise on the same project name as the developer. Click prices rise, the buyer sees competing claims about price, and the developer pays commission on an enquiry it could have received directly.",
    },
    {
      title: "Bidding optimised for form fills",
      body: "When the only conversion is a submitted form, automated bidding finds the people most willing to fill forms: often brokers and casual browsers. Volume rises, cost per lead falls and site visits do not move.",
    },
    {
      title: "Spam and duplicates counted as results",
      body: "Bots, repeated submissions and the same buyer arriving through three campaigns all appear as separate conversions. Reported cost per lead looks healthy while the sales team works through a list that is partly noise.",
    },
    {
      title: "Slow follow-up after the enquiry",
      body: "Leads sit in a spreadsheet or an inbox until the next working day. By then the buyer has spoken to another project, and the account is blamed for a loss that happened after the click.",
    },
    {
      title: "One landing page for every project",
      body: "All campaigns point to a general page listing every project. A buyer who searched one project name has to hunt for it, and the platform reads the page as less relevant.",
    },
  ],

  approach: [
    {
      title: "Campaigns by project and intent",
      body: "Each project gets its own campaigns, split into project-name, locality and configuration, and broader budget searches. Budgets and targets are set separately, so a cheap flow of early-stage clicks cannot absorb money meant for buyers who already know the project.",
    },
    {
      title: "A written brand bidding policy",
      body: "We help you set terms with channel partners on who may bid on project and developer names, what claims ads may carry and where clicks may land. The developer's own campaign then defends those names with accurate copy and the official page.",
    },
    {
      title: "One landing page per project",
      body: "Each page states configuration, price approach, location, approvals and possession stage above the form, and matches the wording of the ad. Our [landing page optimisation](/landing-page-optimization/) work tests form length and qualifying questions against site visits, since a shorter form is not always better.",
    },
    {
      title: "Location targeting by buyer catchment",
      body: "Targeting follows where buyers for that project live and work, which is seldom the whole of a city. We exclude areas that send enquiries and no visits, and run separate campaigns for other cities or countries where investors and overseas buyers search.",
    },
    {
      title: "Spam filtering and fast response",
      body: "Forms get validation and bot protection, and the CRM merges repeat submissions and flags known broker numbers. Clean enquiries route instantly to a salesperson, with a [WhatsApp](/whatsapp-automation/) acknowledgement carrying the brochure and a visit slot. Call tracking records how soon a person followed up.",
    },
    {
      title: "Offline conversions fed back",
      body: "Stages recorded by sales, such as qualified, site visit done and booked, are sent back to Google Ads against the original click. Bidding then learns which searches, locations and hours produce visits. The method depends on consent and on disciplined CRM updates.",
    },
  ],

  searches: {
    heading: "Which search themes to bid on or exclude",
    intro:
      "These themes are written in words as patterns. The real list comes from your search terms report and CRM, and it changes with each project, city and stage of the sale.",
    groups: [
      {
        name: "Project and developer name",
        examples: ["project name + price", "project name + brochure", "developer name + new launch"],
        note: "Hold these with exact and phrase matching, send them to the official project page, and report them apart so they do not flatter everything else.",
      },
      {
        name: "Locality and configuration",
        examples: ["3 BHK in a named locality", "flats near a named business district", "villas in a named sector"],
        note: "The main source of new buyers. Bid by distance from the project and by configuration still in stock, and pause themes when inventory sells out.",
      },
      {
        name: "Budget and investment",
        examples: ["flats under a stated budget in a named city", "property for investment in a named city", "buying property from abroad"],
        note: "Wide and early. Use lower bids and a qualifying question on the form, and judge the theme on site visits over a longer window.",
      },
      {
        name: "Themes to exclude",
        examples: ["flats for rent in a named locality", "real estate jobs or broker careers", "home loan calculator"],
        note: "Add these as negative keywords from the first day, then review search terms weekly. Rental, employment and unrelated service searches consume budget quietly.",
      },
    ],
  },

  rules: [
    {
      title: "Housing and property advertising policies",
      body: "Advertising platforms apply policies to housing ads, and in some countries limit targeting by personal characteristics. Regulators may also require registration details in advertisements. Check current requirements with your legal or compliance adviser before launch.",
    },
    {
      title: "Price, offer and possession claims",
      body: "Starting prices, payment schemes, discounts and possession dates in an ad are representations to buyers, and partner ads can create liability for the developer. Have each claim approved by your own legal adviser.",
    },
    {
      title: "Consent for calls and data sharing",
      body: "Calling or messaging an enquirer, and sending their details back to an advertising platform, generally depends on consent and local privacy rules. Ask your compliance adviser to confirm form wording and what may be uploaded.",
    },
  ],

  measures: [
    "Cost per completed site visit, by project and theme",
    "Cost per booking against media spend",
    "Share of enquiries passing spam, duplicate and broker checks",
    "Median time from enquiry to first human contact",
    "Non-brand enquiries and visits, reported apart from project-name campaigns",
  ],

  timeline: [
    {
      phase: "Audit and tracking",
      when: "Weeks 1 to 2",
      body: "We review search terms, partner activity on your names, conversion definitions and lead handling. Tracking is rebuilt so each enquiry carries its click identifier into the CRM, with consent recorded at the form.",
    },
    {
      phase: "Rebuild and launch",
      when: "Weeks 2 to 4",
      body: "Campaigns are restructured by project and intent, negative lists and location targets are applied, and a landing page is prepared for each project. Enquiries typically begin as soon as ads are approved.",
    },
    {
      phase: "Quality feedback loop",
      when: "Weeks 4 to 10",
      body: "Sales stages start flowing back to the platform. Bidding typically needs several weeks of this data before it settles, and the pace depends on how many site visits the project produces.",
    },
    {
      phase: "Shift budget to visits",
      when: "Month 3 onward",
      body: "Budget moves towards the themes, localities and hours that produce site visits and bookings. Inventory changes, new phases and price revisions are reflected in ads and pages as they happen.",
    },
  ],

  faqs: [
    {
      q: "Why are our Google Ads property leads poor quality?",
      a: "Usually for three reasons together. The account bids on broad themes that include renters, job seekers and brokers. The conversion it optimises for is any submitted form, so the system learns to find form fillers. And follow-up is slow, which makes good enquiries look bad by the time someone calls.",
    },
    {
      q: "Should channel partners bid on our project names?",
      a: "That is a commercial decision with reasonable arguments both ways. Partners extend reach, and they also raise your click prices and may show outdated claims. Most developers benefit from a written policy on who may bid on which names and what ads may say. Trademark and contract questions belong with your legal adviser.",
    },
    {
      q: "How much does Google Ads cost for real estate?",
      a: "Two things drive it: media spend and management. Click prices are set by the auction and rise with the number of developers and partners active in the same micro-market. Management effort depends on the number of projects and landing pages, the state of tracking and CRM integration. We scope it after a [growth audit](/growth-audit/).",
    },
    {
      q: "How long before Google Ads produces site visits?",
      a: "Enquiries can start within days of launch. Site visits follow the buyer's pace and your follow-up speed, and typically begin to appear in the first few weeks for projects with ready inventory. Judging lead quality fairly takes longer, because bidding needs a period of sales feedback and property decisions are slow.",
    },
    {
      q: "What is offline conversion tracking, and do we need it?",
      a: "It means telling the advertising platform what happened after the form: which enquiries were qualified, which visited the site and which booked. Without it, the platform treats every enquiry as equal and optimises towards the cheapest. For property, few leads carry most of the value, so it matters. It needs consent and a CRM that sales keep updated.",
    },
    {
      q: "Should we use in-ad lead forms or a landing page?",
      a: "Forms that open inside the ad are quick to submit, so they tend to produce more enquiries with less intent. A project landing page asks the buyer to read first, which filters some casual interest. We test both against site visits. In-ad forms can earn a place in a volume launch with a strong calling team.",
    },
    {
      q: "Can Google Ads reach overseas and non-resident buyers?",
      a: "Yes. Campaigns can run in the countries and cities where your likely buyers live, in the hours they search, with pages that explain remote purchase and a callback in their time zone. Rules and tax treatment for overseas buyers differ by country, so claims are kept general and checked by your advisers.",
    },
  ],

  related: {
    services: ["meta-ads", "landing-page-optimization", "whatsapp-automation", "lead-generation"],
    locations: ["/digital-marketing-agency-gurgaon/", "/digital-marketing-agency-noida/", "/digital-marketing-agency-dubai/"],
    articles: ["what-automated-bidding-should-optimise-for", "attribution-questions-worth-answering"],
  },

  cta: {
    title: "See what your property leads cost per visit",
    body: "A growth audit reviews search terms, partner bidding, lead filtering and follow-up speed, then shows where budget produces site visits and where it produces noise.",
  },
};
