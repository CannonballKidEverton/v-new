import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero }        from '@/components/primitives/PageHero';
import { MetadataBlock }   from '@/components/primitives/MetadataBlock';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { ImageSlot }       from '@/components/imagery/ImageSlot';
import { dossiers, getDossierBySlug, getAllDossierSlugs } from '@/content/dossiers';

export function generateStaticParams() {
  return getAllDossierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const d = getDossierBySlug(params.slug);
  if (!d) return {};
  return { title: d.title, description: d.subtitle };
}

export default function DossierPage({ params }: { params: { slug: string } }) {
  const d = getDossierBySlug(params.slug);
  if (!d) notFound();

  return (
    <>
      {/* Hero image band */}
      <ImageSlot context="intelligence_band" aspect="21/8" priority />

      <PageHero
        index={`${d.number} · ${d.meta.series}`}
        title={d.title}
        subtitle={d.subtitle}
        refPrefix={`VLT · ${d.number}`}
        variant="profile"
      />

      {/* Abstract + dossier meta */}
      <section
        className="zone-pad border-b border-hairline-2 grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
      >
        <p className="font-sans font-medium text-[clamp(1.3rem,1.9vw,1.8rem)] leading-[1.25] tracking-[-0.015em] text-ink">
          {d.abstract}
        </p>
        <aside className="self-start">
          <MetadataBlock items={[
            { label: 'Reference',      value: d.meta.ref          },
            { label: 'Series',         value: d.meta.series       },
            { label: 'Issued',         value: d.meta.issued       },
            { label: 'Reading',        value: d.meta.reading      },
            { label: 'Authored by',    value: d.meta.authoredBy   },
          ]} />
        </aside>
      </section>

      {/* Sections */}
      {d.sections.map((section) => (
        <section
          key={section.ref}
          className="zone-pad border-b border-hairline grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,8fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-8 items-start"
        >
          <div className="self-start pt-1">
            <span className="t-label text-ink-4">{section.ref}</span>
          </div>
          <div>
            <h2 className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.015em] text-ink mb-6">
              {section.heading}
            </h2>
            <div className="t-lead text-ink max-w-prose">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
            {section.callout && (
              <p className="font-serif italic text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.45] text-ink-strong mt-8 max-w-[48ch] border-l-2 border-accent pl-6">
                {section.callout}
              </p>
            )}
          </div>
        </section>
      ))}

      <EngagementBlock />
    </>
  );
}
