"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MOTION_TAGS = {
  div:     motion.div,
  section: motion.section,
  article: motion.article,
  header:  motion.header,
  footer:  motion.footer,
  main:    motion.main,
  span:    motion.span,
  aside:   motion.aside,
  ul:      motion.ul,
  li:      motion.li,
} as const;

type SupportedTag = keyof typeof MOTION_TAGS;

type PassthroughProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  | "style"
  | "onAnimationStart"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
>;

interface ArrivalWrapperProps extends PassthroughProps {
  children: React.ReactNode;
  delay?: number;
  /**
   * "fade" — opacity only (default, cheaper, recommended for large sections).
   * "up"   — opacity + translateY (reserved for hero/key callout moments).
   */
  variant?: "fade" | "up";
  /** Fraction of element visible before triggering. Higher = less early-trigger jank. */
  threshold?: number;
  once?: boolean;
  as?: SupportedTag;
}

/**
 * Scroll-triggered arrival wrapper.
 *
 * Performance notes:
 * - Default variant is "fade" (opacity only) — no layout/transform cost.
 * - Threshold is 0.2 — triggers when 20% visible, reducing mid-scroll stutter.
 * - once=true means IntersectionObserver unobserves after first trigger.
 * - Interior page sections that don't need animation should use plain <section>.
 */
export function ArrivalWrapper({
  children,
  className,
  delay = 0,
  variant = "fade",
  threshold = 0.2,
  once = true,
  as: tag = "div",
  ...rest
}: ArrivalWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once,
    amount: threshold,
  });

  const Tag = MOTION_TAGS[tag];
  const vars = variant === "up" ? fadeUp : fadeIn;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      variants={vars}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={cn(className)}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}
