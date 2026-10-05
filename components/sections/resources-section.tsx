import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArticleCover } from "@/components/resources/article-cover";
import { CtaLink } from "@/components/ui/cta-link";
import { articleSummaries } from "@/lib/resources";

export function ResourcesSection() {
  const [lead, ...rest] = articleSummaries();
  const side = rest.slice(0, 4);

  return (
    <Section aria-labelledby="resources-title" className="bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="resources-title"
            label="SERPMOZ Research"
            title={["Research,", "Not Recycled Advice."]}
            lead="What we learn from doing the work, written up with the method shown."
          />
          <Reveal delay={0.1} className="shrink-0">
            <CtaLink href="/resources/" variant="outline" size="lg">Visit the resource library</CtaLink>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Lead piece */}
          <Reveal className="lg:col-span-7" y={24}>
            <Link href={`/resources/${lead.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-panel bg-navy text-white shadow-soft transition-shadow duration-500 hover:shadow-float">
              <div className="relative">
                <ArticleCover slug={lead.slug} category={lead.category} className="aspect-[16/9] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" />
                <span className="label-mono absolute top-5 left-5 rounded-full bg-white px-3 py-1.5 text-[0.625rem] text-navy">Featured · {lead.categoryName}</span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="text-[clamp(1.5rem,1.2rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em]">{lead.title}</h3>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">{lead.summary}</p>
                <p className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm text-white/55">
                  <span>{lead.author} · {lead.date} · {lead.minutes} min read</span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-orange text-navy transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight aria-hidden className="size-5" /></span>
                </p>
              </div>
            </Link>
          </Reveal>

          {/* More reading */}
          <ul className="flex flex-col lg:col-span-5">
            {side.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={0.05 * (i + 1)} className="flex-1 border-b border-line first:border-t">
                <Link href={`/resources/${a.slug}/`} className="group grid h-full grid-cols-[5.5rem_1fr] items-center gap-5 py-5 sm:grid-cols-[7.5rem_1fr]">
                  <ArticleCover slug={a.slug} category={a.category} tone="light" className="aspect-[4/3] rounded-xl transition-transform duration-500 group-hover:scale-105" />
                  <div className="min-w-0">
                    <p className="label-mono text-[0.625rem] text-blue-ink">{a.categoryName} · {a.minutes} min</p>
                    <h3 className="mt-1.5 text-lg leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{a.title}</h3>
                    <p className="mt-1 text-xs text-muted">{a.date}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
