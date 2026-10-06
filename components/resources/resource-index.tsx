import { PageHero } from "@/components/layout/page-hero";
import { ArticleList } from "@/components/resources/article-list";
import { ResourceCategories } from "@/components/resources/resource-categories";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Block } from "@/components/services/page-parts";
import { articleSummaries, categoryOptions } from "@/lib/resources";
import { webPageSchema } from "@/lib/seo/schema";

type Props = {
  meta: { title: string; description: string; path: string };
  label: string;
  heading: string;
  lead: string;
  /** Limit the listing to one format */
  format?: "Guide" | "Report" | "Insight";
  /** Shown when nothing of this format has been published yet */
  emptyNote?: string;
  showCategories?: boolean;
};

/** Shared layout for /resources/, /guides/ and /reports/. */
export function ResourceIndex({ meta, label, heading, lead, format, emptyNote, showCategories }: Props) {
  const items = articleSummaries(format);
  const crumbs = format
    ? [{ name: "Resources", href: "/resources/" }, { name: heading.replace(/\.$/, ""), href: meta.path }]
    : [{ name: "Resources", href: meta.path }];
  return (
    <>
      <PageHero tone="light" crumbs={crumbs} label={label} title={heading} lead={lead} />
      <section className="py-14 md:py-20">
        <div className="shell">
          {items.length ? (
            <>
              <h2 className="sr-only">{heading.replace(/\.$/, "")}: all pieces</h2>
              <ArticleList items={items} categories={categoryOptions} />
            </>
          ) : (
            <div className="rounded-panel border border-dashed border-line-strong p-8 md:p-12">
              <p className="label-mono text-muted">Nothing published yet</p>
              <p className="mt-3 max-w-2xl text-lead text-ink">{emptyNote}</p>
            </div>
          )}
        </div>
      </section>
      {showCategories ? (
        <Block label="Research areas" title="Eight subjects, and the questions we are working on." className="bg-surface">
          <ResourceCategories detailed />
        </Block>
      ) : null}
      <FinalCta />
      <JsonLd data={webPageSchema({ ...meta, type: "CollectionPage" })} />
    </>
  );
}
