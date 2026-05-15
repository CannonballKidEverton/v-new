import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero }         from '@/components/primitives/PageHero';
import { SectionHead }      from '@/components/primitives/SectionHead';
import { EngagementBlock }  from '@/components/primitives/EngagementBlock';
import { IntelligenceMap }  from '@/components/graphics/IntelligenceMap';
import { ImageSlot }        from '@/components/imagery/ImageSlot';
import { dossiers }         from '@/content/dossiers';

export const metadata: Metadata = {
  title: 'Intelligence',
  description: 'Published institutional intelligence from the Valantai practice.',
};

export default function IntelligenceIndex() {
  return (
    <>
      {/* ── HERO IMAGE ── */}
      <ImageSlot context="intelligence_band" aspect="21/8" priority />

      <PageHero
        index="INT · Operating Intelligence"
        title="Intelligence"
        subtitle="Published dossiers from the institution. Restricted in places. Read openly here."
        refPrefix="VLT · INT"
        variant="division"
      />

      <section className="zone-pad">
        <SectionHead
          title="System architecture"
          counter="Four systems"
        />
        <IntelligenceMap />
      </section>

      {/* Secondary datacenter band */}
      <div className="px-[var(--margin)] py-[3vh]">
        <ImageSlot context="risk_operations" aspect="32/9" />
      </div>

      <section className="zone-pad border-t border-hairline">
        <SectionHead
          title="Published dossiers"
          counter={`${dossiers.length} of ${dossiers.length} shown`}
        />

        <div className="border-t border-hairline">
          {dossiers.map((d) => (
            <Link
              key={d.slug}
              href={`/intelligence/${d.slug}`}
              className="group grid grid-cols-[80px_minmax(0,1fr)_32px] items-start gap-x-[clamp(24px,4vw,56px)] py-10 border-b border-hairline no-underline text-inherit"
            >
              <span className="t-label text-ink-4 pt-2.5">{d.number}</span>
              <div>
                <h3 className="font-sans font-medium text-[clamp(1.5rem,2.4vw,2.1rem)] tracking-[-0.018em] text-ink leading-tight mb-3 group-hover:text-accent transition-colors duration-moderate">
                  {d.title}
                </h3>
                <p className="font-serif italic text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-ink-2 mb-4 max-w-[52ch]">
                  {d.subtitle}
                </p>
                <div className="t-label text-ink-4 flex gap-2 flex-wrap">
                  <span>{d.meta.series}</span><span>·</span>
                  <span>{d.meta.issued}</span><span>·</span>
                  <span>{d.meta.reading}</span>
                </div>
              </div>
              <span className="font-mono text-[14px] text-ink-4 pt-2.5 group-hover:text-ink group-hover:translate-x-1.5 transition-all duration-moderate">→</span>
            </Link>
          ))}
        </div>
      </section>

      <EngagementBlock />
    </>
  );
}
