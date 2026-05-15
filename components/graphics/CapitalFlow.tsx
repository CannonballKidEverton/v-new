/**
 * CapitalFlow — institutional capital routing diagram.
 * Shows capital sources flowing through Valantai into portfolio companies.
 * Pure SVG. No animation, no WebGL.
 */

const SOURCES = [
  { label: "Family Office",      sub: "UK · GCC · Asia" },
  { label: "Sovereign Capital",  sub: "UAE · KSA · QAT" },
  { label: "Institutional LP",   sub: "Series A–C" },
  { label: "Angel Syndicate",    sub: "Operator network" },
];

const DESTINATIONS = [
  { label: "Scale-up",           sub: "Series A · B · C" },
  { label: "Founder-led",        sub: "Pre-seed · Seed" },
  { label: "Corporate",          sub: "Enterprise" },
  { label: "Family Office co.",  sub: "Direct" },
];

export function CapitalFlow() {
  const W = 800;
  const H = 360;
  const LEFT_X = 20;
  const MID_X = 340;
  const RIGHT_X = 600;
  const BOX_W = 190;
  const BOX_H = 52;
  const TOTAL_H = SOURCES.length * (BOX_H + 16);
  const START_Y = (H - TOTAL_H) / 2;

  // y-centre of each source box
  const srcY = (i: number) => START_Y + i * (BOX_H + 16) + BOX_H / 2;
  const dstY = (i: number) => START_Y + i * (BOX_H + 16) + BOX_H / 2;
  const centerY = H / 2;

  return (
    <div className="w-full overflow-x-auto" role="img" aria-label="Capital routing diagram">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ minWidth: 520, maxHeight: 340 }}
      >
        <defs>
          <marker id="flow-arrow" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill="#2A2928"/>
          </marker>
        </defs>
        <rect width={W} height={H} fill="transparent"/>

        {/* Column labels */}
        {[
          [LEFT_X + BOX_W/2, "Capital Sources"],
          [MID_X + 70,       "Valantai"],
          [RIGHT_X + BOX_W/2, "Portfolio"],
        ].map(([x, label]) => (
          <text key={String(label)} x={Number(x)} y={22} textAnchor="middle" fill="#3A3A35" fontSize="8" fontFamily="monospace" letterSpacing="0.22em">
            {String(label).toUpperCase()}
          </text>
        ))}

        {/* Source → Valantai lines */}
        {SOURCES.map((_, i) => (
          <path
            key={i}
            d={`M ${LEFT_X + BOX_W} ${srcY(i)} Q ${MID_X - 30} ${srcY(i)}, ${MID_X + 8} ${centerY}`}
            stroke="#1D1D1B"
            strokeWidth="0.8"
            fill="none"
            markerEnd="url(#flow-arrow)"
          />
        ))}

        {/* Valantai → Destination lines */}
        {DESTINATIONS.map((_, i) => (
          <path
            key={i}
            d={`M ${MID_X + 132} ${centerY} Q ${RIGHT_X - 20} ${centerY}, ${RIGHT_X} ${dstY(i)}`}
            stroke="#1D1D1B"
            strokeWidth="0.8"
            fill="none"
            markerEnd="url(#flow-arrow)"
          />
        ))}

        {/* Source boxes */}
        {SOURCES.map((s, i) => (
          <g key={i}>
            <rect x={LEFT_X} y={START_Y + i * (BOX_H + 16)} width={BOX_W} height={BOX_H}
              fill="#0E0E0C" stroke="#1E1D1B" strokeWidth="0.7" rx={1}/>
            <text x={LEFT_X + 12} y={START_Y + i * (BOX_H + 16) + 22}
              fill="#8A8A82" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="500">
              {s.label}
            </text>
            <text x={LEFT_X + 12} y={START_Y + i * (BOX_H + 16) + 38}
              fill="#3A3A35" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
              {s.sub}
            </text>
          </g>
        ))}

        {/* Valantai centre node */}
        <g>
          <rect x={MID_X} y={centerY - 60} width={140} height={120}
            fill="#0F0F0D" stroke="#8A7352" strokeWidth="0.8" rx={1}/>
          <text x={MID_X + 70} y={centerY - 22}
            textAnchor="middle" fill="#5A5A52" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">
            VLT
          </text>
          <text x={MID_X + 70} y={centerY + 4}
            textAnchor="middle" fill="#8A8A82" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="-0.01em">
            Valantai
          </text>
          <text x={MID_X + 70} y={centerY + 22}
            textAnchor="middle" fill="#3A3A35" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            Operating institution
          </text>
          <text x={MID_X + 70} y={centerY + 40}
            textAnchor="middle" fill="#2A2928" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">
            UK · UAE · KSA · US
          </text>
        </g>

        {/* Destination boxes */}
        {DESTINATIONS.map((d, i) => (
          <g key={i}>
            <rect x={RIGHT_X} y={START_Y + i * (BOX_H + 16)} width={BOX_W} height={BOX_H}
              fill="#0E0E0C" stroke="#1E1D1B" strokeWidth="0.7" rx={1}/>
            <text x={RIGHT_X + 12} y={START_Y + i * (BOX_H + 16) + 22}
              fill="#8A8A82" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="500">
              {d.label}
            </text>
            <text x={RIGHT_X + 12} y={START_Y + i * (BOX_H + 16) + 38}
              fill="#3A3A35" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
              {d.sub}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex items-center gap-4 pt-4 border-t border-hairline-2 mt-1">
        <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">
          Capital flows through the institution · Not a fund
        </span>
      </div>
    </div>
  );
}
