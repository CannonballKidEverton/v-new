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
        width: 28,
        height: 28,
        flexShrink: 0,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "0.14em",
        color: "currentColor",
      }}
      aria-hidden="true"
    >
      VLT
    </span>
  );
}
