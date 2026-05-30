import type { Metadata } from 'next';
import { OpeningZone }      from '@/components/zones/OpeningZone';
// import { ThesisZone }       from '@/components/zones/ThesisZone';
import { EngagementsZone }  from '@/components/zones/EngagementsZone';
import { SolutionsZone }    from '@/components/zones/SolutionsZone';
import { IntelligenceZone } from '@/components/zones/IntelligenceZone';
// import { PartnersZone }     from '@/components/zones/PartnersZone';
import { EngagementBlock }  from '@/components/primitives/EngagementBlock';
import { SolutionsTicker }  from '@/components/hero/SolutionsTicker';

export const metadata: Metadata = {
  title: 'Valantai — The Operating Institution for Ambitious Companies',
  description: 'Valantai builds future positions. Business model architecture, idea commercialisation, capital, counsel, commercial, technology, ecommerce, brand activation. We help companies get to the next level.',
  openGraph: {
    title: 'Valantai — Builds Future Positions',
    description: 'The operating institution for ambitious companies. We create, fix, and scale the systems companies need to compete, raise, exit, and endure.',
  },
};

export default function HomePage() {
  return (
    <>
      <OpeningZone />
      {/* <ThesisZone /> */}
      <EngagementsZone />
      <div className="relative">
        <SolutionsTicker />
        <SolutionsZone />
      </div>
      <IntelligenceZone />
      {/* <PartnersZone /> */}
      <EngagementBlock />
    </>
  );
}
