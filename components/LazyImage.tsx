"use client";

import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /**
   * Aspect ratio placeholder agar layout tidak CLS (Cumulative Layout Shift)
   * Contoh: "4/3", "16/9", "1/1"
   * Default: "4/3"
   */
  aspectRatio?: string;
}

/**
 * LazyImage — img biasa dengan:
 * 1. Intersection Observer: hanya di-fetch saat mendekati viewport (lazy load)
 * 2. Skeleton shimmer: placeholder animasi selama gambar belum masuk viewport / belum load
 * 3. Blur-to-sharp transition: gambar muncul halus tanpa layout jump (no CLS)
 *
 * Kenapa tidak pakai loading="lazy" saja?
 *  → loading="lazy" native sudah bagus, tapi kita mau kontrol penuh atas
 *    skeleton animasi & transisi blur agar UX terasa premium.
 */
export default function LazyImage({ src, alt, className, aspectRatio = "4/3", style, ...props }: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer: trigger load saat 200px sebelum masuk viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // hanya perlu trigger sekali
        }
      },
      { rootMargin: '200px 0px' } // pre-load 200px sebelum masuk viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        borderRadius: 'inherit',
        ...style,
      }}
    >
      {/* Skeleton shimmer — tampil sampai gambar selesai load */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #e8e8e8 25%, #f0f0f0 50%, #e8e8e8 75%)',
          backgroundSize: '200% 100%',
          animation: 'lazyImgShimmer 1.6s ease-in-out infinite',
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.4s ease',
          borderRadius: 'inherit',
          zIndex: 1,
        }}
      />

      {/* Gambar asli — hanya di-load saat masuk viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading="eager" // kita handle sendiri lewat IO, jadi eager
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0px)' : 'blur(8px)',
            transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
            transition: 'opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease',
            zIndex: 2,
          }}
          {...props}
        />
      )}

      <style>{`
        @keyframes lazyImgShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
