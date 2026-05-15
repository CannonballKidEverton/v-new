import { cn } from '@/lib/utils';

interface SectionHeadProps {
  title: string;
  counter?: string;
  className?: string;
  as?: 'h2' | 'h3';
}

export function SectionHead({
  title,
  counter,
  className,
  as: Heading = 'h2',
}: SectionHeadProps) {
  return (
    <header
      className={cn(
        'flex justify-between items-baseline flex-wrap gap-4',
        'pb-5 mb-7 border-b border-hairline-2',
        className
      )}
    >
      <Heading className="t-section text-ink">{title}</Heading>
      {counter && (
        <span className="t-label text-ink-2">{counter}</span>
      )}
    </header>
  );
}
