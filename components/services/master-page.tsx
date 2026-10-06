import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, CalendarCheck, Check, ChevronRight, Quote, UserRoundCheck } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { ArticleCover } from "@/components/resources/article-cover";
import { Faqs } from "@/components/services/page-parts";
import { StickyCta } from "@/components/services/sticky-cta";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { SignalField } from "@/components/visuals/signal-field";
import { getCaseStudy } from "@/data/case-studies";
import { photos, type PhotoKey } from "@/data/images";
import { getIndustry } from "@/data/industries";
import { getCountry } from "@/data/locations";
import { articles } from "@/data/resources";
import { getService } from "@/data/services";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { categoryName, formatDate } from "@/lib/resources";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { Service, ServiceCategoryId, ServiceMaster } from "@/types";

const eyebrow = "label-mono text-muted";

/* Photographs and the reviewing team differ by discipline, so pages in different groups do not share pictures. */
const byCategory: Record<ServiceCategoryId, { team: string; why: PhotoKey; work: PhotoKey }> = {
  "search-ai": { team: "search team", why: "strategyWhiteboard", work: "analystDesk" },
  performance: { team: "paid media team", why: "analystScreens", work: "teamMeeting" },
  "content-social": { team: "content team", why: "teamWorkshop", work: "teamOffice" },
  "conversion-automation": { team: "conversion team", why: "teamOffice", work: "analystScreens" },
  "web-digital": { team: "web team", why: "teamMeeting", work: "strategyWhiteboard" },
};
const h2 = "mt-4 text-h2 font-semibold text-navy";
const band = "scroll-mt-20 py-12 md:py-16 lg:py-20";


/** Link text that names the page it leads to. */
function linkLabel(href: string) {
  const target = getService(href.replaceAll("/", ""));
  return target ? `${target.name} services` : "Read more";
}

/**
 * The master service page. One architecture; every word, picture, question
 * and link on it comes from the service's own record, so no two pages built
 * on it say the same thing.
 */
