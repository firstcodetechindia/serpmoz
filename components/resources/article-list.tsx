"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleCover } from "@/components/resources/article-cover";
import { cn } from "@/lib/utils";

export type ArticleSummary = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  categoryName: string;
  format: string;
  author: string;
  date: string;
  minutes: number;
};

export function ArticleMeta({ a, className }: { a: Pick<ArticleSummary, "author" | "date" | "minutes">; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted", className)}>
      <span>{a.author}</span>
      <span aria-hidden>·</span>
      <span>{a.date}</span>
      <span aria-hidden>·</span>
      <span>{a.minutes} min read</span>
    </p>
  );
}

/**
 * Publication front page: one lead piece, the rest as a ruled list, with a
 * category filter. Receives plain data so it can sit on any page.
 */
export function ArticleList({ items, categories, limit }: { items: ArticleSummary[]; categories: { slug: string; name: string }[]; limit?: number }) {
  const [filter, setFilter] = useState("all");
  const used = new Set(items.map((i) => i.category));
  const visible = (filter === "all" ? items : items.filter((i) => i.category === filter)).slice(0, limit);
  const [lead, ...rest] = visible;

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 flex gap-1.5 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
        {[{ slug: "all", name: "All" }, ...categories].map((c) => {
          const empty = c.slug !== "all" && !used.has(c.slug);
          return (
            <button
              key={c.slug}
              type="button"
              aria-pressed={filter === c.slug}
              disabled={empty}
              title={empty ? "Nothing published in this category yet" : undefined}
              onClick={() => setFilter(c.slug)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm whitespace-nowrap transition-colors",
                filter === c.slug ? "border-navy bg-navy text-white" : "border-line text-ink hover:border-navy/50",
                empty && "cursor-not-allowed border-dashed text-muted/70 hover:border-line",
              )}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      {lead ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <Link href={`/resources/${lead.slug}/`} className="group block lg:col-span-7">
            <ArticleCover slug={lead.slug} category={lead.category} className="aspect-[16/9] rounded-panel" />
            <p className="label-mono mt-6 flex items-center gap-3 text-blue-ink">
              {lead.categoryName}
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <span className="text-muted">{lead.format}</span>
            </p>
            <h3 className="mt-3 text-[clamp(1.5rem,1.2rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy transition-colors group-hover:text-blue-ink">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{lead.summary}</p>
            <ArticleMeta a={lead} className="mt-4" />
          </Link>

          <ul className="border-b border-line lg:col-span-5">
            {rest.map((a) => (
              <li key={a.slug} className="border-t border-line">
                <Link href={`/resources/${a.slug}/`} className="group grid grid-cols-[1fr_5.5rem] items-start gap-4 py-5">
                  <div>
                    <p className="label-mono text-blue-ink">
                      {a.categoryName} <span className="text-muted">· {a.format}</span>
                    </p>
                    <h3 className="mt-2 flex items-start gap-1 text-lg leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">
                      {a.title}
                      <ArrowUpRight aria-hidden className="mt-1 size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <ArticleMeta a={a} className="mt-2" />
                  </div>
                  <ArticleCover slug={a.slug} category={a.category} tone="light" className="aspect-square rounded-xl" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-8 text-muted">Nothing published in this category yet.</p>
      )}
    </div>
  );
}
