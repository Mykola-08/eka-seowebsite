'use client';

import { motion } from 'framer-motion';
import { Activity, Brain, Compass, Heart, Moon, Shield, Smile, Sparkles, Zap } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
    <section className="relative bg-muted/10 py-28">
      <div className="section-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Badge variant="secondary" className="mb-6 inline-block rounded-full bg-gold-light/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            {t('revision360.benefits.badge')}
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{t('revision360.benefits.title')}</h2>
          <p className="text-balance text-lg font-normal leading-relaxed text-muted-foreground">{t('revision360.benefits.subtitle')}</p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={`${benefit.title}-${index}`}
              className="group rounded-[2rem] p-7 bg-card border border-border hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Card className="group relative overflow-hidden rounded-4xl border-0 p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover h-full flex flex-col items-start bg-card">
                <div className="pointer-events-none absolute -mr-16 -mt-16 right-0 top-0 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-gold-light/30 text-gold-dark transition-transform duration-500 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="relative z-10 mt-6 text-xl font-semibold tracking-tight text-foreground">{benefit.title}</h3>
                <p className="relative z-10 mt-3 text-base font-medium leading-relaxed text-muted-foreground flex-1">{benefit.description}</p>
                
                {benefit.science && (
                  <div className="relative z-10 mt-6 pt-4 border-t border-border w-full">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gold-dark">Science</p>
                    <p className="text-sm font-medium italic text-muted-foreground">{benefit.science}</p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <blockquote className="text-balance text-xl font-light italic leading-relaxed text-foreground sm:text-2xl">
            "{t('revision360.benefits.philosophy')}"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
