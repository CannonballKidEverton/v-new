import Link from 'next/link';
import { StatusNode } from './StatusNode';
import { PrimaryNav } from './PrimaryNav';
import styles from './SystemHeader.module.css';

export function SystemHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          Valantai
        </Link>
        <PrimaryNav />
        <StatusNode />
      </div>
    </header>
  );
}
