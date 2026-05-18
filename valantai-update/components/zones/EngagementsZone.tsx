'use client';

/**
 * EngagementsZone
 * "From current engagements" section. Four operating statements presented as
 * a vertical stack of italicised lines, in the editorial register of the site.
 */

const lines = [
  'Three jurisdictions, one mandate.',
  'Capital structured before first close.',
  'Counsel embedded before incorporation.',
  'Risk surfaced before counterparties.',
];

export default function EngagementsZone() {
  return (
    <section className="relative w-full border-t border-[#1C1A16] bg-[#0A0908] py-28 text-[#F2EEE6] sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
          <span className="h-px w-8 bg-[#3A3428]" />
          <span>From current engagements</span>
        </div>

        <ul className="space-y-7">
          {lines.map((line, i) => (
            <li
              key={line}
              className="flex items-baseline gap-6 border-b border-[#1C1A16] pb-7 last:border-b-0"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-[Source_Serif_4] text-[clamp(1.25rem,1.9vw,1.7rem)] italic leading-[1.4] text-[#F2EEE6]">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
