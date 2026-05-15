import type { VMark } from "@/content/solutions";

const S = {
  stroke: "currentColor" as const,
  strokeWidth: "1.5" as const,
  fill: "none" as const,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

const MARKS: Record<VMark, React.ReactNode> = {
  /** 01 Build — foundational standard V */
  standard: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4" {...S} />
    </svg>
  ),
  /** 02 Capital — right arm extends higher (upward trajectory) */
  extended: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 20 2" {...S} />
    </svg>
  ),
  /** 03 Technology — V with horizontal cap (structural closure) */
  capped: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4 M 6 4 L 18 4" {...S} />
    </svg>
  ),
  /** 04 Risk — V tilted slightly (instability/exposure signal) */
  tilted: (
    <svg viewBox="0 0 24 24" style={{ transform: "rotate(7deg)" }} aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4" {...S} />
    </svg>
  ),
  /** 05 Commerce — wider angle V (outward, expansive reach) */
  wide: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 3 6 L 12 20 L 21 6" {...S} />
    </svg>
  ),
  /** 06 Counsel — V with horizontal underscore (protective base) */
  underlined: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 18 L 18 4 M 6 22 L 18 22" {...S} />
    </svg>
  ),
  /** 07 Grow — left arm shorter, right arm ascends (growth momentum) */
  ascending: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 5 8 L 12 20 L 20 2" {...S} />
    </svg>
  ),
  /** 08 Brand — inverted V / chevron up (bold declaration) */
  inverted: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 4 20 L 12 4 L 20 20" {...S} />
    </svg>
  ),
  /** 09 GTM — compressed narrow V (precision, targeting) */
  compressed: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 9 4 L 12 20 L 15 4" {...S} />
    </svg>
  ),
  /** 10 ESG — V with horizontal midpoint bar (balance, equilibrium) */
  balanced: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4 M 7 11 L 17 11" {...S} />
    </svg>
  ),
  /** 11 Educate — V with dot at apex (knowledge point) */
  dotted: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 18 L 18 4" {...S} />
      <circle cx="12" cy="21.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  /** 12 Wedge — two converging lines with gap (the gap IS the wedge) */
  split: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 4 4 L 10 19 M 20 4 L 14 19" {...S} />
    </svg>
  ),
  /** 13 Angels — V with wing extensions at each arm (network, reach) */
  winged: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4 M 3 8 L 6 4 M 21 8 L 18 4" {...S} />
    </svg>
  ),
};

interface VMarkIconProps {
  variant: VMark;
  className?: string;
}

export function VMarkIcon({ variant, className }: VMarkIconProps) {
  return (
    <span
      className={className}
      style={{ display: "block", width: 28, height: 28, flexShrink: 0 }}
    >
      {MARKS[variant]}
    </span>
  );
}
