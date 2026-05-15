import type { Metadata } from 'next';
import { OpeningZone }     from '@/components/zones/OpeningZone';
import { ThesisZone }      from '@/components/zones/ThesisZone';
import { EngagementsZone } from '@/components/zones/EngagementsZone';
import { SolutionsZone }   from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
import { PartnersZone }    from '@/components/zones/PartnersZone';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { ImagePlaceholder } from '@/components/imagery/ImagePlaceholder';

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

      {/* Image placement — reserved for commissioned documentary photography.
          Replace ImagePlaceholder with EditorialImage when photography is delivered. */}
      <div className="px-[var(--margin)] pb-0">
        <ImagePlaceholder
          aspect="21/9"
          label="Documentary · Infrastructure · Operations"
          caption="Image reserved — commissioned photography"
          className="w-full"
        />
      </div>

      <EngagementsZone />

      {/* Spatial pacing — 18vh of intentional air */}
      <div className="h-[18vh] min-h-[140px]" aria-hidden="true" />

      <SolutionsZone />
      <IntelligenceZone />
      <PartnersZone />
      <EngagementBlock />
    </>
  );
}
