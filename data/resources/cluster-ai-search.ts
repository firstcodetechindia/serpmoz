/**
 * AI search series: five pieces that link to each other and to the AEO, GEO
 * and AI SEO service pages. House rules apply: no invented statistics, no
 * vendor internals, behaviour described in general terms only.
 */
import type { Article } from "./articles";

const base = {
  category: "ai-search",
  author: "SERPMOZ Research",
  authorRole: "Editorial team",
  publishedAt: "2026-10-06",
  cluster: "ai-search" as const,
};

export const articles: Article[] = [
  {
    slug: "aeo-geo-and-ai-seo-explained",
    title: "What AEO, GEO and AI SEO each mean, and where they overlap",
    format: "Guide",
    summary:
      "Three labels are sold for much the same goal: being quoted and named when buyers ask a machine for help. What each term covers, where they overlap and how to read a proposal that uses them.",
    ...base,
    takeaways: [
      "AEO is about your pages being quoted as the answer to a question.",
      "GEO is about your company being named when an assistant recommends providers.",
      "AI SEO is used in two senses, so ask which one a proposal means.",
      "Judge a proposal by its deliverables and measures, whatever it is called.",
    ],
    relatedServices: ["aeo-services", "geo-services", "ai-seo-services"],
    sections: [
      {
        heading: "Why three names exist for one shift",
        paragraphs: [
          "For two decades, being found online meant appearing in a list of links. Many questions now get a written answer instead: a paragraph at the head of a results page, or a reply from an AI assistant that names a few companies and explains why. The buyer may never look at a list at all.",
          "The marketing industry responded with labels faster than with agreed definitions. Answer engine optimisation, generative engine optimisation and AI SEO are all in use, often by different agencies for the same work, and sometimes by one agency for different work. No standards body owns these terms. The definitions below are the working ones we use, chosen because they separate tasks that need different skills.",
          "The labels matter less than the tasks. Still, a buyer who can tell the three apart can read a proposal, see what is missing and ask sharper questions.",
        ],
      },
      {
        heading: "What answer engine optimisation (AEO) means",
        paragraphs: [
          "AEO is the work of making your own pages the source of a direct answer. The target is any place where a question is answered on the spot: the featured answer above the links, the expandable related questions, a voice reply, and the AI answers in search results that summarise several pages and cite them.",
          "The unit of work is the question. An AEO project starts by collecting the questions buyers ask at each stage. It then makes sure one page on your site answers each of them plainly, early and in a form that can be lifted out without losing its meaning. Our guide to [writing a page an AI answer can quote](/resources/writing-pages-ai-answers-can-quote/) covers the craft in detail.",
          "AEO is mostly an on-site discipline. It involves content structure, clear definitions, question headings and structured data that labels what a page contains. It is the closest of the three to classic search work, and an [AEO services](/aeo-services/) engagement usually sits beside an existing content programme and sharpens it.",
        ],
      },
      {
        heading: "What generative engine optimisation (GEO) means",
        paragraphs: [
          "GEO is the work of being named and recommended when an AI assistant composes an answer about your category. The buyer asks which accounting firms suit a small exporter, or which software handles a particular problem, and the assistant writes a short list with reasons. GEO asks whether you are on that list and whether the description of you is accurate.",
          "The unit of work is the entity: your company as it is understood across the whole web, well beyond your own site. Assistants draw on what many sources say. GEO therefore spends much of its effort away from your site, on third-party articles, comparison pieces, review platforms, directories, industry communities and the consistency of basic facts between them.",
          "This makes [GEO](/geo-services/) closer to public relations and reputation work than to page editing. It moves more slowly than AEO, it depends on other people choosing to write about you, and nobody can promise its results.",
        ],
      },
      {
        heading: "What AI SEO means",
        paragraphs: [
          "AI SEO is the loosest of the three terms, and it is used in two senses. In the first, it is an umbrella: search optimisation for a period in which classic results and AI answers both matter. It covers AEO and GEO along with the technical and content foundations they rest on.",
          "In the second sense, it means using AI tools to do search work: research, drafting, clustering and analysis. That is a statement about method, and it says nothing about where you will appear. A proposal can use AI heavily and still aim only at the ten links.",
          "When we use the term for our own AI SEO work, we mean the first sense: one programme that treats classic rankings, quoted answers and assistant recommendations as connected outcomes. When you meet the term elsewhere, ask which sense is intended before comparing prices.",
        ],
      },
      {
        heading: "Where the three overlap",
        paragraphs: [
          "The overlap is large, and it is the reason the terms get blurred. All three depend on the same raw material: pages that can be crawled, facts that are stated clearly, and a business that is described the same way wherever it appears.",
          "The differences are of emphasis. AEO concentrates on your pages and on questions with a factual answer. GEO concentrates on your reputation and on questions that ask for a recommendation. AI SEO, in its umbrella sense, is the plan that holds both together with the classic work underneath.",
          "A useful way to remember it: AEO is about being quoted, GEO is about being named, and the foundations of search make either possible. The mechanisms behind naming are covered in [how AI assistants decide which businesses to name](/resources/how-ai-assistants-decide-which-businesses-to-name/).",
        ],
        points: [
          "Plain statements of who you serve and what you do.",
          "Pages that answer one question well and can be read by a machine.",
          "Consistent names, services and locations across every profile.",
          "Evidence from third parties that supports your own claims.",
        ],
      },
      {
        heading: "How to read a proposal that uses these terms",
        paragraphs: [
          "Because the labels are unregulated, read past them to the deliverables. A sound proposal says which questions or prompts it is targeting, what will change on your site, what will be pursued away from your site, and how progress will be measured when answers vary from one run to the next.",
          "Be wary of two things. The first is a guarantee of placement in AI answers, which no outside party can deliver. The second is a proposal that renames ordinary content production as AEO or GEO with no change in what is produced or how it is assessed.",
        ],
        points: [
          "Which buyer questions and prompts are in scope?",
          "What is on-site work and what is off-site work?",
          "How is visibility measured, and how often?",
          "What is explicitly promised, and what is not?",
        ],
      },
      {
        heading: "Which one do you need first?",
        paragraphs: [
          "It depends on what buyers ask and where the gaps are. A business whose customers ask many factual questions (how something works, what it costs, what the steps are) usually gains most from AEO first, because the fix is within its own control.",
          "A business in a category where buyers ask for recommendations, and where competitors are named and it is not, has a GEO problem that page editing alone will not solve. A business whose site is slow, thin or hard to crawl should fix that before either.",
          "The practical way to find out is to test. An [AI search audit you can run in an afternoon](/resources/ai-search-audit-in-an-afternoon/) shows which kind of gap you have, and that should decide the order of work.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-assistants-decide-which-businesses-to-name",
    title: "How AI assistants decide which businesses to name",
    format: "Guide",
    summary:
      "An assistant that recommends three firms is drawing on what it learned in training and what it can find on the web. The evidence that shapes that choice is evidence a business can improve, slowly.",
    ...base,
    takeaways: [
      "Answers draw on two sources: what a model learned and what it retrieves when asked.",
      "A clearly defined business with consistent facts is easier to name with confidence.",
      "Third-party mentions and reviews count for more than your own claims.",
      "You can improve the evidence. You cannot edit or buy the answer.",
    ],
    relatedServices: ["geo-services", "ai-seo-services", "digital-pr", "local-seo-services"],
    sections: [
      {
        heading: "An answer is composed each time it is asked for",
        paragraphs: [
          "When a buyer asks an AI assistant to suggest providers, there is no fixed ranking of companies behind the reply. The assistant composes text, and the names in it are the ones that the available evidence makes most plausible for that question. Ask again and the wording, and sometimes the names, will differ.",
          "What follows describes the general behaviour of these systems as it can be observed from outside. Vendors differ in the details, change them often and publish little. Treat this as a working model for deciding where to spend effort, and expect the specifics to move.",
          "The question itself shapes the result. A prompt that includes a sector, a company size or a location narrows the field to businesses that the evidence connects with those details. This is why a firm can be named reliably for one phrasing of a need and never for another that looks similar to a human reader.",
        ],
      },
      {
        heading: "Two sources of knowledge: training and retrieval",
        paragraphs: [
          "An assistant has two broad ways of knowing about your business. The first is what its underlying model absorbed during training, from a very large body of text gathered up to some point in the past. A company that was widely and clearly described in that text is more likely to be recalled. A company that was barely mentioned, or that has changed its name or offer since, may be missing or out of date.",
          "The second is retrieval. Many assistants can search the web at the moment of the question, read a handful of pages and write the answer from them, often showing those pages as sources. Here, what matters is whether pages about you can be found for the kind of search the assistant runs, and whether they state the relevant facts in a form that is easy to extract.",
          "The two routes reward different work. Training rewards a long, consistent public record. Retrieval rewards current, findable, well-structured pages, which is one reason classic search work still counts, as argued in [does traditional SEO still matter when buyers ask AI assistants](/resources/does-seo-still-matter-when-buyers-ask-ai-assistants/).",
        ],
      },
      {
        heading: "Entity clarity: can the system tell who you are?",
        paragraphs: [
          "Machines reason about entities: a specific company, with a name, a category, a set of services, places it serves and people associated with it. If your site says in plain words what you are, who you serve and where, the system has something definite to attach other evidence to.",
          "Vague positioning works against you. A homepage that describes a firm as a partner for transformation gives a model nothing to match against a question about payroll software for small manufacturers. A name shared with other companies, or one that changed while the old references stayed in place, adds further doubt.",
          "Clarity is also a matter of scope. A business that claims to do everything for everyone is hard to place in any particular answer. One that states its specialism, and shows it through the pages it publishes, gives the system a reason to select it when that specialism is what the buyer asked about.",
        ],
        points: [
          "A one-sentence description of what you do, repeated consistently.",
          "Named services, each with its own page.",
          "The customers and places you serve, stated plainly.",
          "Structured data that labels the organisation and its offers.",
        ],
      },
      {
        heading: "Consistency of facts across sources",
        paragraphs: [
          "An assistant gains confidence when independent sources agree. If your site, your business profiles, directory entries and press mentions all give the same name, category, services and service area, those facts reinforce each other. If they conflict, the system has to choose, and it may choose the stale version or leave you out.",
          "Inconsistency accumulates quietly: an old address in a directory, a discontinued service still listed on a partner page, three different descriptions of what the company does. None of these looks serious alone. Together they blur the picture.",
          "For businesses that serve a defined area, this is the same hygiene that [local SEO](/local-seo-services/) has always required. The effort now pays in two places: the map results and the answers assistants give about who operates nearby.",
        ],
      },
      {
        heading: "Third-party mentions carry more weight than your own claims",
        paragraphs: [
          "What you say about yourself is one source, and an interested one. What others say is treated as evidence. Assistants answering a recommendation question lean on round-ups, comparisons, industry publications, community discussions and reference sites, because those are the places where companies are compared with one another.",
          "This is why a company with a modest website and a strong presence in its trade press can be named ahead of one with a polished site and no outside coverage. It is also why the work resembles [digital PR](/digital-pr/): contributing expertise that publications want, being included in comparisons on merit, and making sure the descriptions that appear are accurate.",
          "Context matters as much as presence. A mention that ties your name to a specific problem, sector or use case helps you appear for questions about that problem. A bare listing of your name helps much less.",
        ],
      },
      {
        heading: "What reviews contribute",
        paragraphs: [
          "Reviews do two jobs. They are a signal that a business exists, is active and has customers. They are also text: descriptions, in customers' own words, of what the business does well and where it falls short. An assistant asked for a provider that is patient with first-time buyers can only make that match if someone has written it down.",
          "The implication is practical. Ask for reviews as part of normal service, on the platforms your buyers already use, and never write or buy them. Reply to the ones you receive. A body of specific, recent, credible reviews gives the system language to describe you with. A few vague ones give it very little.",
        ],
      },
      {
        heading: "What you can and cannot control",
        paragraphs: [
          "You cannot edit an answer, pay for inclusion in one, or know exactly why a given reply named the companies it did. Anyone who claims otherwise is guessing. What you can do is improve the evidence: clearer pages, consistent facts, credible coverage and real reviews.",
          "Expect the effect to be gradual. Corrections to pages that assistants retrieve can show up in answers fairly soon. Changes to what a model learned in training only appear when the model is updated, on a schedule nobody outside the vendor controls.",
          "Start by finding out where you stand. An [afternoon AI search audit](/resources/ai-search-audit-in-an-afternoon/) shows which prompts name you, which name competitors and which sources are being cited. From there, a [GEO programme](/geo-services/) is a matter of closing the gaps in order of commercial value.",
        ],
      },
    ],
  },
  {
    slug: "writing-pages-ai-answers-can-quote",
    title: "How to write a page an AI answer can quote",
    format: "Guide",
    summary:
      "A page gets quoted when it states a clear answer that survives being lifted out of context. Direct answers, question headings, defined terms and original facts do most of the work.",
    ...base,
    takeaways: [
      "Open every section with the answer, written so it makes sense alone.",
      "Use the buyer's question as the heading.",
      "Define terms in one sentence and add facts only you can supply.",
      "Structured data labels good content. It cannot stand in for it.",
    ],
    relatedServices: ["aeo-services", "content-seo", "technical-seo", "ai-seo-services"],
    sections: [
      {
        heading: "What does being quotable mean?",
        paragraphs: [
          "AI answers in search results, and assistants that search the web, build their replies from passages. They look for a sentence or short block that answers the question, can stand alone and comes from a page they have reason to rely on. A quotable page is one that offers such passages on purpose.",
          "This is a writing discipline before it is a technical one. Most pages fail because the answer is absent, buried or spread across several paragraphs of preamble. The fixes below cost little. They also make the page better for human readers, who are short of time for the same reasons.",
          "Quotable does not mean short. A long page can be full of passages worth lifting, and a short one can contain none. What counts is whether each part of the page does one job and says so plainly.",
        ],
      },
      {
        heading: "Put the direct answer first",
        paragraphs: [
          "Open each section with the answer, in one or two sentences, then explain. A reader who stops after the first sentence should leave with something true and useful. Journalists call this the inverted pyramid, and it suits machines for the same reason it suits people who skim.",
          "Write the answer so that it carries its own subject. A sentence that begins 'It usually takes' depends on the heading above it. A sentence that begins 'Registering a limited company usually takes' can be lifted out and still make sense. Repeating the subject feels slightly formal, and it is what makes the passage portable.",
          "Qualify where the truth is conditional. An answer that says what a result depends on is more useful, and more likely to be relied upon, than a confident figure that is wrong for half the people asking.",
        ],
      },
      {
        heading: "Use the question as the heading",
        paragraphs: [
          "Headings tell a system what the text beneath them is about. A heading phrased as the question a buyer asks, in the words they use, makes the match between question and answer explicit. 'How long does a kitchen refit take?' does that. 'Timelines' leaves it to inference.",
          "Collect the questions from real sources: sales calls, support tickets, enquiry forms, site search and the related questions that search results display. One page should own one main question, with the natural follow-up questions as its sections. This is the core of [content SEO](/content-seo/), applied with stricter discipline.",
        ],
      },
      {
        heading: "Define your terms and state original facts",
        paragraphs: [
          "Definitions are lifted often, because so many questions begin with 'what is'. Where your page uses a term of art, define it in a single sentence of the form 'X is a Y that does Z'. Do it even when you think the reader knows, because the system assembling an answer needs the sentence to exist.",
          "Then give the page something no other page has. A summary of what ten other sites say gives an assistant no reason to cite you in preference to them. First-hand material does: your own process described step by step, what you observe across your projects, the conditions under which your advice changes, a worked example.",
        ],
        points: [
          "A one-sentence definition for each key term.",
          "Steps in the order you actually perform them.",
          "The conditions that change the answer.",
          "A visible date showing when the page was last checked.",
        ],
      },
      {
        heading: "A before and after example",
        paragraphs: [
          "Take a service page from an imaginary firm that installs heat pumps. The original section is headed 'Our approach'. It opens by saying the firm is passionate about sustainable comfort, that every home is unique and that its engineers take pride in tailored solutions. Three paragraphs later it mentions, in passing, that a survey comes first and that installation follows once the design is agreed.",
          "Nothing in that section can be quoted. There is no question, no answer and no fact that belongs to this firm. A buyer asking an assistant what happens during a heat pump installation will be shown someone else's page.",
          "The rewritten section is headed 'What happens during a heat pump installation?'. Its first sentence says that a heat pump installation has four stages: a home survey, a system design, the fitting itself and a handover in which the controls are explained. Each stage then gets a short paragraph saying who attends, what is checked and what can extend it, such as a hot water cylinder that needs replacing. A final line says which homes the firm would advise against the work for, and why.",
          "The second version is no longer than the first. It names its subject, answers in the opening sentence, sets out steps in order and includes a judgement only a practitioner would make. Every paragraph can be lifted on its own.",
        ],
      },
      {
        heading: "Structured data is a help and should never be a trick",
        paragraphs: [
          "Structured data is a standard vocabulary, added to a page's code, that labels what the content is: an organisation, a service, a question and its answer, an article and its author. It removes guesswork for the systems reading the page.",
          "Markup labels content that exists. It cannot create content that is missing. Code that describes a question and answer the visible page does not contain is misleading, and search engines treat it that way. Add structured data after the writing is right and keep it in step with what readers can see.",
          "Treat it as one part of sound [technical SEO](/technical-seo/), along with pages that load quickly and can be crawled. A page that a crawler cannot reach will not be quoted, however well it is written.",
        ],
      },
      {
        heading: "What quotable pages cannot do alone",
        paragraphs: [
          "A well-written page raises the odds of being quoted for factual questions. It does much less for recommendation questions, where an assistant decides which companies to name from evidence spread across the web. That side is covered in [how AI assistants decide which businesses to name](/resources/how-ai-assistants-decide-which-businesses-to-name/).",
          "Nor is there any guarantee. Answers vary between runs, and the systems change. What an [AEO programme](/aeo-services/) can do is make sure that for every question your buyers ask, a page exists on your site that deserves to be the source, and then check over time whether it is being used.",
          "If you are unsure where to begin, pick the five questions your sales team answers most often and check whether your site answers each one in its first two sentences. Most sites do not, and that list is your first month of work.",
        ],
      },
    ],
  },
  {
    slug: "does-seo-still-matter-when-buyers-ask-ai-assistants",
    title: "Does traditional SEO still matter when buyers ask AI assistants?",
    format: "Insight",
    summary:
      "Yes. AI answers are built largely from the web that search engines already crawl and rank, so the foundations still decide who gets used. What changes is the goal, the measure and the content worth making.",
    ...base,
    takeaways: [
      "AI answers are made from the web, so search foundations remain the base.",
      "Buyers who get a shortlist from an assistant still search to check it.",
      "The goal widens from earning a click to being quoted and named.",
      "Generic informational pages lose value. First-hand, specific pages gain it.",
    ],
    relatedServices: ["seo-services", "ai-seo-services", "technical-seo", "content-seo"],
    sections: [
      {
        heading: "The short answer is yes",
        paragraphs: [
          "Traditional SEO still matters, and for a reason that is easy to miss: AI answers are made from the web. An assistant that searches before replying depends on pages it can find and read. A model that answers from training learned from pages that were published, linked and discussed. In both cases the raw material is the same web that search work has always tried to improve.",
          "The claim that search optimisation is finished usually comes from people selling its replacement. The opposite claim, that nothing has changed, usually comes from people selling the old thing. Neither holds. The foundations keep their value and some long-standing habits lose theirs.",
        ],
      },
      {
        heading: "Why the foundations carry over",
        paragraphs: [
          "Consider what an assistant needs in order to use your page. The page has to be reachable by a crawler, quick to load, readable without running complicated scripts and clear about its subject. Those are the requirements of [technical SEO](/technical-seo/), unchanged.",
          "Next, the page has to be found for the search the assistant performs on the buyer's behalf. Those searches resemble the ones people type, though they are often longer and more specific. Pages that rank well for them are the ones most likely to be read and cited. A ranking is now an input to the answer as well as a result in its own right.",
          "Finally, the system needs grounds for relying on you. The signals search engines use to judge credibility (references from respected sites, consistent business information, evidence of real expertise) are close relatives of the ones described in [how AI assistants decide which businesses to name](/resources/how-ai-assistants-decide-which-businesses-to-name/).",
        ],
        points: [
          "Crawlable, fast pages that state their subject clearly.",
          "Rankings for the specific searches made on a buyer's behalf.",
          "Credibility earned from other sites and from customers.",
        ],
      },
      {
        heading: "Buyers still use search results",
        paragraphs: [
          "People have not stopped using search results, and they are unlikely to for tasks where they want to choose for themselves: comparing suppliers, checking a price, finding a specific company, reading reviews, looking at a map. Many journeys now mix the two. A buyer asks an assistant for a shortlist, then searches each name to see whether it holds up.",
          "That second step is classic search. If the assistant names you and a search for your name returns a thin site, an empty profile and no reviews, the recommendation is wasted. Branded search, local results and the pages that answer due-diligence questions matter more as a result, because they are where a buyer prompted by an AI answer arrives.",
          "There is also a plain matter of evidence. Search data is the richest record most businesses have of what their buyers want, in their own words. Giving up the discipline of reading it would leave a company guessing at the questions that assistants are now being asked.",
        ],
      },
      {
        heading: "What changes",
        paragraphs: [
          "Three things change. The first is the goal. A click was once the only prize. Now a buyer can read your answer, or your name, without visiting. Being the source of the answer and being named in it are outcomes in their own right. They need content written to be quoted and a reputation that exists beyond your own domain.",
          "The second is measurement. Positions and clicks describe only part of what is happening. Visibility in AI answers has to be sampled with repeated prompts and reported as a range, and some of its effect will arrive as direct visits and branded searches with no obvious origin.",
          "The third is what content is worth making. Pages that restate common knowledge to catch informational searches lose value when an answer can be generated on the spot. Pages with first-hand detail, a clear position, real prices or a specific method gain value, because they supply what a generated summary cannot invent.",
        ],
      },
      {
        heading: "Where the old habits stop paying",
        paragraphs: [
          "Some practices were already weak and are now a poor use of money. The list below is where we would look first when reviewing an existing programme.",
          "What these have in common is that they aimed at the mechanics of a ranking system and ignored the reader. Systems that read and summarise text are harder to satisfy with form alone.",
          "Stopping them frees budget. The money that paid for the fortieth variation of a page is better spent on one piece of first-hand research, a properly maintained set of business profiles or the time of a specialist who can answer a journalist's question well.",
        ],
        points: [
          "Publishing many near-identical pages to cover keyword variations.",
          "Long introductions that delay the answer.",
          "Reports that treat ranking positions as the outcome.",
          "Link building that produces links with no real mention or context.",
        ],
      },
      {
        heading: "How we would allocate effort",
        paragraphs: [
          "For most businesses the sensible plan is one programme with shared foundations. Keep the technical base sound. Keep building pages that answer commercial questions thoroughly, and structure them so they can be quoted. Add the off-site work that makes your company a known, consistently described entity. Measure classic results and AI visibility side by side.",
          "That is what we mean by [AI SEO](/ai-seo-services/): an extension of [SEO services](/seo-services/) to cover the new places where buyers get answers. The vocabulary is set out in [what AEO, GEO and AI SEO each mean](/resources/aeo-geo-and-ai-seo-explained/).",
          "The split between the parts depends on your category. Where buyers already ask assistants for recommendations, shift more towards reputation and quotable content. Where they still search, compare and call, the classic work remains the larger share. Check which applies to you before moving a budget on the strength of a headline.",
        ],
      },
      {
        heading: "The position, stated plainly",
        paragraphs: [
          "The lasting purpose of search optimisation is to be the answer a buyer finds when they look for help. The interface for looking is changing. The work of deserving to be found is recognisably the same, with a wider definition of where being found happens.",
          "A business that abandons its search foundations to chase AI visibility will find it has removed the thing AI visibility is built on. A business that ignores AI answers will keep its rankings and gradually lose the buyers who no longer look at them.",
          "Our view is that the two should be planned, funded and reported together. Splitting them into rival budgets invites each side to claim the other is obsolete, and the buyer, who moves between an assistant and a results page without noticing the boundary, is served by neither.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-audit-in-an-afternoon",
    title: "An AI search audit you can run in an afternoon",
    format: "Guide",
    summary:
      "A step-by-step method for finding out whether AI assistants name your business: choose prompts from the buying journey, run each several times, record names and sources, then pick the first fixes.",
    ...base,
    takeaways: [
      "Write prompts the way buyers speak, covering the whole journey.",
      "Run every prompt several times in fresh sessions and log each run.",
      "Record the cited sources, because they are what you can influence.",
      "Sort gaps by type, then fix accuracy first and content second.",
    ],
    relatedServices: ["ai-seo-services", "geo-services", "aeo-services"],
    sections: [
      {
        heading: "What this audit tells you, and what it does not",
        paragraphs: [
          "This audit answers a narrow question: when buyers in your category ask an AI assistant for help today, are you named, who is named instead, and which sources are shaping the answer? One person can complete it in an afternoon with a spreadsheet and access to the assistants your buyers are likely to use.",
          "It is a snapshot. Answers vary between runs and change over time, so an afternoon's work shows direction and gaps and stops short of a precise score. For ongoing tracking, use the panel method in [how to measure AI search visibility](/resources/measuring-ai-search-visibility/). The audit is the first pass that tells you whether tracking is worth setting up and what to fix first.",
        ],
      },
      {
        heading: "Step one: choose prompts from the buying journey",
        paragraphs: [
          "Write between twelve and twenty prompts. Fewer gives too thin a picture and more will not fit in the afternoon. Draw them from how buyers speak: sales call notes, enquiry forms and the questions your team answers every week. Write them as a buyer would, with the context a real person includes, such as company size, location or a constraint.",
          "Cover the whole journey. A list made only of prompts that ask for the name of a provider misses the earlier moments when a buyer is still working out what kind of help they need, and the later ones when they are checking a shortlist.",
          "Resist the urge to write prompts that flatter you. A prompt containing your own tagline will name you and teach you nothing. If you are unsure whether a prompt is realistic, read it to someone in sales and ask whether a customer would say it.",
        ],
        points: [
          "Problem prompts: the situation described, with no category named.",
          "Category prompts: which providers or products to consider.",
          "Comparison prompts: you against named alternatives.",
          "Evaluation prompts: cost, risks, fit and what to ask a supplier.",
          "Brand prompts: what the assistant says about you by name.",
        ],
      },
      {
        heading: "Step two: run each prompt several times",
        paragraphs: [
          "Pick two or three environments: the assistants your buyers plausibly use, plus the AI answers in search results for the same questions typed as searches. Run every prompt at least three times in each, starting a fresh conversation each time so earlier answers do not colour later ones.",
          "Use a clean session where you can, signed out or with history and personalisation switched off, and note the date and your location. Do not rephrase a prompt between runs. The point of repetition is to see how much the answer moves when nothing else changes.",
          "A single run misleads in both directions. Being named once can be luck, and so can being absent once. Three runs will not give you a reliable rate. They will separate always, sometimes and never, which is enough to act on.",
        ],
      },
      {
        heading: "Step three: record who is named and which sources are cited",
        paragraphs: [
          "Use one row per run. The columns matter more than the tool, and the five below are enough.",
          "Copy the description of your company word for word. An assistant that names you and places you in the wrong category, or credits you with a service you dropped, has revealed a problem you can trace to a source. Record the cited sources with the same care, because they are the part of the answer you can influence.",
          "Where an environment shows no sources, say so in the row and move on. The absence is itself information: that answer is coming from what the model already holds, and it will be slower to change.",
        ],
        points: [
          "Prompt, environment, date and run number.",
          "Whether you were named, and how you were described.",
          "Which competitors were named, in the order given.",
          "Which sources were cited or linked.",
          "Anything stated about you that is wrong or out of date.",
        ],
      },
      {
        heading: "Step four: find the gaps",
        paragraphs: [
          "Read down the sheet and sort what you see into four kinds of gap. Each has a different cause and a different remedy, which is why sorting comes before fixing.",
          "An absence gap is a prompt where competitors are named and you never are. A source gap is a publication, directory, review platform or comparison page that is cited repeatedly and does not mention you. An accuracy gap is a wrong or stale statement about you. A content gap is a question where the cited pages belong to others because no page on your site answers it.",
          "Look for patterns across prompts. If the same two or three sources appear behind most answers in your category, they deserve attention before anything else. If you are named for brand prompts and never for problem prompts, the system knows who you are and has no evidence linking you to the problems you solve. The mechanisms behind these patterns are explained in [how AI assistants decide which businesses to name](/resources/how-ai-assistants-decide-which-businesses-to-name/).",
        ],
      },
      {
        heading: "Step five: decide the first fixes",
        paragraphs: [
          "Order the fixes by how far they are within your control and how close the prompt is to a purchase. Accuracy comes first: correct the wrong facts at their source, whether that is your own site, a business profile or a directory entry. These fixes are cheap, and an error repeated to buyers does damage every day it stands.",
          "Content gaps come next, because the remedy is yours to publish. Write or rewrite the page that answers the question, following the approach in [how to write a page an AI answer can quote](/resources/writing-pages-ai-answers-can-quote/). Source gaps and absence gaps take longest, since they depend on earning coverage and reviews from other people. Choose the one or two sources that matter most and start there.",
          "Keep the list short. Three to five fixes, each with an owner and a date, are worth more than a long backlog nobody starts.",
        ],
      },
      {
        heading: "What to do with the result",
        paragraphs: [
          "Save the sheet and the exact prompts. After a couple of months, run the same prompts the same way and compare. Movement from never to sometimes on a commercial prompt is a real result. A small shift on a single run is noise.",
          "If the audit shows wide gaps on prompts close to a purchase, the work is worth resourcing properly, either in house or through [AI SEO services](/ai-seo-services/). If you would like a second opinion on what you found, bring the sheet to a [growth audit](/growth-audit/) conversation.",
          "Whatever you decide, keep the first sheet. It is the baseline against which every later claim about AI visibility, from your own team or from a supplier, can be checked.",
        ],
      },
    ],
  },
];
