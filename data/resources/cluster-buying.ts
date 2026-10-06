/**
 * Series: pricing and choosing a digital marketing agency (cluster "buying-an-agency").
 * House rules apply: no prices, no figures, no guarantees, fair to competitors,
 * freelancers and in-house teams. The growth audit is linked at most once per piece.
 */
import type { Article } from "./articles";

const meta = {
  category: "digital-growth",
  author: "SERPMOZ Research",
  authorRole: "Editorial team",
  publishedAt: "2026-10-06",
  cluster: "buying-an-agency",
} as const;

export const articles: Article[] = [
  {
    slug: "how-digital-marketing-agencies-price-their-work",
    title: "How digital marketing agencies price their work",
    format: "Guide",
    summary:
      "Retainers, projects, hourly rates, performance fees and a share of ad spend each reward different behaviour. What every pricing model pays for, what it hides and how to judge a quote.",
    ...meta,
    takeaways: [
      "Compare the structure of a quote before you compare the amount.",
      "Every pricing model rewards one behaviour and hides one problem.",
      "Price follows scope, competition, starting point, speed and who does the work.",
      "Ask each agency to write down the assumptions behind its figure.",
    ],
    relatedServices: ["ppc-management", "seo-services", "content-marketing"],
    sections: [
      {
        heading: "A pricing model tells you what the agency is paid to do",
        paragraphs: [
          "Every agency quote has two parts: an amount and a structure. Buyers tend to compare the amounts and skim the structure, which is the wrong way round. The structure decides what the agency is rewarded for, who carries the risk when things go slowly, and what happens when the plan needs to change.",
          "There are five common structures: a monthly retainer, a fixed-price project, an hourly or daily rate, a fee linked to performance, and a percentage of advertising spend. None is dishonest in itself and none is right for every job. Each one rewards a particular behaviour and makes a particular problem harder to see.",
          "This guide does not quote figures, because a figure without a scope means nothing. It explains what moves the figure, so that you can judge the quote in front of you.",
        ],
      },
      {
        heading: "What a monthly retainer rewards and what it hides",
        paragraphs: [
          "A retainer is a fixed monthly fee for an agreed level of ongoing work. It suits work that compounds over time and never quite finishes: search, content, paid media management, conversion improvement. The agency can plan its staffing and you can plan a budget. Most long-running agency relationships are built this way, for good reason.",
          "A retainer rewards keeping the client. At its healthiest that means doing work good enough to be renewed. At its weakest it means looking busy: a long activity report, a steady flow of small tasks, and no hard conversation about whether the plan is working.",
          "What a retainer hides is the link between the fee and the work. Ask what the fee buys in a typical month, in terms you can check: which specialists, roughly how much of their time, which deliverables, and what happens to capacity that goes unused. A retainer described only as ongoing optimisation cannot be held to anything.",
        ],
      },
      {
        heading: "Fixed-price projects and hourly rates",
        paragraphs: [
          "A project fee is one price for a defined piece of work with an end: a website rebuild, a technical audit, a tracking set-up, a migration. It rewards finishing. The buyer gets certainty on cost, and the agency carries the risk of underestimating. That risk is why careful agencies define project scope tightly and price changes separately. A tight scope is a sign of experience. It also means that anything you forgot to mention will cost extra.",
          "What a project hides is everything after delivery. An audit with nobody to implement it changes nothing. A new site with no plan for content or measurement starts ageing on launch day. Before agreeing a project, ask who does the next step and whether that step is priced.",
          "Hourly or daily billing is the most transparent structure and the least predictable. You pay for time spent, so you can see where the effort went. It works well for advisory work, training, and small or uncertain tasks that nobody can scope in advance. It rewards hours, though, so a slow worker earns more than a fast one. It also leaves the planning to you, since someone has to decide what the hours are for. An estimate or a cap for each task brings that back under control.",
        ],
      },
      {
        heading: "Performance-linked fees sound fair and are hard to design",
        paragraphs: [
          "Paying for results has obvious appeal: the agency earns more only when you do. Models range from a fee for each lead or sale to a base fee with a bonus for reaching agreed targets. Where the outcome can be measured cleanly and the agency controls most of what produces it, this can work well.",
          "The difficulty is that the agency will optimise for exactly what is paid. A fee for each lead rewards cheap leads, whatever their quality. A fee for each sale tempts the agency to claim customers who would have bought anyway, such as people searching for your brand name. Many outcomes also depend on things outside the agency’s reach: your pricing, your sales follow-up, your stock, your website platform.",
          "A workable performance element needs a definition of the outcome that both sides accept, a baseline measured before work starts, a data source the agency does not control, and a rule for what counts as new. Expect an agency that takes real risk to ask for more upside in return, and to want a say in the parts of your business that affect the result. A hybrid, with a base fee that covers the work and a modest bonus tied to a qualified outcome, is usually easier to live with than pure commission.",
        ],
      },
      {
        heading: "What a percentage of ad spend rewards",
        paragraphs: [
          "Paid media management is often priced as a share of the budget the agency manages. The logic is that larger accounts carry more campaigns, more creative, more risk and more scrutiny, so the fee scales with responsibility. It is simple to calculate and widely understood.",
          "The conflict built into it is plain: the agency earns more when you spend more, whether or not the extra spend pays back. A sound agency will still tell you to cut a budget that is not working, but the structure does not reward it for doing so. Effort does not scale neatly with spend either. A larger budget rarely means proportionally more work, and a small account with many products can need more attention than a large one with a single offer.",
          "Alternatives include a flat management fee, a fee that steps up in bands, or a share that reduces as spend grows. Whichever applies, ask what the fee includes besides campaign management, especially creative, landing pages and tracking, and confirm that the ad accounts are opened in your name. Our piece on [what to let automated bidding optimise for](/resources/what-automated-bidding-should-optimise-for/) explains why the goal an account pursues matters more than the fee model, and the [PPC management](/ppc-management/) page shows what the work covers.",
        ],
      },
      {
        heading: "What drives the price, whatever the model",
        paragraphs: [
          "Underneath every structure, an agency is pricing people’s time, with a margin for risk. Five things decide how much time is needed, and whose.",
          "Two quotes can differ widely and both be fair if they assume different things on these five lines. The cheaper one may cover a single channel with a junior team at a gentle pace. The dearer one may assume several workstreams led by experienced people. For search in particular, the drivers are set out in [what drives the cost of SEO](/resources/what-drives-the-cost-of-seo/).",
        ],
        points: [
          "Scope: how many channels, pages, markets and deliverables are included.",
          "Competition: how strong the companies you need to outperform already are.",
          "Starting point: the state of your site, tracking, content and accounts today.",
          "Speed: how soon you need results, which sets how much runs in parallel.",
          "Who does the work: senior specialists, juniors under review, or subcontractors.",
        ],
      },
      {
        heading: "How to judge the quote in front of you",
        paragraphs: [
          "Ask each agency to state its assumptions on those five lines in writing. Once the assumptions are visible, you are comparing scope with scope, and a low price that rests on a thin scope stops looking like a saving.",
          "Then ask what the model rewards and what protects you from its weak side. For a retainer, that is a defined monthly scope and a review point. For a project, a clear handover. For hourly work, estimates. For performance fees, a shared definition and an independent data source. For a share of spend, a fee that does not depend only on the budget growing.",
          "The structure should also fit your stage. A business with no working channel needs a narrow scope and firm foundations before anything elaborate. SERPMOZ describes its own scopes on the [engagement models](/engagement-models/) page without prices, because cost follows a diagnosis of the starting point. Any agency you speak to should be able to explain its quote in the same terms.",
        ],
      },
    ],
  },
  {
    slug: "what-drives-the-cost-of-seo",
    title: "What drives the cost of SEO, and what a low quote leaves out",
    format: "Guide",
    summary:
      "SEO quotes vary because the work varies. Site size, technical debt, competition, content, links and the number of markets each change the effort. How to read a quote without a price list.",
    ...meta,
    takeaways: [
      "SEO has no unit price: the quote reflects how much work the site and market need.",
      "A quote given before anyone has examined the site is a guess.",
      "Content and authority work are the most variable lines.",
      "Ask what a low quote assumes before deciding it is a saving.",
    ],
    relatedServices: ["seo-services", "technical-seo", "content-seo", "digital-pr"],
    sections: [
      {
        heading: "Why can two SEO quotes for the same site be so far apart?",
        paragraphs: [
          "SEO is not a product with a unit price. It is a set of activities whose volume depends on the site, the market and the ambition. When two agencies quote very different amounts for what sounds like the same service, they are usually describing different amounts of work, done by different people, at a different pace.",
          "This guide gives no figures. Any number printed here would be wrong for most readers and out of date for the rest. What follows is the list of things that move the cost, so that you can ask an agency which of them its quote covers and how. The fee structures those costs are wrapped in are explained in [how digital marketing agencies price their work](/resources/how-digital-marketing-agencies-price-their-work/).",
        ],
      },
      {
        heading: "Site size and technical debt",
        paragraphs: [
          "A site with a few dozen pages can be reviewed page by page. A catalogue with many thousands of product, category and filter pages cannot. It needs crawling at scale, analysis at the level of templates, and rules in place of hand edits. The larger the site, the more of the work is engineering, and the more it depends on your developers or your platform.",
          "Technical debt is the accumulated cost of earlier decisions: a platform that generates duplicate pages, a past migration that left broken redirects, slow templates, scripts that hide content from crawlers, tracking that was never finished. Little of this can be seen from outside without an audit, which is why a quote given before anyone has examined the site is a guess.",
          "Who implements the fixes matters as much as who finds them. Some agencies deliver recommendations and leave implementation to you. Others include development time. Both are legitimate, and they are very different prices. The [technical SEO](/technical-seo/) page sets out what that workstream normally involves.",
        ],
      },
      {
        heading: "Competition and your starting point",
        paragraphs: [
          "Search is relative. You do not need a perfect site. You need to deserve the result more than whoever holds it now. If the current results belong to established brands with a deep body of content, strong reputations and dedicated teams, the effort required is of a different order from a market where the incumbents have barely tried.",
          "Your own starting point sets the distance to travel. A site with history, some authority and a body of useful content can often gain from reorganising what exists. A new domain with no content and no mentions elsewhere starts further back, and the early months buy foundations before they buy visibility.",
          "Speed multiplies both. The same plan compressed into a shorter period needs more people working in parallel. Even then some parts cannot be hurried, because search engines take time to crawl, assess and trust changes. A quote that promises a fast outcome in a hard market deserves a question about how.",
        ],
      },
      {
        heading: "How much content needs to exist",
        paragraphs: [
          "Most of the variable cost in an SEO programme is content. The question is how many pages need to be created or rebuilt for the site to answer what buyers search for, and how demanding each page is.",
          "A page on a specialist subject, in a regulated field, or aimed at an expert reader takes research, a subject expert’s time and careful review. A short page on a simple topic takes far less. AI tools have lowered the cost of a first draft a great deal. They have not lowered the cost of knowing what to write, checking that it is right, or adding the experience that makes a page worth citing.",
          "Ask how the quote counts content: by number of pieces, by depth, and by who writes and reviews them. Ask too whether updating existing pages is included, since improving what you have is often the cheaper route. A method for deciding which pages earn the investment is in [sizing a search opportunity by commercial value](/resources/sizing-search-opportunities-by-value/).",
        ],
      },
      {
        heading: "Links, PR and reputation",
        paragraphs: [
          "Search engines treat references from other reputable sites as evidence that a business is worth showing. Earning those references is slow, uncertain and labour-intensive. It involves producing something worth mentioning, such as research, expert comment, a useful tool or a newsworthy story, and then putting it in front of journalists, editors and site owners who are free to ignore it.",
          "That uncertainty is why this line of a quote varies most. Real outreach and [digital PR](/digital-pr/) are priced on effort, because nobody can promise coverage. Cheap link packages are priced by the link, which is possible only because the links come from sites that exist to sell them. Those links may be ignored or may harm the site, and that risk lands on you.",
          "Not every business needs a large authority programme. A local firm in a quiet market may need accurate listings, reviews and a handful of relevant local mentions. A national brand in a contested category may need sustained PR. The quote should say which situation it assumes.",
        ],
      },
      {
        heading: "Markets and languages multiply the work",
        paragraphs: [
          "Each additional country or language is closer to a new project than to an extra line item. Search behaviour, competitors, vocabulary and buying habits differ by market, so the research has to be repeated. Content has to be written or properly localised by someone who knows how buyers there speak. Machine translation with no review tends to produce pages that read as foreign and perform poorly.",
          "There is technical work as well: a site structure for countries and languages, signals that tell search engines which version serves which audience, and separate measurement for each market. The same applies on a smaller scale to a business with many branches, where every location needs its own accurate presence. If you sell across borders, ask whether the quote covers each market fully or treats the others as copies of the first.",
        ],
      },
      {
        heading: "What a low quote usually leaves out",
        paragraphs: [
          "A low quote is not automatically a bad one. A small site in a calm market, with a clear goal and a competent in-house team to implement, may need very little. A freelancer with low overheads can do excellent work for less than an agency. The useful question is what the price assumes.",
          "When a quote is low because something is missing, it is usually one of the items below. Put the same questions to every provider and the quotes become comparable. The companion checklist, [how to choose a digital marketing agency](/resources/how-to-choose-a-digital-marketing-agency/), covers the rest of the conversation.",
        ],
        points: [
          "Implementation: recommendations are delivered and the fixing is left to you.",
          "Original content: pages are generated in bulk with little expert review.",
          "Authority work: links are bought in packages or left out entirely.",
          "Measurement: rankings are reported, while enquiries and revenue go untracked.",
          "Senior attention: the plan is a template applied by junior staff.",
          "Strategy: tasks are listed with no reason given for choosing them.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-digital-marketing-agency",
    seoTitle: "How to Choose a Digital Marketing Agency: 12 Questions",
    title: "How to choose a digital marketing agency: twelve questions to ask",
    format: "Guide",
    summary:
      "Credentials and case studies show how an agency sells. Twelve questions, each with what a good and a weak answer sounds like, show how it works and whether it suits your business.",
    ...meta,
    takeaways: [
      "Put the same twelve questions to every agency, freelancer or candidate.",
      "Specific answers and stated limits matter more than confidence.",
      "Ask what they would not do, who does the work and how you would leave.",
      "Judge fit for your stage as well as quality.",
    ],
    relatedServices: ["seo-services", "ppc-management", "content-marketing", "cro"],
    sections: [
      {
        heading: "Why questions tell you more than a pitch",
        paragraphs: [
          "Every agency presents well. Decks are polished, case studies are chosen, and the people in the pitch are the most persuasive ones the firm has. None of that tells you how the work will be run in the fourth month, when a result is late and a decision is needed.",
          "Questions do. A specific question about method cannot be answered with a slogan, and the way an agency handles a question it cannot answer well is informative in itself. The twelve below are grouped by what they reveal. For each there is a description of a good answer and a weak one. Use the same set with every agency, freelancer or candidate you are considering, so that the answers can be compared.",
        ],
      },
      {
        heading: "Questions about diagnosis and priorities",
        paragraphs: [
          "One: what would you need to see before recommending anything? A good answer lists access to analytics, search and ad accounts, the CRM if there is one, and a conversation with whoever handles sales. A weak answer is a ready-made package offered before anyone has looked. Some firms run a structured review first, as SERPMOZ does with its [growth audit](/growth-audit/). The format matters less than the order: diagnosis first, prescription second.",
          "Two: what would you not do for us, and why? A good answer names channels or tactics that do not fit your stage or market and explains the reasoning. A weak answer says everything on the list of services would help. An agency that cannot say no in the pitch is unlikely to say it later.",
          "Three: what do you expect in the first few months, and what would make you change the plan? A good answer separates what will be done from what might result, gives conditional timings and names the evidence that would trigger a rethink. A weak answer promises specific positions or volumes by a date.",
        ],
      },
      {
        heading: "Questions about who does the work",
        paragraphs: [
          "Four: who will work on our account, and how much of their time do we get? A good answer names roles, ideally people, and describes their experience and their share of the week. A weak answer talks about the team in general. It is reasonable to ask to meet the person who will do the work before you sign.",
          "Five: what is done by your own staff, what is subcontracted and what is automated? Subcontracting and AI tools are normal, and both can be good for quality and cost. A good answer says plainly where each is used and who reviews the output before it reaches you or your customers. A weak answer is vague, or claims that nothing is ever outsourced or generated.",
          "Six: what will you need from us? A good answer is specific about approvals, access, subject expertise and developer time, and about what happens if you are slow to provide them. A weak answer says you will not need to do anything. Marketing produced with no input from the business tends to be generic, because the agency has nothing particular to say.",
        ],
      },
      {
        heading: "Questions about measurement",
        paragraphs: [
          "Seven: which numbers will you report, and which decisions do they inform? A good answer starts from enquiries, qualified leads, sales or revenue and works back to channel measures as supporting evidence. A weak answer leads with impressions, followers, rankings for a list of terms or the number of tasks completed.",
          "Eight: how will we know whether a result came from your work? A good answer admits that attribution is imperfect, describes a baseline taken before work starts and explains how brand searches and returning customers are separated from new demand. A weak answer claims every improvement and blames every fall on an algorithm. The limits are discussed in [the attribution questions worth answering](/resources/attribution-questions-worth-answering/).",
          "Nine: tell us about something that did not work. A good answer is a real example, with what was learned and what changed afterwards. A weak answer is a disguised success, or a story in which the client was at fault. Everyone who does this work has failures. The people who discuss them calmly are the ones likely to tell you early when your own project is in trouble.",
        ],
      },
      {
        heading: "Questions about ownership, cost and exit",
        paragraphs: [
          "Ten: who owns the accounts, the data and the work? A good answer is that ad accounts, analytics, the website, content and creative are yours, held in your name, with the agency given access. A weak answer keeps accounts under the agency’s ownership or is unclear about what you keep if you leave. This is one of the points covered in [warning signs in an SEO or marketing proposal](/resources/warning-signs-in-a-marketing-proposal/).",
          "Eleven: what exactly does the fee cover, and what would be extra? A good answer gives a scope you could check at the end of a month and lists the common extras: ad spend, tools, development, creative, translation. A weak answer is a single line and a total. The reasoning behind fees is set out in [how digital marketing agencies price their work](/resources/how-digital-marketing-agencies-price-their-work/).",
          "Twelve: how do we end the engagement if we need to? A good answer gives a notice period, a handover process and a list of what is returned. A weak answer points to a long minimum term with no review point. A commitment period can be fair, since some work takes time to show, but it should come with a way out if the agreed scope is not delivered.",
        ],
      },
      {
        heading: "How to weigh the answers",
        paragraphs: [
          "No agency will give the ideal answer to all twelve, and one that does may simply have rehearsed. Look at the pattern. Specific answers, stated limits and a willingness to say what is unknown are good signs. Confidence without detail is the thing to be wary of. Four checks summarise most of it.",
          "Weigh fit as well as quality. A large agency built for complex accounts may be a poor match for a small business that needs one channel done well, and a talented freelancer may be the right answer. That comparison is laid out in [agency, in-house team or freelancer](/resources/agency-in-house-team-or-freelancer/).",
          "Finally, take references if they are offered, and ask the referee the same kind of question: what the agency declined to do, how it reported bad news and what happened at handover.",
        ],
        points: [
          "Did they ask about your business before describing theirs?",
          "Did they name anything they would leave out?",
          "Could you check their scope at the end of a month?",
          "Did they explain how you would leave?",
        ],
      },
    ],
  },
  {
    slug: "agency-in-house-team-or-freelancer",
    title: "Agency, in-house team or freelancer: which fits which stage",
    format: "Insight",
    summary:
      "Agencies, in-house marketers and freelancers each solve a different problem. An even-handed comparison of what each does well, where each strains, and when an agency is the wrong choice.",
    ...meta,
    takeaways: [
      "Freelancers give direct specialist attention; you supply the direction.",
      "In-house teams give closeness and retained knowledge at a fixed cost.",
      "Agencies give range and continuity, with shared attention as the price.",
      "Most businesses end up with a mix that shifts as they grow.",
    ],
    relatedServices: ["seo-services", "ppc-management", "content-marketing"],
    sections: [
      {
        heading: "Three ways to buy the same work",
        paragraphs: [
          "Marketing work can be done by people you employ, by an independent specialist or by a firm. The work itself is the same. What differs is how much range you get, how much attention, how much management it takes and how easily the arrangement can change.",
          "This piece is published by a company that does agency work, so read it with that in mind. We have tried to describe each option as its strongest advocates would. There are stages at which an agency is the wrong answer, and they are set out below.",
        ],
      },
      {
        heading: "What a freelancer does well, and where it strains",
        paragraphs: [
          "A good freelancer is a specialist you deal with directly. The person you brief is the person who does the work, with no account layer in between. Overheads are low and arrangements are flexible. For a well-defined task in one discipline, such as a set of landing pages, a paid search account or a technical review, a strong freelancer is often the most efficient choice available.",
          "The limits follow from being one person. Capacity is finite, so illness, holidays and other clients affect your timeline. Range is narrow, so a brilliant paid media specialist may not be the right person for analytics or content. Someone on your side also has to set direction, join up the pieces and check quality, and coordinating several freelancers is a job in its own right.",
          "Freelancers suit businesses that know what needs doing and have someone able to manage it. They suit less well a business that is still working out what the plan should be, unless the freelancer is a senior strategist hired for exactly that purpose.",
        ],
      },
      {
        heading: "What an in-house team does well, and where it strains",
        paragraphs: [
          "Nobody outside the company will know the product, the customers and the internal politics as well as an employee. In-house marketers sit close to sales, product and leadership. They hear objections at first hand, react the same day and build knowledge that stays in the business. For a company where marketing is central to how it competes, that closeness is a real advantage and hard to rent.",
          "The costs are fixed and slow to change. Hiring takes time, and a hire that does not work out takes longer to undo than a contract. One or two people cannot cover search, paid media, content, design, analytics and development to a specialist standard, so small teams tend to become generalists stretched across everything. A lone specialist can also become isolated, with nobody to check the work or keep the knowledge current.",
          "In-house teams suit businesses with enough steady work in a discipline to fill a role, and with a leader able to hire, direct and develop marketers. Without that leader, a first marketing hire is often asked to be a strategist and several specialists at once.",
        ],
      },
      {
        heading: "What an agency does well, and where it strains",
        paragraphs: [
          "An agency sells range and continuity. A single contract gives access to several specialisms, each practised across many accounts, without a hire for each. The work does not stop when one person leaves. Exposure to many businesses means an agency has usually met your kind of problem before, and has the tools and processes already in place.",
          "The trade-offs are real. Your account shares attention with others. The people who pitch may not be the people who deliver. An agency will never know your business as an employee does, and it depends on you for access, approvals and expertise. Margin and management overhead are part of the fee, as explained in [how digital marketing agencies price their work](/resources/how-digital-marketing-agencies-price-their-work/).",
          "Agencies suit businesses that need more than one discipline, cannot justify a full-time role in each, and want one party accountable for a result across them. A specialist agency for a single channel, offering [SEO services](/seo-services/) alone for example, sits somewhere between a freelancer and a full-service firm.",
        ],
      },
      {
        heading: "When is an agency the wrong choice?",
        paragraphs: [
          "There are situations in which hiring an agency, ours included, is likely to disappoint.",
          "In the first case the money is better spent on finding out what customers want. In the others, a freelancer, a first hire or simply waiting is the more sensible move. A good agency will say so when asked, because a client who should not have signed becomes a poor reference.",
        ],
        points: [
          "The offer is unproven: no agency can market a product buyers do not want.",
          "Nobody internal can give time for briefs, approvals and access.",
          "The need is one narrow task that a freelancer can complete.",
          "The budget covers the fee and leaves nothing for content, media or fixes.",
          "Marketing is the core of the business and should be owned inside it.",
          "You want a supplier to blame more than a plan to follow.",
        ],
      },
      {
        heading: "Which option fits which stage",
        paragraphs: [
          "At the earliest stage, with a small budget and one channel to prove, a freelancer or a narrow agency scope is usually enough. The aim is evidence that a channel can pay back. Anything broader spends money on coordination before there is something to coordinate.",
          "Once one or two channels are working and demand needs to become steadier, range starts to matter. This is where an agency tends to earn its fee, often alongside a first in-house marketing lead who owns the plan and manages suppliers.",
          "At scale, with several channels and a marketing team in place, the question changes from who does the work to who does which part. Strategy, brand and customer knowledge usually move in-house. Agencies and freelancers supply specialist depth, extra capacity and an outside view. Very large organisations often add governance and training to that list.",
        ],
      },
      {
        heading: "Most businesses end up with a mix",
        paragraphs: [
          "The three options are not exclusive. A common and healthy arrangement is an in-house lead who owns direction, an agency for the disciplines that need a team, and freelancers for specific crafts. What matters is that one person owns the plan and that every party knows what it is accountable for.",
          "Expect the mix to shift. Work that an agency starts is often brought in-house once it is steady enough to fill a role, and a sound agency plans for that handover. The SERPMOZ [engagement models](/engagement-models/) are organised by stage for this reason, and several assume an in-house team alongside. Whichever route you take, the questions in [how to choose a digital marketing agency](/resources/how-to-choose-a-digital-marketing-agency/) apply equally to a freelancer or a job candidate.",
        ],
      },
    ],
  },
  {
    slug: "warning-signs-in-a-marketing-proposal",
    title: "Warning signs in an SEO or marketing proposal",
    format: "Guide",
    summary:
      "A proposal shows how an agency will work before any work begins. Six warning signs to look for, why each one matters, the fair explanations, and what a sound proposal contains instead.",
    ...meta,
    takeaways: [
      "A guarantee is a promise about something the agency does not control.",
      "Accounts, data and content should be yours, in writing.",
      "A scope you cannot check each month cannot be enforced.",
      "Raise each concern: the response tells you more than the clause.",
    ],
    relatedServices: ["seo-services", "ppc-management", "content-marketing", "cro"],
    sections: [
      {
        heading: "A proposal is a preview of the working relationship",
        paragraphs: [
          "A proposal is the first piece of work an agency does for you. How it is written tells you how reports, plans and difficult messages will be written later. A document that is vague before you have signed will not become precise afterwards.",
          "The warning signs below are common across the industry and are not proof of bad intent. Some come from sales templates that nobody has questioned. Each is worth raising, and the response matters more than the original wording. An agency that revises a clause when asked has told you something good about itself.",
        ],
      },
      {
        heading: "Guaranteed rankings and promised results",
        paragraphs: [
          "No agency controls a search engine, an ad auction or an AI assistant. Rankings depend on what competitors do and on systems that change without notice. A guarantee of a position, a traffic level or a number of leads is therefore a promise about something the agency cannot deliver on its own.",
          "Guarantees that are kept are usually kept by narrowing the target: ranking for a phrase nobody searches, or for your own brand name. Guarantees that are chased hard can push an agency towards tactics that work briefly and damage the site later. In both cases the guarantee has served the sale.",
          "A sound proposal commits to what the agency controls: the scope, the method, the people and the reporting. It sets targets against your own baseline and describes them as targets, with the conditions they depend on. Confidence expressed as a forecast with assumptions is fine. Certainty is the warning.",
        ],
      },
      {
        heading: "Vanity metrics as the measure of success",
        paragraphs: [
          "Impressions, followers, clicks, a count of keywords in high positions and an authority score from a third-party tool are all easy to increase and only loosely connected to revenue. They have a place as diagnostics. They become a problem when they are the goals the proposal is built around.",
          "Look at what the proposal says success will be. If the stated outcomes are all activity or visibility measures, ask how they connect to enquiries, sales or customers, and whether the agency will see that data. An agency may fairly say that it cannot be accountable for your close rate. It should still want to know what happens to the leads it helps produce.",
          "The same caution applies to deliverable counts. A number of articles or links each month is a measure of output. It says nothing about whether those were the right articles. A method for choosing is described in [sizing a search opportunity by commercial value](/resources/sizing-search-opportunities-by-value/).",
        ],
      },
      {
        heading: "No access to your own accounts",
        paragraphs: [
          "Your advertising accounts, analytics, search data, website, domain and business listings are assets of your business. They should be created in your name, with the agency added as a user. A proposal under which the agency owns these, or reports from them without giving you a login, puts your history in someone else’s hands.",
          "The practical cost appears when you leave. Campaign history, audience data and conversion records can be lost, and a new provider has to start again from nothing. Lack of access also removes your ability to check a report against its source.",
          "There are harmless explanations. Some agencies open accounts for convenience and will transfer them on request, and some tools are licensed to the agency and cannot be handed over. Ask for the position in writing: what is yours, what is licensed, and what is transferred at the end. If you already have accounts, the agency should work inside them.",
        ],
      },
      {
        heading: "Long lock-ins and vague deliverables",
        paragraphs: [
          "Some marketing work takes months to show a result, and an agency that invests heavily at the start may reasonably ask for a minimum term. A commitment period is not a warning sign in itself. It becomes one when it is long, renews automatically, has no review point and offers no exit if the agreed scope is not delivered.",
          "Vague deliverables make any term worse. Phrases such as ongoing optimisation, monthly SEO activities or social media management describe a category of work. They do not say what will be done. If you cannot tell from the proposal what you would expect to see at the end of the first month, neither side can later show whether the agency did its job.",
          "The two problems compound. A long contract with a loose scope leaves you paying for something undefined with no way to leave. Ask for a scope you can check, a review at a sensible interval and a notice period. The relationship between scope and fee is covered in [how digital marketing agencies price their work](/resources/how-digital-marketing-agencies-price-their-work/).",
        ],
      },
      {
        heading: "Reports with no decisions",
        paragraphs: [
          "Ask to see a sample report before signing. Many are long exports of charts from analytics and ad platforms, with a paragraph noting that some numbers went up. They prove that the tools are connected. They do not tell you what the agency concluded or what it intends to do differently.",
          "A useful report is short. It says what was done, what changed in the numbers that matter, what the agency believes caused the change, and what it recommends next, including anything it wants to stop. It reports bad months in the same format as good ones. If the proposal describes reporting only by frequency and page count, ask what decisions the last few reports for another client led to.",
        ],
      },
      {
        heading: "What a sound proposal contains",
        paragraphs: [
          "The opposite of each warning sign is a plain statement. A proposal worth signing can be read by someone outside marketing, who could then say what is being bought.",
          "The diagnosis is the part most often missing, because it costs effort before a contract exists. Some agencies charge for it as a separate piece of work and others absorb it. SERPMOZ starts with a [growth audit](/growth-audit/) for this purpose. Whoever you speak to, a proposal written without looking at your accounts is a price list with your name on it.",
          "For the wider conversation around the proposal, use the questions in [how to choose a digital marketing agency](/resources/how-to-choose-a-digital-marketing-agency/).",
        ],
        points: [
          "A diagnosis of your situation, based on your own data.",
          "A scope specific enough to check each month.",
          "Named roles, and who reviews the work.",
          "Targets set against a baseline, with their assumptions.",
          "Your ownership of accounts, data and content, in writing.",
          "Term, review point, notice period and handover.",
        ],
      },
    ],
  },
];
