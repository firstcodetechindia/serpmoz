"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/** Loads the small animation feature set once and honours reduced-motion settings. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
