import { SpyNav } from "@/components/navigation/spy-nav";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { ArticleCover } from "@/components/resources/article-cover";
import { ArticleMeta } from "@/components/resources/article-list";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkList } from "@/components/services/page-parts";
import { articles, getArticle, readingTime } from "@/data/resources";
import { getService } from "@/data/services";
import { categoryName, formatDate } from "@/lib/resources";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.summary.length > 158 ? `${a.summary.slice(0, a.summary.lastIndexOf(" ", 155))}…` : a.summary, path: `/resources/${a.slug}/`, type: "article", absoluteTitle: a.title.length > 50 });
}

const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const path = `/resources/${a.slug}/`;
  const others = articles.filter((x) => x.slug !== a.slug);
  // Same category first, then the rest in publication order.
  const more = [...others.filter((x) => x.category === a.category), ...others.filter((x) => x.category !== a.category)].slice(0, 3);
  const relatedServices = a.relatedServices.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <PageHero
        tone="light"
        crumbs={[
          { name: "Resources", href: "/resources/" },
          { name: a.format, href: path },
        ]}
        label={`${categoryName(a.category)} · ${a.format}`}
        title={a.title}
        lead={a.summary}
      >
        <ArticleMeta a={{ author: `${a.author}, ${a.authorRole}`, date: formatDate(a.publishedAt), minutes: readingTime(a) }} className="text-sm" />
      </PageHero>

      <article className="shell py-14 md:py-20">
        <ArticleCover slug={a.slug} category={a.category} className="aspect-[21/9] rounded-panel" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-panel bg-navy p-6 text-white md:p-7">
                <h2 className="label-mono text-cyan">Key points</h2>
                <ul className="mt-4">
                  {a.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 border-t border-white/12 py-3 text-[0.9375rem] leading-snug first:border-t-0 first:pt-0">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <SpyNav aria-label="In this piece" className="mt-6 hidden lg:block">
                <p className="label-mono text-muted">In this piece</p>
                <ol className="mt-3 border-l border-line">
                  {a.sections.map((s) => (
                    <li key={s.heading}>
                      <a href={`#${anchor(s.heading)}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-navy hover:text-navy aria-[current=location]:border-orange aria-[current=location]:font-medium aria-[current=location]:text-navy">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </SpyNav>
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            {a.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0">
                <h2 className="text-h3 font-semibold text-navy">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-[1.0625rem] leading-[1.7] text-ink/85">{p}</p>
                ))}
                {s.points ? (
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink">
                        <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-blue" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>

      {relatedServices.length ? (
        <section className="border-t border-line py-14 md:py-20">
          <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            <div className="min-w-0 lg:col-span-4">
              <h2 className="label-mono text-muted">Related services</h2>
              <p className="mt-4 max-w-sm text-h3 font-semibold text-navy">Where this thinking is put to work.</p>
            </div>
            <div className="min-w-0 lg:col-span-8">
              <LinkList links={relatedServices.map((s) => ({ label: s.name, href: `/${s.slug}/`, note: s.summary }))} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line bg-surface py-14 md:py-20">
        <div className="shell">
          <h2 className="label-mono text-muted">Related articles</h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {more.map((m) => (
              <li key={m.slug} className="min-w-0">
                <Link href={`/resources/${m.slug}/`} className="group block">
                  <ArticleCover slug={m.slug} category={m.category} tone="light" className="aspect-[16/9] rounded-2xl" />
                  <p className="label-mono mt-4 text-blue-ink">{categoryName(m.category)} <span className="text-muted">· {m.format}</span></p>
                  <h3 className="mt-2 text-lg leading-snug font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{m.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
      <JsonLd data={articleSchema({ path, title: a.title, description: a.summary, author: a.author, publishedAt: a.publishedAt })} />
    </>
  );
}
