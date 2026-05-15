import { riskDomains } from "@/content/riskDomains";

/**
 * Risk Matrix — 4×3 grid of the 12 operational domains.
 * Uses CSS/SVG only. Designed to feel like an intelligence dashboard, not a chart.
 *
 * Each cell shows: domain reference, domain name.
 * Colour progression across the grid (left→right within each axis group)
 * gives a sense of severity hierarchy without being prescriptive.
 */

// Four axes — Position, Substrate, Motion, Governance
const AXES = [
  {
    label: "Position",
    ref: "A",
    domains: ["D01", "D02", "D03"],
    description: "Direct operational exposures",
  },
  {
    label: "Substrate",
    ref: "B",
    domains: ["D04", "D05", "D06"],
    description: "Structural and legal foundation",
  },
  {
    label: "Motion",
    ref: "C",
    domains: ["D07", "D08", "D09"],
    description: "Competitive and commercial momentum",
  },
  {
    label: "Governance",
    ref: "D",
    domains: ["D10", "D11", "D12"],
    description: "Operational and reporting integrity",
  },
];

const DOMAIN_MAP = Object.fromEntries(riskDomains.map((d) => [d.key, d]));

export function RiskMatrix() {
  return (
    <div className="w-full" role="img" aria-label="Risk domain matrix — four operational axes">
      {/* Column headers */}
      <div className="grid grid-cols-4 gap-px mb-px bg-hairline border border-hairline">
        {AXES.map((axis) => (
          <div key={axis.ref} className="bg-bg-2 px-4 py-3">
            <span className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase text-ink-4 block mb-1">
              Axis {axis.ref}
            </span>
            <span className="font-sans font-medium text-[13px] tracking-[-0.01em] text-ink block">
              {axis.label}
            </span>
            <span className="font-mono text-[9px] tracking-[0.1em] text-ink-3 block mt-1 hidden lg:block">
              {axis.description}
            </span>
          </div>
        ))}
      </div>

      {/* Domain cells — 3 rows × 4 columns */}
      <div className="grid grid-cols-4 gap-px bg-hairline border-x border-b border-hairline">
        {[0, 1, 2].map((rowIdx) =>
          AXES.map((axis) => {
            const key = axis.domains[rowIdx];
            const domain = DOMAIN_MAP[key];
            if (!domain) return null;

            return (
              <div
                key={key}
                className="group bg-bg px-4 py-4 border-hairline hover:bg-bg-2 transition-colors duration-reactive"
              >
                <span className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase text-accent block mb-2">
                  {domain.ref}
                </span>
                <span className="font-sans font-medium text-[12px] tracking-[-0.005em] text-ink block leading-tight">
                  {domain.name}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-5 pt-5 border-t border-hairline-2">
        <span className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase text-ink-4">
          Twelve domains across four operating axes
        </span>
        <span className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase text-ink-4">
          ·
        </span>
        <span className="font-mono text-[9px] font-medium tracking-[0.22em] uppercase text-ink-4">
          Calibrated quarterly
        </span>
      </div>
    </div>
  );
}
