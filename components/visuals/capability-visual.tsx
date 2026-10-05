import { ArrowRight, Check, MapPin, Search, Sparkles } from "lucide-react";
import { Funnel, Ring } from "@/components/charts/shapes";
import type { ServiceCategoryId } from "@/types";
import { cn } from "@/lib/utils";

/* One small, purpose-built product illustration per capability group. Sample content only. */

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
      <div className="flex h-9 items-center justify-between border-b border-line/80 px-3.5">
        <span aria-hidden className="flex gap-1">
          <i className="size-1.5 rounded-full bg-line-strong" />
          <i className="size-1.5 rounded-full bg-line-strong" />
          <i className="size-1.5 rounded-full bg-line-strong" />
        </span>
        <span className="label-mono text-[0.5625rem] text-muted">{title}</span>
        <span className="label-mono flex items-center gap-1 text-[0.5625rem] text-muted/80">
          <span aria-hidden className="size-1.5 rounded-full bg-orange" />
          Sample
        </span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}

function SearchAi() {
  return (
    <Frame title="How a buyer finds you">
      <div className="flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-[0.8125rem] text-ink">
        <Search aria-hidden className="size-3.5 text-muted" />
        best inventory planning software for retail
      </div>
      <div className="mt-3 rounded-xl bg-cyan-wash/70 p-3.5">
        <p className="label-mono flex items-center gap-1.5 text-[0.5625rem] text-navy">
          <Sparkles aria-hidden className="size-3" /> AI answer
        </p>
        <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink">
          Three options are commonly recommended, including <mark className="rounded bg-cyan/30 px-1 font-semibold text-navy">Your brand</mark> for fast implementation.
        </p>
      </div>
      <ul className="mt-3 space-y-2.5">
        {[
          ["yourbrand.com", "Inventory planning for multi-location retail", true],
          ["competitor-a.com", "Enterprise demand forecasting platform", false],
        ].map(([url, title, self]) => (
          <li key={url as string} className={cn("rounded-lg border px-3 py-2", self ? "border-blue/40 bg-blue-wash/50" : "border-line")}>
            <p className="text-[0.6875rem] text-muted">{url}</p>
            <p className={cn("text-[0.8125rem] font-medium", self ? "text-blue-ink" : "text-ink")}>{title}</p>
          </li>
        ))}
        <li className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-[0.8125rem] text-ink">
          <MapPin aria-hidden className="size-3.5 text-orange-ink" />
          Your brand · Experience centre
          <span className="tabular ml-auto text-xs text-muted">4.6 ★</span>
        </li>
      </ul>
    </Frame>
  );
}

