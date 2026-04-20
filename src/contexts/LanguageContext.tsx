'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

// Translation Imports
import { servicesTranslations } from './TranslationExtensions';
import { revision360Translations } from './Revision360Translations';
import { techniqueTranslations } from './TechniqueTranslations';
import { agenyzTranslations } from './AgenyzTranslations';
import { bentoTranslations } from './BentoTranslations';
import { funnelTranslations } from './FunnelTranslations';
import { firstTimeTranslations } from './FirstTimeTranslations';
import { constelacionesTranslations } from './ConstelacionesTranslations';
import { assessmentTranslations } from './AssessmentTranslations';
import { guaranteedTranslations, translations } from '@/lib/dictionaries';

import { Language, LanguageContextType } from './LanguageTypes';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED: Language[] = ['ca', 'en', 'es', 'ru'];

function setLocaleCookie(value: Language) {
  if (typeof document === 'undefined') return;
  document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLanguage = 'ca',
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [languageConfirmed, setLanguageConfirmed] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && SUPPORTED.includes(savedLang)) {
      if (savedLang !== language) {
        // One-time sync of persisted preference into React state on mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(savedLang);
        setLocaleCookie(savedLang);
      }
      setLanguageConfirmed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = (key: string, params?: Record<string, string | number>): string => {
    const lang = language;
    
    let text = 
      (guaranteedTranslations[lang] as Record<string, string>)?.[key] ||
      (translations[lang] as Record<string, string>)?.[key] ||
      (servicesTranslations[lang] as Record<string, string>)?.[key] ||
      (revision360Translations[lang] as Record<string, string>)?.[key] ||
      (techniqueTranslations[lang] as Record<string, string>)?.[key] ||
      (agenyzTranslations[lang] as Record<string, string>)?.[key] ||
      (bentoTranslations[lang] as Record<string, string>)?.[key] ||
      (funnelTranslations[lang] as Record<string, string>)?.[key] ||
      (firstTimeTranslations[lang as keyof typeof firstTimeTranslations] as Record<string, string>)?.[key] ||
      (constelacionesTranslations[lang as keyof typeof constelacionesTranslations] as Record<string, string>)?.[key] ||
      (assessmentTranslations[lang as keyof typeof assessmentTranslations] as Record<string, string>)?.[key] ||
      // Fallbacks to English
      (guaranteedTranslations.en as Record<string, string>)?.[key] ||
      (translations.en as Record<string, string>)?.[key] ||
      (servicesTranslations.en as Record<string, string>)?.[key] ||
      (revision360Translations.en as Record<string, string>)?.[key] ||
      (techniqueTranslations.en as Record<string, string>)?.[key] ||
      (agenyzTranslations.en as Record<string, string>)?.[key] ||
      (bentoTranslations.en as Record<string, string>)?.[key] ||
      (funnelTranslations.en as Record<string, string>)?.[key] ||
      (firstTimeTranslations.en as Record<string, string>)?.[key] ||
      (constelacionesTranslations.en as Record<string, string>)?.[key] ||
      (assessmentTranslations.en as Record<string, string>)?.[key] ||
      key;

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(new RegExp(`{${paramKey}}`, 'g'), String(value));
      });
    }

    return text;
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
    setLocaleCookie(newLang);
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
