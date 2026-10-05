import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { AiExpertSplit, Block, Prose } from "@/components/services/page-parts";
import { ArrowLink, CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { photos } from "@/data/images";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Careers: How We Work and Who We Look For",
  description:
    "How SERPMOZ works and the disciplines we value: search, paid media, content, analytics, CRO, automation and engineering. We welcome speculative introductions.",
  path: "/careers/",
};

export const metadata: Metadata = buildMetadata(meta);

const disciplines = [
  { name: "Search and AI search", body: "Technical SEO, content strategy, local search and visibility in AI-generated answers." },
  { name: "Paid media", body: "Search, social and marketplace advertising managed against return, not spend." },
  { name: "Content and editorial", body: "Writing and editing that shows real knowledge of a subject and a reader." },
  { name: "Analytics and measurement", body: "Tracking, attribution and reporting that people outside marketing can trust." },
  { name: "Conversion and research", body: "User research, experimentation and landing pages that earn the next step." },
  { name: "Automation and CRM", body: "Journeys, lead routing and the systems that connect marketing to sales." },
  { name: "Web engineering", body: "Fast, accessible sites built for search and for enquiry." },
  { name: "Growth strategy", body: "Deciding what matters, in what order, and explaining why to the people paying for it." },
];

const traits = [
  { title: "Depth in a craft", body: "You know one discipline properly, and enough about its neighbours to work with them." },
  { title: "Fluent with AI, sceptical of it", body: "You use it daily, and you check what it gives you before anyone else sees it." },
  { title: "Commercial instinct", body: "You ask what a piece of work is for before you start it." },
  { title: "Clear writing", body: "You can explain a recommendation to a founder and to a developer." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: meta.path }]}
        label="Careers"
        title="For people who would rather be right than busy."
        lead="SERPMOZ runs on a simple division of labour: AI for speed, people for judgement. If that is how you like to work, we would be glad to hear from you."
        aside={<Photo photo={photos.teamMeeting} sizes="(min-width: 1024px) 480px, 100vw" priority className="aspect-[4/3] rounded-panel shadow-[0_40px_90px_-30px_rgb(0_0_0/0.65)] lg:aspect-[5/4]" />}
      >
        <CtaLink href="/contact/" variant="primary" size="lg" data-cta="careers-hero-contact">
          Introduce Yourself
        </CtaLink>
      </PageHero>

      <Block label="How we work" title="AI does the volume. People make the calls." className="border-t-0">
        <Prose>
          <p>
            Our work follows one method: discover, diagnose, prioritize, execute, measure, optimize. AI is used at every
            stage to research, draft, analyse and monitor. It does not decide what matters, and it does not approve its
            own output.
          </p>
          <p>
            That shapes the job. Less time goes on producing things by hand, and more goes on choosing what to produce,
            checking that it is right and explaining the reasoning to a client.
          </p>
        </Prose>
        <div className="mt-10">
          <AiExpertSplit
            ai={["Research and data processing", "First drafts and variants", "Monitoring and routine reporting"]}
            experts={["What is worth doing", "Whether the output is good enough", "What to tell the client, and why"]}
          />
        </div>
        <ArrowLink href="/methodology/" className="mt-8">Read the methodology</ArrowLink>
      </Block>

      <Block label="Disciplines" title="The kinds of work we value." className="bg-surface">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {disciplines.map((d) => (
            <li key={d.name} className="border-t border-line py-5">
              <h3 className="text-lg font-semibold tracking-[-0.015em] text-navy">{d.name}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{d.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          This is a description of the disciplines our work draws on. It is not a list of open positions.
        </p>
      </Block>

      <Block label="Who does well here" title="Four things we look for.">
        <ul className="grid border-b border-line sm:grid-cols-2 sm:gap-x-10">
          {traits.map((t) => (
            <li key={t.title} className="border-t border-line py-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{t.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block label="Get in touch" title="We do not list openings here." className="bg-surface">
        <Prose>
          <p>
            We would rather hear from people who are good at one of these disciplines than advertise a role and wait. If
            that is you, write to us through the contact form.
          </p>
          <p>
            Tell us what you do, what you have worked on and how you use AI in your own practice. Links to work are more
            useful than a long covering note. We read every message, and we will reply if there is a conversation to
            have.
          </p>
        </Prose>
        <div className="mt-8">
          <CtaLink href="/contact/" variant="solid" size="lg" data-cta="careers-contact">
            Write to Us
          </CtaLink>
        </div>
      </Block>
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
