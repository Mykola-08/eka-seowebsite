'use client';

import Image from 'next/image';
import { ArrowRight, Brain, CheckCircle2, Clock, Zap } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export default function KinesiologiaContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();

  const benefits = [
    t('services.kinesiology.subtitle'),
    t('kinesiology.benefits.posture'),
    t('kinesiology.benefits.stress'),
    t('kinesiology.benefits.energy')
  ];

  const testimonials = [
    {
      name: 'Anna Puig',
      text: t('kinesiology.testimonial.1.text'),
      rating: 5
    },
    {
      name: 'Marc Rivera',
      text: t('kinesiology.testimonial.2.text'),
      rating: 5
    }
  ];

  const durations = [60, 90];

  const Hero = (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm text-blue-700 mb-8 shadow-sm">
                <Brain className="w-4 h-4" />
                <span className="font-medium tracking-wide">{t('kinesiology.hero.badge')}</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 tracking-tight leading-tight">
                {t('kinesiology.page.title')}
              </h1>
              
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
                {t('kinesiology.page.description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigateToBooking()}
                  size="xl"
                  variant="primary"
                  className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  {t('common.bookNow')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 aspect-[4/3] rotate-2 transition-transform duration-700 hover:rotate-0">
                 <Image
                    src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt={t('kinesiology.page.imageAlt') || "Kinesiologia Session"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-gray-100 max-w-xs animate-gentle-float">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 stroke-[1.5px]" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">{t('kinesiology.page.availableToday')}</p>
                      <p className="text-sm text-gray-500 font-light">{t('kinesiology.page.bookSession')}</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );

  return (
    <>
      <SEOUpdater 
        titleKey="seo.kinesiology.title"
        descriptionKey="seo.kinesiology.description"
        keywordsKey="seo.kinesiology.keywords"
      />
      <PageLayout>
      {Hero}

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t('kinesiology.page.benefitsTitle')}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              {t('kinesiology.page.benefitsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <CheckCircle2 className="w-6 h-6 stroke-[1.5px]" />
                </div>
                <span className="text-lg text-gray-700 font-light pt-2 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Pricing */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t('kinesiology.page.durationsTitle')}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              {t('kinesiology.page.durationsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {durations.map((duration) => (
              <div key={duration} className="bg-gray-50 rounded-[2.5rem] p-10 hover:bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group text-center">
                
                <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-full bg-white shadow-sm mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-primary-600 stroke-[1.5px]" />
                </div>
                
                <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight tabular-nums">
                  {duration} <span className="text-lg font-medium text-gray-400 align-top ml-1">{t('common.minutes') || 'min'}</span>
                </h3>
                
                <p className="text-gray-600 mb-8 text-center min-h-[3rem]">
                  {duration === 60 ? t('kinesiology.page.duration60') :
                    t('kinesiology.page.duration90')}
                </p>
                
                <Button
                  variant="primary"
                  onClick={() => navigateToBooking()}
                  className="w-full h-12 border-none"
                >
                  {t('common.bookNow')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="heading-2 mb-4">{t('kinesiology.page.testimonialsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-10 relative">
                 <div className="absolute top-8 left-8 text-6xl text-blue-200 font-serif opacity-50">"</div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Zap key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic relative z-10">
                  {testimonial.text}
                </p>
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </PageLayout>
    </>
  );
}
