import type { Service, ServiceMaster } from "@/types";

export const master: ServiceMaster = {
  reviewed: "2026-10-06",

  answer: {
    question: "What is digital PR?",
    text: "Digital PR is the practice of earning coverage, mentions and links from online publications by giving journalists something worth reporting: original data, expert comment or a useful resource. It applies the methods of public relations to the goals of search, because references from credible sites are among the signals search engines and AI assistants use to judge authority. Coverage is earned on editorial merit and is never paid for. It is measured by relevant coverage, referring domains and branded search demand.",
    takeaways: [
      "Journalists link when a source adds something to their story, and the link is their decision.",
      "The relevance of a publication matters more than the number of links earned.",
      "Buying links that pass ranking credit breaches search engine spam policies and puts existing rankings at risk.",
      "Not every piece of coverage includes a link, and unlinked mentions still build recognition.",
    ],
  },

  facts: [
    { label: "Best for", value: "Businesses in competitive markets with expertise or data to share" },
    { label: "Works alongside", value: "SEO, content marketing, AI search and social" },
    { label: "Typical horizon", value: "First coverage can come in weeks; authority builds over 6 to 12 months and is never certain" },
    { label: "Measured in", value: "Relevant coverage, referring domains and branded search" },
  ],

  pillars: [
    {
      title: "Data-led stories",
      body: "Numbers give a journalist a headline and a reason to credit a source. We find stories in your own data, in public datasets and in commissioned research, and publish the method so the findings can be trusted.",
      items: ["Analysis of your anonymised internal data", "Studies built on public datasets", "Commissioned surveys with stated samples", "Regional and sector breakdowns", "Methodology published with every study"],
    },
    {
      title: "Expert comment and reactive PR",
      body: "Reporters need qualified people to quote, often within hours. We prepare your specialists, watch the news and journalist requests, and supply comment that is accurate, useful and on time.",
      items: ["Spokesperson profiles and credentials", "News and journalist request monitoring", "Comment drafted with the expert", "An approval process built for speed", "Topics you will not comment on"],
    },
    {
      title: "Media research and outreach",
      body: "A pitch works when it reaches the right journalist with a story that fits their beat. Lists are built for each campaign and pitches are written individually, without mass mailing.",
      items: ["Media lists built per story", "Journalist beats and recent work checked", "Individually written pitches", "Follow-up without pestering", "Relationships kept up between campaigns"],
    },
    {
      title: "Linkable assets on your site",
      body: "Coverage needs somewhere to point. A study page, tool or guide on your own site gives journalists a reason to link, and gives readers who follow the link something worth their time.",
      items: ["Campaign landing pages", "Charts and tables free to reuse", "Calculators and simple tools", "Reference guides and glossaries", "Press page with experts and assets"],
      href: "/content-marketing/",
    },
    {
      title: "Link profile review and reclamation",
      body: "Before earning new references we check the ones you have. Some coverage mentions you without linking, some links point at dead pages, and some past link building may carry risk.",
      items: ["Backlink audit and risk review", "Unlinked brand mentions followed up", "Links to broken pages recovered", "Competitor link gap analysis", "Disavow only where clearly justified"],
      href: "/seo-services/",
    },
    {
      title: "Brand mentions and AI visibility",
      body: "AI assistants form their view of a brand from what is written about it across the web. Consistent coverage in trusted sources improves the chance of being named when buyers ask for recommendations, though no one controls those answers.",
      items: ["Coverage in sources AI systems draw on", "Consistent brand and expert descriptions", "Inclusion in credible round-ups", "Branded search demand tracked", "AI answer presence monitored"],
      href: "/ai-seo-services/",
    },
  ],

  mechanics: {
    heading: "How does a story become coverage, links and authority?",
    intro: "Digital PR depends on decisions made by people you do not control: journalists, editors and then the systems that read their work. Understanding what each of them needs is the craft. The chain has five links, and it can break at any of them.",
    stages: [
      { name: "Story", happens: "A journalist needs something new, relevant to their readers and safe to publish.", we: "Develop angles from data and expertise, and test them against what the press is covering now." },
      { name: "Pitch", happens: "The journalist scans a crowded inbox and decides quickly whether to read on.", we: "Send a short, specific pitch to the right person, with the finding in the first line." },
      { name: "Publication", happens: "If the story runs, the writer or editor decides whether to credit and link the source.", we: "Make linking natural by hosting the full data and method on a page worth citing." },
      { name: "Pickup", happens: "Other outlets may follow the story, citing the original coverage or the source.", we: "Offer fresh angles and regional cuts to further publications while the story is live." },
      { name: "Authority", happens: "Search engines and AI systems read links and mentions as evidence of credibility over time.", we: "Track referring domains, branded search and AI answers, and connect them to organic performance." },
    ],
  },

  timeline: [
    { when: "Weeks 1 to 3", title: "Audit and story mining", body: "We review your backlink profile and past coverage, interview your experts and look through the data you hold for stories.", outputs: ["Link profile and coverage audit", "Shortlist of story ideas"] },
    { when: "Weeks 3 to 6", title: "First campaign build", body: "The strongest idea is researched, analysed and written up, with a landing page, visuals and a media list built for it.", outputs: ["Campaign asset and methodology", "Targeted media list"] },
    { when: "Weeks 6 to 9", title: "Launch and outreach", body: "Pitching runs in waves to different beats and regions, with follow-up angles prepared in advance.", outputs: ["Outreach log", "Coverage report as it lands"] },
    { when: "Month 2 onward", title: "Reactive comment", body: "Alongside planned campaigns, your experts respond to news and journalist requests as they arise.", outputs: ["Expert comments submitted", "Mentions and links earned"] },
    { when: "Every month", title: "Coverage review", body: "Coverage is assessed for relevance and quality, not only counted, and the next campaigns are shaped by what journalists responded to.", outputs: ["Coverage and referring domain report", "Next campaign plan"] },
  ],

  comparison: {
    heading: "Digital PR or paid link building: what is the difference?",
    intro: "Both aim to increase the links pointing at a site, which is why they are confused. They differ in how the link comes to exist, and that difference decides the risk.",
    columns: ["Digital PR", "Paid link building"],
    rows: [
      { label: "How links arise", a: "Editorial choice by a journalist", b: "Placement bought from a site owner" },
      { label: "Policy position", a: "Within search engine guidelines", b: "Breaches link spam policies" },
      { label: "Predictability", a: "Volume cannot be promised", b: "Fixed number per month" },
      { label: "Source quality", a: "Publications with real readers", b: "Often sites built to sell links" },
      { label: "Wider value", a: "Awareness, referrals, AI mentions", b: "Little beyond the link" },
      { label: "Main risk", a: "A campaign may earn little", b: "Links ignored or penalised" },
    ],
    verdict: "Paid links offer certainty of delivery and uncertainty about everything that matters afterwards. Digital PR is less predictable month to month, but what it earns lasts and carries no policy risk.",
    link: { label: "See how authority fits into our SEO services", href: "/seo-services/" },
  },

  industries: ["saas", "finance", "ecommerce", "travel", "real-estate", "technology"],
  markets: ["uk", "usa", "india", "australia"],

  faqs: [
    { q: "How much does digital PR cost?", a: "Cost depends on how many campaigns run in a period, whether research has to be commissioned, and how much reactive comment is included. We do not price per link, because links cannot fairly be sold by the unit. After a growth audit you receive a proposal scoped around campaigns and the work each involves." },
    { q: "How long does digital PR take to work?", a: "A reactive comment can be published within days, and a planned campaign typically takes several weeks from idea to first coverage. The effect on rankings is slower and indirect, building as credible references accumulate over months. Some campaigns earn little, so we plan several and do not depend on one." },
    { q: "Is digital PR the same as link building?", a: "It is one way of building links, and the only one we use. Link building as a term also covers tactics such as paid placements, link exchanges and private networks, which breach search engine policies. Digital PR earns links through editorial coverage, where a journalist chooses to reference you." },
    { q: "Is digital PR worth it for a small business?", a: "It can be, at the right scale. A local or specialist business rarely needs national headlines; coverage in trade titles, regional press and relevant industry sites is more achievable and often more useful. If the site still has basic technical or content problems, fixing those usually comes first." },
    { q: "Will every piece of coverage include a link?", a: "No. Linking is an editorial decision, and some publications rarely link out or apply a nofollow attribute to all external links. That coverage still has value for awareness, branded search and the wider picture AI systems build of your brand. We ask for a link politely where it would help readers." },
    { q: "Do nofollow links have any value?", a: "Yes, though less directly. Google treats nofollow as a hint and not a strict instruction, and a link from a respected publication sends real readers whatever attribute it carries. A natural link profile contains a mix. We report followed and nofollow links separately so the picture is clear." },
    { q: "Do you ever pay for placements?", a: "No. We do not buy links, and we do not present sponsored content as editorial. If a publication offers only paid placement, we tell you and treat it as advertising, which should be labelled and carry the appropriate link attribute. It is not counted as earned coverage in our reporting." },
    { q: "What do you need from us to start?", a: "One or two people willing to be quoted, with the authority to approve comments quickly, and access to any data you hold that could be analysed in anonymised form. We also need to know your boundaries: topics, competitors or claims you would not want associated with the brand." },
    { q: "How is digital PR measured?", a: "By the relevance and quality of coverage earned, referring domains from publications that matter to your buyers, growth in branded search, and presence in AI answers. We also watch the organic performance of pages that campaigns support. Raw link counts and invented advertising value figures are not used." },
  ],
};

export const overrides: Partial<Service> = {
  metaTitle: "Digital PR Services: Earned Links & Coverage",
  metaDescription: "Digital PR services that earn coverage and links through data-led stories and expert comment. No bought links, no guaranteed counts, honest reporting.",
};
