'use client';

import Link from 'next/link';
import { Button } from 'keep-react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Globe, Users, Clock } from 'lucide-react';

import AppleHero from '@/app/components/AppleHero';
import CasosSection from '@/app/components/CasosSection';
import TestimonialSlider from '@/react-app/components/TestimonialSlider';
import FAQ from '@/react-app/components/FAQ';

import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import ServiceCard from '@/app/components/ServiceCard';

import AnimatedCounter from '@/react-app/components/AnimatedCounter';

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
            className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white p-10 grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="group flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-blue-50">
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-4xl lg:text-5xl font-light text-slate-800 tracking-tight mb-1 flex justify-center font-mono">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                    </div>
                    <p className="text-xs font-semibold text-blue-900/60 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Elena Introduction Section - REDESIGNED */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Column (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative order-first flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="relative rounded-full overflow-hidden aspect-square w-full h-full">
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
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#000035] leading-tight">
                  {t('elena.greeting')}
                </h2>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-light">
                <p>{t('elena.description1')}</p>
                <p>{t('elena.description2')}</p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/about-elena">
                  <Button 
                    size="xl"
                    className="bg-[#000035] hover:bg-[#1a1a4b] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-[200px] normal-case"
                  >
                    {t('elena.knowMore')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-600 font-medium tracking-widest text-sm uppercase">
              {t('services.ourServices')}
            </span>

            <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
              {t('services.therapiesFor')}{' '}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                {t('services.integralWellbeing')}
              </span>
            </h2>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              {t('services.personalizedTreatments')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, idx) => (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
               >
                 <ServiceCard service={service} />
               </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/services">
                <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 px-8 py-3 rounded-xl bg-gray-50 normal-case">
                   {t('home.viewAllServices')}
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Casos d'Èxit Section */}
      <CasosSection />

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 overflow-hidden">
         <TestimonialSlider />
      </section>

      {/* FAQ Section */}
      <FAQ />

    </>
  );
}
