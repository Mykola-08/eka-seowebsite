'use client';

import PersonalizedOnboarding from '@/components/PersonalizedOnboarding';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

export default function FirstTimeContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      hero={{
        title: t('onboarding.welcome.title') || "Primera Visita",
        subtitle: t('onboarding.welcome.description') || "Descubre tu plan personalizado respondiendo unas breves preguntas.",
        badge: t('hero.firstTime') || "First Time",
        icon: <Sparkles className="w-4 h-4" />
      }}
      className="bg-secondary"
    >
      <div className="section-container py-12 md:py-20 flex justify-center">
        <PersonalizedOnboarding />
      </div>
    </PageLayout>
  );
}
