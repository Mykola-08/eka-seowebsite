'use client';

import Link from 'next/link';
import { Button } from 'keep-react';
import { motion } from 'framer-motion';
import { Star, Globe, Users, Clock } from 'lucide-react';

import AppleHero from '@/components/AppleHero';
import CasosSection from '@/components/CasosSection';
import FAQ from '@/components/FAQ';

import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import ServiceCard from '@/components/ServiceCard';

import AnimatedCounter from '@/components/AnimatedCounter';

export default function HomeContent() {
  const { t } = useLanguage();

  const stats = [
    { value: 1500, suffix: '+', label: t('hero.stats.sessions'), icon: Users },
    { value: 10, suffix: '+', label: t('hero.stats.experience'), icon: Clock },
    { value: 96, suffix: '%', label: t('hero.stats.clients'), icon: Star },
    { value: 9, suffix: '', label: t('hero.stats.countries'), icon: Globe }
  ];

  return (
    <>
      {/* Hero Section */}
      <AppleHero />

      {/* Stats Section with floating effect */}
      <section className="relative z-20 -mt-10 mb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="group flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary-50/50 rounded-2xl text-primary-900 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-primary-100/50">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-primary-900 tracking-tight mb-1 flex justify-center font-mono">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                  </div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Elena Introduction Section - REDESIGNED */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">

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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative rounded-full overflow-hidden aspect-square w-full h-full shadow-2xl">
                  <img
                    src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                    alt={t('home.elenaAlt')}
                    className="w-full h-full object-cover"
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
                <h2 className="heading-1 font-light text-eka-dark">
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
                <Button variant="outline" className="btn btn-secondary border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-xl normal-case">
                  {t('common.readMore')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">{t('services.featuredTitle')}</h2>
            <p className="text-body-lg">{t('services.featuredSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="btn btn-primary px-8 py-3 rounded-xl normal-case">
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
    </>
  );
}
