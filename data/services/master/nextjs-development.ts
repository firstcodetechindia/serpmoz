import type { Service, ServiceMaster } from "@/types";

/**
 * /nextjs-development/ : React and Next.js builds with a headless CMS.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Next.js development?",
    text: "Next.js development is the building of websites and web applications with Next.js, an open-source framework based on React. Next.js lets each page be rendered in the way that suits it: generated ahead of time, rendered on the server for each request, or updated in the browser. Content usually comes from a headless CMS through an API. The result can be very fast and fully indexable, but it requires developers to build and to maintain.",
    takeaways: [
      "Next.js is a React framework that handles routing, rendering, caching and image optimisation.",
      "Each route can use a different rendering strategy, chosen by how often its content changes.",
      "Content is normally managed in a separate headless CMS and delivered through an API.",
      "It gives more control than a traditional CMS and carries a higher engineering commitment.",
    ],
  },

  facts: [
    { label: "Best for", value: "Sites needing custom functionality, strict performance or content from several systems" },
    { label: "Works alongside", value: "A headless CMS, UI/UX design, technical SEO and analytics" },
    { label: "Typical horizon", value: "Commonly 10 to 20 weeks to launch, depending on templates, integrations and migration size" },
    { label: "Measured in", value: "Core Web Vitals in field data, indexation, conversion rate, publishing time" },
  ],

  pillars: [
    {
      title: "Rendering strategy",
      body: "The main architectural decision in a Next.js project is where and when each page is rendered. We decide it route by route, based on how often the content changes and whether it differs per visitor.",
      items: ["Static generation for stable pages", "Timed or on-demand revalidation for CMS content", "Server rendering for personalised or live data", "Streaming for slow data sources", "Client rendering kept to interactive parts"],
    },
    {
      title: "Headless CMS and content model",
      body: "A headless CMS stores content as structured fields instead of finished pages. Modelled well, editors can build pages from approved components; modelled badly, they need a developer for every layout change.",
      items: ["CMS selection: Sanity, Contentful, Strapi or similar", "Content types, fields and validation", "Page building from reusable blocks", "Preview of unpublished content", "Roles, workflows and localisation"],
    },
    {
      title: "Component system",
      body: "The design system is implemented as typed React components with documented variants. Server components carry the content, and client components are used only where interaction requires them.",
      items: ["Design tokens for colour, type and spacing", "Typed, reusable React components", "Accessible patterns for menus, dialogs and forms", "Server and client components separated deliberately", "Component documentation for future developers"],
      href: "/ui-ux-design/",
    },
    {
      title: "Search and structured data",
      body: "A JavaScript framework is not a barrier to indexing when the content arrives as HTML from the server. We make sure it does, and build the search fundamentals into the templates so they cannot be forgotten on new pages.",
      items: ["Content present in server-rendered HTML", "Metadata and canonical tags generated per route", "Structured data as JSON-LD", "XML sitemaps and robots rules", "Redirects managed in code or CMS"],
      href: "/technical-seo/",
    },
    {
      title: "Performance engineering",
      body: "Next.js makes good performance possible, not automatic. Heavy client bundles, unoptimised images and third-party tags can make a Next.js site as slow as any other.",
      items: ["JavaScript bundle budgets per route", "Responsive images in modern formats", "Font loading without layout shift", "Third-party scripts deferred or removed", "Field data monitored after launch"],
    },
    {
      title: "Deployment and operations",
      body: "The site is deployed from a repository through an automated pipeline, with a preview for every change. Hosting is chosen with its costs and constraints understood, including whether you need to avoid dependence on one provider.",
      items: ["Hosting on Vercel, another platform or your own infrastructure", "Preview deployments for each change", "Automated tests and type checks", "Error tracking and uptime monitoring", "Framework and dependency upgrade plan"],
    },
  ],

  mechanics: {
    heading: "How does Next.js decide where and when a page is rendered?",
    intro: "A Next.js site does not render every page the same way. Some HTML is produced once at build time, some on the server per request and some in the browser, and the mix determines speed, hosting cost and how fresh the content is.",
    stages: [
      { name: "Build", happens: "At deployment, pages that do not depend on the visitor are rendered to HTML ahead of time.", we: "Decide which routes can be prerendered and keep build times manageable on large sites." },
      { name: "Request", happens: "A visitor asks for a page; a cached copy is served from the edge, or the server renders it on demand.", we: "Set caching rules per route so that cached and dynamic content are never confused." },
      { name: "Server render", happens: "Server components fetch data and produce HTML, which can be streamed to the browser in parts.", we: "Keep data fetching on the server and send the important content first." },
      { name: "Hydrate", happens: "The browser downloads JavaScript for interactive components and attaches behaviour to the HTML.", we: "Limit client components so less script is shipped and pages respond sooner." },
      { name: "Revalidate", happens: "Cached pages are regenerated after a set interval or when the CMS signals a change.", we: "Connect CMS publishing to revalidation so editors see updates without a full rebuild." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Requirements and content audit", body: "We list the page types, integrations and editorial needs, and check whether Next.js is the right tool before committing to it.", outputs: ["Requirements and integration list", "Fit assessment with alternatives"] },
    { when: "Weeks 2 to 4", title: "Architecture", body: "Rendering strategy per route, CMS selection, content model, hosting and the migration approach are decided and documented.", outputs: ["Technical architecture document", "Content model"] },
    { when: "Weeks 4 to 14", title: "Build in sprints", body: "Components first, then templates, then integrations. Each sprint ends with a preview deployment your team can review in a browser.", outputs: ["Component library", "Preview deployment each sprint"] },
    { when: "Weeks 12 to 18", title: "Migration and acceptance", body: "Content is migrated, redirects are mapped and the site is tested against performance, accessibility and search acceptance criteria.", outputs: ["Redirect map and migrated content", "Acceptance test report"] },
    { when: "Launch onward", title: "Launch and operate", body: "After go-live we monitor field performance, errors and indexation, hand over documentation and agree who maintains the codebase.", outputs: ["Monitoring dashboard", "Documentation and editor training"] },
  ],

  comparison: {
    heading: "Next.js or WordPress: which should you build on?",
    intro: "Both can produce a fast, well-ranked site. They differ in who can change it, what it costs to run and how far it can be extended, and Next.js is the wrong choice more often than its popularity suggests.",
    columns: ["Next.js with headless CMS", "WordPress"],
    rows: [
      { label: "Editing", a: "Structured fields in a separate CMS", b: "Visual block editor, built in" },
      { label: "New page layouts", a: "Need a developer", b: "Editors can build from blocks" },
      { label: "Performance", a: "High ceiling, less to work around", b: "Good with a lean build and caching" },
      { label: "Custom functionality", a: "Unrestricted", b: "Possible, often through plugins" },
      { label: "Ongoing dependency", a: "Developers required", b: "Updates and plugin upkeep" },
      { label: "Wrong choice when", a: "Simple site, no developer on call", b: "Application-like or highly custom needs" },
    ],
    verdict: "Choose Next.js when you have a specific requirement a traditional CMS handles poorly and ongoing access to developers. For a content site run by a marketing team, WordPress or Webflow is usually cheaper to own and just as effective.",
    link: { label: "See our WordPress development service", href: "/wordpress-development/" },
  },

  industries: ["saas", "technology", "finance", "ecommerce", "education", "b2b"],
  markets: ["usa", "uk", "india", "singapore"],

  faqs: [
    { q: "What is Next.js used for?", a: "Next.js is used to build marketing sites, content platforms, ecommerce storefronts, dashboards and web applications with React. It is chosen when a project needs fast pages, search-friendly HTML and custom functionality in one codebase, often with content supplied by a headless CMS or other back-end systems through APIs." },
    { q: "How much does a Next.js website cost?", a: "Cost depends on the number of templates and components, the CMS, the integrations and the volume of content to migrate. A Next.js build generally costs more than an equivalent WordPress or Webflow site, because more is written by hand. We scope and price after a growth audit." },
    { q: "How long does a Next.js build take?", a: "Most marketing sites take around three to five months from requirements to launch. The range is wide because integrations, the number of languages and the size of the migration vary so much. A small site with a simple content model can be quicker; an application with accounts and payments takes longer." },
    { q: "Is Next.js better than WordPress for SEO?", a: "Not inherently. Search engines rank content and pages, not frameworks. Next.js makes it easier to achieve strong Core Web Vitals and clean HTML, while WordPress offers mature SEO tooling out of the box. A well-built site on either can rank; a badly built one on either will struggle." },
    { q: "Do we need a headless CMS with Next.js?", a: "For any site that non-developers will update, yes. Without one, every text change means editing code and deploying. A headless CMS gives editors forms, previews and workflows, while Next.js controls presentation. Very small sites sometimes keep content in files, which only works if a developer makes the changes." },
    { q: "When is Next.js the wrong choice?", a: "When the site is a simple brochure or blog, when nobody on your side can maintain a codebase, or when marketing needs to create new layouts freely every week. In those cases the engineering overhead buys little. A platform with built-in editing will usually serve you better." },
    { q: "Do we have to host a Next.js site on Vercel?", a: "No. Vercel builds Next.js and offers the most direct hosting, but the framework is open source and runs on other platforms and on your own servers or containers. Some features need extra configuration elsewhere, so we choose hosting during architecture and explain the trade-offs." },
    { q: "Will Google index a site built with React?", a: "Yes, provided the content is in the HTML the server sends. Problems arise with applications that render everything in the browser, where indexing depends on JavaScript being executed. We build so that headings, copy, links and structured data are present before any script runs, and verify it in testing." },
    { q: "Can our own developers take over the code afterwards?", a: "Yes. The code lives in your repository, written in TypeScript with documented components and conventions. Next.js and React are widely used, so finding developers is rarely the problem. The practical requirement is that somebody owns upgrades, because the framework releases significant changes regularly." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Next.js Development Services: Fast, SEO-Ready",
  metaDescription:
    "Next.js development from SERPMOZ: React builds with a headless CMS, the right rendering strategy per page, strong Core Web Vitals and search-ready HTML.",
};
