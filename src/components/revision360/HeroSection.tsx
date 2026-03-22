'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Minimal 1×1 blur placeholder for remote images
const BLUR_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export default function HeroSection() {
  const { t } = useLanguage();

  const trustPills = [
    t('labels.noInsuranceNeeded'),
    t('labels.flexibleSchedules'),
    t('labels.personalizedApproach'),
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#09090f]">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-700/8 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 h-[300px] w-[300px] rounded-full bg-blue-400/5 blur-[100px]" />
      </div>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="360° Integral Health Session"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10 mix-blend-luminosity"
          placeholder="blur"
          blurDataURL={BLUR_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#09090f] via-[#09090f]/96 to-[#0d0d1a]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
      </div>

      {/* Large decorative 360° */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-end overflow-hidden pr-4"
        aria-hidden="true"
      >
        <span className="text-[clamp(160px,28vw,440px)] font-black leading-none tracking-tighter text-white/[0.025]">
          360°
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {/* Badge */}
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Integral Method · EKA Balance
            </span>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
              {t('revision360.hero.title')}
            </h1>

            {/* Sub-headline */}
            <p className="mb-10 max-w-xl text-lg font-normal leading-relaxed text-zinc-400 sm:text-xl">
              {t('revision360.hero.subtitle')}
            </p>

            {/* Trust pills */}
            <div className="mb-12 flex flex-wrap gap-2.5">
              {trustPills.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-400 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-3 w-3 text-blue-400" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/34658867133?text=${encodeURIComponent(t('revision360.whatsapp.booking'))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-white px-8 text-base font-medium text-black shadow-xl shadow-white/10 hover:bg-white/90 active:scale-[0.97] transition-transform"
                >
                  {t('revision360.hero.cta')}
                </Button>
              </a>
              <a href="#process">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.97] transition-transform"
                >
                  {t('revision360.service.title')}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-10 max-w-2xl border-l-2 border-white/10 pl-5 text-sm italic leading-relaxed text-zinc-600 lg:mt-12"
          >
            &ldquo;{t('revision360.hero.quote')}&rdquo;
          </motion.blockquote>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5 text-white/20" />
      </motion.div>
    </section>
  );
}
