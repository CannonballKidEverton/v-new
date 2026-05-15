"use client";

/**
 * LenisProvider — REMOVED.
 *
 * Lenis was causing perceived scroll lag due to `duration: 1.15` over-smoothing.
 * Replaced with native browser scrolling + `scroll-behavior: smooth` in CSS.
 *
 * The premium feel comes from typography and design restraint,
 * not from scroll interpolation. Native scroll is faster and more responsive.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

