import type { Metadata } from 'next';
import { OpeningZone }      from '@/components/zones/OpeningZone';
import { ThesisZone }       from '@/components/zones/ThesisZone';
import { EngagementsZone }  from '@/components/zones/EngagementsZone';
import { SolutionsZone }    from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
import { PartnersZone }     from '@/components/zones/PartnersZone';
import { EngagementBlock }  from '@/components/primitives/EngagementBlock';
import { SolutionsTicker }  from '@/components/hero/SolutionsTicker';
import { DocumentaryPlaceholder } from '@/components/imagery/DocumentaryPlaceholder';

export const metadata: Metadata = {
  title: 'Valantai — From idea to exit',
  description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  openGraph: {
    title: 'Valantai — From idea to exit',
    description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  },
};

/**
 * Atmospheric image band — not a panel, not a slot.
 *
 * Imagery is embedded into the page fabric:
 *   - gradient-faded on all four edges (blends into surrounding bg)
 *   - reduced opacity (0.24–0.32) — present, not decorative
 *   - fixed height, not aspect-ratio — doesn't assert a shape
 *   - positioned with negative margin-block to bleed into
 *     adjacent sections rather than sitting between them
 *   - aria-hidden — purely atmospheric, no content value
 */
function AtmosphericBand({
  variant,
  height = 220,
  opacity = 0.26,
  marginBlock = -18,
}: {
  variant: 'megalith' | 'stone' | 'terminal' | 'aerial' | 'datacenter' | 'sphere' | 'facade' | 'control';
  height?: number;
  opacity?: number;
  marginBlock?: number;
}) {
  const bg = '#0A0908';
  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        height: `${height}px`,
        overflow: 'hidden',
        marginBlock: `${marginBlock}px`,
        pointerEvents: 'none',
      }}
    >
      {/* The image — fills the container, scaled slightly to avoid edge gaps */}
      <div
        style={{
          position: 'absolute',
          inset: '-5%',
          opacity,
        }}
      >
        <DocumentaryPlaceholder
          variant={variant}
          aspect="21/5"
        />
      </div>
      {/* Gradient fades — top and bottom: blends into site bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${bg} 0%, rgba(10,9,8,0.05) 32%, rgba(10,9,8,0.05) 68%, ${bg} 100%)`,
      }} />
      {/* Left/right fades — soften the lateral edges */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to right, ${bg} 0%, transparent 18%, transparent 82%, ${bg} 100%)`,
      }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO — intelligence field animation lives in OpeningZone ── */}
      <OpeningZone />

      {/* ── THESIS ─────────────────────────────────────────────────── */}
      <ThesisZone />

      {/* ── ATMOSPHERIC IMAGERY — megalith / foundation ─────────────
          Fades into ThesisZone below and EngagementsZone above.
          Not a panel. Not a slot. Background atmosphere only.     ── */}
      <AtmosphericBand variant="megalith" height={200} opacity={0.24} marginBlock={-14} />

      {/* ── CURRENT ENGAGEMENTS ──────────────────────────────────── */}
      <EngagementsZone />

      {/* ── SOLUTIONS + QUIET TICKER ─────────────────────────────── */}
      <div className="relative">
        {/* Institutional data-flow — barely visible, never distracting */}
        <SolutionsTicker />
        <SolutionsZone />
      </div>

      {/* ── ATMOSPHERIC IMAGERY — aerial / scale ─────────────────────
          Between Solutions and Intelligence — operational scale.    ── */}
      <AtmosphericBand variant="aerial" height={180} opacity={0.22} marginBlock={-12} />

      {/* ── INTELLIGENCE SYSTEMS ─────────────────────────────────── */}
      <IntelligenceZone />

      {/* ── PARTNERS ─────────────────────────────────────────────── */}
      <PartnersZone />

      {/* ── ATMOSPHERIC IMAGERY — sphere / future ───────────────────
          Just before Engage — the future institution.               ── */}
      <AtmosphericBand variant="sphere" height={180} opacity={0.20} marginBlock={-10} />

      {/* ── ENGAGE ───────────────────────────────────────────────── */}
      <EngagementBlock />
    </>
  );
}
