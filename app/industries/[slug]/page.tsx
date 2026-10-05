import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, LinkList, MeasuresPanel, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos, type PhotoKey } from "@/data/images";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

/** Sector name as it reads mid-sentence: acronyms keep their capitals. */
const inSentence = (name: string) => (name === "B2B" || name === "SaaS" ? name : name.toLowerCase());

const metaFor = (name: string, line: string, slug: string) => ({
  title: `${name} Marketing & Growth`,
  description: `Digital growth for ${name.toLowerCase() === "b2b" ? "B2B" : name} businesses: ${line.charAt(0).toLowerCase()}${line.slice(1)} SEO, AI search, paid media and conversion from SERPMOZ.`,
  path: `/industries/${slug}/`,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustry((await params).slug);
  return ind ? buildMetadata(metaFor(ind.name, ind.line, ind.slug)) : {};
}

export default async function IndustryPage({ params }: Props) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const meta = metaFor(ind.name, ind.line, ind.slug);
  const sector = inSentence(ind.name);
  const services = ind.services.map(getService).filter((s) => s !== undefined);
  const neighbours = ind.related.map(getIndustry).filter((i) => i !== undefined);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Industries", href: "/industries/" },
          { name: ind.name, href: meta.path },
        ]}
        label={`Industry · ${ind.name}`}
        title={ind.line}
        aside={<Photo photo={photos[ind.slug as PhotoKey] ?? photos.teamOffice} sizes="(min-width: 1024px) 480px, 100vw" priority className="aspect-[4/3] rounded-panel shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:aspect-[5/4]" />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      {/* 01 Challenges: large numbered statements */}
      <Block label="The challenges" title={`What makes growth hard in ${sector}.`} className="border-t-0">
        <ol className="border-b border-line">
          {ind.challenges.map((c, i) => (
            <li key={c} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-line py-6 md:grid-cols-[4rem_minmax(0,1fr)] md:py-7">
              <span className="tabular text-2xl leading-none font-semibold tracking-[-0.04em] text-ink/20 md:text-3xl">{String(i + 1).padStart(2, "0")}</span>
              <p className="max-w-2xl text-[clamp(1.0625rem,1rem+0.4vw,1.25rem)] leading-snug font-medium tracking-[-0.015em] text-ink">{c}</p>
            </li>
          ))}
        </ol>
      </Block>

      {/* 02 + 03 Search behaviour and demand: editorial two-column */}
      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <p className="label-mono text-muted">Search behaviour</p>
            <h2 className="mt-4 max-w-xl text-h2 font-semibold text-navy">How buyers search and decide.</h2>
            <p className="mt-8 max-w-2xl text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-normal text-ink">{ind.buyerBehaviour}</p>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-line lg:pl-8">
            <p className="label-mono text-muted">Demand generation</p>
            <h2 className="mt-4 text-h3 font-semibold text-navy">Where demand comes from.</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{ind.demand}</p>
          </div>
        </div>
      </section>

      {/* 04 Content needs: checklist */}
      <Block label="Content needs" title={`What ${sector} buyers expect to find.`}>
        <ul className="grid grid-cols-1 border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {ind.contentNeeds.map((c) => (
            <li key={c} className="flex min-w-0 gap-4 border-t border-line py-5 text-[1.0625rem] leading-snug font-medium text-ink">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-blue-ink" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
          Each of these is written or reviewed by someone who knows the subject. AI speeds up research and drafting. It does not decide what is accurate.
        </p>
      </Block>

      {/* 05 Conversion challenges: the one navy band on the page */}
      <section className="bg-navy py-16 text-white md:py-24">
        <div className="shell">
          <p className="label-mono text-cyan">Conversion challenges</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold">Where interest is lost before it becomes business.</h2>
          <ul className={cn("mt-12 grid grid-cols-1 gap-x-10 border-b border-white/15 md:grid-cols-2", ind.conversion.length === 3 && "lg:grid-cols-3")}>
            {ind.conversion.map((c, i) => (
              <li key={c.title} className="min-w-0 border-t border-white/15 py-7">
                <span className="label-mono text-white/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/75">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 Approach */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <p className="label-mono text-muted">The SERPMOZ approach</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-navy">Three priorities for {sector}.</h2>
          <div className="mt-12">
            <RuledRows rows={ind.focus} />
          </div>
        </div>
      </section>

      {/* 07 Services */}
      <Block label="Relevant services" title="Typically involved." className="bg-surface">
        <LinkList links={services.map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.summary }))} />
      </Block>

      {/* 08 + 09 Examples beside measures */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="shell grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-16">
          <div className="min-w-0">
            <p className="label-mono text-muted">In practice</p>
            <h2 className="mt-4 max-w-xl text-h2 font-semibold text-navy">The kind of work this leads to.</h2>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
              Examples of what we would build for a {sector} business. They describe work, not outcomes. What is right for you is decided after the diagnostic.
            </p>
            <ol className="mt-10 grid grid-cols-1 gap-4">
              {ind.examples.map((e, i) => (
                <li key={e} className="flex min-w-0 gap-5 rounded-panel border border-line bg-surface p-6 md:p-7">
                  <span className="label-mono mt-1 shrink-0 text-orange-ink">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[1.0625rem] leading-relaxed text-ink">{e}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-w-0">
            <h2 className="sr-only">What we measure in {sector}</h2>
            <MeasuresPanel measures={ind.measures} title="Outcomes we plan around" />
          </div>
        </div>
      </section>

      {/* 10 Related industries */}
      {neighbours.length ? (
        <section className="border-t border-line bg-surface py-14 md:py-20">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label-mono text-muted">Related industries</p>
                <h2 className="mt-3 text-h3 font-semibold text-navy">Sectors with similar buyers.</h2>
              </div>
              <Link href="/industries/" className="text-[0.9375rem] font-medium text-blue-ink underline underline-offset-4">All industries</Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {neighbours.map((n) => (
                <li key={n.slug} className="min-w-0">
                  <Link href={`/industries/${n.slug}/`} className="group flex h-full flex-col justify-between gap-6 rounded-panel border border-line bg-canvas p-6 transition-colors hover:border-navy">
                    <span className="flex items-center justify-between gap-4 text-xl font-semibold tracking-[-0.02em] text-navy">
                      {n.name}
                      <ArrowUpRight aria-hidden className="size-4 shrink-0 text-line-strong transition-colors group-hover:text-blue-ink" />
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-muted">{n.line}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
