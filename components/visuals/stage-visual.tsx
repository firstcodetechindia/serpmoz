import { Bars, Funnel, StackedBar, seriesColors } from "@/components/charts/shapes";
import { Sparkline } from "@/components/charts/sparkline";
import { cn } from "@/lib/utils";

/* Sample data for the nine growth-system panels. Illustrative only. */

function Row({ label, value, bar, strong }: { label: string; value: string; bar?: number; strong?: boolean }) {
  return (
    <li className="grid grid-cols-[minmax(0,9rem)_1fr_auto] items-center gap-3 text-[0.8125rem]">
      <span className={cn("truncate", strong ? "font-semibold text-navy" : "text-ink")}>{label}</span>
      <span className="h-1.5 overflow-hidden rounded-full bg-line/80" aria-hidden>
        {bar !== undefined ? <span className={cn("block h-full rounded-full", strong ? "bg-blue" : "bg-line-strong")} style={{ width: `${bar}%` }} /> : null}
      </span>
      <span className="tabular text-muted">{value}</span>
    </li>
  );
}

function Status({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "blue" | "orange" | "success" }) {
  const c = { muted: "bg-line/70 text-muted", blue: "bg-blue-wash text-blue-ink", orange: "bg-orange-wash text-orange-ink", success: "bg-success/10 text-success-ink" }[tone];
  return <span className={cn("label-mono rounded-full px-2 py-0.5 text-[0.5625rem] whitespace-nowrap", c)}>{children}</span>;
}

