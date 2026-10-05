/**
 * Starter legal copy describing what this website actually does.
 * IMPORTANT: have these reviewed by qualified counsel for the jurisdictions
 * you operate in before launch, and add the registered company details.
 */
export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const updated = "2026-10-05";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How SERPMOZ collects, uses and protects personal information submitted through serpmoz.com.",
    updated,
    intro:
      "This policy explains what personal information we collect through serpmoz.com, why we collect it and the choices you have.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you submit the growth audit or contact form we collect the details you enter: name, business name, work email, phone number, website, country, industry, budget range, growth goal, services of interest and your message.",
          "If analytics is enabled, we collect standard usage information such as pages viewed, approximate location derived from IP address, device and browser type, and referring site.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "We use form submissions to respond to your enquiry, prepare a growth audit and, where relevant, propose services. We do not use your details for unrelated marketing without your consent.",
          "We use analytics information in aggregate to understand how the site is used and to improve it.",
        ],
      },
      {
        heading: "Sharing",
        body: [
          "We do not sell personal information. We share it only with service providers who process it on our behalf, such as hosting, CRM and email providers, under appropriate confidentiality and data protection terms, or where the law requires it.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "We keep enquiry information for as long as needed to respond and to maintain a record of our dealings with you, and then delete or anonymise it unless a longer period is required by law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, and to withdraw consent. To make a request, contact us using the details on the contact page.",
        ],
      },
      {
        heading: "Security",
        body: [
          "Form submissions are transmitted over encrypted connections and validated on our servers. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Changes",
        body: ["We may update this policy from time to time. The date at the top of the page shows when it was last revised."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    description: "The terms that apply to your use of the SERPMOZ website, including content, intellectual property and liability.",
    updated,
    intro: "These terms apply to your use of serpmoz.com. By using the site you agree to them.",
    sections: [
      {
        heading: "Use of the site",
        body: [
          "You may use this site for lawful purposes only. You must not attempt to disrupt it, gain unauthorised access to it or use automated means to submit forms.",
        ],
      },
      {
        heading: "Content",
        body: [
          "The content on this site is provided for general information. It is not professional advice for your specific circumstances, and you should not rely on it as such.",
          "Product interfaces and figures shown on this site are illustrative unless stated otherwise.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The SERPMOZ name, logo, site design and content belong to SERPMOZ or its licensors. You may not reproduce them without permission, other than for personal, non-commercial reference.",
        ],
      },
      {
        heading: "Services",
        body: [
          "Any services we provide are governed by a separate written agreement. Nothing on this site is an offer capable of acceptance or a guarantee of results.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "To the extent permitted by law, SERPMOZ is not liable for loss arising from use of, or reliance on, this site.",
        ],
      },
      {
        heading: "Changes",
        body: ["We may revise these terms. Continued use of the site after a change means you accept the revised terms."],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "How serpmoz.com uses cookies and similar technologies, which ones may be set and how you can manage them.",
    updated,
    intro: "This policy explains how serpmoz.com uses cookies and similar technologies.",
    sections: [
      {
        heading: "What cookies are",
        body: ["Cookies are small text files stored on your device by your browser. They are used to make sites work and to understand how they are used."],
      },
      {
        heading: "Cookies we use",
        body: [
          "The site itself does not need cookies to function.",
          "If analytics or tag management is enabled, those tools may set cookies to measure visits and page views. Where required by law, they will be loaded only with your consent.",
        ],
      },
      {
        heading: "Managing cookies",
        body: ["You can block or delete cookies in your browser settings. Doing so will not prevent you from using this site."],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description: "Important information about the content, illustrations and claims on serpmoz.com.",
    updated,
    intro: "Please read this alongside our Terms of Use.",
    sections: [
      {
        heading: "No guarantee of results",
        body: [
          "Marketing outcomes depend on many factors outside any provider’s control, including competition, market conditions, platform changes and your own product and operations. SERPMOZ does not guarantee rankings, visibility in AI-generated answers, traffic, leads or revenue.",
        ],
      },
      {
        heading: "Illustrative data",
        body: [
          "Dashboards, charts, scores and figures shown in product previews on this site are illustrative samples. They do not represent the results of any client or a promise of performance.",
        ],
      },
      {
        heading: "Third-party platforms",
        body: [
          "References to search engines, AI assistants, advertising platforms and other third-party products are for descriptive purposes. SERPMOZ is independent of those companies unless a formal partnership is expressly stated. All trademarks belong to their respective owners.",
        ],
      },
      {
        heading: "General information",
        body: ["Content on this site is general in nature and is not advice tailored to your situation."],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    description: "Our commitment to making serpmoz.com usable by everyone, and how to report a problem.",
    updated,
    intro: "We want everyone to be able to use this site, whatever their device or ability.",
    sections: [
      {
        heading: "What we have done",
        body: [
          "The site is built with semantic HTML, keyboard-operable navigation and forms, visible focus indicators, text alternatives for meaningful graphics and colour contrast chosen with WCAG 2.2 AA in mind.",
          "Animations respect the reduced-motion setting in your operating system.",
        ],
      },
      {
        heading: "Known limitations",
        body: [
          "Product preview charts are decorative illustrations; the figures they show are also presented as text. We have not yet commissioned an independent accessibility audit.",
        ],
      },
      {
        heading: "Tell us about a problem",
        body: ["If something on this site does not work for you, please let us know through the contact page and we will do our best to fix it."],
      },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug)!;
}
