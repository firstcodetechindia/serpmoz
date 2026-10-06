import { HeadingAside } from "@/components/layout/heading-aside";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Check, Compass, MapPin, MessageCircle, Play, Search, ShoppingBag, Star, Users, type LucideIcon } from "lucide-react";
import { LocationWorldMap } from "@/components/locations/location-world-map";
import { ArticleCover } from "@/components/resources/article-cover";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Faqs } from "@/components/services/page-parts";
import { StickyCta } from "@/components/services/sticky-cta";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { RichText } from "@/components/ui/rich-text";
import { SignalField } from "@/components/visuals/signal-field";
import { getCaseStudy } from "@/data/case-studies";
import { methodology } from "@/data/growth";
import { photos, type PhotoKey } from "@/data/images";
import { getIndustry } from "@/data/industries";
import { citiesOf, getLocationByPath, getMarket, locationPath, locationServicesIn } from "@/data/locations";
import { getArticle } from "@/data/resources";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { categoryName } from "@/lib/resources";
import { faqSchema, locationServiceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { LocationRecord } from "@/types";

const eyebrow = "label-mono text-muted";
const h2 = "mt-4 text-h2 font-semibold text-navy";
const band = "scroll-mt-20 py-12 md:py-16 lg:py-20";
const inset = "rounded-[1.75rem] py-12 md:rounded-[2.25rem] md:py-16 lg:py-20";

/** A fitting icon for a discovery channel, chosen from its name. */
function channelIcon(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (/map|local|near/.test(n)) return MapPin;
  if (/whatsapp|messag|chat/.test(n)) return MessageCircle;
  if (/youtube|video|reel/.test(n)) return Play;
  if (/marketplace|amazon|commerce|shopping|compar/.test(n)) return ShoppingBag;
  if (/review|rating|directory|directories/.test(n)) return Star;
  if (/ai |assistant|\bai\b/.test(n)) return Bot;
  if (/social|instagram|linkedin|facebook|communit|word of mouth|referr/.test(n)) return Users;
  if (/search|google|bing/.test(n)) return Search;
  return Compass;
}

const photoOf = (key: string) => photos[key as PhotoKey] ?? photos.skyline;

/**
 * The location page. One layout for countries, regions and cities; every
 * word, link and map state comes from the location's record. Sections with
 * nothing to show (no cities, no case studies) leave themselves out.
 */
export function LocationPage({ location: l }: { location: LocationRecord }) {
  const path = locationPath(l);
  const isCity = l.kind === "city";
  const market = isCity ? getMarket(l.parent!)! : l;
  const cities = isCity ? [] : citiesOf(l.slug);
  const siblings = isCity ? citiesOf(market.slug).filter((c) => c.slug !== l.slug) : [];
  const nearby = siblings.filter((c) => (l.nearby ?? []).includes(c.slug));
  const related = l.related.map(getLocationByPath).filter((x) => x !== undefined);
  const services = l.services.flatMap((s) => {
    const service = getService(s.slug);
    return service ? [{ ...s, service }] : [];
  });
  const industries = l.industries.flatMap((i) => {
    const industry = getIndustry(i.slug);
    return industry ? [{ ...i, industry }] : [];
  });
  const scenarios = l.caseStudies.map(getCaseStudy).filter((c) => c !== undefined);
  const reading = l.resources.map(getArticle).filter((a) => a !== undefined);
  const localServices = isCity ? locationServicesIn(market.slug, l.slug) : [];
  const crumbs = [{ name: "Locations", href: "/locations/" }, ...(isCity ? [{ name: market.name, href: locationPath(market) }] : []), { name: l.name, href: path }];

  return (
    <article className="overflow-x-clip">
      {/* ---------- Hero and map ---------- */}
      <header data-hero="dark" className="stage relative overflow-hidden pt-28 pb-14 text-white md:pt-36 md:pb-16">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <SignalField cx={74} cy={44} className="hidden opacity-40 lg:block" />
        <div className="shell relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Breadcrumbs crumbs={crumbs} tone="dark" />
            <p className="label-mono mt-8 text-cyan">{isCity ? `City · ${market.name}` : l.kind === "region" ? `Region · ${l.code}` : `Market · ${l.code}`}</p>
            <h1 className="mt-4 text-[clamp(2.25rem,1.3rem+3.1vw,3.625rem)] leading-[1.1] font-semibold tracking-[-0.035em]">{l.hero.title}</h1>
            <p className="mt-6 text-lead text-white/75">{l.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="location-hero-audit">{cta.audit.label}</CtaLink>
              <CtaLink href="#services" variant="onDark" size="lg" arrow={false} data-cta="location-hero-services">Explore Services</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <LocationWorldMap location={l} />
          </div>
        </div>

        <dl className="shell relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {l.facts.map((f) => (
            <div key={f.label} className="bg-navy-deep/80 p-5">
              <dt className="label-mono text-[0.625rem] text-cyan">{f.label}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug font-medium text-white/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ---------- The answer, then the market ---------- */}
      <section id="overview" aria-labelledby="overview-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className={eyebrow}>{isCity ? "The city" : "The market"}</p>
            <h2 id="overview-title" className={h2}>{l.overview.heading}</h2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink/85">
              {l.overview.paragraphs.map((p) => <p key={p.slice(0, 40)}><RichText text={p} /></p>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Photo photo={photoOf(l.photo)} sizes="(min-width: 1024px) 460px, 100vw" className="aspect-[4/3] rounded-panel" />
              <aside aria-labelledby="answer-title" className="relative -mt-10 mx-4 rounded-panel bg-navy p-6 text-white shadow-float md:p-7">
                <h3 id="answer-title" className="text-lg leading-snug font-semibold tracking-[-0.015em]">{l.answer.question}</h3>
                <p id="answer" className="mt-3 text-[0.9375rem] leading-relaxed text-white/80">{l.answer.text}</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How customers find businesses here ---------- */}
      <section id="discovery" aria-labelledby="discovery-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-mist")}>
          <div className="shell">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className={eyebrow}>Discovery</p>
                <h2 id="discovery-title" className={h2}>{l.discovery.heading}</h2>
              </div>
              <p className="text-lead text-muted lg:col-span-5 lg:pt-10">{l.discovery.intro}</p>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {l.discovery.channels.map((c, i) => {
                const Icon = channelIcon(c.name);
                return (
                  <li key={c.name} className="flex flex-col rounded-2xl bg-surface p-6 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-full bg-navy text-white"><Icon aria-hidden className="size-5" /></span>
                      <span className="tabular text-sm font-semibold text-navy/25">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-navy">{c.name}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{c.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Search and AI ---------- */}
      <section id="search" aria-labelledby="search-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <HeadingAside art="search" className="lg:col-span-4">
            <p className={eyebrow}>Search and AI</p>
            <h2 id="search-title" className={h2}>{l.searchAi.heading}</h2>
          </HeadingAside>
          <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink/85 lg:col-span-7 lg:col-start-6">
            {l.searchAi.paragraphs.map((p) => <p key={p.slice(0, 40)}><RichText text={p} /></p>)}
          </div>
        </div>

        {l.local ? (
          <div className="shell mt-12 grid grid-cols-1 overflow-hidden rounded-panel bg-navy text-white lg:mt-16 lg:grid-cols-12">
            <div className="p-7 md:p-10 lg:col-span-7">
              <p className="label-mono text-cyan">Local search</p>
              <h2 className="mt-4 text-[clamp(1.625rem,1.3rem+1.4vw,2.375rem)] leading-[1.15] font-semibold tracking-[-0.03em]">{l.local.heading}</h2>
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-white/80">
                {l.local.paragraphs.map((p) => <p key={p.slice(0, 40)}><RichText text={p} linkClassName="font-medium text-white underline decoration-orange decoration-2 underline-offset-[5px] hover:text-cyan" /></p>)}
              </div>
            </div>
            <ul className="border-t border-white/12 p-7 md:p-10 lg:col-span-5 lg:border-t-0 lg:border-l">
              {l.local.points.map((p) => (
                <li key={p} className="flex gap-3 border-b border-white/12 py-3.5 text-[0.9375rem] leading-snug text-white/90 first:pt-0 last:border-b-0 last:pb-0">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {/* ---------- Opportunities ---------- */}
      <section id="opportunities" aria-labelledby="opportunities-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "stage relative overflow-hidden text-white")}>
          <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(60%_70%_at_80%_10%,black,transparent)]" />
          <div className="shell relative">
            <p className="label-mono text-cyan">Opportunities</p>
            <h2 id="opportunities-title" className="mt-4 max-w-3xl text-h2 font-semibold">Where growth is available in {l.inSentence}.</h2>
            <ol className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:mt-12">
              {l.opportunities.map((o, i) => (
                <li key={o.title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-white/12 py-6">
                  <span className="tabular text-3xl leading-none font-semibold tracking-[-0.04em] text-orange">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl leading-snug font-semibold tracking-[-0.02em]">{o.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">{o.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" aria-labelledby="services-title" className={cn(band, "bg-surface")}>
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <p className={eyebrow}>Services</p>
              <h2 id="services-title" className={h2}>SERPMOZ services in {l.inSentence}.</h2>
            </div>
            <p className="text-lead text-muted lg:col-span-5">Chosen for how demand works here. The right mix for your business is set after the growth audit.</p>
          </div>
          <ul className="mt-10 border-b border-line lg:mt-12">
            {services.map((s, i) => (
              <li key={s.slug} className="border-t border-line">
                <Link href={`/${s.slug}/`} className="group grid grid-cols-1 gap-x-8 gap-y-3 py-7 transition-colors lg:grid-cols-12 lg:items-start">
                  <span className="flex items-baseline gap-4 lg:col-span-4">
                    <span className="tabular text-sm font-semibold text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)] leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{s.title}</span>
                  </span>
                  <span className="text-[1.0625rem] leading-relaxed text-ink lg:col-span-4">{s.body}</span>
                  <span className="flex items-start justify-between gap-4 lg:col-span-4">
                    <span className="text-[0.9375rem] leading-relaxed text-muted"><span className="label-mono mb-1 block text-[0.625rem] text-orange-ink">Why it matters here</span>{s.why}</span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange"><ArrowUpRight aria-hidden className="size-4" /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {localServices.length ? (
            <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>Written specifically for {l.name}:</span>
              {localServices.map((s) => (
                <Link key={s.slug} href={`${path}${s.slug}/`} className="rounded-full border border-line px-3 py-1 font-medium text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">{s.title}</Link>
              ))}
            </p>
          ) : null}
          <Link href="/services/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">See every SERPMOZ service <ArrowRight aria-hidden className="size-4" /></Link>
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section id="industries" aria-labelledby="industries-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-blue-tint")}>
          <div className="shell">
            <p className={eyebrow}>Industries</p>
            <h2 id="industries-title" className={h2}>Sectors we work with in {l.inSentence}.</h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {industries.map((i, n) => (
                <li key={i.slug} className={cn(n === 0 && "sm:col-span-2")}>
                  <Link href={`/industries/${i.slug}/`} className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden rounded-panel bg-navy text-white">
                    <Photo photo={photoOf(i.slug)} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" wash="strong" className="absolute inset-0" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
                    <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white text-navy transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange"><ArrowUpRight aria-hidden className="size-4" /></span>
                    <div className="relative p-5">
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">{i.industry.name}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-white/80">{i.note}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- What a plan has to account for; cities ---------- */}
      <section id="considerations" aria-labelledby="considerations-title" className={cn(band, "bg-surface")}>
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <HeadingAside art="network" className="lg:col-span-4">
            <p className={eyebrow}>{isCity ? "Local considerations" : "Regional considerations"}</p>
            <h2 id="considerations-title" className={h2}>What a plan for {l.inSentence} has to account for.</h2>
          </HeadingAside>
          <ol className="lg:col-span-7 lg:col-start-6">
            {l.considerations.map((c, i) => (
              <li key={c.title} className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-line py-6 last:border-b">
                <span className="tabular text-2xl leading-none font-semibold tracking-[-0.04em] text-navy/20">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{c.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {cities.length || nearby.length || siblings.length ? (
          <div className="shell mt-12 lg:mt-16">
            <h2 className="text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">{isCity ? (nearby.length ? `Nearby markets${l.cluster ? ` in ${l.cluster}` : ""}.` : `Other cities in ${market.inSentence}.`) : `Cities in ${l.inSentence}.`}</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(isCity ? [...nearby, ...siblings.filter((s) => !nearby.includes(s))].slice(0, 4) : cities).map((c) => (
                <li key={c.slug}>
                  <Link href={locationPath(c)} className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-5 transition-colors duration-300 hover:border-navy hover:bg-navy">
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-white"><MapPin aria-hidden className="size-4 text-orange" />{c.name}</span>
                      <ArrowUpRight aria-hidden className="size-4 text-navy/30 transition-colors group-hover:text-orange" />
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/75">{c.facts[2]?.value ?? c.hero.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {/* ---------- Why us, and how we work ---------- */}
      <section id="why" aria-labelledby="why-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-canvas")}>
          <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <p className={eyebrow}>Why SERPMOZ</p>
              <h2 id="why-title" className={h2}>Why businesses in {l.inSentence} work with us.</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {l.whyUs.map((w) => (
                  <li key={w.title} className="rounded-2xl bg-surface p-5 shadow-soft">
                    <span className="flex size-8 items-center justify-center rounded-full bg-navy text-white"><Check aria-hidden className="size-4" strokeWidth={3} /></span>
                    <h3 className="mt-4 text-lg leading-snug font-semibold tracking-[-0.015em] text-navy">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted">We work with businesses in {l.inSentence} remotely, alongside your own team.</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className={eyebrow}>How we work</p>
              <ol className="mt-4 rounded-panel bg-navy p-6 text-white md:p-8">
                {methodology.map((m, i) => (
                  <li key={m.name} className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-white/12 py-3.5 first:pt-0 last:border-b-0 last:pb-0">
                    <span className="tabular text-sm font-semibold text-cyan">{String(i + 1).padStart(2, "0")}</span>
                    <span><span className="font-semibold">{m.name}</span><span className="mt-0.5 block text-sm leading-snug text-white/65">{m.body}</span></span>
                  </li>
                ))}
              </ol>
              <Link href="/methodology/" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-navy/25 decoration-1 underline-offset-[5px] hover:decoration-orange hover:decoration-2">Read the full methodology <ArrowRight aria-hidden className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work and reading ---------- */}
      {scenarios.length || reading.length ? (
        <section aria-labelledby="proof-title" className={cn(band, "bg-surface")}>
          <div className="shell">
            <p className={eyebrow}>Work and research</p>
            <h2 id="proof-title" className={h2}>Relevant to {l.inSentence}.</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
              {scenarios.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}/`} className="group relative flex min-h-[17rem] flex-col justify-end overflow-hidden rounded-panel bg-navy text-white lg:col-span-6">
                  <Photo photo={photoOf(c.industry)} sizes="(min-width: 1024px) 50vw, 100vw" wash="strong" className="absolute inset-0" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-transparent" />
                  <div className="relative p-6 md:p-7">
                    <Badge variant="dark" dot className="bg-navy-deep/60">{c.illustrative ? "Illustrative Growth Scenario" : "Case study"}</Badge>
                    <h3 className="mt-3 text-xl leading-snug font-semibold tracking-[-0.02em]">{c.title}</h3>
                  </div>
                </Link>
              ))}
              {reading.map((a) => (
                <Link key={a.slug} href={`/resources/${a.slug}/`} className={cn("group block", scenarios.length ? "lg:col-span-4" : "lg:col-span-4")}>
                  <ArticleCover slug={a.slug} category={a.category} className="aspect-[16/9] rounded-2xl" />
                  <p className="label-mono mt-4 text-[0.625rem] text-blue-ink">{categoryName(a.category)}</p>
                  <h3 className="mt-1.5 text-lg leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- FAQs ---------- */}
      <section id="faqs" aria-labelledby="faqs-title" className="bg-surface px-3 py-1.5 md:px-5 md:py-2">
        <div className={cn(inset, "scroll-mt-20 bg-mist")}>
          <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <HeadingAside art="talk" className="lg:col-span-4">
              <p className={eyebrow}>Questions</p>
              <h2 id="faqs-title" className={h2}>Digital growth in {l.inSentence}: common questions.</h2>
              <CtaLink href={cta.strategist.href} variant="outline" size="md" className="mt-6">{cta.strategist.label}</CtaLink>
            </HeadingAside>
            <div className="lg:col-span-8"><Faqs faqs={l.faqs} /></div>
          </div>
        </div>
      </section>

      {/* ---------- Related locations ---------- */}
      {related.length ? (
        <section aria-labelledby="related-title" className={cn(band, "bg-surface")}>
          <div className="shell">
            <p className={eyebrow}>Related locations</p>
            <h2 id="related-title" className="mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-navy">Other markets we work in.</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={locationPath(r)} className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-navy hover:bg-navy">
                    <span>
                      <span className="label-mono block text-[0.625rem] text-orange-ink transition-colors group-hover:text-orange">{r.kind === "city" ? getMarket(r.parent!)?.name : r.code}</span>
                      <span className="mt-1 block text-lg font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-white">{r.name}</span>
                    </span>
                    <ArrowUpRight aria-hidden className="size-4 text-navy/30 transition-colors group-hover:text-orange" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="flex h-full items-center justify-between gap-4 rounded-2xl bg-canvas p-5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">All locations <ArrowRight aria-hidden className="size-4" /></Link>
              </li>
            </ul>
          </div>
        </section>
      ) : null}

      <FinalCta title={[l.cta.title]} body={l.cta.body} />
      <StickyCta label={cta.audit.label} href={cta.audit.href} note={`Growth audit for businesses in ${l.inSentence}.`} />

      <JsonLd
        data={[
          webPageSchema({ path, title: `${l.seo.title} | SERPMOZ`, description: l.seo.metaDescription, speakable: ["#answer"] }),
          locationServiceSchema({ location: l, market, path, services: services.map((s) => ({ name: s.title, path: `/${s.slug}/` })) }),
          faqSchema(l.faqs),
        ]}
      />
    </article>
  );
}
