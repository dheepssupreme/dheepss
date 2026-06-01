"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionary, LanguageKey, Dictionary } from './dictionaries';

interface LanguageContextProps {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageKey>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Optional: Load language preference from localStorage
    const savedLang = localStorage.getItem('appLanguage') as LanguageKey;
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: LanguageKey) => {
    setLanguageState(lang);
    localStorage.setItem('appLanguage', lang);
  };

  const t = dictionary[language];

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return <>{children}</>; 
    // Fallback during SSR (akan render dengan bahasa default, yaitu 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values to prevent crash if not wrapped (optional, but good practice)
    return { language: 'en' as LanguageKey, setLanguage: () => {}, t: dictionary['en'] };
  }
  return context;
};
