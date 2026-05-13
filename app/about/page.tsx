"use client";

import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.about.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.about.heroTitle }}></h1>
        <p className="hero-sub">{t.about.heroSub}</p>
      </section>

      <div className="divider"></div>

      <div className={styles.aboutContent}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrap}>
            <img src="/IMG_3956.JPEG" alt="Dheo Putranta Pandia" className={styles.profileImage} />
          </div>
          <div className={styles.bio}>
            <h2 className={styles.name}>Dheo Putranta Pandia</h2>
            <p className={styles.title}>{t.about.role}</p>
            <p className={styles.description}>
              {t.about.description}
            </p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillTitle}>{t.about.focusArea}</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>Photography</span>
              <span className={styles.tag}>Color Grading</span>
              <span className={styles.tag}>Video Editing</span>
              <span className={styles.tag}>Machine Learning</span>
              <span className={styles.tag}>Content Creation</span>
            </div>
          </div>
          
          <div className={styles.skillGroup}>
            <h3 className={styles.skillTitle}>{t.about.connect}</h3>
            <div className={styles.links}>
              <a href="https://www.tiktok.com/@groovyelines?_r=1&_t=ZS-968fPCURgTV" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                TikTok @groovyelines
              </a>
              <a href="https://dheepssupreme.vsco.site/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                VSCO Gallery
              </a>
              <a href="https://github.com/dheepssupreme" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
