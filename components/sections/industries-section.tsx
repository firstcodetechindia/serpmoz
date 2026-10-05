import { IndustryExplorer } from "@/components/industries/industry-explorer";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowLink } from "@/components/ui/cta-link";

export function IndustriesSection() {
  return (
    <Section aria-labelledby="industries-title" className="border-t border-line bg-surface">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="industries-title"
            index="09"
            label="Industries"
            title={["Growth Strategies Built", "Around Your Business."]}
            className="lg:col-span-8"
          />
          <Reveal className="lg:col-span-4 lg:pt-12" delay={0.1}>
            <p className="text-lead text-muted">
              A dental practice and a SaaS company do not share a buyer, a sales cycle or a search landscape. The plan should
              not look the same either.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 lg:mt-16">
          <IndustryExplorer />
        </Reveal>
        <ArrowLink href="/industries/" className="mt-10">
          All twenty industries
        </ArrowLink>
      </div>
    </Section>
  );
}
