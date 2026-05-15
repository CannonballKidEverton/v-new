export interface IntelligenceSystem {
  ref: string;
  slug: string;
  name: string;
  description: string;
  meta: { label: string; value: string }[];
  longDescription?: string[];
  hasPage: boolean;
}

export const intelligenceSystems: IntelligenceSystem[] = [
  {
    ref: "I/01",
    slug: "risk-engine",
    name: "The Risk Engine",
    description:
      "A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do.",
    meta: [
      { label: "Domains covered", value: "Twelve" },
      { label: "Status", value: "In development" },
    ],
    longDescription: [
      "Most companies discover their operational risks at the point those risks become consequences. The Risk Engine exists to close that gap.",
      "Twelve operational domains scored continuously: key person dependency, customer concentration, capital position, technology exposure, compliance, IP structure, AI maturity, supply chain, competitive position, talent, financial controls, and ESG. Each engagement adds to the calibration dataset; the instrument becomes sharper with every company it scores.",
      "The intake is a structured 13-question diagnostic. The output is a ranked exposure register, a severity band for each domain, and direct routing to the Valantai practice most equipped to address each risk.",
    ],
    hasPage: true,
  },
  {
    ref: "I/02",
    slug: "smart-crm",
    name: "Smart CRM",
    description:
      "AI-native customer relationship infrastructure deployed at enterprise scale. Built to client specifications, owned by the firm's clients. Live in UAE real estate; replicating across sectors.",
    meta: [
      { label: "Status", value: "Deployed" },
      { label: "Coverage", value: "Multi-client" },
    ],
    hasPage: false,
  },
  {
    ref: "I/03",
    slug: "sector-intelligence",
    name: "Sector Intelligence",
    description:
      "Proprietary benchmarking accumulated from every engagement. Used to position, prepare, and price companies through capital rounds, transactions, and exits.",
    meta: [
      { label: "Source", value: "Engagement data" },
      { label: "Access", value: "Restricted" },
    ],
    hasPage: false,
  },
  {
    ref: "I/04",
    slug: "capital-connection",
    name: "Capital Connection",
    description:
      "Private capital allocation remains stubbornly analogue and inefficient. Our systems apply structured intelligence derived from operational experience to help the right companies reach the right capital.",
    meta: [
      { label: "Status", value: "In development" },
      { label: "Reach", value: "UK \u00b7 UAE \u00b7 KSA \u00b7 US" },
    ],
    hasPage: false,
  },
];

export function getSystemBySlug(slug: string): IntelligenceSystem | undefined {
  return intelligenceSystems.find((s) => s.slug === slug);
}
