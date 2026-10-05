import type { Metadata } from "next";
import { GrowthAuditForm } from "@/components/forms/growth-audit-form";
import { PageHero } from "@/components/layout/page-hero";
import { ArrowLink } from "@/components/ui/cta-link";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

const meta = {
  title: "Contact SERPMOZ: Talk to a Growth Strategist",
  description:
    "Tell SERPMOZ where you are today and where you want to go. A growth strategist reads every enquiry and replies by email.",
  path: "/contact/",
};

export const metadata: Metadata = buildMetadata(meta);

const steps = [
  { title: "You tell us the situation", body: "Business, market, goals and what is in the way. It takes a few minutes." },
  { title: "A strategist reads it", body: "A person, not an autoresponder. We look at your site before we reply." },
  { title: "We reply by email", body: "With an answer, a few questions, or a suggested time to talk." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: meta.path }]}
        label="Contact"
        title="Talk to a growth strategist."
        lead="Tell us where you are today, where you want to go and what is holding growth back. Questions about services, engagements or working together all start here."
      />

      <section id="growth-audit" className="scroll-mt-24 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 id="growth-audit-title" className="text-h3 font-semibold text-navy">Tell us about your business</h2>
              <ol className="mt-8 border-b border-line">
                {steps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-t border-line py-5">
                    <span className="label-mono pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-panel border border-line bg-surface p-5">
                <p className="label-mono text-blue-ink">Looking for the growth audit?</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  It has its own short form, with questions about the channels you run today.
                </p>
                <ArrowLink href="/growth-audit/" className="mt-4">Request a growth audit</ArrowLink>
              </div>
              {site.contactEmail ? (
                <p className="mt-8 text-[0.9375rem] text-muted">
                  Prefer email?{" "}
                  <a href={`mailto:${site.contactEmail}`} className="text-blue-ink underline underline-offset-4">{site.contactEmail}</a>
                </p>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <GrowthAuditForm variant="contact" labelledBy="growth-audit-title" />
          </div>
        </div>
      </section>
      <JsonLd data={webPageSchema({ ...meta, type: "ContactPage" })} />
    </>
  );
}
