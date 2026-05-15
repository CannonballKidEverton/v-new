'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { computeScores, rankExposures, type Answers, type RankedDomain } from '@/lib/scoring';
import { riskIntake, REQUIRED_QUESTIONS, type RiskQuestion } from '@/content/riskDomains';
import { generateDiagnosticRef } from '@/lib/utils';
import { cn } from '@/lib/utils';

const SEVERITY_COLOUR: Record<string, string> = {
  high: 'text-accent',
  elevated: 'text-ink',
  moderate: 'text-ink-2',
  low: 'text-ink-3',
};

function Question({
  question,
  selected,
  onSelect,
}: {
  question: RiskQuestion;
  selected?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2">
        <span className="t-label text-ink-4 mr-3.5">{question.ref}</span>
        <span className="font-sans font-medium text-[clamp(1.05rem,1.3vw,1.2rem)] tracking-[-0.005em] text-ink leading-snug">
          {question.question}
        </span>
      </legend>
      {question.help && (
        <p className="font-serif italic text-[13.5px] leading-relaxed text-ink-3 mb-6 max-w-[52ch]">
          {question.help}
        </p>
      )}

      {question.type === 'radio' ? (
        <div className="flex flex-col gap-px bg-hairline border border-hairline">
          {question.options.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                'flex items-center gap-4 px-[22px] py-4 cursor-pointer',
                'bg-bg transition-colors duration-reactive',
                selected === opt.value ? 'bg-bg-2' : 'hover:bg-bg-2'
              )}
            >
              <input
                type="radio"
                name={question.name}
                value={opt.value}
                checked={selected === opt.value}
                onChange={() => onSelect(opt.value)}
                className="sr-only"
              />
              <span
                className={cn(
                  'w-[13px] h-[13px] rounded-full border flex-shrink-0',
                  'transition-colors duration-reactive',
                  selected === opt.value
                    ? 'border-accent bg-accent'
                    : 'border-hairline-2 bg-transparent'
                )}
              />
              <span className="font-serif text-[15.5px] leading-snug text-ink-2">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      ) : (
        <select
          name={question.name}
          value={selected ?? ''}
          onChange={(e) => onSelect(e.target.value)}
          className={cn(
            'w-full max-w-[360px] bg-transparent border-0 border-b border-hairline-2',
            'py-3.5 font-serif text-[17px] text-ink appearance-none',
            'focus:outline-none focus:border-accent',
            'transition-colors duration-reactive'
          )}
        >
          <option value="">— Select —</option>
          {question.options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      )}
    </fieldset>
  );
}

function FiledOutput({ ranking, diagRef }: { ranking: RankedDomain[]; diagRef: string }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="py-[12vh] px-[var(--margin)]"
      id="output"
    >
      <header className="flex justify-between items-baseline flex-wrap gap-4 pb-5 mb-10 border-b border-hairline-2">
        <span className="t-section text-ink before:content-['·'] before:text-accent before:mr-3">
          Diagnostic filed
        </span>
        <span className="t-label text-ink-3">{diagRef}</span>
      </header>

      <p className="t-abstract text-ink max-w-[56ch] mb-12">
        The intake has been scored across twelve domains. The five exposures most likely
        to determine the next twelve months are surfaced below.
      </p>

      <div className="border-t border-hairline mb-14">
        {ranking.map((r, i) => (
          <div key={r.key} className="grid grid-cols-[48px_1fr_auto_auto] items-center gap-6 py-5 border-b border-hairline">
            <span className="t-label text-ink-4">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-mono text-[13px]">
              <span className="text-ink-3 mr-3">{r.ref}</span>
              <span className="text-ink">{r.name}</span>
            </span>
            <span className="t-label text-ink-3 hidden sm:block">Weight {r.score}</span>
            <span className={cn('t-caption min-w-[80px] text-right', SEVERITY_COLOUR[r.severity])}>
              {r.severityLabel}
            </span>
          </div>
        ))}
      </div>

      <p className="font-serif text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-ink-2 max-w-[64ch] mb-12">
        A senior counsel will be in touch within forty-eight hours to walk through the
        surfaced exposures and the operational pathway. The full diagnostic — sector
        benchmarking, mitigation sequencing, and the standing dashboard — is delivered
        under engagement.
      </p>
      <p className="t-label text-ink-4">
        Reference filed · Twelve domains, weighted · Output scored against position,
        capital, customer, and governance signals only.
      </p>
    </motion.section>
  );
}

export function RiskEngineForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [filed, setFiled]     = useState<{ ref: string; ranking: RankedDomain[] } | null>(null);

  const answeredCount = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);
  const isComplete = answeredCount >= REQUIRED_QUESTIONS;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    const scores  = computeScores(answers);
    const ranking = rankExposures(scores, 5);
    setFiled({ ref: generateDiagnosticRef(), ranking });
    requestAnimationFrame(() =>
      document.getElementById('output')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
  }

  if (filed) return <FiledOutput ranking={filed.ranking} diagRef={filed.ref} />;

  return (
    <section className="py-[12vh] px-[var(--margin)]" id="intake">
      {/* Head */}
      <header className="flex flex-wrap justify-between items-baseline gap-4 pb-5 mb-7 border-b border-hairline-2">
        <div className="flex items-baseline gap-6 flex-wrap">
          <h2 className="t-section text-ink">Diagnostic Intake</h2>
          <span className="t-label text-ink-3">
            <span className="text-accent">{answeredCount}</span> / {REQUIRED_QUESTIONS} answered
          </span>
        </div>
        <span className="t-label text-ink-3">Filed under VLT/RISK</span>
      </header>

      <p className="t-lead text-ink-2 max-w-[64ch] mb-16">
        The intake captures the company's position across four operating axes. Choose the
        closest descriptor in each case; the instrument is not asking for precision.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[72px]">
        {riskIntake.map((section) => (
          <div key={section.marker} className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,8fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-6">
            {/* Section label */}
            <div className="lg:sticky lg:top-[calc(var(--header)+24px)] self-start">
              <span className="t-label text-ink-4 block mb-3">{section.marker}</span>
              <h3 className="font-sans font-medium text-[clamp(1.2rem,1.7vw,1.55rem)] tracking-[-0.015em] text-ink leading-tight mb-4">
                {section.title}
              </h3>
              <p className="font-serif italic text-[14px] leading-relaxed text-ink-3 max-w-[24ch]">
                {section.note}
              </p>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-14">
              {section.questions.map((q) => (
                <Question
                  key={q.name}
                  question={q}
                  selected={answers[q.name]}
                  onSelect={(v) => setAnswers((prev) => ({ ...prev, [q.name]: v }))}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Submit */}
        <div className="flex flex-col gap-[18px] mt-4 pt-14 border-t border-hairline-2">
          <p className="t-caption text-ink-3">
            {isComplete ? 'All thirteen captured.' : 'All thirteen required.'}{' '}
            No contact is made without{' '}
            <span className="text-accent">your introduction</span>.
          </p>
          <button
            type="submit"
            disabled={!isComplete}
            className={cn(
              'self-start t-caption text-ink px-9 py-5',
              'border border-hairline-2',
              'transition-colors duration-moderate',
              'hover:bg-ink hover:text-bg hover:border-ink',
              'disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-hairline-2'
            )}
          >
            File diagnostic
          </button>
        </div>
      </form>
    </section>
  );
}
