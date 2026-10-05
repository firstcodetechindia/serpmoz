import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { getLegalDoc } from "@/data/legal";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export function legalMetadata(slug: string) {
  const doc = getLegalDoc(slug);
  return buildMetadata({ title: doc.title, description: doc.description, path: `/${doc.slug}/` });
}

export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegalDoc(slug);
  const path = `/${doc.slug}/`;
  const updated = new Date(`${doc.updated}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return (
    <>
      <PageHero crumbs={[{ name: doc.title, href: path }]} label={`Last updated ${updated}`} title={doc.title} lead={doc.intro} />
      <article className="shell py-16 md:py-24">
        <div className="max-w-2xl">
          {doc.sections.map((s) => (
            <section key={s.heading} className="border-t border-line py-8 first:border-t-0 first:pt-0">
              <h2 className="text-h3 font-semibold text-navy">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <JsonLd data={webPageSchema({ path, title: doc.title, description: doc.description })} />
    </>
  );
}
