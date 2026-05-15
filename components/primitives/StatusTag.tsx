import { cn } from '@/lib/utils';

export type StatusState =
  | 'deployed'
  | 'active'
  | 'delivery'
  | 'filed'
  | 'structuring'
  | 'diligence';

const STATE_STYLES: Record<StatusState, string> = {
  deployed:    'text-accent',
  active:      'text-ink',
  delivery:    'text-ink',
  filed:       'text-ink-2',
  structuring: 'text-ink-3',
  diligence:   'text-ink-3',
};

interface StatusTagProps {
  state: StatusState;
  children: React.ReactNode;
  className?: string;
}

export function StatusTag({ state, children, className }: StatusTagProps) {
  return (
    <span
      className={cn(
        'font-mono text-[11.5px] font-medium tracking-[0.16em] uppercase',
        STATE_STYLES[state],
        className
      )}
    >
      {children}
    </span>
  );
}
