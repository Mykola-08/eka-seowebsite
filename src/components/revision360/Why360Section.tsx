import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Why360Section() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const layers = [
    { name: t('why360.layers.physical'), description: t('why360.physical.desc') },
    { name: t('why360.layers.structural'), description: t('why360.structural.desc') },
    { name: t('why360.layers.emotional'), description: t('why360.emotional.desc') },
    { name: t('why360.layers.energetic'), description: t('why360.energetic.desc') },
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
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-gray-900 font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              360 Framework
            </span>
            <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              {t('why360.title')}
            </h2>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              {t('why360.subtitle')}
            </p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mt-8 btn bg-gray-900 text-white border border-transparent hover:bg-black hover:scale-105 shadow-md transition-all px-8 py-4 rounded-full font-bold tracking-wide"
            >
              {t('why360.philosophy')}
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
                className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{layer.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {layer.description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={t('why360.modal.title')} size="lg">
        <div className="space-y-8 text-gray-600">
          <p className="leading-relaxed text-lg">{t('why360.modal.intro')}</p>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('why360.modal.integration.title')}</h3>
            <p className="leading-relaxed">{t('why360.modal.integration.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('why360.modal.dimensions.title')}</h3>
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('why360.modal.importance.title')}</h3>
            <p className="leading-relaxed">{t('why360.modal.importance.description')}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
