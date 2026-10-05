import { CaseStudyFramework } from "@/components/case-studies/case-study-framework";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink } from "@/components/ui/cta-link";

export function CaseStudiesSection() {
  return (
    <Section aria-labelledby="case-studies-title" className="border-t border-line">
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

        <Reveal className="mt-14 lg:mt-20">
          <CaseStudyFramework />
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-5 rounded-panel border border-dashed border-line-strong p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink">
            <span className="font-semibold">We publish client work only with written approval and verified figures.</span>{" "}
            Our first case studies are being prepared to that standard. Until then, we would rather show you the method than
            an unverifiable number.
          </p>
          <ArrowLink href="/case-studies/" className="shrink-0">
            How we document results
          </ArrowLink>
        </Reveal>
      </div>
    </Section>
  );
}
