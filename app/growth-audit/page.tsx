import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { GrowthAuditForm } from "@/components/forms/growth-audit-form";
import { AuditCta } from "@/components/layout/audit-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { AiExpertSplit, Block, Faqs, Prose, RuledRows } from "@/components/services/page-parts";
import { ArrowLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { SignalField } from "@/components/visuals/signal-field";
import { photos } from "@/data/images";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Growth Audit: Find Your Highest-Impact Opportunities",
  description:
    "Request a SERPMOZ growth audit. A strategist reviews your search visibility, AI search presence, paid media, content, conversion and tracking, and shows you what to fix first.",
  path: "/growth-audit/",
};

export const metadata: Metadata = buildMetadata(meta);

const promises = [
  "Reviewed by a growth strategist, with AI-assisted analysis",
  "Findings in priority order, with the evidence shown",
  "No obligation to work with us afterwards",
];

const covers = [
  {
    title: "Search visibility",
    body: "How your site performs in organic and local search: technical health, the queries you appear for, the commercially important ones you do not, and how that compares with the competitors you name.",
  },
  {
    title: "AI search presence",
    body: "Whether AI assistants and AI-generated search answers mention your brand when buyers ask about your category, what they say, and which sources they draw on.",
  },
  {
    title: "Paid media efficiency",
    body: "Account structure, targeting, search terms, creative and landing pages, read against what the spend is producing. This part needs read-only access to your ad accounts.",
  },
  {
    title: "Content",
    body: "What you have published, what it is for, where it overlaps or competes with itself, and what is missing for the questions buyers ask before they choose.",
  },
  {
    title: "Conversion",
    body: "The paths from landing to enquiry or purchase: clarity of the offer, friction in forms and checkout, page speed and behaviour on mobile.",
  },
  {
    title: "Tracking",
    body: "Whether your analytics, tags and conversion events record what they claim to, and whether leads can be traced back to the channel that produced them.",
  },
];

const receive = [
  { title: "A written summary of findings", body: "The main issues and opportunities across the six areas, in plain language." },
  { title: "A priority order", body: "What we would address first, second and later, and what we would leave alone." },
  { title: "The reasoning", body: "The evidence behind each point, so you can check it or hand it to your own team." },
  { title: "A conversation with the strategist", body: "A call to walk through the findings and answer questions." },
  { title: "A recommended next step", body: "Which engagement model would fit, if any. Sometimes the answer is that you can fix it in-house." },
];

const steps = [
  {
    title: "You send the request",
    body: "The form above takes a few minutes. Tell us about the business, the goal and the channels you run today.",
  },
  {
    title: "We confirm scope and access",
    body: "We reply by email to confirm what the audit will cover and ask for any read-only access that would help, such as analytics, Search Console or ad accounts. Access is optional; the audit goes deeper with it.",
  },
  {
    title: "A strategist reviews your situation",
    body: "AI tools process the crawl, keyword, competitor and account data. A strategist reads the results, checks them against your market and decides what matters.",
  },
  {
    title: "We walk you through the findings",
    body: "You receive the written summary and a call to discuss it. What you do with it is up to you.",
  },
];

const suits = [
  "You are investing in marketing and cannot say with confidence what is working.",
  "Traffic is steady or growing, but leads and sales are not following.",
  "Competitors appear in search results and AI answers where you do not.",
  "You are about to commit budget and want an independent view first.",
  "You have a new marketing lead who needs a clear picture quickly.",
];

const lessUseful = [
  "The website has not launched yet. A conversation about planning will serve you better.",
  "You need a single task done this week, not a review.",
  "You are looking for a guaranteed ranking or a guaranteed number of leads.",
];

const faqs = [
  {
    q: "What do you need from us?",
    a: "To begin, only the details in the form. Read-only access to analytics, Search Console and ad accounts makes the audit more specific, and we will ask for it by email. If you would rather not share access, we work from what is publicly visible and say clearly where that limits the findings.",
  },
  {
    q: "How long does the audit take?",
    a: "It depends on the size of the site, the number of channels and how quickly access is arranged. We give you a date when we confirm the scope, instead of quoting a number here that might not hold for your case.",
  },
  {
    q: "Is the audit automated?",
    a: "No. AI tools do the data-heavy parts, such as crawling, clustering queries and sampling AI answers. A strategist interprets the results, removes what is not relevant to your business and writes the recommendations.",
  },
  {
    q: "Will you tell us how much growth to expect?",
    a: "No. An audit can show where the gaps are and which are likely to matter most. It cannot honestly predict rankings, traffic or revenue, because those depend on competitors, platforms and execution. Targets are set later, against your own baseline, if we work together.",
  },
  {
    q: "What happens after the audit?",
    a: "You decide. If the findings point to work we can help with, we will propose a scope and an engagement model with the reasoning behind it. If they point to something your team can handle, we will say so.",
  },
];

