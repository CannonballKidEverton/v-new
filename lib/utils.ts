import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes safely — resolves conflicts, strips duplicates. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a UTC timestamp as HH:MM GMT. */
export function gmtTime(d: Date = new Date()): string {
  return (
    String(d.getUTCHours()).padStart(2, '0') +
    ':' +
    String(d.getUTCMinutes()).padStart(2, '0') +
    ' GMT'
  );
}

/** Format a UTC date as DD.MM.YYYY. */
export function todayDate(d: Date = new Date()): string {
  return (
    String(d.getUTCDate()).padStart(2, '0') +
    '.' +
    String(d.getUTCMonth() + 1).padStart(2, '0') +
    '.' +
    d.getUTCFullYear()
  );
}

/** Generate a Valantai document reference (VLT · YYYY · MM · XXXXX). */
export function generateDocRef(): string {
  const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let suffix = '';
  for (let i = 0; i < 5; i++) {
    suffix += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  const d = new Date();
  return `VLT · ${d.getUTCFullYear()} · ${String(d.getUTCMonth() + 1).padStart(2, '0')} · ${suffix}`;
}

/** Generate a diagnostic reference (VLT/RISK/YYYY/MM/XXXXXX). */
export function generateDiagnosticRef(prefix = 'RISK'): string {
  const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let suffix = '';
  for (let i = 0; i < 6; i++) {
    suffix += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `VLT/${prefix}/${y}/${m}/${suffix}`;
}
