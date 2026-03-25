/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, FileText, AlertTriangle, ScrollText } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, setShowLanguagePopup } = useLanguage();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('ekabalance-cookie-consent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (cookieConsent === 'accepted') {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted',
        });
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ekabalance-cookie-consent', 'accepted');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('ekabalance-cookie-consent', 'rejected');
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }
    setIsVisible(false);
  };

  const policies = [
    { href: '/cookie-policy', label: t('cookies.learnMore'), icon: Cookie },
    { href: '/privacy-policy', label: t('footer.privacyPolicy'), icon: Shield },
    { href: '/terms-of-service', label: t('footer.termsOfService'), icon: ScrollText },
    { href: '/disclaimer', label: 'Disclaimer', icon: AlertTriangle },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[60] px-3 pt-3 pb-24 md:px-6 md:pb-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/97 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
              <div className="p-5 sm:p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <Cookie className="w-4.5 h-4.5 text-gray-600" style={{ width: 18, height: 18 }} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                      {t('cookies.title')}
                    </h3>
                  </div>
                  <button
                    onClick={rejectCookies}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors shrink-0"
                    aria-label="Reject cookies and close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 pl-12">
                  {t('cookies.description')}
                </p>

                {/* Policy links row */}
                <div className="pl-12 mb-5">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {policies.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Icon className="w-3 h-3" />
                        <span className="underline underline-offset-2 decoration-dotted">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Actions row */}
                <div className="flex flex-wrap items-center gap-2.5 pl-12">
                  <Button
                    onClick={acceptCookies}
                    size="sm"
                    className="bg-gold hover:brightness-90 text-eka-dark font-medium rounded-full px-6 hover:shadow-md transition-all duration-200"
                  >
                    {t('cookies.accept')}
                  </Button>

                  <Button
                    onClick={rejectCookies}
                    variant="outline"
                    size="sm"
                    className="font-medium rounded-full px-5 border-gray-200 text-gray-600 hover:bg-gray-100 transition-all"
                  >
                    {t('cookies.reject') || 'Rebutjar'}
                  </Button>

                  <button
                    onClick={() => setShowLanguagePopup(true)}
                    className="text-gray-400 hover:text-blue-600 text-xs transition-colors duration-200 underline decoration-dotted underline-offset-2 ml-auto"
                  >
                    {t('cookies.wrongLanguage')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
