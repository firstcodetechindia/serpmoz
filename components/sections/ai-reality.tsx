import { Bot, UserRound } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { LogoMark } from "@/components/navigation/logo";
import { Photo } from "@/components/ui/photo";
import { aiReality } from "@/data/growth";
import { photos } from "@/data/images";

/** Two curves that leave the centre of each input card and meet at the SERPMOZ panel. */
function Merge() {
  const paths = [
    { d: "M0,25 C60,25 40,50 100,50", color: "var(--color-cyan)", dur: "2.2s", y: 25 },
    { d: "M0,75 C60,75 40,50 100,50", color: "var(--color-blue)", dur: "2.8s", y: 75 },
  ];
  return (
    <div aria-hidden className="relative hidden lg:block">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
        {paths.map((p) => (
          <g key={p.d}>
            <path d={p.d} fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            <path d={p.d} fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 22" vectorEffect="non-scaling-stroke" className="motion-safe:animate-dash" style={{ animationDuration: p.dur }} />
          </g>
        ))}
      </svg>
      {paths.map((p) => (
        <span key={p.y} className="absolute left-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface" style={{ top: `${p.y}%`, background: p.color }} />
      ))}
      <span className="absolute top-1/2 right-0 size-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-orange" />
    </div>
  );
}

export function AiReality() {
  const { execute, decide, connect } = aiReality;
  return (
    <Section inset aria-labelledby="ai-reality-title" className="bg-blue-tint">
      <div aria-hidden className="absolute -top-40 -right-20 size-[34rem] rounded-full bg-surface/70 blur-[100px]" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <SectionHeader
            id="ai-reality-title"
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
        <Reveal className="mt-14 grid gap-y-5 lg:mt-24 lg:grid-cols-[minmax(0,1.5fr)_6rem_minmax(0,1fr)]" y={24}>
          <div className="grid gap-5 lg:grid-rows-2 lg:gap-6">
            {/* AI: fast, plentiful, undirected – set in mono, drawn with a dashed edge */}
            <div className="flex flex-col justify-center rounded-panel border border-dashed border-line-strong bg-surface/60 p-6 md:p-8">
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
            <div className="relative overflow-hidden rounded-panel bg-surface shadow-float">
              <div className="grid h-full sm:grid-cols-[1fr_11rem] md:grid-cols-[1fr_15rem]">
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
            {/* An equation: four inputs, one result */}
            <ol className="relative mt-7 flex flex-1 flex-col justify-between gap-2">
              {connect.items.map((item, i) => (
                <li key={item.name}>
                  <div className="grid grid-cols-[2.25rem_1fr] items-center gap-x-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5">
                    <span className="tabular flex size-9 items-center justify-center rounded-full border border-cyan/50 text-sm font-semibold text-cyan">{i + 1}</span>
                    <div>
                      <p className="flex flex-wrap items-baseline gap-x-2.5">
                        <span className="text-xl font-semibold tracking-[-0.02em]">{item.name}</span>
                        <span className="label-mono text-[0.625rem] text-cyan">{item.gives}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{item.body}</p>
                    </div>
                  </div>
                  <p aria-hidden className="py-1 pl-[1.625rem] font-mono text-lg leading-none text-white/35">{i < connect.items.length - 1 ? "+" : "="}</p>
                </li>
              ))}
            </ol>
            <div className="relative rounded-2xl bg-orange p-5 text-navy">
              <p className="text-2xl font-semibold tracking-[-0.03em]">{connect.result.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/80">{connect.result.body}</p>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-white/60">{connect.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
