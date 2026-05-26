import type { VMark } from "@/content/solutions";

interface VMarkIconProps {
  variant: VMark;
  className?: string;
}

/**
 * VLT institutional mark — replaces the decorative V-mark variants.
 * JetBrains Mono bold, tracked, gold. Consistent across all solutions.
 * The variant prop is kept for API compatibility but the mark is always VLT.
 */
export function VMarkIcon({ variant, className }: VMarkIconProps) {
  return (
    <span
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 64,
        height: 28,
        flexShrink: 0,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: "clamp(1.15rem, 1.8vw, 1.55rem)",
        letterSpacing: "0.08em",
        color: "currentColor",
      }}
      aria-hidden="true"
    >
      VLT
    </span>
  );
}
