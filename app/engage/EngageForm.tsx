'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { generateDiagnosticRef } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface FormState { name: string; role: string; context: string; }

const INITIAL: FormState = { name: '', role: '', context: '' };

const FIELDS = [
  { ref: 'F/01', name: 'name' as const,    label: 'Your name',              type: 'input',    placeholder: 'Full name', autocomplete: 'name',              help: '' },
  { ref: 'F/02', name: 'role' as const,    label: 'Role and institution',   type: 'input',    placeholder: 'e.g. Founder, Series A · London', autocomplete: 'organization-title', help: '' },
  { ref: 'F/03', name: 'context' as const, label: 'Operating context',      type: 'textarea', placeholder: '—', autocomplete: '', help: 'Three sentences are sufficient. What you are building, where you sit, and what the next conversation should cover.' },
] as const;

export function EngageForm() {
  const [form, setForm]   = useState<FormState>(INITIAL);
  const [filed, setFiled] = useState<string | null>(null);

  const isComplete =
    form.name.trim().length > 1 &&
    form.role.trim().length > 1 &&
    form.context.trim().length > 10;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    setFiled(generateDiagnosticRef('ENG'));
  }

  if (filed) {
    return (
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="py-[12vh] px-[var(--margin)]"
      >
        <header className="flex justify-between items-baseline flex-wrap gap-4 pb-5 mb-10 border-b border-hairline-2">
          <span className="t-section text-ink before:content-['·'] before:text-accent before:mr-3">
            Introduction filed
          </span>
          <span className="t-label text-ink-3">{filed}</span>
        </header>
        <p className="font-serif text-[clamp(1.2rem,1.6vw,1.5rem)] leading-relaxed text-ink max-w-[56ch] mb-8">
          A senior counsel will be in touch within forty-eight hours. The introduction
          has entered the firm's active register and will be read by a principal.
        </p>
        <p className="font-serif text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-ink-2 max-w-[56ch]">
          If the matter is urgent, write directly to{' '}
          <a href="mailto:hello@valantai.com" className="text-ink no-underline border-b border-hairline-2 hover:border-ink transition-colors duration-moderate">
            hello@valantai.com
          </a>{' '}
          citing this reference.
        </p>
      </motion.section>
    );
  }

  return (
    <section className="py-[8vh] px-[var(--margin)]">
      <header className="mb-16 max-w-[56ch]">
        <h2 className="t-display text-ink mb-7">By introduction</h2>
        <p className="font-serif italic text-[clamp(1.1rem,1.4vw,1.35rem)] leading-relaxed text-ink-2">
          Three fields. No screening function. The firm reads its own correspondence.
        </p>
      </header>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-14 max-w-[720px]">
        {FIELDS.map((f) => (
          <div key={f.name} className="flex flex-col">
            <label className="block mb-3.5" htmlFor={`engage-${f.name}`}>
              <span className="t-label text-ink-4 mr-3.5">{f.ref}</span>
              <span className="font-sans font-medium text-[clamp(1.05rem,1.3vw,1.2rem)] text-ink">
                {f.label}
              </span>
            </label>
            {f.help && (
              <p className="font-serif italic text-[13.5px] leading-relaxed text-ink-3 mb-4 max-w-[52ch]">
                {f.help}
              </p>
            )}
            {f.type === 'textarea' ? (
              <textarea
                id={`engage-${f.name}`}
                rows={6}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                required
                className={cn(
                  'bg-transparent border border-hairline-2 font-serif text-[17px] text-ink',
                  'px-5 py-4 resize-y min-h-[140px] leading-relaxed',
                  'placeholder:text-ink-4 placeholder:italic',
                  'focus:outline-none focus:border-accent transition-colors duration-reactive'
                )}
              />
            ) : (
              <input
                id={`engage-${f.name}`}
                type="text"
                placeholder={f.placeholder}
                autoComplete={f.autocomplete}
                value={form[f.name]}
                onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                required
                className={cn(
                  'bg-transparent border-0 border-b border-hairline-2',
                  'font-serif text-[17px] text-ink py-3.5',
                  'placeholder:text-ink-4 placeholder:italic',
                  'focus:outline-none focus:border-accent transition-colors duration-reactive'
                )}
              />
            )}
          </div>
        ))}

        <div className="flex flex-col gap-[18px] pt-10 border-t border-hairline-2">
          <p className="t-caption text-ink-3">
            All three required. The firm responds to every introduction within forty-eight hours.
          </p>
          <button
            type="submit"
            disabled={!isComplete}
            className={cn(
              'self-start t-caption text-ink px-9 py-5 border border-hairline-2',
              'transition-colors duration-moderate',
              'hover:bg-ink hover:text-bg hover:border-ink',
              'disabled:opacity-35 disabled:cursor-not-allowed',
              'disabled:hover:bg-transparent disabled:hover:text-ink disabled:hover:border-hairline-2'
            )}
          >
            File introduction
          </button>
        </div>
      </form>
    </section>
  );
}
