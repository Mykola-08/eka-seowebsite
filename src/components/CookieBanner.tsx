/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from '@/lib/icons';
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
    { href: '/cookie-policy', label: t('cookies.learnMore') },
    { href: '/privacy-policy', label: t('footer.privacyPolicy') },
    { href: '/terms-of-service', label: t('footer.termsOfService') },
    { href: '/disclaimer', label: 'Disclaimer' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 16, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed bottom-0 left-0 right-0 z-60 p-4 pb-24 md:pb-6 md:p-6 md:left-auto md:right-6 md:bottom-6 md:w-105"
          data-testid="cookie-banner"
        >
          <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl overflow-hidden pointer-events-auto">
            <div className="p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <Cookie className="w-5 h-5 text-muted-foreground shrink-0" />
                  <h3 className="text-base font-medium text-foreground tracking-tight">
                    {t('cookies.title')}
                  </h3>
                </div>
                <button
                  onClick={rejectCookies}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full p-1.5 transition-colors shrink-0 -mr-1 -mt-1"
                  aria-label="Reject cookies and close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-light">
                {t('cookies.description')}
              </p>

              {/* Inline policy links */}
              <div className="mb-5 text-xs text-muted-foreground leading-relaxed">
                {policies.map(({ href, label }, idx) => (
                  <span key={href}>
                    {idx > 0 && <span className="mx-1.5 opacity-50">·</span>}
                    <Link
                      href={href}
                      className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                    >
                      {label}
                    </Link>
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  className="flex-1"
                  data-testid="cookie-accept"
                >
                  {t('cookies.accept')}
                </Button>
                <Button
                  onClick={rejectCookies}
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                >
                  {t('cookies.reject') || 'Rebutjar'}
                </Button>
              </div>

              <div className="mt-3 text-center">
                <button
                  onClick={() => setShowLanguagePopup(true)}
                  className="text-muted-foreground/70 hover:text-foreground text-xs font-normal transition-colors"
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
