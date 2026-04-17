'use client';

import { FavouriteIcon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import PageLayout from './PageLayout';
import SEOUpdater from '@/components/SEOUpdater';
import CTASection from '@/components/CTASection';

export default function ServicesContent() {
  const { t } = useLanguage();

  return (
    <>
      <SEOUpdater
        titleKey="seo.services.title"
        descriptionKey="seo.services.description"
        keywordsKey="seo.services.keywords"
      />
      <PageLayout
        hero={{
          badge: t('services.integralWellbeingFor'),
          title: `${t('services.ourServices')} ${t('services.ourServices2')}`.trim(),
          subtitle: t('services.wellnessPath'),
          icon: <FavouriteIcon className="w-4 h-4" />
        }}
        className="bg-muted/30"
        mainClassName="bg-transparent"
      >
        {/* Services Grid (Core) - Transparent Background */}
        <section className="py-16">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                {t('services.coreTitle') || t('services.exploreOurServices') || 'Integral Therapies'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
                {t('services.coreDesc') || t('services.descriptionPrefix') || 'From relaxing massages to specialized kinesiology therapies.'}
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

        {/* Disclaimer */}
        <section className="py-16 bg-transparent">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card p-8 rounded-[2rem] border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  <span className="font-semibold text-foreground block mb-2 text-base">{t('services.disclaimerPrefix')}:</span>
                  {t('services.disclaimerBody')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </PageLayout>
    </>
  );
}
