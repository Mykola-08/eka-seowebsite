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
      title: t('variants.reset.title'),
      subtitle: t('variants.reset.subtitle'),
      description: t('variants.reset.description'),
      idealFor: [
        t('variants.reset.idealFor.1'),
        t('variants.reset.idealFor.2'),
        t('variants.reset.idealFor.3'),
        t('variants.reset.idealFor.4'),
      ],
      duration: t('variants.reset.duration'),
      includes: [
        t('variants.reset.includes.1'),
        t('variants.reset.includes.2'),
        t('variants.reset.includes.3'),
        t('variants.reset.includes.4'),
      ],
      price: 'EUR 450',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('variants.mapping.title'),
      subtitle: t('variants.mapping.subtitle'),
      description: t('variants.mapping.description'),
      idealFor: [
        t('variants.mapping.idealFor.1'),
        t('variants.mapping.idealFor.2'),
        t('variants.mapping.idealFor.3'),
        t('variants.mapping.idealFor.4'),
      ],
      duration: t('variants.mapping.duration'),
      includes: [
        t('variants.mapping.includes.1'),
        t('variants.mapping.includes.2'),
        t('variants.mapping.includes.3'),
        t('variants.mapping.includes.4'),
      ],
      price: 'EUR 350',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: t('variants.alignment.title'),
      subtitle: t('variants.alignment.subtitle'),
      description: t('variants.alignment.description'),
      idealFor: [
        t('variants.alignment.idealFor.1'),
        t('variants.alignment.idealFor.2'),
        t('variants.alignment.idealFor.3'),
        t('variants.alignment.idealFor.4'),
      ],
      duration: t('variants.alignment.duration'),
      includes: [
        t('variants.alignment.includes.1'),
        t('variants.alignment.includes.2'),
        t('variants.alignment.includes.3'),
        t('variants.alignment.includes.4'),
      ],
      price: 'EUR 280',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('variants.integral.title'),
      subtitle: t('variants.integral.subtitle'),
      description: t('variants.integral.description'),
      idealFor: [
        t('variants.integral.idealFor.1'),
        t('variants.integral.idealFor.2'),
        t('variants.integral.idealFor.3'),
        t('variants.integral.idealFor.4'),
      ],
      duration: t('variants.integral.duration'),
      includes: [
        t('variants.integral.includes.1'),
        t('variants.integral.includes.2'),
        t('variants.integral.includes.3'),
        t('variants.integral.includes.4'),
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
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#0071e3] uppercase bg-blue-50 rounded-full border border-blue-100">
            {t('labels.options')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">{t('variants.title')}</h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">{t('variants.subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {variants.map((variant, index) => (
            <motion.button
              key={variant.title}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className="group text-left rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/30 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0071e3] mb-4 group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300">
                  {variant.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">{variant.title}</h3>
                <p className="text-xs font-bold tracking-wide text-[#0071e3] uppercase mb-3">{variant.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{variant.description}</p>
                
                <div className="flex items-end justify-between border-t border-gray-100 pt-4 mt-auto group-hover:border-blue-50">
                  <span className="text-lg font-bold text-gray-900 tracking-tight">{variant.price}</span>
                  <span className="text-xs font-medium text-gray-500">{variant.duration}</span>
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
            <p className="text-gray-700 text-lg leading-relaxed">{selectedVariant.description}</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-3">{t('variants.idealFor')}</p>
                <ul className="space-y-2.5">
                  {selectedVariant.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-3">{t('variants.includes')}</p>
                <ul className="space-y-2.5">
                  {selectedVariant.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-amber-800 font-bold">{t('variants.sessionDuration')}</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{selectedVariant.duration}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.1em] text-amber-800 font-bold">{t('variants.investment')}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{selectedVariant.price}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
