'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Button } from 'keep-react';
import ServiceCard from '@/components/ServiceCard';
import PageLayout from './PageLayout';
import SEOUpdater from '@/components/SEOUpdater';

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
              <Button 
              size="xl" 
              className="btn btn-accent px-8 py-4 rounded-xl normal-case border-none"
              >
              {t('common.bookNow')}
              <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
          </Link>
        </div>

        {/* Services Grid (Revised to use Cards) */}
        <section className="pb-16 sm:pb-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-700">{t('services.disclaimerPrefix')}:</span> {t('services.disclaimerBody')}
            </p>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
