'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

// Translation Imports
import { firstTimeTranslations } from './FirstTimeTranslations';
import { constelacionesTranslations } from './ConstelacionesTranslations';
import { assessmentTranslations } from './AssessmentTranslations';
import { guaranteedTranslations } from '@/lib/dictionaries';

import { Language, LanguageContextType } from './LanguageTypes';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [languageConfirmed, setLanguageConfirmed] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      // Use setTimeout to avoid synchronous setState in effect warning
      setTimeout(() => {
        setLanguageState(savedLang);
        setLanguageConfirmed(true);
      }, 0);
    } else {
      setTimeout(() => {
        setShowLanguagePopup(true);
      }, 0);
    }
  }, []);

  const t = (key: string): string => {
    const lang = language;
    
    const translation = 
      (guaranteedTranslations[lang] as Record<string, string>)?.[key] ||
      (firstTimeTranslations[lang as keyof typeof firstTimeTranslations] as Record<string, string>)?.[key] ||
      (constelacionesTranslations[lang as keyof typeof constelacionesTranslations] as Record<string, string>)?.[key] ||
      (assessmentTranslations[lang as keyof typeof assessmentTranslations] as Record<string, string>)?.[key] ||
      (guaranteedTranslations.en as Record<string, string>)?.[key] ||
      (firstTimeTranslations.en as Record<string, string>)?.[key] ||
      (constelacionesTranslations.en as Record<string, string>)?.[key] ||
      (assessmentTranslations.en as Record<string, string>)?.[key] ||
      key;

    return translation;
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
  };

  const confirmLanguage = (lang: Language) => {
    setLanguage(lang);
    setLanguageConfirmed(true);
    setShowLanguagePopup(false);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      t, 
      showLanguagePopup,
      setShowLanguagePopup,
      confirmLanguage,
      languageConfirmed 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
