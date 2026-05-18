import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero }        from '@/components/primitives/PageHero';
import { SectionHead }     from '@/components/primitives/SectionHead';
import { MetadataBlock }   from '@/components/primitives/MetadataBlock';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { VMarkIcon }       from '@/components/solutions/VMarks';
import { DocumentaryPlaceholder } from '@/components/imagery/DocumentaryPlaceholder';
import type { PlaceholderVariant } from '@/components/imagery/DocumentaryPlaceholder';
import { solutions, getSolutionBySlug } from '@/content/solutions';

type IntegrationMode = 'ambient-hero' | 'mid-separator' | 'none';

const INTEGRATION: Record<string, { mode: IntegrationMode; variant: PlaceholderVariant }> = {
  build:      { mode: 'ambient-hero',  variant: 'megalith' },
  counsel:    { mode: 'ambient-hero',  variant: 'stone'    },
  wedge:      { mode: 'ambient-hero',  variant: 'megalith' },
  educate:    { mode: 'ambient-hero',  variant: 'stone'    },
  angels:     { mode: 'ambient-hero',  variant: 'megalith' },
  brand:      { mode: 'ambient-hero',  variant: 'stone'    },
  technology: { mode: 'mid-separator', variant: 'facade'   },
  risk:       { mode: 'mid-separator', variant: 'control'  },
  capital:    { mode: 'mid-separator', variant: 'glass'    },
  commerce:   { mode: 'mid-separator', variant: 'terminal' },
  grow:       { mode: 'none',          variant: 'aerial'   },
  gtm:        { mode: 'none',          variant: 'terminal' },
  esg:        { mode: 'none',          variant: 'aerial'   },
};

const BG = '#0A0908';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata> {
  const sol = getSolutionBySlug(params.slug);
  if (!sol) return {};
  return { title: sol.name, description: sol.description };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const sol = getSolutionBySlug(params.slug);
  if (!sol) notFound();

  const config = INTEGRATION[sol.slug] ?? { mode: 'none' as IntegrationMode, variant: 'facade' as PlaceholderVariant };
  const hasInstrument = sol.href !== null && sol.href !== `/solutions/${sol.slug}`;

  return (
    <>
      <div style={{ position: 'relative' }}>
        {config.mode === 'ambient-hero' && (
          <div
            aria-hidden
            style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
          >
            <div style={{ position: 'absolute', inset: 0, opacity: 0.10 }}>
              <DocumentaryPlaceholder variant={config.variant} aspect="21/8" />
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${BG} 0%, rgba(10,9,8,0.72) 50%, rgba(10,9,8,0.55) 100%)`,
            }} />
          </div>
        )}
        <PageHero
          index={`${sol.number} · Solutions · ${sol.name}`}
          title={sol.name}
          subtitle={sol.description}
          refPrefix={`VLT · SOL/${sol.number}`}
          variant="division"
        />
      </div>

      <section className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start">
        <div>
          <p className="t-keyline text-ink mb-8 max-w-[54ch]">
            {sol.positioning}
          </p>
          {sol.sections[0] && (
            <div className="t-lead text-ink max-w-prose mt-8">
              {sol.sections[0].paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
          )}
          {hasInstrument && (
            <Link
              href={sol.href!}
              className="t-caption text-ink-3 no-underline mt-10 inline-flex items-center gap-2.5 hover:text-ink transition-colors duration-moderate"
            >
              Open the {sol.name} instrument →
            </Link>
          )}
        </div>
        <aside className="self-start flex flex-col gap-10">
          <span className="text-ink w-12 h-12 block">
            <VMarkIcon variant={sol.vMark} />
          </span>
          <MetadataBlock items={sol.metadata} />
        </aside>
      </section>

      {config.mode === 'mid-separator' && (
        <div
          aria-hidden
          style={{ position: 'relative', height: '80px', overflow: 'hidden', marginBlock: '-12px', pointerEvents: 'none' }}
        >
          <div style={{ position: 'absolute', inset: '-12%', opacity: 0.22 }}>
            <DocumentaryPlaceholder variant={config.variant} aspect="21/3" />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${BG} 0%, transparent 35%, transparent 65%, ${BG} 100%)` }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${BG} 0%, transparent 12%, transparent 88%, ${BG} 100%)` }} />
        </div>
      )}

      {sol.sections.slice(1).map((section) => (
        <section
          key={section.heading}
          className="px-[var(--margin)] pb-[8vh] grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)]"
        >
          <div>
            <h2 className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.015em] text-ink mb-6">
              {section.heading}
            </h2>
            <div className="t-lead text-ink max-w-prose">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Related solutions" />
        <div className="flex flex-col">
          {solutions
            .filter((s) => s.slug !== sol.slug)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/solutions/${related.slug}`}
                className="group grid grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px] items-center gap-x-[clamp(24px,4vw,56px)] py-6 border-b border-hairline first:border-t no-underline text-inherit"
              >
                <span className="text-ink"><VMarkIcon variant={related.vMark} /></span>
                <span className="t-solution text-ink group-hover:text-accent transition-colors duration-moderate">
                  {related.name}
                </span>
                <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-3 hidden md:block">
                  {related.description}
                </span>
                <span className="font-mono text-[14px] text-ink-4 text-right group-hover:translate-x-1.5 transition-transform duration-moderate">
                  →
                </span>
              </Link>
            ))}
        </div>
      </section>

      <EngagementBlock />
    </>
  );
}
