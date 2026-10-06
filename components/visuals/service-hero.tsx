import { ArrowRight, Check, Heart, MapPin, MessageCircle, Play, Search, Send, Sparkles, Star, type LucideIcon } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { photos, type PhotoKey } from "@/data/images";
import { cn } from "@/lib/utils";

/**
 * Hero pictures for service pages. Each service picks a kind of picture that
 * suits what it produces (an ad, a map listing, a chat, a test...) and fills
 * it with its own words. Everything shown is a drawing of the format: there
 * are no figures and no client data.
 */
type Kind = "answer" | "map" | "store" | "checks" | "editorial" | "ad" | "pipeline" | "feed" | "video" | "experiment" | "flow" | "chat" | "browser" | "design";

export type ServiceHeroConfig = {
  kind: Kind;
  photo: PhotoKey;
  /** Small label on the card */
  label: string;
  /** The card's words. What each position means depends on the kind. */
  items: string[];
  /** Two short signals that float beside the photograph */
  chips: [string, string];
  /** What the picture shows, for screen readers */
  alt: string;
};

const tag = "label-mono text-[0.5625rem]";
const skel = (w: string, tone = "bg-line-strong") => <span className={cn("block h-1.5 rounded-full", w, tone)} />;

function Answer({ items }: { items: string[] }) {
  const [question, ...rest] = items;
  return (
    <>
      <p className="flex items-center gap-2 rounded-full border border-line px-3 py-2 text-[0.75rem]"><Search className="size-3.5 shrink-0 text-muted" /><span className="truncate">{question}</span></p>
      <div className="mt-3 rounded-xl bg-cyan-wash/80 p-3">
        <p className={cn(tag, "flex items-center gap-1.5 text-navy")}><Sparkles className="size-3" /> Answer</p>
        <ol className="mt-2 space-y-1.5">
          {rest.map((r, i) => (
            <li key={r} className={cn("flex items-center gap-2 text-[0.75rem]", i === 0 ? "font-semibold text-navy" : "text-ink/60")}>
              <span className={cn("flex size-4 shrink-0 items-center justify-center rounded-full text-[0.5625rem] font-semibold", i === 0 ? "bg-orange text-navy" : "bg-white text-muted")}>{i + 1}</span>
              {r}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

function MapCard({ items }: { items: string[] }) {
  const pins = [[22, 38], [58, 22], [74, 62], [40, 70]];
  return (
    <>
      <div className="relative h-24 overflow-hidden rounded-xl bg-blue-wash">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 size-full text-white">
          <path d="M0,22 H100 M0,42 H100 M28,0 V60 M64,0 V60" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M0,60 L45,0" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        {pins.map(([x, y], i) => (
          <MapPin key={i} className={cn("absolute -translate-x-1/2 -translate-y-full", i === 0 ? "size-6 fill-orange text-navy" : "size-4 text-navy/40")} style={{ left: `${x}%`, top: `${y}%` }} />
        ))}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={it} className={cn("flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-[0.75rem]", i === 0 ? "border-blue/40 bg-blue-wash/60 font-semibold text-navy" : "border-line text-ink/60")}>
            <span className="truncate">{it}</span>
            <span className="flex shrink-0 text-orange">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className={cn("size-2.5", i === 0 ? "fill-current" : "opacity-40")} />)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Store({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5">
      {items.map((it, i) => (
        <li key={it} className="rounded-xl border border-line p-2.5">
          <span className={cn("block h-12 rounded-lg", ["bg-blue-wash", "bg-orange-wash", "bg-cyan-wash", "bg-canvas"][i % 4])} />
          <span className="mt-2 block truncate text-[0.75rem] font-semibold text-navy">{it}</span>
          <span className="mt-1.5 flex items-center justify-between">{skel("w-8")}<span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[0.5rem] font-semibold text-success-ink">In stock</span></span>
        </li>
      ))}
    </ul>
  );
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={it} className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5 text-[0.75rem] text-ink">
          <span className="flex min-w-0 items-center gap-2"><span className={cn("flex size-4 shrink-0 items-center justify-center rounded-full", i < items.length - 1 ? "bg-success/15 text-success-ink" : "bg-orange-wash text-orange-ink")}>{i < items.length - 1 ? <Check className="size-2.5" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-current" />}</span><span className="truncate">{it}</span></span>
          <span className={cn(tag, "shrink-0", i < items.length - 1 ? "text-success-ink" : "text-orange-ink")}>{i < items.length - 1 ? "Done" : "Next"}</span>
        </li>
      ))}
    </ul>
  );
}

