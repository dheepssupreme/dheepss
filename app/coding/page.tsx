import styles from './page.module.css';

export default function Coding() {
  return (
    <>
      <section className="hero">
        <p className="hero-label">Coding</p>
        <h1 className="hero-title">Built for impact,<br />trained to see.</h1>
        <p className="hero-sub">During Bangkit Academy — an independent study program led by Google, GoTo &amp; Traveloka — I served as Machine Learning Engineer, building the AI brain of EcoDo: a waste classification app that helps people sort waste through a camera.</p>
      </section>

      <div className="divider"></div>

      {/* Project Overview — logo centered & big */}
      <div className={styles.projectOverview}>
        <div className={styles.projectLogoWrap}>
          <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/logo_logo_primer.png" alt="EcoDo Logo" />
        </div>
        <h2 className={styles.projectTitle}>EcoDo</h2>
        <p className={styles.projectDesc}>A user-friendly application aimed at simplifying waste management, promoting recycling, and engaging the community in proactive efforts to maintain a clean and sustainable environment — powered by a real-time image classification model built from scratch using transfer learning.</p>
        <a href="https://github.com/EcoDo-Capstone/About-EcoDo" target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
          View Repository
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

      {/* My Role — no bottom border, merges with Cloud Arch below */}
      <div className={styles.roleSection}>
        <p className={styles.roleNum}>My Role</p>
        <div className={styles.roleBadgeBig}>
          <span className={styles.roleLabel}>Served as</span>
          <span className={styles.roleName}>Machine Learning Engineer</span>
        </div>
        <p className={styles.roleDesc}>Responsible for building, training, and optimizing the image classification model — from dataset preparation and augmentation, to fine-tuning MobileNetV2 via transfer learning, to exporting the final model for mobile deployment.</p>
      </div>

      {/* Cloud Architecture — left-aligned title, smaller image */}
      <div className={styles.archSection}>
        <div className={styles.archHeader}>
          <p className={styles.archNum}>Cloud Architecture</p>
          <h2 className={styles.archTitle}>"How the pieces connect."</h2>
        </div>
        <p className={styles.archDesc}>The system is built on Google Cloud Platform — the mobile app communicates with a Compute Engine instance, which reads/writes to Cloud SQL for structured data and Cloud Storage for image files.</p>
        <img className={styles.archImg} src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/cc_arcitechtur.png" alt="Cloud Architecture Diagram" />
      </div>

      {/* ML Model Architecture Table */}
      <div className={styles.tableSection}>
        <p className={styles.sectionLabel}>ML Model</p>
        <h2 className={styles.sectionTitle}>"MobileNetV2 — fine-tuned."</h2>
        <p className={styles.sectionDesc}>Transfer learning on MobileNetV2 pretrained on ImageNet, topped with a custom classification head trained to recognize 6 waste categories. Frozen base layers keep the pre-learned feature extractor intact while only 164K parameters are trainable.</p>

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
            <p className={styles.statLabel}>Train Accuracy</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>~87%</p>
            <p className={styles.statLabel}>Val Accuracy</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>20</p>
            <p className={styles.statLabel}>Epochs</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>6</p>
            <p className={styles.statLabel}>Waste Classes</p>
          </div>
        </div>
      </div>

      {/* Training Performance */}
      <div className={styles.imgSection}>
        <div className={styles.imgSectionHeader}>
          <p className={styles.imgSectionNum}>Training History</p>
          <h2 className={styles.imgSectionTitle}>"Loss down, accuracy up."</h2>
        </div>
        <p className={styles.imgSectionDesc}>Training loss steadily converges to ~0.20 over 20 epochs. Validation accuracy stabilizes around 84–89%, confirming the model generalizes well without heavy overfitting.</p>
        <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/model_perform.png" alt="Training and Validation Loss / Accuracy Graph" />
      </div>

      {/* App Walkthrough — 4 steps */}
      <div className={styles.walkthroughSection}>
        <div className={styles.walkthroughHeader}>
          <p className={styles.walkLabel}>App Walkthrough</p>
          <h2 className={styles.walkTitle}>"Four steps to cleaner waste."</h2>
          <p className={styles.walkDesc}>Here's how EcoDo guides users from opening the app to understanding and managing their waste — all powered by the ML model under the hood.</p>
        </div>
        <div className={styles.stepsRow}>
          {/* Step 01: Home (ss1) */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss1.jpeg" alt="Step 1 — Home" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>01</p>
              <p className={styles.stepTitle}>Home</p>
              <p className={styles.stepDesc}>Users open the app and land on EcoDo's main dashboard — the starting point of the waste management journey.</p>
            </div>
          </div>
          {/* Step 02: Classification Result (ss3) */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss3.jpeg" alt="Step 2 — Classification Result" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>02</p>
              <p className={styles.stepTitle}>Scan Waste</p>
              <p className={styles.stepDesc}>Users capture a photo of any waste item using the camera or pick one from their gallery for classification.</p>
            </div>
          </div>
          {/* Step 03: Scan Waste (ss2) */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss2.jpeg" alt="Step 3 — Scan Waste" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>03</p>
              <p className={styles.stepTitle}>Classification Result</p>
              <p className={styles.stepDesc}>The ML model instantly analyzes the image and displays the waste category with a confidence score.</p>
            </div>
          </div>
          {/* Step 04: Recycling Recommendation (ss5) */}
          <div className={styles.stepCard}>
            <div className={styles.stepPhone}>
              <img src="https://github.com/dheepssupreme/EcoDo/raw/main/github_asset/ss5.jpeg" alt="Step 4 — Recycling Recommendation" />
            </div>
            <div className={styles.stepBody}>
              <p className={styles.stepNum}>04</p>
              <p className={styles.stepTitle}>Recycling Recommendation</p>
              <p className={styles.stepDesc}>Based on the classification, EcoDo suggests the best recycling or disposal method for each waste type.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
