import type { Service, ServiceMaster } from "@/types";

/**
 * /web-development/ : the umbrella page for the web and digital category.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What does a web development agency do?",
    text: "A web development agency plans, designs, builds and launches websites, then keeps them healthy afterwards. The work starts with what the site must do for the business, moves through choosing a platform that fits the content and the team, and continues into building templates and components, connecting forms, analytics and other systems, and testing on real devices. A good agency also migrates the old site carefully, so that existing search visibility survives the launch.",
    takeaways: [
      "Web development covers discovery, architecture, design, build, testing, launch and ongoing care.",
      "Platform choice follows from content, team and integrations, and it is the hardest decision to reverse.",
      "Most traffic lost in a relaunch is lost through missing redirects and changed content, both preventable.",
      "A site is finished when the people who run it can publish without a developer.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses replacing, rebuilding or first commissioning a site that has to earn enquiries" },
    { label: "Works alongside", value: "UI/UX design, technical SEO, CRO and paid media" },
    { label: "Typical horizon", value: "Often 8 to 16 weeks for a marketing site; longer with integrations, large migrations or slow content" },
    { label: "Measured in", value: "Core Web Vitals, visibility kept after launch, conversion rate, time to publish" },
  ],

  pillars: [
    {
      title: "Discovery and requirements",
      body: "Before anyone opens a design tool we establish what the site is for, who uses it and what it has to connect to. Requirements are written down and ranked, because an unranked list is how projects double in length.",
      items: ["Business goals and the actions that count", "Audit of the current site and its analytics", "Content inventory: keep, rewrite, merge or retire", "Integrations and data flows listed", "Scope, budget and risks agreed in writing"],
    },
    {
      title: "Platform and architecture",
      body: "The platform should suit the content and the people editing it, not the preferences of whoever builds it. We compare the realistic options against your requirements and explain what each one costs you later.",
      items: ["Next.js, WordPress, Webflow or Shopify compared", "Content model and URL structure", "Hosting, environments and deployment", "Ownership of code, domain and accounts", "Total cost of running the site, not only building it"],
    },
    {
      title: "Design and component system",
      body: "Pages are assembled from a set of components designed once and reused everywhere. That keeps the site consistent and makes the tenth new page as quick to produce as the first.",
      items: ["Sitemap, navigation and page hierarchy", "Wireframes for key templates", "Visual design and responsive behaviour", "Component library with documented variants", "Accessibility considered at design stage"],
      href: "/ui-ux-design/",
    },
    {
      title: "Engineering and integrations",
      body: "Templates and components are built in version control, reviewed by a second developer and deployed through a staging environment. Forms and tracking are treated as part of the product, since a site that loses enquiries has failed whatever it looks like.",
      items: ["Front-end build against a performance budget", "CMS configured for the editors who will use it", "Forms connected to CRM and email", "Analytics and consent set up correctly", "Code review and version history"],
    },
    {
      title: "Search-safe migration",
      body: "A relaunch changes URLs, templates and content at the same moment, which is why it is the riskiest event in a site's life for organic traffic. We map the old site to the new one before launch and check the result afterwards.",
      items: ["Redirect map for every indexed URL", "Metadata and structured data carried over", "Internal links updated to final URLs", "Staging kept out of search indexes", "Crawl comparison before and after launch"],
      href: "/technical-seo/",
    },
    {
      title: "Testing, launch and care",
      body: "Launch is a checklist, not an event. After it, a site needs updates, monitoring and small improvements, and we agree who is responsible for each before go-live.",
      items: ["Cross-browser and real-device testing", "Accessibility and performance acceptance checks", "Launch runbook with a rollback plan", "Uptime, error and form monitoring", "Editor training and written documentation"],
    },
  ],

  mechanics: {
    heading: "What happens between a click and a page someone can use?",
    intro: "Every visit passes through the same five steps, and a slow or broken one loses the visitor before your content has a chance. Most of the decisions that determine how each step performs are made during the build, which is why they belong in the specification.",
    stages: [
      { name: "Request", happens: "The browser looks up your domain, opens a secure connection and asks a server or CDN for the page.", we: "Configure DNS, TLS and a CDN so the first response comes from a location near the visitor." },
      { name: "Response", happens: "The server returns stored HTML or builds the page from templates and a database.", we: "Cache what can be cached and choose a rendering approach that suits how often the content changes." },
      { name: "Render", happens: "The browser downloads styles, fonts and images, then paints the layout.", we: "Size and prioritise the main image, limit fonts and reserve space so the layout does not jump." },
      { name: "Interact", happens: "JavaScript loads and the page begins responding to taps, clicks and typing.", we: "Ship less script, defer third-party tags and test responsiveness on mid-range phones." },
      { name: "Act", happens: "The visitor submits a form, books or buys, and the data travels to your systems.", we: "Test every form end to end and confirm each submission reaches the CRM and analytics." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Discovery", body: "Stakeholder conversations, an audit of the current site and a ranked list of requirements. The content inventory starts here, because content is what most often delays a launch.", outputs: ["Requirements document", "Content inventory with decisions"] },
    { when: "Weeks 2 to 4", title: "Architecture and platform", body: "Sitemap, content model and URL structure are settled, and the platform is chosen with the trade-offs written down for whoever inherits the site.", outputs: ["Platform recommendation", "Sitemap and content model"] },
    { when: "Weeks 4 to 8", title: "Design", body: "Wireframes for the key templates, then visual design and a component library. Design is reviewed in the browser as early as possible, not only as static files.", outputs: ["Approved designs for key templates", "Component library"] },
    { when: "Weeks 6 to 14", title: "Build, content and testing", body: "Components and templates are built in sprints while content is written and loaded. Testing runs throughout and intensifies before launch.", outputs: ["Working staging site", "Test report and redirect map"] },
    { when: "Launch and after", title: "Go-live and stabilise", body: "The launch follows a runbook. For the following weeks we watch crawl errors, rankings, forms and speed, and fix what real traffic reveals.", outputs: ["Launch checklist signed off", "Post-launch monitoring report"] },
  ],

  comparison: {
    heading: "Custom-coded site or a CMS platform build: which fits?",
    intro: "This is the decision underneath most web projects. A custom-coded front end removes limits and adds responsibility; an established platform does the opposite. Neither is the better answer in general.",
    columns: ["Custom-coded (Next.js)", "Platform (WordPress, Webflow, Shopify)"],
    rows: [
      { label: "Flexibility", a: "Anything that can be coded", b: "Whatever the platform and plugins allow" },
      { label: "Speed ceiling", a: "Very high when built with care", b: "Good, with more effort to keep" },
      { label: "Editing", a: "Through a separate headless CMS", b: "Built in and familiar" },
      { label: "Who maintains it", a: "Developers, permanently", b: "Editors, with occasional developer help" },
      { label: "Time to first launch", a: "Longer", b: "Shorter" },
      { label: "Best fit", a: "Custom features, scale, strict performance", b: "Content sites, standard stores, small teams" },
    ],
    verdict: "Choose a platform when your needs match what it already does well, and custom code when you can name the specific limit you would otherwise hit. If you cannot name it, the simpler option is usually right.",
    link: { label: "See our Next.js development service", href: "/nextjs-development/" },
  },

  industries: ["b2b", "professional-services", "saas", "healthcare", "real-estate", "education"],
  markets: ["india", "usa", "uk", "uae"],

  faqs: [
    { q: "How much does a new website cost?", a: "Cost depends on the number of unique templates, the integrations, how much content has to be written or migrated and the platform. A five-template brochure site and a multi-language site connected to a CRM are different projects. We scope after a growth audit and give a proposal with the reasoning shown." },
    { q: "How long does it take to build a website?", a: "A typical marketing site takes roughly two to four months from discovery to launch. Complex integrations, large migrations and multiple languages add time. The most common cause of delay is content and approvals on the client side, so we plan those from the first week instead of leaving them to the end." },
    { q: "Should we rebuild our website or improve the one we have?", a: "Improve it if the platform is sound and the problems are content, speed or conversion. Rebuild if the platform itself blocks what you need, the code cannot be maintained or the structure no longer matches the business. We audit before recommending either, because a rebuild is often proposed when a repair would do." },
    { q: "Which platform is best for a business website?", a: "There is no single best platform. WordPress suits content-heavy sites with editorial teams, Webflow suits design-led marketing sites, Shopify suits standard online stores and Next.js suits custom functionality and strict performance needs. The right choice depends on your content, your team and what the site must connect to." },
    { q: "Will a redesign damage our SEO?", a: "It can, and when it does the usual causes are missing redirects, removed or rewritten content and changes to internal linking. All three are preventable. We map every indexed URL to its new address, carry over metadata and structured data, and compare crawls before and after launch." },
    { q: "Is a website builder enough, or do we need an agency?", a: "A builder is enough for a small site with simple needs and someone willing to maintain it. An agency earns its cost when the site has to rank in a competitive market, integrate with other systems, meet accessibility requirements or support a team publishing regularly. We will tell you if you do not need us." },
    { q: "What do you need from us before a web project starts?", a: "Access to the current site, analytics and Search Console, a named decision-maker, brand assets and an honest view of who will supply content. If the site connects to a CRM, booking tool or payment system, we also need someone who understands how those are set up today." },
    { q: "Who owns the website and the code when it is finished?", a: "You do. The domain, hosting, CMS and analytics accounts are registered in your name, and the code sits in a repository you control. This matters more than most buyers realise: a site held in a supplier's accounts is difficult to move if the relationship ends." },
    { q: "Is the website finished once it launches?", a: "No, and that is the most common misconception about web projects. Software needs updates, content goes out of date and real visitors behave differently from what the plan assumed. Budget for maintenance and for a period of improvement after launch, when you finally have data on how the new site performs." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Web Development Services: Design to Launch",
  metaDescription:
    "Web development services from SERPMOZ: discovery, platform choice, design, build, testing and search-safe launch for sites that are fast and easy to edit.",
};