const visuals: { title: string; render: () => React.ReactNode }[] = [
  {
    title: "Segments by commercial value",
    render: () => (
      <ul className="space-y-3.5">
        <Row label="Mid-market retail" value="High" bar={86} strong />
        <Row label="Enterprise retail" value="High" bar={72} />
        <Row label="D2C brands" value="Medium" bar={48} />
        <Row label="Wholesale" value="Low" bar={22} />
      </ul>
    ),
  },
  {
    title: "Opportunity map: value against effort",
    render: () => {
      const dots = [
        [18, 70, 0], [30, 44, 0], [42, 78, 0], [56, 58, 0], [64, 30, 1], [76, 22, 1], [84, 40, 1], [70, 68, 0], [24, 24, 0],
      ];
      return (
        <div className="relative h-44 rounded-lg border border-line/80">
          <span aria-hidden className="absolute top-0 right-0 h-1/2 w-1/2 rounded-tr-lg bg-blue-wash/70" />
          <span aria-hidden className="absolute top-1/2 left-0 h-px w-full bg-line" />
          <span aria-hidden className="absolute top-0 left-1/2 h-full w-px bg-line" />
          {dots.map(([x, y, hot], i) => (
            <span key={i} aria-hidden className={cn("absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full", hot ? "bg-blue ring-4 ring-blue/15" : "bg-line-strong")} style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
          <span className="label-mono absolute top-2 right-2 text-[0.5625rem] text-blue-ink">Prioritise</span>
          <span className="label-mono absolute bottom-1.5 left-2 text-[0.5625rem] text-muted">Value →</span>
        </div>
      );
    },
  },
  {
    title: "Demand by channel, this quarter",
    render: () => {
      const ch = [
        { n: "Organic search", v: 38 }, { n: "Paid search", v: 27 }, { n: "Paid social", v: 19 }, { n: "AI & referral", v: 16 },
      ];
      return (
        <>
          <StackedBar segments={ch.map((c) => ({ value: c.v }))} className="h-3.5" />
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {ch.map((c, i) => (
              <li key={c.n} className="flex items-center gap-2 text-[0.8125rem]">
                <i aria-hidden className="size-2 rounded-full" style={{ background: seriesColors[i] }} />
                <span className="text-ink">{c.n}</span>
                <span className="tabular ml-auto text-muted">{c.v}%</span>
              </li>
            ))}
          </ul>
        </>
      );
    },
  },
  {
    title: "Editorial pipeline",
    render: () => (
      <ul className="divide-y divide-line/80 text-[0.8125rem]">
        {[
          ["Pricing explainer with worked examples", "Expert review", "orange"],
          ["Comparison: spreadsheets vs platform", "In draft", "blue"],
          ["Original data: stock-out survey", "Published", "success"],
          ["Integration FAQ hub", "Briefed", "muted"],
        ].map(([t, st, tone]) => (
          <li key={t} className="flex items-center justify-between gap-3 py-2.5 first:pt-0">
            <span className="truncate text-ink">{t}</span>
            <Status tone={tone as "muted"}>{st}</Status>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Experiment: demo request form",
    render: () => (
      <div className="grid grid-cols-2 gap-4">
        {[
          { n: "Control", v: "3.4%", h: 58, win: false },
          { n: "Variant B · fewer fields", v: "4.1%", h: 72, win: true },
        ].map((x) => (
          <div key={x.n} className={cn("rounded-lg border p-3.5", x.win ? "border-blue bg-blue-wash/60" : "border-line")}>
            <p className="truncate text-xs text-muted">{x.n}</p>
            <p className="tabular mt-1 text-2xl font-semibold tracking-[-0.03em] text-navy">{x.v}</p>
            <div className="mt-3 h-16">
              <Bars values={[x.h - 14, x.h - 6, x.h - 9, x.h - 2, x.h]} color={x.win ? "var(--color-blue)" : "var(--color-line-strong)"} />
            </div>
            {x.win ? <p className="label-mono mt-2 text-[0.5625rem] text-blue-ink">Leading · still running</p> : <p className="label-mono mt-2 text-[0.5625rem] text-muted">Baseline</p>}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Lead funnel",
    render: () => (
      <Funnel
        stages={[
          { label: "Visitors", value: "48.2k", width: 100 },
          { label: "Enquiries", value: "1,640", width: 78 },
          { label: "Qualified", value: "312", width: 56 },
          { label: "Meetings", value: "94", width: 38 },
        ]}
      />
    ),
  },
  {
    title: "Account context handed to sales",
    render: () => (
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-navy">Sample Retail Co.</p>
          <Status tone="orange">High intent</Status>
        </div>
        <ul className="mt-3 space-y-2.5 text-[0.8125rem] text-ink">
          {["Read the pricing explainer twice this week", "Compared two competitors on the alternatives page", "Three people from the same company visited", "Asked about migration in the enquiry form"].map((x) => (
            <li key={x} className="flex gap-2.5">
              <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Closed revenue by first touch",
    render: () => {
      const rows = [
        { n: "Organic search", v: "₹17.5L", w: 41 }, { n: "Paid media", v: "₹14.1L", w: 33 }, { n: "AI & referral", v: "₹6.0L", w: 14 }, { n: "Direct", v: "₹5.2L", w: 12 },
      ];
      return (
        <>
          <p className="tabular text-3xl font-semibold tracking-[-0.03em] text-navy">₹42.8L</p>
          <StackedBar segments={rows.map((r) => ({ value: r.w }))} className="mt-4 h-3" />
          <ul className="mt-4 space-y-2">
            {rows.map((r, i) => (
              <li key={r.n} className="flex items-center gap-2 text-[0.8125rem]">
                <i aria-hidden className="size-2 rounded-full" style={{ background: seriesColors[i] }} />
                <span className="text-ink">{r.n}</span>
                <span className="tabular ml-auto text-muted">{r.v}</span>
              </li>
            ))}
          </ul>
        </>
      );
    },
  },
  {
    title: "Budget reallocated on evidence",
    render: () => (
      <ul className="space-y-3 text-[0.8125rem]">
        {[
          ["Comparison content", [4, 6, 7, 9, 12, 15, 19], "Increase", "success"],
          ["Brand search ads", [14, 13, 13, 12, 12, 11, 11], "Hold", "muted"],
          ["Broad social prospecting", [10, 9, 8, 8, 6, 5, 4], "Reduce", "orange"],
        ].map(([n, t, a, tone]) => (
          <li key={n as string} className="flex items-center gap-3">
            <span className="w-40 truncate text-ink">{n as string}</span>
            <Sparkline values={t as number[]} tone={tone === "success" ? "blue" : tone === "orange" ? "orange" : "muted"} className="h-5 flex-1" />
            <Status tone={tone as "muted"}>{a as string}</Status>
          </li>
        ))}
      </ul>
    ),
  },
];

/** The small product panel shown for each stage of the growth system. */
export function StageVisual({ index, className }: { index: number; className?: string }) {
  const v = visuals[index] ?? visuals[0];
  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-5 shadow-soft md:p-6", className)}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="label-mono text-muted">{v.title}</p>
        <span className="label-mono flex items-center gap-1.5 text-[0.5625rem] text-muted/80">
          <span aria-hidden className="size-1.5 rounded-full bg-orange" />
          Sample
        </span>
      </div>
      {v.render()}
    </div>
  );
}
