import { useEffect } from 'react';

/**
 * Locks body scroll when a modal/popup is open without losing window.scrollY context.
 * This prevents the scroll progress bar from jumping to zero.
 * It uses simple overflow hidden + touch-action to prevent iOS scroll bleed,
 * rather than the position:fixed hack which ruins scroll coordinate mapping.
 * Also stops Lenis smooth scrolling instance if it's available globally.
 */
type WindowWithLenis = Window & { lenis?: { stop: () => void; start: () => void } };

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const win = window as unknown as WindowWithLenis;

    if (isLocked) {
      // Pause Lenis smooth scrolling if it exists globally
      if (win.lenis && typeof win.lenis.stop === 'function') {
        win.lenis.stop();
      }

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Use overflow:hidden to lock the body without changing position
      // touch-action: none prevents iOS Safari rubber-band scrolling on the background
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      // Compensate for scrollbar removal to prevent layout shift
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      // Resume Lenis smooth scrolling
      if (win.lenis && typeof win.lenis.start === 'function') {
        win.lenis.start();
      }

      // Restore body properties
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      // Cleanup on unmount
      if (win.lenis && typeof win.lenis.start === 'function') {
        win.lenis.start();
      }
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}
