export interface Instrument {
  number: string;
  name: string;
  description: string;
  meta: { label: string; value: string }[];
}

export const instruments: Instrument[] = [
  {
    number: 'I/01',
    name: 'The Risk Engine',
    description:
      'A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do.',
    meta: [
      { label: 'Domains covered', value: 'Twelve' },
      { label: 'Status', value: 'In development' },
    ],
  },
  {
    number: 'I/02',
    name: 'Enterprise Platform',
    description:
      "Operating infrastructure deployed at enterprise scale. Live in UAE real estate. Built to the firm's specification, owned by the firm's clients.",
    meta: [
      { label: 'Status', value: 'Deployed' },
      { label: 'Architecture', value: 'Proprietary' },
    ],
  },
  {
    number: 'I/03',
    name: 'Sector Intelligence',
    description:
      'Proprietary benchmarking accumulated from every engagement. Used to position, prepare, and price companies through capital rounds, transactions, and exits.',
    meta: [
      { label: 'Source', value: 'Engagement data' },
      { label: 'Access', value: 'Restricted' },
    ],
  },
];
