import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Search, ShieldCheck, TriangleAlert } from "lucide-react";
import { HeadingAside } from "@/components/layout/heading-aside";
import { ArticleCover } from "@/components/resources/article-cover";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Faqs } from "@/components/services/page-parts";
import { StickyCta } from "@/components/services/sticky-cta";
import { CtaLink } from "@/components/ui/cta-link";
import { RichText } from "@/components/ui/rich-text";
import { SectionArt } from "@/components/visuals/section-art";
import { SignalField } from "@/components/visuals/signal-field";
import { getIndustry } from "@/data/industries";
import { industryServicePath, industryServicesFor, industryServicesIn } from "@/data/industries/services";
import { getLocationByPath, locationPath } from "@/data/locations";
import { getArticle } from "@/data/resources";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { categoryName } from "@/lib/resources";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { IndustryServiceRecord } from "@/types";

const eyebrow = "label-mono text-muted";
const h2 = "mt-4 text-h2 font-semibold text-navy";
const band = "scroll-mt-20 py-12 md:py-16 lg:py-20";
const inset = "rounded-[1.75rem] py-12 md:rounded-[2.25rem] md:py-16 lg:py-20";
const more = "inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2";

/**
 * A service written for one industry. Every word comes from the record; the
 * links to the industry, the general service, sibling pages, locations and
 * reading are worked out from it.
 */
