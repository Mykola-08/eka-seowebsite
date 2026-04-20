'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FooterUncover from '@/components/FooterUncover';
import { usePathname } from 'next/navigation';
import { TouchInteraction01Icon, Brain01Icon, Apple01Icon, StarIcon, ArrowDown01Icon, UserIcon, MusicNote01Icon, PaintBoardIcon, GraduationScrollIcon, Briefcase01Icon, UserGroupIcon, BodyPartMuscleIcon, FavouriteIcon } from '@/lib/icons';

import { motion, AnimatePresence } from 'framer-motion';

import { Language } from '@/contexts/LanguageTypes';
import { useLanguage } from '@/contexts/LanguageContext';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';
import ToastContainer from '@/components/Toast';
import FooterPillMenu from '@/components/FooterPillMenu';
import NewsletterSignup from '@/components/NewsletterSignup';

// Off-screen / delayed UI — ship outside the critical bundle
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const { logPageView } = useAnalytics();
  
  // Log page views
  useEffect(() => {
    if (pathname) {
      logPageView(pathname);
    }
  }, [pathname, logPageView]);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useClickOutside<HTMLDivElement>(() => setActiveDropdown(null));

  // Hover intent management for dropdown
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeTriggerRef = useRef<HTMLElement | null>(null);
  const [, setDropdownPosition] = useState<{ left: number; top: number; originX: number; triggerBottom: number; width: number; triggerCenterX: number } | null>(null);

  // Calculate where the dropdown should appear, anchored to the left of the trigger
  const computeDropdownPosition = useCallback((triggerElement: HTMLElement, panelWidth: number = 280) => {
    if (!triggerElement) return;
    const triggerRect = triggerElement.getBoundingClientRect();

    // Center the panel under the trigger, then clamp to viewport edges
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const idealLeft = triggerCenter - panelWidth / 2;

    const pad = 16;
    const clientWidth = document.documentElement.clientWidth;
    const clampedLeft = Math.max(pad, Math.min(idealLeft, clientWidth - panelWidth - pad));

    const top = triggerRect.bottom;

    // Beak: where the trigger center lands within the clamped panel
    const originX = ((triggerCenter - clampedLeft) / panelWidth) * 100;

    setDropdownPosition({
      left: clampedLeft,
      top: top,
      triggerBottom: triggerRect.bottom,
      originX: Math.max(5, Math.min(95, originX)),
      width: panelWidth,
      triggerCenterX: triggerCenter
    });
  }, []);

  const openDropdown = (e: React.MouseEvent | React.FocusEvent | undefined, id: string, panelWidth: number = 280) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    if (e && e.currentTarget) {
      activeTriggerRef.current = e.currentTarget as HTMLElement;
    }

    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

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
    }, 120);
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
    }, 180);
  };

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    return () => window.removeEventListener('resize', handleScrollOrResize);
  }, [activeDropdown]);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 20);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation items
  interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownWidth?: number;
  }

  const headerSurfaceClass = isScrolled
    ? 'bg-background/80 backdrop-blur-2xl border border-border/40 mt-4 rounded-full shadow-lg'
    : 'bg-background/50 backdrop-blur-xl border border-border/30 mt-4 rounded-full'

  const coreServices = [
    { name: t('services.massage.title') || 'Massage', href: '/services/massage', icon: <TouchInteraction01Icon className="w-4 h-4" />, subtitle: t('massage.benefit1') || 'Therapeutic massage' },
    { name: t('services.kinesiology.title') || 'Kinesiology', href: '/services/kinesiology', icon: <Brain01Icon className="w-4 h-4" />, subtitle: t('kinesiology.benefit1') || 'Muscle testing & balance' },
    { name: t('services.nutrition.title') || 'Nutrition', href: '/services/nutrition', icon: <Apple01Icon className="w-4 h-4" />, subtitle: t('nutrition.benefit1') || 'Functional nutrition' },
    { name: t('nav.revision360') || '360° Revision', href: '/360-revision', icon: <StarIcon className="w-4 h-4" />, subtitle: t('services.revision360.subtitle') || 'Full health assessment' },
  ];

  const personalizedServices = [
    { name: t('nav.athletes') || 'Athletes', href: '/services/athletes', icon: <BodyPartMuscleIcon className="w-3.5 h-3.5" /> },
    { name: t('nav.musicians') || 'Musicians', href: '/services/musicians', icon: <MusicNote01Icon className="w-3.5 h-3.5" /> },
    { name: t('nav.artists') || 'Artists', href: '/services/artists', icon: <PaintBoardIcon className="w-3.5 h-3.5" /> },
    { name: t('nav.students') || 'Students', href: '/services/students', icon: <GraduationScrollIcon className="w-3.5 h-3.5" /> },
    { name: t('nav.officeWorkers') || 'Office', href: '/services/office-workers', icon: <Briefcase01Icon className="w-3.5 h-3.5" /> },
    { name: t('nav.parents') || 'Parents', href: '/services/parents', icon: <FavouriteIcon className="w-3.5 h-3.5" /> },
    { name: t('nav.adults') || 'Adults', href: '/services/adults', icon: <UserIcon className="w-3.5 h-3.5" /> },
    { name: t('nav.families') || 'Families', href: '/services/families', icon: <UserGroupIcon className="w-3.5 h-3.5" /> },
  ];

  const navigation: NavItem[] = [
    {
      name: t('nav.services'),
      href: '/services',
      hasDropdown: true,
      dropdownWidth: 520,
    },
    {
      name: t('nav.revision360'),
      href: '/360-revision',
    },
    {
      name: t('nav.agenyz') || 'Agenyz',
      href: '/agenyz',
    },
    {
      name: t('personalizedServices.business') || 'For Business',
      href: '/for-business',
    },
  ];

  return (
    <>
      <FooterUncover
        footer={
          <footer className="pt-12 pb-32 md:py-16 bg-secondary text-foreground">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <Link href="/" className="flex items-center justify-center space-x-2 mb-8 group w-fit mx-auto opacity-80 hover:opacity-100">
                <div className="relative w-8 h-8">
                  <Image src="/images/eka_logo.png" alt="EKA Balance Logo" fill className="object-contain" sizes="32px" />
                </div>
                <span className="text-lg font-medium tracking-tight">EKA Balance</span>
              </Link>

              <div className="space-y-1 mb-8 text-muted-foreground text-sm">
                <p>{t('footer.address')}</p>
                <p>{t('footer.email')}</p>
              </div>

              <div className="mb-10 w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-8 px-4">
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-semibold text-foreground mb-2 px-2">{t('nav.services')}</h4>
                    <Link href="/services" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('nav.services')}</Link>
                    <Link href="/personalized-services" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('nav.personalizedServices')}</Link>
                    <Link href="/for-business" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('personalizedServices.business')}</Link>
                    <Link href="/vip" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('nav.vip')}</Link>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h4 className="font-semibold text-foreground mb-2 px-2">EKA Balance</h4>
                    <Link href="/360-revision" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('nav.revision360')}</Link>
                    <Link href="/first-time" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('hero.firstTime')}</Link>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h4 className="font-semibold text-foreground mb-2 px-2">{t('nav.aboutElena')}</h4>
                    <Link href="/about-elena" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('nav.aboutElena')}</Link>
                    <Link href="/booking" className="inline-flex min-h-11 items-center px-2 hover:text-foreground text-sm font-medium text-primary">{t('nav.bookNow')}</Link>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h4 className="font-semibold text-foreground mb-2 px-2">{t('footer.legal')}</h4>
                    <Link href="/discounts" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('footer.discounts')}</Link>
                    <Link href="/disclaimer" className="inline-flex min-h-11 items-center px-2 text-primary hover:text-primary/80 text-sm font-medium">{t('footer.disclaimer')}</Link>
                    <Link href="/privacy-policy" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('footer.privacyPolicy')}</Link>
                    <Link href="/cookie-policy" className="inline-flex min-h-11 items-center px-2 text-muted-foreground hover:text-foreground text-sm">{t('footer.cookiePolicy')}</Link>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex flex-col items-center">
                <h4 className="text-sm font-semibold text-foreground mb-3">{t('newsletter.title')}</h4>
                <NewsletterSignup />
              </div>

              <div className="mb-8">
                <div className="flex justify-center space-x-2">
                    {(['ca', 'en', 'es', 'ru'] as Language[]).map((lang) => (
                      <Button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        variant={language === lang ? 'default' : 'outline'}
                        size="sm"
                        className={`min-h-11 min-w-11 ${language === lang ? '' : 'text-muted-foreground'}`}
                      >
                        {lang.toUpperCase()}
                      </Button>
                    ))}
                </div>
              </div>

              <div className="pt-8">
                <p className="text-xs text-muted-foreground">{t('footer.copyright')}</p>
              </div>
            </div>
          </footer>
        }
      >
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
          <div className={`pointer-events-auto transition-all duration-500 max-w-7xl w-full mx-auto px-6 lg:px-8 ${headerSurfaceClass}`}>
            <div className="flex items-center h-14 relative">
              <Link href="/" className="flex items-center shrink-0 group relative opacity-90 hover:opacity-100 z-10">
                <div className="relative w-8 h-8">
                  <Image src="/images/eka_logo.png" alt="EKA Balance Logo" fill sizes="32px" className="object-contain" priority />
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2 z-10">
                {navigation.map(item => {
                  const isNavItemActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <div key={item.name} className="relative flex items-center h-full" ref={item.hasDropdown ? navRef : undefined}>
                      <Link
                        href={item.href}
                        className={`py-2 px-4 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-full ${isNavItemActive ? 'text-foreground bg-muted/60' : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'}`}
                        onMouseEnter={(e) => item.hasDropdown && openDropdown(e, item.name, item.dropdownWidth)}
                        onMouseLeave={item.hasDropdown ? scheduleHide : undefined}
                      >
                        {item.name}
                        {item.hasDropdown && <ArrowDown01Icon className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                      </Link>
                      
                      {/* Inner Dropdown */}
                      {item.hasDropdown && activeDropdown === item.name && (
                        <AnimatePresence>
                          <motion.div
                            key={`${item.name}-dropdown`}
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 z-110 pt-4"
                            style={{
                              width: item.dropdownWidth || 460,
                              transformOrigin: 'top center',
                            }}
                            onMouseEnter={() => keepMenuOpen(item.name)}
                            onMouseLeave={scheduleHide}
                          >
                            {/* Transparent bridge — covers gap between nav link and panel */}
                            <div className="absolute top-0 left-0 right-0 h-4 bg-transparent" />

                            {/* Arrow beak */}
                            <div
                              className="absolute top-2.5 h-3 w-3 bg-background/95 border-t border-l border-border rotate-45 z-10"
                              style={{ left: '50%', marginLeft: '-6px' }}
                            />

                            <div className="bg-background/95 backdrop-blur-2xl rounded-apple border border-border shadow-2xl overflow-hidden relative">
                              {/* Top accent */}
                              <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

                              <div className="p-4 space-y-4">
                                {/* Core services — 2 col grid */}
                                <div className="grid grid-cols-2 gap-1.5">
                                  {coreServices.map((svc) => (
                                    <Link
                                      key={svc.href}
                                      href={svc.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/70 transition-colors duration-200"
                                    >
                                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted text-muted-foreground group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors duration-200 shrink-0">
                                        {svc.icon}
                                      </span>
                                      <div className="min-w-0">
                                        <span className="font-medium text-sm text-foreground block leading-tight">{svc.name}</span>
                                        <span className="text-[11px] text-muted-foreground truncate block mt-0.5">{svc.subtitle}</span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>

                                {/* Divider + personalized section */}
                                <div className="border-t border-border/60 pt-3">
                                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-1 mb-2">
                                    {t('nav.personalizedServices') || 'Personalized for'}
                                  </p>
                                  <div className="grid grid-cols-4 gap-1">
                                    {personalizedServices.map((svc) => (
                                      <Link
                                        key={svc.href}
                                        href={svc.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/pill flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-muted/70 transition-colors duration-200 text-center"
                                      >
                                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted text-muted-foreground group-hover/pill:bg-primary/10 group-hover/pill:text-primary transition-colors duration-200">
                                          {svc.icon}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground group-hover/pill:text-foreground leading-tight transition-colors">{svc.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Footer links */}
                                <div className="border-t border-border/60 pt-2 flex items-center justify-between">
                                  <Link
                                    href="/services"
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors px-1"
                                  >
                                    {t('nav.services')} →
                                  </Link>
                                  <Link
                                    href="/personalized-services"
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-xs text-primary hover:text-primary/80 transition-colors font-medium px-1"
                                  >
                                    {t('nav.personalizedServices')} →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>
                  )
                })}
              </div>

              

              <div className="flex items-center space-x-3 ml-auto z-10">
                <Button asChild size="sm" className="rounded-full h-9 px-5">
                  <Link href="/booking">{t('nav.bookNow')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content" className="flex-1 w-full pb-24 md:pb-0">
          {children}
        </main>

        <ToastContainer />
        <CookieBanner />
      </FooterUncover>
      
      <div className="md:hidden">
        <FooterPillMenu />
      </div>
    </>
  );
}
