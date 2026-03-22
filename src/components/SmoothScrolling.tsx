'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Scroll to top instantly on every route change
  useEffect(() => {
    const lenis = (window as Window & { lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (window.innerWidth < 1024) {
      return;
    }

    let lenis: { raf: (time: number) => void; scrollTo: (target: string) => void; destroy: () => void } | null = null;
    let rafId = 0;
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement | null;
      const href = target?.getAttribute('href');

      if (!href || href === '#' || !lenis) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(href);
    };

    const start = async () => {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });
      // Expose globally for hooks like useScrollLock to access .stop() and .start()
      (window as Window & { lenis?: typeof lenis }).lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      anchors.forEach((anchor) => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    };

    start().catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('SmoothScrolling: Failed to initialize Lenis', err);
      }
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
