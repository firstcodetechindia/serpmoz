import type { Service, ServiceMaster } from "@/types";

/**
 * /ui-ux-design/ : research, IA, wireframes, interface design, design systems.
 * Rules: no client names, no result figures, no guarantees, no prices.
 */
export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is UI/UX design?",
    text: "UI/UX design is the process of deciding how a website or digital product works and how it looks. UX, user experience design, covers research, structure and flow: what people need, how content is organised and which steps lead to a goal. UI, user interface design, covers the visible layer: layout, typography, colour, components and states. The two are done together, tested with real users where possible, and handed to developers as a documented design system.",
    takeaways: [
      "UX design decides structure and flow; UI design decides the visual and interactive layer.",
      "Research and testing replace opinion with evidence about what users actually do.",
      "Wireframes settle layout and content priority before visual design begins.",
      "Accessibility is part of design quality and, in many markets, a legal expectation.",
    ],
  },

  facts: [
    { label: "Best for", value: "Teams redesigning a site or product, or building one without in-house design" },
    { label: "Works alongside", value: "Web development, CRO, content and brand" },
    { label: "Typical horizon", value: "Usually 4 to 10 weeks for a website; products run longer and continue in cycles" },
    { label: "Measured in", value: "Task completion in testing, conversion rate, accessibility conformance, build speed" },
  ],

  pillars: [
    {
      title: "User research",
      body: "We begin with what can be learned about real users from the evidence available: analytics, recordings, search data, support queries and conversations. The depth of research is matched to the size of the decision.",
      items: ["User and stakeholder interviews", "Analytics and session recording review", "Competitor and pattern analysis", "Audience needs and tasks defined", "Findings summarised as design priorities"],
    },
    {
      title: "Information architecture",
      body: "Information architecture is how content is grouped, labelled and linked. If visitors cannot predict where something lives, no amount of visual polish will help them find it.",
      items: ["Content inventory and grouping", "Sitemap and navigation model", "Labels tested with card sorting or tree testing", "Page hierarchy and content priority", "Search demand reflected in structure"],
      href: "/technical-seo/",
    },
    {
      title: "Wireframes and prototypes",
      body: "Wireframes fix what goes on each page and in what order, without the distraction of colour and imagery. Clickable prototypes let us test a flow before anyone writes code.",
      items: ["Low-fidelity wireframes for key templates", "User flows for main tasks", "Clickable prototype in Figma", "Usability testing on the prototype", "Mobile layouts designed first"],
    },
    {
      title: "Interface design",
      body: "The interface gives the structure a visual language: type, colour, spacing, imagery and motion. We design every state of each component, not only the ideal one shown in a presentation.",
      items: ["Typography, colour and spacing scales", "Layout grids across breakpoints", "Component states: hover, focus, error, empty", "Imagery and iconography direction", "Microcopy for buttons, forms and errors"],
    },
    {
      title: "Design systems",
      body: "A design system is a shared library of tokens, components and rules that designers and developers both work from. It keeps a growing site consistent and makes new pages quicker to produce.",
      items: ["Design tokens for core values", "Component library with variants", "Usage guidance and examples", "Naming aligned with the codebase", "Process for proposing and adding components"],
      href: "/web-development/",
    },
    {
      title: "Accessibility",
      body: "Accessible design allows people with visual, motor, hearing or cognitive impairments to use the product, and it tends to improve clarity for everyone. We design to the WCAG success criteria and check our work against them.",
      items: ["Colour contrast for text and controls", "Visible focus states and keyboard order", "Touch targets sized for fingers", "Clear form labels and error messages", "Review against WCAG 2.2 level AA"],
    },
  ],

  mechanics: {
    heading: "How does a visitor decide whether to stay, read and act?",
    intro: "People do not read a page from top to bottom and then make a decision. They pass through a quick series of judgements, and design affects each one. Losing someone at an early stage means the later stages never happen.",
    stages: [
      { name: "Orient", happens: "In the first moments the visitor works out what this is and whether it is relevant to them.", we: "Lead with a plain statement of what you offer and who it is for." },
      { name: "Navigate", happens: "They look for the route to what they came for, using the menu, links or search.", we: "Use familiar navigation patterns and labels drawn from the words users themselves use." },
      { name: "Scan", happens: "They skim headings, images and highlighted text, reading closely only where something catches.", we: "Build a clear visual hierarchy so the key points survive a ten-second skim." },
      { name: "Trust", happens: "They judge credibility from consistency, detail, proof and how carefully the page is made.", we: "Place evidence beside claims and keep every component consistent in look and behaviour." },
      { name: "Act", happens: "They click, fill in a form or buy, or abandon when the step is unclear or laborious.", we: "Make one primary action obvious, shorten forms and write helpful error messages." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 2", title: "Research and goals", body: "We agree what the design must achieve, review analytics and recordings, speak to users or the people closest to them, and study how competitors solve the same problems.", outputs: ["Research summary", "Design goals and success measures"] },
    { when: "Weeks 2 to 3", title: "Structure", body: "Content is grouped and the sitemap, navigation and main user flows are defined. Labels are tested where the structure is large or contested.", outputs: ["Sitemap and navigation", "User flows"] },
    { when: "Weeks 3 to 5", title: "Wireframes and prototype", body: "Key templates are wireframed for mobile and desktop, linked into a prototype and tested with a small number of users.", outputs: ["Wireframes for key templates", "Usability test findings"] },
    { when: "Weeks 5 to 8", title: "Interface design", body: "A visual direction is chosen, applied to the key screens and extended into components with all their states.", outputs: ["High-fidelity designs", "Component library in Figma"] },
    { when: "Weeks 8 to 10", title: "Design system and handover", body: "Tokens, components and usage rules are documented and walked through with developers. We review the build against the designs before launch.", outputs: ["Documented design system", "Design QA of the built pages"] },
  ],

  comparison: {
    heading: "Full redesign or continuous optimisation: which does your site need?",
    intro: "A redesign replaces the structure and look in one move. Optimisation keeps the site and improves it through tested changes. Many teams commission a redesign when their real problem could be solved by the second approach.",
    columns: ["Redesign", "Continuous optimisation (CRO)"],
    rows: [
      { label: "Scope", a: "Structure, look and components", b: "Specific pages and elements" },
      { label: "Evidence", a: "Research and prototype testing", b: "Live experiments on real traffic" },
      { label: "Risk", a: "Many changes at once", b: "Small, reversible changes" },
      { label: "Speed of learning", a: "After launch", b: "Continuous" },
      { label: "Traffic needed", a: "None", b: "Enough to reach valid results" },
      { label: "Best when", a: "Foundations are outdated or inconsistent", b: "Foundations are sound, performance is not" },
    ],
    verdict: "Redesign when the structure, brand or codebase can no longer be improved piece by piece. Optimise when the foundations are sound, and plan to optimise after any redesign, because a launch is a hypothesis until real visitors test it.",
    link: { label: "See our CRO service", href: "/cro/" },
  },

  industries: ["saas", "technology", "finance", "healthcare", "ecommerce", "education"],
  markets: ["usa", "uk", "india", "europe"],

  faqs: [
    { q: "What is the difference between UI and UX design?", a: "UX design is about how something works: the research, structure, flows and content priority that let people complete a task. UI design is about how it looks and responds: layout, type, colour, components and states. A product needs both, since a handsome interface on a confusing structure still fails its users." },
    { q: "How much does UI/UX design cost?", a: "Cost depends on the number of unique templates or screens, how much research and testing is included and whether a full design system is required. A five-template marketing site and a multi-role web application are very different pieces of work. We scope after a growth audit and explain the drivers." },
    { q: "How long does a website design project take?", a: "A typical website design takes four to ten weeks before development begins. Research and structure take the first few weeks, wireframes and testing the middle, and visual design and handover the rest. Timetables stretch mainly through slow feedback, so we agree review dates and a single decision-maker at the start." },
    { q: "Is user research worth it for a small project?", a: "Yes, in proportion. Even a few short conversations with customers and a review of existing analytics will expose assumptions that would otherwise be built into the design. Research does not have to be a long study. Skipping it entirely means designing for the opinions in the room." },
    { q: "Do we need wireframes, or can we go straight to visual design?", a: "Wireframes are worth the time on anything beyond a very small site. They let everyone agree content and layout while changes are cheap. Going straight to visual design tends to turn structural discussions into arguments about colour, and structural mistakes are then found late." },
    { q: "What is a design system and do we need one?", a: "A design system is a documented set of tokens, components and usage rules shared by designers and developers. Any site that will keep growing benefits from at least a small one. A large, formal system is only justified when several people or teams design and build in parallel." },
    { q: "Which accessibility standard should our website meet?", a: "The Web Content Accessibility Guidelines at level AA are the usual reference, and most accessibility laws and procurement rules point to them. Which legislation applies depends on your country and sector, so legal obligations should be confirmed with a qualified adviser. We design to the guidelines and document what was checked." },
    { q: "Can you design in Figma for our own developers to build?", a: "Yes. We deliver organised Figma files with components, variants, tokens and annotations, and walk your developers through them. We also review the built pages against the designs, because the gap between a design file and the live site is where much of the quality is lost." },
    { q: "Is good design mainly about making things look attractive?", a: "No. Appearance matters for first impressions and credibility, but most of the value lies in decisions users never notice: what was left out, the order of information, the wording of a label. A plain page that people can use will outperform a striking one that they cannot." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "UI/UX Design Services: Research to Interface",
  metaDescription:
    "UI/UX design services from SERPMOZ: user research, information architecture, wireframes, interface design, design systems and accessibility to WCAG.",
};
