import { AiSearchPanel } from "@/components/growthos/ai-search-panel";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { SignalField } from "@/components/visuals/signal-field";
import { aiVisibility as d } from "@/data/dashboard";

export function AiVisibility() {
  return (
    <Section aria-labelledby="ai-visibility-title" tone="dark">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <SignalField cx={30} cy={62} className="opacity-40" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="ai-visibility-title"
            index="04"
            label="AI search visibility"
            title={["Your Next Customer", "May Not Click Google."]}
            tone="dark"
            className="lg:col-span-7"
          />
          <Reveal className="lg:col-span-5 lg:pt-12" delay={0.1}>
            <p className="text-lead text-white/75">
              They may ask an assistant for a shortlist and never see a results page. If the answer names three companies,
              the question is whether you are one of them, and what was said.
            </p>
            <CtaLink href="/ai-seo-services/" variant="primary" size="lg" className="mt-8" data-cta="ai-visibility-check">
              Check Your AI Visibility
            </CtaLink>
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-20" y={24}>
          <AiSearchPanel />
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:col-span-7" aria-label="AI discovery environments we track">
            {d.platforms.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                <span aria-hidden className="size-1.5 rounded-full bg-cyan" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed text-white/55 md:col-span-5">
            Illustrative interface with sample data. AI answers vary between runs and no platform offers guaranteed
            placement; we measure trends across repeated prompts and report them as ranges.
          </p>
        </div>
      </div>
    </Section>
  );
}
