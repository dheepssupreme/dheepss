"use client";

import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Coding() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.coding.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.coding.heroTitle }}></h1>
        <p className="hero-sub">{t.coding.heroSub}</p>
      </section>

      <div className="divider"></div>

      {/* Project Overview — logo centered & big */}
      <div className={styles.projectOverview}>
        <div className={styles.projectLogoWrap}>
          <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/logo_logo_primer.png" alt="EcoDo Logo" />
        </div>
        <h2 className={styles.projectTitle}>EcoDo</h2>
        <p className={styles.projectDesc}>{t.coding.projectDesc}</p>
        <a href="https://github.com/EcoDo-Capstone/About-EcoDo" target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
          {t.coding.viewRepo}
        </a>
        <div className={styles.techTags}>
          <span className={styles.techTag}>PYTHON</span>
          <span className={styles.techTag}>TENSORFLOW</span>
          <span className={styles.techTag}>MOBILENETV2</span>
          <span className={styles.techTag}>KERAS</span>
          <span className={styles.techTag}>TRANSFER LEARNING</span>
          <span className={styles.techTag}>GOOGLE CLOUD</span>
          <span className={styles.techTag}>COMPUTE ENGINE</span>
        </div>
      </div>

      {/* My Role */}
      <div className={styles.roleSection}>
        <p className={styles.roleNum}>{t.coding.roleTitle}</p>
        <div className={styles.roleBadgeBig}>
          <span className={styles.roleLabel}>{t.coding.roleLabel}</span>
          <span className={styles.roleName}>{t.coding.roleName}</span>
        </div>
        <p className={styles.roleDesc}>{t.coding.roleDesc}</p>
      </div>

      {/* Cloud Architecture */}
      <div className={styles.archSection}>
        <div className={styles.archHeader}>
          <p className={styles.archNum}>{t.coding.archNum}</p>
          <h2 className={styles.archTitle}>{t.coding.archTitle}</h2>
        </div>
        <p className={styles.archDesc}>{t.coding.archDesc}</p>
        <img className={styles.archImg} src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/cc_arcitechtur.png" alt="Cloud Architecture Diagram" />
      </div>

      {/* ML Model Architecture Table */}
      <div className={styles.tableSection}>
        <p className={styles.sectionLabel}>{t.coding.tableLabel}</p>
        <h2 className={styles.sectionTitle}>{t.coding.tableTitle}</h2>
        <p className={styles.sectionDesc}>{t.coding.tableDesc}</p>

        <div className={styles.tableWrapper}>
          <table className={styles.modelTable}>
            <thead>
              <tr>
                <th>Layer (Type)</th>
                <th>Output Shape</th>
                <th className={styles.right}>Param #</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className={styles.layerName}>mobilenetv2_1.00_224</span><span className={styles.layerType}>Functional — Base Model (frozen)</span></td>
                <td>(None, 7, 7, 1280)</td>
                <td className={styles.right}>2,257,984</td>
              </tr>
              <tr>
                <td><span className={styles.layerName}>global_average_pooling2d_1</span><span className={styles.layerType}>GlobalAveragePooling2D</span></td>
                <td>(None, 1280)</td>
                <td className={styles.right}>0</td>
              </tr>
              <tr>
                <td><span className={styles.layerName}>dense_2</span><span className={styles.layerType}>Dense — ReLU activation</span></td>
                <td>(None, 128)</td>
                <td className={styles.right}>163,968</td>
              </tr>
              <tr>
                <td><span className={styles.layerName}>dropout_1</span><span className={styles.layerType}>Dropout — regularization</span></td>
                <td>(None, 128)</td>
                <td className={styles.right}>0</td>
              </tr>
              <tr>
                <td><span className={styles.layerName}>dense_3</span><span className={styles.layerType}>Dense — Softmax, 6 classes output</span></td>
                <td>(None, 6)</td>
                <td className={styles.right}>774</td>
              </tr>
              <tr className={styles.summaryRow}>
                <td colSpan={2}>Total Parameters</td>
                <td className={styles.right}>2,422,726 &nbsp;(9.24 MB)</td>
              </tr>
              <tr className={styles.summaryRow}>
                <td colSpan={2}>Trainable Parameters</td>
                <td className={styles.right}>164,742 &nbsp;(643.52 KB)</td>
              </tr>
              <tr className={styles.summaryRow}>
                <td colSpan={2}>Non-trainable Parameters</td>
                <td className={styles.right}>2,257,984 &nbsp;(8.61 MB)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>~93%</p>
            <p className={styles.statLabel}>{t.coding.trainAcc}</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>~87%</p>
            <p className={styles.statLabel}>{t.coding.valAcc}</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>20</p>
            <p className={styles.statLabel}>{t.coding.epochs}</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>6</p>
            <p className={styles.statLabel}>{t.coding.classes}</p>
          </div>
        </div>
      </div>

      {/* Training Performance */}
      <div className={styles.imgSection}>
        <div className={styles.imgSectionHeader}>
          <p className={styles.imgSectionNum}>{t.coding.historyNum}</p>
          <h2 className={styles.imgSectionTitle}>{t.coding.historyTitle}</h2>
        </div>
        <p className={styles.imgSectionDesc}>{t.coding.historyDesc}</p>
        <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/model_perform.png" alt="Training and Validation Loss / Accuracy Graph" />
      </div>

      {/* App Walkthrough */}
      <div className={styles.walkthroughSection}>
        <div className={styles.walkthroughHeader}>
          <p className={styles.walkLabel}>{t.coding.walkLabel}</p>
          <h2 className={styles.walkTitle}>{t.coding.walkTitle}</h2>
          <p className={styles.walkDesc}>{t.coding.walkDesc}</p>
        </div>
        <div className={styles.stepsRow}>
          {/* Step 01 */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss1.jpeg" alt="Step 1 — Home" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>01</p>
              <p className={styles.stepTitle}>{t.coding.step1Title}</p>
              <p className={styles.stepDesc}>{t.coding.step1Desc}</p>
            </div>
          </div>
          {/* Step 02 */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss3.jpeg" alt="Step 2 — Scan Waste" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>02</p>
              <p className={styles.stepTitle}>{t.coding.step2Title}</p>
              <p className={styles.stepDesc}>{t.coding.step2Desc}</p>
            </div>
          </div>
          {/* Step 03 */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss2.jpeg" alt="Step 3 — Result" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>03</p>
              <p className={styles.stepTitle}>{t.coding.step3Title}</p>
              <p className={styles.stepDesc}>{t.coding.step3Desc}</p>
            </div>
          </div>
          {/* Step 04 */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss5.jpeg" alt="Step 4 — Recommendation" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>04</p>
              <p className={styles.stepTitle}>{t.coding.step4Title}</p>
              <p className={styles.stepDesc}>{t.coding.step4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
