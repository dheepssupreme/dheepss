"use client";

import React, { useState, useEffect } from 'react';

interface HEICImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function HEICImage({ src, alt, className, ...props }: HEICImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    async function loadHEIC() {
      try {
        setLoading(true);
        setError(null);

        // Fetch HEIC file as blob
        const res = await fetch(src);
        if (!res.ok) throw new Error("Failed to fetch image");
        const blob = await res.blob();

        if (!active) return;

        // Dynamically load heic2any to avoid blocking initial load/SSR
        const heic2anyModule = await import('heic2any');
        const heic2any = heic2anyModule.default;

        if (!active) return;

        // Convert HEIC blob to JPEG
        const conversionResult = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.8,
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
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  if (loading) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(90deg, #18181b 25%, #27272a 50%, #18181b 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite linear',
          color: '#a1a1aa',
          fontFamily: 'inherit',
          gap: '0.75rem',
          borderRadius: '12px'
        }}
      >
        <svg 
          style={{ animation: 'spin 1s infinite linear' }}
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
        <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Converting HEIC to JPEG...</span>
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#27272a',
          color: '#ef4444',
          borderRadius: '12px',
          padding: '1rem',
          textAlign: 'center'
        }}
      >
        <span style={{ fontWeight: 600 }}>Error loading HEIC image</span>
        <span style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.25rem' }}>{error}</span>
      </div>
    );
  }

  if (!imgSrc) return null;

  return <img src={imgSrc} alt={alt} className={className} {...props} />;
}
