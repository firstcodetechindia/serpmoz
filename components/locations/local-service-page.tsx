import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, Search } from "lucide-react";
import { HeadingAside } from "@/components/layout/heading-aside";
import { LocationWorldMap } from "@/components/locations/location-world-map";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Faqs } from "@/components/services/page-parts";
import { StickyCta } from "@/components/services/sticky-cta";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { getIndustry } from "@/data/industries";
import { citiesOf, getLocation, getMarket, locationPath } from "@/data/locations";
import { getLocalService, localServicePath, localServicesFor, localServicesIn } from "@/data/locations/services";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { faqSchema, locationServiceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { LocalServicePage as Page } from "@/types";

const eyebrow = "label-mono text-muted";
const h2 = "mt-4 text-h2 font-semibold text-navy";
const band = "scroll-mt-20 py-12 md:py-16 lg:py-20";
const inset = "rounded-[1.75rem] py-12 md:rounded-[2.25rem] md:py-16 lg:py-20";
const chip = "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white";

/**
 * One service in one place. The words come from the page record; the map,
 * the service's parts and every link (up to the place and the service, across
 * to the same service nearby and other services here) are worked out from it.
 */
export function LocalServicePage({ page: p }: { page: Page }) {
  const place = getLocation(p.place)!;
  const service = getService(p.service)!;
  const isCity = place.kind === "city";
  const market = isCity ? getMarket(place.parent!)! : place;
  const path = localServicePath(p);

  // Ground level upwards: the same service in neighbouring places, then in the parent market or its cities.
  const neighbours = isCity ? citiesOf(market.slug).filter((c) => c.slug !== place.slug) : citiesOf(place.slug);
  const sameService = [
    ...(isCity ? [market] : []),
    ...neighbours.sort((a, b) => Number((place.nearby ?? []).includes(b.slug)) - Number((place.nearby ?? []).includes(a.slug))),
  ].flatMap((l) => {
    const page = getLocalService(p.service, l.slug);
    return page ? [{ label: `${service.name} in ${l.name}`, href: localServicePath(page) }] : [];
  });
  const elsewhere = localServicesFor(p.service).filter((x) => x.place !== p.place && !sameService.some((s) => s.href === localServicePath(x))).slice(0, 6);
  const otherServices = localServicesIn(p.place).filter((x) => x.service !== p.service);
  const sectors = p.sectors.flatMap((s) => {
    const industry = getIndustry(s.slug);
    return industry ? [{ ...s, industry }] : [];
  });
  const parts = (service.master?.pillars ?? service.scope).slice(0, 6);
  const crumbs = [
    { name: "Locations", href: "/locations/" },
    ...(isCity ? [{ name: market.name, href: locationPath(market) }] : []),
    { name: place.name, href: locationPath(place) },
    { name: service.name, href: path },
  ];

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
            <h1 className="mt-4 text-[clamp(2rem,1.3rem+2.6vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.035em]">{p.h1}</h1>
            <p className="mt-6 text-lead text-white/75">{p.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="local-service-audit">{cta.audit.label}</CtaLink>
              <CtaLink href="#local" variant="onDark" size="lg" arrow={false}>What changes in {place.name}</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-7"><LocationWorldMap location={place} /></div>
        </div>
      </header>

      {/* ---------- The answer, and how people here search ---------- */}
      <section id="search" aria-labelledby="search-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <aside aria-labelledby="answer-title" className="rounded-panel bg-navy p-6 text-white shadow-float md:p-8 lg:sticky lg:top-28">
              <p className="label-mono text-[0.6875rem] text-cyan">In short</p>
              <h2 id="answer-title" className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em]">{p.answer.question}</h2>
              <p id="answer" className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">{p.answer.text}</p>
              <Link href={`/${service.slug}/`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-white/30 underline-offset-[6px] hover:decoration-orange">How {service.name} works <ArrowRight aria-hidden className="size-4" /></Link>
            </aside>
          </div>
          <div className="lg:col-span-7">
            <p className={eyebrow}>Search behaviour</p>
            <h2 id="search-title" className={h2}>How people in {place.inSentence} look for {service.name}.</h2>
            <ol className="mt-8 border-b border-line">
              {p.searches.map((s) => (
                <li key={s.title} className="flex gap-4 border-t border-line py-5">
                  <Search aria-hidden className="mt-1 size-5 shrink-0 text-blue-ink" />
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-[1.0625rem] leading-relaxed text-ink/85">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- What is different here ---------- */}
      <section id="local" aria-labelledby="local-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-mist")}>
          <div className="shell">
            <p className={eyebrow}>Specific to {place.name}</p>
            <h2 id="local-title" className={cn(h2, "max-w-3xl")}>What {service.name} has to account for in {place.inSentence}.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {p.localFactors.map((f, i) => (
                <li key={f.title} className="rounded-2xl bg-surface p-6">
                  <p className="tabular text-sm font-semibold text-blue-ink">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-lg leading-snug font-semibold tracking-[-0.015em] text-navy">{f.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Areas covered ---------- */}
      <section id="areas" aria-labelledby="areas-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <HeadingAside art="network" className="lg:col-span-4">
            <p className={eyebrow}>{isCity ? "Localities and nearby" : "Cities and regions"}</p>
            <h2 id="areas-title" className={h2}>Where in {place.inSentence} this work is planned for.</h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">We work with businesses in {place.inSentence} remotely, alongside your own team.</p>
          </HeadingAside>
          <div className="lg:col-span-8">
            <ul className="border-b border-line">
              {p.areas.map((a) => (
                <li key={a.name} className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-line py-4 sm:grid-cols-12">
                  <p className="flex items-center gap-2.5 text-[1.0625rem] font-semibold text-navy sm:col-span-4"><MapPin aria-hidden className="size-4 shrink-0 text-orange" />{a.name}</p>
                  <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-8">{a.note}</p>
                </li>
              ))}
            </ul>
            {sameService.length ? (
              <div className="mt-6">
                <p className="label-mono text-[0.6875rem] text-muted">{service.name} nearby</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {sameService.map((s) => <li key={s.href}><Link href={s.href} className={chip}>{s.label}</Link></li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ---------- What the service includes ---------- */}
      <section id="scope" aria-labelledby="scope-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "relative scroll-mt-20 overflow-hidden bg-navy-deep text-white")}>
          <div aria-hidden className="glow absolute -top-32 -right-24 size-[30rem] bg-blue/25" />
          <div className="shell relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="label-mono text-cyan">The service</p>
              <h2 id="scope-title" className="mt-4 text-h2 font-semibold">What {service.name} includes.</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/70">{service.summary}</p>
              <CtaLink href={`/${service.slug}/`} variant="onDark" size="md" className="mt-6">Full {service.name} service</CtaLink>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {parts.map((x) => (
                <li key={x.title} className="glass-dark rounded-2xl p-5">
                  <h3 className="flex items-start gap-2.5 text-lg leading-snug font-semibold tracking-[-0.015em]"><Check aria-hidden className="mt-1 size-4 shrink-0 text-cyan" strokeWidth={3} />{x.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{x.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Sectors ---------- */}
      <section id="sectors" aria-labelledby="sectors-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Sectors</p>
          <h2 id="sectors-title" className={cn(h2, "max-w-3xl")}>Who {service.name} matters most for in {place.inSentence}.</h2>
          <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link href={`/industries/${s.slug}/`} className="group flex h-full flex-col justify-between rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-navy hover:bg-navy">
                  <span>
                    <span className="flex items-center justify-between gap-3 text-xl font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-white">{s.industry.name}<ArrowUpRight aria-hidden className="size-4 text-navy/30 transition-colors group-hover:text-orange" /></span>
                    <span className="mt-3 block text-[0.9375rem] leading-relaxed text-muted transition-colors group-hover:text-white/75">{s.note}</span>
                  </span>
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
              <h2 id="faqs-title" className={h2}>{service.name} in {place.inSentence}: common questions.</h2>
              <CtaLink href={cta.strategist.href} variant="outline" size="md" className="mt-6">{cta.strategist.label}</CtaLink>
            </HeadingAside>
            <div className="lg:col-span-8"><Faqs faqs={p.faqs} /></div>
          </div>
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section aria-labelledby="related-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <p className={eyebrow}>Related</p>
          <h2 id="related-title" className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">More for businesses in {place.inSentence}.</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="label-mono text-muted">Other services in {place.name}</h3>
              <ul className="mt-3 border-t border-line">
                {otherServices.map((o) => (
                  <li key={o.service} className="border-b border-line">
                    <Link href={localServicePath(o)} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-semibold text-navy hover:text-blue-ink">{getService(o.service)!.name} in {place.name}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-mono text-muted">The place</h3>
              <ul className="mt-3 border-t border-line">
                <li className="border-b border-line"><Link href={locationPath(place)} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-semibold text-navy hover:text-blue-ink">Digital marketing agency in {place.inSentence}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link></li>
                {isCity ? <li className="border-b border-line"><Link href={locationPath(market)} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-ink hover:text-blue-ink">Digital marketing agency in {market.inSentence}<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link></li> : null}
                <li className="border-b border-line"><Link href={`/${service.slug}/`} className="group flex items-center justify-between gap-3 py-3 text-[0.9375rem] font-medium text-ink hover:text-blue-ink">{service.name} services<ArrowUpRight aria-hidden className="size-4 text-navy/30 group-hover:text-orange" /></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="label-mono text-muted">{service.name} in other markets</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {elsewhere.map((x) => <li key={x.place}><Link href={localServicePath(x)} className={chip}>{getLocation(x.place)!.name}</Link></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title={[`Plan ${service.name} for ${place.inSentence} around your numbers.`]} body={`The growth audit looks at where you stand in ${place.inSentence} today and what would move first. No guaranteed outcomes, just a clear read and a plan.`} />
      <StickyCta label={cta.audit.label} href={cta.audit.href} note={`${service.name} for businesses in ${place.inSentence}.`} />

      <JsonLd
        data={[
          webPageSchema({ path, title: `${p.seo.title} | SERPMOZ`, description: p.seo.metaDescription, speakable: ["#answer"] }),
          locationServiceSchema({ location: place, market, path, serviceName: `${service.name} in ${place.inSentence}`, description: p.seo.metaDescription, services: parts.map((x) => ({ name: x.title })) }),
          faqSchema(p.faqs),
        ]}
      />
    </article>
  );
}
