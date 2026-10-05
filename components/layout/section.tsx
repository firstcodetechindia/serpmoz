import { cn } from "@/lib/utils";
import { Reveal } from "@/components/layout/reveal";

type SectionProps = React.ComponentProps<"section"> & {
  /** Vertical rhythm. "tight" is for sections that visually pair with a neighbour. */
  space?: "default" | "tight" | "none";
  /** Draw a hairline along the top edge */
  ruled?: boolean;
  /** "dark" renders the navy stage used for product showcases */
  tone?: "light" | "dark";
};

export function Section({ className, space = "default", ruled, tone = "light", children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        space === "default" && "py-20 md:py-28 lg:py-36",
        space === "tight" && "py-14 md:py-20",
        ruled && "border-t border-line",
        tone === "dark" && "stage overflow-hidden text-white",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

type HeaderProps = {
  /** Two-digit index shown in the mono label, e.g. "03" */
  index?: string;
  label: string;
  /** Heading lines. The last line is set in a lighter tone when there is more than one. */
  title: string[];
  lead?: React.ReactNode;
  id?: string;
  className?: string;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
  children?: React.ReactNode;
};

/** Mono label + large two-tone heading. The shared opening of most sections. */
export function SectionHeader({ index, label, title, lead, id, className, as: Tag = "h2", tone = "light", children }: HeaderProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-4xl", className)}>
      <p className={cn("label-mono flex items-center gap-3", dark ? "text-white/60" : "text-muted")}>
        {index ? <span className={dark ? "text-white" : "text-ink"}>{index}</span> : null}
        {index ? <span aria-hidden className={cn("h-px w-8", dark ? "bg-white/30" : "bg-line-strong")} /> : null}
        {label}
      </p>
      <Tag id={id} className={cn("mt-5 font-semibold", Tag === "h1" ? "text-display" : "text-h2", dark ? "text-white" : "text-navy")}>
        {title.map((line, i) => (
          <span
            key={line}
            className={cn("block", title.length > 1 && i === title.length - 1 && (dark ? "text-white/55" : "text-ink/55"))}
          >
            {line}
          </span>
        ))}
      </Tag>
      {lead ? <div className={cn("mt-6 max-w-2xl text-lead", dark ? "text-white/75" : "text-muted")}>{lead}</div> : null}
      {children}
    </Reveal>
  );
}
