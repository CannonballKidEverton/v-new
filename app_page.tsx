// app/page.tsx — REPLACE your existing file with this
// Changes: adds ImageSlot bands (homepage_band, intelligence_band, homepage_engage)
// Removes the "Image reserved — commissioned photography" text placeholder

import type { Metadata } from 'next';
import { OpeningZone }     from '@/components/zones/OpeningZone';
import { ThesisZone }      from '@/components/zones/ThesisZone';
import { EngagementsZone } from '@/components/zones/EngagementsZone';
import { SolutionsZone }   from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
import { PartnersZone }    from '@/components/zones/PartnersZone';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { ImageSlot }       from '@/components/imagery/ImageSlot';

export const metadata: Metadata = {
  title: 'Valantai — From idea to exit',
  description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  openGraph: {
    title: 'Valantai — From idea to exit',
    description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  },
};

export default function HomePage() {
  return (
    <>
      <OpeningZone />
      <ThesisZone />

      {/* Full-bleed architectural image band — replaces "Image reserved" text */}
      <ImageSlot
        context="homepage_band"
        aspect="21/7"
        priority
      />

      <EngagementsZone />

      {/* Spatial pacing */}
      <div className="h-[12vh] min-h-[80px]" aria-hidden="true" />

      <SolutionsZone />

      {/* Intelligence section image band */}
      <div className="w-full">
        <ImageSlot context="intelligence_band" aspect="32/9" />
      </div>

      <IntelligenceZone />
      <PartnersZone />

      {/* Pre-engage image band */}
      <div className="px-[var(--margin)] pt-4 pb-0">
        <ImageSlot context="homepage_engage" aspect="32/9" />
      </div>

      <EngagementBlock />
    </>
  );
}
