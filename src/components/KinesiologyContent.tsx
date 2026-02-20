'use client';

import { ArrowRight, Brain, CheckCircle2, Zap } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { SERVICES_DATA } from '@/shared/constants';

export default function KinesiologiaContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();
  const serviceData = SERVICES_DATA.find(s => s.id === 'kinesiologia');

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



  return (
    <>
      <SEOUpdater 
        titleKey="seo.kinesiology.title"
        descriptionKey="seo.kinesiology.description"
        keywordsKey="seo.kinesiology.keywords"
      />
      <PageLayout
        hero={{
          title: t('services.kinesiology.title'),
          subtitle: t('services.kinesiology.description'),
          badge: t('services.kinesiology.subtitle'),
          icon: <Brain className="w-4 h-4" />,
          backgroundImage: serviceData?.image,
          themeColor: serviceData?.color || 'blue'
        }}
      >
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
