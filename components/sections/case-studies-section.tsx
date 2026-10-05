import { Sparkline } from "@/components/charts/sparkline";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";

/* What each part of a published case study has to contain. No figures: the format, not a result. */
const parts = [
  { name: "Challenge", body: "The commercial problem in the client’s own terms, with the starting numbers.", field: "Baseline, period, source" },
  { name: "Strategy", body: "What we chose to prioritise, and what we deliberately left out.", field: "Opportunities ranked, reasons given" },
  { name: "Execution", body: "The work that shipped, in order, and who was responsible for it.", field: "Change log with dates" },
  { name: "Result", body: "Measured change against the baseline, with the range of uncertainty.", field: "Metric, before, after, source" },
  { name: "Business Impact", body: "What it meant for pipeline and revenue, reconciled with the CRM.", field: "Revenue influenced, method stated" },
];

export function CaseStudiesSection() {
  return (
    <Section aria-labelledby="case-studies-title" className="border-t border-line bg-surface">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="case-studies-title"
            index="11"
            label="Case studies"
            title={["Growth You", "Can Measure."]}
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              Every case study we publish follows the same five-part structure, so a result can be read in context and
              checked against its source.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid overflow-hidden rounded-panel border border-line lg:mt-20 lg:grid-cols-12" y={24}>
          {/* The human side of the work */}
          <div className="relative min-h-72 bg-navy text-white lg:col-span-4">
            <Photo photo={photos.teamWorkshop} sizes="(min-width: 1024px) 420px, 100vw" wash="strong" className="absolute inset-0" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <Badge variant="dark" dot>Example framework</Badge>
              <div>
                <p className="text-2xl leading-tight font-semibold tracking-[-0.025em]">How a SERPMOZ case study reads.</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  This is the template, not a client result. Our first case studies are being prepared to this standard and
                  will be published with written approval and verified figures.
                </p>
              </div>
            </div>
          </div>

          {/* The document */}
          <div className="bg-canvas p-6 md:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
              <div>
                <p className="label-mono text-muted">Case study · Sector · Market</p>
                <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-navy">Client name, with permission</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-dashed border-line-strong px-3.5 py-2.5">
                <Sparkline values={[4, 5, 5, 7, 8, 8, 11, 13, 14, 17]} className="h-7 w-20" />
                <p className="text-xs leading-tight text-muted">
                  Headline metric
                  <span className="block font-medium text-ink">shown against baseline</span>
                </p>
              </div>
            </div>
            <ol>
              {parts.map((p, i) => (
                <li key={p.name} className="grid gap-x-6 gap-y-1 border-b border-line py-4 last:border-b-0 last:pb-0 sm:grid-cols-[2rem_9rem_1fr]">
                  <span className="label-mono pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-navy">{p.name}</h3>
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-ink">{p.body}</p>
                    <p className="label-mono mt-1.5 text-[0.625rem] text-muted">{p.field}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <ArrowLink href="/case-studies/" className="mt-10">
          How we document results
        </ArrowLink>
      </div>
    </Section>
  );
}
