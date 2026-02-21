'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import ToastContainer from '@/components/Toast';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { Language } from '@/contexts/LanguageTypes';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguagePopup from '@/components/LanguagePopup';
import CookieBanner from './CookieBanner';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const { logPageView } = useAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Log page views
  useEffect(() => {
    if (pathname) {
      logPageView(pathname);
    }
  }, [pathname, logPageView]);

  const [showPersonalServices, setShowPersonalServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const personalServicesRef = useClickOutside<HTMLDivElement>(() => setShowPersonalServices(false));

  // Hover intent management for dropdown
  const [hideTimeout, setHideTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShowPersonalServices(true);
  };

  const scheduleHide = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    const timeout = setTimeout(() => {
      setShowPersonalServices(false);
    }, 220);
    setHideTimeout(timeout);
  };

  // Handle scroll effect for header and mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      setIsScrolled(scrollTop > 20);
      setShowMobileCTA(scrollPercent > 0.7);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  // Navigation items
  interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { name: string; href: string }[];
    isGold?: boolean;
    isExternal?: boolean;
  }

  const navigation: NavItem[] = [
    {
      name: t('nav.services'),
      href: '/services'
    },
    {
      name: 'Agenyz',
      href: '/agenyz'
    },
    {
      name: t('nav.personalizedServices'),
      href: '/personalized-services',
      hasDropdown: true,
      dropdownItems: [
        { name: t('nav.officeWorkers'), href: '/services/office-workers' },
        { name: t('nav.athletes'), href: '/services/athletes' },
        { name: t('nav.artists'), href: '/services/artists' },
        { name: t('nav.musicians'), href: '/services/musicians' },
        { name: t('nav.students'), href: '/services/students' },
      ]
    },
    {
      name: t('nav.casos'),
      href: '/cases'
    },
    {
      name: t('nav.revision360'),
      href: '/360-revision'
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <OfflineIndicator />

      {/* Navigation with scroll effect - Liquid Glass Style */}
        <nav className={`sticky top-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm border-gray-200/50' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo Only - Left Side - INCREASED SIZE */}
              <Link href="/" className="flex items-center flex-shrink-0 group relative opacity-90 hover:opacity-100 transition-opacity">
                <div className="relative w-8 h-8"> {/* Increased from w-5 h-5 */}
                  <Image
                  src="/images/eka_logo.png"
                    alt="EKA Balance Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation - Centered - Apple Style: text-[12px], regular weight, gray-700 */}
              <div className="hidden md:flex items-center justify-center space-x-8">
                  {navigation.map(item => (
                    <div key={item.name} className={`nav-item ${item.hasDropdown ? 'relative' : ''}`}
                      ref={item.hasDropdown ? personalServicesRef : undefined}>
                      {item.hasDropdown ? (
                        <>
                          <Link
                            href={item.href}
                            className="nav-trigger text-[12px] text-gray-700 hover:text-black transition-colors duration-200 flex items-center tracking-tight font-normal"
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleHide}
                            onFocus={openDropdown}
                            onBlur={scheduleHide}
                            suppressHydrationWarning
                          >
                            {item.name}
                          </Link>

                          {/* Hover bridge for seamless navigation */}
                          <div
                            className="hover-bridge"
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleHide}
                            aria-hidden="true"
                          />

                          {/* Dropdown menu with matching background style (Unified) - Grows from header */}
                          <div
                            className={`nav-dropdown ${showPersonalServices ? 'is-open opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'} bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-2 min-w-[220px] absolute top-full left-1/2 -translate-x-1/2 mt-1 origin-top transition-all duration-200 ease-out-quad z-50`}
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleHide}
                            onKeyDown={(e) => {
                              if (e.key === 'Escape') {
                                setShowPersonalServices(false);
                              }
                            }}
                            role="menu"
                            aria-label={`${item.name} submenu`}
                          >
                            <div className="py-1">
                              {item.dropdownItems?.map((dropdownItem, index) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => setShowPersonalServices(false)}
                                  className="block px-4 py-2 text-[12px] text-gray-700 hover:text-black hover:bg-gray-100/50 rounded-lg transition-colors font-normal"
                                  role="menuitem"
                                  suppressHydrationWarning
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : item.isExternal ? (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          className="text-[12px] text-gray-700 hover:text-black transition-colors duration-200 tracking-tight font-normal"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(item.href, '_blank', 'noopener,noreferrer');
                          }}
                          suppressHydrationWarning
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[12px] text-gray-700 hover:text-black transition-colors duration-200 tracking-tight font-normal"
                          suppressHydrationWarning
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
              </div>

              {/* Right side actions - Search/Bag style icons usually, here just Booking CTA but simpler */}
              <div className="flex items-center space-x-4 flex-shrink-0">

                {/* Reserva Button - Updated to Blue Primary Button */}
                <Button
                  asChild
                  variant="primary"
                  size="sm"
                  className="hidden sm:inline-flex text-[12px] font-medium rounded-full h-8 px-4"
                >
                  <Link href="/booking" suppressHydrationWarning>
                    {t('nav.bookNow')}
                  </Link>
                </Button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-1 text-gray-800 hover:text-black transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl overflow-hidden"
                >
                  <div className="py-4 px-6 space-y-4 max-h-[80vh] overflow-y-auto">
                    {navigation.map(item => (
                      <div key={item.name} className="border-b border-gray-100 pb-2 last:border-0">
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              window.open(item.href, '_blank', 'noopener,noreferrer');
                            }}
                            className="block py-2 text-[17px] font-medium text-gray-900"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 text-[17px] font-medium text-gray-900"
                          >
                            {item.name}
                          </Link>
                        )}
                        {item.hasDropdown && (
                          <div className="ml-4 space-y-2 mt-2">
                            {item.dropdownItems?.map(dropdownItem => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-1 text-[15px] text-gray-600 font-normal"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Mobile Reserva */}
                    <div className="pt-4">
                      <Button asChild variant="primary" size="lg" className="w-full text-base font-semibold rounded-xl">
                        <Link
                          href="/booking"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t('nav.bookNow')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Toast Notifications */}
        <ToastContainer />

        {/* Cookie Banner */}
        <CookieBanner />
        <LanguagePopup />

        {/* Fixed Mobile Bottom CTA */}
        <AnimatePresence>
          {showMobileCTA && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 md:hidden z-50 pb-safe"
            >
              <Button asChild variant="primary" size="lg" className="w-full text-base font-bold rounded-full shadow-lg">
                <Link href="/booking">
                  {t('nav.bookNow')}
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-12 sm:py-16 bg-secondary text-gray-900 border-t border-gray-200">
          <div className="max-w-[1024px] mx-auto px-6 text-center">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center space-x-2 mb-8 group w-fit mx-auto opacity-80 hover:opacity-100">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/eka_logo.png"
                  alt="EKA Balance Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-lg font-medium tracking-tight">EKA Balance</span>
            </Link>

            {/* Contact Info */}
            <div className="space-y-1 mb-8 text-gray-500 text-xs">
              <p>Carrer Pelai, 12, 08001 Barcelona</p>
              <p>info@ekabalance.com</p>
            </div>

            {/* Footer Links */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <Link
                  href="/discounts"
                  className="text-gray-500 hover:text-black transition-colors duration-200 text-xs"
                >
                  {t('footer.discounts')}
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-black transition-colors duration-200 text-xs"
                >
                  {t('footer.privacyPolicy')}
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-gray-500 hover:text-black transition-colors duration-200 text-xs"
                >
                  {t('footer.cookiePolicy')}
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-500 hover:text-black transition-colors duration-200 text-xs"
                >
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>

            {/* Language Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Globe className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">{t('footer.selectLanguage')}</span>
              </div>
              <div className="flex justify-center space-x-2">
                {(['ca', 'en', 'es', 'ru'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded text-xs transition-colors duration-200 ${language === lang
                      ? 'bg-gray-200 text-black font-medium'
                      : 'text-gray-500 hover:bg-gray-100'
                      }`}
                  >
                    {lang === 'ca' && 'Catalan'}
                    {lang === 'en' && 'English'}
                    {lang === 'es' && 'Spanish'}
                    {lang === 'ru' && 'Russian'}
                  </button>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xs text-gray-400">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}
