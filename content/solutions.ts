export type VMark =
  | "standard"
  | "extended"
  | "capped"
  | "tilted"
  | "wide"
  | "underlined"
  | "ascending"
  | "inverted"
  | "compressed"
  | "balanced"
  | "dotted"
  | "split"
  | "winged";

export interface SolutionSection {
  heading: string;
  paragraphs: string[];
}

export interface Solution {
  slug: string;
  number: string;
  name: string;
  vMark: VMark;
  /** One-line description for the homepage Solutions row. */
  description: string;
  /** Bold positioning statement at the top of the detail page. */
  positioning: string;
  /** Body sections for the detail page. */
  sections: SolutionSection[];
  /** Right-rail metadata block on the detail page. */
  metadata: { label: string; value: string }[];
  hasPage: boolean;
  /** Where the homepage row arrow links. /solutions/[slug] if null. */
  href: string | null;
}

export const solutions: Solution[] = [
  // ─── 01 / BUILD ──────────────────────────────────────────────────────────
  {
    slug: "build",
    number: "001",
    name: "Build",
    vMark: "standard",
    description:
      "Founding architecture, validation, and the operating infrastructure a company needs from day one.",
    positioning:
      "The Build practice helps founders avoid the structural problems that stifle performance. Foundational insights, before the first hire, before the first client, before the first raise.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Companies that scale from early stage to enterprise almost universally share one characteristic: they built correctly from the start. Operating model, legal architecture, CRM stack, brand positioning, governance. Each compounds forward for the life of the company.",
          "The alternative is to build fast and fix later, leaving founders exposed when they least need it. A loose investment instrument that results in subordination or excess dilution at Series A. Shareholder restrictions that prevent pivots and cause deadlock. Governance structures that demote the founder without cause. Cap tables that do not survive institutional diligence. We have seen it all, and we know how to avoid it.",
        ],
      },
      {
        heading: "What the Build practice does",
        paragraphs: [
          "Business model design and financial architecture. We stress-test the numbers behind the business, modelling with the rigour that investors and acquirers will eventually apply.",
          "Company positioning and ICP definition. Where the company sits in its market, who it serves with greatest precision, and how it describes itself to the people who matter.",
          "Foundational legal architecture. The right instrument, valuation, shareholder agreements, equity structure, and governance frameworks. Built correctly before the first investor term sheet.",
          "Operating infrastructure. CRM stack, operational systems, AI-native automation. The machinery that allows the company to scale without reinventing itself at every stage.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Founders at formation stage: pre-revenue, early team, first product. Companies that want to build once rather than rebuild twice.",
          "Institutional investors and family offices deploying capital into companies at formation stage who want an operating partner alongside the founding team.",
        ],
      },
      {
        heading: "How the engagement works",
        paragraphs: [
          "Build engagements begin with a diagnostic of the founding architecture: what exists, what is missing, and what is incorrectly structured. The output is a founding infrastructure plan sequenced by priority and stage.",
          "Delivery is hands-on and embedded. The founding team has a counterparty in each domain, across strategy, legal, capital raise, technology, and operations, with a single point of accountability across all of them.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Build \u00b7 001" },
      { label: "Typical engagement", value: "Project-based, 6 to 12 weeks" },
      { label: "Revenue model", value: "Project fees \u00b7 Equity participation \u00b7 Retainer \u00b7 Flexibility" },
      { label: "Stage", value: "Pre-revenue to first institutional raise" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 02 / CAPITAL ────────────────────────────────────────────────────────
  {
    slug: "capital",
    number: "002",
    name: "Capital",
    vMark: "extended",
    description:
      "Investor readiness, structuring, and institutional capital strategy across UK and GCC.",
    positioning:
      "Capital is not raised. It is earned through preparation, positioning, and relationships built before the moment they are needed.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most companies arrive at a fundraise unprepared for the quality of scrutiny they will face. The materials are generic. The financial model does not hold up to a thirty-minute conversation. The narrative does not differentiate the company from the ten others the investor saw that week.",
          "In the age of AI, the bar has risen considerably for tech companies to get funded. What may look defensible today actually needs to look defensible on a five-year-plus horizon. The moat must be deep and wide.",
          "Most founders have little appreciation for the tight mandates most investors follow, and what drives an investor to back a founder and company.",
          "In the UK and GCC corridor, the problem is compounded by structural differences in how capital allocates across jurisdictions. Sovereign wealth funds, family offices, and institutional investors across the Gulf operate on relationship architectures and due diligence standards that differ materially from UK and US norms.",
        ],
      },
      {
        heading: "What the Capital practice does",
        paragraphs: [
          "Investor readiness audit and scoring. A structured diagnostic of the company\u2019s current state across the dimensions sophisticated investors assess: defined customers, product market fit, traction, unit economics, scalability, durable advantage, team quality, and return potential.",
          "Materials architecture. Raise strategy, pitch materials, financial model, and due diligence preparation. Built to the standard of the investors being approached.",
          "Structuring and legal preparation. SAFEs, ASAs, convertible notes, priced equity, SEIS and EIS structuring for UK investors; cross-border structure for GCC and sovereign capital; round mechanics and governance frameworks.",
          "Capital introductions across the US, UK, and GCC. Not introductions to databases. Introductions to counterparties who respond.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Founders preparing for a first institutional raise, a growth round, or a pre-exit capital event. Companies entering the GCC market seeking sovereign or family office capital. Operators who have previously struggled to articulate the investment case with the rigour institutional capital requires.",
        ],
      },
      {
        heading: "The GCC advantage",
        paragraphs: [
          "The Valantai Capital practice has a structural advantage in sovereign and family office capital across the Gulf. The network is not manufactured; it is the product of years of operating experience across MENA. Introductions are made to named counterparties; the relationship exists before the company arrives.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Capital \u00b7 002" },
      { label: "Lead partner", value: "T. Speechley" },
      { label: "Revenue model", value: "Advisory retainer \u00b7 Success fee \u00b7 Carry" },
      { label: "Geographies", value: "UK \u00b7 UAE \u00b7 KSA \u00b7 US" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 03 / TECHNOLOGY ─────────────────────────────────────────────────────
  {
    slug: "technology",
    number: "003",
    name: "Technology",
    vMark: "capped",
    description:
      "Enterprise platforms, AI infrastructure, and operating systems built to clients\u2019 specifications.",
    positioning:
      "Most technology deployments fail not from technical problems but from implementation quality and operational reality. The Technology practice builds enterprise platforms that work.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Enterprise technology deployment is an implementation problem more than a product problem. The platforms exist. The integrations are documented. The failure consistently happens in the gap between the product specification and the operational reality of the company that has to run it.",
          "The Technology practice was built to close that gap. Fifty engineers, ISO 9001:2015 certification, and a track record of 5,650+ programmes delivered. The first major deployment \u2014 an enterprise CRM in UAE real estate, competing directly against Salesforce \u2014 set the standard the practice has operated to since.",
        ],
      },
      {
        heading: "What the Technology practice does",
        paragraphs: [
          "Enterprise CRM architecture and deployment. Built to client specifications, not vendor defaults. The Smart CRM has been deployed at \u00a3100,000+ in UAE real estate and is replicating across sectors.",
          "AI infrastructure design and deployment. End-to-end AI implementation across UK and UAE enterprises. Audit to production in weeks, not quarters.",
          "White-label platform. The enterprise CRM is available as a white-label platform for agencies and channel partners who need enterprise-grade infrastructure without building it from scratch.",
          "Sector-specific builds. Platforms built for the operational realities of real estate, financial services, sport, luxury, and healthcare \u2014 not generic templates adapted to fit.",
        ],
      },
      {
        heading: "The delivery standard",
        paragraphs: [
          "ISO 9001:2015 certified delivery. Enterprise pace: weeks from audit to production, not quarters from scoping to delivery. A fifty-engineer team that has delivered across three continents and three hundred companies.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Technology \u00b7 003" },
      { label: "Lead partner", value: "T. Chhabra" },
      { label: "Delivery team", value: "50+ engineers \u00b7 ISO 9001:2015" },
      { label: "Revenue model", value: "\u00a350\u2013150K implementation \u00b7 SaaS \u00b7 White-label" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 04 / RISK ───────────────────────────────────────────────────────────
  {
    slug: "risk",
    number: "004",
    name: "Risk",
    vMark: "tilted",
    description:
      "The Risk Engine, operational exposure mapping, and continuous monitoring across twelve domains.",
    positioning:
      "Most companies discover their operational risks at the point those risks become consequences. The Risk practice exists to close that gap \u2014 before the cost is incurred.",
    sections: [
      {
        heading: "The instrument",
        paragraphs: [
          "The Risk Engine scores companies against a matrix of internal and external factors including: key person dependence, customer concentration, compliance, IP quality, capital position, technology stack, AI-defensibility, ESG, supply chain, market dynamic, regulatory exposure, geography and macro, political risk, and the black swan. Each factor is weighted against the company\u2019s stage, sector, and structure.",
          "The output is not a generic risk report. It is a ranked exposure register \u2014 the five most likely determining factors in the next twelve months, with severity bands, sector benchmarks, and direct routing to the Valantai practice best positioned to address each one.",
        ],
      },
      {
        heading: "Three tiers of engagement",
        paragraphs: [
          "The free diagnostic takes thirteen questions and surfaces the top exposures immediately. It is the entry point for most clients and the first proof of what the instrument can do.",
          "The monitored dashboard provides continuous exposure tracking as the company\u2019s profile evolves: new funding, new hires, new markets, new competitive entrants. The picture changes; the instrument updates.",
          "The portfolio layer provides aggregate risk intelligence across VC and PE portfolios \u2014 a third-party view of where the exposure sits and how it has moved since the last reporting period.",
        ],
      },
      {
        heading: "Investor and portfolio use",
        paragraphs: [
          "Investors use the Risk Engine in three ways. Pre-investment: as a structured due diligence input, surfacing exposures the company may not have disclosed or identified. Post-investment: as a standing monitor, tracking exposure movement across the portfolio. Pre-exit: as an investor-readiness instrument, packaging the risk picture for acquirer diligence.",
          "The Engine produces an Investor Risk Report \u2014 a packaged intelligence document for due diligence processes \u2014 as an enterprise-tier output.",
        ],
      },
      {
        heading: "The calibration",
        paragraphs: [
          "Weights across the twelve domains are calibrated quarterly against the institution\u2019s active mandate register. Every engagement adds to the dataset. The instrument becomes sharper as the institution operates. Sector benchmarking data \u2014 accumulated across UK, GCC, and US engagements \u2014 is proprietary and cannot be replicated by competitors who do not have the engagement history.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Risk \u00b7 004" },
      { label: "Domains", value: "Twelve, weighted quarterly" },
      { label: "Status", value: "Instrument in development" },
      { label: "Revenue model", value: "Freemium \u00b7 SaaS \u00b7 Enterprise \u00b7 Data licensing" },
    ],
    hasPage: true,
    href: "/platform/risk",
  },

  // ─── 05 / COMMERCE ───────────────────────────────────────────────────────
  {
    slug: "commerce",
    number: "005",
    name: "Commerce",
    vMark: "wide",
    description:
      "Direct-to-consumer infrastructure, automation, and customer lifecycle systems.",
    positioning:
      "Commerce infrastructure is the difference between a business that grows and a business that accumulates operational debt. The Commerce practice builds the infrastructure before the debt arrives.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most D2C businesses reach meaningful revenue before their commerce infrastructure can support it. The checkout works. The post-purchase experience does not. The subscription architecture was not designed for the volume it is handling. The customer data sits in six places and does not connect into a single picture.",
          "The Commerce practice builds the underlying infrastructure \u2014 the systems, automations, and data architectures that allow a commerce business to scale without reinvention.",
        ],
      },
      {
        heading: "What the Commerce practice does",
        paragraphs: [
          "D2C infrastructure design and build. Shopify architecture, payment stack, fulfilment integration, inventory systems \u2014 designed for the scale the business is building toward, not the scale it is at today.",
          "AI-native lifecycle automation. Post-purchase flows, lifecycle triggers, churn prediction, upsell and cross-sell automation \u2014 driven by operational data rather than generic templates.",
          "Subscription and membership architecture. Systems designed for recurring revenue: acquisition, billing, retention, and recovery. Built to the operational standard that institutional investors expect to find.",
          "LTV optimisation. Customer data architecture that connects acquisition cost, lifetime value, and retention rate into a single operating picture.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "D2C brands at meaningful scale \u2014 past initial product-market fit, with revenue between \u00a31M and \u00a350M, whose commerce infrastructure has not kept pace with growth. Enterprise retailers building out a direct-to-consumer channel alongside existing wholesale operations.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Commerce \u00b7 005" },
      { label: "Stack", value: "Shopify Plus \u00b7 Custom builds" },
      { label: "Revenue model", value: "Implementation \u00b7 Automation SaaS" },
      { label: "Stage", value: "Growth-stage to enterprise" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 06 / COUNSEL ────────────────────────────────────────────────────────
  {
    slug: "counsel",
    number: "006",
    name: "Counsel",
    vMark: "underlined",
    description:
      "Founder agreements, IP, governance, and the legal architecture of growing companies.",
    positioning:
      "Legal infrastructure is almost always the thing companies leave too late. The Counsel practice brings legal thinking into the operating layer before it becomes a structural problem.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Founder equity misalignment. IP owned by the wrong entity. Shareholder agreements that do not reflect the actual operating arrangement. Governance frameworks that fail at the first board-level disagreement. Each of these is manageable at the beginning and expensive to correct at the end.",
          "The Counsel practice is not a law firm, though we have lawyers with blue chip pedigree on the team. We provide legal intelligence and true counsel as an operating layer: the experience and foresight that should inform every structural decision a company makes, integrated with the commercial, operational, and capital decisions that determine the company\u2019s trajectory.",
        ],
      },
      {
        heading: "What the Counsel practice covers",
        paragraphs: [
          "Founding structure and choice of jurisdiction. Investor instruments, shareholder agreements, equity structures, vesting schedules, and the governance framework that holds the founding team together through disagreement and growth.",
          "IP protection. Ownership, assignment, registration, and licensing strategy, for technology, brand, content, and data assets.",
          "Commercial contracts. Term sheets, partnership agreements, customer contracts, supplier agreements, reviewed with the commercial lens of an operator, not a desk lawyer.",
          "International structuring. Cross-border legal architecture for companies operating across UK, UAE, and the broader GCC, where regulatory regimes, IP law, and corporate structures differ materially.",
        ],
      },
      {
        heading: "Integration with other practices",
        paragraphs: [
          "Counsel is most effective when integrated with the other elements of Valantai, such as Capital, ensuring that investor-readiness and legal structure are aligned before term sheets arrive. The Valantai model provides both under one engagement, removing the coordination failure that occurs when legal and capital advisors are independent.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Counsel \u00b7 006" },
      { label: "Lead partner", value: "T. Speechley" },
      { label: "Revenue model", value: "Retained advisory \u00b7 Project work" },
      { label: "Note", value: "Legal intelligence and foresight, not regulated legal advice" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 07 / GROW ───────────────────────────────────────────────────────────
  {
    slug: "grow",
    number: "007",
    name: "Grow",
    vMark: "ascending",
    description:
      "AI-native sales systems, outbound automation, and the operating infrastructure that makes growth repeatable.",
    positioning:
      "Growth that cannot be repeated is not growth \u2014 it is luck with a revenue number attached. The Grow practice builds the systems that make commercial motion repeatable and measurable.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most companies at growth stage have achieved initial commercial traction through founder-led sales and relationship networks. The question is how to systematise what worked informally into something that works at scale \u2014 without losing the quality of the outreach or the precision of the targeting.",
          "AI has changed the surface area of this problem. The tools to build genuinely differentiated outbound systems \u2014 researched, personalised, sequenced, and tracked \u2014 exist and are accessible. What most companies lack is the operating experience to deploy them correctly.",
        ],
      },
      {
        heading: "What the Grow practice builds",
        paragraphs: [
          "AI sales systems and outbound automation. Prospect research, personalised sequence generation, send-time optimisation, and response handling \u2014 operating at a volume and quality that manual outreach cannot match.",
          "CRM optimisation and pipeline intelligence. The CRM as a live operating instrument: stage definitions, conversion benchmarks, deal velocity metrics, and the reporting infrastructure that gives the leadership team a real-time picture of commercial health.",
          "Inbound systems. Content architecture, SEO, and lead capture infrastructure designed to attract the right audience and convert it with the minimum friction.",
          "AI Growth Programme. A structured commercial transformation programme deployed with active UK clients. Audit, design, implementation, and ongoing optimisation \u2014 delivered with the intensity of an embedded operator.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Companies at Series A or later with a defined ICP and a commercial motion that works at small scale but has not yet been systematised. Founders who have exhausted the network effect of their personal relationships and need to build something that does not depend on them.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Grow \u00b7 007" },
      { label: "Live programme", value: "AI Growth Programme \u00b7 UK clients active" },
      { label: "Revenue model", value: "Monthly retainer \u00b7 SaaS platform licence" },
      { label: "Stage", value: "Series A+ to scale" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 08 / BRAND ──────────────────────────────────────────────────────────
  {
    slug: "brand",
    number: "008",
    name: "Brand",
    vMark: "inverted",
    description:
      "Positioning strategy, brand architecture, and the narrative infrastructure that makes a company legible to the audiences that matter.",
    positioning:
      "A brand that cannot be remembered cannot be differentiated. The Brand practice builds the narrative and identity infrastructure that makes a company's position visible, credible, and defensible.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most companies underinvest in brand at exactly the moment it matters most: when they are establishing market position before competitors do it for them. The result is a company that competes on features and price rather than identity and narrative.",
          "The Brand practice approaches brand as operating infrastructure, not as creative decoration. Positioning, architecture, messaging, and identity are the components of a commercial system, not the outputs of a creative brief.",
        ],
      },
      {
        heading: "What the Brand practice does",
        paragraphs: [
          "Positioning strategy and competitive differentiation. Where the company sits in its category, what claim it can make and defend, and how to make that claim visible to the right audiences.",
          "Brand architecture. The structure of the brand \u2014 how it organises across products, geographies, and customer segments, and how it holds together as the company grows.",
          "Identity system. Visual, verbal, digital, and editorial systems that express the positioning with consistency and authority.",
          "Pitch narrative and investor-facing design. The presentation of the company to investors: the narrative structure, the evidence architecture, and the design standards that signal the quality of the company behind the deck.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Brand \u00b7 008" },
      { label: "Lead partner", value: "S. Shellien" },
      { label: "Revenue model", value: "Project fees \u00b7 Content and brand retainer" },
      { label: "Stage", value: "Formation to scale" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 09 / GTM ────────────────────────────────────────────────────────────
  {
    slug: "gtm",
    number: "009",
    name: "GTM",
    vMark: "compressed",
    description:
      "Go-to-market systems, channel strategy, and the commercial architecture that turns product into revenue.",
    positioning:
      "A product without a go-to-market system is a hypothesis. The GTM practice designs the commercial architecture that turns product into repeatable, scalable revenue.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Go-to-market failures are rarely product failures. They are failures of targeting, timing, channel selection, and message precision. The company has something worth selling; it does not know with enough specificity who to sell it to, through which channels, with what narrative, and in what sequence.",
          "The GTM practice addresses each of these questions before the commercial motion begins \u2014 and benchmarks the answers against category leaders who have already solved the same problem.",
        ],
      },
      {
        heading: "What the GTM practice designs",
        paragraphs: [
          "ICP definition and market mapping. A rigorous, data-informed picture of the ideal customer: company size, industry, geography, buying role, pain profile, and trigger events. The precision of ICP definition is the single highest-leverage input into commercial performance.",
          "Channel strategy and market entry architecture. Which channels, in what sequence, with what resource allocation. The playbook for entering a new market or customer segment.",
          "Outbound AI systems and sequence automation. Prospecting, personalised sequence generation, and conversion design \u2014 built to the specifications of the ICP and the channel.",
          "GTM benchmarking. Performance against category leaders at comparable stage: conversion rates, pipeline velocity, CAC, LTV. The benchmark tells the company whether its commercial performance is acceptable or structurally below the market.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "GTM \u00b7 009" },
      { label: "Revenue model", value: "Advisory retainer \u00b7 Performance component" },
      { label: "Stage", value: "Product-market fit to growth" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 10 / ESG ────────────────────────────────────────────────────────────
  {
    slug: "esg",
    number: "010",
    name: "ESG",
    vMark: "balanced",
    description:
      "Operational ESG intelligence as a procurement enabler \u2014 not sustainability theatre.",
    positioning:
      "ESG has moved from reporting obligation to procurement requirement. The ESG practice positions it as a commercial unlock, not a compliance burden.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Enterprise procurement across the UK, UAE, and Saudi Arabia increasingly requires ESG compliance as a commercial condition of engagement. Companies that cannot demonstrate ESG readiness are excluded from procurement processes before the commercial conversation begins.",
          "Most companies approach ESG as a reporting obligation \u2014 something to be handled by finance and legal. The Valantai ESG practice approaches it as a commercial enabler: the fastest path from ESG exposure to ESG credibility, designed to unlock procurement and enterprise contracts.",
        ],
      },
      {
        heading: "What the ESG practice does",
        paragraphs: [
          "ESG readiness scoring and gap analysis. A structured diagnostic of current ESG position against the requirements of target customers and procurement frameworks.",
          "Reporting infrastructure. The frameworks, data collection, and reporting systems that produce auditable ESG documentation \u2014 at the standard required by enterprise and sovereign procurement.",
          "Sovereign and enterprise positioning. Specific preparation for ESG requirements in UAE and Saudi procurement \u2014 where environmental, social, and governance standards are embedded into supplier qualification processes for government and SOE contracts.",
          "Supply chain mapping. Identification of ESG exposure across the supply chain, which is increasingly the primary driver of procurement exclusion.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "ESG \u00b7 010" },
      { label: "Focus", value: "Procurement unlock \u00b7 Enterprise enablement" },
      { label: "Revenue model", value: "Advisory \u00b7 SaaS reporting dashboard" },
      { label: "Geographies", value: "UK \u00b7 UAE \u00b7 KSA" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 11 / EDUCATE ────────────────────────────────────────────────────────
  {
    slug: "educate",
    number: "011",
    name: "Educate",
    vMark: "dotted",
    description:
      "Founder programmes, AI literacy for leadership teams, and corporate transformation curricula.",
    positioning:
      "The companies that will lead their categories in five years are the ones whose leadership understands AI as an operating capability, not a technology experiment. The Educate practice builds that understanding.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "AI literacy among leadership teams is uneven and deteriorating relative to the pace of deployment. Boards and executive teams that do not understand AI at an operational level cannot make the decisions that will determine whether their company benefits from AI or is disrupted by it.",
          "The Educate practice translates Valantai\u2019s operating experience into structured programmes \u2014 for founders, boards, and corporate leadership teams who need to understand AI not as a technology but as an operating and commercial lever.",
        ],
      },
      {
        heading: "What the Educate practice delivers",
        paragraphs: [
          "Structured founder programmes. Cohort-based learning designed around the specific decisions founders face at growth stage: AI infrastructure, operating model design, commercial system architecture.",
          "AI literacy for boards and leadership teams. Half-day and full-day programmes for boards, executive committees, and senior leadership teams. Not AI theory \u2014 operational AI: what it does, what it changes, what the company needs to decide about it.",
          "Corporate AI transformation programmes. Multi-session programmes for enterprise clients, delivered as part of a broader transformation engagement.",
          "Productised IP. The Valantai engagement archive turned into structured learning content: frameworks, tools, and decision guides available as a standalone product.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Educate \u00b7 011" },
      { label: "Formats", value: "Cohort \u00b7 Corporate \u00b7 Bespoke" },
      { label: "Revenue model", value: "Cohort fees \u00b7 Corporate licensing \u00b7 Platform subscription" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 12 / WEDGE ──────────────────────────────────────────────────────────
  {
    slug: "wedge",
    number: "012",
    name: "Wedge",
    vMark: "split",
    description:
      "Competitive moat identification, white space analysis, and the strategic positioning that makes a market position defensible.",
    positioning:
      "The companies that hold market position over time have one thing in common: they identified their wedge early, articulated it precisely, and built their operating model around defending it.",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Most companies compete on features that can be replicated and prices that can be undercut. The companies that hold market positions over five and ten-year horizons compete on structural advantages: network effects, switching costs, proprietary data, regulatory position, or distribution moats that cannot be quickly reproduced.",
          "The Wedge practice identifies, articulates, and builds the operating infrastructure around the structural advantage that is specific to this company in this market at this moment.",
        ],
      },
      {
        heading: "What the Wedge practice does",
        paragraphs: [
          "Competitive landscape mapping and white space analysis. A rigorous view of the competitive field: who is there, where they are strong, where they are weak, and where the gaps are that the company can occupy.",
          "Moat identification. Network effects, switching costs, data advantages, regulatory position, distribution control \u2014 the structural advantages that a company has or can build, and the operating investments required to defend them.",
          "AI-powered competitive intelligence. Continuous monitoring of the competitive landscape: new entrants, product changes, pricing moves, customer wins and losses.",
          "Wedge strategy as fundraising and GTM input. The moat narrative is the most compelling element of an investor pitch and the clearest differentiator in an enterprise sales conversation. The Wedge practice produces both.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Wedge \u00b7 012" },
      { label: "Revenue model", value: "Advisory project \u00b7 AI tool SaaS subscription" },
      { label: "Stage", value: "Growth-stage to exit preparation" },
    ],
    hasPage: true,
    href: null,
  },

  // ─── 13 / ANGELS ─────────────────────────────────────────────────────────
  {
    slug: "angels",
    number: "013",
    name: "Angels",
    vMark: "winged",
    description:
      "Angel syndicate infrastructure, founder-investor matching, and the operating network that connects the right capital to the right companies.",
    positioning:
      "The best early-stage capital comes from operators who have done the work. The Angels practice builds the network that connects founders to operator-investors who have relevant experience and genuine conviction.",
    sections: [
      {
        heading: "The structure",
        paragraphs: [
          "Valantai Angels is the firm\u2019s angel syndicate and co-investment vehicle, led by Tom Speechley. It operates as both a capital vehicle \u2014 SPV infrastructure, deal flow architecture, carry economics \u2014 and as a network: the community of operators and investors who back companies through the Valantai ecosystem.",
          "The co-investment right sits alongside equity-bearing Valantai engagements. Companies that engage the firm at Build or Capital stage are also companies that Valantai may invest in.",
        ],
      },
      {
        heading: "What the Angels practice does",
        paragraphs: [
          "SPV architecture and deal flow management. The structural infrastructure for angel investing: SPV formation, investment documentation, shareholder management, and ongoing portfolio reporting.",
          "Founder matching. Introduction of founders to the Angels network \u2014 operator-investors with specific sector expertise and operating experience in the founder\u2019s domain.",
          "Operator network building. The community of 500+ operators and investors across UK and GCC who sit at the intersection of capital and operating experience.",
          "Content and SEO flywheel. Founders as content \u2014 their experiences, decisions, and expertise surfaced through the Valantai platform to drive organic audience growth and deal flow inbound.",
        ],
      },
      {
        heading: "Who participates",
        paragraphs: [
          "Founders at formation or early growth stage seeking operator capital alongside institutional capital. Operators with sector expertise who want to invest alongside their knowledge. Family offices and institutional LPs who want access to early-stage deal flow in the UK\u2013GCC corridor.",
        ],
      },
    ],
    metadata: [
      { label: "Practice", value: "Angels \u00b7 013" },
      { label: "Lead partner", value: "T. Speechley" },
      { label: "Network target", value: "500+ active operators and investors" },
      { label: "Revenue model", value: "Carry \u00b7 SPV management fees \u00b7 Network effects" },
    ],
    hasPage: true,
    href: null,
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export const TOTAL_SOLUTIONS = solutions.length;
