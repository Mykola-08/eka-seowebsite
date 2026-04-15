'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckmarkCircle01Icon, SparklesIcon, Calendar01Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  const { t } = useLanguage();

  const trustPills = [
    t('labels.noInsuranceNeeded'),
    t('labels.flexibleSchedules'),
    t('labels.personalizedApproach'),
  ];

  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-background pb-16 pt-32">
      {/* Refined Ambient Background: remove loud blob colors, use primary soft glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex max-w-4xl flex-col items-center"
        >
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 gap-2 rounded-full border-0 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold tracking-[0.35em] uppercase text-primary">
            <HugeiconsIcon icon={SparklesIcon} className="h-3.5 w-3.5" />
            Integral Method · EKA Balance
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-6xl font-bold leading-[0.95] tracking-tighter text-foreground sm:text-7xl lg:text-[7rem]">
            {t('revision360.hero.title')}
          </h1>

          {/* Sub-headline */}
          <p className="mb-10 max-w-2xl text-balance text-xl font-light leading-relaxed text-muted-foreground sm:text-2xl">
            {t('revision360.hero.subtitle')}
          </p>

          {/* CTA buttons */}
          <div className="mb-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full px-8 text-base font-medium shadow-card hover:-translate-y-0.5 transition-all">
              <a href={`https://wa.me/34658867133?text=${encodeURIComponent(t('revision360.whatsapp.booking'))}`} target="_blank" rel="noopener noreferrer">
                <HugeiconsIcon icon={Calendar01Icon} className="mr-2 h-5 w-5" />
                {t('revision360.hero.cta')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full bg-background/50 px-8 text-base font-medium backdrop-blur-md shadow-sm hover:-translate-y-0.5 transition-all">
              <a href="#process">
                {t('revision360.service.title')}
                <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {trustPills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                <HugeiconsIcon icon={CheckmarkCircle01Icon} className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-16 max-w-2xl text-sm font-medium italic leading-relaxed text-muted-foreground"
        >
          &ldquo;{t('revision360.hero.quote')}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
