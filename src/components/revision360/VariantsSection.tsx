'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, MapPin, RotateCcw, Sparkles, CheckCircle } from '@/lib/icons';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface Variant {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  duration: string;
  includes: string[];
  price: string;
  highlight?: boolean;
  accentColor: string;
  borderColor: string;
}

export default function VariantsSection() {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const { t } = useLanguage();

  const variants: Variant[] = [
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: t('revision360.variants.reset.title'),
      subtitle: t('revision360.variants.reset.subtitle'),
      description: t('revision360.variants.reset.description'),
      idealFor: [
        t('revision360.variants.reset.idealFor.1'),
        t('revision360.variants.reset.idealFor.2'),
        t('revision360.variants.reset.idealFor.3'),
        t('revision360.variants.reset.idealFor.4'),
      ],
      duration: t('revision360.variants.reset.duration'),
      includes: [
        t('revision360.variants.reset.includes.1'),
        t('revision360.variants.reset.includes.2'),
        t('revision360.variants.reset.includes.3'),
        t('revision360.variants.reset.includes.4'),
      ],
      price: 'EUR 450',
      accentColor: 'bg-blue-500/10 text-blue-300 group-hover:bg-blue-500/20',
      borderColor: 'hover:border-blue-500/30',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('revision360.variants.mapping.title'),
      subtitle: t('revision360.variants.mapping.subtitle'),
      description: t('revision360.variants.mapping.description'),
      idealFor: [
        t('revision360.variants.mapping.idealFor.1'),
        t('revision360.variants.mapping.idealFor.2'),
        t('revision360.variants.mapping.idealFor.3'),
        t('revision360.variants.mapping.idealFor.4'),
      ],
      duration: t('revision360.variants.mapping.duration'),
      includes: [
        t('revision360.variants.mapping.includes.1'),
        t('revision360.variants.mapping.includes.2'),
        t('revision360.variants.mapping.includes.3'),
        t('revision360.variants.mapping.includes.4'),
      ],
      price: 'EUR 350',
      accentColor: 'bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20',
      borderColor: 'hover:border-indigo-500/30',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: t('revision360.variants.alignment.title'),
      subtitle: t('revision360.variants.alignment.subtitle'),
      description: t('revision360.variants.alignment.description'),
      idealFor: [
        t('revision360.variants.alignment.idealFor.1'),
        t('revision360.variants.alignment.idealFor.2'),
        t('revision360.variants.alignment.idealFor.3'),
        t('revision360.variants.alignment.idealFor.4'),
      ],
      duration: t('revision360.variants.alignment.duration'),
      includes: [
        t('revision360.variants.alignment.includes.1'),
        t('revision360.variants.alignment.includes.2'),
        t('revision360.variants.alignment.includes.3'),
        t('revision360.variants.alignment.includes.4'),
      ],
      price: 'EUR 280',
      accentColor: 'bg-violet-500/10 text-violet-300 group-hover:bg-violet-500/20',
      borderColor: 'hover:border-violet-500/30',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('revision360.variants.integral.title'),
      subtitle: t('revision360.variants.integral.subtitle'),
      description: t('revision360.variants.integral.description'),
      idealFor: [
        t('revision360.variants.integral.idealFor.1'),
        t('revision360.variants.integral.idealFor.2'),
        t('revision360.variants.integral.idealFor.3'),
        t('revision360.variants.integral.idealFor.4'),
      ],
      duration: t('revision360.variants.integral.duration'),
      includes: [
        t('revision360.variants.integral.includes.1'),
        t('revision360.variants.integral.includes.2'),
        t('revision360.variants.integral.includes.3'),
        t('revision360.variants.integral.includes.4'),
      ],
      price: 'EUR 750',
      highlight: true,
      accentColor: 'bg-gold/15 text-gold group-hover:bg-gold/25',
      borderColor: 'hover:border-gold/60',
    },
  ];

  return (
    <section className="relative py-28 bg-[#09090f] overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/6 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-700/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
            {t('revision360.variants.badge')}
          </span>
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t('revision360.variants.title')}
          </h2>
          <p className="text-lg leading-relaxed text-zinc-500">
            {t('revision360.variants.subtitle')}
          </p>
        </motion.div>

        {/* 2×2 grid — larger cards with full details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {variants.map((variant, index) => (
            <motion.button
              key={variant.title}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className={[
                'group text-left rounded-[2rem] p-8 lg:p-10 transition-all duration-500 relative overflow-hidden flex flex-col',
                'hover:-translate-y-1 active:scale-[0.98]',
                variant.highlight
                  ? `bg-white/[0.07] border border-gold/30 ${variant.borderColor} shadow-xl shadow-gold/5`
                  : `bg-white/[0.04] border border-white/8 ${variant.borderColor}`,
              ].join(' ')}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
            >
              {variant.highlight && (
                <div className="absolute top-5 right-5 rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Popular
                </div>
              )}

              {/* Corner glow */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-gradient-to-bl from-white/[0.04] to-transparent blur-2xl -mr-12 -mt-12 pointer-events-none" aria-hidden="true" />

              {/* Icon */}
              <span className={`relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 transition-colors duration-300 ${variant.accentColor}`}>
                {variant.icon}
              </span>

              {/* Title block */}
              <div className="relative z-10 mb-4">
                <h3 className="text-2xl font-semibold text-white leading-tight">{variant.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-400">{variant.subtitle}</p>
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed text-zinc-400 font-normal mb-6 flex-1">
                {variant.description}
              </p>

              {/* Includes preview — top 3 */}
              <ul className="relative z-10 space-y-1.5 mb-6">
                {variant.includes.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500/70 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                  {variant.duration}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">{variant.price}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedVariant && (
        <Modal
          isOpen={!!selectedVariant}
          onClose={() => setSelectedVariant(null)}
          title={selectedVariant.title}
          size="lg"
        >
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-600">
              {selectedVariant.description}
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.idealFor')}
                </p>
                <ul className="space-y-2">
                  {selectedVariant.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.includes')}
                </p>
                <ul className="space-y-2">
                  {selectedVariant.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.sessionDuration')}
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{selectedVariant.duration}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.investment')}
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900">{selectedVariant.price}</p>
              </div>
            </div>
            <div className="flex justify-center pt-1">
              <Button asChild size="lg" className="rounded-full px-8 h-12">
                <a
                  href={`https://wa.me/34658867133?text=${encodeURIComponent(t('revision360.whatsapp.booking'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('revision360.hero.cta')}
                </a>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
