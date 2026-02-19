'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
          title: t('services.ourServices'),
          subtitle: t('services.wellnessPath'),
          icon: <Heart className="w-4 h-4" />
        }}
      >
        {/* Quick CTA */}
        <div className="flex justify-center -mt-8 mb-16 relative z-20">
          <Link href="/booking">
              <Button variant="accent" size="xl">
              {t('common.bookNow')}
              <ArrowRight className="w-5 h-5" />
              </Button>
          </Link>
        </div>

        {/* Services Grid (Revised to use Cards) */}
        <section className="pb-24 sm:pb-32 bg-gray-50/50">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                {t('services.exploreOurServices') || 'Explore our comprehensive range of services'}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                {t('services.descriptionPrefix') || 'From relaxing massages to specialized kinesiology therapies.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-yellow-50/50 p-8 rounded-[2rem] border border-yellow-100/50 shadow-sm">
                <p className="text-sm text-yellow-800/80 leading-relaxed font-medium">
                  <span className="font-bold text-yellow-900 block mb-2 text-base">{t('services.disclaimerPrefix')}:</span> 
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
