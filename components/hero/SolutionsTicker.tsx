/**
 * SolutionsTicker
 *
 * Quiet institutional data-flow layer behind the Solutions section.
 * NOT a stock ticker. NOT a crypto tape.
 * A slow, masked, barely-visible layer of operating terms —
 * like the background intelligence of a live institution.
 *
 * Implementation: pure CSS animation, no JS, no RAF.
 * Performance: single transform, GPU composited.
 */

const TERMS = [
  'Build', 'Capital', 'Technology', 'Risk', 'Commerce', 'Counsel',
  'Grow', 'Brand', 'GTM', 'ESG', 'Educate', 'Wedge', 'Angels',
  'LDN', 'UAE', 'NYC', 'KSA',
  'Mandate', 'Capital Route', 'Risk Domain', 'Operating Counsel',
  'Scale', 'Exit', 'IPO', 'Idea',
];

/* Duplicate for seamless loop */
const ROW = [...TERMS, ...TERMS];

export function SolutionsTicker() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0, right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        /* gradient mask — fades at both edges */
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 0,
          width: 'max-content',
          animation: 'ticker-scroll 90s linear infinite',
        }}
      >
        {ROW.map((term, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              fontFamily: 'monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(200,180,140,0.09)',
              padding: '0 28px',
              whiteSpace: 'nowrap',
            }}
          >
            {term}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ticker-scroll"] { animation: none; }
        }
      `}</style>
    </div>
  );
}
