'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FUNNEL_DATA, type ProblemState } from '@/lib/funnel-data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface AdaptiveMethodologyProps {
  currentProblem: ProblemState;
  className?: string;
}

export function AdaptiveMethodology({ currentProblem, className }: AdaptiveMethodologyProps) {
  const content = FUNNEL_DATA[currentProblem];
  const Icon = content.methodologyIcon;
  const { t } = useLanguage();

  return (
    <section id="solutions" className={cn("py-20 md:py-28 bg-background relative scroll-mt-20", className)}>
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold tracking-wide text-primary uppercase mb-3">{t('funnel.approach') || 'Our Approach'}</h2>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`methodology-${currentProblem}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8">
              <Icon size={40} />
            </div>
            
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-balance text-foreground">
              {t(content.methodologyTitle)}
            </h3>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance max-w-3xl">
              {t(content.methodologyText)}
            </p>

            <div className="mt-16 p-8 md:p-12 bg-muted/30 rounded-2xl border border-border/60 max-w-3xl text-left mx-auto relative">
                <div className="absolute -top-4 left-8 md:left-12">
                   <p className="font-medium text-primary text-xs uppercase tracking-widest bg-background border-0 rounded-full px-4 py-2 inline-block">
                     {t('funnel.clinicalApproach') || 'Clinical Approach'}
                   </p>
                </div>
                <p className="text-foreground leading-relaxed font-medium text-lg md:text-xl">
                  "{t(content.authoritativeMethod)}"
                </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-32 pt-16 border-t border-muted/50">
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-medium tracking-tight tabular-nums">1,500+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{t('stats.sessions') || 'Sessions'}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-medium tracking-tight tabular-nums">10+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{t('stats.experience') || 'Years Experience'}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-medium tracking-tight tabular-nums">96%</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{t('stats.satisfaction') || 'Client Satisfaction'}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-medium tracking-tight tabular-nums">9</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{t('stats.countries') || 'Countries Served'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
