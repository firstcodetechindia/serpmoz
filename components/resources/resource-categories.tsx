import { resourceCategories } from "@/data/resources";

export function ResourceCategories({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid border-b border-line md:grid-cols-2 md:gap-x-10">
      {resourceCategories.map((c, i) => (
        <li key={c.slug} id={detailed ? c.slug : undefined} className="scroll-mt-28 border-t border-line py-6">
          <div className="flex items-baseline gap-4">
            <span className="label-mono w-6 shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{c.name}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{c.scope}</p>
              {detailed ? (
                <ul className="mt-4 space-y-1.5">
                  {c.questions.map((q) => (
                    <li key={q} className="text-[0.9375rem] text-ink italic">{q}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
