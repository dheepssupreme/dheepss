import styles from './page.module.css';

export default function About() {
  return (
    <>
      <section className="hero">
        <p className="hero-label">About</p>
        <h1 className="hero-title">The person<br />behind the lens.</h1>
        <p className="hero-sub">Dheo Putranta Pandia. Bangkit Academy graduate, photographer, content creator, and ML engineer. Exploring the intersection of art, technology, and storytelling.</p>
      </section>

      <div className="divider"></div>

      <div className={styles.aboutContent}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrap}>
            {/* Elegant placeholder, matching Apple aesthetic */}
            <div className={styles.profilePlaceholder}>
              <span className={styles.initials}>DP</span>
            </div>
          </div>
          <div className={styles.bio}>
            <h2 className={styles.name}>Dheo Putranta Pandia</h2>
            <p className={styles.title}>Machine Learning Engineer & Content Creator</p>
            <p className={styles.description}>
              I believe in the power of visual storytelling and intelligent systems. 
              Whether it's capturing the quiet tension of an unposed moment through a lens, 
              translating the emotional weight of a lyric for a TikTok audience, or 
              training an image classification model to help keep our environment clean, 
              my goal is always to create something that resonates and makes an impact.
            </p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <div className={styles.skillGroup}>
            <h3 className={styles.skillTitle}>Focus Areas</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>Photography</span>
              <span className={styles.tag}>Color Grading</span>
              <span className={styles.tag}>Video Editing</span>
              <span className={styles.tag}>Machine Learning</span>
              <span className={styles.tag}>Content Creation</span>
            </div>
          </div>
          
          <div className={styles.skillGroup}>
            <h3 className={styles.skillTitle}>Connect</h3>
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
