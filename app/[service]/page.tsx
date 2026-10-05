import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, UserRoundCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { AiExpertSplit, Faqs, LinkList, RuledRows } from "@/components/services/page-parts";
import { CtaLink } from "@/components/ui/cta-link";
import { Photo } from "@/components/ui/photo";
import { CapabilityVisual } from "@/components/visuals/capability-visual";
import { photos } from "@/data/images";
import { getService, services } from "@/data/services";
import { serviceCategories } from "@/data/services/catalog";
import { cta } from "@/lib/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";
import type { Service, ServiceCategoryId } from "@/types";

type Props = { params: Promise<{ service: string }> };

// Only the services defined in data/services exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).service);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/${service.slug}/` });
}

type Part = "problem" | "why" | "approach" | "process" | "deliverables" | "outcomes" | "audience";

/**
 * Each discipline tells its story in a different order and with its own
 * photograph and accent, so the pages do not read as one template.
 */
const layouts: Record<ServiceCategoryId, { order: Part[]; photo: keyof typeof photos; why: string; steps: "row" | "line" }> = {
  "search-ai": { order: ["problem", "why", "approach", "process", "deliverables", "outcomes", "audience"], photo: "analystScreens", why: "bg-blue-wash", steps: "row" },
  performance: { order: ["problem", "outcomes", "why", "approach", "process", "deliverables", "audience"], photo: "analystDesk", why: "bg-orange-wash", steps: "line" },
  "content-social": { order: ["why", "audience", "problem", "approach", "process", "deliverables", "outcomes"], photo: "teamWorkshop", why: "bg-cyan-wash", steps: "row" },
  "conversion-automation": { order: ["problem", "why", "process", "approach", "outcomes", "deliverables", "audience"], photo: "teamOffice", why: "bg-orange-wash", steps: "line" },
  "web-digital": { order: ["why", "problem", "approach", "deliverables", "process", "outcomes", "audience"], photo: "strategyWhiteboard", why: "bg-blue-wash", steps: "row" },
};

const h2 = "text-h2 font-semibold text-navy";
const eyebrow = "label-mono text-muted";

function Band({ id, tone, children }: { id: string; tone: "surface" | "canvas"; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 md:py-14", tone === "surface" ? "bg-surface" : "bg-canvas")}>
      <div className="shell">{children}</div>
    </section>
  );
}

