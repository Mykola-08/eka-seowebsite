'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProblemState, FUNNEL_DATA } from '@/lib/funnel-data';

interface AdaptiveTransformationProps {
  problem: ProblemState;
}

export function AdaptiveTransformation({ problem }: AdaptiveTransformationProps) {
  const content = FUNNEL_DATA[problem];

  return (
    <section className="bg-background py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
          The Transformation
        </h2>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={problem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card  rounded-[2rem] p-8 md:p-12"
          >
            <p className="text-2xl md:text-4xl font-semibold leading-tight md:leading-tight text-primary">
              "{content.transformation}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}