import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, LinkList, MeasuresPanel, Prose, RuledRows } from "@/components/services/page-parts";
import { Badge, SampleBadge } from "@/components/ui/badge";
import { CtaLink } from "@/components/ui/cta-link";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/case-studies";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

const clip = (s: string) => (s.length > 158 ? `${s.slice(0, s.lastIndexOf(" ", 155))}…` : s);

/** Illustrative scenarios are labelled in the title and kept out of the index. Real case studies are indexed. */
const metaFor = (c: CaseStudy) => ({
  title: c.illustrative ? `Illustrative Growth Scenario: ${c.title}` : c.title,
  description: clip(c.illustrative ? `An illustrative scenario, not a client result. ${c.summary}` : c.summary),
  path: `/case-studies/${c.slug}/`,
  noindex: c.illustrative,
  absoluteTitle: true,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  return c ? buildMetadata(metaFor(c)) : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const meta = metaFor(c);
  const industry = getIndustry(c.industry);
  const services = c.services.map(getService).filter((s) => s !== undefined);
  const results = c.illustrative ? [] : (c.results ?? []);

  const facts = [
    { term: "Industry", value: industry ? <Link href={`/industries/${industry.slug}/`} className="text-blue-ink underline underline-offset-4">{industry.name}</Link> : c.industry },
    { term: "Market", value: c.market },
    { term: c.illustrative ? "Business profile" : "Client", value: c.illustrative ? c.profile : (c.client ?? c.profile) },
  ];

  return (
    <>
      <PageHero
        tone="light"
        crumbs={[
          { name: "Case Studies", href: "/case-studies/" },
          { name: c.illustrative ? "Illustrative scenario" : "Case study", href: meta.path },
        ]}
        label={c.illustrative ? "Case studies · Scenario" : "Case study"}
        title={c.title}
        lead={
          c.illustrative ? (
            <>
              <SampleBadge className="px-3 py-1.5 text-xs">Illustrative Growth Scenario</SampleBadge>
              <p className="mt-4">
                This is not a client result. It describes a realistic starting situation and the plan we would propose for it. No company is named and no results are claimed.
              </p>
            </>
          ) : (
            <>
              <Badge variant="success" className="px-3 py-1.5 text-xs">Published with client approval</Badge>
              <p className="mt-4">{c.summary}</p>
            </>
          )
        }
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      {/* Facts strip */}
      <section className="border-b border-line bg-surface">
        <dl className="shell grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)]">
          {facts.map((f) => (
            <div key={f.term} className="min-w-0 border-t border-line py-6 first:border-t-0 md:border-t-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="label-mono text-muted">{f.term}</dt>
              <dd className="mt-2 text-[1.0625rem] leading-snug font-medium text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Situation beside constraints */}
      <section className="py-16 md:py-24">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <p className="label-mono text-muted">The situation</p>
            <h2 className="mt-4 max-w-xl text-h2 font-semibold text-navy">Where the business starts.</h2>
            <Prose className="mt-8 text-ink/85">
              {c.situation.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </div>
          <aside className="min-w-0 lg:col-span-4 lg:col-start-9">
            <div className="rounded-panel border border-line bg-surface p-6 md:p-7">
              <h2 className="label-mono text-muted">Constraints</h2>
              <ul className="mt-4">
                {c.constraints.map((k) => (
                  <li key={k} className="flex gap-3 border-t border-line py-3.5 text-[0.9375rem] leading-snug text-ink first:border-t-0">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Diagnosis: navy band */}
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="shell">
          <p className="label-mono text-cyan">The diagnosis</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold">
            {c.illustrative ? "What the diagnostic would be expected to show." : "What the diagnostic showed."}
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-x-10 border-b border-white/15 md:grid-cols-3">
            {c.diagnosis.map((d, i) => (
              <li key={d.title} className="min-w-0 border-t border-white/15 py-7">
                <span className="label-mono text-white/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{d.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/75">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plan */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">The plan</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">
            {c.illustrative ? "What we would do, in order." : "What we did, in order."}
          </h2>
          <div className="mt-12">
            <RuledRows rows={c.approach} />
          </div>
        </div>
      </section>

      {/* Real case studies only */}
      {results.length ? (
        <Block label="Result" title="Measured change." className="bg-surface">
          <ul className="grid grid-cols-1 border-b border-line sm:grid-cols-2 sm:gap-x-10">
            {results.map((r) => (
              <li key={r.metric} className="min-w-0 border-t border-line py-6">
                <p className="text-h3 font-semibold text-navy">{r.value}</p>
                <p className="mt-1 text-[1.0625rem] font-medium text-ink">{r.metric}</p>
                <p className="mt-1 text-sm text-muted">{r.period} · Source: {r.source}</p>
              </li>
            ))}
          </ul>
        </Block>
      ) : null}

      {/* Measurement and reporting */}
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] xl:gap-16">
          <div className="min-w-0">
            <h2 className="sr-only">What would be measured</h2>
            <MeasuresPanel measures={c.measures} title={c.illustrative ? "What would be measured" : "What was measured"} />
          </div>
          <div className="min-w-0">
            <p className="label-mono text-muted">Reporting</p>
            <h2 className="mt-4 max-w-xl text-h2 font-semibold text-navy">What a result report would contain.</h2>
            <ul className="mt-8 border-b border-line">
              {c.reportContents.map((r) => (
                <li key={r} className="flex gap-4 border-t border-line py-4 text-[1.0625rem] leading-snug text-ink">
                  <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-blue" />
                  {r}
                </li>
              ))}
            </ul>
            {c.illustrative ? (
              <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                No figures appear on this page because there are none to report. When we publish client work, the numbers come from the client&rsquo;s own systems, with dates and sources, and only with written approval.{" "}
                <Link href="/case-studies/" className="text-blue-ink underline underline-offset-4">How we document results</Link>.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <Block label="Related services" title="The work involved.">
        <LinkList links={services.map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.summary }))} />
        {industry ? (
          <p className="mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
            For how we approach the sector as a whole, see{" "}
            <Link href={`/industries/${industry.slug}/`} className="text-blue-ink underline underline-offset-4">{industry.name} marketing and growth</Link>.
          </p>
        ) : null}
      </Block>

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
