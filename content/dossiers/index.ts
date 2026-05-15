export interface DossierMeta {
  ref: string;
  series: string;
  issued: string;
  reading: string;
  authoredBy: string;
}

export interface DossierSection {
  ref: string;
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface Dossier {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  meta: DossierMeta;
  abstract: string;
  sections: DossierSection[];
  references: string[];
}

export const dossiers: Dossier[] = [
  {
    slug: "twelve-domains",
    number: "DOS/001",
    title: "The Twelve Domains",
    subtitle: "Why the institution scores companies along twelve operational axes, and what those axes have come to mean in practice.",
    meta: {
      ref: "DOS/001",
      series: "Operating Intelligence",
      issued: "May 2026",
      reading: "12-minute read",
      authoredBy: "The Valantai Risk Practice",
    },
    abstract:
      "Most diagnostic instruments score companies against a generic checklist. The Risk Engine was built from a narrower premise: that the exposures most likely to determine a company\u2019s next twelve months sit inside a small, defensible set of twelve domains. This dossier explains the twelve, why each is on the list, and how the practice has come to read them.",
    sections: [
      {
        ref: "\u00a7 01",
        heading: "The premise",
        paragraphs: [
          "Operational risk frameworks tend to fail in one of two directions. Either they expand into exhaustive checklists \u2014 hundreds of items, weighted equally, surfaced together \u2014 which is unusable in any meaningful sense. Or they collapse into three or four high-level categories that confirm what the company already knows.",
          "The Risk Engine sits between those failures. Twelve is the smallest number of axes that captures the operational shape of a company across stage, sector, and structure; it is also the largest number that an operator can hold in working memory while making a decision. Every domain on the list has, at some point in the partners\u2019 combined operating career, been the domain that determined an outcome.",
          "What follows is not a definitive taxonomy. It is the institution\u2019s working set, calibrated quarterly, and the explanation of why each one is on it.",
        ],
        callout: "Twelve is the largest number an operator can hold in working memory.",
      },
      {
        ref: "\u00a7 02",
        heading: "Where the twelve sit",
        paragraphs: [
          "The twelve cluster into four operating axes: position (Key person, Customer concentration, Capital & runway), substrate (Technology dependency, Compliance & regulatory, IP & legal structure), motion (AI maturity, Supply chain, Market & competitive), and governance (Talent & culture, Financial controls, ESG & reputational).",
          "Each axis describes a class of failure. Position failures are direct: the company runs out of cash, the founder leaves, the top customer churns. Substrate failures are slower but heavier: the platform deprecates, the regulator changes the regime, the IP is found to be unowned. Motion failures are competitive: a better-resourced entrant arrives, the category commoditises. Governance failures are structural: the team will not stay, the reporting will not satisfy a board.",
          "A company in serious trouble usually fails in more than one axis simultaneously. A company in early-stage trouble usually fails in only one, but loudly. The instrument is designed to surface both shapes.",
        ],
      },
      {
        ref: "\u00a7 03",
        heading: "What scoring means in practice",
        paragraphs: [
          "A score in any domain is an estimate of the likelihood that the exposure becomes a determining factor in the next twelve months \u2014 calibrated against companies of the same stage, sector, and capital position. It is not a probability of failure.",
          "The instrument therefore does two things a checklist cannot. It ranks exposures by likelihood and weight, not severity in isolation; and it surfaces the combinations \u2014 pairs of domains that, scored together, indicate a different conversation than either domain alone would warrant.",
          "In practice, the top three exposures account for roughly seventy per cent of the institutional attention given to a company. The lower-ranked exposures inform the standing record but rarely change the next mandate.",
        ],
        callout: "A score is not a probability of failure. It is an estimate of which exposure will determine the year.",
      },
      {
        ref: "\u00a7 04",
        heading: "The calibration",
        paragraphs: [
          "Weights on each domain are calibrated quarterly against the institution\u2019s active register. As mandates accumulate, the relative weight of certain domains drifts \u2014 Customer concentration has steadily increased over the past four quarters as the firm\u2019s commerce engagements grew; Capital & runway has held its weight throughout.",
          "The twelve themselves are not currently slated for change. Each was introduced because the absence of it had a cost; none has yet earned removal. This dossier will be reissued when that changes.",
        ],
      },
    ],
    references: [
      "Internal calibration record \u00b7 Q1 2026 \u00b7 Restricted",
      "Active mandate aggregate \u00b7 17 active mandates \u00b7 Rolling update",
      "Sector benchmarking dataset \u00b7 UK \u00b7 GCC \u00b7 US \u00b7 Restricted",
    ],
  },
];

export function getDossierBySlug(slug: string): Dossier | undefined {
  return dossiers.find((d) => d.slug === slug);
}

export function getAllDossierSlugs(): string[] {
  return dossiers.map((d) => d.slug);
}
