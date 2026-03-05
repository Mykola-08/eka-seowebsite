'use client';

import { Heart, ArrowRight, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA, PERSONALIZED_SERVICES_DATA } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BentoCard } from '@/components/ui/bento-card';
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

        {/* Bento Collage for Services */}
        <section className="py-12 section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Top Left - Large */}
            <BentoCard href="/services" className="md:col-span-2 md:row-span-1 relative">
              <img src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Massage" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Massatges Terapèutics</h3>
                <p className="text-white/90 text-lg font-medium max-w-lg">Allibera tensions i restaura l'equilibri natural del teu cos.</p>
              </div>
            </BentoCard>

            {/* Top Right - Small */}
            <BentoCard href="/services" delay={0.1} className="md:col-span-1 md:row-span-1 bg-yellow-50">
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Renovació</h3>
                <p className="text-gray-700 font-medium">Troba la teva energia amb teràpies que et revitalitzen per dins i per fora.</p>
              </div>
            </BentoCard>

            {/* Bottom Left - Small */}
            <BentoCard href="/services" delay={0.2} className="md:col-span-1 md:row-span-1 relative">
              <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Health" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white z-20">
                <span className="font-bold text-lg">Salut Preventiva</span>
              </div>
            </BentoCard>

            {/* Bottom Right - Large */}
            <BentoCard href="/services" delay={0.3} className="md:col-span-2 md:row-span-1 bg-blue-50">
              <div className="absolute inset-0 flex items-center p-8 z-20">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Tècniques Avançades</h3>
                  <p className="text-gray-700 font-medium text-lg max-w-md">De la Kinesiologia al Biomagnetisme, oferim les millors eines per al teu cos.</p>
                </div>
              </div>
            </BentoCard>
          </div>
        </section>

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
