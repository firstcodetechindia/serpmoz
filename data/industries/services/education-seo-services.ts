import type { IndustryServiceRecord } from "@/types";

/**
 * /industries/education/seo-services/
 * Rules: no client names, no figures, no guarantees, no claims about placements
 * or outcomes. Search examples are phrasing patterns, not demand data.
 */
export const record: IndustryServiceRecord = {
  industry: "education",
  service: "seo-services",
  slug: "seo-services",
  name: "SEO for Education",
  audience: "schools, colleges, universities and training providers",

  seo: {
    title: "SEO for Education Institutions: By Programme",
    metaDescription:
      "SEO for education institutions: programme pages, admissions content and technical fixes timed to the intake, measured by applications and enrolments.",
    primaryKeyword: "SEO for education institutions",
    secondaryKeywords: [
      "SEO for colleges",
      "SEO for universities",
      "higher education SEO",
      "SEO for schools",
      "education SEO services",
      "SEO for coaching institutes",
    ],
    searchIntent:
      "An admissions or marketing head at a school, college, university or training provider looking for an SEO provider that understands programme searches and the admission cycle.",
  },

  hero: {
    title: "SEO for education institutions, planned around the admission cycle",
    description:
      "Prospective students and parents search by course, fee, eligibility and admission date long before they fill in a form. SEO for education institutions makes each programme findable for those searches, states outcomes and accreditation accurately, and follows organic visitors from enquiry to application to enrolment, so the work is judged by places filled.",
  },

  facts: [
    { label: "Best for", value: "Institutions with programmes people already search for by name" },
    { label: "Works alongside", value: "Paid search near deadlines, YouTube, WhatsApp nurture and admissions" },
    { label: "Typical horizon", value: "Usually several months, so start well before the intake" },
    { label: "Measured in", value: "Applications and enrolments from organic search, by programme" },
  ],

  answer: {
    question: "What does SEO for education institutions involve?",
    text: "SEO for education institutions is the work of making an institution appear when students and parents search for courses, fees, eligibility and admission dates. It centres on a complete page for every programme, accurate admissions information and a technically sound website. It is timed to the admission cycle and measured by applications and enrolments from organic search, with enquiry counts treated as an early signal only.",
  },

  buyers: {
    heading: "How students and parents search for a place",
    paragraphs: [
      "The search starts months before an application. A student begins with a broad question about a field or career, narrows to a type of qualification, and then searches for named courses with a fee, an eligibility rule, or a city attached. An institution that appears only for its own name meets the student after the shortlist exists. It is why [our work for education](/industries/education/) treats each programme as a product with its own demand.",
      "Two people are often searching for the same place. The student looks at curriculum, campus life, peers and what graduates go on to do. The parent or funder looks at fees, payment schedules, safety, accommodation and recognition of the qualification. They use different words and land on different pages. A site written only for the student leaves the funder's questions to aggregators and forums. Each audience needs answers it can reach from a search result without help.",
      "Demand is seasonal and the window is short. Searches for admission dates, entrance tests and application forms rise around each intake and fall away. Listing and ranking sites hold many course searches and pass the same enquiry to several institutions, so a student has usually seen competitors' fees beside yours. They decide by comparing a few programme pages, asking an AI assistant to summarise the differences, and seeing who replies first. Pages have to be ranking before that window opens.",
    ],
  },

  problems: [
    {
      title: "Programme details locked in a brochure PDF",
      body: "Fees, curriculum and eligibility sit in a downloadable prospectus while the web page carries two paragraphs. Search engines read the thin page, and aggregators with fuller listings outrank the institution for its own course.",
    },
    {
      title: "Admissions pages left over from last year",
      body: "Old intake dates, expired application links and several versions of the same notice stay indexed. Students land on the wrong year, lose confidence, and search engines cannot tell which page is current.",
    },
    {
      title: "One page for a whole department",
      body: "Several degrees, diplomas and specialisations share a single page. None of them can match a search for a named course with its fee or eligibility, so the institution is absent from the most specific, highest-intent queries.",
    },
    {
      title: "Work that starts when admissions open",
      body: "SEO is commissioned as applications begin. New and improved pages need time to be crawled and to earn a position, so the effect arrives after the deadline and the budget is judged a failure.",
    },
    {
      title: "Enquiries counted, enrolments not traced",
      body: "Organic search is reported as form submissions. Nobody can say which programme pages produced applicants who went on to enrol, so effort keeps going to pages that attract casual browsers.",
    },
  ],

  approach: [
    {
      title: "Demand map for every programme",
      body: "We group searches by course, qualification level, fee, eligibility, location and admission stage, then score each group by its value to enrolment and the difficulty of winning it. The result shows which programmes have unmet demand and which are held by aggregators.",
    },
    {
      title: "Programme pages built as products",
      body: "Each course gets one complete page: curriculum, entry requirements, fees and what they include, duration, faculty, accreditation and the application route. The page answers the student and the funder, and carries structured data so search engines can read the facts directly.",
    },
    {
      title: "Admissions content that stays current",
      body: "Dates, eligibility, documents, entrance tests, scholarships and visa guidance live on stable addresses that are updated each cycle, with old notices redirected or archived. That keeps the authority a page has earned and stops last year's deadline appearing in results.",
    },
    {
      title: "Technical clean-up of a large site",
      body: "Institutional sites accumulate subdomains, department microsites, duplicate notices and unlinked documents. We fix crawling, indexation, speed on mobile and internal linking, drawing on the same methods as our [SEO services](/seo-services/), and hand your web team an ordered list of fixes.",
    },
    {
      title: "Content for comparison and AI answers",
      body: "Students ask assistants to compare courses and institutions. We write clear, factual comparisons, eligibility explainers and fee guides with a direct answer at the start, supported by [YouTube content](/youtube-marketing/) where video carries the proof, so the institution can be cited accurately.",
    },
    {
      title: "Tracking from enquiry to enrolment",
      body: "Organic visits are connected to enquiries, application starts, completed applications and enrolments in your admissions system, by programme and landing page. Counsellors see what the person read before they call, and priorities are reset on the pages that produce enrolled students.",
    },
  ],

  searches: {
    heading: "Searches worth winning in education",
    intro:
      "Education searches fall into a few recognisable groups, and each one needs a different page. The patterns below illustrate how people phrase their searches, and are not measured demand data.",
    groups: [
      {
        name: "Course and fee searches",
        examples: ["course name + fees", "course name + city", "qualification level + subject + colleges"],
        note: "Send each to a single programme page that states the fee, what it covers and the duration plainly. These are often held by listing sites.",
      },
      {
        name: "Eligibility and admission searches",
        examples: ["course name + eligibility", "institution name + admission date", "course name + application form"],
        note: "Keep one permanent page per topic and update it every cycle. Accuracy matters more than length here, because a wrong date costs an applicant.",
      },
      {
        name: "Parent and funder searches",
        examples: ["institution name + fee structure", "course name + scholarship", "institution name + recognition"],
        note: "Answer these on pages a parent can reach directly from search. State costs, payment stages and recognition in full, without sending them to a counsellor first.",
      },
      {
        name: "Comparison and outcome searches",
        examples: ["course A versus course B", "institution name + reviews", "career + which course"],
        note: "Write fair comparisons and describe outcomes only with data the institution can evidence. AI assistants increasingly answer these searches, so sourcing matters.",
      },
    ],
  },

  rules: [
    {
      title: "Outcomes and placement claims",
      body: "Statements about graduate destinations, salaries or placement must rest on data the institution holds and can show, with the period and method stated. Confirm the wording with your own legal or compliance adviser.",
    },
    {
      title: "Accreditation, recognition and rankings",
      body: "Approvals, affiliations and ranking positions should be described exactly as the awarding body states them, and removed when they lapse. Rules on such claims differ by country, so confirm each with your legal or compliance adviser.",
    },
    {
      title: "Student and minor data",
      body: "Enquiry forms often collect details from people under the age of majority. Consent, retention and sharing with partners are governed by data protection law that varies by market. Take advice from your own legal or compliance adviser.",
    },
  ],

  measures: [
    "Qualified enquiries from organic search, split by programme and intake",
    "Application starts and completed applications that began with an organic visit",
    "Enrolments traced to organic landing pages, by programme",
    "Share of course searches where the institution appears above aggregators",
    "Cost per enrolment from organic search compared with paid channels",
  ],

  timeline: [
    {
      phase: "Audit and demand map",
      when: "Weeks 1 to 4, typically",
      body: "A crawl of the site and its subdomains, an inventory of programme and admissions pages, and a map of course searches scored by value. We also check how enquiries are recorded today.",
    },
    {
      phase: "Foundations and priority programmes",
      when: "Months 2 to 3, typically",
      body: "Technical fixes go to your web team in priority order. The programmes with the clearest unmet demand get complete pages first, and admissions content is moved to permanent, current addresses.",
    },
    {
      phase: "Expansion before the intake",
      when: "Months 3 to 6, depending on the cycle",
      body: "Remaining programmes, parent content, comparisons and eligibility guides are published, and credibility is built through coverage and references. Timing is set backwards from the admission window so pages are established before searches peak.",
    },
    {
      phase: "Intake review and next cycle",
      when: "After each intake",
      body: "Enquiries, applications and enrolments are read by programme and landing page. What produced enrolled students gets more effort, weak pages are revised, and the calendar is reset for the following intake.",
    },
  ],

  faqs: [
    {
      q: "How long does SEO take for a college or university?",
      a: "It depends on the state of the site, how competitive each programme is and how quickly changes go live. Technical corrections can show within weeks. Positions for contested course searches usually take several months. Because demand peaks around admissions, the practical answer is to begin well ahead of the intake you want to influence.",
    },
    {
      q: "How much does SEO for an education institution cost?",
      a: "Cost is driven by the number of programmes and campuses, the size and age of the website, how many subdomains and languages are involved, and how much writing and development your own teams can carry. We scope it after a [growth audit](/growth-audit/), with the reasoning for each part set out.",
    },
    {
      q: "Can we outrank aggregator and listing sites for our own courses?",
      a: "Often for searches that include your institution or a specific programme, because you hold the authoritative facts. For broad searches such as a subject plus a city, listing sites are strong and may stay ahead. The sensible plan is to own your named course searches fully and compete selectively on broader ones.",
    },
    {
      q: "Should we still run paid search if we invest in SEO?",
      a: "Usually yes. Paid search is useful close to deadlines and for programmes with unfilled places, because it responds within days. SEO builds a base that keeps producing enquiries between campaigns. Planned together, paid data shows which course searches convert, and organic pages are then built for those. Our [Google Ads](/google-ads/) work is planned on the same calendar.",
    },
    {
      q: "Do parents and students need separate pages?",
      a: "They need separate answers more than separate sites. A programme page should serve the student, with clear sections on fees, payment, safety and recognition for the person paying. Some topics, such as fee structure, accommodation and scholarships, deserve their own pages because parents search for them directly. Where families search in another language, those pages should exist in it.",
    },
    {
      q: "How do you handle placement and outcome figures?",
      a: "We publish only what the institution can evidence, with the cohort, period and method beside the figure, and we avoid wording that implies a result for future students. If data is partial, we say what it covers. Final wording goes through your own approvals, and we recommend your legal or compliance adviser confirms it.",
    },
    {
      q: "How do AI assistants affect student search?",
      a: "Students increasingly ask an assistant to shortlist or compare courses. Those answers are assembled from web pages, so institutions with complete, consistent and clearly structured programme facts are easier to cite correctly. Thin pages and facts trapped in documents are often skipped or misreported. We structure content for direct answers.",
    },
  ],

  related: {
    services: ["content-seo", "technical-seo", "google-ads", "youtube-marketing"],
    locations: ["/locations/india/", "/locations/uk/", "/locations/canada/"],
    articles: ["sizing-search-opportunities-by-value", "measuring-ai-search-visibility"],
  },

  cta: {
    title: "See where your programmes are missing from search",
    body: "A growth audit reviews your programme pages, admissions content and enquiry tracking, and shows which course searches are worth pursuing before the next intake. No promised rankings.",
  },
};
