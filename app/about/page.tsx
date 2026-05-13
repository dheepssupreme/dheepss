"use client";

import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

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

      <div className={styles.aboutContent} style={{ paddingBottom: '1rem' }}>
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
      </div>

      <div className="divider"></div>

      {/* === RESUME SECTION (EDUCATION & EXPERIENCE) === */}
      <section className={styles.resumeSection}>
        <div className={styles.resumeHeader}>
          <h3>{t.about.resumeLabel}</h3>
        </div>
        
        <div className={styles.resumeList}>
          {/* Pendidikan */}
          <div className={styles.resumeItem}>
            <div className={styles.resumeTime}>{t.about.resumeEduTime}</div>
            <div className={styles.resumeContent}>
              <div className={styles.resumeHeaderRow}>
                <img src="/logo_unpri.png" alt="UNPRI Logo" className={styles.resumeLogo} />
                <h4 className={styles.resumeInstitution}>{t.about.resumeEduTitle}</h4>
              </div>
              <p className={styles.resumeRole}>{t.about.resumeEduRole}</p>
              <p className={styles.resumeDesc}>{t.about.resumeEduDesc}</p>
            </div>
          </div>
          
          {/* Infinity */}
          <div className={styles.resumeItem}>
            <div className={styles.resumeTime}>{t.about.resumeInfTime}</div>
            <div className={styles.resumeContent}>
              <div className={styles.resumeHeaderRow}>
                <img src="/logo_infinity.jpg" alt="Infinity Logo" className={styles.resumeLogo} />
                <h4 className={styles.resumeInstitution}>{t.about.resumeInfTitle}</h4>
              </div>
              <p className={styles.resumeRole}>{t.about.resumeInfRole}</p>
              <p className={styles.resumeDesc}>{t.about.resumeInfDesc}</p>
            </div>
          </div>

          {/* UNPRI ESPORT */}
          <div className={styles.resumeItem}>
            <div className={styles.resumeTime}>{t.about.resumeEspTime}</div>
            <div className={styles.resumeContent}>
              <div className={styles.resumeHeaderRow}>
                <img src="/logo_unpri_esport.jpg" alt="UNPRI Esport Logo" className={styles.resumeLogo} />
                <h4 className={styles.resumeInstitution}>{t.about.resumeEspTitle}</h4>
              </div>
              <p className={styles.resumeRole}>{t.about.resumeEspRole}</p>
              <p className={styles.resumeDesc}>{t.about.resumeEspDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <div className={styles.aboutContent} style={{ paddingTop: '4rem' }}>
        <div className={styles.skillsSection} style={{ borderTop: 'none', paddingTop: 0 }}>
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

      <div className="cta-container">
        <Link href="/video-editor" className="cta-button">
          {t.cta.nextVideoEditor} <span>{t.cta.arrow}</span>
        </Link>
      </div>
    </>
  );
}
