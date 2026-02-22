'use client';

import { motion } from 'framer-motion';
import { Activity, Brain, Compass, Heart, Moon, Shield, Smile, Sparkles, Zap } from 'lucide-react';
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
    { icon: <Brain className="w-5 h-5" />, title: t('revision360.benefits.benefit1.title'), description: t('revision360.benefits.benefit1.description'), science: t('revision360.benefits.benefit1.science') },
    { icon: <Heart className="w-5 h-5" />, title: t('revision360.benefits.benefit2.title'), description: t('revision360.benefits.benefit2.description'), science: t('revision360.benefits.benefit2.science') },
    { icon: <Zap className="w-5 h-5" />, title: t('revision360.benefits.benefit3.title'), description: t('revision360.benefits.benefit3.description'), science: t('revision360.benefits.benefit3.science') },
    { icon: <Shield className="w-5 h-5" />, title: t('revision360.benefits.benefit4.title'), description: t('revision360.benefits.benefit4.description'), science: t('revision360.benefits.benefit4.science') },
    { icon: <Moon className="w-5 h-5" />, title: t('revision360.benefits.benefit5.title'), description: t('revision360.benefits.benefit5.description'), science: t('revision360.benefits.benefit5.science') },
    { icon: <Smile className="w-5 h-5" />, title: t('revision360.benefits.benefit6.title'), description: t('revision360.benefits.benefit6.description'), science: t('revision360.benefits.benefit6.science') },
    { icon: <Activity className="w-5 h-5" />, title: t('revision360.benefits.benefit7.title'), description: t('revision360.benefits.benefit7.description'), science: t('revision360.benefits.benefit7.science') },
    { icon: <Compass className="w-5 h-5" />, title: t('revision360.benefits.benefit8.title'), description: t('revision360.benefits.benefit8.description'), science: t('revision360.benefits.benefit8.science') },
    { icon: <Sparkles className="w-5 h-5" />, title: t('revision360.benefits.benefit9.title'), description: t('revision360.benefits.benefit9.description'), science: t('revision360.benefits.benefit9.science') },
  ];

  return (
    <section className="relative py-24 bg-white border-t border-gray-100">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-amber-600 uppercase bg-amber-50 rounded-full border border-amber-100">
            {t('revision360.benefits.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">{t('revision360.benefits.title')}</h2>
          <p className="text-lg text-gray-500 font-normal leading-relaxed">{t('revision360.benefits.subtitle')}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={`${benefit.title}-${index}`}
              className="group apple-card p-6 bg-white border border-gray-100/50 hover:border-amber-100 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-900 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed font-normal">{benefit.description}</p>
              {benefit.science && (
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-xs uppercase tracking-wider text-amber-600 font-bold mb-2">Science</p>
                  <p className="text-sm text-gray-400 italic font-light">{benefit.science}</p>
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
