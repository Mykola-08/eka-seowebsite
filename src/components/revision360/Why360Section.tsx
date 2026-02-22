'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

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
    <section className="relative py-24 bg-secondary">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-xs uppercase tracking-wider text-amber-700 font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              {t('revision360.why360.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
              {t('revision360.why360.title')}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-normal mb-8">
              {t('revision360.why360.subtitle')}
            </p>
            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              {t('revision360.why360.philosophy')}
            </Button>
          </motion.div>

          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {layers.map((layer) => (
              <div
                key={layer.name}
                className="group apple-card p-6 bg-white hover:scale-[1.01] transition-transform duration-300 border hover:border-amber-100/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-900 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{layer.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {layer.description}
                </p>
              </div>
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
                <div key={layer.name} className="rounded-xl border border-gray-100 bg-gray-50 p-5 hover:bg-white hover:shadow-sm transition">
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
