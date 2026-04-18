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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [languageConfirmed, setLanguageConfirmed] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ca', 'en', 'es', 'ru'].includes(savedLang)) {
      setTimeout(() => {
        setLanguageState(savedLang);
        setLanguageConfirmed(true);
      }, 0);
    }
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
