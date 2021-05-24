import styles from "./styles.module.css";

export function InfoSection({ title, value }) {
  return (
    <div className={styles.section}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
    </div>
  );
}