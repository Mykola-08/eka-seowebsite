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
import { ArrowLeft01Icon, SparklesIcon } from '@/lib/icons';
import PageLayout from '@/components/PageLayout';

export default function FirstTimeContent() {
  const { t } = useLanguage();
  const [problem, setProblem] = useState<ProblemState | null>(null);

  // Automatically scroll down when a problem is selected
  useEffect(() => {
    if (problem) {
      setTimeout(() => {
        const element = document.getElementById('funnel-solutions');
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, [problem]);

  return (
    <PageLayout
      seo={{
        title: t('assessment.title'),
        description: t('assessment.subtitle'),
        keywords: t('firstTime.seo.keywords'),
      }}
    >
      <div className="bg-background pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-6 mb-20 max-w-7xl">
           <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,113,227,0.03),transparent)] pointer-events-none" />
              <FirstTimeWizard onComplete={setProblem} />
           </div>
        </div>

        <AnimatePresence>
          {problem && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              id="funnel-solutions"
              className="pt-20 border-t border-border/60"
            >
              <div className="container mx-auto px-6 mb-16 text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                   <SparklesIcon className="w-4 h-4" /> {t('assessment.recommendation.badge')}
                </div>
                <h2 className="apple-title text-4xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
                   {t(FUNNEL_DATA[problem].heroHeadline)}
                </h2>
                <p className="apple-subtitle max-w-3xl mx-auto">
                   {t(FUNNEL_DATA[problem].heroSubheadline)}
                </p>
              </div>
              
              <div className="space-y-40 pb-24">
                <AdaptiveMethodology currentProblem={problem} />
                <AdaptiveServices currentProblem={problem} />
                <div className="bg-muted/30 py-40">
                   <FunnelReviews testimonials={FUNNEL_DATA[problem].testimonials} />
                </div>
              </div>
              
              <div className="container mx-auto px-6 flex justify-center py-24">
                <Button 
                  variant="outline" 
                  size="xl" 
                  onClick={() => {
                    setProblem(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="gap-3 rounded-full px-12 h-18 text-base border-border hover:bg-muted transition-all font-black uppercase tracking-widest"
                >
                  <ArrowLeft01Icon className="w-5 h-5" /> {t('form.startOver')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}
