import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ServicesIndex } from "@/components/services/services-index";

export function ServicesSection() {
  return (
    <Section aria-labelledby="services-title" className="border-t border-line bg-surface">
      <div className="shell">
        <SectionHeader
          id="services-title"
          index="06"
          label="Services"
          title={["Everything Your", "Growth Engine Needs."]}
          lead="Five capability groups, planned together and run by one team, so that each channel makes the others work harder."
        />
        <Reveal className="mt-14 lg:mt-20">
          <ServicesIndex />
        </Reveal>
      </div>
    </Section>
  );
}
