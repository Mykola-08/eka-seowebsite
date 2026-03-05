'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BentoCard } from '@/components/ui/bento-card';

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
              <div key={index} className="flex flex-col items-center justify-center text-center p-6 rounded-3xl transition-colors duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-3 tabular-nums">
                  {stat.value}{stat.suffix}
                </div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Collage */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main large visual */}
            <BentoCard href="/services/equilibri" className="md:col-span-2 md:row-span-2">
              <img src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Integrative Wellness" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                <h3 className="text-3xl sm:text-4xl font-semibold mb-3 drop-shadow-md text-white">Equilibri Integral</h3>
                <p className="text-white/90 text-lg font-medium drop-shadow-md">Harmonia entre cos, ment i benestar en cada sessió.</p>
              </div>
            </BentoCard>

            {/* Top right smaller */}
            <BentoCard href="/services/kinesiology" delay={0.1} className="md:col-span-2 md:row-span-1 bg-blue-50">
              <div className="absolute inset-0 flex items-center p-8 z-20">
                <div className="w-full max-w-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Kinesiologia Holística</h3>
                  <p className="text-gray-700 font-medium mb-6">Diagnòstic de precisió per restablir el teu balanç energètic.</p>
                  <Button variant="outline" className="rounded-full bg-white/90 hover:bg-white text-gray-900 border-gray-200 pointer-events-none shadow-sm">
                    Descobreix-ne més
                  </Button>
                </div>
              </div>
              <img src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kinesiology" className="absolute right-0 top-0 bottom-0 w-1/2 object-cover opacity-50 mix-blend-multiply" />
            </BentoCard>

            {/* Bottom right split - 1 */}
            <BentoCard href="/services/nutrition" delay={0.2} className="md:col-span-1 md:row-span-1">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Healthy Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white z-20">
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg border border-white/30 text-white">Nutrició</span>
              </div>
            </BentoCard>

            {/* Bottom right split - 2 */}
            <BentoCard href="/cases" delay={0.3} className="md:col-span-1 md:row-span-1 bg-red-50">
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="mb-auto">
                  <span className="text-5xl text-red-400 opacity-90 font-serif leading-none">"</span>
                  <p className="text-gray-900 text-lg font-bold leading-tight mt-2">Un abans i un després en el meu benestar.</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">- Maria G.</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">Pacient freqüent</p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Elena Introduction Section - REDESIGNED */}
      <section className="py-24 relative overflow-hidden bg-[#f5f5f7]">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Image Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative order-first flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[40px] overflow-hidden shadow-sm bg-white">
                <Image
                  src="/images/therapist_photo.jpg"
                  alt={t('home.elenaAlt')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
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
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-900 text-xs font-semibold uppercase tracking-wider">
                  {t('elena.role') || 'Lead Therapist'}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                  {t('elena.greeting')}
                </h2>
              </div>

              <div className="text-xl text-gray-500 leading-relaxed space-y-6 font-normal max-w-2xl mx-auto lg:mx-0">
                <p>
                  {t('elena.bio')}
                </p>
                <p>
                  {t('elena.approach')}
                </p>
              </div>

              <Link href="/about-elena" className="inline-block pt-4">
                <Button variant="secondary" size="xl" className="text-lg px-8">
                  {t('common.readMore')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-32 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t('services.featuredTitle')}
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
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

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="default" size="xl" className="px-10 py-6 text-lg h-auto">
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
