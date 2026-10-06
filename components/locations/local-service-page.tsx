import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CircleSlash } from "lucide-react";
import { HeadingAside } from "@/components/layout/heading-aside";
import { LocationWorldMap } from "@/components/locations/location-world-map";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { ArticleCover } from "@/components/resources/article-cover";
import { AiExpertSplit, Faqs } from "@/components/services/page-parts";
import { StickyCta } from "@/components/services/sticky-cta";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { getIndustry } from "@/data/industries";
import { citiesOf, getLocation, getMarket, locationPath } from "@/data/locations";
import { getLocalService, localServicePath, localServicesIn } from "@/data/locations/services";
import { articles } from "@/data/resources";
import { getService } from "@/data/services";
import { categoryName } from "@/lib/resources";
import { cta } from "@/lib/config/site";
import { faqSchema, locationServiceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { LocalServicePage as Page } from "@/types";

const eyebrow = "label-mono text-muted";
const h2 = "mt-4 text-h2 font-semibold text-navy";
const band = "scroll-mt-20 py-12 md:py-16 lg:py-20";
const inset = "rounded-[1.75rem] py-12 md:rounded-[2.25rem] md:py-16 lg:py-20";

/**
 * One service in one place. The page answers, in order: what the service is,
 * why it matters for a business in this market, who it is for, what is hard,
 * how SERPMOZ runs it, what the client receives, what to expect and what is
 * never promised. The local words come from the page record; what the service
 * includes and delivers comes from the service record, so it is the same on
 * every page for that service and is kept short here, with the service page
 * linked for the detail. Every link is worked out from the two records.
 */
export function LocalServicePage({ page: p }: { page: Page }) {
  const place = getLocation(p.place)!;
  const service = getService(p.service)!;
  const isCity = place.kind === "city";
  const market = isCity ? getMarket(place.parent!)! : place;
  const path = localServicePath(p);

  // Related locations: only the parent market and the places named as nearby (or a market's own cities).
  const nearby = isCity ? citiesOf(market.slug).filter((c) => (place.nearby ?? []).includes(c.slug)) : citiesOf(place.slug);
  const sameService = [...(isCity ? [market] : []), ...nearby].flatMap((l) => {
    const page = getLocalService(p.service, l.slug);
    return page ? [{ label: `${service.name} in ${l.inSentence}`, href: localServicePath(page) }] : [];
  });
  const otherServices = localServicesIn(p.place).filter((x) => x.service !== p.service);
  const sectors = p.sectors.flatMap((s) => {
    const industry = getIndustry(s.slug);
    return industry ? [{ ...s, industry }] : [];
  });
  const includes = (service.master?.pillars ?? service.scope).slice(0, 6);
  const reading = articles.filter((a) => a.relatedServices.includes(service.slug)).slice(0, 3);
  const crumbs = [
    { name: "Locations", href: "/locations/" },
    ...(isCity ? [{ name: market.name, href: locationPath(market) }] : []),
    { name: place.name, href: locationPath(place) },
    { name: service.name, href: path },
  ];
  const text = "text-[1.0625rem] leading-relaxed text-ink/85";

  return (
    <article className="overflow-x-clip">
      {/* ---------- Hero ---------- */}
      <header data-hero="dark" className="stage relative overflow-hidden pt-28 pb-10 text-white md:pt-32 lg:pb-12">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <SignalField cx={74} cy={44} className="hidden opacity-40 lg:block" />
        <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Breadcrumbs crumbs={crumbs} tone="dark" />
            <p className="label-mono mt-8 text-cyan">{service.name} · {place.name}</p>
            <h1 className="mt-4 text-[clamp(2.25rem,1.3rem+3.1vw,3.625rem)] leading-[1.1] font-semibold tracking-[-0.035em]">{p.h1}</h1>
            <p className="mt-6 text-lead text-white/75">{p.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="local-service-audit">{cta.audit.label}</CtaLink>
              <CtaLink href={cta.strategist.href} variant="onDark" size="lg" arrow={false} data-cta="local-service-strategist">{cta.strategist.label}</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-7"><LocationWorldMap location={place} /></div>
        </div>
      </header>

      {/* ---------- In brief, then what the service includes ---------- */}
      <section id="brief" aria-labelledby="answer-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="rounded-panel bg-navy p-6 text-white shadow-float md:p-8 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-cyan">In brief</p>
              <h2 id="answer-title" className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em]">{p.answer.question}</h2>
              <p id="answer" className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">{p.answer.text}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className={eyebrow}>The service</p>
            <h2 className={h2}>What {service.name} includes.</h2>
            <p className={cn("mt-5", text)}>{service.summary}</p>
            <ul className="mt-7 border-b border-line">
              {includes.map((x) => (
                <li key={x.title} className="flex gap-3.5 border-t border-line py-4">
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-blue-ink" strokeWidth={3} />
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-navy">{x.title}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{x.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href={`/${service.slug}/`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">Read the full {service.name} service <ArrowRight aria-hidden className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* ---------- Why it matters in this market ---------- */}
      <section id="context" aria-labelledby="context-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-mist")}>
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <HeadingAside art="search" className="lg:col-span-4">
              <p className={eyebrow}>The market</p>
              <h2 id="context-title" className={h2}>{p.context.heading}</h2>
            </HeadingAside>
            <div className={cn("space-y-5 lg:col-span-7 lg:col-start-6", text)}>
              {p.context.paragraphs.map((x) => <p key={x.slice(0, 40)}>{x}</p>)}
              <p className="pt-1">
                <Link href={locationPath(place)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">Digital marketing for businesses in {place.inSentence} <ArrowRight aria-hidden className="size-4" /></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Who it is for ---------- */}
      <section id="audience" aria-labelledby="audience-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Who it is for</p>
          <h2 id="audience-title" className={cn(h2, "max-w-3xl")}>The businesses this work suits.</h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {p.audiences.map((a, i) => (
              <li key={a.title} className="border-t-2 border-navy pt-5">
                <p className="tabular text-sm font-semibold text-blue-ink">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em] text-navy">{a.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- What shapes the work ---------- */}
      <section id="challenges" aria-labelledby="challenges-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "relative scroll-mt-20 overflow-clip bg-navy-deep text-white")}>
          <div aria-hidden className="glow absolute -top-32 -right-24 size-[30rem] bg-blue/25" />
          <div className="shell relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="label-mono text-cyan">What shapes the work</p>
              <h2 id="challenges-title" className="mt-4 text-h2 font-semibold">The questions a sound plan has to answer.</h2>
            </div>
            <ol className="lg:col-span-8">
              {p.challenges.map((c, i) => (
                <li key={c.title} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/12 py-6 first:border-t-0 first:pt-0">
                  <span className="tabular pt-1 text-sm font-semibold text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl leading-snug font-semibold tracking-[-0.02em]">{c.title}</h3>
                    <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/75">{c.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- How SERPMOZ runs it ---------- */}
      <section id="approach" aria-labelledby="approach-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className={eyebrow}>Method</p>
              <h2 id="approach-title" className={h2}>How SERPMOZ approaches {service.name}.</h2>
            </div>
            <p className="text-lead text-muted lg:col-span-5">AI does the work that benefits from speed and scale. A specialist decides what matters and answers for it.</p>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
            {p.approach.map((a, i) => (
              <li key={a.stage} className="rounded-2xl border border-line bg-canvas p-5">
                <p className="tabular text-sm font-semibold text-orange-ink">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.015em] text-navy">{a.stage}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10"><AiExpertSplit ai={service.ai} experts={service.experts} /></div>
          <Link href="/methodology/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">Read the SERPMOZ methodology in full <ArrowRight aria-hidden className="size-4" /></Link>
        </div>
      </section>

      {/* ---------- What you receive and what to expect ---------- */}
      <section id="expect" aria-labelledby="expect-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-blue-tint")}>
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className={eyebrow}>What to expect</p>
              <h2 id="expect-title" className={h2}>What happens, and what you receive.</h2>
              <div className={cn("mt-6 space-y-5", text)}>
                {p.expectations.paragraphs.map((x) => <p key={x.slice(0, 40)}>{x}</p>)}
              </div>
              <h3 className="label-mono mt-9 text-muted">Typical deliverables</h3>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[0.9375rem] leading-snug text-navy"><Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-ink" strokeWidth={3} />{d}</li>
                ))}
              </ul>
            </div>
            <aside aria-labelledby="limits-title" className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-panel bg-surface p-6 md:p-7 lg:sticky lg:top-28">
                <h3 id="limits-title" className="text-lg font-semibold tracking-[-0.015em] text-navy">What nobody can promise</h3>
                <ul className="mt-4 space-y-3.5">
                  {p.expectations.notGuaranteed.map((n) => (
                    <li key={n} className="flex gap-3 text-[0.9375rem] leading-snug text-ink/85"><CircleSlash aria-hidden className="mt-0.5 size-4 shrink-0 text-orange-ink" />{n}</li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">We commit to the scope, the method, the people and the reporting, and set targets against your own baseline.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Sectors ---------- */}
      <section id="sectors" aria-labelledby="sectors-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Industries</p>
          <h2 id="sectors-title" className={cn(h2, "max-w-3xl")}>Where {service.name} tends to matter most.</h2>
          <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link href={`/industries/${s.slug}/`} aria-label={`Digital marketing for ${s.industry.name}`} className="group flex h-full flex-col rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-navy hover:bg-navy">
                  <span className="flex items-center justify-between gap-3 text-xl font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-white">{s.industry.name}<ArrowUpRight aria-hidden className="size-4 text-navy/30 transition-colors group-hover:text-orange" /></span>
                  <span className="mt-3 block text-[0.9375rem] leading-relaxed text-muted transition-colors group-hover:text-white/75">{s.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" aria-labelledby="faqs-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-canvas")}>
          <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <HeadingAside art="talk" className="lg:col-span-4">
              <p className={eyebrow}>Questions</p>
              <h2 id="faqs-title" className={h2}>{service.name} in {place.inSentence}: questions buyers ask.</h2>
              <CtaLink href={cta.strategist.href} variant="outline" size="md" className="mt-6">{cta.strategist.label}</CtaLink>
            </HeadingAside>
            <div className="lg:col-span-8"><Faqs faqs={p.faqs} /></div>
          </div>
        </div>
      </section>

      {/* ---------- Related: services here, this service nearby, the place, reading ---------- */}
      <section aria-labelledby="related-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Related</p>
          <h2 id="related-title" className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">Where to go from here.</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <RelatedList title={`Related services in ${place.name}`} links={otherServices.slice(0, 5).map((o) => ({ label: `${getService(o.service)!.name} in ${place.inSentence}`, href: localServicePath(o) }))} />
            <RelatedList
              title="Related locations"
              links={[
                ...sameService.slice(0, 3),
                { label: `Digital marketing agency in ${place.inSentence}`, href: locationPath(place) },
                ...(isCity ? [{ label: `Digital marketing agency in ${market.inSentence}`, href: locationPath(market) }] : []),
              ]}
            />
            <div>
              <h3 className="label-mono text-muted">Related resources</h3>
              <ul className="mt-3 grid gap-4">
                {reading.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/resources/${a.slug}/`} className="group flex items-center gap-4">
                      <ArticleCover slug={a.slug} category={a.category} className="aspect-[4/3] w-20 shrink-0 rounded-xl" />
                      <span>
                        <span className="label-mono block text-[0.625rem] text-muted">{categoryName(a.category)}</span>
                        <span className="mt-1 block text-[0.9375rem] leading-snug font-semibold text-navy group-hover:text-blue-ink">{a.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
                <li><Link href={`/${service.slug}/`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">Explore SERPMOZ {service.name} services <ArrowRight aria-hidden className="size-4" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title={[`See where ${service.name} would pay back first.`]} body="The growth audit reviews where you stand today and what would move first, with the reasoning shown. No guaranteed outcomes, just a clear read and a plan." />
      <StickyCta label={cta.audit.label} href={cta.audit.href} note={`${service.name} for businesses in ${place.inSentence}.`} />

      <JsonLd
        data={[
          webPageSchema({ path, title: `${p.seo.title} | SERPMOZ`, description: p.seo.metaDescription, speakable: ["#answer"] }),
          locationServiceSchema({ location: place, market, path, serviceName: `${service.name} in ${place.inSentence}`, description: p.seo.metaDescription, services: includes.map((x) => ({ name: x.title })) }),
          faqSchema(p.faqs),
        ]}
      />
    </article>
  );
}

/** A titled list of related links with descriptive anchor text. */
function RelatedList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  if (!links.length) return null;
  return (
    <div>
      <h3 className="label-mono text-muted">{title}</h3>
      <ul className="mt-3 border-t border-line">
        {links.map((l) => (
          <li key={l.href} className="border-b border-line">
            <Link href={l.href} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-navy hover:text-blue-ink">{l.label}<ArrowUpRight aria-hidden className="size-4 shrink-0 text-navy/30 group-hover:text-orange" /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
