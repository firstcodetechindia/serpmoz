import Link from "next/link";
import { ArrowUpRight, FileCheck2, GitCommitHorizontal, Link2, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { photos, type PhotoKey } from "@/data/images";
import { getIndustry } from "@/data/industries";
import { getService } from "@/data/services";
import { cn } from "@/lib/utils";

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: GitCommitHorizontal, title: "A baseline before any work", body: "Every metric we intend to move is recorded at the start, with its source." },
  { icon: Link2, title: "Numbers from your systems", body: "Results are read from your analytics, ad accounts and CRM, not our tools." },
  { icon: FileCheck2, title: "A change log you can audit", body: "What shipped, when and why, so an outcome can be traced to the work." },
  { icon: ShieldCheck, title: "Published only with permission", body: "No logo, quote or figure appears here without written approval." },
];

const label = (c: CaseStudy) => (c.illustrative ? "Illustrative Growth Scenario" : "Case study");

function Card({ c, large }: { c: CaseStudy; large?: boolean }) {
  const industry = getIndustry(c.industry);
  const photo = photos[c.industry as PhotoKey] ?? photos.teamWorkshop;
  const tags = c.services.slice(0, large ? 4 : 3).map((s) => getService(s)?.name ?? s);
  return (
    <Link
      href={`/case-studies/${c.slug}/`}
      className={cn("group relative flex overflow-hidden rounded-panel bg-navy text-white shadow-soft transition-shadow duration-500 hover:shadow-float", large ? "min-h-[26rem] flex-col justify-end lg:min-h-full" : "min-h-[15rem] flex-col justify-end sm:min-h-[13.5rem]")}
    >
      <Photo photo={photo} sizes={large ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"} wash="strong" className="absolute inset-0" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
      <div className="absolute top-5 right-5 left-5 flex items-start justify-between gap-3">
        <Badge variant="dark" dot className="bg-navy-deep/60">{label(c)}</Badge>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-navy transition-all duration-300 group-hover:rotate-45 group-hover:bg-orange">
          <ArrowUpRight aria-hidden className="size-4.5" />
        </span>
      </div>
      <div className={cn("relative", large ? "p-7 md:p-9" : "p-6")}>
        <p className="label-mono text-cyan">{industry?.name} · {c.market}</p>
        <h3 className={cn("mt-2 font-semibold tracking-[-0.025em]", large ? "max-w-xl text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] leading-[1.18]" : "text-xl leading-snug")}>{c.title}</h3>
        {large ? <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-white/75">{c.summary}</p> : null}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Services involved">
          {tags.map((t) => (
            <li key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/90">{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

/**
 * Work. Until client results are cleared for publication these are clearly
 * labelled scenarios: a realistic situation and the plan, with no figures.
 * Real entries in data/case-studies.ts replace them automatically.
 */
export function CaseStudiesSection() {
  const real = caseStudies.filter((c) => !c.illustrative);
  const shown = (real.length >= 3 ? real : [...real, ...caseStudies.filter((c) => c.illustrative)]).slice(0, 3);
  const [first, ...others] = shown;

  return (
    <Section inset aria-labelledby="case-studies-title" className="bg-cyan-tint">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader id="case-studies-title" label="Our work" title={["Growth You", "Can Measure."]} className="lg:col-span-6" />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              {real.length
                ? "How the work is planned, what shipped and what changed, with every figure traced to its source."
                : "We publish client results only with written approval and verified figures. Until the first are cleared, these scenarios show how we would approach three common situations."}
            </p>
            <ArrowLink href="/case-studies/" className="mt-6">See all work</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-7" y={24}><Card c={first} large /></Reveal>
          <div className="grid gap-4 lg:col-span-5 lg:gap-5">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={0.08 * (i + 1)} y={24}><Card c={c} /></Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-6 rounded-panel bg-surface p-6 md:p-8 lg:mt-8">
          <p className="label-mono text-muted">How a real result is documented</p>
          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title}>
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-wash text-blue-ink"><p.icon aria-hidden className="size-5" /></span>
                <h3 className="mt-4 font-semibold tracking-[-0.01em] text-navy">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
