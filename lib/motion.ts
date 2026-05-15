import type { Variants, Transition } from 'framer-motion';

/**
 * Valantai motion system.
 *
 * Three classes of motion — do not introduce others:
 *
 *  1. ARRIVAL  — elements entering the viewport (once, slow, controlled)
 *  2. REACTIVE — hover/focus responses (fast, invisible infrastructure)
 *  3. AMBIENT  — the radar pulse (single loop, one element on page)
 *
 * All animation constants are defined here.
 * Components import from this file, never define their own.
 */

/* ============================================================
   EASING
   ============================================================ */
export const EASE_ARRIVAL = [0.16, 1, 0.3, 1] as const;
export const EASE_REACTIVE = [0.4, 0, 0.2, 1] as const;

/* ============================================================
   DURATIONS
   ============================================================ */
export const DUR = {
  ARRIVAL:  0.5,   // was 0.76 — snappier section reveals
  MODERATE: 0.3,
  REACTIVE: 0.14,
  SLOW:     0.22,
} as const;

/* ============================================================
   ARRIVAL TRANSITION — shared base
   ============================================================ */
const arrivalTransition: Transition = {
  duration: DUR.ARRIVAL,
  ease: EASE_ARRIVAL,
};

/* ============================================================
   VARIANTS
   ============================================================ */

/** Standard section fade-up on viewport entry. */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: arrivalTransition },
};

/** Opacity fade only — for elements with no vertical movement. */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DUR.ARRIVAL, ease: 'easeOut' } },
};

/** Manifesto line — each line clips and reveals upward. */
export const manifestoLine: Variants = {
  hidden:  { y: '112%' },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: DUR.ARRIVAL,
      ease: EASE_ARRIVAL,
      delay: ([0.06, 0.17, 0.28, 0.54] as const)[i] ?? 0,
    },
  }),
};

/** Opening footer (document reference + timestamp) — delayed fade. */
export const openingFoot: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.9 },
  },
};

/**
 * Stagger container — wraps children that should arrive in sequence.
 * Each child should use fadeUp or fadeIn.
 */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

/** V-mark hover rotation (used in Solutions rows). */
export const vMarkHover = {
  rest:  { rotate: 0 },
  hover: { rotate: 8, transition: { duration: DUR.SLOW, ease: EASE_ARRIVAL } },
};

/** Arrow slide (used in list rows). */
export const arrowHover = {
  rest:  { x: 0 },
  hover: { x: 6, transition: { duration: DUR.SLOW, ease: EASE_ARRIVAL } },
};

/** Row opacity — used for engagement rotation fade cycle. */
export const rowFade: Variants = {
  visible:  { opacity: 1, transition: { duration: 0.38, ease: EASE_ARRIVAL } },
  rotating: { opacity: 0, transition: { duration: 0.38, ease: 'easeIn' } },
};