function Editorial({ items }: { items: string[] }) {
  const [title, ...heads] = items;
  return (
    <>
      <p className="text-[0.9375rem] leading-snug font-semibold tracking-[-0.01em] text-navy">{title}</p>
      <div className="mt-2 space-y-1.5">{skel("w-full", "bg-line")}{skel("w-4/5", "bg-line")}</div>
      <ul className="mt-3 space-y-2.5 border-t border-line pt-3">
        {heads.map((h, i) => (
          <li key={h}>
            <span className="flex items-center gap-2 text-[0.75rem] font-semibold text-ink"><span className={cn(tag, "text-blue-ink")}>H{i === 0 ? 2 : 3}</span>{h}</span>
            <span className="mt-1.5 block pl-6">{skel(i % 2 ? "w-3/5" : "w-4/5", "bg-line")}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Ad({ items }: { items: string[] }) {
  const [headline, description, button, ...targets] = items;
  return (
    <>
      <div className="rounded-xl border border-line p-3">
        <p className={cn(tag, "text-muted")}>Sponsored · yourbrand.com</p>
        <p className="mt-1.5 text-[0.875rem] leading-snug font-semibold text-blue-ink">{headline}</p>
        <p className="mt-1 text-[0.75rem] leading-snug text-muted">{description}</p>
        <span className="mt-2.5 inline-flex h-7 items-center gap-1.5 rounded-full bg-orange px-3 text-[0.6875rem] font-semibold text-navy">{button} <ArrowRight className="size-3" /></span>
      </div>
      <p className={cn(tag, "mt-3 text-muted")}>Shown to</p>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {targets.map((t) => <li key={t} className="rounded-full bg-blue-wash px-2 py-1 text-[0.6875rem] font-medium text-blue-ink">{t}</li>)}
      </ul>
    </>
  );
}

function Pipeline({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={it} className="flex items-center gap-3">
            <span className={cn("flex h-8 items-center rounded-lg px-3 text-[0.75rem] font-semibold whitespace-nowrap", last ? "bg-orange text-navy" : "bg-navy text-white")} style={{ width: `${100 - i * (56 / Math.max(1, items.length - 1))}%`, opacity: last ? 1 : 1 - i * 0.14 }}>{it}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Feed({ items }: { items: string[] }) {
  const [name, text, second] = items;
  return (
    <>
      <div className="flex items-center gap-2.5"><span className="size-8 rounded-full bg-gradient-to-br from-blue to-cyan" /><span><span className="block text-[0.75rem] font-semibold text-navy">{name}</span><span className="block text-[0.625rem] text-muted">Just now</span></span></div>
      <p className="mt-2.5 text-[0.8125rem] leading-snug text-ink">{text}</p>
      <span className="mt-2.5 block h-20 rounded-xl bg-gradient-to-br from-blue-wash to-cyan-wash" />
      <div className="mt-2.5 flex items-center gap-3 text-muted"><Heart className="size-4 fill-orange text-orange" /><MessageCircle className="size-4" /><Send className="size-4" /></div>
      {second ? <p className="mt-3 border-t border-line pt-2.5 text-[0.6875rem] text-muted"><span className="font-semibold text-ink">Next up:</span> {second}</p> : null}
    </>
  );
}

function Video({ items }: { items: string[] }) {
  const [title, ...chapters] = items;
  return (
    <>
      <div className="relative flex h-24 items-center justify-center rounded-xl bg-navy">
        <span className="flex size-10 items-center justify-center rounded-full bg-orange text-navy"><Play className="size-4 fill-current" /></span>
        <span className="absolute inset-x-3 bottom-2.5 h-1 rounded-full bg-white/20"><span className="block h-full w-2/5 rounded-full bg-orange" /></span>
      </div>
      <p className="mt-2.5 text-[0.8125rem] leading-snug font-semibold text-navy">{title}</p>
      <ol className="mt-2 space-y-1.5">
        {chapters.map((c, i) => <li key={c} className="flex items-center gap-2 text-[0.6875rem] text-muted"><span className={cn(tag, "text-blue-ink")}>{String(i + 1).padStart(2, "0")}</span>{c}</li>)}
      </ol>
    </>
  );
}

function Experiment({ items }: { items: string[] }) {
  const [a, b, hypothesis] = items;
  return (
    <>
      <div className="grid grid-cols-2 gap-2.5">
        {[a, b].map((v, i) => (
          <div key={v} className={cn("rounded-xl border p-2.5", i ? "border-blue/50 bg-blue-wash/60" : "border-line")}>
            <p className={cn(tag, i ? "text-blue-ink" : "text-muted")}>{i ? "Variant B" : "Control A"}</p>
            <p className="mt-1.5 text-[0.75rem] leading-snug font-semibold text-navy">{v}</p>
            <span className="mt-2 block space-y-1.5">{skel("w-full", "bg-line")}{skel("w-3/5", "bg-line")}</span>
            <span className={cn("mt-2.5 block h-5 w-16 rounded-full", i ? "bg-orange" : "bg-line-strong")} />
          </div>
        ))}
      </div>
      <p className="mt-3 rounded-lg bg-canvas p-2.5 text-[0.6875rem] leading-snug text-ink"><span className={cn(tag, "mb-1 block text-blue-ink")}>Hypothesis</span>{hypothesis}</p>
    </>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={it} className="relative grid grid-cols-[1.5rem_1fr] gap-x-2.5 pb-2.5 last:pb-0">
            {!last ? <span className="absolute top-6 left-[0.6875rem] h-[calc(100%-1.5rem)] w-px bg-line-strong" /> : null}
            <span className={cn("flex size-6 items-center justify-center rounded-full text-[0.625rem] font-semibold", last ? "bg-orange text-navy" : i === 0 ? "bg-navy text-white" : "border border-line-strong bg-white text-muted")}>{i + 1}</span>
            <span className={cn("rounded-lg border px-2.5 py-1.5 text-[0.75rem] font-medium", i === 0 ? "border-navy/20 bg-blue-wash text-navy" : "border-line text-ink")}>{it}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Chat({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={it} className={cn("flex", i % 2 ? "justify-end" : "justify-start")}>
          <span className={cn("max-w-[85%] rounded-2xl px-3 py-2 text-[0.75rem] leading-snug", i % 2 ? "rounded-br-sm bg-navy text-white" : "rounded-bl-sm bg-canvas text-ink")}>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Browser({ items }: { items: string[] }) {
  const [url, ...checks] = items;
  return (
    <>
      <div className="flex items-center gap-2 rounded-t-xl border border-b-0 border-line bg-canvas px-2.5 py-2">
        <span className="flex gap-1"><i className="size-1.5 rounded-full bg-line-strong" /><i className="size-1.5 rounded-full bg-line-strong" /><i className="size-1.5 rounded-full bg-line-strong" /></span>
        <span className="flex h-4 flex-1 items-center rounded-full bg-white px-2 font-mono text-[0.5625rem] text-muted">{url}</span>
      </div>
      <div className="rounded-b-xl border border-line p-3">
        <span className="block h-10 rounded-lg bg-gradient-to-r from-navy to-blue" />
        <span className="mt-2.5 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <span key={i} className="h-8 rounded-md bg-canvas" />)}</span>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {checks.map((c) => <li key={c} className="flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-[0.6875rem] font-medium text-success-ink"><Check className="size-3" strokeWidth={3} />{c}</li>)}
      </ul>
    </>
  );
}

function Design({ items }: { items: string[] }) {
  return (
    <div className="relative rounded-xl border border-dashed border-line-strong p-3">
      <span className="block h-6 w-2/5 rounded-md bg-navy" />
      <span className="mt-2.5 grid grid-cols-[1.4fr_1fr] gap-2.5"><span className="h-16 rounded-lg bg-blue-wash" /><span className="space-y-1.5 pt-1">{skel("w-full")}{skel("w-4/5", "bg-line")}{skel("w-3/5", "bg-line")}<span className="mt-2 block h-5 w-14 rounded-full bg-orange" /></span></span>
      <span className="mt-2.5 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <span key={i} className="h-9 rounded-md bg-canvas" />)}</span>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {items.map((it, i) => <li key={it} className={cn("rounded-full px-2 py-1 text-[0.6875rem] font-medium", i === 0 ? "bg-navy text-white" : "bg-cyan-wash text-navy")}>{it}</li>)}
      </ul>
    </div>
  );
}

const renderers: Record<Kind, (p: { items: string[] }) => React.ReactNode> = {
  answer: Answer, map: MapCard, store: Store, checks: Checks, editorial: Editorial, ad: Ad, pipeline: Pipeline, feed: Feed, video: Video, experiment: Experiment, flow: Flow, chat: Chat, browser: Browser, design: Design,
};

export function ServiceHeroVisual({ config, icons }: { config: ServiceHeroConfig; icons?: [LucideIcon, LucideIcon] }) {
  const Card = renderers[config.kind];
  return (
    <div role="img" aria-label={config.alt} className="relative pb-8 sm:pb-12">
      <div aria-hidden className="glow absolute inset-x-4 top-8 bottom-8 rounded-full bg-blue/30" />
      <Photo photo={photos[config.photo]} sizes="(min-width: 1024px) 420px, 90vw" priority decorative wash="strong" className="relative ml-auto aspect-[5/4] w-[78%] rounded-[1.75rem] border border-white/10 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.75)]" />

      <div aria-hidden className="absolute top-8 left-0 w-[78%] rounded-2xl border border-line bg-white p-4 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] sm:w-[62%]">
        <p className={cn(tag, "mb-3 flex items-center justify-between text-muted")}>{config.label}<span className="flex items-center gap-1 text-muted/70"><span className="size-1.5 rounded-full bg-orange" />Illustration</span></p>
        <Card items={config.items} />
      </div>

      <ul aria-hidden className="absolute right-0 bottom-0 flex w-44 flex-col gap-2 sm:w-52">
        {config.chips.map((c, i) => {
          const Icon = icons?.[i] ?? Check;
          return (
            <li key={c} className="flex items-center gap-2 rounded-full border border-white/15 bg-navy-soft py-1.5 pr-3.5 pl-1.5 text-xs font-medium text-white shadow-[0_18px_36px_-18px_rgb(0_0_0/0.7)] motion-safe:animate-float-slow" style={{ animationDelay: `${i * -2.5}s` }}>
              <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full text-navy", i ? "bg-cyan" : "bg-orange")}><Icon className="size-3.5" /></span>
              {c}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
