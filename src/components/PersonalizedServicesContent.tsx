'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import PersonalizedServiceCard from '@/components/PersonalizedServiceCard';
import { BentoCard } from '@/components/ui/bento-card';
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
          title: t('personalizedServices.title'),
          subtitle: t('personalizedServices.subtitle'),
          badge: t('services.therapiesFor'),
          icon: <Star className="w-4 h-4" />
        }}
        className="bg-white"
      >
        {/* Intro / CTA Section */}
        <div className="text-center -mt-8 mb-16 animate-fade-in relative z-20 px-6">

             <div className="mt-8 flex justify-center">
                <Link href="/booking">
                  <Button
                      size="xl"
                      variant="default"
                      className="px-8 py-4 shadow-sm"
                  >
                      {t('personalizedServices.cta')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
            </div>
        </div>

      {/* Apple-style Bento Collage */}
      <section className="py-12 section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          {/* Large Left visual */}
          <BentoCard href="/booking" className="md:col-span-2 md:row-span-2">
            <img src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Wellness" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white z-20">
              <h3 className="text-3xl font-bold mb-2">Teràpia Integrativa</h3>
              <p className="text-white/90 text-lg font-medium">Un enfocament personalitzat per al teu benestar global.</p>
            </div>
          </BentoCard>

          {/* Top Right */}
          <BentoCard href="/booking" delay={0.1} className="md:col-span-2 md:row-span-1 bg-green-50">
            <div className="absolute inset-0 flex items-center p-8 z-20">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Atenció Única</h3>
                <p className="text-gray-700 font-medium">Cada cos és diferent. Adaptem les tècniques al teu estil de vida i necessitats.</p>
              </div>
            </div>
          </BentoCard>

          {/* Bottom Right split 1 */}
          <BentoCard href="/booking" delay={0.2} className="md:col-span-1 md:row-span-1 bg-blue-50">
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Resultats</h4>
                <p className="text-sm font-medium text-gray-600">Teràpies dissenyades per a l'eficàcia a llarg termini.</p>
              </div>
            </div>
          </BentoCard>

          {/* Bottom Right split 2 */}
          <BentoCard href="/cases" delay={0.3} className="md:col-span-1 md:row-span-1 relative">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Kinesiology" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <span className="font-bold text-lg">Casos d'èxit</span>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Service List - Gray Background for Cards */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="section-container">
           <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 mb-4 text-black">
              {t('personalizedServices.choose.title')}
            </h2>
            <p className="text-body-lg text-gray-500">
              {t('personalizedServices.choose.subtitle')}
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
