"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Nav.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.navLogo}>dheepssupreme <span>/ portfolio</span></div>
        <div className={styles.navRight}>
          <button className={styles.langSwitch} onClick={toggleLanguage} aria-label="Toggle language">
            {language === 'id' ? 'ID' : 'EN'}
          </button>
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
              ) : (
                <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.photography}</Link>
        <Link href="/editing" className={pathname === '/editing' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.editing}</Link>
        <Link href="/video-editor" className={pathname === '/video-editor' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.videoEditor}</Link>
        <Link href="/coding" className={pathname === '/coding' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.coding}</Link>
        <Link href="/tiktok" className={pathname === '/tiktok' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.tiktok}</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''} onClick={() => setIsOpen(false)}>{t.nav.about}</Link>
      </div>
    </nav>
  );
}
