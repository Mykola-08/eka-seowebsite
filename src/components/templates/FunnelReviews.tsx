'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { StarIcon } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import { type Testimonial } from '@/lib/funnel-data';
import { useLanguage } from '@/contexts/LanguageContext';

interface FunnelReviewsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function FunnelReviews({ testimonials, className }: FunnelReviewsProps) {
  const { t } = useLanguage();
  return (
    <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            {t('funnel.reviews.title') || 'Real Stories, Real Results'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('funnel.reviews.subtitle') || 'Don\'t just take our word for it. Hear from people who have transformed their well-being.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-background rounded-3xl p-8   border-0 flex flex-col justify-between"
              >
                <div className="flex gap-1 mb-6 text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <HugeiconsIcon key={star} icon={StarIcon} size={20} className="fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed text-foreground/90 font-medium mb-8 italic">
                  {t(testimonial.text)}
                </blockquote>
                
                <div className="flex items-center gap-4 mt-auto pt-4  border-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{t('funnel.reviews.verifiedClient') || 'Verified Client'}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
