import styles from './EditorialCallout.module.css';

interface EditorialCalloutProps {
  label?: string;
  items: string[];
  /** Visual variant: 'compact' (margin notes) or 'standalone' (page section) */
  variant?: 'compact' | 'standalone';
}

export function EditorialCallout({
  label,
  items,
  variant = 'compact',
}: EditorialCalloutProps) {
  return (
    <div className={`${styles.callout} ${styles[variant]}`}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <div className={styles.items}>
        {items.map((item, i) => (
          <p key={i} className={styles.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
