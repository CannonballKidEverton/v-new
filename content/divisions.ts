export interface Division {
  number: string;
  slug: string;
  name: string;
  description: string;
  /** Set false for divisions not yet given a dedicated page. */
  hasPage: boolean;
}

export const divisions: Division[] = [
  {
    number: '001',
    slug: 'build',
    name: 'Build',
    description:
      'Founding architecture, validation, and the operating infrastructure a company needs from day one.',
    hasPage: false,
  },
  {
    number: '002',
    slug: 'capital',
    name: 'Capital',
    description:
      'Investor readiness, structuring, and institutional capital strategy across UK and GCC.',
    hasPage: false,
  },
  {
    number: '003',
    slug: 'technology',
    name: 'Technology',
    description:
      "Enterprise platforms, AI infrastructure, and operating systems built to clients' specifications.",
    hasPage: false,
  },
  {
    number: '004',
    slug: 'risk',
    name: 'Risk',
    description:
      'The Risk Engine, operational exposure mapping, and continuous monitoring across twelve domains.',
    hasPage: true,
  },
  {
    number: '005',
    slug: 'commerce',
    name: 'Commerce',
    description:
      'Direct-to-consumer infrastructure, automation, and customer lifecycle systems.',
    hasPage: false,
  },
  {
    number: '006',
    slug: 'counsel',
    name: 'Counsel',
    description:
      'Founder agreements, IP, governance, and the legal architecture of growing companies.',
    hasPage: false,
  },
];

/** Total divisions in the institution (currently six shown of thirteen specified). */
export const TOTAL_DIVISIONS = 13;
