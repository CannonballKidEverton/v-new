'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { manifestoLine, openingFoot } from '@/lib/motion';
import { gmtTime, todayDate, generateDocRef } from '@/lib/utils';

const LINES = [
  'The best operators',
  'don\u2019t write',
  'whitepapers.',
  'They build companies.',
];

export function OpeningZone() {
  const [docRef, setDocRef] = useState('VLT · — · — · —');
  const [time, setTime]     = useState('— GMT');
  const [date, setDate]     = useState('—');

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.01 });

  useEffect(() => {
    setDocRef(generateDocRef());
    setTime(gmtTime());
    setDate(todayDate());
    const id = setInterval(() => setTime(gmtTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-[var(--margin)] pt-[calc(var(--header)+11vh)] pb-[4vh] flex flex-col justify-between"
    >
      {/* Manifesto */}
      <h1
        className="t-manifesto text-ink mt-[2vh] mr-[-var(--margin)] pr-2"
        aria-label={LINES.join(' ')}
      >
        {LINES.map((line, i) => (
          <span key={i} className="block overflow-hidden" style={{ marginTop: i === 3 ? '0.45em' : undefined }}>
            <motion.span
              className="block"
              custom={i}
              variants={manifestoLine}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Document reference strip */}
      <motion.div
        variants={openingFoot}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex items-center flex-wrap gap-2.5 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-ink-3"
      >
        <span id="doc-ref">{docRef}</span>
        <span className="text-ink-4 opacity-60">·</span>
        <span>Issued {date}</span>
        <span className="text-ink-4 opacity-60">·</span>
        <span>{time}</span>
      </motion.div>

      {/* Radar dot — ambient, single instance on page */}
      <span
        className="absolute right-[var(--margin)] bottom-[4.5vh] w-[5px] h-[5px] rounded-full bg-accent animate-radar"
        aria-hidden="true"
      />
    </section>
  );
}
