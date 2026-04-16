'use client';

import { motion } from 'framer-motion';
import { Clock3 } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

interface ServiceStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export default function ServiceSection() {
  const { t } = useLanguage();

  const steps: ServiceStep[] = [
    {
      number: '01',
      title: t('revision360.service.step1.title'),
      description: t('revision360.service.step1.description'),
      details: [
        t('revision360.service.step1.details.1'),
        t('revision360.service.step1.details.2'),
        t('revision360.service.step1.details.3'),
        t('revision360.service.step1.details.4'),
      ],
      duration: '45 min',
    },
    {
      number: '02',
      title: t('revision360.service.step2.title'),
      description: t('revision360.service.step2.description'),
      details: [
        t('revision360.service.step2.details.1'),
        t('revision360.service.step2.details.2'),
        t('revision360.service.step2.details.3'),
        t('revision360.service.step2.details.4'),
      ],
      duration: '60 min',
    },
    {
      number: '03',
      title: t('revision360.service.step3.title'),
      description: t('revision360.service.step3.description'),
      details: [
        t('revision360.service.step3.details.1'),
        t('revision360.service.step3.details.2'),
        t('revision360.service.step3.details.3'),
        t('revision360.service.step3.details.4'),
      ],
      duration: '90 min',
    },
    {
      number: '04',
      title: t('revision360.service.step4.title'),
      description: t('revision360.service.step4.description'),
      details: [
        t('revision360.service.step4.details.1'),
        t('revision360.service.step4.details.2'),
        t('revision360.service.step4.details.3'),
        t('revision360.service.step4.details.4'),
      ],
      duration: '30 min',
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-background py-28">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Badge variant="secondary" className="mb-5 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {t('revision360.service.badge')}
          </Badge>
          <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('revision360.service.title')}
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">{t('revision360.service.subtitle')}</p>
        </motion.div>

        {/* Timeline steps */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute bottom-14 left-7 top-14 hidden w-px bg-linear-to-b from-primary/20 via-primary/10 to-transparent sm:block" aria-hidden="true" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="group relative flex gap-6 sm:gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {/* Step number circle */}
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/10 group-hover:border-primary/30 flex items-center justify-center transition-colors duration-300 z-10">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-[2rem] bg-card border border-border hover:border-primary/20 transition-all duration-500 overflow-hidden">
                    {/* Top strip */}
                    <div className="flex border-b border-border/50 items-center justify-between px-7 pb-5 pt-6">
                      {/* Mobile step number */}
                      <div className="flex items-center gap-3">
                        <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-primary sm:hidden">
                          {step.number}
                        </span>
                        <div>
                          <Badge variant="secondary" className="mb-1.5 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest text-primary">
                            {t('revision360.service.step')} {step.number}
                          </Badge>
                          <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">{step.title}</h3>
                          <p className="mt-1.5 text-balance text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      <div className="ml-4 hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/80 sm:inline-flex">
                        <Clock3 className="h-3.5 w-3.5" />
                        {step.duration}
                      </div>
                    </div>

                    {/* Details grid */}
                    <div className="px-7 py-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('revision360.service.expect')}</p>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2.5 font-medium text-sm text-foreground/80">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      {/* Mobile duration badge */}
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/80 sm:hidden">
                        <Clock3 className="h-3.5 w-3.5" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Total duration summary */}
          <motion.div
            className="mt-10 rounded-3xl bg-muted/40 p-7 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('revision360.service.total.title')}</p>
                <p className="text-2xl font-semibold text-foreground">{t('revision360.service.total.duration')}</p>
              </div>
              <p className="max-w-md text-balance text-sm leading-relaxed text-muted-foreground">{t('revision360.service.total.note')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
