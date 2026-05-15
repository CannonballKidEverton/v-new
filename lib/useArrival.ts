'use client';

import { useEffect } from 'react';

/**
 * Adds `in-view` class to any element bearing `data-arrival` once it enters
 * the viewport. Idempotent — only runs once per element.
 *
 * Pair with the CSS in globals.css: [data-arrival] { opacity: 0; ... }
 */
export function useArrival(rootMargin = '0px 0px -8% 0px', threshold = 0.12) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin, threshold }
    );
    const els = document.querySelectorAll('[data-arrival]:not(.in-view)');
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootMargin, threshold]);
}
