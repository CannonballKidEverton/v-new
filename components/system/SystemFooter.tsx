'use client';

import { useEffect, useState } from 'react';
import styles from './SystemFooter.module.css';

export function SystemFooter() {
  const [edition, setEdition] = useState<string>('VLT/2026/—');

  useEffect(() => {
    const d = new Date();
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    setEdition(`VLT/${y}/${m}`);
  }, []);

  return (
    <footer className={styles.footer}>
      <span>Valantai</span>
      <span>LDN · DXB · NYC · RUH</span>
      <span>© 2026 · Edition {edition}</span>
    </footer>
  );
}
