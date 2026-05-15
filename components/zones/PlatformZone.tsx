import Link from 'next/link';
import { SectionHead } from '@/components/primitives/SectionHead';
import { divisions, TOTAL_DIVISIONS } from '@/content/divisions';
import styles from './PlatformZone.module.css';

export function PlatformZone() {
  return (
    <section className={styles.zone} data-arrival id="platform">
      <SectionHead
        title="Operating Divisions"
        counter={`${divisions.length} of ${TOTAL_DIVISIONS} shown`}
      />
      <div className={styles.list}>
        {divisions.map((d) => {
          const href = d.hasPage ? `/platform/${d.slug}` : '#';
          return (
            <Link key={d.slug} href={href} className={styles.row}>
              <span className={styles.num}>{d.number}</span>
              <span className={styles.name}>{d.name}</span>
              <span className={styles.desc}>{d.description}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
