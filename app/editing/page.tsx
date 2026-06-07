"use client";

import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';

export default function Editing() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.editing.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.editing.heroTitle }}></h1>
        <p className="hero-sub">{t.editing.heroSub}</p>
        <a href="https://dheepssupreme.vsco.site/" target="_blank" rel="noopener noreferrer" className={styles.vscoLink}>
          <span className={styles.vscoLabel}>{t.editing.vscoLabel}</span>
          <span className={styles.vscoBrand}>VSCO</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </section>

      <div className="divider"></div>

      {/* 01 Bars / Sky B&W */}
      <div className={styles.editEntry}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4502.JPEG"
            alt="Between Lines"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>01 — VSCO Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit1Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit1Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>VSCO</span></div>
          <div className={styles.editMeta}>
            <p className={styles.presetName}>B5 Pro / B&W Classic</p>
            <div className={styles.presetParams}>
              <span className={styles.param}>PRESET +12.0</span>
              <span className={styles.param}>EXPOSURE +3.0</span>
              <span className={styles.param}>CONTRAST +3.0</span>
              <span className={styles.param}>SHARPEN +3.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* 02 Butterfly */}
      <div className={`${styles.editEntry} ${styles.reverse}`}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4194.JPEG"
            alt="Electric, Amplified"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>02 — VSCO Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit2Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit2Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>VSCO</span></div>
          <div className={styles.editMeta}>
            <p className={styles.presetName}>World Wide Focus</p>
            <div className={styles.presetParams}>
              <span className={styles.param}>PRESET +12.0</span>
              <span className={styles.param}>EXPOSURE +0.5</span>
              <span className={styles.param}>SATURATION +0.8</span>
              <span className={styles.param}>CONTRAST +2.5</span>
              <span className={styles.param}>WB -1.4 +1.3</span>
              <span className={styles.param}>SHARPEN +4.5</span>
            </div>
          </div>
        </div>
      </div>

      {/* 03 White Flower */}
      <div className={styles.editEntry}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4109.JPEG"
            alt="Soft Proof"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>03 — VSCO Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit3Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit3Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>VSCO</span></div>
          <div className={styles.editMeta}>
            <p className={styles.presetName}>KK2 / Krochet Kids</p>
            <div className={styles.presetParams}>
              <span className={styles.param}>PRESET +12.0</span>
              <span className={styles.param}>EXPOSURE -0.5</span>
              <span className={styles.param}>SATURATION +0.3</span>
              <span className={styles.param}>CONTRAST +0.6</span>
              <span className={styles.param}>WB -0.7 +2.0</span>
              <span className={styles.param}>SHARPEN +2.7</span>
              <span className={styles.param}>VIGNETTE +6.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* 04 Street Lamp B&W */}
      <div className={`${styles.editEntry} ${styles.reverse}`}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_0643.JPEG"
            alt="Infrastructure"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>04 — VSCO Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit4Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit4Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>VSCO</span></div>
          <div className={styles.editMeta}>
            <p className={styles.presetName}>Kodak Tri-X 400</p>
            <div className={styles.presetParams}>
              <span className={styles.param}>PRESET +12.0</span>
              <span className={styles.param}>EXPOSURE -0.6</span>
              <span className={styles.param}>CONTRAST -2.0</span>
              <span className={styles.param}>TONE +6.3</span>
            </div>
          </div>
        </div>
      </div>

      {/* 05 Sunset Dramatic */}
      <div className={styles.editEntry}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/editnovsco2.jpeg"
            alt="Overexposed Feelings"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>05 — Prequel Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit5Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit5Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>Snapseed, Prequel</span></div>
        </div>
      </div>

      {/* 06 Cloud Golden */}
      <div className={`${styles.editEntry} ${styles.reverse}`}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/editnovsco1.jpeg"
            alt="Cumulus"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>06 — Snapseed Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit6Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit6Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>Snapseed, Prequel</span></div>
        </div>
      </div>

      {/* 07 Pink Flower Bee */}
      <div className={styles.editEntry}>
        <div className={styles.editImg}>
          <LazyImage
            src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_5020.JPG.jpeg"
            alt="Sweet Instant"
            aspectRatio="4/3"
          />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>07 — VSCO Edit</p>
          <h2 className={styles.editTitle} dangerouslySetInnerHTML={{ __html: t.editing.edit7Title }}></h2>
          <p className={styles.editStory}>{t.editing.edit7Story}</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>VSCO</span></div>
          <div className={styles.editMeta}>
            <p className={styles.presetName}>KX1 / Krochet Kids</p>
            <div className={styles.presetParams}>
              <span className={styles.param}>PRESET +12.0</span>
              <span className={styles.param}>EXPOSURE +0.4</span>
              <span className={styles.param}>SATURATION +0.8</span>
              <span className={styles.param}>CONTRAST +1.4</span>
              <span className={styles.param}>WB +0.0 -0.9</span>
              <span className={styles.param}>SHARPEN +4.4</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-container">
        <Link href="/photography" className="cta-button">
          {t.cta.nextPhotography} <span>{t.cta.arrow}</span>
        </Link>
      </div>
    </>
  );
}
