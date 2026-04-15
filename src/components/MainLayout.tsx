'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterUncover from '@/components/FooterUncover';
import { shimmerBlurDataURL } from '@/lib/image-utils';
import { usePathname } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { Apple01Icon, ArrowDown01Icon, Brain01Icon, Cancel01Icon, GlobeIcon, Medicine01Icon, Menu01Icon, NeuralNetworkIcon, RotateLeft01Icon, TouchInteraction01Icon } from '@hugeicons/core-free-icons';
import { motion, AnimatePresence } from 'framer-motion';

import { Language } from '@/contexts/LanguageTypes';
import { useLanguage } from '@/contexts/LanguageContext';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useScrollLock } from '@/hooks/useScrollLock';
import { Button } from '@/components/ui/button';
import ToastContainer from '@/components/Toast';
import LanguagePopup from '@/components/LanguagePopup';
import CookieBanner from './CookieBanner';
import FooterPillMenu from '@/components/FooterPillMenu';

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

  // Gesture support: swipe left from right edge to open menu
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Start within 40px of right edge, swipe left at least 50px, not too much vertical
      if (
        touchStartX > window.innerWidth - 40 &&
        deltaX < -50 &&
        Math.abs(deltaY) < 50 &&
        !isMenuOpen
      ) {
        setIsMenuOpen(true);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMenuOpen]);


  // Lock background scroll when mobile menu is open (prevents page progress reset on iOS/Android)
  useScrollLock(isMenuOpen);

  // Close mobile menu on browser back-button / Android back gesture
  useEffect(() => {
    if (!isMenuOpen) return;
    const handlePopState = () => setIsMenuOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isMenuOpen]);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useClickOutside<HTMLDivElement>(() => setActiveDropdown(null));

  // Hover intent management for dropdown
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navBarRef = useRef<HTMLDivElement>(null);
  const activeTriggerRef = useRef<HTMLElement | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; top: number; originX: number; triggerBottom: number; width: number } | null>(null);

  // Calculate where the dropdown should appear relative to the nav bar container
  const computeDropdownPosition = useCallback((triggerElement: HTMLElement, panelWidth: number = 280) => {
    if (!triggerElement) return;
    const triggerRect = triggerElement.getBoundingClientRect();

    // Center the dropdown under the trigger
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const idealLeft = triggerCenter - panelWidth / 2;

    // Viewport constraints
    const pad = 16;
    const minLeft = pad;
    const maxLeft = document.documentElement.clientWidth - panelWidth - pad;

    const clampedLeft = Math.max(minLeft, Math.min(idealLeft, maxLeft));

    // Make it attach completely flush with the main header
    const navRect = triggerElement.closest('nav')?.getBoundingClientRect();
    const top = navRect ? navRect.bottom : triggerRect.bottom + 8;

    // Compute transform-origin X percentage based on where the trigger center falls inside the dropdown
    const originX = ((triggerCenter - clampedLeft) / panelWidth) * 100;

    setDropdownPosition({
      left: clampedLeft,
      top: top,
      triggerBottom: triggerRect.bottom,
      originX: Math.max(10, Math.min(90, originX)),
      width: panelWidth
    });
  }, []);

  const openDropdown = (e: React.MouseEvent | React.FocusEvent | undefined, id: string, panelWidth: number = 280) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    // Check if triggered from an event
    if (e && e.currentTarget) {
      activeTriggerRef.current = e.currentTarget as HTMLElement;
    }

    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    // If a dropdown is already active, skip the delay for swift sequential navigation
    if (activeDropdown) {
      setActiveDropdown(id);
      if (activeTriggerRef.current) {
        computeDropdownPosition(activeTriggerRef.current, panelWidth);
      }
      return;
    }

    showTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(id);
      if (activeTriggerRef.current) {
        computeDropdownPosition(activeTriggerRef.current, panelWidth);
      }
    }, 200); // Short delay to prevent accidental activation
  };

  const keepMenuOpen = (id: string) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const scheduleHide = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // Short delay before disappearing
  };

  // Close dropdown on scroll or resize to prevent floating incorrectly
  useEffect(() => {
    const handleScrollOrResize = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    return () => window.removeEventListener('resize', handleScrollOrResize);
  }, [activeDropdown]);

  // Handle scroll effect for header
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        setIsScrolled((prev) => {
          const next = scrollTop > 20;
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

  // Global Escape key closes mobile menu or dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) setIsMenuOpen(false);
        else if (activeDropdown) setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, activeDropdown]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
    };
  }, []);

  // Navigation items
  interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownType?: 'services' | 'agenyz';
    dropdownWidth?: number;
    dropdownItems?: { name: string; href: string; image?: string; subtitle?: string }[];
    isGold?: boolean;
    isExternal?: boolean;
  }

  const headerSurfaceClass = isScrolled
    ? 'bg-white/70 backdrop-blur-2xl border-gray-200/50 '
    : 'bg-transparent';

  // Icon map for dropdown items
  const serviceIcons: Record<string, React.ReactNode> = {
    '/services/massage': <HugeiconsIcon icon={TouchInteraction01Icon} className="w-4 h-4"  />,
    '/services/kinesiology': <HugeiconsIcon icon={Brain01Icon} className="w-4 h-4"  />,
    '/services/nutrition': <HugeiconsIcon icon={Apple01Icon} className="w-4 h-4"  />,
    '/services/supplements': <HugeiconsIcon icon={Medicine01Icon} className="w-4 h-4"  />,
    '/services/systemic': <HugeiconsIcon icon={NeuralNetworkIcon} className="w-4 h-4"  />,
    '/360-revision': <HugeiconsIcon icon={RotateLeft01Icon} className="w-4 h-4"  />,
  };

  const navigation: NavItem[] = [
    {
      name: t('nav.services'),
      href: '/services',
      hasDropdown: true,
      dropdownType: 'services',
      dropdownWidth: 460,
      dropdownItems: [
        { name: t('services.massage.title') || 'Massage', href: '/services/massage' },
        { name: t('services.kinesiology.title') || 'Kinesiology', href: '/services/kinesiology' },
        { name: t('services.nutrition.title') || 'Nutrition', href: '/services/nutrition' },
        { name: t('service.supplements.title') || 'Supplements', href: '/services/supplements' },
        { name: t('service.systemic.title') || 'Systemic', href: '/services/systemic' },
        { name: t('services.revision360.title') || '360° Revision', href: '/360-revision' },
      ]
    },
    {
      name: 'Agenyz',
      href: '/agenyz',
      hasDropdown: true,
      dropdownType: 'agenyz',
      dropdownWidth: 380,
      dropdownItems: [
        {
          name: 'CellGenetiX',
          href: '/agenyz/CellGenetiX',
          image: 'https://storage.agenyz.eu/y1/f3/_En.vgnko1s5plrh7vau2elp51f9jzgl.png',
          subtitle: 'DNA cell support'
        },
        {
          name: 'OctoMagnesium',
          href: '/agenyz/Octomagnesium-XBi-A',
          image: 'https://storage.agenyz.eu/bs/rq/1240340_OCTOMAGNESIUMXBi-A.4z7ynoqb1iqdyexcgpej.jpg',
          subtitle: '8-form magnesium'
        },
        {
          name: '3D-Matrix',
          href: '/agenyz/3D-Matrix',
          image: 'https://storage.agenyz.eu/sc/w8/3dMatrix_En.6o8ovei0rtlqdqm6cixc1ff6mj.png',
          subtitle: 'Triple protein matrix'
        },
      ]
    },
    {
      name: t('nav.revision360'),
      href: '/360-revision'
    },
    {
      name: t('personalizedServices.business') || 'For Business',
      href: '/for-business'
    },
  ];

  return (
    <>
      <FooterUncover
        footer={
          <>
          {/* Footer */}
      <footer className="py-12 sm:py-16 bg-secondary text-gray-900 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
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
          <div className="space-y-1 mb-8 text-gray-500 text-sm">
            <p>Carrer Pelai, 12, 08001 Barcelona</p>
            <p>contact@ekabalance.com</p>
          </div>

          {/* Footer Links */}
          <div className="mb-10 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-8 px-4">
              {/* Column 1: Core Services */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-gray-900 mb-2">{t('nav.services')}</h4>
                <Link href="/services" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('nav.services')}
                </Link>
                <Link href="/personalized-services" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('nav.personalizedServices')}
                </Link>
                <Link href="/for-business" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('personalizedServices.business')}
                </Link>
                <Link href="/vip" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('nav.vip')}
                </Link>
              </div>

              {/* Column 2: Specific Modalities */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-gray-900 mb-2">EKA Balance</h4>
                <Link href="/360-revision" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('nav.revision360')}
                </Link>
                <Link href="/first-time" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('hero.firstTime')}
                </Link>
              </div>

              {/* Column 3: Company */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-gray-900 mb-2">{t('nav.aboutElena')}</h4>
                <Link href="/about-elena" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('nav.aboutElena')}
                </Link>
                <Link href="/booking" className="hover:text-black transition-colors duration-200 text-sm font-medium text-primary">
                  {t('nav.bookNow')}
                </Link>
              </div>

              {/* Column 4: Resources */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
                <Link href="/discounts" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('footer.discounts')}
                </Link>
                <Link href="/disclaimer" className="text-amber-600 hover:text-amber-800 transition-colors duration-200 text-sm font-medium">
                  Health Disclaimer
                </Link>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link href="/cookie-policy" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('footer.cookiePolicy')}
                </Link>
                <Link href="/terms-of-service" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                  {t('footer.termsOfService')}
                </Link>
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HugeiconsIcon icon={GlobeIcon} className="w-3 h-3 text-gray-400"  />
              <span className="text-xs text-gray-400">{t('footer.selectLanguage')}</span>
            </div>
            <div className="flex justify-center space-x-2">
                {(['ca', 'en', 'es', 'ru'] as Language[]).map((lang) => (
                  <Button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    variant={language === lang ? 'secondary' : 'ghost'}
                    size="sm"
                  >
                    {lang === 'ca' && 'Catalan'}
                    {lang === 'en' && 'English'}
                    {lang === 'es' && 'Spanish'}
                    {lang === 'ru' && 'Russian'}
                  </Button>
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
          </>
        }
      >
        {/* Main Content Container inside Uncover */}

      {/* Navigation with scroll effect - Liquid Glass Style */}
      <nav className={`sticky top-0 z-(--z-dropdown) transition duration-500 border-b border-transparent ${headerSurfaceClass}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-14 relative">
            {/* Logo Only - Left Side */}
            <Link href="/" className="flex items-center shrink-0 group relative opacity-90 hover:opacity-100 transition-opacity z-10">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/eka_logo.png"
                  alt="EKA Balance Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation — absolutely centered in the full nav bar width */}
            <div ref={navBarRef} className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2 z-10">
              {navigation.map(item => {
                const isNavItemActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                return (
                <div key={item.name} className={`nav-item ${item.hasDropdown ? 'relative flex items-center h-full' : 'flex items-center h-full'}`}
                  ref={item.hasDropdown ? navRef : undefined}>
                  {item.hasDropdown ? (
                    <>
                      <Link
                        href={item.href}
                        className={`nav-trigger py-4 px-4 -mx-4 text-sm font-medium transition-colors duration-200 flex items-center gap-1 tracking-tight group/trigger ${isNavItemActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        onMouseEnter={(e) => openDropdown(e, item.name, item.dropdownWidth)}
                        onMouseLeave={scheduleHide}
                        onFocus={(e) => openDropdown(e, item.name, item.dropdownWidth)}
                        onBlur={scheduleHide}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                        suppressHydrationWarning
                      >
                        {item.name}
                        <HugeiconsIcon icon={ArrowDown01Icon} className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-gray-600' : isNavItemActive ? 'text-gray-500' : 'text-gray-400 group-hover/trigger:translate-y-px'}`}  />
                      </Link>

                      {/* Hover bridge — spans full width of dropdown zone for seamless mouse travel, enlarged for wider safe zone */}
                      {activeDropdown === item.name && dropdownPosition && (
                        <div
                          className="fixed z-(--z-dropdown)"
                          style={{
                            top: dropdownPosition.triggerBottom - 15,
                            left: dropdownPosition.left - 30,
                            width: dropdownPosition.width + 60,
                            height: dropdownPosition.top - dropdownPosition.triggerBottom + 30,
                          }}
                          onMouseEnter={() => keepMenuOpen(item.name)}
                          onMouseLeave={scheduleHide}
                          aria-hidden="true"
                        />
                      )}

                      {/* Dropdown — positioned relative to viewport, flush with header */}
                      <AnimatePresence>
                        {activeDropdown === item.name && dropdownPosition && (
                          <motion.div
                              initial={{ opacity: 0, scaleY: 0.95, y: -4 }}
                              animate={{ opacity: 1, scaleY: 1, y: 0 }}
                              exit={{ opacity: 0, scaleY: 0.95, y: -4 }}
                              transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                            className="fixed z-40"
                            style={{
                              top: dropdownPosition.triggerBottom, // Start exactly from the bottom of the nav trigger
                              left: dropdownPosition.left - 40, // Add large invisible left padding zone
                              width: dropdownPosition.width + 80, // Expand width by total horizontal padding
                                transformOrigin: `${40 + (dropdownPosition.originX / 100 * dropdownPosition.width)}px top`,
                              paddingTop: Math.max(0, dropdownPosition.top - dropdownPosition.triggerBottom),
                              paddingLeft: 40, // Left invisible safe zone
                              paddingRight: 40, // Right invisible safe zone
                              paddingBottom: 40, // Bottom invisible safe zone
                            }}
                            onMouseEnter={() => keepMenuOpen(item.name)}
                            onMouseLeave={scheduleHide}
                            onKeyDown={(e) => {
                              if (e.key === 'Escape') {
                                setActiveDropdown(null);
                              }
                            }}
                            role="menu"
                            aria-label={`${item.name} submenu`}
                          >
                            {/* Inner content wrapper with the actual visual styling */}
                            <div
                              className="mx-auto overflow-hidden drop-shadow-[0_12px_40px_rgba(0,0,0,0.08)] relative bg-white/95 backdrop-blur-2xl rounded-b-2xl border border-t-0 border-white/60 ring-1 ring-black/4"
                              style={{ width: dropdownPosition.width }}
                            >
                              <div className="absolute inset-x-0 top-0 h-px bg-white/40" />

                              {item.dropdownType === 'agenyz' ? (
                                /* Agenyz: product image cards */
                                <>
                                  <div className="py-4 px-3">
                                    <p className="text-[10px] text-gray-400 tracking-[0.18em] uppercase px-2 mb-3 font-medium">Cellular health. Designed for you.</p>
                                    <div className="grid grid-cols-3 gap-2">
                                      {item.dropdownItems?.map((product, idx) => (
                                        <motion.div
                                          key={product.name}
                                          initial={{ opacity: 0, y: 4 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.18, delay: idx * 0.04 }}
                                        >
                                          <Link
                                            href={product.href}
                                            onClick={() => setActiveDropdown(null)}
                                            className="group/prod flex flex-col items-center p-2 rounded-xl hover:bg-gray-50 transition-colors"
                                            role="menuitem"
                                          >
                                            <div className="w-full aspect-square mb-2 relative bg-gray-50 rounded-xl overflow-hidden">
                                              {product.image && (
                                                <Image src={product.image} alt={product.name} fill className="object-contain p-1 group-hover/prod:scale-105 transition-transform duration-300" sizes="100px" />
                                              )}
                                            </div>
                                            <span className="text-xs font-semibold text-gray-800 text-center leading-tight">{product.name}</span>
                                            {product.subtitle && <span className="text-[10px] text-gray-400 text-center mt-0.5 leading-tight">{product.subtitle}</span>}
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="border-t border-gray-100 px-4 py-2.5 flex items-center justify-between">
                                    <Link
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
                                    >
                                      View catalogue →
                                    </Link>
                                    <a
                                      href="https://agenyz.es"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-xs text-gray-400 hover:text-black transition-colors"
                                    >
                                      agenyz.es ↗
                                    </a>
                                  </div>
                                </>
                              ) : (
                                /* Services: 2-column icon grid */
                                <>
                                  <div className="py-3 px-2 relative z-20">
                                    <div className="grid grid-cols-2 gap-0.5">
                                      {item.dropdownItems?.map((dropdownItem, idx) => (
                                        <motion.div
                                          key={dropdownItem.name}
                                          initial={{ opacity: 0, y: 4 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.18, delay: idx * 0.03 }}
                                        >
                                          <Link
                                            href={dropdownItem.href}
                                            onClick={() => setActiveDropdown(null)}
                                            className="group/item flex items-center gap-3 px-3 py-2.5 mx-0.5 rounded-xl text-sm text-gray-600 hover:text-gray-900 hover:bg-black/4 active:bg-black/[0.07] transition-all duration-150 tracking-tight"
                                            role="menuitem"
                                            suppressHydrationWarning
                                          >
                                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100/80 text-gray-500 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors duration-150 shrink-0">
                                              {serviceIcons[dropdownItem.href] || <HugeiconsIcon icon={TouchInteraction01Icon} className="w-4 h-4"  />}
                                            </span>
                                            <span className="font-medium">{dropdownItem.name}</span>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="border-t border-gray-200/50 px-3 py-2.5 relative z-20">
                                    <Link
                                      href={item.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center text-sm text-gray-400 hover:text-primary font-medium transition-colors duration-150 px-1.5"
                                    >
                                      <span>{t('nav.services')} →</span>
                                    </Link>
                                  </div>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.isExternal ? (
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      className={`py-4 px-4 -mx-4 text-[13px] font-medium transition-colors duration-200 tracking-tight ${isNavItemActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
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
                      className={`py-4 px-4 -mx-4 text-[13px] font-medium transition-colors duration-200 tracking-tight ${isNavItemActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                      suppressHydrationWarning
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
              })}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3 sm:space-x-4 shrink-0 ml-auto z-10">

              {/* Reserva Button - Visible on mobile now */}
              <Button
                asChild
                variant="default"
                size="sm"
                className="inline-flex rounded-full"
              >
                <Link href="/booking" suppressHydrationWarning>
                  {t('nav.bookNow')}
                </Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5"  />
                    ) : (
                      <HugeiconsIcon icon={Menu01Icon} className="w-5 h-5"  />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer — rendered at nav level so fixed positioning is viewport-relative */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.y > 150 || velocity.y > 500) {
                setIsMenuOpen(false);
              }
            }}
            className="md:hidden fixed inset-0 w-full h-dvh bg-secondary/90 backdrop-blur-xl z-(--z-modal) overflow-y-auto pt-15 rounded-t-[32px] shadow-lg overscroll-none touch-pan-y"
            onKeyDown={(e) => {
              if (e.key === 'Escape') setIsMenuOpen(false);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drag handle for visual affordance */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />
            {/* Close button */}
            <Button
              onClick={() => setIsMenuOpen(false)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-6 rounded-full"
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5"  />
            </Button>
            <div className="p-6 pb-24 space-y-4">
              <div className="flex flex-col space-y-2 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/40 shadow-xs">
                {/* Home */}
                <div className="border-b border-gray-100 pb-2">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                  >
                    {t('nav.home') || 'Home'}
                  </Link>
                </div>

                {/* Services */}
                <div className="border-b border-gray-100 py-2">
                  <Link
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                  >
                    {t('nav.services')}
                  </Link>
                  <div className="ml-2 space-y-1 mt-2 pl-4 border-l-2 border-gray-100">
                    {navigation.find(n => n.name === t('nav.services'))?.dropdownItems?.map(dropdownItem => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-2 text-lg text-gray-500 font-medium active:scale-[0.98] transition-transform"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-50 text-gray-400">
                          {serviceIcons[dropdownItem.href] || <HugeiconsIcon icon={TouchInteraction01Icon} className="w-4 h-4"  />}
                        </span>
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* For Business */}
                <div className="pt-2">
                  <Link
                    href="/for-business"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-2xl font-semibold text-gray-900 tracking-tight active:scale-[0.98] transition-transform"
                  >
                    {t('personalizedServices.business') || 'For Business'}
                  </Link>
                </div>
              </div>

              {/* Additional App Links */}
              <div className="flex flex-col space-y-2 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/40 shadow-xs">
                <div className="border-b border-gray-100 pb-2">
                  <Link
                    href="/360-revision"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-xl font-medium text-gray-800 tracking-tight active:scale-[0.98] transition-transform"
                  >
                    {t('nav.revision360')}
                  </Link>
                </div>
                <div className="pt-2">
                  <Link
                    href="/agenyz"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-xl font-medium text-gray-800 tracking-tight active:scale-[0.98] transition-transform"
                  >
                    Agenyz
                  </Link>
                </div>
              </div>

              {/* Mobile Reserva */}
              <div className="pt-4 pb-12">
                <Button asChild variant="default" size="xl" className="w-full">
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

      {/* Main Content */}
      <main id="main-content" className="flex-1 w-full pb-24 md:pb-0 overflow-x-hidden">
        {children}
      </main>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Cookie Banner */}
      <CookieBanner />
      <LanguagePopup />

      

            </FooterUncover>
      
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="md:hidden"
          >
            <FooterPillMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
