export interface Operator {
  slug: string;
  ref: string;
  name: string;
  role: string;
  roleShort: string;
  bio: string;
  longBio: string[];
  meta: { label: string; value: string }[];
  pastEngagements?: string[];
  hidden?: boolean;
}

export const operators: Operator[] = [
  {
    slug: "simon-shellien",
    ref: "P/01",
    name: "Simon Shellien",
    role: "Strategy, brand, operations & growth",
    roleShort: "Strategy \u00b7 Brand \u00b7 Operations",
    bio: "Twenty years across UK and MENA. Operator across consumer technology, sport, luxury, and real estate. Architect of the firm\u2019s operating model and client delivery infrastructure.",
    longBio: [
      "Twenty years operating across the United Kingdom and the Middle East. Strategy and execution for founders and institutions, with an emphasis on systems that hold their shape as the business scales.",
      "Earlier engagements have spanned consumer technology, sport, luxury, and real estate \u2014 selected work with Under Armour, NEOM, Emirates, and Adidas. The discipline has been consistent across each: arrive into a business, understand it as an operator would, design the system, and stay long enough to see it work.",
      "At Valantai, Simon is the architect of the operating model \u2014 its vertical structure, its client delivery infrastructure, and the engagement design that makes the institution legible to the companies and operators it serves.",
      "Day-to-day counsel to founders, executives, and family offices across the UK\u2013GCC corridor. Sectors of priority: real estate, consumer technology, sport, and luxury.",
    ],
    meta: [
      { label: "Focus",       value: "Operating model \u00b7 Client delivery \u00b7 Vertical architecture" },
      { label: "Sectors",     value: "Consumer technology \u00b7 Real estate \u00b7 Sport \u00b7 Luxury" },
      { label: "Geographies", value: "UK \u00b7 UAE \u00b7 KSA" },
    ],
    pastEngagements: ["Under Armour", "NEOM", "Emirates", "Adidas"],
  },
  {
    slug: "tom-speechley",
    ref: "P/02",
    name: "Tom Speechley",
    hidden: true,
    role: "Business architecture, capital solutions & counsel",
    roleShort: "Business Architecture \u00b7 Capital Solutions \u00b7 Counsel",
    bio: "Three decades. Three careers. Law, private equity, and founding. Author of Acquisition Finance and Financing Entrepreneurial Companies for Bloomsbury Professional.",
    longBio: [
      "Three decades. Three careers.",
      "As a lawyer in London and New York advising major financial institutions and corporates on LBOs and complex financing solutions. Counselling entrepreneurial companies and their founders on acquisitions, restructurings and finance.",
      "As a private equity investor, managing emerging market funds, raising capital, building teams, opening new geographies, new strategies.",
      "As a founder. Building companies in healthcare, technology and business services. Plus extensive experience mentoring founders, angel investing and raising capital.",
      "And as an author, Acquisition Finance and Financing Entrepreneurial Companies (commissioned) for Bloomsbury Professional and Funding Startups for CapTableBooks.",
      "\u201CFirst you find the button, then you make the suit.\u201D",
    ],
    meta: [
      { label: "Focus",       value: "Capital strategy \u00b7 Investor readiness \u00b7 International structuring" },
      { label: "Sectors",     value: "Private equity \u00b7 Family office \u00b7 Sovereign capital" },
      { label: "Geographies", value: "UK \u00b7 UAE \u00b7 KSA \u00b7 US" },
    ],
  },
  {
    slug: "tom-chhabra",
    ref: "P/03",
    name: "Tom Chhabra",
    role: "Technology, AI & enterprise infrastructure",
    roleShort: "Technology \u00b7 AI \u00b7 Enterprise",
    bio: "Twenty years building enterprise systems and AI infrastructure at scale. Leads the firm\u2019s fifty-engineer delivery team. ISO 9001:2015.",
    longBio: [
      "Twenty years building enterprise systems and AI infrastructure across financial services, real estate, and sport. The technical end of the institution \u2014 platforms, infrastructure, and the engineering rigour that turns operating intent into operating reality.",
      "Prior work has included delivering enterprise platforms at scale \u2014 including the firm\u2019s first major deployment, a $100,000 enterprise CRM in UAE real estate, competing directly with established platforms and currently in production.",
      "At Valantai, Tom heads the Technology vertical and leads the firm\u2019s fifty-engineer delivery team. ISO 9001:2015 certified delivery. Five thousand six hundred and fifty programmes delivered to date.",
      "Active focus: scaling the Risk Engine, AI infrastructure programmes, and CRM deployments across UK and GCC enterprise clients.",
    ],
    meta: [
      { label: "Focus",         value: "Enterprise platforms \u00b7 AI infrastructure \u00b7 CRM architecture" },
      { label: "Delivery team", value: "50+ engineers \u00b7 ISO 9001:2015" },
      { label: "Sectors",       value: "Financial services \u00b7 Real estate \u00b7 Sport" },
    ],
  },
];

export function getOperatorBySlug(slug: string): Operator | undefined {
  return operators.find((op) => op.slug === slug);
}
