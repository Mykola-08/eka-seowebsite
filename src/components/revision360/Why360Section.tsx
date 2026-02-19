import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-blue-700 font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                {t('labels.framework')}
              </span>
              <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                {t('why360.title')}
              </h2>
              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
                {t('why360.subtitle')}
              </p>
              
              <div className="mt-10 mb-8 relative h-64 w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <img 
                  src="/images/personalized-bg.jpg" 
                  alt="Holistic Wellness" 
                  className="h-full w-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <Button
                type="button"
                onClick={() => setShowModal(true)}
                size="lg"
                className="w-full sm:w-auto"
              >
                {t('why360.philosophy')}
              </Button>
            </div>
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
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#0071e3] group-hover:bg-blue-100 transition-colors">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{layer.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
