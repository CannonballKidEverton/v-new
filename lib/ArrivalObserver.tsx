'use client';

import { useArrival } from './useArrival';

/**
 * Activates the arrival observer for any page that contains
 * `data-arrival` elements. Render once near the page root.
 *
 * Server components can compose with this — see app/page.tsx.
 */
export function ArrivalObserver() {
  useArrival();
  return null;
}
