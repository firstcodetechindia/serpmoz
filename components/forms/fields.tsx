import { cn } from "@/lib/utils";

const control =
  "block w-full rounded-control border border-line-strong bg-surface px-3.5 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 hover:border-navy/40 focus:border-blue focus:ring-3 focus:ring-blue/15 focus:outline-none aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10";

type Base = { label: string; name: string; error?: string; hint?: string; optional?: boolean; className?: string };

function Wrapper({ label, name, error, hint, optional, className, children }: Base & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional ? <span className="text-xs font-normal text-muted">Optional</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && !error ? <p id={`${name}-hint`} className="mt-1.5 text-xs text-muted">{hint}</p> : null}
      {error ? <p id={`${name}-error`} role="alert" className="mt-1.5 text-[0.8125rem] text-danger">{error}</p> : null}
    </div>
  );
}

const describe = ({ name, error, hint }: Base) => (error ? `${name}-error` : hint ? `${name}-hint` : undefined);

export function TextField(props: Base & Omit<React.ComponentProps<"input">, "name" | "className">) {
  const { label, name, error, hint, optional, className, ...input } = props;
  return (
    <Wrapper {...{ label, name, error, hint, optional, className }}>
      <input
        id={name}
        name={name}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(props)}
        className={cn(control, "h-11")}
        {...input}
      />
    </Wrapper>
  );
}

export function SelectField(
  props: Base & { options: readonly string[]; placeholder?: string } & Omit<React.ComponentProps<"select">, "name" | "className">,
) {
  const { label, name, error, hint, optional, className, options, placeholder = "Select…", ...select } = props;
  return (
    <Wrapper {...{ label, name, error, hint, optional, className }}>
      <select
        id={name}
        name={name}
        required={!optional}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(props)}
        className={cn(control, "h-11 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748B%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m4 6 4 4 4-4%22/></svg>')] bg-[position:right_0.75rem_center] bg-no-repeat pr-9")}
        {...select}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </Wrapper>
  );
}

export function TextAreaField(props: Base & Omit<React.ComponentProps<"textarea">, "name" | "className">) {
  const { label, name, error, hint, optional, className, ...textarea } = props;
  return (
    <Wrapper {...{ label, name, error, hint, optional, className }}>
      <textarea
        id={name}
        name={name}
        required={!optional}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={describe(props)}
        className={cn(control, "min-h-28 resize-y py-2.5")}
        {...textarea}
      />
    </Wrapper>
  );
}
