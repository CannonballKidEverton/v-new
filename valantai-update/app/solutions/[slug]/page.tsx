import { notFound } from 'next/navigation';
import PageHero from '@/components/hero/PageHero';
import EngagementBlock from '@/components/zones/EngagementBlock';
import { getSolution, listSolutionSlugs, solutions } from '@/lib/solutions';

export function generateStaticParams() {
  return listSolutionSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolution(params.slug);
  if (!solution) return notFound();

  const related = Object.values(solutions).filter((s) => s.slug !== solution.slug);

  return (
    <main className="min-h-screen bg-[#0A0908] text-[#F2EEE6]">
      <PageHero
        eyebrow={`Practice · ${solution.code}`}
        title={solution.name}
        subtitle={solution.positioning}
      />

      <section className="relative w-full border-t border-[#1C1A16] py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-16">
          <div className="lg:col-span-8">
            <p className="font-[Inter_Tight] text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F2EEE6]">
              {solution.lede}
            </p>

            <div className="mt-10 space-y-6">
              {solution.body.map((p, i) => (
                <p
                  key={i}
                  className="font-[Source_Serif_4] text-[1.05rem] leading-[1.7] text-[#C8C0AC]"
                  style={{ textAlign: 'justify' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6 border-l border-[#1C1A16] pl-6">
              {solution.meta.map((m) => (
                <div key={m.label}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                    {m.label}
                  </div>
                  <div className="mt-1 font-[Inter_Tight] text-[0.95rem] text-[#F2EEE6]">
                    {m.value}
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#7A7060]">
                  {solution.documentRef}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {solution.sections.map((sec, i) => (
        <section
          key={sec.heading}
          className="relative w-full border-t border-[#1C1A16] py-24 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                <span className="h-px w-8 bg-[#3A3428]" />
                <span>Section · {String(i + 1).padStart(2, '0')}</span>
              </div>
              <h2 className="mt-6 font-[Inter_Tight] text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
                {sec.heading}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {sec.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-[Source_Serif_4] text-[1.05rem] leading-[1.7] text-[#C8C0AC]"
                    style={{ textAlign: 'justify' }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {solution.pullQuote && (
        <section className="relative w-full border-t border-[#1C1A16] py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
            <blockquote className="font-[Source_Serif_4] text-[clamp(1.4rem,2.4vw,2.1rem)] italic leading-[1.4] text-[#F2EEE6]">
              {solution.pullQuote.text}
            </blockquote>
            {solution.pullQuote.attribution && (
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                {solution.pullQuote.attribution}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="relative w-full border-t border-[#1C1A16] py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
            <span className="h-px w-8 bg-[#3A3428]" />
            <span>Related practices</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`/solutions/${r.slug}`}
                className="group block border border-[#1C1A16] p-8 transition-colors hover:border-[#3A3428]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                  Practice · {r.code}
                </div>
                <div className="mt-4 font-[Inter_Tight] text-[1.6rem] font-semibold tracking-[-0.01em] text-[#F2EEE6]">
                  {r.name}
                </div>
                <div className="mt-3 font-[Source_Serif_4] italic text-[0.95rem] text-[#C8C0AC]">
                  {r.positioning}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <EngagementBlock />
    </main>
  );
}
