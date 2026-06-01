"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import HEICImage from '@/components/HEICImage';

export default function Photography() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.photography.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.photography.heroTitle }}></h1>
        <p className="hero-sub">{t.photography.heroSub}</p>
      </section>

      <div className="divider"></div>

      {/* 01 B&W Portrait */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4498.JPEG" alt="Still" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>01 — Portrait</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.stillTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.stillStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Sony ILCE-7M2</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>50mm f/1.8</span></p>
            <p className={styles.photoMetaItem}>SETTINGS <span>1/30s · ISO 5000</span></p>
          </div>
        </div>
      </div>

      {/* 02 Volcano Milky Way */}
      <div className={`${styles.photoEntry} ${styles.reverse}`}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4494.JPEG" alt="Breathing Fire, Wearing Stars" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>02 — Astrophotography</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.astroTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.astroStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Samsung Galaxy S24 FE</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>23mm f/1.8</span></p>
            <p className={styles.photoMetaItem}>SETTINGS <span>30.0s · ISO 3200</span></p>
          </div>
        </div>
      </div>

      {/* 03 Water Hyacinth */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4499.JPEG" alt="Found in the Ordinary" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>03 — Macro / Nature</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.natureTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.natureStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone X</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>23mm f/1.8</span></p>
          </div>
        </div>
      </div>

      {/* 04 Orange Cat */}
      <div className={`${styles.photoEntry} ${styles.reverse}`}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4500.JPEG" alt="Unbothered" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>04 — Street / Candid</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.streetTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.streetStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone X</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>28mm f/1.8</span></p>
            <p className={styles.photoMetaItem}>SETTINGS <span>1/353s · ISO 20</span></p>
          </div>
        </div>
      </div>

      {/* 05 Dragonfly */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4497.JPEG" alt="Alien" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>05 — Macro</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.macroTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.macroStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone X</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>28mm f/1.8</span></p>
          </div>
        </div>
      </div>

      {/* 06 Kitten */}
      <div className={`${styles.photoEntry} ${styles.reverse}`}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4501.JPEG" alt="New Here" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>06 — Portrait / Animal</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.animalTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.animalStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone X</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>28mm f/1.8</span></p>
            <p className={styles.photoMetaItem}>SETTINGS <span>1/30s · ISO 32</span></p>
          </div>
        </div>
      </div>

      {/* 07 Volcano with Person */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4495.JPEG" alt="Small" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>07 — Landscape / Night</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.landscapeTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.landscapeStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Samsung Galaxy S24 FE</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>LENS <span>23mm f/1.8</span></p>
            <p className={styles.photoMetaItem}>SETTINGS <span>30.0s · ISO 500</span></p>
          </div>
        </div>
      </div>

      {/* 08 Horse */}
      <div className={`${styles.photoEntry} ${styles.reverse}`}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/img%20kuda.jpeg" alt="Grounded" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>08 — Landscape / Wildlife</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.horseTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.horseStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Samsung S21 FE</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>RESOLUTION <span>4000 × 3000</span></p>
          </div>
        </div>
      </div>

      {/* 09 Yellow Flower Bee */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <HEICImage src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4724.HEIC" alt="Living Gold" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>09 — Macro / Wildlife</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.yellowBeeTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.yellowBeeStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone</span></div>
        </div>
      </div>

      {/* 10 Pink Flower Bee */}
      <div className={`${styles.photoEntry} ${styles.reverse}`}>
        <div className={styles.photoImg}>
          <HEICImage src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4739.HEIC" alt="Petal Symphony" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>10 — Macro / Nature</p>
          <h2 className={styles.photoTitle} dangerouslySetInnerHTML={{ __html: t.photography.pinkBeeTitle }}></h2>
          <p className={styles.photoStory}>{t.photography.pinkBeeStory}</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Apple iPhone</span></div>
        </div>
      </div>

      <div className="cta-container">
        <Link href="/tiktok" className="cta-button">
          {t.cta.nextTiktok} <span>{t.cta.arrow}</span>
        </Link>
      </div>
    </>
  );
}
