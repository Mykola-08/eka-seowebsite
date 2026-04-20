'use client';

import { CheckCircle } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import PageLayout from './PageLayout';
import CTASection from '@/components/CTASection';

export default function ServicesContent() {
  const { t } = useLanguage();

  const statsItems = [
    { value: '800+', labelKey: 'services.stats.clients' },
    { value: '10+', labelKey: 'services.stats.years' },
    { value: '98%', labelKey: 'services.stats.satisfaction' },
    { value: '6000+', labelKey: 'services.stats.sessions' },
  ];

  return (
    <>
      <PageLayout
        seo={{
          title: t('seo.services.title'),
          description: t('seo.services.description'),
          keywords: t('seo.services.keywords'),
        }}
        hero={{
          title: `${t('services.ourServices')} ${t('services.ourServices2')}`.trim(),
          subtitle: t('services.wellnessPath'),
          badge: t('services.integralWellbeingFor'),
          backgroundImage: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1440',
        }}
      >

        {/* Stats Bar */}
        <section className="py-12 bg-background border-b border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statsItems.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                {t('services.coreTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
                {t('services.coreDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SERVICES_DATA.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4506107/pexels-photo-4506107.jpeg?auto=compress&cs=tinysrgb&w=1440"
                  alt={t('services.coreTitle')}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                  {t('services.reviews.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {t('services.reviews.subtitle')}
                </p>
                <div className="space-y-4">
                  {[
                    'services.step1.title',
                    'services.step2.title',
                    'services.step3.title',
                  ].map((key, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border/50">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t(key)}</p>
                        <p className="text-sm text-muted-foreground mt-1">{t(key.replace('.title', '.description'))}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                {t('services.reviews.title')}
              </h2>
              <p className="text-muted-foreground">{t('services.reviews.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Maria S.', textKey: 'massage.testimonial.1.text', role: 'Massage' },
                { name: 'Anna Puig', textKey: 'kinesiology.testimonial.1.text', role: 'Kinesiology' },
                { name: 'Carla Ferrer', textKey: 'nutrition.testimonial.1.text', role: 'Nutrition' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-apple bg-muted/30 border border-border/50 flex flex-col gap-4"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-base leading-none">★</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed flex-1">"{t(item.textKey)}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card p-8 rounded-apple border border-border/50 shadow-xs">
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                <span className="font-semibold text-foreground block mb-2 text-base">{t('services.disclaimerPrefix')}:</span>
                {t('services.disclaimerBody')}
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </PageLayout>
    </>
  );
}
