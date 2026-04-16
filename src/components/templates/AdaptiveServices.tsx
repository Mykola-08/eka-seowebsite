'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FUNNEL_DATA, type ProblemState } from '@/lib/funnel-data';
import { SERVICES_DATA, PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import ServiceCard from '@/components/ServiceCard';
import PersonalizedServiceCard from '@/components/PersonalizedServiceCard';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceItem, PersonalizedServiceItem } from '@/shared/types';

interface AdaptiveServicesProps {
  currentProblem: ProblemState;
  className?: string;
}

export function AdaptiveServices({ currentProblem, className }: AdaptiveServicesProps) {
  const content = FUNNEL_DATA[currentProblem];
  const { t } = useLanguage();
  
  // Find recommended services across both constants
  const recommendedItems = content.recommendedServices.map(id => {
    const service = SERVICES_DATA.find(s => s.id === id);
    if (service) return { type: 'standard' as const, data: service };
    
    const personalized = PERSONALIZED_SERVICES_DATA.find(p => p.id === id);
    if (personalized) return { type: 'personalized' as const, data: personalized };
    
    return null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section className={cn("py-20 md:py-32 bg-background relative", className)}>
      <div className="container px-4 md:px-6">
        <div className="mb-16 md:mb-20 md:text-center max-w-3xl md:mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-balance text-foreground">
            {t('funnel.recommendedSolutions') || 'Your Recommended Solutions'}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('funnel.basedOnSelection') || 'Based on your selection, these are the best paths forward to help you achieve your goals.'}
          </p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {recommendedItems.map((item, idx) => (
              <motion.div
                key={`${currentProblem}-${item.data.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={cn(
                  "h-full", 
                  // Make the first item larger if there's an odd number of items, or just highlight it
                  idx === 0 && recommendedItems.length % 2 !== 0 && "md:col-span-2 lg:col-span-2"
                )}
              >
                {item.type === 'standard' ? (
                  <ServiceCard service={item.data as ServiceItem} />
                ) : (
                  <PersonalizedServiceCard service={item.data as PersonalizedServiceItem} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
