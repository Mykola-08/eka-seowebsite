'use client';

import { ReactNode, useEffect, useRef, useState, CSSProperties } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  from?: 'bottom' | 'left' | 'right' | 'top';
  amount?: number;
}

/**
 * Lightweight, CSS-only fade/slide-in wrapper. Replaces the previous
 * framer-motion implementation — same API, zero framer-motion bundle cost,
 * GPU-friendly (transform + opacity only, no layout-affecting properties).
 *
 * Respects `prefers-reduced-motion` and skips animation on the server so
 * there's no hydration mismatch.
 */
export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.3,
  className = '',
  from = 'bottom',
  amount = 12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '-50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = visible
    ? 'translate3d(0, 0, 0)'
    : from === 'bottom'
      ? `translate3d(0, ${amount}px, 0)`
      : from === 'top'
        ? `translate3d(0, -${amount}px, 0)`
        : from === 'left'
          ? `translate3d(-${amount}px, 0, 0)`
          : `translate3d(${amount}px, 0, 0)`;

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: translate,
    transition: `opacity ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    willChange: visible ? 'auto' : 'transform, opacity',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
