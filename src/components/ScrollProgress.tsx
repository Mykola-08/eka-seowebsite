'use client';

import { motion, useScroll } from 'framer-motion';

/**
 * Thin scroll-progress bar pinned at the very top of the viewport.
 * - Updates on every animation frame via Framer Motion MotionValue.
 * - No spring lag — tracks scroll position in real time, even while scrolling.
 * - Does NOT reset when modals use overflow:hidden locking methods.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-primary origin-left will-change-transform"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
