import { ArrivalWrapper } from './ArrivalWrapper';

interface EngagementBlockProps {
  lead?: string;
  email?: string;
}

export function EngagementBlock({
  lead = 'Initiate Discovery.',
  email = 'hello@valantai.com',
}: EngagementBlockProps) {
  return (
    <ArrivalWrapper
      as="section"
      className="min-h-[50vh] px-[var(--margin)] py-[13vh] flex flex-col justify-center"
    >
      <p className="t-display text-ink mb-4 max-w-[14ch]">{lead}</p>
      <p className="font-serif text-[clamp(1.05rem,1.4vw,1.3rem)] text-ink-2 mb-10 max-w-prose">
        Every Valantai relationship begins with Discovery. Not a pitch. Not a proposal. A mandate.
      </p>
      <p>
        <a
          href={`mailto:${email}`}
          className={[
            'font-mono text-[13px] font-bold tracking-[0.18em] uppercase',
            'text-accent no-underline border-b border-accent/30 pb-1',
            'transition-colors duration-moderate hover:text-ink hover:border-ink',
          ].join(' ')}
        >
          {email}
        </a>
      </p>
    </ArrivalWrapper>
  );
}
