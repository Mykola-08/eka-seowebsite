'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { type ProblemState, FUNNEL_DATA } from '@/lib/funnel-data';
import FirstTimeWizard from '@/components/FirstTimeWizard';
import { AdaptiveMethodology } from '@/components/templates/AdaptiveMethodology';
import { AdaptiveServices } from '@/components/templates/AdaptiveServices';
import { FunnelReviews } from '@/components/templates/FunnelReviews';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft01Icon } from '@/lib/icons';

export default function FirstTimeContent() {
  const { t } = useLanguage();
  const [problem, setProblem] = useState<ProblemState | null>(null);

  // Automatically scroll down when a problem is selected
  useEffect(() => {
    if (problem) {
      setTimeout(() => {
        document.getElementById('funnel-solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [problem]);

  return (
    <main className="bg-background pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 mb-20 max-w-6xl">
         <div className="text-center max-w-3xl mx-auto mb-10 mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 tracking-tight">
              {t('form.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              {t('form.subtitle')}
            </p>
         </div>
         <FirstTimeWizard onComplete={setProblem} />
      </div>

      <AnimatePresence>
        {problem && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            id="funnel-solutions"
            className="border-t border-border pt-20"
          >
            <div className="container mx-auto px-4 mb-16 text-center">
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                {t('common.whyItWorks') || 'Why this works for you'}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 text-balance">
                 {t(FUNNEL_DATA[problem].heroHeadline)}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                 {t(FUNNEL_DATA[problem].heroSubheadline)}
              </p>
            </div>
            
            <AdaptiveMethodology currentProblem={problem} />
            <AdaptiveServices currentProblem={problem} />
            <FunnelReviews testimonials={FUNNEL_DATA[problem].testimonials} />
            
            <div className="container mx-auto px-4 flex justify-center py-20">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  setProblem(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="gap-2 rounded-full"
              >
                <ArrowLeft01Icon className="w-4 h-4" /> {t('form.startOver')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}