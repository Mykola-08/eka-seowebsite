'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, MapPin, RotateCcw, Sparkles } from 'lucide-react';
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
    },
  ];

  return (
    <section className="relative py-24 bg-[#09090f] overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-700/6 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl text-center mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
            {t('revision360.variants.badge')}
          </span>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t('revision360.variants.title')}
          </h2>
          <p className="text-lg font-normal leading-relaxed text-zinc-500">
            {t('revision360.variants.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {variants.map((variant, index) => (
            <motion.button
              key={variant.title}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className={[
                'group text-left rounded-[2rem] p-7 transition-all duration-500 relative overflow-hidden flex flex-col h-full',
                'hover:-translate-y-1 active:scale-[0.98]',
                variant.highlight
                  ? 'bg-white/8 border border-gold/40 hover:bg-white/[0.12] hover:border-gold/60 shadow-xl shadow-gold/10'
                  : 'bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20',
              ].join(' ')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {variant.highlight && (
                <div className="absolute top-4 right-4 rounded-full bg-gold/15 border border-gold/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  Popular
                </div>
              )}

              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-bl from-white/5 to-transparent blur-2xl -mr-10 -mt-10 pointer-events-none" aria-hidden="true" />

              {/* Icon */}
              <span className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-zinc-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors duration-300">
                {variant.icon}
              </span>

              <h3 className="relative z-10 text-xl font-semibold text-white">{variant.title}</h3>
              <p className="relative z-10 mt-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                {variant.subtitle}
              </p>
              <p className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-zinc-400 font-normal">
                {variant.description}
              </p>

              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                  {variant.duration}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">{variant.price}</span>
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
          <div className="space-y-8">
            <p className="text-lg leading-relaxed font-light text-gray-600">
              {selectedVariant.description}
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.idealFor')}
                </p>
                <ul className="space-y-2.5">
                  {selectedVariant.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.includes')}
                </p>
                <ul className="space-y-2.5">
                  {selectedVariant.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-secondary p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.sessionDuration')}
                </p>
                <p className="mt-1 text-xl font-semibold text-gray-900">{selectedVariant.duration}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('revision360.variants.investment')}
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900">{selectedVariant.price}</p>
              </div>
            </div>
            <div className="flex justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12"
              >
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
