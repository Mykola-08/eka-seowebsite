'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { HugeiconsIcon } from '@hugeicons/react';
import { SparklesIcon } from '@hugeicons/core-free-icons';
import FirstTimeWizard from '@/components/FirstTimeWizard';

export default function FirstTimeContent() {
  const { t } = useLanguage();

  return (
    <PageLayout
      hero={{
        title: t('onboarding.welcome.title') || "Primera Visita",
        subtitle: t('onboarding.welcome.description') || "Descubre tu plan personalizado respondiendo unas breves preguntas.",
        badge: t('hero.firstTime') || "First Time",
        icon: <HugeiconsIcon icon={SparklesIcon} className="w-4 h-4"  />
      }}
      className="bg-secondary"
    >
      <div className="section-container py-12 md:py-20 flex justify-center">
        <FirstTimeWizard />
      </div>
    </PageLayout>
  );
}
