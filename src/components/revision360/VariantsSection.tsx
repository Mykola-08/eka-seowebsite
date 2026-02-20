import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, RotateCcw, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';

interface Variant {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  duration: string;
  includes: string[];
  price: string;
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
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-gray-900 uppercase bg-gray-100 rounded-full">
            {t('revision360.variants.badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">{t('revision360.variants.title')}</h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">{t('revision360.variants.subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {variants.map((variant, index) => (
            <motion.button
              key={variant.title}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className="group text-left rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-inner">
                {variant.icon}
              </span>
              <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:translate-x-1 transition-transform">{variant.title}</h3>
              <p className="mt-1 text-xs text-gray-500 font-bold uppercase tracking-wider">{variant.subtitle}</p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed min-h-[5em]">{variant.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 group-hover:border-gray-200 transition-colors">
                <span className="text-xs uppercase tracking-[0.1em] text-gray-400 font-medium">{variant.duration}</span>
                <span className="text-xl font-bold text-gray-900">{variant.price}</span>
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
            <p className="text-gray-700 text-lg leading-relaxed">{selectedVariant.description}</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">{t('revision360.variants.idealFor')}</p>
                <ul className="space-y-2.5">
                  {selectedVariant.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">{t('revision360.variants.includes')}</p>
                <ul className="space-y-2.5">
                  {selectedVariant.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500 font-bold">{t('revision360.variants.sessionDuration')}</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{selectedVariant.duration}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500 font-bold">{t('revision360.variants.investment')}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{selectedVariant.price}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
