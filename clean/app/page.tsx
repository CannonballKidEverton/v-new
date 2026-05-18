import type { Metadata } from 'next';
import { OpeningZone }      from '@/components/zones/OpeningZone';
import { ThesisZone }       from '@/components/zones/ThesisZone';
import { EngagementsZone }  from '@/components/zones/EngagementsZone';
import { SolutionsZone }    from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
import { PartnersZone }     from '@/components/zones/PartnersZone';
import { EngagementBlock }  from '@/components/primitives/EngagementBlock';
import { SolutionsTicker }  from '@/components/hero/SolutionsTicker';

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
      <EngagementsZone />
      <div className="relative">
        <SolutionsTicker />
        <SolutionsZone />
      </div>
      <IntelligenceZone />
      <PartnersZone />
      <EngagementBlock />
    </>
  );
}
