import type { Service, ServiceMaster } from "@/types";

/**
 * /technical-seo/ : crawling, indexing, rendering, speed, architecture and
 * migrations. Content and authority work belong to their own pages.
 * Rules: no client names, no result figures, no guarantees.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is technical SEO?",
    text: "Technical SEO is the part of search engine optimisation concerned with how a website is built and served, as opposed to what it says. It makes sure search engines can discover every important URL, fetch it, render it as a visitor would see it, and store the right version in their index. The work covers robots rules, sitemaps, redirects, canonical tags, JavaScript rendering, internal linking, page speed, structured data and site migrations, and is delivered through changes to code and configuration.",
    takeaways: [
      "Technical SEO deals with access and understanding: whether pages can be crawled, rendered and indexed.",
      "Most technical problems sit in templates, so one fix can affect every page built from that template.",
      "A robots.txt rule stops crawling, not indexing; removing a page from the index needs a noindex directive.",
      "Technical work removes obstacles. It does not make weak content rank.",
    ],
  },

  facts: [
    { label: "Best for", value: "Large, JavaScript-heavy or recently rebuilt sites, and any site about to migrate" },
    { label: "Works alongside", value: "Web development, content SEO and analytics" },
    { label: "Typical horizon", value: "Audit in 2 to 4 weeks; effect follows release and recrawl, often weeks" },
    { label: "Measured in", value: "Indexed versus intended pages, Core Web Vitals, organic visits to fixed templates" },
  ],

  pillars: [
    {
      title: "Crawling and indexation",
      body: "Search engines spend a finite amount of attention on each site. We check that it goes to pages you want found, and that every signal about which version to index points the same way.",
      items: ["Robots.txt and meta robots rules", "XML sitemaps that list only indexable URLs", "Canonical tags, redirects and status codes", "Parameter, filter and pagination handling", "Search Console indexing reports explained"],
    },
    {
      title: "JavaScript and rendering",
      body: "Google renders JavaScript, but as a separate step that can be delayed and can fail, and other crawlers render far less. We compare the HTML your server sends with the page a browser builds, and close the gaps that matter.",
      items: ["Raw HTML compared with rendered output", "Server-side rendering or pre-rendering options", "Links crawlable as real anchor elements", "Metadata and canonicals present before scripts run", "Lazy-loaded content that search engines can reach"],
      href: "/nextjs-development/",
    },
    {
      title: "Site architecture and internal linking",
      body: "How pages link to each other tells search engines which ones matter and how topics relate. Important pages buried five clicks deep, or linked from nowhere, tend to be crawled rarely and ranked poorly.",
      items: ["Click depth to commercial pages", "Orphan pages found and linked", "URL structure and consistency", "Navigation, breadcrumbs and hub pages", "Hreflang for multi-language and multi-region sites"],
    },
    {
      title: "Page speed and Core Web Vitals",
      body: "Core Web Vitals measure loading, responsiveness and visual stability as real users experience them. We trace each failing metric to the template and component responsible, so developers know exactly what to change.",
      items: ["Largest Contentful Paint traced to its cause", "Interaction to Next Paint and script weight", "Cumulative Layout Shift from images, ads and fonts", "Field data read alongside lab tests", "Image, font and third-party script loading"],
      href: "/web-development/",
    },
    {
      title: "Structured data",
      body: "Schema markup describes what a page contains in a vocabulary search engines agree on. It supports rich results where a search engine offers them, and helps machines identify your organisation, products and authors without guessing.",
      items: ["Markup generated from templates, not by hand", "Organisation, product, article and breadcrumb types", "Markup matched to visible page content", "Validation in testing tools and Search Console", "Errors and warnings monitored after releases"],
    },
    {
      title: "Migrations and redesigns",
      body: "Changing domain, platform or URL structure is the riskiest event in a site's search life, because signals built up over years must be carried to new addresses. Most losses come from steps that were skipped, not from bad luck.",
      items: ["Full inventory of existing URLs and their value", "One-to-one redirect map", "Staging site crawled before launch", "Launch-day checks on redirects, tags and sitemaps", "Monitoring of indexation and traffic afterwards"],
      href: "/enterprise-seo/",
    },
  ],

  mechanics: {
    heading: "How does Google get from a URL to an indexed page?",
    intro: "A page passes through a pipeline before it can appear for any search. Each stage has its own ways of failing, and they produce different symptoms, which is why diagnosis starts with finding the stage where a page stopped.",
    stages: [
      { name: "Discovery", happens: "Google learns a URL exists from links on pages it already knows, or from a sitemap.", we: "Make sure important pages are linked internally and listed in clean sitemaps." },
      { name: "Crawl", happens: "Googlebot requests the URL if robots.txt allows it, at a rate your server can handle.", we: "Remove crawl traps, fix error responses and redirect chains, and stop waste on low-value URLs." },
      { name: "Render", happens: "The page is loaded in a headless browser so that content added by JavaScript can be seen.", we: "Put essential content and links in the initial HTML, or make sure scripts render reliably." },
      { name: "Index", happens: "Google analyses the content, groups duplicates, picks a canonical and decides whether to store the page.", we: "Align canonicals, redirects and internal links so the version you want is the one chosen." },
      { name: "Serve", happens: "Indexed pages become eligible to be ranked and shown, with page experience and structured data taken into account.", we: "Improve Core Web Vitals and mark up pages so they qualify for enhanced results." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Crawl and data collection", body: "We crawl the full site in raw and rendered modes, pull Search Console data and, where you can provide them, analyse server logs to see what search engine crawlers actually request.", outputs: ["Complete crawl dataset", "Indexation and Core Web Vitals baseline"] },
    { when: "Weeks 2 to 4", title: "Diagnosis", body: "Issues are grouped by template and cause, then ranked by likely impact and engineering effort. Findings that would not change anything for search are left out on purpose.", outputs: ["Technical SEO audit", "Issues ranked by impact and effort"] },
    { when: "Weeks 4 to 5", title: "Tickets and planning", body: "Each fix is written as a ticket with reproduction steps, the expected behaviour and acceptance criteria, and walked through with your developers so it fits their sprint planning.", outputs: ["Developer-ready tickets", "Agreed release sequence"] },
    { when: "Month 2 onward", title: "Release and verify", body: "Fixes are checked on staging, then confirmed in production with a fresh crawl. Search engines need to recrawl affected pages before any change shows, which takes days on small sites and longer on large ones.", outputs: ["Verified fixes per release", "Before and after comparison"] },
    { when: "Every month", title: "Regression monitoring", body: "Scheduled crawls and alerts catch the problems that new releases introduce, such as a stray noindex tag or a changed canonical, before they cost visibility.", outputs: ["Monitoring alerts reviewed by a specialist", "Monthly technical health summary"] },
  ],

  comparison: {
    heading: "A one-off technical audit, or ongoing technical SEO?",
    intro: "Both begin with the same investigation. The difference is what happens after the findings are delivered, and the right answer depends on how often your site changes and who will implement the fixes.",
    columns: ["One-off audit", "Ongoing technical SEO"],
    rows: [
      { label: "Output", a: "Findings and tickets, once", b: "Tickets, verification, monitoring" },
      { label: "Implementation", a: "Your developers, unsupervised", b: "Supported and checked" },
      { label: "Regressions", a: "Not caught afterwards", b: "Caught by scheduled crawls" },
      { label: "Cost", a: "Fixed, lower", b: "Recurring" },
      { label: "Suits", a: "Stable sites with capable developers", b: "Sites releasing code frequently" },
      { label: "Main risk", a: "Fixes never shipped", b: "Paying for upkeep you do not need" },
    ],
    verdict: "A small, stable site with a developer who will act on the tickets is well served by an audit and a follow-up check. A site that releases often, runs on a JavaScript framework or has a migration ahead benefits from someone watching continuously, because new problems arrive with new code.",
    link: { label: "See our full SEO services", href: "/seo-services/" },
  },

  industries: ["ecommerce", "saas", "technology", "travel", "real-estate", "finance"],
  markets: ["usa", "uk", "india", "europe"],

  faqs: [
    { q: "What does a technical SEO audit include?", a: "A full crawl of the site, a review of Search Console indexing and performance data, rendering tests, Core Web Vitals analysis, checks on redirects, canonicals, sitemaps and structured data, and log analysis where logs are available. The result should be a ranked list of fixes with reasons, not an export of every warning a tool produced." },
    { q: "How much does technical SEO cost?", a: "It depends on the size and complexity of the site, the number of templates, the technology it is built on and whether we advise or implement. A brochure site and a marketplace with millions of URLs are different jobs. We scope the work after a growth audit and explain what is included." },
    { q: "How long before technical fixes affect rankings?", a: "The effect starts once the fix is live and search engines have recrawled the affected pages. On a small site that can be days to a few weeks. On a large one, recrawling takes longer and changes arrive gradually. Indexing fixes usually show sooner than gains that depend on improved page experience." },
    { q: "Is technical SEO worth it for a small website?", a: "Usually as a one-off check, not a continuing service. Small sites on a well-maintained platform tend to have few technical problems, and those few are quick to fix. The cases that justify more are a recent rebuild, a planned migration or a drop in traffic nobody can explain." },
    { q: "Technical SEO vs on-page SEO: what is the difference?", a: "Technical SEO is about whether search engines can reach, render and index your pages. On-page SEO is about what those pages say and how well they match what people search for. Technical work comes first in sequence, because content on a page that is not indexed cannot rank." },
    { q: "Is JavaScript bad for SEO?", a: "No, but it adds risk. Google can render JavaScript, though rendering is an extra step that may be delayed, and content that depends on user interaction may never be seen. Many other crawlers, including some used by AI systems, render little or no JavaScript. Server-side rendering of important content avoids most of the problem." },
    { q: "Why does Search Console say 'Crawled, currently not indexed'?", a: "It means Google fetched the page and chose not to store it. Common reasons are that the page is very similar to others, offers little unique content or sits in a section Google regards as low value. It is more often a quality or duplication signal than a technical fault." },
    { q: "Will a perfect score on an SEO audit tool improve our rankings?", a: "Not by itself. Tool scores count issues without knowing which ones matter for your site, and many flagged items have no effect on search. A site can score highly and be poorly indexed. We prioritise by what blocks crawling, rendering and indexing, and ignore warnings that change nothing." },
    { q: "What access do you need to begin?", a: "Google Search Console and analytics access, permission to crawl the site, and a contact in your development team. Server logs, a staging environment and read access to the code repository or CMS make the diagnosis sharper. Before a migration we also need the plan and timetable as early as possible." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Technical SEO Services: Crawl, Index, Speed",
  metaDescription:
    "Technical SEO services covering crawling, indexing, JavaScript rendering, Core Web Vitals, site architecture and migrations, delivered as developer tickets.",
};
