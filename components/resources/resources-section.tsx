import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ResourceCategories } from "@/components/resources/resource-categories";
import { ArrowLink } from "@/components/ui/cta-link";

export function ResourcesSection() {
  return (
    <Section aria-labelledby="resources-title" className="border-t border-line">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              id="resources-title"
              index="15"
              label="Resources"
              title={["Research,", "Not Recycled Advice."]}
              lead="Eight areas where we publish what we learn from doing the work: the method, the data and the reasoning."
            />
            <ArrowLink href="/resources/" className="mt-8">
              Visit the resource library
            </ArrowLink>
          </div>
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
          <ResourceCategories />
        </Reveal>
      </div>
    </Section>
  );
}