export function IndustryServicePage({ record: r }: { record: IndustryServiceRecord }) {
  const path = industryServicePath(r);
  const industry = getIndustry(r.industry)!;
  const service = getService(r.service)!;
  const siblings = [...industryServicesIn(r.industry), ...industryServicesFor(r.service)].filter((x) => industryServicePath(x) !== path);
  const services = r.related.services.map(getService).filter((s) => s !== undefined);
  const places = r.related.locations.map(getLocationByPath).filter((l) => l !== undefined);
  const reading = r.related.articles.map(getArticle).filter((a) => a !== undefined);
  const crumbs = [{ name: "Industries", href: "/industries/" }, { name: industry.name, href: `/industries/${industry.slug}/` }, { name: r.name, href: path }];

  return (
    <article className="overflow-x-clip">
      {/* ---------- Hero ---------- */}
      <header data-hero="dark" className="relative overflow-hidden bg-navy-deep pt-28 pb-10 text-white md:pt-32 lg:pb-12">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div aria-hidden className="glow absolute -top-40 right-0 size-[40rem] bg-blue/30" />
        <SignalField cx={78} cy={40} className="hidden opacity-40 lg:block" />
        <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Breadcrumbs crumbs={crumbs} tone="dark" />
            <p className="label-mono mt-8 text-cyan">{service.name} · {industry.name}</p>
            <h1 className="mt-4 text-[clamp(2.125rem,1.3rem+2.9vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.035em]">{r.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lead text-white/75">{r.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="industry-service-hero-audit">{cta.audit.label}</CtaLink>
              <CtaLink href="#approach" variant="onDark" size="lg" arrow={false} data-cta="industry-service-hero-approach">See what the work includes</CtaLink>
            </div>
          </div>
          {/* The direct answer, where both readers and answer engines look first */}
          <aside aria-labelledby="answer-title" className="glass-dark rounded-[1.5rem] p-6 md:p-7 lg:col-span-5">
            <p className="label-mono text-[0.6875rem] text-cyan">In short</p>
            <h2 id="answer-title" className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em]">{r.answer.question}</h2>
            <p id="answer" className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">{r.answer.text}</p>
          </aside>
        </div>
        <dl className="shell relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {r.facts.map((f) => (
            <div key={f.label} className="bg-navy-deep/80 p-5">
              <dt className="label-mono text-[0.625rem] text-cyan">{f.label}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug font-medium text-white/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ---------- How buyers search ---------- */}
      <section id="buyers" aria-labelledby="buyers-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <HeadingAside art="search" className="lg:col-span-4">
            <p className={eyebrow}>The buyer</p>
            <h2 id="buyers-title" className={h2}>{r.buyers.heading}</h2>
          </HeadingAside>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink/85 lg:col-span-7 lg:col-start-6">
            {r.buyers.paragraphs.map((p) => <p key={p.slice(0, 40)}><RichText text={p} /></p>)}
            <p className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <Link href={`/industries/${industry.slug}/`} className={more}>Growth for {industry.name} <ArrowRight aria-hidden className="size-4" /></Link>
              <Link href={`/${service.slug}/`} className={more}>{service.name} in general <ArrowRight aria-hidden className="size-4" /></Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- What goes wrong ---------- */}
      <section id="problems" aria-labelledby="problems-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-mist")}>
          <div className="shell">
            <p className={eyebrow}>The problem</p>
            <h2 id="problems-title" className={cn(h2, "max-w-3xl")}>Where {r.name} usually goes wrong.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {r.problems.map((p, i) => (
                <li key={p.title} className={cn("rounded-2xl bg-surface p-6", i === 0 && "lg:col-span-2")}>
                  <TriangleAlert aria-hidden className="size-5 text-orange-ink" />
                  <h3 className="mt-4 text-lg leading-snug font-semibold tracking-[-0.015em] text-navy">{p.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- What the work includes ---------- */}
      <section id="approach" aria-labelledby="approach-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className={eyebrow}>The work</p>
              <h2 id="approach-title" className={h2}>What {r.name} includes.</h2>
            </div>
            <p className="text-lead text-muted lg:col-span-5">Scoped after the growth audit, so you get the parts you need in the order that pays back soonest.</p>
          </div>
          <ol className="mt-10 border-b border-line lg:mt-12">
            {r.approach.map((a, i) => (
              <li key={a.title} className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-line py-6 lg:grid-cols-12">
                <p className="flex items-baseline gap-4 lg:col-span-5">
                  <span className="tabular text-sm font-semibold text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[clamp(1.125rem,1.05rem+0.5vw,1.375rem)] leading-snug font-semibold tracking-[-0.02em] text-navy">{a.title}</span>
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-ink/85 lg:col-span-7"><RichText text={a.body} /></p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Searches worth winning ---------- */}
      <section id="searches" aria-labelledby="searches-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "relative scroll-mt-20 overflow-clip bg-navy-deep text-white")}>
          <div aria-hidden className="glow absolute -top-32 -left-24 size-[30rem] bg-blue/25" />
          <div className="shell relative">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <p className="label-mono text-cyan">Search demand</p>
                <h2 id="searches-title" className="mt-4 text-h2 font-semibold">{r.searches.heading}</h2>
              </div>
              <p className="text-lead text-white/70 lg:col-span-5 lg:col-start-8 lg:pt-10">{r.searches.intro}</p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {r.searches.groups.map((g) => (
                <li key={g.name} className="glass-dark rounded-2xl p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.015em]">{g.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Typical search patterns">
                    {g.examples.map((e) => (
                      <li key={e} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[0.8125rem] text-white/85">
                        <Search aria-hidden className="size-3.5 text-cyan" />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">{g.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-white/45">Patterns show the kinds of searches, not measured volumes. Demand is sized for your market during the audit.</p>
          </div>
        </div>
      </section>

      {/* ---------- Timeline and measures ---------- */}
      <section id="timeline" aria-labelledby="timeline-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className={eyebrow}>Process</p>
            <h2 id="timeline-title" className={h2}>How the work runs.</h2>
            <ol className="mt-8 border-l border-line-strong">
              {r.timeline.map((t) => (
                <li key={t.phase} className="relative pb-7 pl-7 last:pb-0">
                  <span aria-hidden className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-blue" />
                  <p className="label-mono text-[0.6875rem] text-orange-ink">{t.when}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-[-0.015em] text-navy">{t.phase}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{t.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">Timings are typical and depend on your starting point and how quickly changes can be approved and shipped.</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-panel bg-blue-tint p-6 md:p-7 lg:sticky lg:top-28">
              <p className="label-mono text-blue-ink">Measured in</p>
              <ul className="mt-4 space-y-3">
                {r.measures.map((m) => (
                  <li key={m} className="flex gap-3 text-[0.9375rem] leading-snug text-navy">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-ink" />
                    {m}
                  </li>
                ))}
              </ul>
              <SectionArt kind="growth" className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Rules the work respects ---------- */}
      <section id="rules" aria-labelledby="rules-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-canvas")}>
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className={eyebrow}>Claims and compliance</p>
              <h2 id="rules-title" className={h2}>What the work has to respect.</h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">General guidance, not legal advice. Your own legal or compliance adviser has the final word on what you can say.</p>
            </div>
            <ul className="grid gap-3 lg:col-span-8">
              {r.rules.map((x) => (
                <li key={x.title} className="flex gap-4 rounded-2xl bg-surface p-6">
                  <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-blue-ink" />
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-navy">{x.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{x.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" aria-labelledby="faqs-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <HeadingAside art="talk" className="lg:col-span-4">
            <p className={eyebrow}>Questions</p>
            <h2 id="faqs-title" className={h2}>{r.name}: common questions.</h2>
            <CtaLink href={cta.strategist.href} variant="outline" size="md" className="mt-6">{cta.strategist.label}</CtaLink>
          </HeadingAside>
          <div className="lg:col-span-8"><Faqs faqs={r.faqs} /></div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section aria-labelledby="related-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "bg-mist")}>
          <div className="shell">
            <p className={eyebrow}>Related</p>
            <h2 id="related-title" className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">Where to go next.</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h3 className="label-mono text-muted">Services that work with it</h3>
                <ul className="mt-3 border-t border-line">
                  {siblings.map((s) => (
                    <li key={industryServicePath(s)} className="border-b border-line">
                      <Link href={industryServicePath(s)} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-semibold text-navy hover:text-blue-ink">{s.name}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link>
                    </li>
                  ))}
                  {services.map((s) => (
                    <li key={s.slug} className="border-b border-line">
                      <Link href={`/${s.slug}/`} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-ink hover:text-blue-ink">{s.name}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-mono text-muted">Markets</h3>
                <ul className="mt-3 border-t border-line">
                  {places.map((l) => (
                    <li key={l.slug} className="border-b border-line">
                      <Link href={locationPath(l)} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-ink hover:text-blue-ink">Digital marketing in {l.inSentence}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-mono text-muted">Reading</h3>
                <ul className="mt-3 grid gap-4">
                  {reading.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/resources/${a.slug}/`} className="group flex items-center gap-4">
                        <ArticleCover slug={a.slug} category={a.category} className="aspect-[4/3] w-24 shrink-0 rounded-xl" />
                        <span>
                          <span className="label-mono block text-[0.625rem] text-muted">{categoryName(a.category)}</span>
                          <span className="mt-1 block text-[0.9375rem] leading-snug font-semibold text-navy group-hover:text-blue-ink">{a.title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title={[r.cta.title]} body={r.cta.body} />
      <StickyCta label={cta.audit.label} href={cta.audit.href} note={`Growth audit for ${r.audience}.`} />

      <JsonLd
        data={[
          webPageSchema({ path, title: `${r.seo.title} | SERPMOZ`, description: r.seo.metaDescription, speakable: ["#answer"] }),
          serviceSchema({ name: r.name, summary: r.seo.metaDescription, path, category: service.name, audience: [industry.name] }),
          faqSchema(r.faqs),
        ]}
      />
    </article>
  );
}
