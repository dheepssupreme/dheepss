"use client";

import React, { useState, useEffect, useRef } from 'react';

interface HEICImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
}

/**
 * HEICImage — loading HEIC dari Supabase dengan:
 * 1. Intersection Observer: konversi HEIC hanya dimulai saat gambar mendekati viewport
 *    → Tidak semua HEIC di-fetch sekaligus; ini mengurangi memory & CPU burst
 * 2. Skeleton shimmer: UX yang bersih tanpa teks "Converting..." yang mengganggu
 * 3. Blur-to-sharp reveal: gambar muncul halus setelah konversi selesai
 * 4. Cleanup objectURL: mencegah memory leak
 *
 * Catatan performa: HEIC conversion di client SELALU berat (fetch + decode + encode).
 * Solusi terbaik jangka panjang adalah konversi di server (misal via Supabase Transform).
 * Komponen ini meminimalisir dampaknya di client.
 */
export default function HEICImage({ src, alt, className, aspectRatio = "4/3", objectFit = "cover", style, ...props }: HEICImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // false dulu, mulai saat masuk viewport
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  // Intersection Observer: mulai fetch+convert hanya saat gambar mendekati viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.disconnect();
          startConversion();
        }
      },
      { rootMargin: '300px 0px' } // mulai convert 300px sebelum masuk viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  function startConversion() {
    let active = true;
    let objectUrl: string | null = null;

    async function loadHEIC() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(src);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const blob = await res.blob();
        if (!active) return;

        // Dynamic import agar tidak masuk initial bundle
        const heic2anyModule = await import('heic2any');
        const heic2any = heic2anyModule.default;
        if (!active) return;

        const conversionResult = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.82,
        });
        if (!active) return;

        const resultBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
        objectUrl = URL.createObjectURL(resultBlob);
        setImgSrc(objectUrl);
        setLoading(false);
      } catch (err: any) {
        console.error("HEIC conversion error:", err);
        if (active) {
          setError(err.message || "Failed to load image");
          setLoading(false);
        }
      }
    }

    loadHEIC();

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }

  const showSkeleton = !imgSrc && !error;

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
      {/* Skeleton shimmer — tampil saat belum masuk viewport ATAU sedang convert */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: loading
            ? 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)'
            : '#1a1a1a',
          backgroundSize: '200% 100%',
          animation: loading ? 'heicShimmer 1.6s ease-in-out infinite' : 'none',
          opacity: showSkeleton ? 1 : 0,
          transition: 'opacity 0.4s ease',
          borderRadius: 'inherit',
          zIndex: 1,
        }}
      />

      {/* Error state */}
      {error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
            color: '#999',
            fontSize: '13px',
            gap: '0.4rem',
            zIndex: 2,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Unable to load image</span>
        </div>
      )}

      {/* Gambar hasil konversi */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          className={className}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit,
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0px)' : 'blur(6px)',
            transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
            transition: 'opacity 0.5s ease, filter 0.5s ease, transform 0.5s ease',
            zIndex: 2,
          }}
          {...props}
        />
      )}

      <style>{`
        @keyframes heicShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
