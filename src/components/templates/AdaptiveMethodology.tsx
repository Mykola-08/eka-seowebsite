'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { FUNNEL_DATA, type ProblemState } from '@/lib/funnel-data';
import { cn } from '@/lib/utils';

interface AdaptiveMethodologyProps {
  currentProblem: ProblemState;
  className?: string;
}

export function AdaptiveMethodology({ currentProblem, className }: AdaptiveMethodologyProps) {
  const content = FUNNEL_DATA[currentProblem];
  const Icon = content.methodologyIcon;

  return (
    <section id="solutions" className={cn("py-20 md:py-28 bg-background relative scroll-mt-20", className)}>
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">Our Approach</h2>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`methodology-${currentProblem}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 shadow-sm">
              <HugeiconsIcon icon={Icon} size={32} />
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
              {content.methodologyTitle}
            </h3>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-3xl">
              {content.methodologyText}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24 pt-12 border-t border-border/40">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold tracking-tight tabular-nums">1,500+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Sessions</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold tracking-tight tabular-nums">10+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold tracking-tight tabular-nums">96%</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Satisfaction</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold tracking-tight tabular-nums">9</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Countries Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
