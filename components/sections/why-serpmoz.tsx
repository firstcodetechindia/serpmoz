import { Crosshair, Database, Gauge, Layers, Radar, UserCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Section, SectionHeader } from "@/components/layout/section";
import { Venn } from "@/components/visuals/venn";
import { pillars } from "@/data/growth";

const icons: LucideIcon[] = [UserCheck, Gauge, Crosshair, Radar, Database, Layers];

export function WhySerpmoz() {
  return (
    <Section aria-labelledby="why-title" className="overflow-hidden">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHeader id="why-title" index="12" label="Why us" title={["Why SERPMOZ?"]} />
            <Reveal delay={0.1}>
              <blockquote className="mt-8 border-l-2 border-orange pl-6">
                <p className="text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-[1.22] font-medium tracking-[-0.025em] text-navy">
                  We don’t replace expertise with AI.
                  <span className="block text-ink/55">We use AI to make expertise faster, deeper and more scalable.</span>
                </p>
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6" delay={0.15} y={24}>
            <Venn />
          </Reveal>
        </div>

        {/* Six pillars as one ruled band: icon, name, one sentence */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={p.name} delay={i * 0.05} className="group bg-canvas p-7 transition-colors duration-300 hover:bg-surface md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-navy transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-navy">{p.name}</h3>
                <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
