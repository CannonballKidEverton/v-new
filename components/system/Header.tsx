import Link from "next/link";
import { PrimaryNav } from "./PrimaryNav";
import { StatusNode } from "./StatusNode";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { TOTAL_ACTIVE_MANDATES } from "@/content/engagements";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header)] bg-bg border-b border-hairline">
      <div className="h-full px-[var(--margin)] flex items-center justify-between gap-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-sans font-[800] text-[19px] tracking-[0.005em] text-ink no-underline flex-shrink-0"
        >
          Valantai
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <PrimaryNav className="flex-1" />

        {/* Right side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Status node — desktop only */}
          <StatusNode
            mandateCount={TOTAL_ACTIVE_MANDATES}
            className="hidden md:flex"
          />
          {/* Mobile hamburger */}
          <MobileNavDrawer mandateCount={TOTAL_ACTIVE_MANDATES} />
        </div>
      </div>
    </header>
  );
}