function Performance() {
  const rows = [
    ["Non-brand search", "₹3.4L", "58", "₹5,860", 78],
    ["Competitor terms", "₹1.9L", "27", "₹7,040", 52],
    ["LinkedIn · target accounts", "₹2.6L", "31", "₹8,390", 44],
    ["Retargeting", "₹1.4L", "22", "₹6,360", 61],
  ] as const;
  return (
    <Frame title="Campaigns by qualified outcome">
      <table className="w-full text-left text-[0.75rem]">
        <thead>
          <tr className="label-mono text-[0.5625rem] text-muted">
            <th className="pb-2 font-normal">Campaign</th>
            <th className="pb-2 text-right font-normal">Spend</th>
            <th className="pb-2 text-right font-normal">Qualified</th>
            <th className="pb-2 text-right font-normal">CAC</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line/80">
          {rows.map(([n, spend, q, cac, w], i) => (
            <tr key={n}>
              <td className="py-2.5 pr-2">
                <span className="block text-ink">{n}</span>
                <span className="mt-1 block h-1 overflow-hidden rounded-full bg-line/80">
                  <span className={cn("block h-full rounded-full", i === 0 ? "bg-blue" : "bg-line-strong")} style={{ width: `${w}%` }} />
                </span>
              </td>
              <td className="tabular py-2.5 text-right text-muted">{spend}</td>
              <td className="tabular py-2.5 text-right font-medium text-navy">{q}</td>
              <td className="tabular py-2.5 text-right text-muted">{cac}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 rounded-lg bg-blue-wash/70 px-3 py-2 text-[0.75rem] text-navy">Bidding optimises to sales-accepted leads, not form fills.</p>
    </Frame>
  );
}

function Content() {
  const weeks = ["W1", "W2", "W3", "W4"];
  const lanes: [string, (string | null)[]][] = [
    ["Research", ["Stock-out survey", null, null, "Data report"]],
    ["Search", [null, "Pricing explainer", "Comparison page", null]],
    ["LinkedIn", ["Founder POV", "Clip series", "Founder POV", "Report launch"]],
    ["PR", [null, null, "Trade pitch", "Coverage"]],
  ];
  return (
    <Frame title="Editorial calendar">
      <div className="grid grid-cols-[3.75rem_repeat(4,1fr)] gap-1.5 text-[0.6875rem]">
        <span />
        {weeks.map((w) => (
          <span key={w} className="label-mono pb-1 text-center text-[0.5625rem] text-muted">{w}</span>
        ))}
        {lanes.map(([lane, cells], r) => (
          <div key={lane} className="contents">
            <span className="flex items-center text-muted">{lane}</span>
            {cells.map((c, i) => (
              <span
                key={i}
                className={cn(
                  "flex min-h-9 items-center rounded-md px-1.5 py-1 leading-tight",
                  c ? (r === 0 ? "bg-navy text-white" : r === 1 ? "bg-blue-wash text-blue-ink" : r === 2 ? "bg-cyan-wash text-navy" : "bg-orange-wash text-orange-ink") : "border border-dashed border-line",
                )}
              >
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.75rem] text-muted">One piece of research feeds search, social and press in the same month.</p>
    </Frame>
  );
}

function Conversion() {
  const flow = ["Form", "Enrich", "Score", "Route", "Reply"];
  return (
    <Frame title="From visit to conversation">
      <Funnel
        stages={[
          { label: "Landing page visits", value: "12.4k", width: 100 },
          { label: "Form starts", value: "1,860", width: 74 },
          { label: "Submitted", value: "640", width: 52 },
          { label: "Qualified", value: "312", width: 36 },
        ]}
      />
      <ol className="mt-4 flex items-center justify-between gap-1 border-t border-line/80 pt-4">
        {flow.map((f, i) => (
          <li key={f} className="flex items-center gap-1">
            <span className={cn("rounded-md px-2 py-1 text-[0.6875rem] font-medium", i === flow.length - 1 ? "bg-navy text-white" : "bg-canvas text-ink")}>{f}</span>
            {i < flow.length - 1 ? <ArrowRight aria-hidden className="size-3 text-line-strong" /> : null}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[0.75rem] text-muted">
        Median first response <span className="tabular font-semibold text-navy">6 min</span>, with an AI agent handling the first reply and a person taking over.
      </p>
    </Frame>
  );
}

function Web() {
  const vitals = [
    { n: "LCP", v: "1.8s", p: 82 },
    { n: "INP", v: "120ms", p: 88 },
    { n: "CLS", v: "0.03", p: 94 },
  ];
  return (
    <Frame title="Built to be found and fast">
      <div className="rounded-xl border border-line p-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-10 rounded bg-navy" />
          <span className="ml-auto h-2 w-8 rounded bg-line" />
          <span className="h-2 w-8 rounded bg-line" />
          <span className="h-5 w-14 rounded bg-orange" />
        </div>
        <div className="mt-4 grid grid-cols-[1.2fr_1fr] gap-3">
          <div>
            <span className="block h-3 w-full rounded bg-navy/85" />
            <span className="mt-1.5 block h-3 w-3/4 rounded bg-navy/40" />
            <span className="mt-3 block h-1.5 w-full rounded bg-line" />
            <span className="mt-1 block h-1.5 w-5/6 rounded bg-line" />
          </div>
          <div className="h-16 rounded-lg bg-gradient-to-br from-blue-wash to-cyan-wash" />
        </div>
      </div>
      <ul className="mt-4 grid grid-cols-3 gap-3">
        {vitals.map((v) => (
          <li key={v.n} className="flex flex-col items-center">
            <Ring value={v.p} size={60} stroke={5} color="var(--color-success)">
              <span className="tabular text-[0.6875rem] font-semibold text-navy">{v.v}</span>
            </Ring>
            <span className="label-mono mt-1.5 text-[0.5625rem] text-muted">{v.n}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-4 space-y-1.5 border-t border-line/80 pt-3 text-[0.75rem] text-ink">
        {["Structured data on every template", "Redirect map verified before launch"].map((x) => (
          <li key={x} className="flex items-center gap-2">
            <Check aria-hidden className="size-3.5 text-success-ink" />
            {x}
          </li>
        ))}
      </ul>
    </Frame>
  );
}

const map: Record<ServiceCategoryId, () => React.ReactNode> = {
  "search-ai": SearchAi,
  performance: Performance,
  "content-social": Content,
  "conversion-automation": Conversion,
  "web-digital": Web,
};

export function CapabilityVisual({ category, className }: { category: ServiceCategoryId; className?: string }) {
  const V = map[category];
  return <div className={className}>{V()}</div>;
}
