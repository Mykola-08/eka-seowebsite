'use client';

import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PersonalizedServiceTemplate from '@/components/templates/PersonalizedServiceTemplate';

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

  const recommendedServices = [
    {
      titleKey: 'personalized.business.services.groupClasses.title',
      descriptionKey: 'personalized.business.services.groupClasses.description',
      href: '/contact',
      duration: '45-60 min'
    },
    {
      titleKey: 'personalized.business.services.consulting.title',
      descriptionKey: 'personalized.business.services.consulting.description',
      href: '/contact',
      duration: 'Custom'
    }
  ];

  const benefits = [
    t('personalized.business.benefit1'),
    t('personalized.business.benefit2'),
    t('personalized.business.benefit3'),
    t('personalized.business.benefit4')
  ];

  return (
    <PersonalizedServiceTemplate
      serviceId="business"
      translationKey="personalized.business"
      Icon={Building2}
      seoKeys={{
        title: 'seo.business.title',
        description: 'seo.business.description',
        keywords: 'seo.business.keywords'
      }}
      recommendedServices={recommendedServices}
      faqItems={faqItems}
      benefits={benefits}
    />
  );
}
