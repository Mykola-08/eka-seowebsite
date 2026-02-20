'use client';

import React from 'react';
import { CheckCircle2, Star, Clock } from 'lucide-react';
import { useBooking } from '@/hooks/useBooking';
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEOUpdater from '@/components/SEOUpdater';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import { SERVICES_DATA } from '@/shared/constants';

interface PricingOption {
  duration: number | string;
  price?: number;
  descriptionKey?: string;
  nameKey?: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface CoreServiceTemplateProps {
  serviceId: string;
  hero: {
    titleKey: string;
    subtitleKey: string;
    badgeKey: string;
    icon?: React.ElementType;
  };
  features: {
    titleKey: string;
    subtitleKey: string;
    benefits: string[]; // translation keys or direct text
  };
  pricing: {
    titleKey: string;
    subtitleKey: string;
    options: PricingOption[];
  };
  testimonials?: {
    titleKey: string;
    items: Testimonial[];
  };
  faqItems?: Array<{ id: string; question: string; answer: string }>;
  seoKeys: {
    title: string;
    description: string;
    keywords: string;
  };
}

const colorMap: Record<string, string> = {
  orange: 'text-orange-600 bg-orange-50/50 border-orange-100/50',
  blue: 'text-blue-600 bg-blue-50/50 border-blue-100/50',
  green: 'text-green-600 bg-green-50/50 border-green-100/50',
  purple: 'text-purple-600 bg-purple-50/50 border-purple-100/50',
  pink: 'text-pink-600 bg-pink-50/50 border-pink-100/50',
  amber: 'text-amber-600 bg-amber-50/50 border-amber-100/50',
};

const iconColorMap: Record<string, string> = {
  orange: 'text-orange-600 bg-orange-100',
  blue: 'text-blue-600 bg-blue-100',
  green: 'text-green-600 bg-green-100',
  purple: 'text-purple-600 bg-purple-100',
  pink: 'text-pink-600 bg-pink-100',
  amber: 'text-amber-600 bg-amber-100',
};

export default function CoreServiceTemplate({
  serviceId,
  hero,
  features,
  pricing,
  testimonials,
  faqItems,
  seoKeys
}: CoreServiceTemplateProps) {
  const { navigateToBooking } = useBooking();
  const { t } = useLanguage();
  const serviceData = SERVICES_DATA.find(s => s.id === serviceId);
  const theme = serviceData?.color || 'blue';
  
  // Styles based on theme
  const benefitStyle = colorMap[theme] || colorMap.blue;
  const iconStyle = iconColorMap[theme] || iconColorMap.blue;

  return (
    <>
      <SEOUpdater 
        titleKey={seoKeys.title}
        descriptionKey={seoKeys.description}
        keywordsKey={seoKeys.keywords}
      />
      <PageLayout
        hero={{
          title: t(hero.titleKey),
          subtitle: t(hero.subtitleKey),
          badge: t(hero.badgeKey),
          icon: hero.icon ? <hero.icon className="w-4 h-4" /> : undefined,
          backgroundImage: serviceData?.image,
          themeColor: theme
        }}
      >
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t(features.titleKey)}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t(features.subtitleKey)}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.benefits.map((benefit, index) => (
              <div key={index} className={`flex gap-4 p-6 rounded-2xl border transition-colors ${benefitStyle}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconStyle}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-lg text-gray-700 font-medium pt-2">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Duration Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t(pricing.titleKey)}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t(pricing.subtitleKey)}</p>
          </div>

          <div className={`grid gap-8 max-w-4xl mx-auto ${pricing.options.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {pricing.options.map((option, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] p-10 border border-gray-200/50 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center relative overflow-hidden">
                {/* Theme decoration */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme === 'orange' ? 'from-orange-400 to-amber-500' : theme === 'blue' ? 'from-blue-400 to-indigo-500' : theme === 'green' ? 'from-green-400 to-emerald-500' : theme === 'purple' ? 'from-purple-400 to-violet-500' : 'from-gray-400 to-gray-500'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className={`flex items-center justify-center mb-8 w-20 h-20 rounded-2xl ${theme === 'orange' ? 'bg-orange-50' : theme === 'blue' ? 'bg-blue-50' : theme === 'green' ? 'bg-green-50' : 'bg-gray-50'} shadow-sm mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Clock className={`w-8 h-8 ${theme === 'orange' ? 'text-orange-600' : theme === 'blue' ? 'text-blue-600' : theme === 'green' ? 'text-green-600' : 'text-gray-600'}`} />
                </div>
                
                {option.nameKey && (
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                         {t(option.nameKey) !== option.nameKey ? t(option.nameKey) : option.nameKey}
                    </h3>
                )}

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {typeof option.duration === 'number' ? `${option.duration} ${t('common.minutes')}` : option.duration}
                </h3>
                
                {option.descriptionKey && (
                    <p className="text-gray-600 mb-6 font-light leading-relaxed text-sm">
                        {t(option.descriptionKey)}
                    </p>
                )}
                
                {option.price && (
                   <div className="mb-8">
                      <span className="text-4xl font-light text-gray-900">{option.price}€</span>
                   </div>
                )}
                
                <div className="mt-auto w-full">
                    <Button 
                        onClick={() => navigateToBooking()}
                        variant="apple"
                        size="lg"
                        className="w-full shadow-md hover:shadow-lg transition-all"
                    >
                        {t('common.bookNow')}
                    </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials (Optional) */}
      {testimonials && testimonials.items.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="heading-2 text-center mb-16">{t(testimonials.titleKey)}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.items.map((testimonial, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300">
                             <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                             </div>
                             <p className="text-lg text-gray-600 mb-6 italic flex-grow">&ldquo;{testimonial.text}&rdquo;</p>
                             <div className="font-semibold text-gray-900 mt-auto">{testimonial.name}</div>
                        </div>
                    ))}
                </div>
            </div>
          </section>
      )}

      {faqItems ? <FAQ items={faqItems} /> : <FAQ />}
      <CTASection />
      </PageLayout>
    </>
  );
}
