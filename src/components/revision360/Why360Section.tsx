'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Wind, Activity, Heart } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const BLUR_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export default function Why360Section() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const layers = [
    {
      name: t('revision360.why360.layers.physical'),
      description: t('revision360.why360.physical.desc'),
      icon: Activity,
      color: 'bg-orange-50 text-orange-600',
      accent: 'from-orange-400/8',
      image:
        'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: t('revision360.why360.layers.structural'),
      description: t('revision360.why360.structural.desc'),
      icon: Layers,
      color: 'bg-blue-50 text-blue-600',
      accent: 'from-blue-400/8',
      image: '',
    },
    {
      name: t('revision360.why360.layers.emotional'),
      description: t('revision360.why360.emotional.desc'),
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
      accent: 'from-rose-400/8',
      image:
        'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: t('revision360.why360.layers.energetic'),
      description: t('revision360.why360.energetic.desc'),
      icon: Wind,
      color: 'bg-teal-50 text-teal-600',
      accent: 'from-teal-400/8',
      image: '',
    },
  ];

  return (
    <section className="relative py-24 bg-secondary">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          {/* Sticky intro column */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-light/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {t('revision360.why360.badge')}
            </span>

            <h2 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
              {t('revision360.why360.title')}
            </h2>

            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-600">
              {t('revision360.why360.subtitle')}
            </p>

            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              size="lg"
              className="rounded-full border-gray-200 bg-white px-8 transition-all hover:scale-105 hover:bg-gray-50"
            >
              {t('revision360.why360.philosophy')}
            </Button>
          </motion.div>

          {/* Bento grid — 2 equal columns, alternating tall/short */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-[220px]">
            {layers.map((layer, index) => {
              const isTall = index === 0 || index === 2;
              return (
                <motion.div
                  key={layer.name}
                  className={[
                    'group relative rounded-[2rem] bg-white border border-gray-100 overflow-hidden',
                    'flex flex-col justify-between p-7',
                    'transition-all duration-500',
                    'hover:shadow-xl hover:shadow-blue-500/5 hover:border-gray-200',
                    isTall ? 'sm:row-span-2' : '',
                  ].join(' ')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {/* Background image */}
                  {layer.image && (
                    <>
                      <Image
                        src={layer.image}
                        alt={layer.name}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700 pointer-events-none"
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/65 to-transparent pointer-events-none" />
                    </>
                  )}

                  {/* Corner accent glow */}
                  <div
                    className={`absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-bl ${layer.accent} to-transparent blur-3xl -mr-10 -mt-10 pointer-events-none transition-transform group-hover:scale-150 duration-700`}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${layer.color} transition-transform group-hover:scale-110 duration-500`}
                    >
                      <layer.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                      {layer.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 font-medium">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Philosophy modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('revision360.why360.modal.title')}
        size="lg"
      >
        <div className="space-y-8 text-gray-600">
          <p className="text-lg leading-relaxed">{t('revision360.why360.modal.intro')}</p>
          <div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {t('revision360.why360.modal.integration.title')}
            </h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.integration.description')}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              {t('revision360.why360.modal.dimensions.title')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {layers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition hover:bg-white"
                >
                  <p className="mb-1 font-bold text-gray-900">{layer.name}</p>
                  <p className="text-sm text-gray-500">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {t('revision360.why360.modal.importance.title')}
            </h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.importance.description')}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
