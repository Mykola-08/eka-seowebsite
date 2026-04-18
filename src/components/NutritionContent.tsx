'use client';

import React from 'react';
import { Leaf01Icon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import CoreServiceTemplate from '@/components/templates/CoreServiceTemplate';

export default function NutritionContent() {
  const { t } = useLanguage();

  return (
    <CoreServiceTemplate
      serviceId="nutritio"
      hero={{
        titleKey: 'services.nutrition.title',
        subtitleKey: 'services.nutrition.description',
        badgeKey: 'services.nutrition.subtitle',
        icon: Leaf01Icon,
        backgroundImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1440'
      }}
      bentoGrid={{
        titleKey: 'nutrition.page.benefitsTitle',
        subtitleKey: 'nutrition.page.benefitsSubtitle',
        items: [
          {
            titleKey: 'nutrition.benefits.habits',
            descriptionKey: 'nutrition.benefits.habits',
            detailsKey: 'nutrition.benefits.habits.details',
            icon: 'Activity',
            color: 'green',
            size: 'large'
          },
          {
            titleKey: 'services.nutrition.subtitle',
            descriptionKey: 'services.nutrition.subtitle',
            detailsKey: 'nutrition.benefits.knowledge.details',
            icon: 'Leaf',
            color: 'orange',
            size: 'medium'
          },
          {
            titleKey: 'nutrition.benefits.weight',
            descriptionKey: 'nutrition.benefits.weight',
            detailsKey: 'nutrition.benefits.weight.details',
            icon: 'Clock',
            color: 'blue',
            size: 'medium'
          },
          {
            titleKey: 'nutrition.benefits.prevention',
            descriptionKey: 'nutrition.benefits.prevention',
            detailsKey: 'nutrition.benefits.prevention.details',
            icon: 'Sparkles',
            color: 'pink',
            size: 'large'
          }
        ]
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
            price: 70,
            nameKey: 'nutrition.session.first.name',
            descriptionKey: 'nutrition.session.first.description' 
          },
          { 
            duration: '45 min', 
            price: 55,
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
