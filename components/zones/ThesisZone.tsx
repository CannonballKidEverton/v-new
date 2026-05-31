import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { MetadataBlock } from '@/components/primitives/MetadataBlock';

const METADATA = [
  { label: 'Established',          value: '2024' },
  { label: 'Principals',           value: 'S. Shellien\nT. Speechley\nT. Chhabra' },
  { label: 'Operating across',     value: 'LDN · UAE · NYC · KSA' },
  { label: 'Combined experience',  value: '75+ years operator-led' },
  { label: 'Active mandates',      value: '17' },
  { label: 'Programmes delivered', value: '5,650+ to date' },
];

const FRAGMENTS = [
  'Discovery before deployment.',
  'Capital structured before first close.',
  'Systems built before handover.',
  'Build. Fix. Scale.',
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
          We help companies get to the next level. Whatever they need. Business model
          architecture, idea commercialisation, capital, counsel, commercial, technology,
          ecommerce, brand activation. One counterparty. One mandate.
        </p>
        <p className="t-keyline text-ink mb-[1.5em]">
          Because most firms stop at advice. Valantai stays for implementation.
        </p>
        <p className="mb-[1.55em]">
          The founding partners have funded, structured, scaled, and exited companies
          across three decades. UK, GCC, US. The track record is the product; the institution exists
          to deploy it.
        </p>
        <p>
          We do not hand over a report. We hand over a running system. Built,
          deployed, and operating. AI is the leverage. It compresses the time,
          expands the surface, and lets the operators think.
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
