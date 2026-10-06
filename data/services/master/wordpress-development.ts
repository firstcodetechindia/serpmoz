import type { Service, ServiceMaster } from "@/types";

/**
 * /wordpress-development/ : custom themes, block editor, plugin discipline.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What are WordPress development services?",
    text: "WordPress development services cover building, customising and maintaining websites on WordPress, the open-source content management system. The work includes designing a custom theme, creating blocks and patterns for the editor, choosing and configuring a small set of plugins, and setting up hosting, caching, security and backups. Done with discipline, it produces a site that editors can run themselves and that stays fast and secure as it grows. Done carelessly, it produces the slow, fragile sites WordPress is blamed for.",
    takeaways: [
      "WordPress is open-source software you host yourself, so you own the site and its data.",
      "A custom block theme gives editors freedom within limits and avoids page-builder overhead.",
      "Most WordPress speed and security problems come from plugins, themes and hosting, not from core.",
      "It needs regular updates, so maintenance is part of the cost of ownership.",
    ],
  },

  facts: [
    { label: "Best for", value: "Content-led business sites with people who publish regularly" },
    { label: "Works alongside", value: "SEO, content marketing, CRO and marketing automation" },
    { label: "Typical horizon", value: "Often 6 to 12 weeks for a custom build; rescue work can show sooner, depending on condition" },
    { label: "Measured in", value: "Core Web Vitals, publishing time, update health, organic visibility" },
  ],

  pillars: [
    {
      title: "Custom theme development",
      body: "The theme is written for your design system and nothing else. It loads only the styles and scripts each page needs, which is the main reason a custom theme outperforms a multipurpose one.",
      items: ["Block theme built from your designs", "Global styles defined in theme.json", "Templates for each content type", "No page-builder dependency", "Code in version control with a staging site"],
      href: "/ui-ux-design/",
    },
    {
      title: "Block editor experience",
      body: "Editors work in the native block editor with blocks and patterns made for your content. Options are restricted on purpose, so a new page cannot drift off brand or break the layout.",
      items: ["Custom blocks for recurring content", "Patterns for common page sections", "Locked templates where structure matters", "Custom post types and fields", "Roles and permissions per team"],
    },
    {
      title: "Plugin discipline",
      body: "Every plugin adds code that runs on your server and needs updating. We keep the list short, prefer well-maintained plugins and write small pieces of custom code where a plugin would bring far more than is needed.",
      items: ["Plugin audit and consolidation", "Maintenance history checked before adoption", "Custom code where a plugin is excessive", "No overlapping plugins for one job", "Each plugin's purpose documented"],
    },
    {
      title: "Security and maintenance",
      body: "WordPress is a frequent target because it is so widely used, and most compromises come through outdated plugins, abandoned themes or weak credentials. Routine maintenance closes most of those doors.",
      items: ["Managed core, plugin and theme updates", "Updates tested on staging first", "Two-factor login and least-privilege accounts", "Off-site backups with tested restores", "Firewall, malware scanning and uptime monitoring"],
    },
    {
      title: "Speed and hosting",
      body: "An uncached WordPress page is assembled by PHP and a database on every request. Good hosting, caching and restraint with scripts are what turn that into a fast site.",
      items: ["Page caching and a CDN", "Object caching for database-heavy pages", "Responsive images in modern formats", "Scripts loaded only where used", "Hosting matched to traffic and budget"],
      href: "/technical-seo/",
    },
    {
      title: "Search foundations and migration",
      body: "WordPress handles the basics of search well when templates are clean. During a rebuild or a move from another platform, we protect existing rankings with redirects and content parity.",
      items: ["Semantic templates and heading structure", "SEO plugin configured, not just installed", "Structured data for key content types", "Redirect mapping for changed URLs", "Indexation rules for archives and tags"],
      href: "/seo-services/",
    },
  ],

  mechanics: {
    heading: "What happens when someone requests a WordPress page?",
    intro: "WordPress builds pages on the server from PHP code and a database, unless a cached copy already exists. Understanding the sequence explains why one WordPress site loads instantly and another takes several seconds.",
    stages: [
      { name: "Cache check", happens: "The CDN or server looks for a stored copy of the page and, if it has one, returns it at once.", we: "Set up page caching and a CDN, with sensible rules for logged-in users and forms." },
      { name: "Bootstrap", happens: "With no cached copy, PHP loads WordPress core, every active plugin and the theme.", we: "Keep the plugin list short and remove code that runs on pages where it is not needed." },
      { name: "Query", happens: "WordPress queries the database for the content, settings and menus the page requires.", we: "Add object caching, tidy autoloaded options and fix slow queries." },
      { name: "Render", happens: "Theme templates and blocks turn the data into HTML and attach stylesheets and scripts.", we: "Write lean templates and load each block's assets only where it appears." },
      { name: "Deliver", happens: "The browser receives the HTML and fetches images, fonts and scripts to display the page.", we: "Serve correctly sized images, limit fonts and delay non-essential third-party scripts." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Audit and plan", body: "For an existing site we review theme, plugins, hosting, security and speed, then say plainly whether to repair or rebuild. For a new site we define content types and editorial needs.", outputs: ["Site audit or requirements", "Repair or rebuild recommendation"] },
    { when: "Weeks 2 to 5", title: "Design and block planning", body: "Designs are broken down into the blocks and patterns editors will use, so the editing experience is designed alongside the pages.", outputs: ["Approved designs", "Block and pattern inventory"] },
    { when: "Weeks 4 to 10", title: "Theme and block build", body: "The theme, custom blocks and templates are built on staging. Plugins are selected, configured and documented.", outputs: ["Staging site", "Plugin list with justification"] },
    { when: "Weeks 8 to 12", title: "Content, testing and launch", body: "Content is migrated, redirects are mapped and the site is tested for speed, accessibility and search readiness before going live.", outputs: ["Redirect map", "Launch checklist"] },
    { when: "Every month", title: "Maintenance", body: "Updates are applied on staging, checked and released. Backups, uptime and security are monitored, and small improvements are shipped.", outputs: ["Update and security log", "Performance check"] },
  ],

  comparison: {
    heading: "WordPress or Webflow: which is better for a business site?",
    intro: "These are the two platforms most marketing teams end up choosing between. WordPress is open software you host and extend; Webflow is a hosted visual tool with tighter boundaries.",
    columns: ["WordPress", "Webflow"],
    rows: [
      { label: "Hosting", a: "You choose and manage it", b: "Included, managed by Webflow" },
      { label: "Maintenance", a: "Regular updates required", b: "Platform handles updates" },
      { label: "Extending it", a: "Vast plugin ecosystem, custom PHP", b: "Limited to platform features and embeds" },
      { label: "Content scale", a: "Handles very large content libraries", b: "Plan-based CMS limits" },
      { label: "Design control", a: "Through the theme and blocks", b: "Direct visual control" },
      { label: "Ownership", a: "Open source, fully portable", b: "Tied to Webflow hosting" },
    ],
    verdict: "WordPress suits content-heavy sites, complex content types and teams who want full ownership and are prepared to maintain it. Webflow suits smaller, design-led marketing sites where nobody wants to think about updates or servers.",
    link: { label: "See our Webflow development service", href: "/webflow-development/" },
  },

  industries: ["professional-services", "education", "healthcare", "b2b", "real-estate", "local-business"],
  markets: ["india", "usa", "uk", "australia"],

  faqs: [
    { q: "How much does a custom WordPress website cost?", a: "Cost depends on the number of templates and custom blocks, integrations, content migration and whether ecommerce is involved. A custom theme costs more to build than adapting a bought one and usually less to run, because it is faster and has fewer dependencies. We price after a growth audit." },
    { q: "Why is my WordPress site so slow?", a: "The usual causes are a heavy multipurpose theme or page builder, too many plugins loading scripts on every page, no caching, oversized images and underpowered hosting. WordPress itself is rarely the problem. An audit normally identifies a handful of changes that account for most of the delay." },
    { q: "Is WordPress secure enough for a business website?", a: "Yes, when it is maintained. WordPress core is actively patched, and most compromises trace back to outdated plugins, abandoned themes or weak passwords. Prompt updates, two-factor login, limited admin accounts, a firewall and tested backups reduce the risk to a level comparable with other platforms." },
    { q: "How many plugins is too many?", a: "There is no fixed number. One poorly written plugin can do more harm than twenty good ones. What matters is whether each plugin is maintained, does one clear job and loads only where needed. As a working rule, if nobody can explain why a plugin is installed, it should be removed." },
    { q: "Should we use a page builder like Elementor or the block editor?", a: "For a custom build we recommend the native block editor. It is part of WordPress core, produces lighter pages and does not tie the site to a third-party product. Page builders are quicker to start with and suit small budgets, but they add weight and make later redesigns harder." },
    { q: "When is WordPress the wrong choice?", a: "When the site behaves more like an application than a publication, with accounts, complex logic or real-time data. It is also a poor fit if nobody will maintain it, since an unpatched WordPress site becomes a liability. In those cases Next.js or a hosted platform such as Webflow is usually better." },
    { q: "Can you speed up or fix our site without rebuilding it?", a: "Often, yes. Caching, image handling, plugin clean-up and better hosting can transform a site whose theme is fundamentally sound. If the theme or page builder is the cause, repairs have a ceiling and we will say so, with an estimate of what a rebuild would change." },
    { q: "Do we need a maintenance plan after launch?", a: "Yes. WordPress, its plugins and PHP all release updates, some of them security fixes. Someone has to apply them, test the site and keep backups. That can be your own team, your host or us, but it should be a named responsibility and not something left to chance." },
    { q: "Is WordPress only for blogs?", a: "No. That reputation dates from its origins. WordPress now runs corporate sites, publications, membership sites, learning platforms and online stores through WooCommerce. Custom post types and fields let it model almost any kind of content, which is why it remains so widely used." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "WordPress Development: Custom Themes & Speed",
  metaDescription:
    "WordPress development from SERPMOZ: custom block themes, a short and justified plugin list, security, caching and maintenance for sites editors can run.",
};
