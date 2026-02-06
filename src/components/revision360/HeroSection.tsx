import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-amber-500/20 blur-[100px] opacity-40 mix-blend-screen" />
        <div className="absolute top-24 right-0 h-[340px] w-[340px] rounded-full bg-gold-400/20 blur-[80px] opacity-30 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[90px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-200 animate-pulse ring-1 ring-amber-400/20">
            <Sparkles className="h-3.5 w-3.5" />
            Integral Method
          </span>

          <h1 className="mt-8 text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 drop-shadow-sm">
            {t('hero.title')}
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            {t('hero.subtitle')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`https://wa.me/34658867133?text=${encodeURIComponent(t('whatsapp.booking'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-black font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#process"
              className="px-10 py-4 rounded-full border border-white/20 hover:border-amber-200/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide transition-all duration-300"
            >
              {t('service.title')}
            </a>
          </div>

          <p className="mt-16 text-sm sm:text-lg text-amber-200/80 italic max-w-2xl mx-auto border-t border-white/10 pt-8">
            "{t('hero.quote')}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
