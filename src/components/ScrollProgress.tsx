'use client';

import { useEffect, useState } from 'react';

/**
 * Thin scroll-progress bar pinned at the very top of the viewport.
 * Uses a primary-brand color to match the site's CTA style.
 * Only visible once the user starts scrolling (> 5% of page height).
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
        setProgress(pct);
        rafId = null;
      });
    };

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
        className="h-full bg-primary origin-left"
        style={{
          width: `${progress}%`,
          transition: 'width 80ms linear',
        }}
      />
    </div>
  );
}
