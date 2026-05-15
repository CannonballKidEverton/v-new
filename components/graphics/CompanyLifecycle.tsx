/**
 * CompanyLifecycle — horizontal stage timeline.
 * Eight stages from formation to exit, showing Valantai practice touchpoints.
 */

const STAGES = [
  {
    id: "01",
    label: "Idea",
    sub: "Formation",
    practices: ["Build", "Counsel"],
    active: false,
  },
  {
    id: "02",
    label: "Validate",
    sub: "Pre-revenue",
    practices: ["Build", "Brand", "GTM"],
    active: false,
  },
  {
    id: "03",
    label: "Build",
    sub: "First customers",
    practices: ["Technology", "Commerce", "Grow"],
    active: true,
  },
  {
    id: "04",
    label: "Raise",
    sub: "Seed · Series A",
    practices: ["Capital", "Risk", "Counsel"],
    active: true,
  },
  {
    id: "05",
    label: "Scale",
    sub: "Growth",
    practices: ["Grow", "GTM", "Technology"],
    active: true,
  },
  {
    id: "06",
    label: "Expand",
    sub: "New markets",
    practices: ["Capital", "ESG", "Wedge"],
    active: false,
  },
  {
    id: "07",
    label: "Optimise",
    sub: "Efficiency",
    practices: ["Risk", "ESG", "Educate"],
    active: false,
  },
  {
    id: "08",
    label: "Exit",
    sub: "Transaction",
    practices: ["Capital", "Counsel", "Angels"],
    active: false,
  },
] as const;

export function CompanyLifecycle() {
  return (
    <div className="w-full overflow-x-auto" role="img" aria-label="Company lifecycle — idea to exit">
      <div style={{ minWidth: 640 }}>
        {/* Stage track */}
        <div className="relative flex items-start gap-0">
          {/* Connector line */}
          <div className="absolute top-[11px] left-4 right-4 h-px bg-hairline z-0" />

          {STAGES.map((stage, i) => (
            <div key={stage.id} className="relative flex flex-col items-center flex-1 z-10">
              {/* Node */}
              <div
                className={[
                  "w-6 h-6 rounded-full border flex items-center justify-center mb-3",
                  "transition-colors duration-moderate",
                  stage.active
                    ? "bg-accent border-accent"
                    : "bg-bg-2 border-hairline-2",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-mono text-[7px] font-medium",
                    stage.active ? "text-bg" : "text-ink-4",
                  ].join(" ")}
                >
                  {stage.id}
                </span>
              </div>

              {/* Stage label */}
              <span
                className={[
                  "font-sans font-medium text-[11px] tracking-[-0.01em] text-center leading-tight mb-1",
                  stage.active ? "text-ink" : "text-ink-3",
                ].join(" ")}
              >
                {stage.label}
              </span>

              {/* Stage sub */}
              <span className="font-mono text-[8px] tracking-[0.1em] text-ink-4 text-center leading-tight mb-3">
                {stage.sub}
              </span>

              {/* Practice tags */}
              <div className="flex flex-col items-center gap-1">
                {stage.practices.map((p) => (
                  <span
                    key={p}
                    className={[
                      "font-mono text-[7px] tracking-[0.1em] uppercase px-1.5 py-0.5",
                      "border leading-none",
                      stage.active
                        ? "border-hairline-2 text-ink-2 bg-bg-2"
                        : "border-hairline text-ink-4 bg-bg",
                    ].join(" ")}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-7 pt-5 border-t border-hairline-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent block" />
            <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">
              Highest Valantai engagement
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-bg-2 border border-hairline-2 block" />
            <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">
              Active by engagement
            </span>
          </div>
          <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4 ml-auto">
            All thirteen solutions across all eight stages
          </span>
        </div>
      </div>
    </div>
  );
}
