'use client';

import { Heart, ArrowRight, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA, PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import PersonalizedServiceCard from '@/components/PersonalizedServiceCard';
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
        className="bg-white"
      >
        {/* Quick CTA */}
        <div className="flex justify-center -mt-8 mb-16 relative z-20 px-6">
          <Link href="/booking">
            <Button
              size="xl"
              variant="default"
              className="px-8 py-4 shadow-sm"
            >
              {t('common.bookNow')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Services Grid (Core) - Gray Background */}
        <section className="py-24 bg-secondary">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                {t('services.coreTitle') || t('services.exploreOurServices') || 'Integral Therapies'}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
                {t('services.coreDesc') || t('services.descriptionPrefix') || 'From relaxing massages to specialized kinesiology therapies.'}
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

        {/* Personalized Services Gird - White Background to alternate, or Gray? */}
        {/* Apple often uses one long gray section for cards. Let's keep it gray for consistency or use white for visual break. */}
        {/* Since cards are white, a white background would make them disappear. So gray is better. */}
        {/* I'll use a slightly different shade or just keep it gray but add a separator. */}
        {/* Actually, I'll use bg-white for the SECTION, but add a gray wrapper for cards? No. */}
        {/* Let's stick to bg-secondary for the cards container. I'll just merge them visually or use a divider. */}

        <section className="py-24 bg-white border-t border-gray-100">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
                <UserPlus className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                {t('personalizedServices.title') || 'Personalized Programs'}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
                {t('personalizedServices.subtitle') || 'Specialized care tailored to your specific needs and lifestyle.'}
              </p>
            </div>

            {/* Cards need a background to stand out on white. Or border.
                Apple cards on white usually have a border or shadow.
                My cards have shadow-sm and border. So they will look fine on white.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Disclaimer */}
        <section className="py-16 bg-secondary border-t border-gray-200/50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white p-8 rounded-3xl border border-gray-200/50 shadow-sm">
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  <span className="font-semibold text-gray-900 block mb-2 text-base">{t('services.disclaimerPrefix')}:</span>
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
