'use client';

import { motion } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <section id="process" className="relative py-28 bg-white overflow-hidden">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1 mb-5 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            {t('revision360.service.badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            {t('revision360.service.title')}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">{t('revision360.service.subtitle')}</p>
        </motion.div>

        {/* Timeline steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-14 bottom-14 w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent hidden sm:block" aria-hidden="true" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-6 sm:gap-8 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step number circle */}
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-100 group-hover:border-blue-300 flex items-center justify-center transition-colors duration-300 shadow-sm z-10">
                      <span className="text-sm font-bold text-blue-500">{step.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden">
                    {/* Top strip */}
                    <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-gray-50">
                      {/* Mobile step number */}
                      <div className="flex items-center gap-3">
                        <span className="sm:hidden inline-block text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
                          {step.number}
                        </span>
                        <div>
                          <div className="text-xs uppercase tracking-widest text-gold-dark font-semibold bg-gold-light/30 border border-gold/20 px-2.5 py-0.5 inline-block rounded-full mb-1.5">
                            {t('revision360.service.step')} {step.number}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
                          <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 whitespace-nowrap ml-4 shrink-0">
                        <Clock3 className="h-3.5 w-3.5" />
                        {step.duration}
                      </div>
                    </div>

                    {/* Details grid */}
                    <div className="px-7 py-5">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('revision360.service.expect')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                      {/* Mobile duration badge */}
                      <div className="sm:hidden mt-4 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
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
            className="mt-10 rounded-[1.5rem] bg-gray-50 p-7 border border-gold/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{t('revision360.service.total.title')}</p>
                <p className="text-2xl font-semibold text-gray-900">{t('revision360.service.total.duration')}</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">{t('revision360.service.total.note')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
