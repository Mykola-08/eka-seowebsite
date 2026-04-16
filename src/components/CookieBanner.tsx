/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, FileText, AlertTriangle, ScrollText } from '@/lib/icons';
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
      // Grant HubSpot cookie consent
      const _hsp = (window as any)._hsp = (window as any)._hsp || [];
      _hsp.push(['showBanner', false]);
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
    // Grant HubSpot cookie consent
    const _hsp = (window as any)._hsp = (window as any)._hsp || [];
    _hsp.push(['showBanner', false]);
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
    // Revoke HubSpot cookie consent
    const _hsp = (window as any)._hsp = (window as any)._hsp || [];
    _hsp.push(['revokeCookieConsent']);
    setIsVisible(false);
  };

  const policies = [
    { href: '/cookie-policy', label: t('cookies.learnMore'), icon: CookieIcon },
    { href: '/privacy-policy', label: t('footer.privacyPolicy'), icon: Shield01Icon },
    { href: '/terms-of-service', label: t('footer.termsOfService'), icon: GraduationScrollIcon },
    { href: '/disclaimer', label: 'Disclaimer', icon: Alert01Icon },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 pb-24 md:p-6 md:left-auto md:w-[480px] lg:right-6 lg:bottom-6"
        >
          <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/60 shadow-2xl rounded-3xl overflow-hidden pointer-events-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    {t('cookies.title')}
                  </h3>
                </div>
                <button
                  onClick={rejectCookies}
                  className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 transition-colors shrink-0"
                  aria-label="Reject cookies and close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t('cookies.description')}
              </p>

              {/* Links */}
              <div className="mb-6 bg-gray-50/50 rounded-2xl p-4 border border-gray-100/50">
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {policies.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  onClick={acceptCookies}
                  className="flex-1 rounded-full font-medium py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
                >
                  {t('cookies.accept')}
                </Button>
                <Button
                  onClick={rejectCookies}
                  variant="outline"
                  className="flex-1 rounded-full font-medium py-6 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                >
                  {t('cookies.reject') || 'Rebutjar'}
                </Button>
              </div>
              
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowLanguagePopup(true)}
                  className="text-gray-400 hover:text-blue-600 text-xs font-medium transition-colors underline decoration-dashed underline-offset-4"
                >
                  {t('cookies.wrongLanguage')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
