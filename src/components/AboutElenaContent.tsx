'use client';

import Link from 'next/link';
import SEOUpdater from '@/components/SEOUpdater';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from 'keep-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Star } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function AboutElenaContent() {
  const { t } = useLanguage();

  const techniques = [
    { id: 'movement-lesson', name: t('technique.movement_lesson.title') },
    { id: 'jka', name: t('technique.jka.title') },
    { id: 'tmr', name: t('technique.tmr.title') },
    { id: 'kgh', name: t('technique.kgh.title') },
    { id: 'ke', name: t('technique.ke.title') },
    { id: 'kb', name: t('technique.kb.title') },
    { id: 'osteobalance', name: t('technique.osteobalance.title') },
    { id: 'sujok', name: t('technique.sujok.title') },
    { id: 'quiromasaje', name: t('technique.quiromasaje.title') },
  ];

  return (
    <>
      <SEOUpdater 
        titleKey="elena.seo.title"
        descriptionKey="elena.seo.desc"
        keywordsKey="elena.seo.keywords"
      />
      <div className="bg-white min-h-screen text-gray-900 selection:bg-blue-100">

        {/* Hero Section - Unified Design */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
            {/* Profile Image with Glow */}
            <motion.div
              className="relative max-w-xs mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative rounded-full overflow-hidden w-full h-full shadow-2xl">
                  <Image
                    src="https://5tghbndjb61dnqaj.public.blob.vercel-storage.com/therapist_photo.jpg"
                    alt={t('home.elenaAlt')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, 320px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-eka-dark tracking-tight leading-tight">
                {t('elena.greeting')}
              </h1>

              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl text-gray-700 font-normal tracking-wide">
                  {t('elena.name')}
                </p>
                <p className="text-xl sm:text-2xl text-gray-500 font-light tracking-wide">
                  {t('elena.role')}
                </p>
                <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                  {t('elena.bio')}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                 <Link href="/booking">
                    <Button 
                      size="xl" 
                      className="btn btn-accent px-10 py-4 normal-case border-none"
                    >
                      {t('common.bookNow')}
                    </Button>
                 </Link>
                 <Link href="/contact">
                    <Button 
                      size="xl" 
                      variant="outline"
                      className="btn btn-outline border-2 px-10 py-4 normal-case bg-white border-gray-200"
                    >
                      {t('nav.contact')}
                    </Button>
                 </Link>
              </div>

              {/* Quote */}
              <div className="max-w-3xl mx-auto mt-12">
                <blockquote className="text-xl sm:text-2xl text-gray-700 italic font-light leading-relaxed relative">
                  <span className="text-6xl text-primary-200 absolute -top-8 -left-4 font-serif">"</span>
                  <span className="relative z-10">{t('elena.quote')}</span>
                </blockquote>
              </div>
            </motion.div>

            {/* Stats/Badges Row */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-wrap justify-center gap-4"
            >
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm">
                   <Star className="w-4 h-4 text-yellow-500 mr-2" />
                   <span className="text-gray-700 font-medium">15+ {t('hero.stats.experience')}</span>
                </div>
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm">
                   <Heart className="w-4 h-4 text-red-500 mr-2" />
                   <span className="text-gray-700 font-medium">96% {t('hero.stats.clients')}</span>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Techniques Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-[#000035] mb-6">
                {t('elena.approach.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {t('elena.approach.desc')}
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              {techniques.map((tech) => (
                <motion.div 
                  key={tech.id} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white text-gray-700 rounded-2xl border border-gray-100 font-medium shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-700 transition-all cursor-default"
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