export function MasterServicePage({ service, master, visual }: { service: Service; master: ServiceMaster; visual: React.ReactNode }) {
  const path = `/${service.slug}/`;
  const category = serviceCategories.find((c) => c.id === service.category)!;
  const action = service.cta ?? cta.audit.label;
  const look = byCategory[service.category];
  const related = service.related.map(getService).filter((s) => s !== undefined);
  const industries = master.industries.map(getIndustry).filter((i) => i !== undefined);
  const markets = master.markets.map(getCountry).filter((c) => c !== undefined);
  const scenario = master.scenario ? getCaseStudy(master.scenario) : undefined;
  const reading = articles.filter((a) => a.relatedServices.includes(service.slug)).slice(0, 3);
  const siblings = category.items.filter((i) => i.href !== path);

  return (
    <article className="overflow-x-clip">
      {/* ---------- Hero ---------- */}
      <header data-hero="dark" className="stage relative overflow-hidden pt-28 pb-12 text-white md:pt-36 md:pb-16">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <SignalField cx={76} cy={46} className="hidden opacity-60 lg:block" />
        <div className="shell relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Breadcrumbs crumbs={[{ name: "Services", href: "/services/" }, { name: category.label, href: `/services/#${category.id}` }, { name: service.name, href: path }]} tone="dark" />
            <p className="label-mono mt-8 text-cyan">{category.label} · {service.name} services</p>
            <h1 className="mt-4 text-[clamp(2.25rem,1.3rem+3.3vw,3.75rem)] leading-[1.1] font-semibold tracking-[-0.035em]">{service.title}</h1>
            <p className="mt-6 max-w-xl text-lead text-white/75">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="service-hero-audit">{action}</CtaLink>
              <CtaLink href="#process" variant="onDark" size="lg" arrow={false} data-cta="service-hero-process">See how it works</CtaLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-white/55">
              <CalendarCheck aria-hidden className="size-4 text-cyan" />
              Reviewed by the SERPMOZ {look.team} on <time dateTime={master.reviewed}>{formatDate(master.reviewed)}</time>
            </p>
          </div>
          <div className="lg:col-span-6">{visual}</div>
        </div>

        <dl className="shell relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {master.facts.map((f) => (
            <div key={f.label} className="bg-navy-deep/80 p-5">
              <dt className="label-mono text-[0.625rem] text-cyan">{f.label}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug font-medium text-white/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>


      {/* ---------- The answer, then the problem ---------- */}
      <section id="overview" aria-labelledby="overview-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className={eyebrow}>In short</p>
            <h2 id="overview-title" className={h2}>{master.answer.question}</h2>
            <p id="answer" className="mt-6 text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-relaxed text-ink">{master.answer.text}</p>
          </div>
          <aside aria-label="Key takeaways" className="rounded-panel bg-blue-wash p-6 md:p-8 lg:col-span-5">
            <h3 className="label-mono text-blue-ink">Key takeaways</h3>
            <ul className="mt-4 space-y-4">
              {master.answer.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy text-white"><Check aria-hidden className="size-3" strokeWidth={3} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="shell mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className={eyebrow}>The problem</p>
            <h2 className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-navy">Signs it is time to rethink {service.name}.</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {service.problems.map((p, i) => (
              <li key={p} className="rounded-2xl border border-line bg-canvas p-5">
                <span className="tabular text-sm font-semibold text-orange-ink">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-[1.0625rem] leading-snug font-medium tracking-[-0.01em] text-ink">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Why it matters ---------- */}
      <section aria-label={`Why ${service.name} matters`} className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[1.75rem] bg-navy text-white md:rounded-[2.25rem] lg:grid-cols-12">
          <Photo photo={photos[look.why]} sizes="(min-width: 1024px) 40vw, 100vw" className="h-56 lg:col-span-5 lg:h-auto" />
          <div className="p-7 md:p-12 lg:col-span-7">
            <Quote aria-hidden className="size-8 text-orange" />
            <h2 className="sr-only">Why {service.name} matters</h2>
            <p className="mt-5 text-[clamp(1.25rem,1rem+1.1vw,1.875rem)] leading-[1.35] font-medium tracking-[-0.02em]">{service.why}</p>
          </div>
        </div>
      </section>

      {/* ---------- What is included ---------- */}
      <section id="included" aria-labelledby="included-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className={eyebrow}>What is included</p>
              <h2 id="included-title" className={h2}>What do our {service.name} services include?</h2>
            </div>
            <p className="text-lead text-muted lg:col-span-5">{service.summary} The scope is set by the audit: you get the parts you need, in the order that pays back soonest.</p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {master.pillars.map((p, i) => (
              <li key={p.title} className={cn("group flex flex-col rounded-panel p-6 md:p-7", i === 0 ? "stage text-white" : i % 3 === 1 ? "bg-canvas" : i % 3 === 2 ? "bg-blue-wash" : "bg-orange-wash")}>
                <span className={cn("tabular text-sm font-semibold", i === 0 ? "text-cyan" : "text-blue-ink")}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={cn("mt-3 text-[1.375rem] leading-tight font-semibold tracking-[-0.025em]", i === 0 ? "text-white" : "text-navy")}>{p.title}</h3>
                <p className={cn("mt-3 text-[0.9375rem] leading-relaxed", i === 0 ? "text-white/75" : "text-muted")}>{p.body}</p>
                <ul className={cn("mt-5 space-y-2 border-t pt-5", i === 0 ? "border-white/15" : "border-navy/10")}>
                  {p.items.map((item) => (
                    <li key={item} className={cn("flex gap-2.5 text-sm", i === 0 ? "text-white/85" : "text-ink")}>
                      <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", i === 0 ? "text-orange" : "text-blue-ink")} />
                      {item}
                    </li>
                  ))}
                </ul>
                {p.href ? (
                  <Link href={p.href} className={cn("mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold underline decoration-1 underline-offset-[5px] transition-colors hover:decoration-orange hover:decoration-2", i === 0 ? "text-white decoration-white/30" : "text-navy decoration-navy/25")}>
                    {linkLabel(p.href)}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- How the channel works ---------- */}
      <section id="how-it-works" aria-labelledby="how-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="scroll-mt-20 rounded-[1.75rem] bg-mist py-12 md:rounded-[2.25rem] md:py-16 lg:py-20">
          <div className="shell">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <p className={eyebrow}>How it works</p>
                <h2 id="how-title" className={h2}>{master.mechanics.heading}</h2>
              </div>
              <p className="text-lead text-muted lg:col-span-5 lg:col-start-8 lg:pt-10">{master.mechanics.intro}</p>
            </div>

            <ol className="mt-10 grid grid-cols-1 gap-3 lg:mt-12 lg:grid-cols-5 lg:gap-0">
              {master.mechanics.stages.map((s, i) => {
                const last = i === master.mechanics.stages.length - 1;
                return (
                  <li key={s.name} className="relative lg:px-2">
                    {/* Connector to the next stage */}
                    {!last ? <ChevronRight aria-hidden className="absolute top-7 -right-2.5 z-10 hidden size-5 text-navy/30 lg:block" /> : null}
                    <div className={cn("flex h-full flex-col rounded-2xl p-5", last ? "bg-navy text-white" : "bg-surface shadow-soft")}>
                      <div className="flex items-center gap-3">
                        <span className={cn("tabular flex size-9 items-center justify-center rounded-full text-sm font-semibold", last ? "bg-orange text-navy" : "bg-navy text-white")}>{i + 1}</span>
                        <h3 className="text-xl font-semibold tracking-[-0.02em]">{s.name}</h3>
                      </div>
                      <p className={cn("mt-4 text-sm leading-relaxed", last ? "text-white/75" : "text-muted")}>{s.happens}</p>
                      <p className={cn("mt-4 border-t pt-4 text-sm leading-relaxed font-medium", last ? "border-white/15 text-white" : "border-line text-ink")}>
                        <span className={cn("label-mono mb-1.5 block text-[0.5625rem]", last ? "text-cyan" : "text-blue-ink")}>What we do</span>
                        {s.we}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section id="process" aria-labelledby="process-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-36">
              <p className={eyebrow}>Process</p>
              <h2 id="process-title" className={h2}>What does a typical {service.name} engagement look like?</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">Timings are typical and depend on site size and how quickly changes can be shipped. You will know the plan, and the reasoning behind it, before execution starts.</p>
              <Link href="/methodology/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">
                Read our full methodology <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {master.timeline.map((t, i) => {
              const last = i === master.timeline.length - 1;
              return (
                <li key={t.title} className="relative grid grid-cols-[2.75rem_1fr] gap-x-5 pb-8 last:pb-0">
                  {!last ? <span aria-hidden className="absolute top-11 left-[1.3125rem] h-[calc(100%-2.75rem)] w-px bg-line-strong" /> : null}
                  <span className={cn("tabular flex size-11 items-center justify-center rounded-full text-sm font-semibold", last ? "bg-orange text-navy" : "bg-navy text-white")}>{i + 1}</span>
                  <div className="rounded-2xl border border-line bg-canvas p-5 md:p-6">
                    <p className="label-mono text-[0.625rem] text-orange-ink">{t.when}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{t.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{t.body}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="What you receive at this stage">
                      {t.outputs.map((o) => (
                        <li key={o} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink shadow-soft">{o}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Deliverables and tools ---------- */}
      <section id="deliverables" aria-labelledby="deliverables-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="stage relative scroll-mt-20 overflow-hidden rounded-[1.75rem] text-white md:rounded-[2.25rem]">
          <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(60%_70%_at_20%_10%,black,transparent)]" />
          <div className="shell relative grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
            <div className="lg:col-span-7">
              <p className="label-mono text-cyan">Deliverables</p>
              <h2 id="deliverables-title" className="mt-4 text-h2 font-semibold">What you receive.</h2>
              <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 border-t border-white/12 py-4 text-[1.0625rem] leading-snug font-medium tracking-[-0.01em] text-white/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-navy"><Check aria-hidden className="size-3" strokeWidth={3} /></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Photo photo={photos[look.work]} sizes="(min-width: 1024px) 380px, 100vw" className="aspect-[4/3] rounded-panel" />
              <h3 className="label-mono mt-6 text-white/60">Technology and tools</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm text-white/85">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/45">Platforms we typically work across. Named for clarity, not as partnerships or endorsements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Results and how the work is divided ---------- */}
      <section id="results" aria-labelledby="results-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className={eyebrow}>Expected business outcomes</p>
            <h2 id="results-title" className={h2}>How is {service.name} success measured?</h2>
            <ol className="mt-8">
              {service.measures.map((m, i) => (
                <li key={m} className="flex items-baseline gap-4 border-t border-line py-4 last:border-b">
                  <span className="label-mono text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold tracking-[-0.02em] text-navy">{m}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-muted">Targets are set after the audit, against your own baseline. We do not promise figures before we have seen the data, and results vary by market and starting point.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className={eyebrow}>Who does what</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { label: "AI accelerates", icon: Bot, items: service.ai, navy: false },
                { label: "Experts decide", icon: UserRoundCheck, items: service.experts, navy: true },
              ].map((c) => (
                <div key={c.label} className={cn("rounded-panel p-6", c.navy ? "bg-navy text-white" : "border border-line bg-canvas")}>
                  <h3 className={cn("flex items-center gap-2.5 text-sm font-semibold", c.navy ? "text-cyan" : "text-blue-ink")}>
                    <c.icon aria-hidden className="size-4.5" />
                    {c.label}
                  </h3>
                  <ul className="mt-4">
                    {c.items.map((item) => (
                      <li key={item} className={cn("border-t py-3 text-[0.9375rem] leading-snug font-medium", c.navy ? "border-white/15" : "border-line text-ink")}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {scenario ? (
          <div className="shell mt-12 lg:mt-16">
            <Link href={`/case-studies/${scenario.slug}/`} className="group relative grid grid-cols-1 overflow-hidden rounded-panel bg-navy text-white sm:grid-cols-[38%_1fr]">
              <Photo photo={photos[scenario.industry as PhotoKey] ?? photos.teamWorkshop} sizes="(min-width: 640px) 38vw, 100vw" wash="strong" className="h-44 sm:h-auto" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="p-6 md:p-9">
                <Badge variant="dark" dot>{scenario.illustrative ? "Illustrative Growth Scenario" : "Case study"}</Badge>
                <h3 className="mt-4 max-w-xl text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] leading-snug font-semibold tracking-[-0.025em]">{scenario.title}</h3>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-white/70">{scenario.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">See how we would approach it <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </div>
        ) : null}
      </section>

      {/* ---------- Comparison ---------- */}
      <section id="compare" aria-labelledby="compare-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="scroll-mt-20 rounded-[1.75rem] bg-blue-tint py-12 md:rounded-[2.25rem] md:py-16 lg:py-20">
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className={eyebrow}>Compare</p>
              <h2 id="compare-title" className={h2}>{master.comparison.heading}</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink/80">{master.comparison.intro}</p>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-x-auto rounded-panel bg-surface shadow-soft">
                <table className="w-full table-fixed text-left">
                  <caption className="sr-only">{master.comparison.columns[0]} compared with {master.comparison.columns[1]}</caption>
                  <thead>
                    <tr>
                      <td className="w-[5.25rem] p-3 sm:w-36 sm:p-5" />
                      <th scope="col" className="bg-navy p-3 text-base font-semibold tracking-[-0.02em] text-white sm:p-5 sm:text-lg">{master.comparison.columns[0]}</th>
                      <th scope="col" className="p-3 text-base font-semibold tracking-[-0.02em] text-navy sm:p-5 sm:text-lg">{master.comparison.columns[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {master.comparison.rows.map((r) => (
                      <tr key={r.label} className="border-t border-line">
                        <th scope="row" className="label-mono p-3 text-[0.625rem] font-normal text-muted sm:p-5 sm:text-[0.6875rem]">{r.label}</th>
                        <td className="bg-navy/[0.04] p-3 text-sm font-medium text-ink sm:p-5 sm:text-[0.9375rem]">{r.a}</td>
                        <td className="p-3 text-sm text-ink sm:p-5 sm:text-[0.9375rem]">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 flex flex-col gap-4 rounded-panel bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-[1.0625rem] leading-relaxed"><span className="label-mono mb-1 block text-[0.625rem] text-cyan">Our view</span>{master.comparison.verdict}</p>
                <CtaLink href={master.comparison.link.href} variant="onDark" size="md" className="shrink-0">{master.comparison.link.label}</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Who it is for, by sector and market ---------- */}
      <section id="fit" aria-labelledby="fit-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className={eyebrow}>Who it is for</p>
            <h2 id="fit-title" className={h2}>Is {service.name} right for your business?</h2>
            <ul className="mt-8">
              {service.audience.map((a) => (
                <li key={a} className="flex items-center gap-4 border-t border-line py-4 last:border-b">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink"><UserRoundCheck aria-hidden className="size-4.5" /></span>
                  <span className="text-[1.0625rem] leading-snug font-medium tracking-[-0.01em] text-ink">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className={eyebrow}>{service.name} by industry</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}/`} className="group relative block overflow-hidden rounded-2xl bg-navy text-white">
                    <Photo photo={photos[i.slug as PhotoKey] ?? photos.teamOffice} sizes="(min-width: 1024px) 200px, 45vw" wash="strong" className="aspect-[4/3]" imgClassName="transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-sm font-semibold">
                      {i.name}
                      <ArrowUpRight aria-hidden className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className={cn(eyebrow, "mt-8")}>{service.name} by market</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link href={`/locations/${m.slug}/`} className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">
                    <span className="label-mono text-[0.625rem] text-orange-ink">{m.short}</span>
                    {m.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-blue-ink hover:underline hover:underline-offset-4">All markets <ArrowRight aria-hidden className="size-4" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" aria-labelledby="faqs-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className="scroll-mt-20 rounded-[1.75rem] bg-canvas py-12 md:rounded-[2.25rem] md:py-16 lg:py-20">
          <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className={eyebrow}>Questions</p>
              <h2 id="faqs-title" className={h2}>{service.name} services: frequently asked questions.</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">Something we have not covered?</p>
              <CtaLink href={cta.strategist.href} variant="outline" size="md" className="mt-4">{cta.strategist.label}</CtaLink>
            </div>
            <div className="lg:col-span-8"><Faqs faqs={master.faqs} /></div>
          </div>
        </div>
      </section>

      {/* ---------- Related: services, then reading ---------- */}
      <section aria-labelledby="related-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Related services</p>
          <h2 id="related-title" className={h2}>What works best alongside {service.name}?</h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/${r.slug}/`} className="group flex h-full flex-col rounded-panel border border-line bg-canvas p-6 transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white">
                  <span className="flex items-center justify-between">
                    <span className="text-xl font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-white">{r.name}</span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange"><ArrowUpRight aria-hidden className="size-4" /></span>
                  </span>
                  <span className="mt-3 text-[0.9375rem] leading-relaxed text-muted transition-colors group-hover:text-white/75">{r.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted">
            <span>More in {category.label}:</span>
            {siblings.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-full border border-line px-3 py-1 text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">{s.name}</Link>
            ))}
          </p>

          {reading.length ? (
            <div className="mt-14 lg:mt-16">
              <p className={eyebrow}>Further reading</p>
              <h2 className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">From SERPMOZ Research.</h2>
              <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                {reading.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/resources/${a.slug}/`} className="group block">
                      <ArticleCover slug={a.slug} category={a.category} className="aspect-[16/9] rounded-2xl" />
                      <p className="label-mono mt-4 text-[0.625rem] text-blue-ink">{categoryName(a.category)}</p>
                      <h3 className="mt-1.5 text-lg leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{a.title}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <FinalCta action={action} />
      <StickyCta label={action} href={cta.audit.href} note={`Have a strategist review your ${service.name}.`} />

      <JsonLd
        data={[
          webPageSchema({ path, title: service.metaTitle, description: service.metaDescription, reviewed: master.reviewed, speakable: ["#answer"] }),
          serviceSchema({
            name: `${service.name} services`,
            summary: service.metaDescription,
            path,
            category: category.label,
            areaServed: markets.map((m) => m.name),
            audience: service.audience,
            includes: master.pillars.map((p) => ({ name: p.title, path: p.href })),
          }),
          faqSchema(master.faqs),
        ]}
      />
    </article>
  );
}
