'use client';

import React from 'react';
import { Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

export default function ArtistsContent() {
  const { t } = useLanguage();

  const benefits = [
    t('personalized.artists.benefit1'),
    t('personalized.artists.benefit2'),
    t('personalized.artists.benefit3'),
    t('personalized.artists.benefit4')
  ];

  return (
    <PersonalizedServiceTemplate
      serviceId="artists"
      translationKey="personalized.artists"
      Icon={Palette}
      seoKeys={{
        title: 'seo.artists.title',
        description: 'seo.artists.description',
        keywords: 'seo.artists.keywords'
      }}
      recommendedServices={[
        {
          titleKey: 'personalized.artists.services.title',
          descriptionKey: 'personalized.artists.services.subtitle',
          href: '/booking',
          duration: '60 min'
        }
      ]}
      benefits={benefits}
      showMethodology={true}
    />
  );
}
