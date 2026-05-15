import { cn } from '@/lib/utils';

export interface MetadataItem {
  label: string;
  value: React.ReactNode;
}

interface MetadataBlockProps {
  items: MetadataItem[];
  className?: string;
}

export function MetadataBlock({ items, className }: MetadataBlockProps) {
  return (
    <dl className={cn('flex flex-col gap-7 font-mono', className)}>
      {items.map((item, i) => (
        <div key={i}>
          <dt className="t-label text-ink-3 mb-2.5">{item.label}</dt>
          <dd className="text-[14px] font-medium tracking-[0.03em] text-ink-strong leading-[1.55]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
