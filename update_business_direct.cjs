const fs = require('fs');

const content = `'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ForBusinessContent() {
  const { t } = useLanguage();

  const faqItems = [
    {
      id: 'business-q1',
      question: t('personalized.business.faq.q1'),
      answer: t('personalized.business.faq.a1')
    },
    {
      id: 'business-q2',
      question: t('personalized.business.faq.q2'),
      answer: t('personalized.business.faq.a2')
    },
    {
      id: 'business-q3',
      question: t('personalized.business.faq.q3'),
      answer: t('personalized.business.faq.a3')
    }
  ];

  return (
    <>
      <SEOUpdater
        titleKey="seo.business.title"
        descriptionKey="seo.business.description"
        keywordsKey="seo.business.keywords"
      />
      <PageLayout
        hero={{
          title: t('personalized.business.hero.title'),
          subtitle: t('personalized.business.hero.description'),
          backgroundImage: '/images/services/business.jpg',
          themeColor: 'zinc'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-20 relative z-20">
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-10 bg-black text-white font-medium tracking-wide uppercase text-sm hover:bg-zinc-800 transition-colors duration-300">
            {t('nav.bookNow')}
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-10 border border-zinc-300 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-zinc-50 transition-colors duration-300">
            {t('common.askQuestions')}
          </Link>
        </div>

        {/* Minimalist Bento Section */}
        <section className="pb-24 bg-white relative overflow-hidden">
          <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-6">
                {t('personalized.business.bento.title')}
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
                {t('personalized.business.bento.subtitle')}
              </p>
            </motion.div>

            {/* Minimalist Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-1 lg:auto-rows-[380px] max-w-6xl mx-auto">
              
              {/* Box 1 (Team Cohesion) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-8 bg-zinc-100 overflow-hidden relative group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h3 className="text-3xl text-white font-light tracking-wide mb-4">{t('personalized.business.bento.box1.title')}</h3>
                  <p className="text-white/70 font-light text-lg leading-relaxed max-w-xl">
                    {t('personalized.business.bento.box1.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 2 (Productivity) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-4 bg-zinc-900 overflow-hidden relative group flex flex-col justify-end p-10"
              >
                <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-40">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                    alt="Productivity focus"
                    fill
                    className="object-cover filter grayscale"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl text-white font-light tracking-wide mb-4">{t('personalized.business.bento.box2.title')}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {t('personalized.business.bento.box2.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 3 (Focus) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 bg-zinc-900 overflow-hidden relative group flex flex-col justify-end p-10"
              >
                <div className="absolute inset-0 opacity-20 transition-opacity duration-1000 group-hover:opacity-40">
                   <Image 
                    src="https://images.unsplash.com/photo-1620912189868-3078426fb666?auto=format&fit=crop&q=80&w=800"
                    alt="Focus and stress relief"
                    fill
                    className="object-cover filter grayscale"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl text-white font-light tracking-wide mb-4">{t('personalized.business.bento.box3.title')}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {t('personalized.business.bento.box3.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 4 (Holistic Workplace) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-7 bg-zinc-100 overflow-hidden relative group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Holistic workplace environment"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h3 className="text-3xl text-white font-light tracking-wide mb-4">{t('personalized.business.bento.box4.title')}</h3>
                  <p className="text-white/70 font-light text-lg leading-relaxed max-w-xl">
                    {t('personalized.business.bento.box4.desc')}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Tiers / Plans Section */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
          <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h2 className="text-4xl font-light tracking-tight text-black mb-6">
                {t('personalized.business.plans.title')}
              </h2>
              <p className="text-lg text-zinc-500 font-light">
                {t('personalized.business.plans.subtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 max-w-6xl mx-auto border border-zinc-200">
              {/* Plan 1 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 md:p-12 flex flex-col hover:bg-zinc-50 transition-colors duration-500"
              >
                <h3 className="text-2xl font-light tracking-wide text-black mb-3">{t('personalized.business.plans.starter.name')}</h3>
                <p className="text-zinc-500 text-sm font-light mb-10 flex-grow leading-relaxed">{t('personalized.business.plans.starter.desc')}</p>
                
                <div className="mb-10 pb-10 border-b border-zinc-100">
                  <span className="text-3xl font-light text-black tracking-tight">{t('personalized.business.plans.starter.price')}</span>
                </div>

                <ul className="space-y-5 mb-12 text-sm text-zinc-600 font-light">
                  <li className="flex gap-4">
                    <span className="text-zinc-300">—</span> 
                    <span>{t('personalized.business.plans.starter.feat1')}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-zinc-300">—</span> 
                    <span>{t('personalized.business.plans.starter.feat2')}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-zinc-300">—</span> 
                    <span>{t('personalized.business.plans.starter.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 text-xs font-medium uppercase tracking-[0.2em] text-center border border-black text-black hover:bg-black hover:text-white transition-colors mt-auto">
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* Plan 2 (Highlighted - Dark Minimal) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-950 p-10 md:p-12 flex flex-col relative group hover:bg-black transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white" />
                <h3 className="text-2xl font-light tracking-wide text-white mb-3">{t('personalized.business.plans.pro.name')}</h3>
                <p className="text-zinc-400 text-sm font-light mb-10 flex-grow leading-relaxed">{t('personalized.business.plans.pro.desc')}</p>
                
                <div className="mb-10 pb-10 border-b border-zinc-800">
                  <span className="text-3xl font-light text-white tracking-tight">{t('personalized.business.plans.pro.price')}</span>
                </div>

                <ul className="space-y-5 mb-12 text-sm text-zinc-300 font-light">
                  <li className="flex gap-4">
                     <span className="text-zinc-600">—</span> 
                     <span>{t('personalized.business.plans.pro.feat1')}</span>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-zinc-600">—</span> 
                     <span>{t('personalized.business.plans.pro.feat2')}</span>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-zinc-600">—</span> 
                     <span>{t('personalized.business.plans.pro.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 text-xs font-medium uppercase tracking-[0.2em] text-center bg-white text-black hover:bg-zinc-200 transition-colors mt-auto">
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* Plan 3 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-10 md:p-12 flex flex-col hover:bg-zinc-50 transition-colors duration-500"
              >
                <h3 className="text-2xl font-light tracking-wide text-black mb-3">{t('personalized.business.plans.enterprise.name')}</h3>
                <p className="text-zinc-500 text-sm font-light mb-10 flex-grow leading-relaxed">{t('personalized.business.plans.enterprise.desc')}</p>
                
                <div className="mb-10 pb-10 border-b border-zinc-100">
                   <span className="text-3xl font-light text-black tracking-tight">{t('personalized.business.plans.enterprise.price')}</span>
                </div>

                <ul className="space-y-5 mb-12 text-sm text-zinc-600 font-light">
                  <li className="flex gap-4">
                     <span className="text-zinc-300">—</span> 
                     <span>{t('personalized.business.plans.enterprise.feat1')}</span>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-zinc-300">—</span> 
                     <span>{t('personalized.business.plans.enterprise.feat2')}</span>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-zinc-300">—</span> 
                     <span>{t('personalized.business.plans.enterprise.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 text-xs font-medium uppercase tracking-[0.2em] text-center border border-black text-black hover:bg-black hover:text-white transition-colors mt-auto">
                  {t('nav.contact')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />
        <CTASection />
      </PageLayout>
    </>
  );
}
`;
fs.writeFileSync('src/components/ForBusinessContent.tsx', content);