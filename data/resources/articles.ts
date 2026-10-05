/**
 * Published resources. These are real pieces, written for this site.
 * House rules: no invented statistics, no client references without approval,
 * method shown wherever a recommendation is made. Add new pieces to the top.
 */
export type ArticleSection = { heading: string; paragraphs: string[]; points?: string[] };

export type Article = {
  slug: string;
  title: string;
  /** Slug of a category in data/resources */
  category: string;
  format: "Insight" | "Guide" | "Report";
  summary: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  takeaways: string[];
  /** Slugs in data/services, most relevant first */
  relatedServices: string[];
  sections: ArticleSection[];
};

const author = { author: "SERPMOZ Research", authorRole: "Editorial team" };

export const articles: Article[] = [
  {
    slug: "measuring-ai-search-visibility",
    title: "How to measure AI search visibility when the answer changes every time",
    category: "ai-search",
    format: "Guide",
    summary:
      "AI assistants do not return a fixed list of results. Measuring your presence in them needs a different method from rank tracking: panels, repetition and ranges.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "Track a fixed panel of buying-journey prompts, not individual answers.",
      "Run each prompt several times and report a range.",
      "Record what was cited, because sources are what you can influence.",
    ],
    relatedServices: ["ai-seo-services", "geo-services", "aeo-services"],
    sections: [
      {
        heading: "Why rank tracking does not transfer",
        paragraphs: [
          "A search results page is close to deterministic. Ask the same question twice from the same place and the same ten links appear in roughly the same order. That is what made rank tracking possible: one query, one position, one number to watch.",
          "An AI assistant behaves differently. The same prompt can produce different wording, a different set of named companies and different sources on consecutive runs. A single screenshot of a single answer tells you almost nothing, and a report built from single answers will swing from week to week for reasons that have nothing to do with your work.",
        ],
      },
      {
        heading: "Build a prompt panel",
        paragraphs: [
          "The unit of measurement is a panel: a fixed list of prompts that represents how buyers in your category actually ask for help. A useful panel is small enough to maintain and broad enough to cover the journey.",
        ],
        points: [
          "Category prompts: questions that ask which providers to consider.",
          "Comparison prompts: your brand against named alternatives.",
          "Problem prompts: the situation described without naming a category.",
          "Evaluation prompts: pricing, implementation, risks and fit.",
        ],
      },
      {
        heading: "Repeat, then report a range",
        paragraphs: [
          "Run every prompt several times in each environment you track, on a schedule. From those runs you can calculate how often your brand is mentioned, how often each competitor is mentioned, and how often you are recommended when a recommendation is made.",
          "Report those figures as a range over a period, not as a point value on a day. A mention rate that moved from one band to a clearly higher band over two months is a finding. A figure that moved a few points between Tuesday and Wednesday is noise.",
        ],
      },
      {
        heading: "Record the sources",
        paragraphs: [
          "Where an environment shows its sources, log them. Over time the list tells you which publications, review platforms, communities and pages are shaping answers in your category, and where competitors have evidence that you do not.",
          "This is the part of the measurement that leads to action. You cannot edit an answer. You can publish the pricing explanation that no source currently provides, earn a place in the round-up that keeps being cited, and correct the directory entry that describes your company wrongly.",
        ],
      },
      {
        heading: "What to be careful about",
        paragraphs: [
          "No provider of these systems offers guaranteed placement, and anyone selling it is guessing. Treat the numbers as indicators of direction. Keep the panel stable so that comparisons hold, note every change you make to it, and read AI visibility alongside classic search data, referral traffic and what your sales team hears from new enquiries.",
        ],
      },
    ],
  },
  {
    slug: "sizing-search-opportunities-by-value",
    title: "Sizing a search opportunity by commercial value, not volume",
    category: "seo",
    format: "Guide",
    summary:
      "Search volume is the easiest number to find and the least useful one to plan with. A working method for ranking opportunities by what they are worth to the business.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "Group queries into opportunities before scoring anything.",
      "Score on intent, fit, value and effort, not volume alone.",
      "Decide what you will not pursue and write it down.",
    ],
    relatedServices: ["seo-services", "content-seo", "technical-seo"],
    sections: [
      {
        heading: "The problem with a keyword list",
        paragraphs: [
          "A list of several hundred keywords sorted by volume looks like a plan and behaves like a distraction. The largest numbers usually sit beside the vaguest intent, and the terms that precede a purchase are often too small to notice in the export.",
          "Volume also describes the past behaviour of everyone, not the future behaviour of your buyers. It cannot tell you whether the people searching can buy what you sell, whether you can realistically win the result, or what a visit would be worth if you did.",
        ],
      },
      {
        heading: "Start with opportunities, not keywords",
        paragraphs: [
          "Group related queries into opportunities: a single buyer need that one strong page, or a small set of pages, could satisfy. Comparison searches for your category are one opportunity. Pricing questions are another. Each will contain many phrasings.",
          "Working at this level keeps the plan short enough to prioritise. Twenty-five well-defined opportunities are more useful than two thousand keywords, because each one can be given an owner, a brief and a measure of success.",
        ],
      },
      {
        heading: "Score four things",
        paragraphs: ["For each opportunity, make a judgement on four dimensions and record the reasoning."],
        points: [
          "Intent: how close is the searcher to a decision?",
          "Fit: do these searchers match the customers you want?",
          "Value: what is a customer from this route typically worth?",
          "Effort: what would it take to deserve the result, given who holds it now?",
        ],
      },
      {
        heading: "Use your own data for value",
        paragraphs: [
          "The value estimate should come from your business, not from a tool. Look at which existing pages precede enquiries, which enquiries became customers, and what those customers were worth. Even a rough mapping from page type to revenue changes the order of the list.",
          "Where there is no history, borrow from paid search. A term that converts profitably in a paid campaign is a strong candidate for organic investment, and the campaign can keep supplying evidence while the organic work matures.",
        ],
      },
      {
        heading: "Write down what you are leaving out",
        paragraphs: [
          "The output is a ranked list with a line drawn across it. Everything above the line gets resourced. Everything below it is recorded with the reason it was not chosen, so the decision can be revisited when circumstances change and does not have to be argued again every month.",
        ],
      },
    ],
  },
  {
    slug: "ai-moved-the-bottleneck",
    title: "AI made execution cheap. That moved the bottleneck, it did not remove it.",
    category: "digital-growth",
    format: "Insight",
    summary:
      "When producing marketing work costs almost nothing, the constraint shifts to deciding which work is worth producing. What that means for how teams are organised.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "Cheap output raises the value of direction and review.",
      "Volume without prioritisation creates measurement debt.",
      "Organise around decisions, with AI inside each role.",
    ],
    relatedServices: ["content-marketing", "marketing-automation", "ai-agents"],
    sections: [
      {
        heading: "What actually changed",
        paragraphs: [
          "For most of the history of digital marketing, the limiting factor was production. There were more ideas than hours, so teams were organised to turn briefs into finished work as efficiently as possible.",
          "Generative tools changed the economics of that step. A first draft, a set of ad variations, a keyword cluster or a summary of a competitor’s site can be produced in minutes. The limiting factor is no longer how much a team can make.",
        ],
      },
      {
        heading: "Where the constraint went",
        paragraphs: [
          "A constraint that is removed in one place reappears in another. When production is cheap, three things become scarce: knowing what to ask for, knowing whether the answer is right, and knowing which of many possible actions deserves the budget.",
          "These are judgement tasks. They depend on understanding the customer, the economics of the business and the competitive situation. A tool can inform them, and it cannot be held responsible for them.",
        ],
      },
      {
        heading: "The cost of unprioritised volume",
        paragraphs: [
          "The tempting response to cheap production is to produce more. More pages, more posts, more campaigns. The result is usually a larger surface to maintain and a weaker signal to read. When forty things changed in a month, it becomes very hard to say which one moved the number.",
          "We think of this as measurement debt. Every piece of work shipped without a hypothesis and a way to evaluate it makes the next decision harder.",
        ],
      },
      {
        heading: "What a good operating model looks like",
        paragraphs: [
          "The teams getting the most from AI have not replaced specialists with prompts. They have moved specialist time from production to direction and review, and they have made prioritisation an explicit step with a named owner.",
        ],
        points: [
          "A short list of bets per quarter, each with an expected outcome.",
          "AI used inside every role for research, drafting and analysis.",
          "Human sign-off on anything published or spent.",
          "One reporting view that connects the work to leads and revenue.",
        ],
      },
      {
        heading: "The implication for buyers of marketing",
        paragraphs: [
          "If you are evaluating an agency or building a team, the useful question is no longer how much they can produce. Ask how they decide what not to do, how they check their own output and how they will show you that a piece of work mattered.",
        ],
      },
    ],
  },
  {
    slug: "what-automated-bidding-should-optimise-for",
    title: "What to let automated bidding optimise for",
    category: "paid-media",
    format: "Insight",
    summary:
      "Automated bidding is very good at finding more of whatever you tell it to value. Most disappointing paid results trace back to that instruction, not to the algorithm.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "The conversion you choose is the strategy.",
      "Feed platforms qualified outcomes, not raw form fills.",
      "Set guardrails before handing over control.",
    ],
    relatedServices: ["google-ads", "ppc-management", "lead-generation"],
    sections: [
      {
        heading: "The algorithm is doing what it was asked",
        paragraphs: [
          "Modern ad platforms decide who sees an ad and what to bid in each auction. The advertiser’s main lever is the goal. Tell the system that a form submission is a success and it will find the cheapest form submissions available, which are rarely the most valuable ones.",
          "This is why accounts can show improving cost per lead while the sales team reports that lead quality is falling. Both statements are true. The platform is succeeding at the wrong objective.",
        ],
      },
      {
        heading: "Move the goal closer to revenue",
        paragraphs: [
          "The fix is to define success further down the funnel and send that signal back to the platform. For a lead-generation business this usually means importing qualified or sales-accepted leads from the CRM. For ecommerce it means optimising to margin or to new customers instead of revenue alone.",
        ],
        points: [
          "Agree a definition of a qualified lead with sales.",
          "Capture the click identifier with every enquiry.",
          "Send qualified outcomes back as offline conversions.",
          "Give the system enough volume to learn before judging it.",
        ],
      },
      {
        heading: "The volume trade-off",
        paragraphs: [
          "Deeper conversion events are rarer, and bidding systems need a reasonable number of them to learn. If qualified leads are too few, use a middle step that correlates with quality, such as a completed multi-step form or a booked meeting, and weight it accordingly.",
          "This is a judgement call. A specialist who knows the account can say whether there is enough signal. The platform will accept the setting either way.",
        ],
      },
      {
        heading: "Guardrails",
        paragraphs: [
          "Automation works best inside limits. Exclude brand terms from campaigns meant to find new demand, so the system cannot claim credit for customers who were already coming. Maintain negative keywords and placement exclusions. Cap budgets on campaign types that expand reach on their own, and review search terms on a schedule.",
        ],
      },
      {
        heading: "Reconcile every month",
        paragraphs: [
          "Platform reporting is a view from inside the platform. Once a month, compare it with the CRM: leads by campaign, qualification rate, opportunities and revenue. Where the two disagree, the CRM is right, and the gap tells you what to fix in tracking or targeting.",
        ],
      },
    ],
  },
  {
    slug: "conversion-work-without-ab-testing-traffic",
    title: "Conversion work for sites without the traffic to A/B test",
    category: "cro",
    format: "Guide",
    summary:
      "Most business websites cannot run a statistically sound split test in a reasonable time. That is not a reason to stop improving conversion. It changes the method.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "Low traffic favours research and bold changes over small tests.",
      "Fix what is evidently broken without testing it.",
      "Measure before and after over full business cycles.",
    ],
    relatedServices: ["cro", "landing-page-optimization", "ui-ux-design"],
    sections: [
      {
        heading: "Why testing often does not apply",
        paragraphs: [
          "A split test needs enough conversions in each variant to distinguish a real difference from chance. For a site with a modest number of enquiries each month, detecting a small improvement can take many months, by which time the market, the offer and the page have all changed.",
          "Teams in this position often run tests anyway, stop them early and act on results that are indistinguishable from noise. That is worse than not testing, because it produces confident decisions with no basis.",
        ],
      },
      {
        heading: "Replace testing volume with research depth",
        paragraphs: ["When you cannot let the numbers decide, gather stronger evidence before making a change."],
        points: [
          "Watch session recordings on the pages that matter most.",
          "Read form analytics to see which fields cause abandonment.",
          "Interview recent customers about what nearly stopped them.",
          "Ask sales which questions they answer on every first call.",
        ],
      },
      {
        heading: "Fix first, then redesign",
        paragraphs: [
          "Some problems do not need a hypothesis. A form that fails on a phone, a page that takes too long to load, a call to action below a wall of text, a price that cannot be found: fix them. No one needs a test to confirm that a broken step loses customers.",
          "After the evident problems are gone, make larger changes instead of small ones. A different headline colour will never be measurable at low volume. A page rebuilt around the objections you heard in interviews might be.",
        ],
      },
      {
        heading: "Measure honestly",
        paragraphs: [
          "Compare a full period before the change with a full period after it, long enough to cover your normal weekly and monthly patterns. Note anything else that changed at the same time, such as a campaign, a season or a price.",
          "Be modest about the conclusion. Before-and-after comparison shows direction, not a precise uplift. Look for changes large enough to be obvious, and follow them through to lead quality so that a higher conversion rate is not simply a lower bar.",
        ],
      },
      {
        heading: "When testing becomes worthwhile",
        paragraphs: [
          "As traffic and conversions grow, formal experimentation starts to pay. Until then, the discipline is the same one that makes testing useful later: a written reason for every change, and a record of what happened next.",
        ],
      },
    ],
  },
  {
    slug: "attribution-questions-worth-answering",
    title: "The attribution questions worth answering, and the ones that are not",
    category: "analytics",
    format: "Insight",
    summary:
      "Perfect attribution is not available to anyone. A small number of well-chosen questions, answered with imperfect data, is enough to allocate a budget sensibly.",
    ...author,
    publishedAt: "2026-10-05",
    takeaways: [
      "Attribution is for making budget decisions, not for settling credit.",
      "Three views together are better than one model.",
      "Agree definitions with sales and finance before building reports.",
    ],
    relatedServices: ["marketing-automation", "ppc-management", "lead-generation"],
    sections: [
      {
        heading: "What attribution cannot do",
        paragraphs: [
          "A buying journey passes through devices, private browsing, conversations, AI assistants and offline moments that no tool observes. Privacy rules and consent choices remove more. Any model that claims to divide credit for a sale precisely between touchpoints is describing the part of the journey it can see.",
          "Accepting this is useful. It moves the conversation from which channel deserves the credit to which decision we are trying to make.",
        ],
      },
      {
        heading: "Questions that change a decision",
        paragraphs: ["A measurement question is worth answering if a different answer would lead you to do something different."],
        points: [
          "If we stopped this channel, what would we lose?",
          "Which sources produce customers, not only leads?",
          "What does a customer cost to acquire, by route?",
          "Where do qualified buyers first hear about us?",
        ],
      },
      {
        heading: "Questions that mostly do not",
        paragraphs: [
          "Arguments about whether the first or last click should receive the credit rarely alter a budget. Nor does a decimal-place comparison between two attribution models. If the two views rank your channels in the same order, pick one and move on.",
        ],
      },
      {
        heading: "Use three views together",
        paragraphs: [
          "No single method is reliable alone, and they fail in different directions. Platform and analytics data show what was clicked. A plain question on the enquiry form, asking how the person heard about you, shows what they remember. Controlled changes, such as pausing spend in one region for a period, show what happens when a channel is removed.",
          "Where all three point the same way, you can act with confidence. Where they disagree, you have found something worth investigating.",
        ],
      },
      {
        heading: "Get the definitions agreed first",
        paragraphs: [
          "Most reporting disputes are definitional. Before building a dashboard, agree with sales and finance what counts as a lead, a qualified lead, a customer and revenue, and which system is the source of truth for each. A revenue view built on shared definitions and imperfect data is more useful than a precise one that the finance team does not recognise.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** Reading time at a comfortable 220 words a minute. */
export function readingTime(a: Article) {
  const words = [a.summary, ...a.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.points ?? [])])].join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}
