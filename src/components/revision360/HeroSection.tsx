'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24 bg-white">
      {/* Background gradients - Premium Gold */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-amber-50 mix-blend-multiply blur-[100px] opacity-60" />
        <div className="absolute top-24 right-0 h-[340px] w-[340px] rounded-full bg-yellow-50 mix-blend-multiply blur-[80px] opacity-40" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-50 mix-blend-multiply blur-[90px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-yellow-600" />
            Integral Method
          </span>

          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600">
            {t('revision360.hero.title')}
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            {t('revision360.hero.subtitle')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('revision360.whatsapp.booking'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-lg shadow-yellow-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-yellow-300/50"
            >
              {t('revision360.hero.cta')}
            </a>
            <a
              href="#process"
              className="px-10 py-4 rounded-full border border-yellow-200 hover:border-yellow-400 bg-white hover:bg-yellow-50 text-yellow-900 font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {t('revision360.service.title')}
            </a>
          </div>

          <p className="mt-16 text-sm sm:text-lg text-gray-500 italic max-w-2xl mx-auto border-t border-gray-100 pt-8">
            "{t('revision360.hero.quote')}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
