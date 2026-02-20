'use client';

import React from 'react';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CoreServiceTemplate from '@/components/templates/CoreServiceTemplate';

export default function NutritionContent() {
  const { t } = useLanguage();

  // Note: Nutrition pricing options are slightly more complex in the original (name + description + duration string)
  // The CoreServiceTemplate supports `nameKey` and string duration, so I'll adapt it.
  
  return (
    <CoreServiceTemplate
      serviceId="nutritio"
      hero={{
        titleKey: 'services.nutrition.title',
        subtitleKey: 'services.nutrition.description',
        badgeKey: 'services.nutrition.subtitle',
        icon: Leaf
      }}
      seoKeys={{
        title: 'seo.nutrition.title',
        description: 'seo.nutrition.description',
        keywords: 'seo.nutrition.keywords'
      }}
      features={{
        titleKey: 'nutrition.page.benefitsTitle',
        subtitleKey: 'nutrition.page.benefitsSubtitle',
        benefits: [
          'nutrition.benefits.habits',
          'services.nutrition.subtitle',
          'nutrition.benefits.weight',
          'nutrition.benefits.prevention'
        ]
      }}
      pricing={{
        titleKey: 'nutrition.page.durationsTitle',
        subtitleKey: 'nutrition.page.durationsSubtitle',
        options: [
          { 
            duration: '60 min', 
            nameKey: 'nutrition.session.first.name',
            descriptionKey: 'nutrition.session.first.description' 
          },
          { 
            duration: '45 min', 
            nameKey: 'nutrition.session.followup.name',
            descriptionKey: 'nutrition.session.followup.description' 
          }
        ]
      }}
      testimonials={{
        titleKey: 'nutrition.page.testimonialsTitle',
        items: [
          {
            name: 'Carla Ferrer',
            text: t('nutrition.testimonial.1.text'),
            rating: 5
          },
          {
            name: 'Pere Castell',
            text: t('nutrition.testimonial.2.text'),
            rating: 5
          }
        ]
      }}
    />
  );
}
