import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero }        from '@/components/primitives/PageHero';
import { MetadataBlock }   from '@/components/primitives/MetadataBlock';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { operators, getOperatorBySlug } from '@/content/operators';

export function generateStaticParams() {
  return operators.filter(op => !op.hidden).map((op) => ({ slug: op.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const op = getOperatorBySlug(params.slug);
  if (!op || op.hidden) return {};
  return { title: op.name, description: op.bio };
}

export default function OperatorPage({ params }: { params: { slug: string } }) {
  const op = getOperatorBySlug(params.slug);
  if (!op || op.hidden) notFound();

  const meta = [
    ...op.meta,
    ...(op.pastEngagements?.length
      ? [{ label: 'Past engagements include', value: op.pastEngagements.join(' · ') }]
      : []),
  ];

  return (
    <>
      <PageHero
        index={`${op.ref} · Founding Partner`}
        title={op.name}
        subtitle={op.role}
        refPrefix={`VLT · ${op.ref}`}
        variant="profile"
      />

      <section
        className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
      >
        <article className="t-lead text-ink max-w-prose">
          {op.longBio.map((para, i) => (
            <p key={i} className="mb-[1.55em] last:mb-0" dangerouslySetInnerHTML={{ __html: para.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
          ))}
        </article>

        <aside className="self-start flex flex-col gap-9">
          {/* Portrait placeholder — replace with commissioned photography */}
          <div
            className="w-full max-w-[360px] bg-bg-2 border border-hairline-2"
            style={{ aspectRatio: '4/5' }}
            aria-label="Portrait — pending commission"
          />
          <MetadataBlock items={meta} />
        </aside>
      </section>

      <EngagementBlock />
    </>
  );
}
