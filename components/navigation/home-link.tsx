import type { ComponentProps } from "react";

/**
 * A link to the home page that always loads it afresh: from the top, with the
 * opening animation. A normal client-side link would keep the scroll position
 * and skip the animation, which is not what a click on the logo should do.
 */
export function HomeLink(props: Omit<ComponentProps<"a">, "href">) {
  // eslint-disable-next-line @next/next/no-html-link-for-pages -- a full page load is the point
  return <a href="/" {...props} />;
}
