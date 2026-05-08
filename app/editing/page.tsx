import styles from './page.module.css';

export default function Editing() {
  return (
    <>
      <section className="hero">
        <p className="hero-label">Editing</p>
        <h1 className="hero-title">Same world,<br />different<br />feeling.</h1>
        <p className="hero-sub">Editing isn't about fixing a photo — it's about deciding what emotion it should carry. These are six experiments in mood, tone, and intention.</p>
        <a href="https://dheepssupreme.vsco.site/" target="_blank" rel="noopener noreferrer" className={styles.vscoLink}>
          <span className={styles.vscoLabel}>View on</span>
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
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4502.JPEG" alt="Between Lines" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>01 — VSCO Edit</p>
          <h2 className={styles.editTitle}>"Between Lines"</h2>
          <p className={styles.editStory}>I looked up and saw structure where others saw sky. Stripped the color, kept the tension.</p>
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
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4194.JPEG" alt="Electric, Amplified" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>02 — VSCO Edit</p>
          <h2 className={styles.editTitle}>"Electric,<br />Amplified"</h2>
          <p className={styles.editStory}>Already stunning in real life — I just turned up the voltage a little.</p>
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
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_4109.JPEG" alt="Soft Proof" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>03 — VSCO Edit</p>
          <h2 className={styles.editTitle}>"Soft Proof"</h2>
          <p className={styles.editStory}>Some edits aren't about drama. This one was about stillness — warm, quiet, unhurried.</p>
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
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/IMG_0643.JPEG" alt="Infrastructure" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>04 — VSCO Edit</p>
          <h2 className={styles.editTitle}>"Infrastructure"</h2>
          <p className={styles.editStory}>Nobody photographs lamp posts. I did, in film grain, because ordinary things deserve a second look.</p>
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
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/editnovsco2.jpeg" alt="Overexposed Feelings" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>05 — Prequel Edit</p>
          <h2 className={styles.editTitle}>"Overexposed<br />Feelings"</h2>
          <p className={styles.editStory}>The sky was already on fire. I just made sure the edit matched the mood I was in.</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>Snapseed, Prequel</span></div>
        </div>
      </div>

      {/* 06 Cloud Golden */}
      <div className={`${styles.editEntry} ${styles.reverse}`}>
        <div className={styles.editImg}>
          <img src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/edit/editnovsco1.jpeg" alt="Cumulus" />
        </div>
        <div className={styles.editInfo}>
          <p className={styles.editNum}>06 — Snapseed Edit</p>
          <h2 className={styles.editTitle}>"Cumulus"</h2>
          <p className={styles.editStory}>Clouds moving fast, golden hour fading. I slowed everything down in post.</p>
          <div className={styles.toolBadge}><span className={styles.toolLabel}>Edited with</span><span className={styles.toolName}>Snapseed, Prequel</span></div>
        </div>
      </div>
    </>
  );
}
