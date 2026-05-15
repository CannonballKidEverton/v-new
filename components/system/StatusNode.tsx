'use client';

import { useEffect, useState } from 'react';
import { gmtTime } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface StatusNodeProps {
  mandateCount?: number;
  className?: string;
}

export function StatusNode({ mandateCount = 17, className }: StatusNodeProps) {
  const [time, setTime] = useState<string>('— GMT');

  useEffect(() => {
    setTime(gmtTime());
    const id = setInterval(() => setTime(gmtTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        'flex items-center gap-3.5 font-mono text-[12px] font-medium',
        'tracking-[0.14em] uppercase text-ink-strong whitespace-nowrap',
        className
      )}
      aria-label="Operational status"
    >
      <span>
        Active mandates{' '}
        <span className="text-ink">·</span>{' '}
        <span>{mandateCount}</span>
      </span>
      <span className="text-ink-4 hidden lg:inline">|</span>
      <span className="hidden lg:inline">LDN · DXB · NYC · RUH</span>
      <span className="text-ink-4">|</span>
      <span>{time}</span>
    </div>
  );
}
