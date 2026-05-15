import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero }        from '@/components/primitives/PageHero';
import { SectionHead }     from '@/components/primitives/SectionHead';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { VMarkIcon }       from '@/components/solutions/VMarks';
import { solutions, TOTAL_SOLUTIONS } from '@/content/solutions';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Six of thirteen operating solutions. From day one to exit.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        index="Solutions · Six of thirteen shown"
        title="Solutions"
        subtitle="From founding architecture to exit preparation. Every stage of the company lifecycle, served by operators who have operated at it."
        refPrefix="VLT · SOL"
        variant="division"
      />

      <section className="zone-pad">
        <SectionHead title="Operating solutions" counter={`${solutions.length} of ${TOTAL_SOLUTIONS}`} />

        <div className="flex flex-col gap-16">
          {solutions.map((sol) => (
            <div key={sol.slug} className="grid grid-cols-1 md:grid-cols-[64px_minmax(0,1fr)] gap-x-[clamp(24px,4vw,56px)] gap-y-4">
              <VMarkIcon variant={sol.vMark} className="hidden md:block text-ink mt-1.5" />
              <div>
                <div className="flex items-baseline gap-6 mb-4">
                  <h2 className="t-solution text-ink">{sol.name}</h2>
                  <span className="t-label text-ink-4">{sol.number}</span>
                </div>
                <div className="font-serif text-[clamp(1.05rem,1.3vw,1.2rem)] leading-relaxed text-ink max-w-prose">
                  {sol.sections.flatMap((s) => s.paragraphs).slice(0, 2).map((p, i) => (
                    <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
                  ))}
                </div>
                {sol.href && (
                  <Link
                    href={sol.href}
                    className="t-caption text-ink-3 no-underline mt-8 inline-flex items-center gap-2.5 hover:text-ink transition-colors duration-moderate"
                  >
                    Open the {sol.name} instrument →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <EngagementBlock />
    </>
  );
}
