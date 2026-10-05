import { Equal, Plus } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { aiReality } from "@/data/growth";
import { cn } from "@/lib/utils";

function Column({
  label,
  note,
  items,
  tone = "plain",
}: {
  label: string;
  note: string;
  items: readonly string[];
  tone?: "plain" | "navy";
}) {
  const navy = tone === "navy";
  return (
    <div className={cn("flex h-full flex-col", navy ? "rounded-panel bg-navy p-7 text-white md:p-8" : "py-7 md:py-8")}>
      <h3 className={cn("label-mono", navy ? "text-cyan" : "text-blue-ink")}>{label}</h3>
      <ul className="mt-6 flex-1">
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              "flex items-baseline justify-between border-t py-3 text-[1.0625rem] font-medium tracking-[-0.01em]",
              navy ? "border-white/15" : "border-line",
            )}
          >
            {item}
            <span className={cn("label-mono text-[0.625rem]", navy ? "text-white/45" : "text-muted/70")}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ul>
      <p className={cn("mt-6 text-sm leading-relaxed", navy ? "text-white/70" : "text-muted")}>{note}</p>
    </div>
  );
}

function Operator({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden className="flex items-center justify-center py-1 text-line-strong lg:py-0">
      <span className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted">{children}</span>
    </div>
  );
}

export function AiReality() {
  return (
    <Section aria-labelledby="ai-reality-title">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="ai-reality-title"
            index="01"
            label="The AI marketing reality"
            title={["AI Changed Marketing.", "It Didn’t Eliminate Expertise."]}
            className="lg:col-span-7"
          />
          <Reveal className="space-y-5 text-lead text-muted lg:col-span-5 lg:pt-12" delay={0.1}>
            <p>
              Today, businesses can generate content, analyze keywords, create campaigns and automate repetitive marketing
              tasks with AI.
            </p>
            <p className="text-ink">The problem is no longer access to tools.</p>
            <p>
              The problem is knowing what to ask, what to prioritize, what to validate and what actually deserves investment.
            </p>
          </Reveal>
        </div>

        {/* Read as an equation: execution + judgement = connected growth */}
        <Reveal className="mt-16 grid items-stretch lg:mt-24 lg:grid-cols-[1fr_auto_1fr_auto_1.1fr] lg:gap-6">
          <Column {...aiReality.execute} />
          <Operator><Plus className="size-4" /></Operator>
          <Column {...aiReality.decide} />
          <Operator><Equal className="size-4" /></Operator>
          <Column {...aiReality.connect} tone="navy" />
        </Reveal>
      </div>
    </Section>
  );
}
