import { RichText } from "@/components/ui/rich-text";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Title / body rows separated by hairlines. Used for scope, focus areas and considerations. */
export function RuledRows({ rows, numbered = true }: { rows: { title: string; body: string }[]; numbered?: boolean }) {
  return (
    <ol className="border-b border-line">
      {rows.map((r, i) => (
        <li key={r.title} className="grid gap-x-6 gap-y-2 border-t border-line py-7 md:grid-cols-[4rem_minmax(0,16rem)_1fr] md:py-8">
          {numbered ? (
            <span className="tabular text-2xl leading-none font-semibold tracking-[-0.04em] text-ink/20 md:text-3xl">
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <span aria-hidden className="hidden md:block" />
          )}
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{r.title}</h3>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-muted">{r.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** The house device: what AI accelerates beside what experts decide. */
export function AiExpertSplit({ ai, experts }: { ai: string[]; experts: string[] }) {
  const cols = [
    { label: "AI accelerates", items: ai, navy: false },
    { label: "Experts decide", items: experts, navy: true },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      {cols.map((c) => (
        <div key={c.label} className={cn("rounded-panel p-7 md:p-9", c.navy ? "bg-navy text-white" : "border border-line bg-surface")}>
          <h3 className={cn("label-mono", c.navy ? "text-cyan" : "text-blue-ink")}>{c.label}</h3>
          <ul className="mt-6">
            {c.items.map((item) => (
              <li key={item} className={cn("border-t py-3.5 text-[1.0625rem] font-medium tracking-[-0.01em]", c.navy ? "border-white/15" : "border-line text-ink")}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Native disclosure widgets: accessible and zero JavaScript. */
export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium tracking-[-0.015em] text-navy [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus aria-hidden className="size-5 shrink-0 text-muted transition-transform duration-300 ease-out-quint group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-7 text-[1.0625rem] leading-relaxed text-muted"><RichText text={f.a} /></p>
        </details>
      ))}
    </div>
  );
}

/** Metric names we track for a service or industry. Names only – never results. */
export function MeasuresPanel({ measures, title = "What we measure" }: { measures: string[]; title?: string }) {
  return (
    <div className="glass rounded-panel p-6 md:p-7">
      <p className="label-mono text-muted">{title}</p>
      <ul className="mt-4">
        {measures.map((m, i) => (
          <li key={m} className="flex items-baseline gap-4 border-t border-line/80 py-3.5 text-[0.9375rem] font-medium text-ink first:border-t-0">
            <span className="label-mono text-[0.625rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
            {m}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted">Targets are set after the diagnostic, against your own baseline.</p>
    </div>
  );
}

export function LinkList({ links }: { links: { label: string; href: string; note?: string }[] }) {
  return (
    <ul className="grid border-b border-line md:grid-cols-2 md:gap-x-10">
      {links.map((l) => (
        <li key={l.href} className="border-t border-line">
          <Link href={l.href} className="group flex items-center justify-between gap-6 py-5">
            <span>
              <span className="block text-xl font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-blue-ink">{l.label}</span>
              {l.note ? <span className="mt-1 block text-[0.9375rem] text-muted">{l.note}</span> : null}
            </span>
            <ArrowUpRight aria-hidden className="size-4 shrink-0 text-line-strong transition-colors group-hover:text-blue-ink" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Label on the left, content on the right. The basic rhythm of inner pages. */
export function Block({ label, title, children, className }: { label: string; title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("border-t border-line py-10 md:py-14", className)}>
      <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="label-mono text-muted">{label}</p>
          {title ? <h2 className="mt-4 max-w-sm text-[clamp(1.625rem,1.3rem+1.3vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-navy">{title}</h2> : null}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-ink", className)}>{children}</div>;
}
