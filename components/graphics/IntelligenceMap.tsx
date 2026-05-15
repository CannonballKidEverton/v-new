/**
 * Intelligence Systems Map — SVG connection diagram.
 * Shows how the four proprietary systems interrelate.
 * Pure SVG + minimal CSS. No WebGL, no animation library.
 */

const NODES = [
  {
    id: "risk",
    label: "The Risk Engine",
    ref: "I/01",
    x: 140,
    y: 80,
  },
  {
    id: "crm",
    label: "Smart CRM",
    ref: "I/02",
    x: 520,
    y: 80,
  },
  {
    id: "sector",
    label: "Sector Intelligence",
    ref: "I/03",
    x: 140,
    y: 260,
  },
  {
    id: "capital",
    label: "Capital Connection",
    ref: "I/04",
    x: 520,
    y: 260,
  },
] as const;

// Connections between nodes (from→to with a label)
const CONNECTIONS = [
  { from: "risk",    to: "sector",  label: "Calibration data" },
  { from: "crm",     to: "sector",  label: "Engagement signals" },
  { from: "sector",  to: "capital", label: "Sector benchmarks" },
  { from: "risk",    to: "capital", label: "Company scoring" },
  { from: "crm",     to: "capital", label: "Operator network" },
  { from: "risk",    to: "crm",     label: "Risk routing" },
] as const;

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function IntelligenceMap() {
  const W = 660;
  const H = 340;
  const NODE_W = 160;
  const NODE_H = 64;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[660px]"
        aria-label="Intelligence Systems relationship map"
        role="img"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 8 8"
            refX="8"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#3A3A35" />
          </marker>
        </defs>

        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => {
          const a = getNode(conn.from);
          const b = getNode(conn.to);
          const x1 = a.x + NODE_W / 2;
          const y1 = a.y + NODE_H / 2;
          const x2 = b.x + NODE_W / 2;
          const y2 = b.y + NODE_H / 2;
          // Midpoint for label
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#1A1A18"
                strokeWidth="1"
                markerEnd="url(#arrow)"
              />
              <rect
                x={mx - 46}
                y={my - 8}
                width="92"
                height="16"
                fill="#0A0A09"
              />
              <text
                x={mx}
                y={my + 4}
                textAnchor="middle"
                fill="#3A3A35"
                fontSize="8"
                fontFamily="monospace"
                letterSpacing="0.1em"
                style={{ textTransform: "uppercase" }}
              >
                {conn.label}
              </text>
            </g>
          );
        })}

        {/* Node boxes */}
        {NODES.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              width={NODE_W}
              height={NODE_H}
              rx="0"
              fill="#0E0E0C"
              stroke="#1A1A18"
              strokeWidth="1"
            />
            <text
              x="14"
              y="22"
              fill="#5A5A52"
              fontSize="8"
              fontFamily="monospace"
              letterSpacing="0.2em"
              style={{ textTransform: "uppercase" }}
            >
              {node.ref}
            </text>
            <text
              x="14"
              y="42"
              fill="#F2EEE6"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
              letterSpacing="-0.01em"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
