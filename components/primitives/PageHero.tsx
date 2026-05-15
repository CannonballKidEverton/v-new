'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { gmtTime, todayDate, generateDocRef } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  index: string;
  title: string;
  subtitle: string;
  refPrefix: string;
  variant?: 'division' | 'profile';
  className?: string;
}

export function PageHero({
  index,
  title,
  subtitle,
  refPrefix,
  variant = 'division',
  className,
}: PageHeroProps) {
  const [docRef, setDocRef] = useState('VLT · — · — · —');
  const [time, setTime]     = useState('— GMT');
  const [date, setDate]     = useState('—');

  useEffect(() => {
    setDocRef(generateDocRef());
    setTime(gmtTime());
    setDate(todayDate());
    const id = setInterval(() => setTime(gmtTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={cn(
        'min-h-[70vh] px-[var(--margin)] pt-[calc(var(--header)+14vh)] pb-[10vh]',
        'flex flex-col justify-center',
        className
      )}
    >
      <p className="t-label text-ink-3 mb-8">{index}</p>

      <h1
        className={cn(
          'text-ink mb-7 mr-[-var(--margin)]',
          variant === 'division' ? 't-display' : 't-display-profile'
        )}
      >
        {title}
      </h1>

      <p className="font-serif italic text-[clamp(1.2rem,1.8vw,1.65rem)] leading-[1.4] text-ink-2 max-w-[38ch] mb-14">
        {subtitle}
      </p>

      <div className="flex gap-2.5 flex-wrap t-label text-ink-4">
        <span>{docRef}</span>
        <span>·</span>
        <span>Issued {date}</span>
        <span>·</span>
        <span>{time}</span>
      </div>
    </motion.section>
  );
}
