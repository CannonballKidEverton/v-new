import type { StatusState } from '@/components/primitives/StatusTag';

export interface Mandate {
  reference: string;
  jurisdiction: string;
  mandate: string;
  sector: string;
  /** Position figure. Use null for undisclosed (renders as em-dash). */
  position: string | null;
  status: StatusState;
  /** Status label as it should render. Defaults to title-case of the state. */
  statusLabel: string;
}

export const mandates: Mandate[] = [
  {
    reference: 'M.2025/04',
    jurisdiction: 'DXB · UAE',
    mandate: 'Enterprise CRM deployment',
    sector: 'Real estate',
    position: '$100,000',
    status: 'deployed',
    statusLabel: 'Deployed',
  },
  {
    reference: 'M.2025/07',
    jurisdiction: 'LDN · UK',
    mandate: 'AI programme',
    sector: 'Financial services',
    position: null,
    status: 'delivery',
    statusLabel: 'In delivery',
  },
  {
    reference: 'M.2025/11',
    jurisdiction: 'AUH · UAE',
    mandate: 'Capital advisory',
    sector: 'Institutional capital',
    position: null,
    status: 'filed',
    statusLabel: 'Filed',
  },
  {
    reference: 'M.2026/01',
    jurisdiction: 'LDN · UK',
    mandate: 'Risk architecture',
    sector: 'D2C commerce',
    position: null,
    status: 'active',
    statusLabel: 'Active',
  },
  {
    reference: 'M.2026/02',
    jurisdiction: 'RUH · KSA',
    mandate: 'Operating counsel',
    sector: 'Family office',
    position: null,
    status: 'structuring',
    statusLabel: 'Structuring',
  },
  {
    reference: 'M.2026/03',
    jurisdiction: 'NYC · US',
    mandate: 'Investor readiness',
    sector: 'Enterprise SaaS',
    position: null,
    status: 'diligence',
    statusLabel: 'In diligence',
  },
];

/**
 * Total active mandates including those not surfaced publicly.
 * This is the figure shown in the system header and the Ledger counter.
 */
export const TOTAL_ACTIVE_MANDATES = 17;
