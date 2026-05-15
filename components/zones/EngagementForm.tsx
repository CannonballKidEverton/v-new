'use client';

import { useState } from 'react';
import styles from './EngagementForm.module.css';

interface FormState {
  name: string;
  role: string;
  context: string;
}

interface FiledState {
  ref: string;
}

function generateRef(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) {
    s += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `VLT/ENG/${y}/${m}/${s}`;
}

export function EngagementForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    role: '',
    context: '',
  });
  const [filed, setFiled] = useState<FiledState | null>(null);

  const isComplete =
    form.name.trim().length > 1 &&
    form.role.trim().length > 1 &&
    form.context.trim().length > 10;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    // In production: POST to a server action that emails the institution.
    // For now: client-only acknowledgement.
    setFiled({ ref: generateRef() });
  }

  if (filed) {
    return (
      <section className={styles.filed} data-arrival>
        <header className={styles.filedHead}>
          <span className={styles.filedStatus}>Introduction filed</span>
          <span className={styles.filedRef}>{filed.ref}</span>
        </header>
        <p className={styles.filedLead}>
          A senior counsel will be in touch within forty-eight hours. The
          introduction has entered the firm&rsquo;s active register and will be
          read by a principal, not a screening function.
        </p>
        <p className={styles.filedNote}>
          If the matter is urgent, please write directly to{' '}
          <a href="mailto:hello@valantai.com">hello@valantai.com</a> citing
          this reference.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.zone} data-arrival>
      <header className={styles.head}>
        <h2 className={styles.title}>By introduction</h2>
        <p className={styles.subtitle}>
          Three fields. No screening function. The firm reads its own
          correspondence.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="eng-name">
            <span className={styles.fNum}>F/01</span>
            <span className={styles.fText}>Your name</span>
          </label>
          <input
            id="eng-name"
            type="text"
            className={styles.input}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoComplete="name"
            placeholder="Full name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="eng-role">
            <span className={styles.fNum}>F/02</span>
            <span className={styles.fText}>Role and institution</span>
          </label>
          <input
            id="eng-role"
            type="text"
            className={styles.input}
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            autoComplete="organization-title"
            placeholder="e.g. Founder, Series A SaaS · London"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="eng-context">
            <span className={styles.fNum}>F/03</span>
            <span className={styles.fText}>Operating context</span>
          </label>
          <p className={styles.help}>
            Three sentences are sufficient. What you are building, where you
            currently sit, and what the next conversation should cover.
          </p>
          <textarea
            id="eng-context"
            className={styles.textarea}
            value={form.context}
            onChange={(e) => setForm({ ...form, context: e.target.value })}
            rows={6}
            placeholder="—"
            required
          />
        </div>

        <div className={styles.submit}>
          <span className={styles.submitNote}>
            All three required. The firm responds to every introduction within
            forty-eight hours.
          </span>
          <button
            type="submit"
            className={styles.button}
            disabled={!isComplete}
          >
            File introduction
          </button>
        </div>
      </form>
    </section>
  );
}
