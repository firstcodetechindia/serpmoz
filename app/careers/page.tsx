import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { site } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Careers",
  description:
    "Work at SERPMOZ. We look for specialists in search, paid media, content, analytics and engineering who use AI well and take responsibility for outcomes.",
  path: "/careers/",
};

export const metadata: Metadata = buildMetadata(meta);

const traits = [
  { title: "Depth in a craft", body: "Search, paid media, content, analytics, CRO, automation or engineering. You know one of them properly." },
  { title: "Fluent with AI, sceptical of it", body: "You use it daily, and you check what it gives you." },
  { title: "Commercial instinct", body: "You ask what a piece of work is for before you start it." },
  { title: "Clear writing", body: "You can explain a recommendation to a founder and a developer." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: meta.path }]}
        label="Careers"
        title="For people who would rather be right than busy."
        lead="We are building a team of specialists who use AI to work faster and their own judgement to decide what the work should be."
      />

      <Block label="Who does well here" title="Four things we look for." className="border-t-0">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {traits.map((t) => (
            <li key={t.title} className="border-t border-line py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{t.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block label="Open roles" title="No roles are listed at the moment." className="bg-surface">
        <Prose>
          <p>
            When we are hiring, roles will be published on this page. If you think you would add something we are missing,
            we are glad to hear from you in the meantime.
          </p>
        </Prose>
        <div className="mt-8">
          {site.contactEmail ? (
            <CtaLink href={`mailto:${site.contactEmail}?subject=Careers`} variant="solid" size="lg" arrow="up-right">
              Write to us
            </CtaLink>
          ) : (
            <CtaLink href="/contact/" variant="solid" size="lg">Get in touch</CtaLink>
          )}
        </div>
      </Block>
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
