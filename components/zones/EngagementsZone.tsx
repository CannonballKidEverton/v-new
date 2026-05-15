'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { StatusTag } from '@/components/primitives/StatusTag';
import { ENGAGEMENT_POOL, INITIAL_ENGAGEMENTS, TOTAL_ACTIVE_MANDATES, type Engagement } from '@/content/engagements';

const ROTATION_INTERVAL = 22_000;
const FADE_DURATION = 380;

export function EngagementsZone() {
  const [rows, setRows] = useState<Engagement[]>(INITIAL_ENGAGEMENTS);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);
  const hovering = useRef(false);
  const rowsRef  = useRef(rows);
  rowsRef.current = rows;

  const rotateOne = useCallback(() => {
    if (hovering.current) return;
    const currentRefs = rowsRef.current.map((r) => r.ref);
    const pool = ENGAGEMENT_POOL.filter((e) => !currentRefs.includes(e.ref));
    if (!pool.length) return;

    const slot = Math.floor(Math.random() * rowsRef.current.length);
    const next  = pool[Math.floor(Math.random() * pool.length)];

    setFadingIndex(slot);
    setTimeout(() => {
      setRows((prev) => {
        const updated = [...prev];
        updated[slot] = next;
        return updated;
      });
      setFadingIndex(null);
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const id = setInterval(rotateOne, ROTATION_INTERVAL);
    return () => clearInterval(id);
  }, [rotateOne]);

  return (
    <ArrivalWrapper as="section" className="py-[10vh]" id="engagements">
      {/* Section head — col-3 inset */}
      <div style={{ marginLeft: 'var(--col-3)', marginRight: 'var(--margin)' }}>
        <SectionHead title="Current Engagements" counter={`${TOTAL_ACTIVE_MANDATES} active`} />
      </div>

      {/* Table — horizontal scroll on mobile */}
      <div
        className="overflow-x-auto -webkit-overflow-scrolling-touch"
        style={{ marginLeft: 'var(--col-3)', marginRight: 'var(--margin)' }}
      >
      <table
        className="border-collapse font-mono w-full"
        style={{
          minWidth: '540px',
          tableLayout: 'fixed',
        }}
        onMouseEnter={() => { hovering.current = true; }}
        onMouseLeave={() => { hovering.current = false; }}
        aria-label={`Current engagement register, ${rows.length} of ${TOTAL_ACTIVE_MANDATES} shown`}
      >
        <thead>
          <tr>
            {['Reference', 'Jurisdiction', 'Engagement', 'Sector', 'Status'].map((h, i) => (
              <th
                key={h}
                className="t-label text-ink-3 text-left pb-[18px] pr-6 border-b border-hairline"
                style={{ width: ['14%','16%','36%','18%','16%'][i] }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <motion.tr
              key={`${row.ref}-${idx}`}
              animate={{ opacity: fadingIndex === idx ? 0 : 1 }}
              transition={{ duration: FADE_DURATION / 1000 }}
              className="border-b border-hairline last:border-0"
            >
              <td className="text-[13.5px] text-ink-2 py-[22px] pr-6">{row.ref}</td>
              <td className="text-[13.5px] text-ink-2 py-[22px] pr-6">{row.city}</td>
              <td className="text-[13.5px] text-ink   py-[22px] pr-6">{row.mandate}</td>
              <td className="text-[13.5px] text-ink-2 py-[22px] pr-6 hidden sm:table-cell">{row.sector}</td>
              <td className="text-[13.5px] text-ink-2 py-[22px]">
                <StatusTag state={row.status}>{row.statusLabel}</StatusTag>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Footer */}
      <p
        className="t-label text-ink-3 pt-[22px] border-t border-hairline"
        style={{ marginLeft: 'var(--col-3)', marginRight: 'var(--margin)' }}
      >
        {rows.length} of {TOTAL_ACTIVE_MANDATES} engagements shown. Remaining held under confidentiality.
      </p>
    </ArrivalWrapper>
  );
}
