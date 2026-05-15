'use client';

import { useEffect, useState } from 'react';
import { SectionHead } from '@/components/primitives/SectionHead';
import { StatusTag } from '@/components/primitives/StatusTag';
import { mandates, TOTAL_ACTIVE_MANDATES } from '@/content/mandates';
import styles from './MandateLedger.module.css';

function gmtTime(): string {
  const d = new Date();
  return (
    String(d.getUTCHours()).padStart(2, '0') +
    ':' +
    String(d.getUTCMinutes()).padStart(2, '0') +
    ' GMT'
  );
}

function todayDate(): string {
  const d = new Date();
  return (
    String(d.getUTCDate()).padStart(2, '0') +
    '.' +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    '.' +
    d.getUTCFullYear()
  );
}

export function MandateLedger() {
  const [time, setTime] = useState('— GMT');
  const [date, setDate] = useState('—');

  useEffect(() => {
    setTime(gmtTime());
    setDate(todayDate());
    const interval = setInterval(() => setTime(gmtTime()), 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.zone} data-arrival id="ledger">
      <SectionHead
        title="Active Mandate Ledger"
        counter={`${TOTAL_ACTIVE_MANDATES} / ${TOTAL_ACTIVE_MANDATES} Active`}
        offsetClassName={styles.offset}
      />
      <table
        className={styles.table}
        aria-label={`Active mandate register, ${mandates.length} of ${TOTAL_ACTIVE_MANDATES} mandates shown`}
      >
        <thead>
          <tr>
            <th className={styles.colRef}>Reference</th>
            <th className={styles.colCity}>Jurisdiction</th>
            <th className={styles.colMandate}>Mandate</th>
            <th className={styles.colSector}>Sector</th>
            <th className={styles.colNum}>Position</th>
            <th className={styles.colStatus}>Status</th>
          </tr>
        </thead>
        <tbody>
          {mandates.map((m) => (
            <tr key={m.reference}>
              <td className={styles.colRef}>{m.reference}</td>
              <td className={styles.colCity}>{m.jurisdiction}</td>
              <td className={styles.colMandate}>{m.mandate}</td>
              <td className={styles.colSector}>{m.sector}</td>
              <td
                className={`${styles.colNum} ${
                  m.position === null ? styles.undisclosed : ''
                }`}
              >
                {m.position ?? '—'}
              </td>
              <td className={styles.colStatus}>
                <StatusTag state={m.status}>{m.statusLabel}</StatusTag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`${styles.foot} ${styles.offset}`}>
        <span>
          {mandates.length} of {TOTAL_ACTIVE_MANDATES} mandates shown
        </span>
        <span className={styles.sep}>·</span>
        <span>Balance withheld under NDA</span>
        <span className={styles.sep}>·</span>
        <span>
          Ledger refreshed {time} · {date}
        </span>
      </div>
    </section>
  );
}
