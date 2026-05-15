import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero }        from '@/components/primitives/PageHero';
import { MetadataBlock }   from '@/components/primitives/MetadataBlock';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
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
          className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] items-start"
        >
          <div className="md:col-start-1">
            <div className="mb-6">
              <span className="t-label text-ink-4 block mb-3.5">{section.ref}</span>
              <h2 className="font-sans font-medium text-[clamp(1.6rem,2.4vw,2.25rem)] tracking-[-0.018em] text-ink leading-tight max-w-[24ch]">
                {section.heading}
              </h2>
            </div>
            <div className="t-lead text-ink max-w-prose">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
            {section.callout && (
              <p className="mt-14 py-8 border-t border-b border-hairline-2 font-serif italic text-[clamp(1.3rem,1.9vw,1.8rem)] leading-[1.35] text-ink-2 max-w-[48ch]">
                {section.callout}
              </p>
            )}
          </div>
        </section>
      ))}

      {/* References */}
      <section className="zone-pad border-t border-hairline-2">
        <span className="t-label text-ink-4 block mb-3.5">§ REF</span>
        <h2 className="font-sans font-medium text-[clamp(1.3rem,1.8vw,1.6rem)] tracking-[-0.015em] text-ink mb-7">
          Standing references
        </h2>
        <ul className="border-t border-hairline list-none">
          {d.references.map((r, i) => (
            <li key={i} className="font-mono text-[11px] tracking-[0.06em] text-ink-2 py-4 border-b border-hairline last:border-0">
              {r}
            </li>
          ))}
        </ul>
      </section>

      <EngagementBlock />
    </>
  );
}
