"use client";

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function VideoEditor() {
  const [playing, setPlaying] = useState<{ [key: number]: boolean }>({ 1: false, 2: false, 3: false });
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const vid3Ref = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const togglePlay = (id: number) => {
    const refs: { [key: number]: React.RefObject<HTMLVideoElement | null> } = {
      1: vid1Ref,
      2: vid2Ref,
      3: vid3Ref,
    };

    const targetVid = refs[id]?.current;
    if (!targetVid) return;

    if (playing[id]) {
      targetVid.pause();
      setPlaying({ ...playing, [id]: false });
    } else {
      // Pause others
      Object.keys(refs).forEach((keyStr) => {
        const key = parseInt(keyStr);
        if (key !== id && playing[key] && refs[key]?.current) {
          refs[key]?.current?.pause();
        }
      });
      targetVid.play();
      
      const newPlayingState: { [key: number]: boolean } = { 1: false, 2: false, 3: false };
      newPlayingState[id] = true;
      setPlaying(newPlayingState);
    }
  };

  const PLAY_PATH = <path d="M8 5v14l11-7z" />;
  const PAUSE_PATH = <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />;

  const CapCutIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.videoEditor.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.videoEditor.heroTitle }}></h1>
        <p className="hero-sub">{t.videoEditor.heroSub}</p>
      </section>

      <div className="divider"></div>

      {/* ====== VIDEO 01: UNPRI (16:9 Landscape) ====== */}
      <div className={`${styles.videoEntry} ${styles.landscape}`}>
        <div className={styles.videoInfoLeft}>
          <p className={styles.videoNum}>01 — Profile Video</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.videoEditor.vid1Title }}></h2>
          <p className={styles.videoStory}>{t.videoEditor.vid1Story}</p>
          
          <div className={styles.capcutBadge}>
            <CapCutIcon />
            <span>{t.videoEditor.badgeLabel}</span>
          </div>

          <div className={styles.videoTags}>
            <span className={styles.tag}>16:9 RATIO</span>
            <span className={styles.tag}>COLOR GRADING</span>
            <span className={styles.tag}>MOTION GRAPHICS</span>
          </div>
        </div>

        <div className={styles.videoCol}>
          <div className={styles.desktopFrame}>
            <video 
              ref={vid1Ref} 
              src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/video%20editor/Persiapkan%20diri%20untuk%20menjadi%20generasi%20Tanggap%20Digital%20dengan%20menjadi%20bagian%20dari%20Fakultas%20Tekno.mp4" 
              playsInline loop preload="metadata"
            ></video>

            <div className={`${styles.playOverlay} ${playing[1] ? styles.playing : styles.paused}`} onClick={() => togglePlay(1)}>
              <div className={`${styles.playBtn} ${!playing[1] ? styles.iconPlay : ''}`}>
                <svg viewBox="0 0 24 24">{playing[1] ? PAUSE_PATH : PLAY_PATH}</svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== PODCAST 01: Lulusan Bangkit Academy (16:9 Landscape) ====== */}
      <div className={`${styles.videoEntry} ${styles.landscape}`}>
        <div className={styles.videoInfoLeft}>
          <p className={styles.videoNum}>02 — Podcast Series</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.videoEditor.vidPodcast1Title }}></h2>
          <p className={styles.videoArtist}>Bangkit Academy</p>
          <p className={styles.videoStory}>{t.videoEditor.vidPodcast1Story}</p>
          
          <div className={styles.capcutBadge}>
            <CapCutIcon />
            <span>{t.videoEditor.badgeLabel}</span>
          </div>

          <div className={styles.videoTags}>
            <span className={styles.tag}>16:9 RATIO</span>
            <span className={styles.tag}>CREATIVE DIRECTION</span>
            <span className={styles.tag}>LONG FORM</span>
          </div>
        </div>

        <div className={styles.videoCol}>
          <div className={styles.desktopFrame}>
            <iframe 
              src="https://www.youtube.com/embed/wpZo0_i-gzA?si=BV3oPNocgr3fSrx6" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* ====== PODCAST 02: Mahasiswa Pengalaman Sendiri (16:9 Landscape) ====== */}
      <div className={`${styles.videoEntry} ${styles.landscape}`}>
        <div className={styles.videoInfoLeft}>
          <p className={styles.videoNum}>03 — Podcast Series</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.videoEditor.vidPodcast2Title }}></h2>
          <p className={styles.videoArtist}>Mahasiswa Berpengalaman</p>
          <p className={styles.videoStory}>{t.videoEditor.vidPodcast2Story}</p>
          
          <div className={styles.capcutBadge}>
            <CapCutIcon />
            <span>{t.videoEditor.badgeLabel}</span>
          </div>

          <div className={styles.videoTags}>
            <span className={styles.tag}>16:9 RATIO</span>
            <span className={styles.tag}>CREATIVE DIRECTION</span>
            <span className={styles.tag}>LONG FORM</span>
          </div>
        </div>

        <div className={styles.videoCol}>
          <div className={styles.desktopFrame}>
            <iframe 
              src="https://www.youtube.com/embed/7XSNIjBoybQ?si=btUpZCUqSse-WYeE" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* ====== VIDEO 04: Workshop LLM (9:16 Portrait) ====== */}
      <div className={`${styles.videoEntry} ${styles.reverse}`}>
        <div className={styles.videoInfoLeft} style={{ background: '#f5f5f5' }}></div>

        <div className={styles.videoCol}>
          <div className={styles.mobileFrame}>
            <video 
              ref={vid2Ref} 
              src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/video%20editor/Telah%20terlaksanakan%20workshop%20di%20Universitas%20Prima%20Indonesia%20Lt%2016%20ruangan%20B1616%20yang%20di%20adakan%20o.mp4" 
              playsInline loop preload="metadata"
            ></video>

            <div className={`${styles.playOverlay} ${playing[2] ? styles.playing : styles.paused}`} onClick={() => togglePlay(2)}>
              <div className={`${styles.playBtn} ${!playing[2] ? styles.iconPlay : ''}`}>
                <svg viewBox="0 0 24 24">{playing[2] ? PAUSE_PATH : PLAY_PATH}</svg>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.videoInfoRight}>
          <p className={styles.videoNum}>04 — Event Documentation</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.videoEditor.vid2Title }}></h2>
          <p className={styles.videoArtist}>Workshop LLM for Everyone</p>
          <p className={styles.videoStory}>{t.videoEditor.vid2Story}</p>
          
          <div className={styles.capcutBadge}>
            <CapCutIcon />
            <span>{t.videoEditor.badgeLabel}</span>
          </div>

          <div className={styles.videoTags}>
            <span className={styles.tag}>9:16 RATIO</span>
            <span className={styles.tag}>DYNAMIC CUTS</span>
            <span className={styles.tag}>DOCUMENTATION</span>
          </div>
        </div>
      </div>

      {/* ====== VIDEO 05: Hack4ID Startup (9:16 Portrait) ====== */}
      <div className={styles.videoEntry}>
        <div className={styles.videoInfoLeft}>
          <p className={styles.videoNum}>05 — Educational Reels</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.videoEditor.vid3Title }}></h2>
          <p className={styles.videoArtist}>Hack4ID</p>
          <p className={styles.videoStory}>{t.videoEditor.vid3Story}</p>
          
          <div className={styles.capcutBadge}>
            <CapCutIcon />
            <span>{t.videoEditor.badgeLabel}</span>
          </div>

          <div className={styles.videoTags}>
            <span className={styles.tag}>9:16 RATIO</span>
            <span className={styles.tag}>FAST PACED</span>
            <span className={styles.tag}>STARTUP</span>
          </div>
        </div>

        <div className={styles.videoCol}>
          <div className={styles.mobileFrame}>
            <video 
              ref={vid3Ref} 
              src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/video%20editor/hack4id.mp4" 
              playsInline loop preload="metadata"
            ></video>

            <div className={`${styles.playOverlay} ${playing[3] ? styles.playing : styles.paused}`} onClick={() => togglePlay(3)}>
              <div className={`${styles.playBtn} ${!playing[3] ? styles.iconPlay : ''}`}>
                <svg viewBox="0 0 24 24">{playing[3] ? PAUSE_PATH : PLAY_PATH}</svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.videoInfoRight} style={{ background: '#f5f5f5' }}></div>
      </div>

      <div className="cta-container">
        <Link href="/editing" className="cta-button">
          {t.cta.nextPhotoEditor} <span>{t.cta.arrow}</span>
        </Link>
      </div>
    </>
  );
}
