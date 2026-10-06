import Link from "next/link";

const pattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/**
 * Text from data files that may contain internal links written as
 * [label](/path/). Only site-relative paths are linked; anything else is
 * shown as plain text.
 */
export function RichText({ text, linkClassName = "font-medium text-navy underline decoration-orange/60 decoration-2 underline-offset-[5px] transition-colors hover:text-blue-ink hover:decoration-orange" }: { text: string; linkClassName?: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} href={m[2]} className={linkClassName}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** The plain words, for schema and meta fields. */
export const plain = (text: string) => text.replace(pattern, "$1");
