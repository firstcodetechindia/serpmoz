import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/legal/seo-services/
 * Rules: no legal advice, no claims about case outcomes, no client names, no
 * figures, no guarantees. Professional conduct rules are described in general
 * terms only. Search examples are patterns, not data.
 */
export const record: IndustryServiceRecord = {
  industry: "legal",
  service: "seo-services",
  slug: "seo-services",
  name: "SEO for Law Firms",
  audience: "law firms and legal practices",

  seo: {
    title: "SEO for Law Firms: Enquiries Worth Taking",
    metaDescription:
      "SEO for law firms: practice-area and location pages, lawyer profiles and clear guidance, planned around qualified enquiries and professional conduct rules.",
    primaryKeyword: "SEO for law firms",
    secondaryKeywords: [
      "law firm SEO services",
      "SEO for lawyers",
      "SEO for solicitors",
      "legal SEO agency",
      "attorney SEO",
      "law firm local SEO",
    ],
    searchIntent: "A law firm partner or marketing lead wants to know what SEO involves for a legal practice within conduct rules.",
  },

  hero: {
    title: "SEO for Law Firms, Built Around Qualified Enquiries",
    description:
      "People search for a lawyer by the kind of problem they have and where they are, and they judge a firm by its people. SERPMOZ plans SEO for law firms around practice-area and location pages, lawyer profiles and plain explanations of process, within professional conduct rules.",
  },

  facts: [
    { label: "Best for", value: "Firms whose clients search by legal problem, practice area or place" },
    { label: "Works alongside", value: "Local SEO, paid search for urgent matters and intake" },
    { label: "Typical horizon", value: "Early gains in weeks; competitive areas typically take many months" },
    { label: "Measured in", value: "Qualified enquiries and opened matters from organic search" },
  ],

  answer: {
    question: "What does SEO for law firms involve?",
    text: "SEO for law firms makes a firm visible when people search for help with a legal problem, a practice area or a lawyer nearby. It covers site health, a page for each practice area and office, lawyer profiles that show credentials, guides that explain process without advising on individual cases, and accurate directory profiles. It is measured by enquiries the firm can take on.",
  },

  buyers: {
    heading: "How do people search for and choose a law firm?",
    paragraphs: [
      "Few people set out wanting to hire a lawyer. They start with a situation: a dispute with a landlord, a separation, a contract to sign. Their first searches ask what it means and what usually happens next. Only later do they search for a practice area with a place name attached. A firm that explains the process clearly at the first stage is already familiar at the second, which shapes most [legal marketing](/industries/legal/).",
      "Urgency divides the market. Someone facing an arrest, a deadline or an emergency order searches on a phone, contacts the first few credible firms and instructs whoever answers helpfully. Considered matters, such as estate planning or a commercial dispute, are researched over days or weeks. Those clients read practice pages closely, compare several firms and look up the individual lawyer before making contact. The two journeys need different pages and different measures.",
      "In both cases the decision rests on people and proof. Prospective clients read lawyer profiles for admissions, experience and the type of matter each person handles. They check reviews and directory listings, which often rank above the firm itself, and look for an indication of cost. Commercial clients make the same checks after a referral, so a search for the firm or lawyer by name is part of almost every instruction.",
    ],
  },

  problems: [
    {
      title: "Enquiries the firm cannot take",
      body: "Pages attract people with matters the firm does not handle, in places it does not serve. Intake staff spend time turning callers away, and the report still counts each as a lead.",
    },
    {
      title: "Practice areas on one page",
      body: "Every service sits on one page with a paragraph each. No page is specific enough to match a search for one matter type, and visitors cannot tell whether the firm does their work.",
    },
    {
      title: "Thin lawyer profiles",
      body: "Profiles hold a photograph and two lines. Clients checking a recommended lawyer find no admissions, experience or matter types, and search engines find little evidence of who stands behind the firm's content.",
    },
    {
      title: "Directories outrank the firm",
      body: "Legal directories and lead sellers hold the results for practice-area searches. The firm's own listings there are incomplete or out of date, so it is absent from pages its prospective clients read.",
    },
    {
      title: "Guides that stray into advice",
      body: "Articles are written to rank and drift into telling readers what to do in their own case, or imply likely results. That creates professional risk and ages badly as the law changes.",
    },
  ],

  approach: [
    {
      title: "Practice-area and location mapping",
      body: "We group searches by matter type, place and urgency, then score them by value and the firm's capacity. Each practice area and office maps to one page. Matter types the firm declines are listed. The method follows our main [SEO services](/seo-services/) page.",
    },
    {
      title: "Practice pages that qualify",
      body: "Each practice page says who the firm acts for, which matters it takes, where it is able to act, how the process usually runs and how fees work. The right client recognises themselves, and the wrong enquiry steps away before the call.",
    },
    {
      title: "Lawyer profiles and credentials",
      body: "Profiles set out admissions, practice areas, memberships, publications and the matters each lawyer handles, using only titles the lawyer is entitled to use. Guides are attributed to the lawyer who reviewed them. Structured data connects people, practice areas and offices.",
    },
    {
      title: "Guides that explain without advising",
      body: "Guides cover what people ask before contacting a firm: what a process involves, its usual stages and what affects cost. A lawyer reviews every piece. Each guide states its jurisdiction and review date, and makes clear that it is general information, not individual advice.",
    },
    {
      title: "Offices, directories and reviews",
      body: "Where clients visit offices, each office gets an accurate profile and page through [local SEO](/local-seo-services/). We correct listings on the legal directories that rank for your practice areas, and set up client feedback requests that fit your conduct rules and confidentiality duties.",
    },
    {
      title: "Intake and enquiry measurement",
      body: "We record which pages and searches produce enquiries, then work with intake to mark each as in scope or not, and whether a matter opened. That feedback redirects the content plan. Where a secure form would help clients make contact, we recommend it.",
    },
  ],

  searches: {
    heading: "Which searches matter most for a law firm?",
    intro:
      "These are patterns. The real list depends on the firm's practice areas, where it is able to act and the matters it wants more of, which are not always the busiest searches.",
    groups: [
      {
        name: "Practice area and location",
        examples: ["practice area + lawyer + in + city", "type of solicitor + near me", "practice area + law firm + region"],
        note: "The main commercial group. Needs one clear page per practice area and office, supported by accurate local profiles where the firm meets clients.",
      },
      {
        name: "Urgent matters",
        examples: ["type of lawyer + open now", "urgent + legal issue + lawyer", "emergency + type of order + lawyer"],
        note: "Decided in minutes, mostly on phones. Pursue these only where the firm can answer quickly, with phone number and hours prominent.",
      },
      {
        name: "Situation and process",
        examples: ["what happens when + legal situation", "how long does + legal process + take", "legal process + cost"],
        note: "Explain the process in general terms, state the jurisdiction, avoid advising on the reader's case and offer a route to a lawyer.",
      },
      {
        name: "Firm and lawyer names",
        examples: ["firm name + reviews", "lawyer name + practice area", "firm name + fees"],
        note: "Checks made after a referral or shortlist. Complete profiles, current directory listings and clear fee information should be what the searcher finds.",
      },
    ],
  },

  rules: [
    {
      title: "Professional conduct rules on advertising",
      body: "Bars and law societies regulate how lawyers promote their services, and rules differ widely between jurisdictions, some far stricter than others. Confirm every page and listing with the firm's compliance adviser before publication.",
    },
    {
      title: "Results, comparisons and specialist titles",
      body: "Statements about past results, comparisons with other firms and words such as specialist or expert are restricted in many places. We avoid them by default and use only wording your compliance adviser has confirmed.",
    },
    {
      title: "Confidentiality, testimonials and enquiry data",
      body: "Client identity and matter details are confidential, and rules on testimonials vary. Enquiry forms also collect sensitive personal data. Your compliance and privacy advisers should confirm how feedback is invited and enquiry data stored.",
    },
  ],

  measures: [
    "Organic search enquiries within the firm's scope",
    "Matters opened from organic search enquiries",
    "Share of enquiries declined as out of scope or area",
    "Visibility for priority practice areas in places the firm serves",
    "Calls and forms answered within the firm's own response standard",
  ],

  timeline: [
    {
      phase: "Audit and baseline",
      when: "Weeks 1 to 3",
      body: "A technical crawl, an inventory of practice pages, profiles and guides, a check of directory listings, and a baseline of enquiries by practice area with intake's view of how many were in scope.",
    },
    {
      phase: "Opportunity model and compliance brief",
      when: "Weeks 3 to 6",
      body: "Searches are grouped by matter type, place and urgency and mapped to pages. We agree with the firm's compliance lead what may be said, which words to avoid and how sign-off runs.",
    },
    {
      phase: "Practice pages and profiles",
      when: "Months 2 to 4",
      body: "Technical fixes ship, and priority practice-area pages, office pages and lawyer profiles are rebuilt and approved. Directory listings are corrected. Pace depends on how quickly lawyers review drafts, so timings are typical.",
    },
    {
      phase: "Guides, authority and review",
      when: "Month 4 onward",
      body: "Reviewed guides are published steadily and references are earned from credible legal and local sources. Enquiries and opened matters are read against visibility monthly. Competitive practice areas typically take many months.",
    },
  ],

  faqs: [
    {
      q: "How is SEO for a law firm different?",
      a: "The foundations are the same and the constraints tighter. Legal content affects important decisions, so search engines and readers look hard at who wrote it. Professional conduct rules limit what a firm may claim. The value of an enquiry also varies greatly by matter type, so volume is a poor guide.",
    },
    {
      q: "How long does SEO take for a law firm?",
      a: "It depends on the firm's starting point, the practice areas involved and the competition in each place. Technical fixes and better pages for searches on the firm's own name can show within weeks. Contested practice areas in large cities typically take many months of work. We set expectations after the audit.",
    },
    {
      q: "How much does SEO for a law firm cost?",
      a: "Cost depends on the number of practice areas and offices, how competitive those areas are, the state of the existing site and how much drafting and review the firm's own lawyers will do. After a [growth audit](/growth-audit/) we provide a scoped proposal with the reasoning behind it. No standard package fits.",
    },
    {
      q: "Do professional conduct rules allow law firm SEO?",
      a: "That depends on the jurisdiction, and the firm's own regulator has the final word. Rules range from broad permission with conditions to strict limits on promotion. Publishing accurate information about the firm is often treated differently from solicitation, but confirm the position with your compliance adviser before any work begins.",
    },
    {
      q: "How do you stop SEO bringing enquiries we cannot take?",
      a: "Mainly through what the pages say. Practice pages state the matters the firm handles, where it is able to act and the clients it serves, and we avoid content aimed at matter types the firm declines. Intake feedback then shows which pages still attract out-of-scope enquiries, and those are rewritten or removed.",
    },
    {
      q: "Who writes the legal content?",
      a: "Our writers draft from briefs agreed with the firm, and a lawyer who does that work reviews every piece before publication and is named on it. Guides explain how a process generally works in a stated jurisdiction. They do not advise on individual circumstances, and each one says so clearly.",
    },
    {
      q: "Should we be listed on legal directories?",
      a: "Often, yes, because directories often rank for practice-area searches. Accurate listings on the main directories in your jurisdiction are worth maintaining. Paid placements and bought leads are a separate decision: judge them by the share of enquiries that become opened matters, and check they are permitted under your conduct rules.",
    },
  ],

  related: {
    services: ["local-seo-services", "google-maps-seo", "content-seo", "google-ads"],
    locations: ["/locations/uk/london/", "/locations/usa/new-york/", "/locations/canada/toronto/"],
    articles: ["sizing-search-opportunities-by-value", "attribution-questions-worth-answering"],
  },

  cta: {
    title: "See which searches bring enquiries your firm can take",
    body: "A growth audit reviews your practice pages, lawyer profiles, directory listings and enquiry data, and returns a prioritised plan for your compliance lead to approve.",
  },
};
