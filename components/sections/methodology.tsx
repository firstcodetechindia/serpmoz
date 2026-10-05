import { RefreshCw } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink } from "@/components/ui/cta-link";
import { MethodLoop } from "@/components/visuals/method-loop";
import { methodology } from "@/data/growth";

export function MethodologySteps({ detailed = true }: { detailed?: boolean }) {
  return (
    <ol className="border-b border-line">
      {methodology.map((step, i) => (
        <Reveal as="li" key={step.name} className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-7 md:grid-cols-[5rem_11rem_1fr] md:gap-x-6 md:py-9" delay={i * 0.04}>
          <span className="tabular text-3xl leading-none font-semibold tracking-[-0.04em] text-ink/20 md:text-4xl">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-h3 font-semibold text-navy">{step.name}</h3>
          <div className="col-start-2 mt-2 md:col-start-3 md:mt-0">
            <p className="text-[1.0625rem] font-medium text-ink">{step.body}</p>
            {detailed ? <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{step.detail}</p> : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function Methodology() {
  return (
    <Section aria-labelledby="methodology-title" className="overflow-hidden bg-surface">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeader
            id="methodology-title"
            label="Methodology"
            title={["Strategy First.", "AI Accelerated.", "Expert Approved."]}
            lead="Six stages, run as a loop. Nothing is executed before it has been prioritised, and nothing is reported that cannot be traced."
          />
          <Reveal delay={0.1}>
            <p className="mt-8 flex max-w-sm items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-sm leading-relaxed text-muted">
              <RefreshCw aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-ink" />
              Optimize feeds Discover. Each cycle starts with better evidence than the last one had.
            </p>
            <ArrowLink href="/methodology/" className="mt-8">
              Read the full methodology
            </ArrowLink>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" y={24} delay={0.1}>
          <MethodLoop />
        </Reveal>
      </div>
    </Section>
  );
}
