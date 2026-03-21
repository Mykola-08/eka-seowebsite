'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin scroll-progress bar pinned at the very top of the viewport.
 * - Updates continuously and smoothly on scroll using Framer Motion.
 * - Bypasses React state to eliminate lag/jumping.
 * - Does NOT reset when modals use overflow:hidden locking methods.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Optional: add a tiny spring for ultra-smooth buttery feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-primary origin-left will-change-transform"
        style={{ scaleX }}
      />
    </div>
  );
}
