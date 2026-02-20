'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import AppleHero from '@/components/AppleHero';
import CasosSection from '@/components/CasosSection';
import FAQ from '@/components/FAQ';

import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import ServiceCard from '@/components/ServiceCard';

import SEOUpdater from '@/components/SEOUpdater';
import CTASection from '@/components/CTASection';

export default function HomeContent() {
  const { t } = useLanguage();

  const stats = [
    { value: 1500, suffix: '+', label: t('hero.stats.sessions') },
    { value: 10, suffix: '+', label: t('hero.stats.experience') },
    { value: 96, suffix: '%', label: t('hero.stats.clients') },
    { value: 9, suffix: '', label: t('hero.stats.countries') }
  ];

  return (
    <>
      <SEOUpdater 
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        keywordsKey="seo.home.keywords"
      />
      {/* Hero Section */}
      <AppleHero />

      {/* Stats Section - Minimalist Redesign */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-3 tabular-nums">
                  {stat.value}{stat.suffix}
                </div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Elena Introduction Section - REDESIGNED */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Image Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative order-first flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-96 sm:h-96 group">
                <div className="absolute inset-0 bg-blue-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-110" />
                <div className="relative rounded-[2rem] overflow-hidden aspect-square w-full h-full shadow-2xl shadow-gray-200/50 rotate-3 transition-transform duration-700 group-hover:rotate-0">
                  <Image
                    src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                    alt={t('home.elenaAlt')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 500px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 text-center lg:text-left space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                  {t('elena.role') || 'Lead Therapist'}
                </span>
                <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                  {t('elena.greeting')}
                </h2>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-light">
                <p>
                  {t('elena.bio')}
                </p>
                <p>
                  {t('elena.approach')}
                </p>
              </div>

              <Link href="/about-elena" className="inline-block">
                <Button variant="outline" size="lg" className="border-gray-200 text-gray-900 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300">
                  {t('common.readMore')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t('services.featuredTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t('services.featuredSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="primary" className="px-8 py-3 text-white transition-all hover:scale-105">
                {t('services.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Casos Section */}
      <CasosSection />

      {/* FAQ Section */}
      <FAQ />

      <CTASection />
    </>
  );
}
