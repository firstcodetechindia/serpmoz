import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaLink } from "@/components/ui/cta-link";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { services } from "@/data/services";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

const meta = {
  title: "Digital Marketing Services",
  description: `All ${services.length} SERPMOZ services across search and AI, performance marketing, content and social, conversion and automation, and web development.`,
  path: "/services/",
};

export const metadata: Metadata = buildMetadata(meta);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: meta.path }]}
        label="Services"
        title="Everything You Need to Build a Stronger Digital Growth Engine."
        lead={`${services.length} services in five disciplines. Each has its own page, its own process and its own specialist. They are planned together so that every channel makes the others work harder.`}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg">{cta.audit.label}</CtaLink>
      </PageHero>

      <nav aria-label="Disciplines" className="sticky top-[5.25rem] z-30 hidden border-b border-line bg-surface/90 backdrop-blur-md lg:block">
        <ul className="shell flex gap-8">
          {serviceCategories.map((c) => (
            <li key={c.id}><a href={`#${c.id}`} className="block py-4 text-sm font-medium text-muted transition-colors hover:text-navy">{c.label}</a></li>
          ))}
        </ul>
      </nav>

      {serviceCategories.map((c, i) => (
        <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className={cn("scroll-mt-36 py-16 md:py-24", i % 2 ? "bg-canvas" : "bg-surface")}>
          <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className={cn("lg:col-span-4", i % 2 && "lg:order-2 lg:col-start-9")}>
              <div className="lg:sticky lg:top-40">
                <p className="label-mono text-muted">{String(i + 1).padStart(2, "0")} / {String(serviceCategories.length).padStart(2, "0")}</p>
                <h2 id={`${c.id}-title`} className="mt-4 text-h2 font-semibold text-navy">{c.label}</h2>
                <p className="mt-4 text-lead text-muted">{c.statement}</p>
                <div className="mt-8 hidden lg:block"><CapabilityVisual category={c.id} /></div>
              </div>
            </div>
            <ul className={cn("border-b border-line lg:col-span-7", i % 2 ? "lg:order-1" : "lg:col-start-6")}>
              {c.items.map((item) => (
                <li key={item.href} className="border-t border-line">
                  <Link href={item.href} className="group flex items-center justify-between gap-6 py-6">
                    <span>
                      <span className="block text-2xl font-semibold tracking-[-0.025em] text-navy transition-colors group-hover:text-blue-ink">{item.name}</span>
                      <span className="mt-1.5 block max-w-xl text-[0.9375rem] leading-relaxed text-muted">{item.summary}</span>
                    </span>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-all duration-300 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange"><ArrowUpRight aria-hidden className="size-4.5" /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <FinalCta />
      <JsonLd data={webPageSchema(meta)} />
    </>
  );
}
