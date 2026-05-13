"use client";

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function TikTok() {
  const [playing, setPlaying] = useState<{ [key: number]: boolean }>({ 1: false, 2: false });
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const togglePlay = (id: number) => {
    const vid = id === 1 ? vid1Ref.current : vid2Ref.current;
    const otherVid = id === 1 ? vid2Ref.current : vid1Ref.current;
    const otherId = id === 1 ? 2 : 1;

    if (!vid) return;

    if (playing[id]) {
      vid.pause();
      setPlaying({ ...playing, [id]: false });
    } else {
      if (playing[otherId] && otherVid) {
        otherVid.pause();
      }
      vid.play();
      setPlaying({ ...playing, [id]: true, [otherId]: false });
    }
  };

  const PLAY_PATH = <path d="M8 5v14l11-7z" />;
  const PAUSE_PATH = <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />;

  return (
    <>
      <section className="hero">
        <p className="hero-label">{t.tiktok.heroLabel}</p>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.tiktok.heroTitle }}></h1>
        <p className="hero-sub">{t.tiktok.heroSub}</p>
        <div className={styles.heroMeta}>
          <a href="https://www.tiktok.com/@groovyelines?_r=1&_t=ZS-968fPCURgTV" target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z" /></svg>
            @groovyelines
          </a>
          <div className={styles.statPill}>
            <span className={styles.statNum}>~1K</span>
            <span className={styles.statLabel}>{t.tiktok.followerLabel}</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* ====== VIDEO 01: 20 Min ====== */}
      <div className={styles.videoEntry}>
        {/* LEFT INFO */}
        <div className={styles.videoInfoLeft}>
          <p className={styles.videoNum}>01 — Lyric Video</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.tiktok.vid1Title }}></h2>
          <p className={styles.videoArtist}>Lil Uzi Vert</p>
          <p className={styles.videoStory}>{t.tiktok.vid1Story}</p>
          <div className={styles.viewCount}>
            <span className={styles.viewCountNum}>951.4K</span>
            <span className={styles.viewCountLabel}>{t.tiktok.viewsLabel}</span>
          </div>
          <div className={styles.tiktokBadge}>
            <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z" /></svg>
            <span>groovyelines</span>
          </div>
          <div className={styles.videoTags}>
            <span className={styles.tag}>LIL UZI VERT</span>
            <span className={styles.tag}>LYRIC TRANSLATION</span>
            <span className={styles.tag}>TRENDING</span>
          </div>
        </div>

        {/* CENTER: TikTok Phone Frame */}
        <div className={styles.videoCol}>
          <div className={styles.tiktokPhone}>
            <video ref={vid1Ref} src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/video/WhatsApp%20Video%202026-05-06%20at%2023.01.39.mp4" playsInline loop preload="metadata"></video>

            {/* Play / Pause overlay */}
            <div className={`${styles.playOverlay} ${playing[1] ? styles.playing : styles.paused}`} onClick={() => togglePlay(1)}>
              <div className={`${styles.playBtn} ${!playing[1] ? styles.iconPlay : ''}`}>
                <svg viewBox="0 0 24 24">{playing[1] ? PAUSE_PATH : PLAY_PATH}</svg>
              </div>
            </div>

            {/* TikTok UI chrome (decorative) */}
            <div className={styles.tiktokUi}>
              <div className={styles.ttNotch}></div>
              <div className={styles.ttBottom}>
                <div className={styles.ttUsername}>@groovyelines</div>
                <div className={styles.ttCaption}>20 Min - Lil Uzi Vert 🎵 terjemahan lirik #liluzivert #20min #lyricsTranslation</div>
              </div>
              <div className={styles.ttRight}>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  <span>951K</span>
                </div>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
                  <span>{t.tiktok.commentLabel}</span>
                </div>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
                  <span>{t.tiktok.shareLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: empty balancer */}
        <div className={styles.videoInfoRight} style={{ background: '#f5f5f5' }}></div>
      </div>

      {/* ====== VIDEO 02: Here We Go Again ====== */}
      <div className={`${styles.videoEntry} ${styles.reverse}`}>
        {/* LEFT side becomes info-right */}
        <div className={styles.videoInfoLeft} style={{ background: '#f5f5f5' }}></div>

        {/* CENTER: TikTok Phone Frame */}
        <div className={styles.videoCol}>
          <div className={styles.tiktokPhone}>
            <video ref={vid2Ref} src="https://zzrpfpbtrkfwnfmoaxdn.supabase.co/storage/v1/object/public/portofolio/video/WhatsApp%20Video%202026-05-06%20at%2023.01.38.mp4" playsInline loop preload="metadata"></video>

            {/* Play / Pause overlay */}
            <div className={`${styles.playOverlay} ${playing[2] ? styles.playing : styles.paused}`} onClick={() => togglePlay(2)}>
              <div className={`${styles.playBtn} ${!playing[2] ? styles.iconPlay : ''}`}>
                <svg viewBox="0 0 24 24">{playing[2] ? PAUSE_PATH : PLAY_PATH}</svg>
              </div>
            </div>

            {/* TikTok UI chrome */}
            <div className={styles.tiktokUi}>
              <div className={styles.ttNotch}></div>
              <div className={styles.ttBottom}>
                <div className={styles.ttUsername}>@groovyelines</div>
                <div className={styles.ttCaption}>Here We Go Again - The Weeknd ft. Tyler 🎵 terjemahan #theweeknd #tylerthecreator</div>
              </div>
              <div className={styles.ttRight}>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  <span>10.1K</span>
                </div>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
                  <span>{t.tiktok.commentLabel}</span>
                </div>
                <div className={styles.ttAction}>
                  <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /></svg>
                  <span>{t.tiktok.shareLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className={styles.videoInfoRight}>
          <p className={styles.videoNum}>02 — Lyric Video</p>
          <h2 className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: t.tiktok.vid2Title }}></h2>
          <p className={styles.videoArtist}>The Weeknd ft. Tyler, the Creator</p>
          <p className={styles.videoStory}>{t.tiktok.vid2Story}</p>
          <div className={styles.viewCount}>
            <span className={styles.viewCountNum}>10.1K</span>
            <span className={styles.viewCountLabel}>{t.tiktok.viewsLabel}</span>
          </div>
          <div className={styles.tiktokBadge}>
            <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z" /></svg>
            <span>groovyelines</span>
          </div>
          <div className={styles.videoTags}>
            <span className={styles.tag}>THE WEEKND</span>
            <span className={styles.tag}>TYLER THE CREATOR</span>
            <span className={styles.tag}>LYRIC TRANSLATION</span>
          </div>
        </div>
      </div>
    </>
  );
}
