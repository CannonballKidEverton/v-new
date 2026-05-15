import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { MetadataBlock } from '@/components/primitives/MetadataBlock';

const METADATA = [
  { label: 'Established',          value: '2024' },
  { label: 'Principals',           value: 'S. Shellien\nT. Speechley\nT. Chhabra' },
  { label: 'Operating across',     value: 'UK · UAE · KSA · US' },
  { label: 'Combined experience',  value: '75 years operator-led' },
  { label: 'Programmes delivered', value: '5,650+ to date' },
];

const FRAGMENTS = [
  'Three jurisdictions, one mandate.',
  'Capital structured before first close.',
  'Counsel embedded before incorporation.',
  'Risk surfaced before counterparties.',
];

export function ThesisZone() {
  return (
    <ArrivalWrapper
      as="section"
      className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
    >
      {/* Editorial body */}
      <article className="t-lead text-ink max-w-prose">
        <p className="mb-[1.55em]">
          Ambitious companies arrive at the same structural gap. The calibre of counsel
          they need is inaccessible, unaffordable, or fragmented across firms that do not
          speak to each other. They engage advisors who have read about the work. They
          need operators who have done it.
        </p>
        <p className="t-keyline text-ink mb-[1.5em]">
          We built Valantai because the firms charging the most have done it the least.
        </p>
        <p className="mb-[1.55em]">
          The founding partners have funded, structured, scaled, and exited companies
          across three decades. UK, GCC, US. Capital, enterprise infrastructure,
          strategic counsel. The track record is the product; the institution exists
          to deploy it.
        </p>
        <p>
          AI is the leverage. It does not replace the judgement. It compresses the time,
          expands the surface, and lets the operators think. Clients receive both — the
          operators and the leverage — under one mandate, one counterparty, one signature.
        </p>
      </article>

      {/* Right-hand metadata rail */}
      <aside className="self-start pt-1.5">
        <MetadataBlock
          items={METADATA.map((m) => ({
            label: m.label,
            value: m.value.includes('\n')
              ? m.value.split('\n').map((v, i) => <span key={i} className="block">{v}</span>)
              : m.value,
          }))}
        />

        {/* Operational fragment notes */}
        <div className="mt-6 pt-[18px] border-t border-hairline-2 flex flex-col gap-2.5">
          <span className="t-label text-ink-3 mb-1">From current engagements</span>
          {FRAGMENTS.map((f, i) => (
            <p key={i} className="t-fragment text-ink-strong">{f}</p>
          ))}
        </div>
      </aside>
    </ArrivalWrapper>
  );
}
