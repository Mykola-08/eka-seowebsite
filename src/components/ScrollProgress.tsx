'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the true scroll position even when body is scroll-locked
 * (the position:fixed trick used by useScrollLock sets body.style.top = -${scrollY}px,
 * causing window.scrollY to return 0).
 */
function getEffectiveScrollY(): number {
  if (document.body.style.position === 'fixed') {
    const top = document.body.style.top;
    return top ? Math.abs(parseInt(top, 10)) : 0;
  }
  return window.scrollY;
}

/**
 * Thin scroll-progress bar pinned at the very top of the viewport.
 * - Updates continuously on scroll (RAF-throttled for performance).
 * - Does NOT reset when overlays/popups apply scroll-lock.
 * - Initialises on mount to reflect current scroll position.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      const scrollTop = getEffectiveScrollY();
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    // Initialise immediately so bar reflects current position on page load
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  if (progress < 2) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-primary origin-left will-change-[width]"
        style={{
          width: `${progress}%`,
          transition: 'width 50ms linear',
        }}
      />
    </div>
  );
}
