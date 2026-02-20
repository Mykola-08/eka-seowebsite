'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import PersonalizedServiceCard from '@/components/PersonalizedServiceCard';
import PageLayout from './PageLayout';
import SEOUpdater from '@/components/SEOUpdater';

export default function PersonalizedServicesContent() {
  const { t } = useLanguage();

  return (
    <>
      <SEOUpdater 
        titleKey="seo.personalized.title"
        descriptionKey="seo.personalized.description"
        keywordsKey="seo.personalized.keywords"
      />
      <PageLayout
        hero={{
          badge: t('personalizedServices.title'),
        subtitle: t('personalizedServices.subtitle'),
        title: t('services.therapiesFor'),
        icon: <Star className="w-4 h-4" />
      }}
    >
        {/* Helper text for title */}
        <div className="text-center -mt-8 mb-12 animate-fade-in relative z-20">
            <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xl sm:text-2xl">
                {t('services.integralWellbeing')}
            </span>

             <div className="mt-8 flex justify-center">
                <Link href="/booking">
                <Button 
                    size="xl" 
                    variant="apple"
                    className="px-8 py-4 shadow-xl border-none"
                >
                    {t('personalizedServices.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </Link>
            </div>
        </div>

      {/* Service List - Revised to use Cards */}
      <section className="pb-16 sm:pb-24">
        <div className="section-container">
           <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">
              {t('personalizedServices.choose.title')}
            </h2>
            <p className="text-body-lg">
              {t('personalizedServices.choose.subtitle')}
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PERSONALIZED_SERVICES_DATA.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <PersonalizedServiceCard service={service} />
                </motion.div>
              ))}
           </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
}
