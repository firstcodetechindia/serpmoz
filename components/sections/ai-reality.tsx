import { Bot, UserRound } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { LogoMark } from "@/components/navigation/logo";
import { Photo } from "@/components/ui/photo";
import { aiReality } from "@/data/growth";
import { photos } from "@/data/images";

/** Two curves that leave the input bands and meet at the GrowthOS panel. */
function Merge() {
  const paths = [
    { d: "M0,17 C55,17 45,50 100,50", color: "var(--color-cyan)", dur: "2.2s" },
    { d: "M0,69 C55,69 45,50 100,50", color: "var(--color-blue)", dur: "2.8s" },
  ];
  return (
    <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden h-full w-full lg:block">
      {paths.map((p) => (
        <g key={p.d}>
          <path d={p.d} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d={p.d} fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 20" vectorEffect="non-scaling-stroke" className="motion-safe:animate-dash" style={{ animationDuration: p.dur }} />
        </g>
      ))}
    </svg>
  );
}

export function AiReality() {
  const { execute, decide, connect } = aiReality;
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
          <Reveal className="space-y-4 text-lead text-muted lg:col-span-5 lg:pt-12" delay={0.1}>
            <p>
              Today, businesses can generate content, analyze keywords, create campaigns and automate repetitive marketing
              tasks with AI. <span className="text-ink">The problem is no longer access to tools.</span>
            </p>
            <p>
              The problem is knowing what to ask, what to prioritize, what to validate and what actually deserves investment.
            </p>
          </Reveal>
        </div>

        {/* Two inputs, one system. Read left to right; the lines carry the argument. */}
        <Reveal className="mt-14 grid gap-y-5 lg:mt-24 lg:grid-cols-[minmax(0,1.5fr)_7rem_minmax(0,1fr)]" y={24}>
          <div className="grid gap-5 lg:gap-8">
            {/* AI: fast, plentiful, undirected – set in mono, drawn with a dashed edge */}
            <div className="rounded-panel border border-dashed border-line-strong p-6 md:p-8 lg:mr-16">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-cyan-wash text-navy">
                  <Bot aria-hidden className="size-4.5" />
                </span>
                <h3 className="label-mono text-blue-ink">{execute.label}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {execute.items.map((item) => (
                  <li key={item} className="font-mono text-[1.0625rem] tracking-[-0.01em] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{execute.note}</p>
            </div>

            {/* Experts: fewer words, more weight – solid surface, a photograph, a human */}
            <div className="relative overflow-hidden rounded-panel bg-surface shadow-float lg:ml-16">
              <div className="grid sm:grid-cols-[1fr_11rem] md:grid-cols-[1fr_15rem]">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-navy text-white">
                      <UserRound aria-hidden className="size-4.5" />
                    </span>
                    <h3 className="label-mono text-navy">{decide.label}</h3>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-x-6">
                    {decide.items.map((item) => (
                      <li key={item} className="border-t border-line py-2.5 text-[1.0625rem] font-semibold tracking-[-0.015em] text-navy">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{decide.note}</p>
                </div>
                <Photo photo={photos.strategyWhiteboard} sizes="(min-width: 768px) 240px, (min-width: 640px) 176px, 100vw" className="h-40 sm:h-auto" />
              </div>
            </div>
          </div>

          <Merge />

          {/* The system both feed */}
          <div className="relative flex flex-col overflow-hidden rounded-panel bg-navy p-7 text-white md:p-8">
            <div aria-hidden className="absolute -top-24 -right-24 size-64 rounded-full bg-blue/30 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white">
                <LogoMark className="size-5" />
              </span>
              <h3 className="label-mono text-cyan">{connect.label}</h3>
            </div>
            <ol className="relative mt-7 flex flex-1 flex-col justify-between">
              {connect.items.map((item, i) => {
                const last = i === connect.items.length - 1;
                return (
                  <li key={item} className="relative flex items-center gap-4 pb-5 last:pb-0">
                    {!last ? <span aria-hidden className="absolute top-5 left-[0.3125rem] h-full w-px bg-white/20" /> : null}
                    <span aria-hidden className={last ? "relative size-[0.6875rem] rounded-full bg-orange ring-4 ring-orange/25" : "relative size-[0.6875rem] rounded-full border-2 border-cyan bg-navy"} />
                    <span className={last ? "text-2xl font-semibold tracking-[-0.03em]" : "text-lg font-medium tracking-[-0.015em] text-white/85"}>{item}</span>
                  </li>
                );
              })}
            </ol>
            <p className="relative mt-7 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/70">{connect.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
