import Link from 'next/link';
import { SectionHead } from '@/components/primitives/SectionHead';
import { operators } from '@/content/operators';
import styles from './OperatorsZone.module.css';

export function OperatorsZone() {
  return (
    <section className={styles.zone} data-arrival id="operators">
      <SectionHead title="The Founding Partners" counter="Founded 2024" />
      <div className={styles.list}>
        {operators.map((op) => (
          <div key={op.slug} className={styles.row}>
            <span className={styles.num}>{op.number}</span>
            <div>
              <h3 className={styles.name}>
                <Link href={`/operators/${op.slug}`}>{op.name}</Link>
              </h3>
              <p className={styles.role}>{op.role}</p>
            </div>
            <p className={styles.bio}>{op.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
