// Server component — no 'use client' needed.
// CSS group-hover replaces Framer Motion whileHover, removing the client bundle entirely.

import Link from "next/link";
import { ArrivalWrapper } from "@/components/primitives/ArrivalWrapper";
import { SectionHead } from "@/components/primitives/SectionHead";
import { VMarkIcon } from "@/components/solutions/VMarks";
import { solutions, TOTAL_SOLUTIONS } from "@/content/solutions";

const HOMEPAGE_SOLUTIONS = 6;

export function SolutionsZone() {
  const visible = solutions.slice(0, HOMEPAGE_SOLUTIONS);

  return (
    <ArrivalWrapper as="section" className="zone-pad" id="solutions">
      <SectionHead
        title="Solutions"
        counter={`${HOMEPAGE_SOLUTIONS} of ${TOTAL_SOLUTIONS}`}
      />

      <div>
        {visible.map((sol) => {
          const destination = sol.href ?? `/solutions/${sol.slug}`;

          return (
            <Link
              key={sol.slug}
              href={destination}
              className="group relative grid items-center gap-x-[clamp(12px,3vw,56px)] grid-cols-[48px_1fr_32px] md:grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px] py-7 border-b border-hairline first:border-t no-underline text-inherit"
            >
              {/* VLT mark — CSS rotate on hover */}
              <span
                className="text-accent block transition-transform duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[8deg]"
                style={{ transformOrigin: "50% 60%" }}
              >
                <VMarkIcon variant={sol.vMark} />
              </span>

              {/* Name */}
              <span className="t-solution text-ink">{sol.name}</span>

              {/* Description */}
              <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-3 hidden md:block transition-colors duration-moderate group-hover:text-ink-2">
                {sol.description}
              </span>

              {/* Arrow — CSS translate on hover */}
              <span className="font-mono text-[14px] text-ink-4 text-right transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:text-ink">
                →
              </span>
            </Link>
          );
        })}
      </div>

      {/* View all link */}
      <div className="pt-7 border-t border-hairline">
        <Link
          href="/solutions"
          className="t-label text-ink-3 no-underline hover:text-ink transition-colors duration-moderate"
        >
          View all {TOTAL_SOLUTIONS} solutions →
        </Link>
      </div>
    </ArrivalWrapper>
  );
}
