/**
 * Local SEO series. Five pieces that link to each other and to the
 * local SEO and Google Maps service pages.
 * House rules apply: no invented statistics, no platform policy stated as fact,
 * method shown wherever a recommendation is made.
 */
import type { Article } from "./articles";

const shared = {
  category: "seo",
  format: "Guide" as const,
  author: "SERPMOZ Research",
  authorRole: "Editorial team",
  publishedAt: "2026-10-06",
  cluster: "local-seo" as const,
};

export const articles: Article[] = [
  {
    slug: "how-local-search-chooses-businesses",
    title: "How local search decides which businesses to show",
    ...shared,
    summary:
      "Local results are ranked on three things: relevance, distance and prominence. What each one means in plain terms, and which parts a business can change and which it has to accept.",
    takeaways: [
      "Local results weigh relevance, distance and prominence together.",
      "You cannot move your premises closer to the searcher, so stop trying to.",
      "Relevance is the cheapest factor to improve and the most often neglected.",
      "Prominence is earned over time through reviews, mentions and a useful site.",
    ],
    relatedServices: ["local-seo-services", "google-maps-seo", "seo-services"],
    sections: [
      {
        heading: "Local results follow their own logic",
        paragraphs: [
          "Search for a dentist, a tyre shop or a wedding caterer and the page that comes back looks different from an ordinary results page. A map appears with a short list of businesses beside it, each with a rating, opening hours and a call button. The ordinary website links sit underneath.",
          "That short list is produced by a separate system from the one that ranks web pages. Google describes it in public guidance as depending on three things: relevance, distance and prominence. Other map and directory products work on similar principles, even where the wording differs. The detail of how the three are weighed is not published and changes over time, so treat any precise formula you are shown with suspicion.",
          "The three ideas themselves are durable, and they are enough to plan with. Each one answers a different question about the business.",
        ],
      },
      {
        heading: "Relevance asks whether the business matches the request",
        paragraphs: [
          "Relevance is the fit between what the person typed and what the business says it does. A search for emergency plumber should return plumbers who take emergency calls, and the system can only know that if the business has said so somewhere it can read.",
          "The main sources are the business profile (its category, services and description), the website it links to, and what customers write in reviews. A clinic listed only under a broad medical category, with a website that never mentions the treatments it offers, gives the system very little to match against.",
          "Relevance is also about the words customers use, which are rarely the words the trade uses. People look for a boiler repair, not a heating engineer. They look for a tiffin service, a notary, a car wash near the metro. A business that describes itself in its customers' vocabulary is easier to match.",
        ],
      },
      {
        heading: "Distance asks how far the business is from the place in question",
        paragraphs: [
          "Distance is measured from wherever the search is anchored. If the person names a place, it is measured from that place. If they do not, it is measured from where their device appears to be. Two people typing the same words a few kilometres apart will often see different businesses.",
          "The way people name places varies by country, and it matters. In Indian cities people search by sector number, colony, market or metro station. In the UK they use the town, the borough or the first half of a postcode. In the UAE they often name a community, a tower or a landmark, because that is how directions are given. In the USA neighbourhood names, suburbs and zip codes all appear. A business needs to know which of these its own customers use.",
          "A business cannot change where it is. It can make sure its location is recorded accurately, and it can decide which nearby areas are realistic to compete in. Being shown to someone on the far side of a large city is unlikely when closer, comparable options exist.",
        ],
      },
      {
        heading: "Prominence asks how well known the business appears to be",
        paragraphs: [
          "Prominence is the system's estimate of reputation. Some businesses are well known offline, and that tends to be reflected online. For everyone else, prominence is assembled from signals: the number and quality of reviews, how often the business is mentioned on other sites, links to its website, and how well that website performs in ordinary search.",
          "The website counts for more here than many owners expect. A local business with a thin site, or none, is relying on its profile alone. One with clear service pages, real location details and a few links from organisations that know it gives the system more reasons to consider it established.",
          "This is the slowest of the three to change. A review profile is built one customer at a time, and mentions in the local press, trade bodies and community sites accumulate over years. Our piece on [asking for and replying to reviews](/resources/local-reviews-asking-replying-and-what-to-avoid/) covers the part of this that is most within a business's control.",
        ],
      },
      {
        heading: "What a business can influence",
        paragraphs: [
          "Most of the available effort belongs in relevance and prominence. The list below is roughly in order of how quickly each item can be done.",
          "None of these is a trick. Each one makes the business easier to understand or easier to trust, for a person as much as for a ranking system. That is why the work keeps its value when the systems change.",
        ],
        points: [
          "Choose the most accurate category and list every service you actually offer.",
          "Keep the name, address, phone number and hours identical wherever they appear.",
          "Give the website a clear page for each main service and each real location.",
          "Ask every customer for a review as a matter of routine, and reply to them.",
          "Earn mentions from local organisations, suppliers and publications that know you.",
        ],
      },
      {
        heading: "What a business cannot influence",
        paragraphs: [
          "The searcher's position is outside your control, and so is the number of competitors who happen to be nearer to them. So is the way a query is interpreted on a given day: the same phrase may be treated as a request for a nearby shop in one case and as a request for information in another.",
          "Attempts to get round distance tend to end badly. Listing an address where the business does not operate, or adding place names and service words to the business name, are the usual ones. Platforms publish guidelines against misrepresentation, and profiles that break them can be suspended, sometimes after a competitor reports them. Read the current guidelines for any platform you rely on before changing how the business is presented.",
          "No agency can promise a position in the map results either. The honest claim is that a complete, accurate, well reviewed business is shown more often, to more of the people who are close enough to choose it.",
        ],
      },
      {
        heading: "How to use this when deciding where to spend effort",
        paragraphs: [
          "Start with relevance, because it is cheap and mostly a matter of accuracy. Our guide to [setting up a business profile that earns enquiries](/resources/google-business-profile-that-earns-enquiries/) works through it field by field. Then put a review routine in place, because prominence compounds and the sooner it starts the better.",
          "Treat distance as a boundary to plan within. Decide which areas you can reasonably serve, check what customers there call those areas, and measure results from several points inside them instead of from your own desk. That is the starting point of the [local SEO work](/local-seo-services/) we do, and of any [map visibility project](/google-maps-seo/) worth paying for.",
        ],
      },
    ],
  },
  {
    slug: "google-business-profile-that-earns-enquiries",
    title: "Setting up a Google Business Profile that earns enquiries",
    ...shared,
    summary:
      "A business profile is often read before the website is. How to choose categories, describe services, use photos, answer questions and keep details consistent so the profile produces calls.",
    takeaways: [
      "The primary category is the most consequential choice on the profile.",
      "Describe services in the words customers use, not trade vocabulary.",
      "Photos and answers settle doubts that people never type into a search box.",
      "Accuracy has to be maintained, so give the profile an owner and a routine.",
    ],
    relatedServices: ["local-seo-services", "google-maps-seo", "content-seo"],
    sections: [
      {
        heading: "The profile is often the first thing a local customer reads",
        paragraphs: [
          "For many local searches the customer never reaches the website. They see the business name, the rating, a few photos and the opening hours, and they call, ask for directions or move on to the next listing. The profile is doing the job a shopfront does on a street.",
          "That changes what a good profile is for. It has two readers. One is the system that decides whether to show the business for a given search, which is covered in our piece on [how local search chooses businesses](/resources/how-local-search-chooses-businesses/). The other is a person with a need and little patience. Every field should serve both.",
          "The features on offer change regularly, and they differ between business types and countries. What follows is written in general terms on purpose. Check the platform's current help pages and guidelines for what is available to you and what is allowed.",
        ],
      },
      {
        heading: "Choose the category that describes the main thing you do",
        paragraphs: [
          "The primary category tells the platform what kind of business this is. It should describe the business as a whole, in the most specific accurate term available. A practice that mainly does orthodontics is better described that way than as a general clinic, if the option exists.",
          "Additional categories are for other things the business really does, at that location, as a regular part of its trade. They are not a place to list everything loosely related. A long list of weak matches blurs the picture.",
          "Look at how established competitors in your area are categorised before deciding. This is a check on your own judgement, not an instruction to copy them. If every comparable business uses a term you had not considered, find out why.",

        ],
      },
      {
        heading: "Describe services in the words your customers use",
        paragraphs: [
          "Where the profile lets you list services or products, list all of them, each with a short plain description. This is the clearest way to tell the system what you should be matched to, and it saves the customer a phone call to ask whether you do a particular job.",
          "Use customer vocabulary. A homeowner in Leeds searches for a blocked drain. A family in Pune looks for a paediatrician near a named locality. A tenant in Dubai looks for AC servicing in their community. A driver in Texas looks for a smog check or an oil change. Write the service names the way those people would say them.",
          "The business description should say what you do, for whom and in which areas, in a few sentences. Avoid lists of keywords and avoid claims you could not support if asked.",
        ],
      },
      {
        heading: "Photos answer questions people do not type",
        paragraphs: [
          "People use photos to judge things they would never search for: whether the premises look clean, whether there is parking, what the entrance looks like from the road, who they will meet. Real photographs of the real place answer those doubts. Stock images do the opposite.",
          "Cover the outside from the direction most people arrive, the inside, the team at work and examples of finished jobs where that is appropriate and where the customer has agreed. Add new ones through the year so the set does not show a shop front you repainted long ago.",
        ],
        points: [
          "The exterior, including signage and the nearest landmark.",
          "The interior or the vehicles, tools and workspace customers will see.",
          "The people who answer the phone and do the work.",
          "Finished work, with permission where a customer or their property is identifiable.",
        ],
      },
      {
        heading: "Questions, messages and posts show the business is attended to",
        paragraphs: [
          "Where a profile lets customers ask questions or send messages, someone must be responsible for answering them promptly. An unanswered question is visible to everyone who looks afterwards. So is an answer supplied by a stranger who guessed.",
          "Keep a note of the questions that recur and answer them in the profile itself and on the website: parking, payment methods, whether you take walk-ins, whether you serve a particular area. If the platform offers updates or posts, use them for things a customer would act on, such as a change to holiday hours, a new service or a seasonal offer. A short true update is worth more than a regular schedule of filler.",
        ],
      },
      {
        heading: "Keep the name, address, phone number and hours identical everywhere",
        paragraphs: [
          "The business name on the profile should be the name on the sign and the paperwork. Adding a city or a service to it may look like a shortcut. It usually conflicts with platform guidelines and it puts the profile at risk.",
          "The same details should appear in the same form on your website, in directories, on social profiles and on any trade listings. Differences confuse customers first and matching systems second. Addresses need particular care in places where they are written several ways, such as an Indian address that might lead with a plot number, a sector or a landmark, or a UAE address given as a building and community.",
          "Hours are the detail most often wrong. Update them for public holidays, festivals and seasonal changes in each country you operate in. A customer who arrives at a locked door tends to say so in a review.",
        ],
      },
      {
        heading: "A routine that keeps the profile accurate",
        paragraphs: [
          "A profile decays if nobody owns it. Give one named person the job and a short recurring checklist. The first setup takes an afternoon. The upkeep takes minutes, provided it happens.",
          "Make sure the business itself holds the account. Profiles created by a former employee, a web designer or a previous agency under their own login are a frequent source of trouble, and regaining control can be slow. Add other people as managers and keep ownership with the company.",
          "Measure the profile by what it produces: calls, direction requests, messages and website visits, alongside how many of those became customers. If the profile reports plenty of views and few actions, the listing is being seen and not chosen, and the photos, reviews and service list are the places to look. This upkeep is a core part of our [Google Maps SEO](/google-maps-seo/) and wider [local SEO services](/local-seo-services/).",
        ],
        points: [
          "Weekly: answer new reviews, questions and messages.",
          "Monthly: check hours, services and photos against reality.",
          "Each quarter: search for the business by name and correct any stray listings.",
          "On any change of address, phone or name: update every listing in the same week.",
        ],
      },
    ],
  },
  {
    slug: "location-pages-that-are-not-doorway-pages",
    title: "Location pages that are not doorway pages",
    ...shared,
    summary:
      "Most city and branch pages are one template with the place name changed. A simple test for whether a location page deserves to exist, and what to put on the ones that pass.",
    takeaways: [
      "A location page must say things that are only true of that place.",
      "Apply the swap test: change the place name and see if the page is now wrong.",
      "State plainly how you serve the area, whether from a branch or remotely.",
      "Fewer pages with real substance outperform a long list of copies.",
    ],
    relatedServices: ["local-seo-services", "google-maps-seo", "content-seo", "technical-seo"],
    sections: [
      {
        heading: "What a doorway page is and why it gets ignored",
        paragraphs: [
          "A doorway page is a page built to catch a search and pass the visitor somewhere else, with little of its own to offer. The familiar local version is a set of pages titled with a service and a town, each carrying the same paragraphs with a different name dropped in.",
          "Search engines have described this pattern in their spam guidance for a long time. The practical outcome is usually quiet: the pages are crawled, judged to be near copies of each other and left out of results, or one is chosen to stand for the whole set. In worse cases the low quality of the set colours how the rest of the site is treated. Check the current guidance of the search engines you depend on for how they define it today.",
          "The pages also fail with people. A visitor who lands on a page about their city and finds nothing that shows any knowledge of it leaves quickly.",
        ],
      },
      {
        heading: "Would the page be wrong if the place name were swapped?",
        paragraphs: [
          "There is a quick test for any location page. Replace the place name throughout with a different one and read the page again. If everything still reads as accurate, the page was never about the place. It was about your service, with a label attached.",
          "A page that passes the test becomes wrong when the name changes. It mentions the areas you cover, which do not exist in the other city. It refers to how customers there travel, what the buildings are like, which regulations or seasons affect the work, which branch they would visit and when it opens. Swap the name and those statements turn false.",
          "Run the test strictly on existing pages before writing new ones. It is common to find that only the heading and the first sentence change meaning, and everything beneath them would suit any town in the country.",
        ],
      },
      {
        heading: "What a location page needs to be worth publishing",
        paragraphs: [
          "The substance has to come from what the business really knows about the place. That knowledge exists in most companies. It sits with the people who take the calls and do the jobs, and it rarely reaches the website.",
          "Local vocabulary matters here. A page for Gurgaon that speaks of sectors, named business districts and the roads people commute along sounds like it was written by someone who knows the city. A page for Manchester would speak of districts and postcodes, one for Dubai of communities and free zones, one for Houston of neighbourhoods and suburbs. Use the terms residents use, in the places they would naturally appear.",
        ],
        points: [
          "The areas served, named as locals name them, and any you do not cover.",
          "How the service differs there: property types, common problems, travel, timing.",
          "Who the customer will deal with and how to reach them.",
          "Evidence from that place, such as reviews or approved examples, where you have it.",
          "Questions customers in that area really ask, with specific answers.",
        ],
      },
      {
        heading: "Be plain about how you serve the place",
        paragraphs: [
          "A location page should never imply premises that do not exist. If there is a branch, give its address, hours and directions. If the business travels to customers, say where it travels from and how far. If the work is done remotely, say that.",
          "Our own city pages take the remote case. The page for [Gurgaon](/digital-marketing-agency-gurgaon/) describes the city's business areas and the kinds of company found there, and states that we work with businesses there remotely, with no claim of an office. It is offered here as an example of the approach, and the swap test applies to it as much as to anyone else's page.",
          "Being clear costs less than it seems. Customers who need someone on site were never going to be won by a vague page, and customers who do not mind are reassured by the candour.",
          "The same rule applies to structured data and business profiles. Mark up an address, or create a profile for a place, only where the business really operates from it.",
        ],
      },
      {
        heading: "How many location pages should a business publish?",
        paragraphs: [
          "Publish as many as you can write with real substance, and no more. For a business with four branches that is four pages, each with its own details. For a service-area business it might be a handful covering the districts where it does most of its work.",
          "The temptation is to cover every town and suburb within driving distance. Resist it. Thirty thin pages compete with each other, dilute the site and take real effort to keep accurate. Five strong ones can be maintained, linked to properly and improved as you learn more.",

          "Where demand in a small area does not justify a page, mention the area on the page for the nearest larger one. A clear list of the localities covered is often enough to be found for them.",
        ],
      },
      {
        heading: "What gets location pages ignored",
        paragraphs: [
          "The causes are consistent across sites and countries. Most come from producing pages at a scale the business's knowledge cannot support.",
          "Automation makes this easier to get wrong than it used to be. A tool can produce a hundred fluent city pages in an afternoon, and fluent is not the same as informed. If no one at the business supplied facts about the place, the page has none, however well it reads.",
        ],
        points: [
          "The same body copy on every page with only the place name changed.",
          "Lists of towns, postcodes or sectors pasted in with no sentences around them.",
          "Pages for places the business does not serve in practice.",
          "No route to the pages except a block of links in the footer.",
          "Contact details that are identical on every page when the branches differ.",
        ],
      },
      {
        heading: "Link the pages into the site and keep them current",
        paragraphs: [
          "A location page should be reachable the way a visitor would look for it: from a locations index, from the relevant service pages and from the contact page. Each one should link back to the services offered there and, where a branch has a business profile, to and from that profile. Our guide for [businesses with many branches](/resources/local-seo-for-multi-branch-businesses/) covers the structure in more detail.",
          "Review the pages on a schedule. Staff change, hours change, coverage areas grow and shrink. A page that was accurate when written and is now wrong fails the same test from the other direction. If you would like a second opinion on an existing set of pages, this is part of what our [local SEO services](/local-seo-services/) examine first.",
        ],
      },
    ],
  },
  {
    slug: "local-reviews-asking-replying-and-what-to-avoid",
    title: "Reviews: how to ask, how to reply, and what never to do",
    ...shared,
    summary:
      "Reviews shape whether a local business is shown and whether it is chosen. A practical routine for asking every customer, replying well to praise and criticism, and staying on the right side of the rules.",
    takeaways: [
      "Ask every customer, at the moment the work is fresh, in a way that takes seconds.",
      "Reply to every review for the benefit of the next reader.",
      "Never buy, gate, script or fake reviews, whatever a competitor appears to do.",
    ],
    relatedServices: ["local-seo-services", "google-maps-seo", "whatsapp-automation", "email-marketing"],
    sections: [
      {
        heading: "Why reviews matter beyond the star rating",
        paragraphs: [
          "Reviews do two jobs. They are one of the signals a local search system uses to judge how well regarded a business is, which we describe in [how local search chooses businesses](/resources/how-local-search-chooses-businesses/). They are also the main thing a prospective customer reads before deciding whether to call.",
          "The second job is the larger one. People read the most recent reviews and the worst ones. They look for someone like themselves with a problem like theirs, and they notice how the business responded when something went wrong. A profile with a steady flow of specific, recent reviews and thoughtful replies persuades in a way no advertisement can.",
          "The words in reviews matter too. When customers mention the service they bought and the area they live in, they describe the business in exactly the language other customers search with. That only happens when the reviews are real.",
        ],
      },
      {
        heading: "How to ask so that people actually do it",
        paragraphs: [
          "Most satisfied customers are willing to leave a review and never get round to it. The reasons are ordinary: nobody asked, the moment passed, or finding the right page took too long. A good process removes all three.",
          "Ask in person where you can, at the point the customer is pleased with the result, and follow up the same day with a direct link. Use the channel the customer already uses with you. In India and the UAE that is very often WhatsApp. In the UK and the USA it is more often a text message or an email. A printed card with a code to scan works well at a counter or on a job sheet.",
          "Keep the request short and neutral. Thank them, say that reviews help other people find the business, and give the link. Do not suggest what to write or which rating to choose.",
        ],
        points: [
          "Ask soon after the work is complete, while the detail is fresh.",
          "Send one direct link that opens the review form.",
          "Send a single polite reminder a few days later, then stop.",
          "Make asking part of the job for whoever closes the sale or finishes the work.",
        ],
      },
      {
        heading: "Ask everyone, not only the customers you expect to be kind",
        paragraphs: [
          "Some businesses check how a customer feels first and send the review link only to the happy ones, directing the rest to a private form. This is usually called review gating. It produces a rating that misleads readers, and review platforms and consumer protection bodies in several countries treat selective solicitation as a problem. Check the current guidelines of each platform you use, and ask your own adviser where consumer law is concerned.",
          "Asking everyone is also better practice on its merits. A profile with nothing but perfect scores looks less believable than one with a few mixed reviews and good replies. Critical reviews tell you things about the business that you would otherwise learn much later.",
          "By all means offer an easy way to complain directly. Offer it to every customer, alongside the review request and never in place of it.",
        ],
      },
      {
        heading: "How to reply to praise",
        paragraphs: [
          "Reply to positive reviews briefly and specifically. Thank the person by name if they have given it, and refer to something in what they wrote so the reply is plainly not a template. Two sentences are enough.",
          "Avoid loading replies with place names and service terms in the hope of ranking better. It reads oddly to customers and there is no good reason to believe it helps. The purpose of a reply is to show the next reader that someone at the business pays attention.",
          "Reply within a few days where you can. A thank you that arrives months later still counts for the next reader, and a prompt one tells the reviewer that the effort was noticed, which makes a second visit and a recommendation more likely.",
        ],
      },
      {
        heading: "How to reply to criticism",
        paragraphs: [
          "A reply to a negative review is written for everyone who will read it later, more than for the reviewer. Those readers are asking one question: what happens if I have a problem with this business?",
          "Wait until you can answer calmly. Acknowledge the complaint, apologise for what went wrong if something did, say what you have done or will do, and offer a direct way to continue the conversation. Do not argue facts in public, and never disclose personal details about the customer or their purchase. For clinics, law firms, financial advisers and similar practices, confidentiality duties may limit what you can say at all, so take advice before replying.",
          "If a review appears to be fake, or to be about a different business, use the platform's own reporting process and keep your public reply measured. Removal is the platform's decision and can take time. Then resolve the complaints that are real, because fixing the cause is the only lasting way to stop the same review being written again.",
        ],
      },
      {
        heading: "What never to do",
        paragraphs: [
          "Every one of the practices below is sold as a service somewhere. Each carries the same risks: removal of reviews, suspension of the profile, action under consumer law in some countries, and lasting damage if customers find out.",
          "Competitors who do these things may appear to get away with it for a while. That is a poor basis for a decision about your own reputation.",
        ],
        points: [
          "Buying reviews, or paying an agency that supplies them.",
          "Writing reviews yourself, or asking staff, family and friends to pose as customers.",
          "Offering discounts, gifts or refunds in exchange for a review or a higher rating.",
          "Filtering who is asked, or pressing a customer to change or delete a review.",
          "Posting negative reviews about competitors.",
        ],
      },
      {
        heading: "Make reviews a routine and not a campaign",
        paragraphs: [
          "A burst of reviews in one month followed by silence looks odd to readers and is hard to sustain. A small, steady flow is the natural result of asking every customer as part of closing each job. Build the request into the invoice, the delivery message or the follow-up call so it does not depend on anyone remembering.",
          "Give one person responsibility for replies and a time each week to do them. Businesses with several sites need a clearer division of who asks and who answers, which we cover in the guide to [local SEO for businesses with many branches](/resources/local-seo-for-multi-branch-businesses/). Setting up this routine, including the messages and the tracking, is part of our [local SEO services](/local-seo-services/).",
        ],
      },
    ],
  },
  {
    slug: "local-seo-for-multi-branch-businesses",
    title: "Local SEO for businesses with many branches",
    ...shared,
    summary:
      "With several branches, local search becomes a problem of structure and ownership. How to organise profiles, pages, shared and local content, and reporting so every branch can be found.",
    takeaways: [
      "Every real, staffed location gets one profile and one page, and no more.",
      "Share the brand and the service facts, and localise everything a customer acts on.",
      "Report by branch, because an average across all sites hides the weak ones.",
      "Decide who owns each task centrally and locally before anything else.",
    ],
    relatedServices: ["local-seo-services", "google-maps-seo", "enterprise-seo", "technical-seo"],
    sections: [
      {
        heading: "Each branch competes in its own area",
        paragraphs: [
          "A chain of clinics, showrooms or restaurants does not compete as one company in local search. Each branch competes separately, against whichever businesses happen to be near it, for the people who happen to be near it. A strong brand helps, and the outcome is still decided branch by branch.",
          "This follows from how local results work, with distance weighed alongside relevance and prominence. Our piece on [how local search chooses businesses](/resources/how-local-search-chooses-businesses/) explains the three factors. For a multi-branch business the consequence is that the weakest branches hide inside the group average, and that central marketing effort only pays off if it reaches each location.",
        ],
      },
      {
        heading: "One profile for each real location",
        paragraphs: [
          "Every branch that customers can visit, or that staff work from during stated hours, should have its own business profile. Give each its own address, local phone number where one exists, hours, photos of that site and a link to that branch's page on the website. A link to the homepage wastes the visit.",
          "Do not create profiles for places where the business has no real presence, such as a virtual office or a mailbox taken to appear in a new city. Platform guidelines generally restrict profiles to locations that exist and serve customers, and duplicates or invented locations put the legitimate ones at risk. Departments and practitioners within one site are a special case with their own guidance, so check the platform's current rules before adding them.",
          "Hold all profiles in one central account owned by the company, with access granted to local managers. Profiles set up years ago under a former employee's personal login are among the most common problems we find, and recovering them is slow.",
        ],
      },
      {
        heading: "How should the website be organised?",
        paragraphs: [
          "The dependable structure is simple: a locations index that lists every branch, grouped by region or city where there are many, and one page per branch beneath it. Each branch page has a stable address of its own, so it can be linked from the profile, from directories and from service pages.",
          "A store finder that only works by typing a postcode into a search box is not enough alone. Search engines and many visitors need plain links they can follow to every branch. Keep the finder for convenience and keep the index for reach.",
          "Naming needs thought in large cities. Two branches in Delhi, London or Dubai cannot both be the city branch. Name them by the locality customers use, such as the market, the high street or the community, and use that name consistently on the page, the profile and the signage.",
        ],
        points: [
          "A locations index linked from the main menu or footer.",
          "One page per branch with its own stable URL.",
          "Each profile linking to its own branch page.",
          "Service pages linking to the branches that offer that service.",
        ],
      },
      {
        heading: "What is shared and what should be local",
        paragraphs: [
          "Some content is the same everywhere and should be written once: what the company is, how a service works, pricing principles, warranties and policies. Keep that on the main service pages and link to it. Repeating it in full on every branch page creates the near copies that search engines discount.",
          "Branch pages should carry what a customer of that branch would act on. That means the address and directions from recognisable landmarks, parking or public transport, hours, the services and facilities available at that site, the people who work there, and reviews or examples from that branch. The test in our guide to [location pages that are not doorway pages](/resources/location-pages-that-are-not-doorway-pages/) applies to each one: if the branch name could be swapped without making the page wrong, it needs more.",
          "Local detail differs by country as well as by city. Hours shift around different public holidays and festivals. Languages differ: a branch page in the UAE may need Arabic alongside English, and one in parts of India or the USA may serve customers better in a second language. Let the local team supply this, with the centre editing for consistency.",
        ],
      },
      {
        heading: "Track results by branch",
        paragraphs: [
          "A single report for the whole group answers almost no useful question. Report by branch: how often the profile was shown, the calls, direction requests and website visits it produced, the number and recency of reviews, and the enquiries or bookings that followed.",
          "To make that possible, tag the website link on every profile so visits from each one can be told apart in analytics. If you use call tracking, set it up in a way that keeps the branch's real number consistent on its listings. Check visibility from several points within each branch's catchment, since a search made from head office shows only what head office would see.",
          "Compare branches with each other. The ones that do well with the same brand and budget usually have a manager who asks for reviews and keeps the profile current, and that practice can be copied.",
        ],
      },
      {
        heading: "Common mistakes in multi-branch local SEO",
        paragraphs: [
          "The same faults recur in groups of every size, and most trace back to nobody having been made responsible.",
          "An audit is the quickest way to find them. Search for the brand name in each city where it trades, list every profile and directory entry that appears, and compare each against the current branch list. Expect to find entries nobody in the company remembers creating.",
        ],
        points: [
          "Duplicate or abandoned profiles for the same branch, often with old addresses.",
          "Closed or relocated branches still listed as open.",
          "One shared phone number or homepage link on every profile.",
          "Branch pages that are identical apart from the name.",
          "Reviews left unanswered because each side assumed the other would reply.",
        ],
      },
      {
        heading: "Decide who owns what before anything else",
        paragraphs: [
          "Multi-branch local SEO succeeds or fails on governance. The centre should own account access, naming rules, categories, the page template, brand standards and reporting. The branch should own what only it knows: hours, photos, local updates, asking customers for reviews and the first reply to them. Write the split down and name a person for each part.",
          "Openings, closures and moves need a checklist of their own, covering the profile, the branch page, the index, directories and redirects. Those are the moments when listings go wrong and stay wrong for years.",
          "We set up this structure and the reporting behind it as part of our [local SEO services](/local-seo-services/), with profile management for each site handled through [Google Maps SEO](/google-maps-seo/). Whoever does the work, the principle holds: one real location, one accurate profile, one useful page, one named owner.",
        ],
      },
    ],
  },
];
