import { ArrivalWrapper } from './ArrivalWrapper';

interface EngagementBlockProps {
  lead?: string;
  email?: string;
}

export function EngagementBlock({
  lead = 'By introduction only.',
  email = 'hello@valantai.com',
}: EngagementBlockProps) {
  return (
    <ArrivalWrapper
      as="section"
      className="min-h-[50vh] px-[var(--margin)] py-[13vh] flex flex-col justify-center"
    >
      <p className="t-display text-ink mb-10 max-w-[14ch]">{lead}</p>
      <p>
        <a
          href={`mailto:${email}`}
          className={[
            'font-mono text-[13px] font-medium tracking-[0.18em] uppercase',
            'text-ink-2 no-underline border-b border-hairline-2 pb-1',
            'transition-colors duration-moderate hover:text-ink hover:border-ink',
          ].join(' ')}
        >
          {email}
        </a>
      </p>
    </ArrivalWrapper>
  );
}
