'use client';

import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { SERVICES_DATA } from '@/shared/constants';

export default function MassageContent() {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();
  const serviceData = SERVICES_DATA.find(s => s.id === 'massatge');

  const benefits = [
    t('massage.benefits.pain'),
    t('services.massage.subtitle'),
    t('massage.benefits.circulation'),
    t('massage.benefits.wellbeing')
  ];

  const testimonials = [
    {
      name: 'Maria S.',
      text: t('massage.testimonial.1.text'),
      rating: 5
    },
    {
      name: 'Jordi M.',
      text: t('massage.testimonial.2.text'),
      rating: 5
    }
  ];

  const durations = [60, 90, 120];

  return (
    <>
      <SEOUpdater 
        titleKey="seo.massage.title"
        descriptionKey="seo.massage.description"
        keywordsKey="seo.massage.keywords"
      />
      <PageLayout
        hero={{
          title: t('services.massage.title'),
          subtitle: t('services.massage.description'),
          badge: t('services.massage.subtitle'),
          icon: <Heart className="w-4 h-4" />,
          backgroundImage: serviceData?.image,
          themeColor: serviceData?.color || 'orange'
        }}
      >
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('massage.page.benefitsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t('massage.page.benefitsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 hover:border-orange-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-lg text-gray-700 font-medium pt-2">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('massage.page.durationsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t('massage.page.durationsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {durations.map((duration) => (
              <div key={duration} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-2xl bg-orange-50 mx-auto group-hover:bg-orange-100 transition-colors">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {duration} {t('common.minutes') || 'min'}
                </h3>
                
                <p className="text-gray-600 mb-8 text-center min-h-[3rem]">
                  {duration === 60 ? t('massage.page.duration60') :
                    duration === 90 ? t('massage.page.duration90') :
                      t('massage.page.duration120')}
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
             <h2 className="heading-2 mb-4">{t('massage.page.testimonialsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-10 relative">
                <div className="absolute top-8 left-8 text-6xl text-orange-200 font-serif opacity-50">"</div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
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
