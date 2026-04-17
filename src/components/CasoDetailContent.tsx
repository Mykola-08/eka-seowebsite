'use client';

 
import type React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft01Icon, ArrowRight01Icon, Activity01Icon, Brain01Icon, FavouriteIcon, FlashIcon, Shield01Icon, Moon01Icon, StethoscopeIcon, CheckmarkCircle01Icon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
interface ProblemConfig {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  key: string;
}

export default function CasoDetailContent() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';

  const { t } = useLanguage();

  // Helper to get array from translations
  const getArray = (baseKey: string) => {
    const items: string[] = [];
    let i = 1;
    while (true) {
      const key = `${baseKey}${i}`;
      const val = t(key);
      if (val === key || !val) break;
      items.push(val);
      i++;
    }
    return items;
  };

  const problemsConfig: Record<string, ProblemConfig> = {
    'back-pain': { icon: Activity01Icon, color: 'blue', href: '/services/massage', key: 'backPain' },
    'stress-anxiety': { icon: Brain01Icon, color: 'purple', href: '/services/kinesiology', key: 'stress' },
    'digestive-problems': { icon: FavouriteIcon, color: 'green', href: '/services/nutrition', key: 'digestive' },
    'migraines': { icon: Brain01Icon, color: 'red', href: '/services/massage', key: 'migraines' },
    'low-energy': { icon: FlashIcon, color: 'orange', href: '/services/kinesiology', key: 'lowEnergy' },
    'hormonal-problems': { icon: Shield01Icon, color: 'pink', href: '/services/kinesiology', key: 'hormonal' },
    'sleep-difficulties': { icon: Moon01Icon, color: 'indigo', href: '/services/kinesiology', key: 'sleep' },
    'injury-recovery': { icon: StethoscopeIcon, color: 'red', href: '/services/massage', key: 'recovery' }
  };

  const config = id ? problemsConfig[id] : undefined;

  if (!config) {
    return (
      <PageLayout>
          <div className="py-32 text-center bg-secondary min-h-screen flex flex-col items-center justify-center">
              <h1 className="text-3xl font-semibold mb-6">{t('common.notFound') || 'Case not found'}</h1>
              <Link href="/cases">
                  <Button variant="outline">
                      <ArrowLeft01Icon className="mr-2 h-4 w-4" />
                      {t('common.back') || 'Back'}
                  </Button>
              </Link>
          </div>
      </PageLayout>
    );
  }

  const Icon = config.icon;

  // Clean color mapping for minimal accents
  const accentColorClass = {
    blue: 'text-primary bg-primary/5',
    purple: 'text-primary bg-primary/5',
    green: 'text-primary bg-primary/5',
    orange: 'text-gold-dark bg-gold/5',
    indigo: 'text-primary bg-primary/5',
    pink: 'text-pink-600 bg-pink-50',
    red: 'text-destructive bg-destructive/5'
  }[config.color] || 'text-primary bg-primary/5';

  // Data
  const symptoms = getArray(`casos.problems.${config.key}.symptom`);
  const causes = getArray(`casos.problems.${config.key}.cause`);
  const treatment = t(`casos.problems.${config.key}.treatment`);
  const results = t(`casos.problems.${config.key}.results`);

  const Hero = (
     <div className="relative pt-32 pb-24 bg-secondary">
        <div className="section-container text-center max-w-4xl mx-auto">
          
          <Link href="/cases" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft01Icon className="w-4 h-4 mr-1" />
            {t('casos.title')}
          </Link>

          <div className={`w-24 h-24 mx-auto rounded-2xl ${accentColorClass} flex items-center justify-center mb-8 `}>
            <Icon className="w-12 h-12" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight leading-tight">
            {t(`casos.problems.${config.key}.title`)}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-normal max-w-2xl mx-auto text-balance">
            {t(`casos.problems.${config.key}.description`)}
          </p>
        </div>
      </div>
  );

  return (
    <PageLayout hero={Hero}>
      <div className="bg-card py-24">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

            {/* Symptoms */}
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-primary-foreground text-sm font-medium">1</span>
                {t('casos.symptoms')}
              </h2>
              <ul className="space-y-4">
                {symptoms.map((item, idx) => (
                  <li key={idx} className="p-6 rounded-2xl bg-muted/40">
                    <p className="text-foreground/80 text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-8 tracking-tight flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground text-sm font-medium">2</span>
                {t('casos.causes')}
              </h2>
              <ul className="space-y-4">
                {causes.map((item, idx) => (
                  <li key={idx} className="p-6 rounded-2xl bg-card border border-border">
                    <p className="text-muted-foreground text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment & Results - Highlight Section */}
          <div className="bg-foreground rounded-2xl p-8 md:p-16 text-primary-foreground relative overflow-hidden">
              {/* Subtle mesh gradient background */}
              <div className="absolute top-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                  <div>
                      <h2 className="text-2xl font-semibold text-primary-foreground mb-6 flex items-center gap-3">
                          <Activity01Icon className="w-6 h-6 text-primary/80" />
                          {t('casos.treatment')}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-xl font-light">
                          {treatment}
                      </p>
                  </div>

                  <div>
                      <h2 className="text-2xl font-semibold text-primary-foreground mb-6 flex items-center gap-3">
                          <CheckmarkCircle01Icon className="w-6 h-6 text-primary/80" />
                          {t('casos.results')}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-xl font-light">
                          {results}
                      </p>
                  </div>
              </div>

              <div className="mt-16 text-center pt-8">
                  <Link href={config.href}>
                      <Button
                          size="xl"
                          variant="secondary"
                          className="px-10 py-6 h-auto rounded-full font-medium"
                      >
                          {t('common.bookNow')}
                          <ArrowRight01Icon className="w-6 h-6 ml-2" />
                      </Button>
                  </Link>
              </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
