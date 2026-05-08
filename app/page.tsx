import Image from 'next/image';
import styles from './page.module.css';

export default function Photography() {
  return (
    <>
      <section className="hero">
        <p className="hero-label">Photography</p>
        <h1 className="hero-title">Through<br />the lens,<br />my world.</h1>
        <p className="hero-sub">I shoot what catches me off guard — stillness, light, and small things most people walk past. These are nine of those moments.</p>
      </section>

      <div className="divider"></div>

      {/* 01 B&W Portrait */}
      <div className={styles.photoEntry}>
        <div className={styles.photoImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/IMG_4498.JPEG" alt="Still" />
        </div>
        <div className={styles.photoInfo}>
          <p className={styles.photoNum}>01 — Portrait</p>
          <h2 className={styles.photoTitle}>"Still"</h2>
          <p className={styles.photoStory}>Some moments don't need color to feel real. This was one of those nights — quiet, unposed, just me and the lens.</p>
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
          <h2 className={styles.photoTitle}>"Breathing Fire,<br />Wearing Stars"</h2>
          <p className={styles.photoStory}>Sinabung never sleeps. I pointed my camera up and realized the sky was just as restless.</p>
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
          <h2 className={styles.photoTitle}>"Found in<br />the Ordinary"</h2>
          <p className={styles.photoStory}>This flower grows in water no one looks at twice. I did.</p>
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
          <h2 className={styles.photoTitle}>"Unbothered"</h2>
          <p className={styles.photoStory}>He saw me. He didn't care. I took the shot anyway.</p>
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
          <h2 className={styles.photoTitle}>"Alien"</h2>
          <p className={styles.photoStory}>The closer you look, the stranger the world gets.</p>
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
          <h2 className={styles.photoTitle}>"New Here"</h2>
          <p className={styles.photoStory}>Everything was still new to her. Eyes wide, curious, unafraid.</p>
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
          <h2 className={styles.photoTitle}>"Small"</h2>
          <p className={styles.photoStory}>Standing in front of Sinabung at midnight made me feel exactly that.</p>
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
          <h2 className={styles.photoTitle}>"Grounded"</h2>
          <p className={styles.photoStory}>Out in the open field, nothing was in a hurry. Just a horse, the grass, and a sky that couldn't make up its mind.</p>
          <div className={styles.shotOn}><span className={styles.shotOnLabel}>Shot on</span><span className={styles.shotOnDevice}>Samsung S21 FE</span></div>
          <div className={styles.photoMeta}>
            <p className={styles.photoMetaItem}>RESOLUTION <span>4000 × 3000</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
