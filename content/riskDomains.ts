export interface RiskDomain {
  ref: string;   // e.g. 'D/01'
  key: string;   // e.g. 'D01'
  name: string;
  surfaces: string;
}

export const riskDomains: RiskDomain[] = [
  { ref: 'D/01', key: 'D01', name: 'Key person',            surfaces: 'Founder-dependent execution, succession gaps, single technical lead.' },
  { ref: 'D/02', key: 'D02', name: 'Customer concentration', surfaces: 'Cliff-edge revenue exposure, top-account dependency, contract risk.' },
  { ref: 'D/03', key: 'D03', name: 'Capital & runway',       surfaces: 'Burn rate, next-round timing, dilution exposure, sub-twelve-month positions.' },
  { ref: 'D/04', key: 'D04', name: 'Technology dependency',  surfaces: 'Platform lock-in, API deprecation risk, absent owned infrastructure.' },
  { ref: 'D/05', key: 'D05', name: 'Compliance & regulatory',surfaces: 'Sector exposure, data residency, regime change across operating jurisdictions.' },
  { ref: 'D/06', key: 'D06', name: 'IP & legal structure',   surfaces: 'Unprotected assets, misaligned founder equity, absent shareholder agreements.' },
  { ref: 'D/07', key: 'D07', name: 'AI maturity',            surfaces: 'Operational disadvantage as competitors automate; widening gap.' },
  { ref: 'D/08', key: 'D08', name: 'Supply chain',           surfaces: 'Supplier concentration, lead-time exposure, fulfilment fragility.' },
  { ref: 'D/09', key: 'D09', name: 'Market & competitive',   surfaces: 'Commoditisation, well-funded entrants, erosion of competitive wedge.' },
  { ref: 'D/10', key: 'D10', name: 'Talent & culture',       surfaces: 'Retention risk, hiring lag, culture-to-growth mismatch at scale.' },
  { ref: 'D/11', key: 'D11', name: 'Financial controls',     surfaces: 'Cash management quality, forecasting accuracy, reporting infrastructure.' },
  { ref: 'D/12', key: 'D12', name: 'ESG & reputational',     surfaces: 'Supply chain exposure, procurement blocks, public-perception risk.' },
];

export const DOMAIN_REGISTRY: Record<string, string> = Object.fromEntries(
  riskDomains.map((d) => [d.key, d.name])
);

// ─── Intake questionnaire ──────────────────────────────────────────────────

export type DomainScores = Partial<Record<string, number>>;

