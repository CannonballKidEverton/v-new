/**
 * lib/solutions.ts
 * Source of truth for solution page content.
 * Copy edits applied:
 *   - All em-dashes removed; replaced with full stops, commas, or semicolons.
 *   - Body paragraphs flagged for justified alignment.
 *   - Spelling corrected ("survice" -> "survive", "ond" -> "and").
 */

export type SolutionSection = {
  heading: string;
  paragraphs: string[];
};

export type SolutionMeta = {
  label: string;
  value: string;
};

export type SolutionPullQuote = {
  text: string;
  attribution?: string;
};

export type Solution = {
  slug: string;
  code: string;            // e.g. "001"
  name: string;            // e.g. "Build"
  positioning: string;     // italic sub-line under the page hero
  lede: string;            // bold opener paragraph
  body: string[];          // justified prose paragraphs
  meta: SolutionMeta[];    // right-rail facts
  sections: SolutionSection[];
  pullQuote?: SolutionPullQuote;
  documentRef: string;     // e.g. "VLT · 2026 · 05 · SYHSE · ISSUED 15.05.2026 · 19:51 GMT"
};

export const solutions: Record<string, Solution> = {
  build: {
    slug: 'build',
    code: '001',
    name: 'Build',
    positioning: 'Foundational architecture for companies built to scale.',
    lede:
      'The Build practice helps founders avoid the structural problems that stifle performance. Foundational insights, before the first hire, before the first client, before the first raise.',
    body: [
      'Companies that scale from early stage to enterprise almost universally share one characteristic: they built correctly from the start. Operating model, legal architecture, CRM stack, brand positioning, governance. Each compounds forward for the life of the company.',
      'The alternative is to build fast and fix later, leaving founders exposed when they least need it. A loose investment instrument that results in subordination or excess dilution at Series A. Shareholder restrictions that prevent pivots and cause deadlock. Governance structures that demote the founder without cause. Cap tables that do not survive institutional diligence. We have seen it all, and we know how to avoid it.',
    ],
    meta: [
      { label: 'Practice', value: 'Build · 001' },
      { label: 'Typical engagement', value: 'Project-based, 6 to 12 weeks' },
      { label: 'Revenue model', value: 'Project fees · Equity participation · Retainer · Flexibility' },
      { label: 'Stage', value: 'Pre-revenue to first institutional raise' },
    ],
    sections: [
      {
        heading: 'What the Build practice does',
        paragraphs: [
          'Business model design and financial architecture. We stress-test the numbers behind the business, modelling with the rigour that investors and acquirers will eventually apply.',
          'Company positioning and ICP definition. Where the company sits in its market, who it serves with greatest precision, and how it describes itself to the people who matter.',
          'Founding legal foundation. The right instrument, valuation, shareholder agreements, equity structure, and governance frameworks. Built correctly before the first investor term sheet.',
          'Operating infrastructure. CRM stack, operational systems, AI-native automation. The machinery that allows the company to scale without reinventing itself at every stage.',
        ],
      },
      {
        heading: 'Who it is for',
        paragraphs: [
          'Founders at formation stage: pre-revenue, early team, first product. Companies that want to build once rather than rebuild twice.',
          'Institutional investors and family offices deploying capital into companies at formation stage who want an operating partner alongside the founding team.',
        ],
      },
      {
        heading: 'How the engagement works',
        paragraphs: [
          'Build engagements begin with a diagnostic of the founding architecture: what exists, what is missing, and what is incorrectly structured. The output is a founding infrastructure plan sequenced by priority and stage.',
          'Delivery is hands-on and embedded. The founding team has a counterparty in each domain, across strategy, legal, capital raise, technology, and operations, with a single point of accountability across all of them.',
        ],
      },
    ],
    documentRef: 'VLT · 2026 · 05 · BLD01 · ISSUED 15.05.2026 · 19:32 GMT',
  },

  capital: {
    slug: 'capital',
    code: '002',
    name: 'Capital',
    positioning: 'Investor readiness, structuring, and institutional capital strategy.',
    lede:
      'Capital is not raised. It is earned through preparation, positioning, and relationships built before the moment they are needed.',
    body: [
      'Most companies arrive at a fundraise unprepared for the quality of scrutiny they will face. The materials are generic. The financial model does not hold up to a thirty-minute conversation. The narrative does not differentiate the company from the ten others the investor saw that week.',
      'In the age of AI, the bar has risen considerably for tech companies to get funded. What may look defensible today actually needs to look defensible on a five-year-plus horizon. The moat must be deep and wide.',
      'Most founders have little appreciation for the tight mandates most investors follow, and what drives an investor to back a founder and company.',
      'In the UK and GCC corridor, the problem is compounded by structural differences in how capital allocates across jurisdictions. Sovereign wealth funds, family offices, and institutional investors across the Gulf operate on relationship architectures and due diligence standards that differ materially from UK and US norms.',
    ],
    meta: [
      { label: 'Practice', value: 'Capital · 002' },
      { label: 'Lead partner', value: 'T. Speechley' },
      { label: 'Revenue model', value: 'Advisory retainer · Success fee · Carry' },
      { label: 'Geographies', value: 'UK · UAE · KSA · US' },
    ],
    pullQuote: {
      text:
        'Our founding partner spent over a decade managing private equity and venture capital funds across several sectors and geographies. We know what institutional investors are looking for.',
    },
    sections: [
      {
        heading: 'What the Capital practice does',
        paragraphs: [
          'Investor readiness audit and scoring. A structured diagnostic of the company\u2019s current state across the dimensions sophisticated investors assess: defined customers, product market fit, traction, unit economics, scalability, durable advantage, team quality, and return potential.',
          'Materials architecture. Raise strategy, pitch materials, financial model, and due diligence preparation. Built to the standard of the investors being approached.',
          'Structuring and legal preparation. SAFEs, ASAs, convertible notes, priced equity, SEIS and EIS structuring for UK investors; cross-border structure for GCC and sovereign capital; round mechanics and governance frameworks.',
          'Capital introductions across the US, UK, and GCC. Not introductions to databases. Introductions to counterparties who respond.',
        ],
      },
      {
        heading: 'Who it is for',
        paragraphs: [
          'Founders preparing for a first institutional raise, a growth round, or a pre-exit capital event. Companies entering the GCC market seeking sovereign or family office capital. Operators who have previously struggled to articulate the investment case with the rigour institutional capital requires.',
        ],
      },
      {
        heading: 'The GCC advantage',
        paragraphs: [
          'The Valantai Capital practice has a structural advantage in sovereign and family office capital across the Gulf. The network is not manufactured; it is the product of years of operating experience across MENA. Introductions are made to named counterparties; the relationship exists before the company arrives.',
        ],
      },
    ],
    documentRef: 'VLT · 2026 · 05 · SYHSE · ISSUED 15.05.2026 · 19:51 GMT',
  },

  counsel: {
    slug: 'counsel',
    code: '006',
    name: 'Counsel',
    positioning: 'Legal counsel across the capital stack and life cycle of a company.',
    lede:
      'Legal infrastructure is almost always the thing companies leave too late. The Counsel practice brings legal thinking into the operating layer before it becomes a structural problem.',
    body: [
      'Founder equity misalignment. IP owned by the wrong entity. Shareholder agreements that do not reflect the actual operating arrangement. Governance frameworks that fail at the first board-level disagreement. Each of these is manageable at the beginning and expensive to correct at the end.',
      'The Counsel practice is not a law firm, though we have lawyers with blue chip pedigree on the team. We provide legal intelligence and true counsel as an operating layer: the experience and foresight that should inform every structural decision a company makes, integrated with the commercial, operational, and capital decisions that determine the company\u2019s trajectory.',
    ],
    meta: [
      { label: 'Practice', value: 'Counsel · 006' },
      { label: 'Lead partner', value: 'T. Speechley' },
      { label: 'Revenue model', value: 'Retained advisory · Project work' },
      { label: 'Note', value: 'Legal intelligence and foresight, not regulated legal advice' },
    ],
    sections: [
      {
        heading: 'What the Counsel practice covers',
        paragraphs: [
          'Founding structure. Investor instruments, shareholder agreements, equity structures, vesting schedules, and the governance framework that holds the founding team together through disagreement and growth.',
          'IP protection. Ownership, assignment, registration, and licensing strategy, for technology, brand, content, and data assets.',
          'Commercial contracts. Term sheets, partnership agreements, customer contracts, supplier agreements, reviewed with the commercial lens of an operator, not a desk lawyer.',
          'International structuring. Cross-border legal architecture for companies operating across UK, UAE, and the broader GCC, where regulatory regimes, IP law, and corporate structures differ materially.',
        ],
      },
      {
        heading: 'Integration with other practices',
        paragraphs: [
          'Counsel is most effective when integrated with the other elements of Valantai, such as Capital, ensuring that investor-readiness and legal structure are aligned before term sheets arrive. The Valantai model provides both under one engagement, removing the coordination failure that occurs when legal and capital advisors are independent.',
        ],
      },
    ],
    documentRef: 'VLT · 2026 · 05 · 2EL2C · ISSUED 15.05.2026 · 20:06 GMT',
  },
};

export function getSolution(slug: string): Solution | null {
  return solutions[slug] ?? null;
}

export function listSolutionSlugs(): string[] {
  return Object.keys(solutions);
}