export default function GrowthAuditPage() {
  return (
    <>
      <header className="stage relative overflow-hidden pt-32 pb-14 text-white md:pt-36 md:pb-20">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <SignalField cx={30} cy={40} className="hidden opacity-50 lg:block" />
        <div className="shell relative grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-6 lg:pt-2">
            <Breadcrumbs crumbs={[{ name: "Growth Audit", href: meta.path }]} tone="dark" />
            <p className="label-mono mt-10 text-cyan">Growth Audit</p>
            <h1 id="growth-audit-title" className="mt-4 text-[clamp(2rem,1.35rem+2.6vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.035em] text-balance">
              Find the Highest-Impact Opportunities in Your Digital Growth.
            </h1>
            <p className="mt-6 max-w-xl text-lead text-white/75">
              Tell us about your business. A growth strategist will review how you are found, how your budget is working and
              where enquiries are being lost, then show you what to address first.
            </p>
            <ul className="mt-8 max-w-xl border-b border-white/12">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 border-t border-white/12 py-3.5 text-[0.9375rem] text-white/85">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-cyan" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 hidden text-sm text-white/55 lg:block">
              Not ready for an audit?{" "}
              <Link href="/contact/" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Send a general enquiry
              </Link>
              .
            </p>
          </div>
          <div className="min-w-0 lg:col-span-6">
            <GrowthAuditForm
              variant="audit"
              id="growth-audit-form"
              labelledBy="growth-audit-title"
              className="shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] md:p-7"
            />
          </div>
        </div>
      </header>

      <Block label="What the audit covers" title="Six areas, read as one system." className="border-t-0">
        <Prose className="mb-10">
          <p>
            Growth problems rarely sit in one channel. A paid campaign underperforms because the landing page is slow. Good
            content goes unseen because of a technical fault. So the audit looks at the whole path, from being found to
            being chosen.
          </p>
        </Prose>
        <RuledRows rows={covers} />
      </Block>

      <Block label="What you receive" title="Findings you can act on, with or without us." className="bg-surface">
        <ul className="border-b border-line">
          {receive.map((r) => (
            <li key={r.title} className="grid gap-x-8 gap-y-1 border-t border-line py-5 md:grid-cols-[minmax(0,17rem)_1fr]">
              <h3 className="flex gap-3 text-lg font-semibold tracking-[-0.015em] text-navy">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-blue-ink" />
                {r.title}
              </h3>
              <p className="pl-7 text-[1.0625rem] leading-relaxed text-muted md:pl-0">{r.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <section className="border-t border-line py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label-mono text-muted">How it works</p>
            <h2 className="mt-4 max-w-sm text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              Four steps from request to findings.
            </h2>
            <Photo
              photo={photos.analystDesk}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="mt-8 aspect-[4/3] rounded-panel lg:aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-8">
            <ol className="border-b border-line">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-7 md:grid-cols-[4rem_1fr] md:py-8">
                  <span className="tabular text-2xl leading-none font-semibold tracking-[-0.04em] text-ink/20 md:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{s.title}</h3>
                    <p className="mt-2 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ArrowLink href="/methodology/" className="mt-8">See the full methodology</ArrowLink>
          </div>
        </div>
      </section>

      <Block label="Who it suits" title="Useful when something is not adding up." className="bg-surface">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="label-mono text-blue-ink">A good fit if</h3>
            <ul className="mt-4 border-b border-line">
              {suits.map((s) => (
                <li key={s} className="flex gap-3 border-t border-line py-4 text-[1.0625rem] leading-relaxed text-ink">
                  <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-blue-ink" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label-mono text-muted">Less useful if</h3>
            <ul className="mt-4 border-b border-line">
              {lessUseful.map((s) => (
                <li key={s} className="flex gap-3 border-t border-line py-4 text-[1.0625rem] leading-relaxed text-muted">
                  <Minus aria-hidden className="mt-1.5 size-4 shrink-0 text-line-strong" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      <Block label="Honest expectations" title="What an audit can and cannot tell you.">
        <Prose>
          <p>
            <strong>The audit is a review, not a forecast.</strong> It shows where visibility, budget and conversions are
            being lost and which gaps are most likely to matter. It does not promise rankings, traffic, leads or revenue,
            and we will not attach numbers to opportunities that we cannot support.
          </p>
          <p>
            Its depth depends on what we can see. With access to your analytics and ad accounts the findings are specific.
            Without it, we work from public data and tell you where that leaves uncertainty.
          </p>
        </Prose>
        <div className="mt-10">
          <AiExpertSplit
            ai={["Crawling and technical checks", "Clustering queries by intent", "Sampling AI answers for your category", "Scanning ad accounts for waste"]}
            experts={["Which findings matter for your business", "How you compare with real competitors", "The order to address things in", "What to leave alone"]}
          />
        </div>
      </Block>

      <Block label="Questions" title="Before you request one." className="bg-surface">
        <Faqs faqs={faqs} />
        <ArrowLink href="/engagement-models/" className="mt-8">See how engagements are structured</ArrowLink>
      </Block>

      <AuditCta
        location="growth-audit"
        title="Ready when you are."
        body="The form takes a few minutes. A strategist reads every request and replies by email."
        href="#growth-audit-form"
        single
      />
      <JsonLd data={[webPageSchema(meta), faqSchema(faqs)]} />
    </>
  );
}
