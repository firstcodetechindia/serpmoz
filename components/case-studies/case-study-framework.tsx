import { caseStudyStructure } from "@/data/growth";

/** The five-part structure every published case study follows. */
export function CaseStudyFramework() {
  return (
    <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
      {caseStudyStructure.map((part, i) => (
        <li key={part.name} className="border-b border-line py-6 sm:pr-6 lg:border-r lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:border-r-0">
          <span className="label-mono text-muted">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-navy">{part.name}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{part.body}</p>
        </li>
      ))}
    </ol>
  );
}
