'use client';

import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Activity01Icon, Brain01Icon, Compass01Icon, FavouriteIcon, FlashIcon, Moon01Icon, Shield01Icon, SmileIcon, SparklesIcon } from '@hugeicons/core-free-icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  science: string;
}

export default function BenefitsSection() {
  const { t } = useLanguage();

  const benefits: Benefit[] = [
    { icon: <HugeiconsIcon icon={Brain01Icon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit1.title'), description: t('revision360.benefits.benefit1.description'), science: t('revision360.benefits.benefit1.science') },
    { icon: <HugeiconsIcon icon={FavouriteIcon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit2.title'), description: t('revision360.benefits.benefit2.description'), science: t('revision360.benefits.benefit2.science') },
    { icon: <HugeiconsIcon icon={FlashIcon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit3.title'), description: t('revision360.benefits.benefit3.description'), science: t('revision360.benefits.benefit3.science') },
    { icon: <HugeiconsIcon icon={Shield01Icon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit4.title'), description: t('revision360.benefits.benefit4.description'), science: t('revision360.benefits.benefit4.science') },
    { icon: <HugeiconsIcon icon={Moon01Icon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit5.title'), description: t('revision360.benefits.benefit5.description'), science: t('revision360.benefits.benefit5.science') },
    { icon: <HugeiconsIcon icon={SmileIcon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit6.title'), description: t('revision360.benefits.benefit6.description'), science: t('revision360.benefits.benefit6.science') },
    { icon: <HugeiconsIcon icon={Activity01Icon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit7.title'), description: t('revision360.benefits.benefit7.description'), science: t('revision360.benefits.benefit7.science') },
    { icon: <HugeiconsIcon icon={Compass01Icon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit8.title'), description: t('revision360.benefits.benefit8.description'), science: t('revision360.benefits.benefit8.science') },
    { icon: <HugeiconsIcon icon={SparklesIcon} className="w-5 h-5"  />, title: t('revision360.benefits.benefit9.title'), description: t('revision360.benefits.benefit9.description'), science: t('revision360.benefits.benefit9.science') },
  ];

  return (
    <section className="relative py-28 bg-white">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-gold-dark uppercase bg-gold-light/30 rounded-full border border-gold/30">
            {t('revision360.benefits.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">{t('revision360.benefits.title')}</h2>
          <p className="text-lg text-gray-500 font-normal leading-relaxed">{t('revision360.benefits.subtitle')}</p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={`${benefit.title}-${index}`}
              className="group rounded-4xl p-7 bg-white border border-gray-100 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 pointer-events-none" />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-light/30 text-gold-dark group-hover:scale-110 transition-transform duration-500 relative z-10">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 tracking-tight relative z-10">{benefit.title}</h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed font-medium relative z-10">{benefit.description}</p>
              
              {benefit.science && (
                <div className="mt-6 border-t border-gray-100 pt-4 relative z-10">
                  <p className="text-xs uppercase tracking-wider text-gold-dark font-bold mb-2">Science</p>
                  <p className="text-sm text-gray-500 italic font-medium">{benefit.science}</p>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <blockquote className="text-xl sm:text-2xl text-gray-800 font-light italic leading-relaxed">
            "{t('revision360.benefits.philosophy')}"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
