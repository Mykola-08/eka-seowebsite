/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, setShowLanguagePopup } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('ekabalance-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (cookieConsent === 'accepted') {
      // Restore consent if already accepted
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ekabalance-cookie-consent', 'accepted');
    
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-gray-600" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('cookies.title')}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {t('cookies.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div className="flex gap-3">
                  <Button
                    onClick={acceptCookies}
                    variant="primary"
                    className="font-semibold"
                  >
                    {t('cookies.accept')}
                  </Button>
                  <Button
                    onClick={() => setShowLanguagePopup(true)}
                    variant="ghost"
                    className="text-gray-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200 underline decoration-dotted h-auto px-2 py-1"
                  >
                    {t('cookies.wrongLanguage')}
                  </Button>
                </div>

                <Link
                  href="/cookie-policy"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 ml-1"
                >
                  {t('cookies.learnMore')}
                </Link>
              </div>
            </div>

            <button
              onClick={acceptCookies}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
