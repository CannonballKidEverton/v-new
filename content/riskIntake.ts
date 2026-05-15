/**
 * The Risk Engine intake questionnaire.
 *
 * Each answer carries weighted scores across the twelve operational domains.
 * The scoring engine accumulates these and ranks the top exposures.
 *
 * Editing this file changes the diagnostic — no component changes required.
 */

export interface RiskAnswer {
  value: string;
  label: string;
  /** Domain → weight map. Keys: 'D01' to 'D12'. */
  scores: Partial<Record<string, number>>;
}

export interface RiskQuestion {
  ref: string;
  name: string;
  question: string;
  help?: string;
  type: 'radio' | 'select';
  options: RiskAnswer[];
}

export interface RiskSection {
  marker: string;
  title: string;
  note: string;
  questions: RiskQuestion[];
}

export const riskIntake: RiskSection[] = [
  {
    marker: 'Section A',
    title: 'Operating position',
    note: 'Where the company is, what it is doing, and at what scale.',
    questions: [
      {
        ref: 'Q/01',
        name: 'stage',
        question: 'What stage best describes the company today?',
        help: 'Choose the closest descriptor — granular precision is not required at this stage.',
        type: 'radio',
        options: [
          { value: 'pre-revenue', label: 'Pre-revenue — building toward first paying customers.', scores: { D03: 3, D02: 2 } },
          { value: 'first-customers', label: 'First customers — early traction, no repeatable motion yet.', scores: { D02: 3, D09: 2, D03: 1 } },
          { value: 'series-a', label: 'Series A or equivalent — funded, scaling commercial motion.', scores: { D10: 2, D11: 1 } },
          { value: 'scale', label: 'Scale — multi-market, expanding team and operating complexity.', scores: { D10: 3, D11: 2, D04: 2 } },
          { value: 'mature', label: 'Mature — cash-generative, considering transformation or exit.', scores: { D09: 2, D11: 1 } },
        ],
      },
      {
        ref: 'Q/02',
        name: 'headcount',
        question: 'Approximate headcount band?',
        type: 'radio',
        options: [
          { value: '1-5', label: '1 to 5 — founder-led, hands on the work.', scores: { D01: 4 } },
          { value: '6-15', label: '6 to 15 — early team forming, role specialisation beginning.', scores: { D01: 3, D10: 1 } },
          { value: '16-50', label: '16 to 50 — operating layer takes shape.', scores: { D10: 2 } },
          { value: '51-200', label: '51 to 200 — multi-function, formal management.', scores: { D11: 2, D10: 2 } },
          { value: '200+', label: '200+ — institutional operating complexity.', scores: { D11: 3, D10: 1 } },
        ],
      },
      {
        ref: 'Q/03',
        name: 'jurisdiction',
        question: 'Primary operating jurisdiction?',
        help: 'For context only — does not score directly. Multi-jurisdiction exposure is captured in Section D.',
        type: 'select',
        options: [
          { value: 'UK', label: 'United Kingdom', scores: {} },
          { value: 'UAE', label: 'United Arab Emirates', scores: {} },
          { value: 'KSA', label: 'Kingdom of Saudi Arabia', scores: {} },
          { value: 'US', label: 'United States', scores: {} },
          { value: 'EU', label: 'European Union', scores: {} },
          { value: 'GCC', label: 'GCC, other', scores: {} },
          { value: 'OTHER', label: 'Other', scores: {} },
        ],
      },
    ],
  },
  {
    marker: 'Section B',
    title: 'Capital position',
    note: 'Funding, runway, and the structural integrity of the cap table.',
    questions: [
      {
        ref: 'Q/04',
        name: 'funding',
        question: 'Current funding status?',
        type: 'radio',
        options: [
          { value: 'bootstrapped', label: 'Bootstrapped — no external capital deployed.', scores: { D03: 2 } },
          { value: 'angel', label: 'Angel or pre-seed — initial external capital, limited.', scores: { D03: 3 } },
          { value: 'seed', label: 'Seed — institutional first round closed.', scores: { D03: 2 } },
          { value: 'series-a-plus', label: 'Series A or later — institutional capital deployed.', scores: { D03: 1 } },
          { value: 'profitable', label: 'Profitable and cash-generative.', scores: { D03: 0 } },
        ],
      },
      {
        ref: 'Q/05',
        name: 'runway',
        question: 'Operating runway at current burn?',
        help: 'Months of cash available before either profitability or the next capital event.',
        type: 'radio',
        options: [
          { value: 'under-6', label: 'Under six months — capital event required imminently.', scores: { D03: 5 } },
          { value: '6-12', label: 'Six to twelve months — raise should already be in process.', scores: { D03: 4 } },
          { value: '12-24', label: 'Twelve to twenty-four months — operating comfortably.', scores: { D03: 2 } },
          { value: '24-plus', label: 'Over twenty-four months, or profitable.', scores: { D03: 0 } },
          { value: 'na', label: 'Not applicable — pre-burn.', scores: { D03: 1 } },
        ],
      },
      {
        ref: 'Q/06',
        name: 'founder-equity',
        question: 'Are founder equity arrangements formalised?',
        type: 'radio',
        options: [
          { value: 'fully', label: 'Fully agreed, documented, and signed.', scores: { D06: 0 } },
          { value: 'verbal', label: 'Verbal understanding — not yet documented.', scores: { D06: 4 } },
          { value: 'absent', label: 'Not yet addressed.', scores: { D06: 5 } },
          { value: 'solo', label: 'Single founder — not applicable.', scores: { D06: 1 } },
        ],
      },
    ],
  },
  {
    marker: 'Section C',
    title: 'Customer & market',
    note: "Revenue base, concentration, and the company's competitive surface.",
    questions: [
      {
        ref: 'Q/07',
        name: 'customer-count',
        question: 'Approximate customer count?',
        type: 'radio',
        options: [
          { value: 'pre', label: 'Pre-revenue — no paying customers yet.', scores: { D02: 3 } },
          { value: '1-10', label: '1 to 10 — concentration likely.', scores: { D02: 4 } },
          { value: '11-100', label: '11 to 100 — emerging customer base.', scores: { D02: 2 } },
          { value: '101-1000', label: '101 to 1,000 — diversified.', scores: { D02: 1 } },
          { value: '1000+', label: 'Over 1,000 — broad base.', scores: { D02: 0 } },
        ],
      },
      {
        ref: 'Q/08',
        name: 'top-customer',
        question: 'Top customer as share of revenue?',
        help: 'Approximation is sufficient. Concentration in the top one or top three accounts.',
        type: 'radio',
        options: [
          { value: 'over-50', label: 'Over 50% — material single-account exposure.', scores: { D02: 5 } },
          { value: '25-50', label: '25 to 50% — significant concentration.', scores: { D02: 3 } },
          { value: '10-25', label: '10 to 25% — moderate concentration.', scores: { D02: 1 } },
          { value: 'under-10', label: 'Under 10% — diversified.', scores: { D02: 0 } },
          { value: 'pre', label: 'Pre-revenue — not yet measurable.', scores: { D02: 2 } },
        ],
      },
      {
        ref: 'Q/09',
        name: 'competition',
        question: 'Competitive intensity of the market?',
        type: 'radio',
        options: [
          { value: 'established', label: 'Established category — multiple well-funded incumbents.', scores: { D09: 4 } },
          { value: 'emerging', label: 'Emerging category — one or two direct competitors.', scores: { D09: 2 } },
          { value: 'defining', label: 'Defining the category — limited direct competition.', scores: { D09: 1 } },
        ],
      },
    ],
  },
  {
    marker: 'Section D',
    title: 'Operations & governance',
    note: 'Founder structure, reporting cadence, IP, and operating jurisdiction.',
    questions: [
      {
        ref: 'Q/10',
        name: 'founder-count',
        question: 'Number of active founders in the business?',
        type: 'radio',
        options: [
          { value: '1', label: 'One — single-founder execution.', scores: { D01: 5 } },
          { value: '2', label: 'Two — co-founder structure.', scores: { D01: 1 } },
          { value: '3', label: 'Three — small founding team.', scores: { D01: 0 } },
          { value: '4+', label: 'Four or more — broader founding team.', scores: { D01: 1, D06: 1 } },
        ],
      },
      {
        ref: 'Q/11',
        name: 'reporting',
        question: 'Financial reporting cadence?',
        type: 'radio',
        options: [
          { value: 'monthly', label: 'Monthly board reporting in place.', scores: { D11: 0 } },
          { value: 'quarterly', label: 'Quarterly reporting only.', scores: { D11: 2 } },
          { value: 'adhoc', label: 'Ad-hoc — no standing cadence.', scores: { D11: 4 } },
          { value: 'none', label: 'None in place.', scores: { D11: 5 } },
        ],
      },
      {
        ref: 'Q/12',
        name: 'ip',
        question: 'Intellectual property protection?',
        type: 'radio',
        options: [
          { value: 'fully', label: 'Fully documented, registered where appropriate.', scores: { D06: 0 } },
          { value: 'partial', label: 'Partially in place — some assets unprotected.', scores: { D06: 3 } },
          { value: 'none', label: 'Not yet addressed.', scores: { D06: 5 } },
          { value: 'na', label: 'Not applicable to this business.', scores: { D06: 0 } },
        ],
      },
      {
        ref: 'Q/13',
        name: 'jurisdictions',
        question: 'Operating jurisdictions beyond the primary?',
        type: 'radio',
        options: [
          { value: 'none', label: 'None — single-jurisdiction operation.', scores: { D05: 0 } },
          { value: '1-2', label: 'One or two additional jurisdictions.', scores: { D05: 2 } },
          { value: '3+', label: 'Three or more — multi-jurisdiction structure.', scores: { D05: 4 } },
        ],
      },
    ],
  },
];

/** Total required questions for the diagnostic. */
export const REQUIRED_QUESTIONS = riskIntake
  .flatMap((s) => s.questions)
  .length;
