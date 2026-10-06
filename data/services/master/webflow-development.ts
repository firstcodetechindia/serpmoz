import type { Service, ServiceMaster } from "@/types";

/**
 * /webflow-development/ : design systems, CMS collections, interactions, limits.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is Webflow development?",
    text: "Webflow development is the building of websites in Webflow, a hosted platform that combines a visual design tool, a content management system and hosting. A developer works with real HTML and CSS concepts through a visual interface, structuring the site with classes, components and CMS collections, then publishes to Webflow's hosting. It suits marketing sites that need a distinctive design and frequent updates by non-developers. It is less suited to applications, very large content libraries or complex online stores.",
    takeaways: [
      "Webflow combines visual design, a CMS and managed hosting in one platform.",
      "A consistent class and component system decides whether a site stays easy to change.",
      "CMS collections drive repeatable content such as articles, case studies and locations.",
      "The platform has firm limits on content volume, server-side logic and portability.",
    ],
  },

  facts: [
    { label: "Best for", value: "Marketing teams that want to publish and change pages without a developer" },
    { label: "Works alongside", value: "UI/UX design, SEO, landing page optimisation and CRO" },
    { label: "Typical horizon", value: "Commonly 5 to 10 weeks to launch, depending on page count, CMS structure and content" },
    { label: "Measured in", value: "Time to launch a page, Core Web Vitals, organic visibility, conversion rate" },
  ],

  pillars: [
    {
      title: "Design system in Webflow",
      body: "Webflow rewards planning. We set up variables, a class naming convention and components before building pages, so a change to a colour or a button is made once and applied everywhere.",
      items: ["Variables for colour, type and spacing", "Class naming convention such as Client-First", "Components with editable properties", "Responsive rules across breakpoints", "Style guide page inside the project"],
      href: "/ui-ux-design/",
    },
    {
      title: "CMS collections",
      body: "Collections hold structured content, and collection templates turn each item into a page. Planning fields and references carefully at the start avoids rebuilding the CMS when the content grows.",
      items: ["Collections for articles, cases, team and locations", "Reference fields linking related content", "Collection templates and filtered lists", "Editor-friendly field labels and help text", "Structure planned around plan limits"],
    },
    {
      title: "Interactions and motion",
      body: "Webflow makes animation easy to add and easy to overdo. We use motion to direct attention or explain something, and test what it costs in loading and responsiveness.",
      items: ["Scroll and hover interactions used sparingly", "Reduced-motion preferences respected", "Animation tested on mid-range phones", "No motion that delays content", "Heavy effects kept off key landing pages"],
    },
    {
      title: "Search setup and migration",
      body: "Webflow outputs clean markup and gives direct control over the search essentials. On a move from another platform, redirects and content parity matter more than anything in the new design.",
      items: ["Semantic headings and landmark elements", "Metadata patterns from CMS fields", "Structured data added through custom code", "Redirects for every changed URL", "Sitemap, canonical and indexing settings"],
      href: "/technical-seo/",
    },
    {
      title: "Landing pages and integrations",
      body: "Marketing teams choose Webflow largely to launch campaign pages quickly. We build page templates and connect forms to the tools that handle leads afterwards.",
      items: ["Reusable landing page templates", "Forms connected to CRM and email tools", "Analytics, consent and conversion tracking", "Automation through Zapier or Make", "Custom code embeds where justified"],
      href: "/landing-page-optimization/",
    },
    {
      title: "Training and governance",
      body: "A Webflow site degrades when several people add one-off classes and duplicate components. We document how the site is built and agree who may change structure and who edits content only.",
      items: ["Editor and designer roles defined", "Recorded training for your team", "Rules for adding new sections", "Periodic clean-up of unused styles", "Backup and restore points before major changes"],
    },
  ],

  mechanics: {
    heading: "How does a Webflow design become a live, editable website?",
    intro: "Webflow is not a drag-and-drop builder in the usual sense. It is a visual way of writing HTML and CSS, attached to a CMS and hosting. Each stage below is a place where a site is either set up to last or set up to become a tangle.",
    stages: [
      { name: "Style", happens: "Classes and variables created in the Designer generate the site's CSS.", we: "Follow a naming convention and reuse classes, so the stylesheet stays small and predictable." },
      { name: "Structure", happens: "Elements, components and CMS collections define the HTML and where content comes from.", we: "Use semantic elements, build components for repeated sections and model collections carefully." },
      { name: "Publish", happens: "Webflow generates the pages and serves them from its hosting and CDN.", we: "Test on the staging domain first, then publish with redirects and settings checked." },
      { name: "Load", happens: "The visitor's browser downloads the page, and Webflow's scripts run interactions and forms.", we: "Compress images, limit fonts and embeds, and keep animation light." },
      { name: "Edit", happens: "Team members update text, images and CMS items, then republish without touching layout.", we: "Give editors clear fields and guardrails so content changes cannot break the design." },
    ],
  },

  timeline: [
    { when: "Week 1", title: "Plan", body: "Sitemap, content model and the list of CMS collections are agreed, and we check the requirements against Webflow's limits before committing to it.", outputs: ["Sitemap and collection plan", "Platform fit check"] },
    { when: "Weeks 2 to 4", title: "Design", body: "Key pages and components are designed in Figma with responsive behaviour and states defined, so the build is not a series of guesses.", outputs: ["Approved page designs", "Component and style definitions"] },
    { when: "Weeks 4 to 8", title: "Build", body: "The design system, components, pages and CMS templates are built in Webflow, with interactions added last and tested for their cost.", outputs: ["Staging site on Webflow", "Style guide page"] },
    { when: "Weeks 7 to 10", title: "Migrate and launch", body: "Content is imported into collections, redirects are added, forms and tracking are tested and the domain is connected.", outputs: ["Imported content and redirects", "Launch checklist"] },
    { when: "After launch", title: "Enable the team", body: "Your team is trained to edit, create CMS items and build pages from components. We remain available for new components and structural changes.", outputs: ["Training recordings and guide", "Post-launch search and speed check"] },
  ],

  comparison: {
    heading: "Webflow or a custom Next.js build: which should you choose?",
    intro: "Teams often weigh these two once they decide to leave a traditional CMS. Webflow puts control with marketing; Next.js puts it with engineering. The question is which team you want holding it.",
    columns: ["Webflow", "Next.js with headless CMS"],
    rows: [
      { label: "Who builds pages", a: "Marketers and designers", b: "Developers" },
      { label: "Time to launch", a: "Weeks", b: "Months" },
      { label: "Content volume", a: "Plan-based CMS limits", b: "Effectively unlimited" },
      { label: "Custom logic", a: "Embeds and third-party tools", b: "Anything you can code" },
      { label: "Hosting", a: "Webflow only, for full features", b: "Your choice" },
      { label: "Wrong choice when", a: "Site is an application or very large", b: "No developers available long term" },
    ],
    verdict: "Webflow is the better choice for most marketing sites of modest size, because the team that needs changes can make them. Move to Next.js when you reach a real limit, such as content volume, user accounts or deep integration with your own product.",
    link: { label: "See our Next.js development service", href: "/nextjs-development/" },
  },

  industries: ["saas", "technology", "b2b", "professional-services", "finance", "real-estate"],
  markets: ["usa", "uk", "europe", "singapore"],

  faqs: [
    { q: "How much does a Webflow website cost?", a: "Cost depends on the number of unique page designs, the CMS structure, the amount of animation and how much content is migrated. Webflow's own site plan and any workspace seats are separate running costs paid to Webflow. We scope after a growth audit and show what drives the figure." },
    { q: "How long does it take to build a site in Webflow?", a: "A focused marketing site usually takes five to ten weeks from planning to launch. Webflow is quicker to build in than a coded site, so the timetable is mostly set by design approvals and content. Large migrations and many CMS collections extend it." },
    { q: "What are the limitations of Webflow?", a: "The main ones are plan-based caps on CMS items and collections, a limit on how many items a collection list shows before pagination, no server-side code of your own, and basic user account and ecommerce features. Sites with full CMS functionality must also stay on Webflow hosting." },
    { q: "Is Webflow better than WordPress?", a: "For a design-led marketing site run by a small team, often yes: there are no plugins to update and layout control is direct. For large content libraries, complex content types, memberships or tight budgets on hosting, WordPress is usually stronger. The better platform is the one that matches your content and team." },
    { q: "When is Webflow the wrong choice?", a: "When the site needs logged-in areas with real functionality, thousands of frequently changing pages, a large product catalogue or back-end logic. It is also a poor fit if owning and self-hosting the code matters to you. We recommend WordPress, Shopify or Next.js in those situations." },
    { q: "Can we export our site and leave Webflow later?", a: "You can export HTML, CSS, JavaScript and assets on eligible plans, but the export does not include CMS functionality, forms handling or hosting features. CMS content can be exported separately as data. In practice, leaving Webflow means rebuilding on another platform, so treat it as a real commitment." },
    { q: "Is Webflow suitable for an online store?", a: "For a small catalogue with simple needs, it can be. Webflow Ecommerce offers far fewer features, integrations and payment options than a dedicated commerce platform. If the store is central to the business, we generally recommend Shopify for the shop and Webflow, if wanted, for the marketing site." },
    { q: "Will our team really be able to update it without a developer?", a: "Yes for content, and yes for new pages if the site was built with components and a clear class system. Editing text, images and CMS items needs no technical skill. Creating entirely new layouts needs someone comfortable in the Designer, which is a learnable skill but not an automatic one." },
    { q: "Can you take over a Webflow site someone else built?", a: "Yes. We review the class structure, components, CMS setup, interactions and page weight first. If the foundations are sound we refactor in place. If every page has its own one-off classes, rebuilding the structure is usually quicker and cheaper than untangling it, and we will show you why." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Webflow Development: Design Systems & CMS",
  metaDescription:
    "Webflow development from SERPMOZ: a scalable class and component system, CMS collections, restrained interactions, search setup and honest advice on limits.",
};
