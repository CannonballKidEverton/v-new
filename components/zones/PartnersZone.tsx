import Link from 'next/link';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { operators } from '@/content/operators';

export function PartnersZone() {
  return (
    <ArrivalWrapper as="section" className="zone-pad" id="partners">
      <SectionHead
        title="Founding Partners"
        counter="Three principals · Founded 2024"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline border-b border-hairline">
        {operators.map((op, i) => (
          <Link
            key={op.slug}
            href={`/operators/${op.slug}`}
            className={[
              'group flex flex-col min-h-[220px]',
              'py-11 pr-8 no-underline text-inherit',
              i > 0 ? 'md:border-l border-hairline md:pl-8' : '',
              i < operators.length - 1 ? 'border-b md:border-b-0 border-hairline' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="t-name text-ink mb-[18px] transition-colors duration-moderate group-hover:text-accent">
              {op.name}
            </span>
            <span className="font-serif italic text-[clamp(0.95rem,1.05vw,1.1rem)] leading-[1.45] text-ink-strong max-w-[30ch]">
              {op.role}
            </span>
            <span className="t-label text-ink-3 mt-auto pt-8 group-hover:text-ink transition-colors duration-moderate">
              Profile →
            </span>
          </Link>
        ))}
      </div>
    </ArrivalWrapper>
  );
}
