import type { StatusState } from '@/components/primitives/StatusTag';

export interface Engagement {
  ref: string;
  city: string;
  mandate: string;
  sector: string;
  status: StatusState;
  statusLabel: string;
}

/**
 * Full engagement pool — 10 entries.
 * 6 are shown on page load; 4 rotate in periodically to imply live activity.
 * All production mandates are abstracted per confidentiality requirements.
 */
export const ENGAGEMENT_POOL: Engagement[] = [
  { ref: 'M.2025/04', city: 'DXB · UAE', mandate: 'Enterprise CRM deployment', sector: 'Real estate',           status: 'deployed',    statusLabel: 'Deployed'     },
  { ref: 'M.2025/07', city: 'LDN · UK',  mandate: 'AI programme',              sector: 'Financial services',   status: 'delivery',    statusLabel: 'In delivery'  },
  { ref: 'M.2025/11', city: 'AUH · UAE', mandate: 'Capital advisory',          sector: 'Institutional capital', status: 'filed',      statusLabel: 'Filed'        },
  { ref: 'M.2026/01', city: 'LDN · UK',  mandate: 'Risk architecture',         sector: 'D2C commerce',         status: 'active',      statusLabel: 'Active'       },
  { ref: 'M.2026/02', city: 'RUH · KSA', mandate: 'Operating counsel',         sector: 'Family office',        status: 'structuring', statusLabel: 'Structuring'  },
  { ref: 'M.2026/03', city: 'NYC · US',  mandate: 'Investor readiness',        sector: 'Enterprise SaaS',      status: 'diligence',   statusLabel: 'In diligence' },
  { ref: 'M.2024/09', city: 'LDN · UK',  mandate: 'Operating model',           sector: 'Sport infrastructure', status: 'deployed',    statusLabel: 'Deployed'     },
  { ref: 'M.2025/09', city: 'NYC · US',  mandate: 'Cross-border structuring',  sector: 'Family office',        status: 'filed',       statusLabel: 'Filed'        },
  { ref: 'M.2026/05', city: 'AUH · UAE', mandate: 'Capital connection',        sector: 'Enterprise SaaS',      status: 'structuring', statusLabel: 'Structuring'  },
  { ref: 'M.2026/06', city: 'DXB · UAE', mandate: 'GTM design',                sector: 'D2C commerce',         status: 'delivery',    statusLabel: 'In delivery'  },
];

/** Initial 6 entries shown on page load. */
export const INITIAL_ENGAGEMENTS = ENGAGEMENT_POOL.slice(0, 6);

/** Total engagement count for the header status node and section counter. */
export const TOTAL_ACTIVE_MANDATES = 17;
