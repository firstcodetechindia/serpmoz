import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SignalField } from "@/components/visuals/signal-field";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/types";

type Props = {
  crumbs: Crumb[];
  label: string;
  title: string;
  lead?: React.ReactNode;
  /** Buttons under the lead */
  children?: React.ReactNode;
  /** Visual for the right column: a product illustration, photograph or map */
  aside?: React.ReactNode;
  /** "dark" is the navy stage used when the page leads with a visual; "light" suits text-led pages */
  tone?: "dark" | "light";
  className?: string;
};

/** Opening block for every inner page: breadcrumb, label, H1, lead, optional visual. */
export function PageHero({ crumbs, label, title, lead, children, aside, tone = "dark", className }: Props) {
  const dark = tone === "dark";
  return (
    <header className={cn("relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24", dark ? "stage text-white" : "border-b border-line", className)}>
      {dark ? (
        <>
          <div aria-hidden className="grid-lines-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
          <SignalField cx={76} cy={48} className="hidden opacity-60 lg:block" />
        </>
      ) : (
        <>
          <div aria-hidden className="grid-lines absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div aria-hidden className="atmosphere absolute inset-0 opacity-70" />
        </>
      )}
      <div className="shell relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <Breadcrumbs crumbs={crumbs} tone={tone} />
          <p className={cn("label-mono mt-10", dark ? "text-cyan" : "text-blue-ink")}>{label}</p>
          <h1 className={cn("mt-4 text-[clamp(2.25rem,1.4rem+3.4vw,4rem)] leading-[1.02] font-semibold tracking-[-0.035em]", dark ? "text-white" : "text-navy")}>{title}</h1>
          {lead ? <div className={cn("mt-6 max-w-2xl text-lead", dark ? "text-white/75" : "text-muted")}>{lead}</div> : null}
          {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </div>
    </header>
  );
}
