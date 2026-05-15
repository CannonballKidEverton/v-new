import { riskIntake, DOMAIN_REGISTRY, type DomainScores } from '@/content/riskDomains';

export type Answers = Record<string, string>;

export interface RankedDomain {
  ref: string;
  key: string;
  name: string;
  score: number;
  severity: 'high' | 'elevated' | 'moderate' | 'low';
  severityLabel: 'High' | 'Elevated' | 'Moderate' | 'Low';
}

function severity(score: number): RankedDomain['severity'] {
  if (score >= 7) return 'high';
  if (score >= 5) return 'elevated';
  if (score >= 3) return 'moderate';
  return 'low';
}

const SEVERITY_LABELS = {
  high: 'High', elevated: 'Elevated', moderate: 'Moderate', low: 'Low',
} as const;

function emptyScores(): DomainScores {
  return Object.fromEntries(Object.keys(DOMAIN_REGISTRY).map((k) => [k, 0]));
}

export function computeScores(answers: Answers): DomainScores {
  const scores = emptyScores();
  for (const section of riskIntake) {
    for (const q of section.questions) {
      const selected = answers[q.name];
      if (!selected) continue;
      const option = q.options.find((o) => o.value === selected);
      if (!option) continue;
      for (const [domain, weight] of Object.entries(option.scores)) {
        scores[domain] = (scores[domain] ?? 0) + (weight as number);
      }
    }
  }
  return scores;
}

export function rankExposures(scores: DomainScores, topN = 5): RankedDomain[] {
  return Object.entries(scores)
    .filter(([, s]) => (s ?? 0) > 0)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
    .slice(0, topN)
    .map(([key, score]) => {
      const sev = severity(score ?? 0);
      return {
        ref: key.replace('D', 'D/'),
        key,
        name: DOMAIN_REGISTRY[key] ?? key,
        score: score ?? 0,
        severity: sev,
        severityLabel: SEVERITY_LABELS[sev],
      };
    });
}
