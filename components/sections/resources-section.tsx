import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArticleList } from "@/components/resources/article-list";
import { ArrowLink } from "@/components/ui/cta-link";
import { articleSummaries, categoryOptions } from "@/lib/resources";

export function ResourcesSection() {
  return (
    <Section aria-labelledby="resources-title" className="border-t border-line bg-surface">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="resources-title"
            index="15"
            label="SERPMOZ Research"
            title={["Research,", "Not Recycled Advice."]}
            lead="What we learn from doing the work, written up with the method shown."
          />
          <ArrowLink href="/resources/" className="shrink-0">
            Visit the resource library
          </ArrowLink>
        </div>
        <Reveal className="mt-12 lg:mt-16">
          <ArticleList items={articleSummaries()} categories={categoryOptions} limit={5} />
        </Reveal>
      </div>
    </Section>
  );
}
