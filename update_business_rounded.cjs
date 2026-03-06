const fs = require('fs');

const content = `'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

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
          themeColor: 'blue'
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-20 relative z-20">
          <Button asChild size="xl" className="rounded-full shadow-md hover:shadow-lg transition-all px-8">
            <Link href="/contact">
              {t('nav.bookNow')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="rounded-full bg-white/90 backdrop-blur-sm text-gray-800 border-gray-200 hover:bg-gray-50 px-8">
            <Link href="/contact">
              {t('common.askQuestions')}
            </Link>
          </Button>
        </div>

        {/* Apple-Style Bento Section */}
        <section className="py-20 bg-[#fbfbfd] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6">
                {t('personalized.business.bento.title')}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                {t('personalized.business.bento.subtitle')}
              </p>
            </motion.div>

            {/* Rounded Colorful Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              
              {/* Box 1 (Team Cohesion - Large) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden relative group min-h-[400px] shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <h3 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight mb-4">{t('personalized.business.bento.box1.title')}</h3>
                  <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-xl">
                    {t('personalized.business.bento.box1.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 2 (Productivity - Small/Tall) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-1 rounded-[2rem] sm:rounded-[2.5rem] bg-blue-50/50 border border-blue-100 overflow-hidden relative group min-h-[400px] flex flex-col shadow-sm hover:shadow-lg transition-shadow p-8 sm:p-10"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                    alt="Productivity focus"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-blue-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80" />
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-3">{t('personalized.business.bento.box2.title')}</h3>
                  <p className="text-blue-100 font-medium leading-relaxed">
                    {t('personalized.business.bento.box2.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 3 (Focus - Small/Tall) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-1 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative group min-h-[400px] shadow-sm hover:shadow-lg transition-shadow p-8 sm:p-10 border border-emerald-100"
              >
                <div className="absolute inset-0 z-0">
                   <Image 
                    src="https://images.unsplash.com/photo-1620912189868-3078426fb666?auto=format&fit=crop&q=80&w=800"
                    alt="Focus and stress relief"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/60 to-emerald-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80" />
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-3">{t('personalized.business.bento.box3.title')}</h3>
                  <p className="text-emerald-50 font-medium leading-relaxed">
                    {t('personalized.business.bento.box3.desc')}
                  </p>
                </div>
              </motion.div>

              {/* Box 4 (Holistic Workplace - Large) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden relative group min-h-[400px] shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Holistic workplace environment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">
                  <h3 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight mb-4">{t('personalized.business.bento.box4.title')}</h3>
                  <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-xl">
                    {t('personalized.business.bento.box4.desc')}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Tiers / Plans Section - Rounded & Apple Style */}
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6">
                {t('personalized.business.plans.title')}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                {t('personalized.business.plans.subtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-center">
              {/* Plan 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden group min-h-[500px]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full bg-blue-400 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 relative z-10">{t('personalized.business.plans.starter.name')}</h3>
                <p className="text-gray-500 font-medium mb-8 flex-grow relative z-10">{t('personalized.business.plans.starter.desc')}</p>
                
                <div className="mb-8 pb-8 border-b border-gray-100 relative z-10">
                  <span className="text-4xl font-semibold text-gray-900 tracking-tighter">{t('personalized.business.plans.starter.price')}</span>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{t('personalized.business.plans.starter.feat1')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{t('personalized.business.plans.starter.feat2')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{t('personalized.business.plans.starter.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 px-6 rounded-2xl bg-gray-50 text-gray-900 font-semibold text-center hover:bg-gray-100 transition-colors mt-auto relative z-10 border border-gray-200">
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* Plan 2 (Highlighted - Pro) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-blue-600 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-blue-500 shadow-xl flex flex-col relative overflow-hidden group transform md:-translate-y-4 min-h-[540px] z-10"
              >
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20 rounded-bl-full bg-white transition-transform duration-700 group-hover:scale-125" />
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 relative z-10">{t('personalized.business.plans.pro.name')}</h3>
                <p className="text-blue-100 font-medium mb-8 flex-grow relative z-10">{t('personalized.business.plans.pro.desc')}</p>
                
                <div className="mb-8 pb-8 border-b border-blue-500/50 relative z-10">
                  <span className="text-4xl sm:text-5xl font-semibold text-white tracking-tighter">{t('personalized.business.plans.pro.price')}</span>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex gap-3 items-start text-blue-50 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-100 shrink-0 mt-0.5" />
                    <span className="leading-snug">{t('personalized.business.plans.pro.feat1')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-blue-50 font-medium">
                     <CheckCircle className="w-5 h-5 text-blue-100 shrink-0 mt-0.5" />
                     <span className="leading-snug">{t('personalized.business.plans.pro.feat2')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-blue-50 font-medium">
                     <CheckCircle className="w-5 h-5 text-blue-100 shrink-0 mt-0.5" />
                     <span className="leading-snug">{t('personalized.business.plans.pro.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 px-6 rounded-2xl bg-white text-blue-600 font-semibold text-center hover:bg-blue-50 transition-colors mt-auto relative z-10 shadow-sm">
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* Plan 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden group min-h-[500px]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full bg-indigo-400 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 relative z-10">{t('personalized.business.plans.enterprise.name')}</h3>
                <p className="text-gray-500 font-medium mb-8 flex-grow relative z-10">{t('personalized.business.plans.enterprise.desc')}</p>
                
                <div className="mb-8 pb-8 border-b border-gray-100 relative z-10">
                   <span className="text-4xl font-semibold text-gray-900 tracking-tighter">{t('personalized.business.plans.enterprise.price')}</span>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                     <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                     <span className="leading-snug">{t('personalized.business.plans.enterprise.feat1')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                     <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                     <span className="leading-snug">{t('personalized.business.plans.enterprise.feat2')}</span>
                  </li>
                  <li className="flex gap-3 items-start text-gray-600 font-medium">
                     <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                     <span className="leading-snug">{t('personalized.business.plans.enterprise.feat3')}</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full py-4 px-6 rounded-2xl bg-gray-50 text-gray-900 font-semibold text-center hover:bg-gray-100 transition-colors mt-auto relative z-10 border border-gray-200">
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