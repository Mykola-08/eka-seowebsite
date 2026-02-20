'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24 bg-white">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-purple-50 mix-blend-multiply blur-[100px] opacity-60" />
        <div className="absolute top-24 right-0 h-[340px] w-[340px] rounded-full bg-fuchsia-50 mix-blend-multiply blur-[80px] opacity-40" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-50 mix-blend-multiply blur-[90px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-purple-700">
            <Sparkles className="h-3.5 w-3.5" />
            Integral Method
          </span>

          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-gray-900">
            {t('hero.title')}
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            {t('hero.subtitle')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('whatsapp.booking'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-purple-200/50"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#process"
              className="px-10 py-4 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium tracking-wide transition-all duration-300 shadow-sm hover:shadow"
            >
              {t('service.title')}
            </a>
          </div>

          <p className="mt-16 text-sm sm:text-lg text-gray-500 italic max-w-2xl mx-auto border-t border-gray-100 pt-8">
            "{t('hero.quote')}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
