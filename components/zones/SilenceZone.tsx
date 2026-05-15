import styles from './SilenceZone.module.css';

export function SilenceZone() {
  return (
    <section className={styles.silence} data-arrival aria-hidden="true">
      <span className={styles.mark}>The record stands.</span>
    </section>
  );
}
