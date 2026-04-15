'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BentoCard } from '@/components/ui/bento-card';
import { shimmerBlurDataURL } from '@/lib/image-utils';

import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES_DATA } from '@/shared/constants';
import ServiceCard from '@/components/ServiceCard';

import SEOUpdater from '@/components/SEOUpdater';
import CasosSection from '@/components/CasosSection';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

import React, { useState } from 'react';
import { type ProblemState, FUNNEL_DATA } from '@/lib/funnel-data';
import { FunnelHero } from '@/components/templates/FunnelHero';
import { AdaptiveMethodology } from '@/components/templates/AdaptiveMethodology';
import { AdaptiveServices } from '@/components/templates/AdaptiveServices';
import { FunnelReviews } from '@/components/templates/FunnelReviews';

export default function HomeContent() {
  const { t } = useLanguage();
  const [problem, setProblem] = useState<ProblemState>('back_pain');

  return (
    <>
      <SEOUpdater 
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        keywordsKey="seo.home.keywords"
      />

      <FunnelHero currentProblem={problem} onProblemChange={setProblem} />
      <AdaptiveMethodology currentProblem={problem} />
      <AdaptiveServices currentProblem={problem} />
      <FunnelReviews testimonials={FUNNEL_DATA[problem].testimonials} />

      {/* Elena Introduction Section - REDESIGNED */}
      <section className="py-24 relative overflow-hidden bg-secondary">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Image Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative order-first flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-4/5 rounded-[40px] overflow-hidden  bg-white">
                <Image
                  src="/images/therapist_photo.jpg"
                  alt={t('home.elenaAlt')}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  placeholder="blur"
                  blurDataURL={shimmerBlurDataURL(500, 625)}
                />
              </div>
            </motion.div>

            {/* Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 text-center lg:text-left space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-900 text-xs font-semibold uppercase tracking-wider">
                  {t('elena.role') || 'Lead Therapist'}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
                  {t('elena.greeting')}
                </h2>
              </div>

              <div className="text-xl text-gray-500 leading-relaxed space-y-6 font-normal max-w-2xl mx-auto lg:mx-0">
                <p>
                  {t('elena.bio')}
                </p>
                <p>
                  {t('elena.approach')}
                </p>
              </div>

              <Link href="/about-elena" className="inline-block pt-4">
                <Button variant="default" size="xl">
                  {t('common.readMore')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos Section */}
      <CasosSection />

      {/* FAQ Section */}
      <FAQ />

      <CTASection />
    </>
  );
}
