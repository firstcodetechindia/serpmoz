import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { CtaLink } from "@/components/ui/cta-link";
import { AiAnswer } from "@/components/visuals/ai-answer";
import { SignalField } from "@/components/visuals/signal-field";
import { aiSearchCapabilities } from "@/data/growth";

export function AiVisibility() {
  return (
    <Section inset aria-labelledby="ai-visibility-title" tone="dark">
      <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <SignalField cx={24} cy={66} className="opacity-40" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="ai-visibility-title"
            label="AI search"
            title={["Your Next Customer May Not", "Search the Way They Used To."]}
            tone="dark"
            className="lg:col-span-7"
          />
          <Reveal className="lg:col-span-5 lg:pt-12" delay={0.1}>
            <p className="text-lead text-white/75">
              More buyers now ask an assistant for a shortlist and read the answer instead of a results page. If that
              answer names three companies, the question is whether you are one of them, and what was said.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-6" y={24}>
            <AiAnswer />
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label-mono text-white/55">What the work covers</p>
            <ol className="mt-4 border-b border-white/12">
              {aiSearchCapabilities.map((c, i) => (
                <Reveal as="li" key={c.name} delay={i * 0.04} className="group grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-white/12 py-4 transition-colors hover:bg-white/[0.03]">
                  <span className="label-mono pt-1 text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">{c.name}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/65">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/ai-seo-services/" variant="primary" size="lg" data-cta="ai-search-services">AI Search Services</CtaLink>
              <CtaLink href="/geo-services/" variant="onDark" size="lg" arrow={false}>How GEO Works</CtaLink>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/50">
              No one can guarantee a place in an AI answer, and we do not claim to. Results vary by assistant, question and
              market; we measure presence across repeated prompts and report it as a range.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
