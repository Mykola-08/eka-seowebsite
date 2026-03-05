'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Language } from '@/contexts/LanguageTypes';
import { useLanguage } from '@/contexts/LanguageContext';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';

const ToastContainer = dynamic(() => import('@/components/Toast'), { ssr: false });
const LanguagePopup = dynamic(() => import('@/components/LanguagePopup'), { ssr: false });
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });
const FooterPillMenu = dynamic(() => import('@/components/FooterPillMenu'), { ssr: false });

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
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);

        setIsScrolled((prev) => {
          const next = scrollTop > 20;
          return prev === next ? prev : next;
        });
        setShowMobileCTA((prev) => {
          const next = scrollPercent > 0.7;
          return prev === next ? prev : next;
        });
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
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

  const headerSurfaceClass = isScrolled
    ? 'bg-white/70 backdrop-blur-xl border-gray-200/50 shadow-sm'
    : 'bg-transparent';

  const dropdownSurfaceClass = isScrolled
    ? 'bg-white/60 backdrop-blur-xl border-gray-200/40 shadow-lg'
    : 'bg-white/40 backdrop-blur-lg border-gray-200/30';

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
        { name: t('nav.parents'), href: '/services/parents' },
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
      {/* Navigation with scroll effect - Liquid Glass Style */}
      <nav className={`sticky top-0 z-50 transition duration-500 border-b border-transparent ${headerSurfaceClass}`}>
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
                <div key={item.name} className={`nav-item ${item.hasDropdown ? 'relative flex items-center h-full' : 'flex items-center h-full'}`}
                  ref={item.hasDropdown ? personalServicesRef : undefined}>
                  {item.hasDropdown ? (
                    <>
                      <Link
                        href={item.href}
                        className="nav-trigger text-[13px] font-medium text-gray-800 hover:text-black transition-colors duration-200 flex items-center tracking-tight"
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

                      {/* Dropdown menu with refined frosted glass aesthetic */}
                      <div
                        className={`nav-dropdown ${showPersonalServices ? 'is-open opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'} ${dropdownSurfaceClass} border border-t-0 rounded-b-3xl p-3 min-w-[240px] absolute top-full left-1/2 -translate-x-1/2 mt-0 origin-top transition-all duration-300 ease-out z-50`}
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
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setShowPersonalServices(false)}
                              className="block px-3 py-2.5 text-[13px] text-gray-600 hover:text-black hover:font-medium hover:bg-white/40 hover:backdrop-blur-sm rounded-lg transition-all duration-150 tracking-tight"
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
                      className="text-[13px] font-medium text-gray-800 hover:text-black transition-colors duration-200 tracking-tight"
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
                      className="text-[13px] font-medium text-gray-800 hover:text-black transition-colors duration-200 tracking-tight"
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
                variant="default"
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
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden fixed top-[56px] left-0 w-full h-[calc(100vh-56px)] bg-[#f5f5f7] overflow-y-auto z-40"
              >
                <div className="p-6 space-y-6">
                  {navigation.map(item => (
                    <div key={item.name} className="border-b border-gray-200/50 pb-4 last:border-0">
                      {item.isExternal ? (
                        <a
                          href={item.href}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            window.open(item.href, '_blank', 'noopener,noreferrer');
                          }}
                          className="block py-3 text-2xl font-semibold text-gray-900 tracking-tight"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-3 text-2xl font-semibold text-gray-900 tracking-tight"
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
                              className="block py-2 text-lg text-gray-500 font-medium pl-4"
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
                    <Button asChild variant="default" size="lg" className="w-full text-base font-semibold rounded-xl">
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
            <Button asChild variant="default" size="lg" className="w-full text-base font-bold rounded-full shadow-lg">
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
            <p>contact@ekabalance.com</p>
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
      <FooterPillMenu />
    </div>
  );
}
