/**
 * JurisdictionMap — four operating territories rendered as connected nodes.
 * LDN · UAE · NYC · KSA
 * Pure SVG. Institutional weight without geographic literalism.
 */

interface City {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  active?: boolean;
}

const CITIES: City[] = [
  { id: "LDN", label: "London",  sub: "GMT+0 · United Kingdom",        x: 160, y: 110, active: true },
  { id: "NYC", label: "New York", sub: "GMT−5 · United States",         x: 80,  y: 240 },
  { id: "UAE", label: "Dubai",    sub: "GMT+4 · United Arab Emirates",  x: 520, y: 160, active: true },
  { id: "KSA", label: "Riyadh",   sub: "GMT+3 · Kingdom of Saudi Arabia", x: 440, y: 280, active: true },
];

// Each connection as [from-id, to-id, label]
const CONNECTIONS: [string, string, string][] = [
  ["LDN", "UAE", "Cross-border"],
  ["LDN", "KSA", "Sovereign"],
  ["LDN", "NYC", "Capital"],
  ["UAE", "KSA", "GCC"],
  ["NYC", "KSA", "US · GCC"],
];

function getCity(id: string): City {
  return CITIES.find((c) => c.id === id)!;
}

export function JurisdictionMap() {
  const W = 620;
  const H = 380;
  const NODE_R = 5;

  return (
    <div className="w-full" role="img" aria-label="Operating jurisdiction network — LDN, UAE, NYC, KSA">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ maxHeight: 320 }}
      >
        <defs>
          {/* Subtle dot grid background */}
          <pattern id="jmap-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#1A1A18"/>
          </pattern>
        </defs>

        <rect width={W} height={H} fill="transparent"/>
        <rect width={W} height={H} fill="url(#jmap-grid)" opacity="0.6"/>

        {/* Connection lines */}
        {CONNECTIONS.map(([a, b, label], i) => {
          const ca = getCity(a);
          const cb = getCity(b);
          const mx = (ca.x + cb.x) / 2;
          const my = (ca.y + cb.y) / 2;
          return (
            <g key={i}>
              <line
                x1={ca.x} y1={ca.y}
                x2={cb.x} y2={cb.y}
                stroke="#1E1D1B" strokeWidth="0.8"
                strokeDasharray="4 4"
              />
              <text
                x={mx} y={my - 5}
                textAnchor="middle"
                fill="#2E2E2B"
                fontSize="7"
                fontFamily="monospace"
                letterSpacing="0.12em"
              >
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* City nodes */}
        {CITIES.map((city) => (
          <g key={city.id}>
            {/* Outer ring */}
            <circle
              cx={city.x} cy={city.y}
              r={NODE_R + 8}
              fill="none"
              stroke={city.active ? "#25241F" : "#161615"}
              strokeWidth="0.6"
            />
            {/* Active pulse ring */}
            {city.active && (
              <circle
                cx={city.x} cy={city.y}
                r={NODE_R + 16}
                fill="none"
                stroke="#25241F"
                strokeWidth="0.3"
                opacity="0.5"
              />
            )}
            {/* Node dot */}
            <circle
              cx={city.x} cy={city.y}
              r={NODE_R}
              fill={city.active ? "#8A7352" : "#1E1D1B"}
              stroke={city.active ? "#8A7352" : "#252420"}
              strokeWidth="0.8"
            />

            {/* City label */}
            <text
              x={city.x + 18} y={city.y - 6}
              fill="#8A8A82"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
              letterSpacing="-0.01em"
            >
              {city.label}
            </text>

            {/* City ID */}
            <text
              x={city.x + 18} y={city.y + 8}
              fill="#3A3A35"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="0.18em"
            >
              {city.id}
            </text>

            {/* Timezone / country */}
            <text
              x={city.x + 18} y={city.y + 20}
              fill="#2A2928"
              fontSize="7"
              fontFamily="monospace"
              letterSpacing="0.1em"
            >
              {city.sub}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend row */}
      <div className="flex items-center gap-6 pt-5 border-t border-hairline-2 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent block" />
          <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">Active jurisdiction</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ink-4 block" />
          <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">Expansion territory</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="font-mono text-[9px] font-medium tracking-[0.2em] uppercase text-ink-4">4 jurisdictions · 17 active mandates</span>
        </div>
      </div>
    </div>
  );
}
