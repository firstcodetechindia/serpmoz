import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

/** Typographic index of every industry. `detailed` adds the one-line focus under each name. */
export function IndustriesIndex({ detailed = false, limit }: { detailed?: boolean; limit?: number }) {
  const list = limit ? industries.slice(0, limit) : industries;
  return (
    <ul className={cn("grid border-b border-line", detailed ? "md:grid-cols-2 md:gap-x-10" : "sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3")}>
      {list.map((ind, i) => (
        <li key={ind.slug} className="border-t border-line">
          <Link href={`/industries/${ind.slug}/`} className={cn("group flex items-baseline gap-4", detailed ? "py-6" : "py-4")}>
            <span className="label-mono w-6 shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1">
              <span className={cn("block font-semibold tracking-[-0.025em] text-navy transition-colors group-hover:text-blue-ink", detailed ? "text-2xl" : "text-xl md:text-[1.375rem]")}>
                {ind.name}
              </span>
              {detailed ? <span className="mt-1.5 block text-[0.9375rem] text-muted">{ind.line}</span> : null}
            </span>
            <ArrowUpRight aria-hidden className="size-4 shrink-0 translate-y-0.5 text-line-strong transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0 group-hover:text-blue-ink" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
