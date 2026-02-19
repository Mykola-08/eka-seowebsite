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
    { icon: <Brain className="w-5 h-5" />, title: t('benefits.benefit1.title'), description: t('benefits.benefit1.description'), science: t('benefits.benefit1.science') },
    { icon: <Heart className="w-5 h-5" />, title: t('benefits.benefit2.title'), description: t('benefits.benefit2.description'), science: t('benefits.benefit2.science') },
    { icon: <Zap className="w-5 h-5" />, title: t('benefits.benefit3.title'), description: t('benefits.benefit3.description'), science: t('benefits.benefit3.science') },
    { icon: <Shield className="w-5 h-5" />, title: t('benefits.benefit4.title'), description: t('benefits.benefit4.description'), science: t('benefits.benefit4.science') },
    { icon: <Moon className="w-5 h-5" />, title: t('benefits.benefit5.title'), description: t('benefits.benefit5.description'), science: t('benefits.benefit5.science') },
    { icon: <Smile className="w-5 h-5" />, title: t('benefits.benefit6.title'), description: t('benefits.benefit6.description'), science: t('benefits.benefit6.science') },
    { icon: <Activity className="w-5 h-5" />, title: t('benefits.benefit7.title'), description: t('benefits.benefit7.description'), science: t('benefits.benefit7.science') },
    { icon: <Compass className="w-5 h-5" />, title: t('benefits.benefit8.title'), description: t('benefits.benefit8.description'), science: t('benefits.benefit8.science') },
    { icon: <Sparkles className="w-5 h-5" />, title: t('benefits.benefit9.title'), description: t('benefits.benefit9.description'), science: t('benefits.benefit9.science') },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-white">
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#0071e3] uppercase bg-blue-50 rounded-full border border-blue-100">
            {t('labels.benefits')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">{t('benefits.title')}</h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">{t('benefits.subtitle')}</p>
        </motion.div>

        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={`${benefit.title}-${index}`}
              className="group relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="absolute -left-6 top-0 h-full w-px bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100 lg:group-hover:opacity-0" />
              
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0071e3] transition-colors group-hover:bg-blue-100/80">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">{benefit.title}</h3>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">{benefit.description}</p>
              {benefit.science && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0071e3] border-l-2 border-blue-200 pl-3">
                  {benefit.science}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-gray-600 italic text-lg sm:text-xl font-serif">
            "{t('benefits.philosophy')}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