function Problem({ s, tone }: { s: Service; tone: "surface" | "canvas" }) {
  return (
    <Band id="problem" tone={tone}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className={eyebrow}>The problem</p>
          <h2 className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-navy">Signs this is the right conversation.</h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {s.problems.map((p, i) => (
            <li key={p} className={cn("rounded-panel border border-line p-6", tone === "surface" ? "bg-canvas" : "bg-surface")}>
              <span className="tabular text-sm font-semibold text-orange-ink">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-[1.0625rem] leading-snug font-medium tracking-[-0.01em] text-ink">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

function Why({ s, wash }: { s: Service; wash: string }) {
  return (
    <section id="why" className={cn("scroll-mt-24 py-10 md:py-14", wash)}>
      <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        <p className={cn(eyebrow, "lg:col-span-3 lg:pt-3")}>Why {s.name} matters</p>
        <div className="lg:col-span-9">
          <h2 className="sr-only">Why {s.name} matters</h2>
          <p className="text-[clamp(1.375rem,1.05rem+1.4vw,2.125rem)] leading-[1.25] font-medium tracking-[-0.025em] text-navy">{s.why}</p>
        </div>
      </div>
    </section>
  );
}

function Approach({ s, tone }: { s: Service; tone: "surface" | "canvas" }) {
  return (
    <Band id="approach" tone={tone}>
      <p className={eyebrow}>The SERPMOZ approach</p>
      <h2 className={cn(h2, "mt-4 max-w-2xl")}>What the work covers.</h2>
      <div className="mt-12"><RuledRows rows={s.scope} /></div>
    </Band>
  );
}

function Process({ s, tone, steps }: { s: Service; tone: "surface" | "canvas"; steps: "row" | "line" }) {
  return (
    <Band id="process" tone={tone}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className={eyebrow}>Process</p>
          <h2 className={cn(h2, "mt-4")}>How an engagement runs.</h2>
        </div>
        <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted">AI carries the volume at each step. A specialist owns the decisions and signs off what goes out.</p>
      </div>
      {steps === "row" ? (
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {s.process.map((p, i) => (
            <li key={p.title} className={cn("relative rounded-panel p-6", i === s.process.length - 1 ? "bg-navy text-white" : tone === "surface" ? "bg-canvas" : "bg-surface shadow-soft")}>
              <span className={cn("tabular text-4xl leading-none font-semibold tracking-[-0.05em]", i === s.process.length - 1 ? "text-orange" : "text-navy/20")}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{p.title}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", i === s.process.length - 1 ? "text-white/75" : "text-muted")}>{p.body}</p>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="mt-12 max-w-3xl">
          {s.process.map((p, i) => (
            <li key={p.title} className="relative grid grid-cols-[3rem_1fr] gap-x-5 pb-9 last:pb-0">
              {i < s.process.length - 1 ? <span aria-hidden className="absolute top-12 left-[1.4375rem] h-[calc(100%-3rem)] w-px bg-line-strong" /> : null}
              <span className={cn("tabular flex size-12 items-center justify-center rounded-full text-sm font-semibold", i === s.process.length - 1 ? "bg-orange text-navy" : "bg-navy text-white")}>{i + 1}</span>
              <div className="pt-2">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{p.title}</h3>
                <p className="mt-1.5 text-[1.0625rem] leading-relaxed text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Band>
  );
}

function Deliverables({ s, photo }: { s: Service; photo: keyof typeof photos }) {
  return (
    <section id="deliverables" className="scroll-mt-24 bg-surface px-3 py-3 md:px-5 md:py-5">
      <div className="stage relative overflow-hidden rounded-[1.75rem] text-white">
        <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:radial-gradient(60%_70%_at_20%_10%,black,transparent)]" />
        <div className="shell relative grid grid-cols-1 gap-12 py-12 md:py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="label-mono text-cyan">Deliverables</p>
            <h2 className="mt-4 text-h2 font-semibold">What you receive.</h2>
            <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 border-t border-white/12 py-4 text-[1.0625rem] font-medium tracking-[-0.01em] text-white/90">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-navy"><Check aria-hidden className="size-3" strokeWidth={3} /></span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Photo photo={photos[photo]} sizes="(min-width: 1024px) 380px, 100vw" className="aspect-[4/3] rounded-panel" />
            <div className="mt-6">
              <h3 className="label-mono text-white/60">Technology and tools</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm text-white/85">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/45">Platforms we typically work across for this service. Named for clarity, not as partnerships or endorsements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes({ s, tone }: { s: Service; tone: "surface" | "canvas" }) {
  return (
    <Band id="outcomes" tone={tone}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className={eyebrow}>Expected business outcomes</p>
          <h2 className={cn(h2, "mt-4")}>What we plan around, and report on.</h2>
          <ol className="mt-8">
            {s.measures.map((m, i) => (
              <li key={m} className="flex items-baseline gap-4 border-t border-line py-4 last:border-b">
                <span className="label-mono text-blue-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-semibold tracking-[-0.02em] text-navy">{m}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-muted">Targets are set after the diagnostic, against your own baseline. We do not promise figures before we have seen the data, and results vary by market and starting point.</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className={eyebrow}>Division of labour</p>
          <div className="mt-4"><AiExpertSplit ai={s.ai} experts={s.experts} /></div>
        </div>
      </div>
    </Band>
  );
}

function Audience({ s, tone }: { s: Service; tone: "surface" | "canvas" }) {
  return (
    <Band id="who-it-is-for" tone={tone}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className={eyebrow}>Who it is for</p>
          <h2 className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-navy">A good fit if you are one of these.</h2>
        </div>
        <ul className="lg:col-span-8">
          {s.audience.map((a) => (
            <li key={a} className="group flex items-center gap-5 border-t border-line py-5 last:border-b">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-wash text-blue-ink transition-colors group-hover:bg-navy group-hover:text-white"><UserRoundCheck aria-hidden className="size-5" /></span>
              <span className="text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-snug font-medium tracking-[-0.015em] text-ink">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).service);
  if (!service) notFound();

  const path = `/${service.slug}/`;
  const category = serviceCategories.find((c) => c.id === service.category)!;
  const layout = layouts[service.category];
  const related = service.related.map(getService).filter((s) => s !== undefined);
  const action = service.cta ?? cta.audit.label;

  // Light bands alternate; the tinted "why" band and the navy deliverables band reset the rhythm.
  let flip = false;
  const tone = (): "surface" | "canvas" => ((flip = !flip) ? "surface" : "canvas");

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }, { name: service.name, href: path }]}
        label={category.label}
        title={service.title}
        lead={service.intro}
        aside={<CapabilityVisual category={service.category} />}
      >
        <CtaLink href={cta.audit.href} variant="primary" size="lg" data-cta="service-audit">{action}</CtaLink>
        <CtaLink href="#process" variant="onDark" size="lg" arrow={false}>See how it works</CtaLink>
      </PageHero>

      {layout.order.map((part) => {
        switch (part) {
          case "problem": return <Problem key={part} s={service} tone={tone()} />;
          case "why": return <Why key={part} s={service} wash={layout.why} />;
          case "approach": return <Approach key={part} s={service} tone={tone()} />;
          case "process": return <Process key={part} s={service} tone={tone()} steps={layout.steps} />;
          case "deliverables": return <Deliverables key={part} s={service} photo={layout.photo} />;
          case "outcomes": return <Outcomes key={part} s={service} tone={tone()} />;
          case "audience": return <Audience key={part} s={service} tone={tone()} />;
        }
      })}

      <Band id="related" tone="surface">
        <p className={eyebrow}>Related services</p>
        <h2 className={cn(h2, "mt-4")}>Works best alongside.</h2>
        <div className="mt-10">
          <LinkList links={[...related.map((r) => ({ label: r.name, href: `/${r.slug}/`, note: r.summary })), { label: `All ${category.label} services`, href: "/services/", note: category.statement }]} />
        </div>
      </Band>

      <Band id="faqs" tone="canvas">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className={eyebrow}>Questions</p>
            <h2 className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-navy">Asked before most {service.name} engagements.</h2>
          </div>
          <div className="lg:col-span-8"><Faqs faqs={service.faqs} /></div>
        </div>
      </Band>

      <FinalCta action={action} />

      <JsonLd
        data={[
          webPageSchema({ path, title: service.metaTitle, description: service.metaDescription }),
          serviceSchema({ name: service.name, summary: service.summary, path }),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
