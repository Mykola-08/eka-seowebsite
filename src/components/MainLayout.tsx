'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import ToastContainer from '@/components/Toast';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { Language } from '@/contexts/LanguageTypes';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguagePopup from '@/components/LanguagePopup';
import CookieBanner from './CookieBanner';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const { logPageView } = useAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  // Log page views
  useEffect(() => {
    if (pathname) {
      logPageView(pathname);
    }
  }, [pathname, logPageView]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileServicesExpanded(false);
  }, [pathname]);

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

  const isActivePath = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen">
      <OfflineIndicator />

      {/* Navigation with scroll effect */}
        <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out-quart border-b border-gray-200/50 ${isScrolled ? 'bg-white/85 backdrop-blur-xl shadow-sm' : 'bg-white/70 backdrop-blur-md'}`}
          style={{ '--nav-height': isScrolled ? '56px' : '64px' } as React.CSSProperties}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`flex items-center justify-between transition-all duration-500 ease-in-out-quart ${isScrolled ? 'h-14' : 'h-16'
              }`}>
              {/* Logo Only - Left Side */}
              <Link href="/" className="flex items-center flex-shrink-0 group relative">
                <div className={`relative transition-all duration-500 ease-in-out-quart ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                  <Image
                    src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/eka_logo.png"
                    alt="EKA Balance Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex items-center justify-center flex-1 mx-8">
                <div className="flex items-center space-x-2">
                  {navigation.map(item => (
                    <div key={item.name} className={`nav-item ${item.hasDropdown ? 'relative' : ''}`}
                      ref={item.hasDropdown ? personalServicesRef : undefined}>
                      {item.hasDropdown ? (
                        <>
                          <Link
                            href={item.href}
                            className={`nav-trigger font-medium transition-all duration-200 ease-out-quart flex items-center px-5 py-3 rounded-apple hover:bg-white/60 ${isActivePath(item.href) ? 'text-accent' : 'text-eka-dark hover:text-accent'
                              }`}
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleHide}
                            onFocus={openDropdown}
                            onBlur={scheduleHide}
                            suppressHydrationWarning
                          >
                            {item.name}
                            <ChevronDown className="ml-1 w-4 h-4" />
                          </Link>

                          {/* Hover bridge for seamless navigation */}
                          <div
                            className="hover-bridge"
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleHide}
                            aria-hidden="true"
                          />

                          {/* Dropdown menu with CSS-first positioning */}
                          <div
                            className={`nav-dropdown ${showPersonalServices ? 'is-open' : ''} ${isScrolled ? 'bg-gray-100/90 backdrop-blur-xl' : 'bg-gray-100'}`}
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
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setShowPersonalServices(false)}
                              className="flex items-center justify-center h-12 text-sm font-medium transition-colors duration-200 ease-out-quart text-eka-dark hover:text-accent rounded-xl hover:bg-white/70"
                                style={{
                                  marginBottom: index < item.dropdownItems!.length - 1 ? '8px' : '0'
                                }}
                                role="menuitem"
                                suppressHydrationWarning
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : item.isExternal ? (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          className="font-medium transition-all duration-200 px-5 py-3 rounded-apple hover:bg-white/60 text-eka-dark hover:text-accent"
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
                          className={`font-medium transition-all duration-200 ease-out-quart px-5 py-3 rounded-apple hover:bg-white/60 ${item.isGold
                            ? 'gold-shimmer font-black bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-yellow-200/50 hover:from-yellow-100 hover:via-amber-100 hover:to-yellow-100'
                            : isActivePath(item.href) ? 'text-accent' : 'text-eka-dark hover:text-accent'
                            }`}
                          suppressHydrationWarning
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">

                {/* Reserva Button - visible on tablet+ */}
                <Link
                  href="/booking"
                  className="hidden sm:inline-flex bg-accent hover:bg-accent-dark text-eka-dark font-semibold px-6 py-3 rounded-full transition-colors duration-200 ease-out-quart shadow-sm hover:shadow-md"
                  suppressHydrationWarning
                >
                  {t('nav.bookNow')}
                </Link>

                {/* Mobile Book Now - compact pill */}
                <Link
                  href="/booking"
                  className="sm:hidden bg-accent text-eka-dark font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200 shadow-sm active:scale-95"
                  suppressHydrationWarning
                >
                  {t('nav.bookNow')}
                </Link>

                {/* Mobile menu button - 44px touch target */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation - Full-screen overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="md:hidden fixed inset-0 top-[calc(var(--nav-height,56px))] z-40 bg-white/98 backdrop-blur-2xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Scrollable nav items */}
                    <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-6 pb-32">
                      <div className="space-y-1">
                        {navigation.map(item => (
                          <div key={item.name}>
                            {item.isExternal ? (
                              <a
                                href={item.href}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsMenuOpen(false);
                                  window.open(item.href, '_blank', 'noopener,noreferrer');
                                }}
                                className="flex items-center min-h-[48px] px-4 py-3.5 rounded-2xl font-medium text-[17px] transition-colors duration-200 text-gray-700 active:bg-gray-100"
                              >
                                {item.name}
                              </a>
                            ) : item.hasDropdown ? (
                              <>
                                <button
                                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                                  className={`flex items-center justify-between w-full min-h-[48px] px-4 py-3.5 rounded-2xl font-medium text-[17px] transition-colors duration-200 ${
                                    isActivePath(item.href) ? 'text-[#FFB405] bg-[#FFB405]/10' : 'text-gray-700 active:bg-gray-100'
                                  }`}
                                >
                                  {item.name}
                                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                  {mobileServicesExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l-2 border-gray-100 pl-3">
                                        <Link
                                          href={item.href}
                                          onClick={() => setIsMenuOpen(false)}
                                          className="flex items-center min-h-[44px] px-3 py-2.5 text-[15px] font-semibold text-gray-800 active:bg-gray-50 rounded-xl transition-colors"
                                        >
                                          {t('nav.allServices') || 'All Services'}
                                        </Link>
                                        {item.dropdownItems?.map(dropdownItem => (
                                          <Link
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center min-h-[44px] px-3 py-2.5 text-[15px] font-medium text-gray-600 active:bg-gray-50 rounded-xl transition-colors"
                                          >
                                            {dropdownItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center min-h-[48px] px-4 py-3.5 rounded-2xl font-medium text-[17px] transition-colors duration-200 ${
                                  item.isGold
                                    ? 'text-amber-600 bg-amber-50 border border-amber-100 font-bold'
                                    : isActivePath(item.href) ? 'text-[#FFB405] bg-[#FFB405]/10' : 'text-gray-700 active:bg-gray-100'
                                }`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Mobile Language Selector */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center space-x-2 mb-3 px-4">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400 font-medium">{t('footer.selectLanguage')}</span>
                        </div>
                        <div className="flex gap-2 px-4">
                          {(['ca', 'en', 'es', 'ru'] as Language[]).map((lang) => (
                            <button
                              key={lang}
                              onClick={() => setLanguage(lang)}
                              className={`flex-1 min-h-[44px] px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                                language === lang
                                  ? 'bg-accent text-eka-dark'
                                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
                              }`}
                            >
                              {lang.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Fixed bottom CTA in mobile menu */}
                    <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm pb-safe">
                      <Link
                        href="/booking"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full bg-accent hover:bg-accent-dark text-eka-dark font-bold text-center py-4 rounded-2xl transition-colors duration-200 shadow-sm active:scale-[0.98] text-[17px]"
                      >
                        {t('nav.bookNow')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Toast Notifications */}
        <ToastContainer />

        {/* Cookie Banner */}
        <CookieBanner />
        <LanguagePopup />

        {/* Fixed Mobile Bottom CTA */}
        <AnimatePresence>
          {showMobileCTA && !isMenuOpen && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed bottom-0 left-0 right-0 px-4 pt-3 pb-safe bg-white/90 backdrop-blur-xl border-t border-gray-200/50 md:hidden z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
            >
              <Link
                href="/booking"
                className="block w-full bg-accent hover:bg-accent-dark text-eka-dark font-bold text-center py-3.5 rounded-2xl shadow-lg transition-transform active:scale-[0.98] text-[17px] mb-2"
              >
                {t('nav.bookNow')}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-10 sm:py-12 md:py-16 bg-gray-900 text-white mb-20 md:mb-0 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center space-x-3 mb-8 group w-fit mx-auto">
              <div className="relative w-10 h-10">
                <Image
                  src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/eka_logo.png"
                  alt="EKA Balance Logo"
                  fill
                  className="object-contain transition-transform duration-300 ease-out-quart group-hover:scale-105"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-medium">EKA Balance</span>
            </Link>

            {/* Contact Info */}
            <div className="space-y-2 mb-8 text-gray-100">
              <p>{t('footer.address')}</p>
              <p>{t('footer.email')}</p>
            </div>

            {/* Footer Links */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                <Link
                  href="/discounts"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {t('footer.discounts')}
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {t('footer.privacyPolicy')}
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {t('footer.cookiePolicy')}
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>

            {/* Language Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{t('footer.selectLanguage')}</span>
              </div>
              <div className="flex justify-center gap-2 sm:space-x-4">
                {(['ca', 'en', 'es', 'ru'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`min-w-[48px] min-h-[44px] px-3 py-2 rounded-apple text-sm font-medium transition-colors duration-200 ${language === lang
                      ? 'bg-accent text-eka-dark'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600'
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
            <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-gray-400">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

