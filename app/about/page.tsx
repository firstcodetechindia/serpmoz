import type { Metadata } from "next";
import { AuditCta } from "@/components/layout/audit-cta";
import { PageHero } from "@/components/layout/page-hero";
import { PhotoBand } from "@/components/layout/photo-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Block, Prose, RuledRows } from "@/components/services/page-parts";
import { ArrowLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { Venn } from "@/components/visuals/venn";
import { methodology, pillars } from "@/data/growth";
import { photos } from "@/data/images";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "About SERPMOZ: An AI-Powered Digital Growth Company",
  description:
    "Who SERPMOZ is, what we believe and how we work. AI does the volume, experts decide what matters, and every plan is managed against leads and revenue.",
  path: "/about/",
};

export const metadata: Metadata = buildMetadata(meta);

const combines = [
  { name: "Search and AI search", body: "Being found in search engines, maps and AI-generated answers." },
  { name: "Paid media", body: "Budget placed where it returns, and moved when it does not." },
  { name: "Content and social", body: "Evidence that you know the subject, published where buyers look." },
  { name: "Conversion and automation", body: "More of the right visitors taking the next step, and being followed up." },
  { name: "Web and digital", body: "Sites built for speed, search and enquiry." },
  { name: "Measurement", body: "One view from first impression to closed revenue." },
];

const notThis = [
  {
    title: "Not a channel agency",
    body: "We do not sell SEO, ads or social in isolation and report on each in its own terms. Channels are planned together and judged by what they contribute to leads and revenue.",
  },
  {
    title: "Not a package seller",
    body: "There are no fixed tiers with a set number of posts or links. Scope follows a diagnostic of your business, and it changes when the evidence does.",
  },
  {
    title: "Not an AI content factory",
    body: "We use AI heavily, and we do not publish what it produces unchecked. A specialist reviews anything that goes out under your name.",
  },
  {
    title: "Not in the business of guarantees",
    body: "Nobody controls search engines, AI models or your competitors. We commit to a method, a scope and honest reporting, and we set targets against your own baseline.",
  },
  {
    title: "Not a software vendor",
    body: "The work is done by people, using AI and established tools. A platform called GrowthOS is planned; it is not something we are selling today.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: meta.path }]}
        label="About SERPMOZ"
        title="AI-powered. Expert-led. Revenue-focused."
        lead="SERPMOZ is an AI-powered digital growth company. We help businesses become discoverable wherever their customers now search, and we connect that visibility to leads and revenue."
        aside={<Photo photo={photos.teamOffice} sizes="(min-width: 1024px) 480px, 100vw" priority className="aspect-[4/3] rounded-panel shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:aspect-[5/4]" />}
      />

      <Block label="Who we are" title="A growth company, built for how people search now." className="border-t-0">
        <Prose>
          <p>
            Buyers no longer discover a business in one place. They search, ask an AI assistant, check a map, read reviews
            and compare options on a marketplace or a social feed, often in a single afternoon.
          </p>
          <p>
            SERPMOZ exists to make a business visible across that whole journey, and then to make the visibility count.
            We bring the disciplines growth depends on into one plan and manage them against one outcome.
          </p>
        </Prose>
        <ul className="mt-10 grid border-b border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {combines.map((c) => (
            <li key={c.name} className="border-t border-line py-5">
              <h3 className="font-semibold tracking-[-0.01em] text-navy">{c.name}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{c.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="label-mono text-muted">What we believe</p>
            <h2 className="mt-4 max-w-md text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              AI can do the work. Experts know what work matters.
            </h2>
            <Prose className="mt-6">
              <p>
                AI has made marketing execution easier. Research, drafting, analysis and reporting that used to take weeks
                can now be done in days.
              </p>
              <p>
                <strong>That has not made growth easier.</strong> When everyone can produce more, the advantage moves to the
                people who know what is worth producing: which opportunities carry commercial value, which channels deserve
                investment, why a competitor is winning and why traffic is not converting.
              </p>
              <p>
                SERPMOZ is organised around that division of labour. AI does the volume. Experts set the direction, check
                the output and answer for the result.
              </p>
            </Prose>
          </div>
          <figure className="lg:col-span-6">
            <Venn />
            <figcaption className="mx-auto mt-4 max-w-sm text-center text-sm text-muted">
              AI brings speed and scale. Experts bring judgement and accountability. We work where the two overlap.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted">How we work</p>
            <h2 className="mt-4 max-w-sm text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">
              Diagnosis before prescription.
            </h2>
            <Prose className="mt-6">
              <p>
                Every engagement follows the same six stages, in the same order. We do not recommend a channel before we
                understand the business, and we do not start work before it has been prioritised.
              </p>
            </Prose>
            <Photo
              photo={photos.strategyWhiteboard}
              sizes="(min-width: 1024px) 440px, 100vw"
              className="mt-8 aspect-[4/3] rounded-panel"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-b border-line">
              {methodology.map((s, i) => (
                <li key={s.name} className="grid grid-cols-[2.75rem_1fr] gap-x-3 border-t border-line py-5">
                  <span className="label-mono pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-navy">{s.name}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ArrowLink href="/methodology/">Read the methodology</ArrowLink>
              <ArrowLink href="/engagement-models/">See the engagement models</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 md:pb-24">
        <PhotoBand photo={photos.teamWorkshop} label="How we think" statement="The scarce skill is no longer making things. It is knowing which things to make.">
          <p>That is the work we organise around, and the work we expect to be judged on.</p>
        </PhotoBand>
      </div>

      <Block label="What we are not" title="Five things worth saying plainly." className="bg-surface">
        <RuledRows rows={notThis} numbered={false} />
      </Block>

      <Block label="Principles" title="How we choose to operate.">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {pillars.map((p) => (
            <li key={p.name} className="border-t border-line py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{p.name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <AuditCta location="about" />
      <JsonLd data={webPageSchema({ ...meta, type: "AboutPage" })} />
    </>
  );
}
