'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Activity01Icon, FastWindIcon, FavouriteIcon, Layers01Icon, SparklesIcon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function Why360Section() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const layers = [
    {
      name: t('revision360.why360.layers.physical'),
      description: t('revision360.why360.physical.desc'),
      icon: Activity01Icon,
      color: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
    },
    {
      name: t('revision360.why360.layers.structural'),
      description: t('revision360.why360.structural.desc'),
      icon: Layers01Icon,
      color: 'bg-secondary/20 text-secondary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground',
    },
    {
      name: t('revision360.why360.layers.emotional'),
      description: t('revision360.why360.emotional.desc'),
      icon: FavouriteIcon,
      color: 'bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground',
    },
    {
      name: t('revision360.why360.layers.energetic'),
      description: t('revision360.why360.energetic.desc'),
      icon: FastWindIcon,
      color: 'bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground',
    },
  ];

  return (
    <section className="relative bg-muted/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <Badge variant="secondary" className="mb-6 gap-2 rounded-full border-0 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              <HugeiconsIcon icon={SparklesIcon} className="h-3.5 w-3.5" aria-hidden="true" />
              {t('revision360.why360.badge')}
            </Badge>

            <h2 className="mb-6 text-balance text-5xl font-bold tracking-tighter leading-[0.95] text-foreground sm:text-7xl">
              {t('revision360.why360.title')}
            </h2>

            <p className="text-xl font-light leading-relaxed text-muted-foreground">
              {t('revision360.why360.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="shrink-0"
          >
            <Button
              onClick={() => setShowModal(true)}
              variant="outline"
              size="lg"
              className="h-12 rounded-full bg-background px-8 text-base font-medium shadow-sm transition-all hover:-translate-y-0.5"
            >
              {t('revision360.why360.philosophy')}
              <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-[2.5rem] bg-border overflow-hidden shadow-sm">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative flex h-full px-10 py-12 sm:p-16 flex-col bg-background transition-colors hover:bg-muted/20"
            >
              <div className={`mb-8 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted/40 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground`}>
                <HugeiconsIcon icon={layer.icon} className="h-6 w-6" aria-hidden="true" />
              </div>
              
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">
                {layer.name}
              </h3>
              
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('revision360.why360.modal.title')}
        size="lg"
      >
        <div className="space-y-8 text-foreground/80">
          <p className="text-lg leading-relaxed">{t('revision360.why360.modal.intro')}</p>
          <div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              {t('revision360.why360.modal.integration.title')}
            </h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.integration.description')}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">
              {t('revision360.why360.modal.dimensions.title')}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {layers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-3xl border border-border bg-muted/30 p-5 transition hover:bg-muted"
                >
                  <p className="mb-1 font-bold text-foreground">{layer.name}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              {t('revision360.why360.modal.importance.title')}
            </h3>
            <p className="leading-relaxed">{t('revision360.why360.modal.importance.description')}</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
