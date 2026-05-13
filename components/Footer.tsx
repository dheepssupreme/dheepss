"use client";
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <p className={styles.footerName}>Dheo Putranta Pandia · dheepssupreme</p>
      <p className={styles.footerTag}>{t.footer.tag}</p>
    </footer>
  );
}
