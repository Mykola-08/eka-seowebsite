'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, CheckmarkCircle01Icon, Compass01Icon, Location01Icon, RotateLeft01Icon, SparklesIcon } from '@hugeicons/core-free-icons';
import Modal from './Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
      icon: <HugeiconsIcon icon={RotateLeft01Icon} className="w-6 h-6"  />,
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
      accentColor: 'bg-primary/10 text-primary group-hover:bg-primary/20',
      borderColor: 'border-transparent',
    },
    {
      icon: <HugeiconsIcon icon={Location01Icon} className="h-6 w-6"  />,
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
      accentColor: 'bg-secondary/20 text-secondary group-hover:bg-secondary/30',
      borderColor: 'border-transparent',
    },
    {
      icon: <HugeiconsIcon icon={Compass01Icon} className="h-6 w-6"  />,
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
      accentColor: 'bg-muted text-muted-foreground group-hover:bg-muted/80',
      borderColor: 'border-transparent',
    },
    {
      icon: <HugeiconsIcon icon={SparklesIcon} className="h-6 w-6"  />,
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
      borderColor: 'border-gold/60',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/3 top-0 h-125 w-125 rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-100 w-100 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Badge variant="secondary" className="mb-5 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {t('revision360.variants.badge')}
          </Badge>
          <h2 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('revision360.variants.title')}
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            {t('revision360.variants.subtitle')}
          </p>
        </motion.div>

        {/* 2×2 grid — larger cards with full details */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.09, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Card
                className={[
                  'group text-left p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden flex flex-col h-full items-start cursor-pointer border rounded-4xl bg-card border-border shadow-card',
                  variant.highlight ? 'border-gold/30' : ''
                ].join(' ')}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant.highlight && (
                  <div className="absolute right-5 top-5 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    Popular
                  </div>
                )}

                {/* Corner glow */}
                <div className="pointer-events-none absolute -mr-12 -mt-12 right-0 top-0 h-48 w-48 rounded-full bg-linear-to-bl from-primary/5 to-transparent blur-2xl" aria-hidden="true" />

                {/* Icon */}
                <span className={`relative z-10 mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl transition-colors duration-300 ${variant.accentColor}`}>
                  {variant.icon}
                </span>

                {/* Title block */}
                <div className="relative z-10 mb-4 w-full">
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">{variant.title}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">{variant.subtitle}</p>
                </div>

                {/* Description */}
                <p className="relative z-10 mb-6 flex-1 text-sm font-normal leading-relaxed text-muted-foreground">
                  {variant.description}
                </p>

                {/* Includes preview — top 3 */}
                <ul className="relative z-10 mb-6 w-full space-y-1.5">
                  {variant.includes.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"  />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="relative z-10 flex w-full items-center justify-between border-t border-border pt-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {variant.duration}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">{variant.price}</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary"  />
                  </div>
                </div>
              </Card>
            </motion.div>
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
            <p className="text-base leading-relaxed text-foreground/80">
              {selectedVariant.description}
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('revision360.variants.idealFor')}
                </p>
                <ul className="space-y-2">
                  {selectedVariant.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('revision360.variants.includes')}
                </p>
                <ul className="space-y-2">
                  {selectedVariant.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-foreground/80">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0"  />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border-0 bg-muted/40 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('revision360.variants.sessionDuration')}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">{selectedVariant.duration}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('revision360.variants.investment')}
                </p>
                <p className="mt-1 text-3xl font-bold text-foreground">{selectedVariant.price}</p>
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
