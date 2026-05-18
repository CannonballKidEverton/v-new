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
import type { PlaceholderVariant } from '@/components/imagery/DocumentaryPlaceholder';

export const metadata: Metadata = {
  title: 'Valantai — From idea to exit',
  description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  openGraph: {
    title: 'Valantai — From idea to exit',
    description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  },
};

const BG = '#0A0908';

/**
 * AtmosphericBand — imagery embedded into the page fabric.
 * Not a panel. Not a slot. Gradient-faded on all edges.
 * Uses marginBlock to bleed into adjacent sections.
 */
function AtmosphericBand({
  variant,
  height = 160,
  opacity = 0.22,
  marginBlock = -20,
}: {
  variant: PlaceholderVariant;
  height?: number;
  opacity?: number;
  marginBlock?: number;
}) {
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
      <div style={{ position: 'absolute', inset: '-8%', opacity }}>
        <DocumentaryPlaceholder variant={variant} aspect="21/4" />
      </div>
      {/* Top + bottom fade — 40% each — barely any solid band visible */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${BG} 0%, transparent 40%, transparent 60%, ${BG} 100%)`,
      }} />
      {/* Side fades */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to right, ${BG} 0%, transparent 15%, transparent 85%, ${BG} 100%)`,
      }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO — CoreIntelligenceField animation inside OpeningZone ── */}
      <OpeningZone />

      {/* ── THESIS ── */}
      <ThesisZone />

      {/* Megalith atmospheric layer — foundation moment, warm, very faint.
          Tight negative margin so it connects to surrounding sections. */}
      <AtmosphericBand variant="megalith" height={140} opacity={0.20} marginBlock={-22} />

      {/* ── CURRENT ENGAGEMENTS ── */}
      <EngagementsZone />

      {/* ── SOLUTIONS — quiet ticker sits at section edge ── */}
      <div className="relative">
        <SolutionsTicker />
        <SolutionsZone />
      </div>

      {/* ── INTELLIGENCE SYSTEMS ─────────────────────────────────────
          No image band here. The aerial/blue panel was too dominant.
          The section transition is handled by the hairline border only. ── */}
      <IntelligenceZone />

      {/* ── PARTNERS ── */}
      <PartnersZone />

      {/* Sphere atmospheric layer — future institution moment before Engage.
          Warm amber, very low opacity, bleeds into both sections. */}
      <AtmosphericBand variant="sphere" height={120} opacity={0.18} marginBlock={-18} />

      {/* ── ENGAGE ── */}
      <EngagementBlock />
    </>
  );
}