export interface RiskAnswer {
  value: string;
  label: string;
  scores: DomainScores;
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
        ref: 'Q/01', name: 'stage', type: 'radio',
        question: 'What stage best describes the company today?',
        help: 'Choose the closest descriptor.',
        options: [
          { value: 'pre-revenue',     label: 'Pre-revenue — building toward first customers.',         scores: { D03: 3, D02: 2 } },
          { value: 'first-customers', label: 'First customers — early traction, no repeatable motion.', scores: { D02: 3, D09: 2, D03: 1 } },
          { value: 'series-a',        label: 'Series A or equivalent — funded, scaling.',               scores: { D10: 2, D11: 1 } },
          { value: 'scale',           label: 'Scale — multi-market, expanding complexity.',             scores: { D10: 3, D11: 2, D04: 2 } },
          { value: 'mature',          label: 'Mature — cash-generative, considering exit or transformation.', scores: { D09: 2, D11: 1 } },
        ],
      },
      {
        ref: 'Q/02', name: 'headcount', type: 'radio',
        question: 'Approximate headcount band?',
        options: [
          { value: '1-5',   label: '1 to 5 — founder-led.',             scores: { D01: 4 } },
          { value: '6-15',  label: '6 to 15 — early team forming.',     scores: { D01: 3, D10: 1 } },
          { value: '16-50', label: '16 to 50 — operating layer forms.', scores: { D10: 2 } },
          { value: '51-200',label: '51 to 200 — multi-function.',       scores: { D11: 2, D10: 2 } },
          { value: '200+',  label: '200+ — institutional complexity.',  scores: { D11: 3, D10: 1 } },
        ],
      },
      {
        ref: 'Q/03', name: 'jurisdiction', type: 'select',
        question: 'Primary operating jurisdiction?',
        options: [
          { value: 'UK',  label: 'United Kingdom', scores: {} },
          { value: 'UAE', label: 'United Arab Emirates', scores: {} },
          { value: 'KSA', label: 'Kingdom of Saudi Arabia', scores: {} },
          { value: 'US',  label: 'United States', scores: {} },
          { value: 'EU',  label: 'European Union', scores: {} },
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
        ref: 'Q/04', name: 'funding', type: 'radio',
        question: 'Current funding status?',
        options: [
          { value: 'bootstrapped',   label: 'Bootstrapped — no external capital.', scores: { D03: 2 } },
          { value: 'angel',          label: 'Angel or pre-seed.',                  scores: { D03: 3 } },
          { value: 'seed',           label: 'Seed — institutional first round.',   scores: { D03: 2 } },
          { value: 'series-a-plus',  label: 'Series A or later.',                  scores: { D03: 1 } },
          { value: 'profitable',     label: 'Profitable and cash-generative.',     scores: { D03: 0 } },
        ],
      },
      {
        ref: 'Q/05', name: 'runway', type: 'radio',
        question: 'Operating runway at current burn?',
        help: 'Months of cash before profitability or next capital event.',
        options: [
          { value: 'under-6',  label: 'Under six months.',         scores: { D03: 5 } },
          { value: '6-12',     label: 'Six to twelve months.',     scores: { D03: 4 } },
          { value: '12-24',    label: 'Twelve to twenty-four months.', scores: { D03: 2 } },
          { value: '24-plus',  label: 'Over twenty-four months.',  scores: { D03: 0 } },
          { value: 'na',       label: 'Pre-burn — not applicable.', scores: { D03: 1 } },
        ],
      },
      {
        ref: 'Q/06', name: 'founder-equity', type: 'radio',
        question: 'Are founder equity arrangements formalised?',
        options: [
          { value: 'fully',   label: 'Fully agreed, documented, and signed.',   scores: { D06: 0 } },
          { value: 'verbal',  label: 'Verbal understanding — not documented.', scores: { D06: 4 } },
          { value: 'absent',  label: 'Not yet addressed.',                     scores: { D06: 5 } },
          { value: 'solo',    label: 'Single founder — not applicable.',       scores: { D06: 1 } },
        ],
      },
    ],
  },
  {
    marker: 'Section C',
    title: 'Customer & market',
    note: "Revenue base, concentration, and competitive surface.",
    questions: [
      {
        ref: 'Q/07', name: 'customer-count', type: 'radio',
        question: 'Approximate customer count?',
        options: [
          { value: 'pre',    label: 'Pre-revenue.',                scores: { D02: 3 } },
          { value: '1-10',   label: '1 to 10 — concentration likely.', scores: { D02: 4 } },
          { value: '11-100', label: '11 to 100.',                  scores: { D02: 2 } },
          { value: '101-1000', label: '101 to 1,000.',             scores: { D02: 1 } },
          { value: '1000+',  label: 'Over 1,000.',                 scores: { D02: 0 } },
        ],
      },
      {
        ref: 'Q/08', name: 'top-customer', type: 'radio',
        question: 'Top customer as share of revenue?',
        options: [
          { value: 'over-50',  label: 'Over 50%.',      scores: { D02: 5 } },
          { value: '25-50',    label: '25 to 50%.',     scores: { D02: 3 } },
          { value: '10-25',    label: '10 to 25%.',     scores: { D02: 1 } },
          { value: 'under-10', label: 'Under 10%.',     scores: { D02: 0 } },
          { value: 'pre',      label: 'Pre-revenue.',   scores: { D02: 2 } },
        ],
      },
      {
        ref: 'Q/09', name: 'competition', type: 'radio',
        question: 'Competitive intensity of the market?',
        options: [
          { value: 'established', label: 'Established — multiple well-funded incumbents.', scores: { D09: 4 } },
          { value: 'emerging',    label: 'Emerging — one or two direct competitors.',       scores: { D09: 2 } },
          { value: 'defining',    label: 'Defining the category — limited competition.',    scores: { D09: 1 } },
        ],
      },
    ],
  },
  {
    marker: 'Section D',
    title: 'Operations & governance',
    note: 'Founder structure, reporting cadence, IP, and jurisdiction.',
    questions: [
      {
        ref: 'Q/10', name: 'founder-count', type: 'radio',
        question: 'Number of active founders?',
        options: [
          { value: '1',  label: 'One — single-founder.',           scores: { D01: 5 } },
          { value: '2',  label: 'Two — co-founder.',              scores: { D01: 1 } },
          { value: '3',  label: 'Three.',                          scores: { D01: 0 } },
          { value: '4+', label: 'Four or more.',                   scores: { D01: 1, D06: 1 } },
        ],
      },
      {
        ref: 'Q/11', name: 'reporting', type: 'radio',
        question: 'Financial reporting cadence?',
        options: [
          { value: 'monthly',   label: 'Monthly board reporting.',    scores: { D11: 0 } },
          { value: 'quarterly', label: 'Quarterly only.',             scores: { D11: 2 } },
          { value: 'adhoc',     label: 'Ad-hoc — no standing cadence.', scores: { D11: 4 } },
          { value: 'none',      label: 'None.',                       scores: { D11: 5 } },
        ],
      },
      {
        ref: 'Q/12', name: 'ip', type: 'radio',
        question: 'Intellectual property protection?',
        options: [
          { value: 'fully',   label: 'Fully documented and registered.',    scores: { D06: 0 } },
          { value: 'partial', label: 'Partial — some assets unprotected.',  scores: { D06: 3 } },
          { value: 'none',    label: 'Not yet addressed.',                  scores: { D06: 5 } },
          { value: 'na',      label: 'Not applicable.',                     scores: { D06: 0 } },
        ],
      },
      {
        ref: 'Q/13', name: 'jurisdictions', type: 'radio',
        question: 'Operating jurisdictions beyond the primary?',
        options: [
          { value: 'none', label: 'None — single jurisdiction.',        scores: { D05: 0 } },
          { value: '1-2',  label: 'One or two additional.',             scores: { D05: 2 } },
          { value: '3+',   label: 'Three or more — multi-jurisdiction.', scores: { D05: 4 } },
        ],
      },
    ],
  },
];

export const REQUIRED_QUESTIONS = riskIntake.flatMap((s) => s.questions).length;
