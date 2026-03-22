'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

/**
 * Thin scroll-progress bar pinned at the very top of the viewport.
 * - Uses requestAnimationFrame throttling for smooth 60fps updates.
 * - Width-based approach for broad browser compatibility.
 * - Does NOT reset when modals use overflow:hidden locking methods.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      setProgress((scrollTop / scrollHeight) * 100);
    }
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateProgress);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateProgress]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-primary will-change-[width] transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
