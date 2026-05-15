"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/#solutions",    label: "Solutions"    },
  { href: "/#partners",     label: "Partners"     },
  { href: "/#intelligence", label: "Intelligence" },
  { href: "/engage",        label: "Engage"       },
] as const;

export function MobileNavDrawer({ mandateCount }: { mandateCount: number }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger / close button — visible on mobile only */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] -mr-2"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span
          className={[
            "block w-5 h-px bg-ink transition-transform duration-moderate origin-center",
            open ? "translate-y-[7px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-5 h-px bg-ink transition-opacity duration-moderate",
            open ? "opacity-0" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-5 h-px bg-ink transition-transform duration-moderate origin-center",
            open ? "-translate-y-[7px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>

      {/* Fullscreen overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={[
          "fixed inset-0 z-[100] bg-bg",
          "flex flex-col",
          "transition-opacity duration-moderate",
          "md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Header row inside overlay */}
        <div className="flex items-center justify-between px-[var(--margin)] border-b border-hairline h-[var(--header)]">
          <Link
            href="/"
            className="font-sans font-[800] text-[19px] tracking-[0.005em] text-ink no-underline"
            onClick={() => setOpen(false)}
          >
            Valantai
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] -mr-2"
            aria-label="Close navigation"
          >
            <span className="block w-5 h-px bg-ink translate-y-[7px] rotate-45 origin-center" />
            <span className="block w-5 h-px bg-ink opacity-0" />
            <span className="block w-5 h-px bg-ink -translate-y-[7px] -rotate-45 origin-center" />
          </button>
        </div>

        {/* Nav links — large, institutional */}
        <nav className="flex-1 flex flex-col justify-center px-[var(--margin)] gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={[
                "block font-sans font-[800] text-[clamp(2.2rem,9vw,3.5rem)]",
                "tracking-[-0.025em] uppercase text-ink no-underline leading-tight",
                "border-b border-hairline py-4",
                "transition-colors duration-reactive hover:text-ink-2",
                "first:border-t",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer signals */}
        <div className="px-[var(--margin)] py-8 border-t border-hairline flex flex-col gap-3">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-ink-3">
            Active mandates · {mandateCount}
          </p>
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-ink-3">
            LDN · DXB · NYC · RUH
          </p>
          <a
            href="mailto:hello@valantai.com"
            className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-ink-2 no-underline mt-2"
          >
            hello@valantai.com
          </a>
        </div>
      </div>
    </>
  );
}
