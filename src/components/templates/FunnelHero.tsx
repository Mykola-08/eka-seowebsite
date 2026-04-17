'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FUNNEL_DATA, type ProblemState } from '@/lib/funnel-data';
import { useLanguage } from '@/contexts/LanguageContext';

interface FunnelHeroProps {
  currentProblem: ProblemState;
  onProblemChange: (value: ProblemState) => void;
  className?: string;
}

export function FunnelHero({ currentProblem, onProblemChange, className }: FunnelHeroProps) {
  const content = FUNNEL_DATA[currentProblem];
  const { t } = useLanguage();

  return (
    <section className={cn("relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background -z-10" />
      
      <div className="container px-4 md:px-6 z-10 flex flex-col items-center text-center">
        {/* Interactive Options */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6"
        >
          <span className="text-xl sm:text-2xl font-medium text-muted-foreground">
            {t('funnel.hero.iAmLookingFor') || 'I am looking for help with...'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {Object.entries(FUNNEL_DATA).map(([key, data]) => {
              const isSelected = currentProblem === key;
              return (
                <button
                  key={key}
                  onClick={() => onProblemChange(key as ProblemState)}
                  className={cn(
                    "px-6 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-200 border border-border/20",
                    isSelected 
                      ? "border-primary bg-primary text-primary-foreground scale-105" 
                      : "border-muted/50 bg-background text-foreground hover:border-primary/50 hover:bg-muted/30"
                  )}
                >
                  {t(data.label)}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Headline (Adaptive) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`headline-${currentProblem}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground text-balance">
              {t(content.heroHeadline)}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {t(content.heroSubheadline)}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Button size="lg" className="rounded-full px-10 py-8 text-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all border-0 -none h-auto" asChild>
            <a href="#solutions">{t('funnel.hero.seeSolution') || 'See The Solution'}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
