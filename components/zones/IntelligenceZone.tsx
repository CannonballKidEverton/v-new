import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { intelligenceSystems } from '@/content/intelligence';

export function IntelligenceZone() {
  return (
    <ArrivalWrapper as="section" className="zone-pad" id="intelligence">
      <SectionHead
        title="Intelligence Systems"
        counter={`${intelligenceSystems.length} systems`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-t border-hairline">
        {intelligenceSystems.map((sys, i) => (
          <div
            key={sys.ref}
            className={[
              'py-9 pr-8',
              i !== intelligenceSystems.length - 1
                ? 'xl:border-r border-hairline'
                : '',
              i % 2 === 0 ? '' : 'sm:pl-8 xl:pl-0',
              i >= 2 ? 'sm:border-t xl:border-t-0 border-hairline' : '',
              i === 0 ? 'xl:pl-0' : 'xl:pl-8',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="t-label text-ink-3 block mb-4.5">{sys.ref}</span>
            <h3 className="font-sans font-medium text-[clamp(1.15rem,1.6vw,1.5rem)] tracking-[-0.015em] text-ink leading-tight mb-4">
              {sys.name}
            </h3>
            <p className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-2 mb-6 max-w-[36ch]">
              {sys.description}
            </p>
            <dl className="flex flex-col gap-3 font-mono">
              {sys.meta.map((m) => (
                <div key={m.label}>
                  <dt className="t-label text-ink-3 mb-1">{m.label}</dt>
                  <dd className="text-[12px] tracking-[0.06em] text-ink-2">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ArrivalWrapper>
  );
}
