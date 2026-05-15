'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/#solutions',    label: 'Solutions',     match: ['/solutions']    },
  { href: '/#partners',     label: 'Partners',      match: ['/operators']    },
  { href: '/#intelligence', label: 'Intelligence',  match: ['/intelligence'] },
  { href: '/engage',        label: 'Engage',        match: ['/engage']       },
] as const;

export function PrimaryNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn('hidden md:flex items-center justify-center gap-9', className)}
      aria-label="Primary"
    >
      {NAV_ITEMS.map((item) => {
        const active = item.match.some((m) => pathname.startsWith(m));
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'font-mono text-[12px] font-medium tracking-[0.18em] uppercase',
              'transition-colors duration-reactive',
              active ? 'text-ink' : 'text-ink-strong hover:text-ink'
            )}
          >
            {active && (
              <span className="text-accent mr-1.5" aria-hidden="true">·</span>
            )}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
