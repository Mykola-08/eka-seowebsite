import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Why360Section() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const layers = [
    { name: t('revision360.why360.layers.physical'), description: t('revision360.why360.physical.desc') },
    { name: t('revision360.why360.layers.structural'), description: t('revision360.why360.structural.desc') },
    { name: t('revision360.why360.layers.emotional'), description: t('revision360.why360.emotional.desc') },
    { name: t('revision360.why360.layers.energetic'), description: t('revision360.why360.energetic.desc') },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-gray-50">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-yellow-800 font-bold">
              <Sparkles className="h-3.5 w-3.5 text-yellow-600" />
              {t('revision360.why360.badge')}
            </span>
            <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              {t('revision360.why360.title')}
            </h2>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              {t('revision360.why360.subtitle')}
            </p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mt-8 btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white border border-transparent hover:scale-105 shadow-md shadow-yellow-200 hover:shadow-yellow-300/50 transition-all px-8 py-4 rounded-full font-bold tracking-wide"
            >
              {t('revision360.why360.philosophy')}
            </button>
          </motion.div>

          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {layers.map((layer) => (
              <article
                key={layer.name}
                className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-yellow-200 hover:-translate-y-1 group"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-yellow-700 group-hover:bg-yellow-100 transition-colors">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">{layer.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {layer.description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={t('revision360.why360.modal.title')} size="lg">
        <div className="space-y-8 text-gray-600">
          <p className="leading-relaxed text-lg">{t('revision360.why360.modal.intro')}</p>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('revision360.why360.modal.integration.title')}</h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.integration.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('revision360.why360.modal.dimensions.title')}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {layers.map((layer) => (
                <div key={layer.name} className="rounded-xl border border-gray-100 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition-all">
                  <p className="font-bold text-gray-900 mb-1">{layer.name}</p>
                  <p className="text-sm text-gray-500">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('revision360.why360.modal.importance.title')}</h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.importance.description')}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
