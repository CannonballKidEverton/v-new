import type { Metadata } from 'next';
import { PageHero } from '@/components/primitives/PageHero';
import { EngageForm } from './EngageForm';

export const metadata: Metadata = {
  title: 'Engage',
  description: 'By introduction. The institution responds to every correspondence.',
};

export default function EngagePage() {
  return (
    <>
      <PageHero
        index="ENG · The pathway"
        title="Engage"
        subtitle="By introduction only. The institution reads its own correspondence and responds within forty-eight hours."
        refPrefix="VLT · ENG"
        variant="division"
      />
      <EngageForm />
    </>
  );
}
