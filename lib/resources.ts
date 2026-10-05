import type { ArticleSummary } from "@/components/resources/article-list";
import { articles, readingTime, resourceCategories } from "@/data/resources";

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export const categoryName = (slug: string) => resourceCategories.find((c) => c.slug === slug)?.name ?? slug;

/** Articles as plain serialisable summaries for client components. */
export function articleSummaries(format?: string): ArticleSummary[] {
  return articles
    .filter((a) => !format || a.format === format)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      category: a.category,
      categoryName: categoryName(a.category),
      format: a.format,
      author: a.author,
      date: formatDate(a.publishedAt),
      minutes: readingTime(a),
    }));
}

export const categoryOptions = resourceCategories.map((c) => ({ slug: c.slug, name: c.name }));
