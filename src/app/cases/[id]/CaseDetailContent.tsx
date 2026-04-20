'use client';
 
import type React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowLeft01Icon, ArrowRight01Icon, Activity01Icon, Brain01Icon, FavouriteIcon, FlashIcon, Shield01Icon, Moon01Icon, StethoscopeIcon, CheckmarkCircle01Icon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
interface ProblemConfig {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  key: string;
}

export const problemsConfig: Record<string, ProblemConfig> = {
  'back-pain': { icon: Activity01Icon, color: 'blue', href: '/services/massage', key: 'backPain' },
  'stress-anxiety': { icon: Brain01Icon, color: 'purple', href: '/services/kinesiology', key: 'stress' },
  'digestive-problems': { icon: FavouriteIcon, color: 'green', href: '/services/nutrition', key: 'digestive' },
  'migraines': { icon: Brain01Icon, color: 'red', href: '/services/massage', key: 'migraines' },
  'low-energy': { icon: FlashIcon, color: 'orange', href: '/services/kinesiology', key: 'lowEnergy' },
  'hormonal-problems': { icon: Shield01Icon, color: 'pink', href: '/services/kinesiology', key: 'hormonal' },
  'sleep-difficulties': { icon: Moon01Icon, color: 'indigo', href: '/services/kinesiology', key: 'sleep' },
  'injury-recovery': { icon: StethoscopeIcon, color: 'red', href: '/services/massage', key: 'recovery' }
};

export default function CaseDetailContent({ id }: { id: string }) {
  const { t } = useLanguage();

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

  const config = problemsConfig[id];

  if (!config) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-medium mb-4">{t('common.notFound') || 'Case not found'}</h1>
        <Link href="/cases">
          <Button variant="outline">
            <ArrowLeft01Icon className="mr-2 h-4 w-4" />
            {t('common.back') || 'Back'}
          </Button>
        </Link>
      </div>
    );
  }

  const Icon = config.icon;
  const colors = {
    blue: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-primary/20' },
    purple: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-purple-200' },
    green: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-primary/20' },
    orange: { bg: 'bg-gold/5', text: 'text-gold-dark', border: 'border-orange-200' },
    indigo: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-primary/20' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
    red: { bg: 'bg-destructive/5', text: 'text-destructive', border: 'border-destructive/20' }
  };
  const colorClass = colors[config.color as keyof typeof colors] || colors.blue;

  const concerns = getArray(`casos.problems.${config.key}.concern`);
  const causes = getArray(`casos.problems.${config.key}.cause`);
  const approach = t(`casos.problems.${config.key}.approach`);
  const results = t(`casos.problems.${config.key}.results`);

  return (
    <div className="min-h-screen bg-card">

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-muted/30 border-b border-border/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

          <Link href="/cases" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors bg-card px-4 py-2 rounded-full border border-border">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('casos.title')}
          </Link>

          <div className={`w-20 h-20 mx-auto rounded-apple ${colorClass.bg} flex items-center justify-center mb-6 `}>
            <Icon className={`w-10 h-10 ${colorClass.text}`} />
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            {t(`casos.problems.${config.key}.title`)}
          </h1>

          <p className="text-xl text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
            {t(`casos.problems.${config.key}.description`)}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Symptoms */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-destructive/40 to-transparent rounded-full opacity-50" />
            <h2 className="text-2xl font-light text-foreground mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-destructive/5 text-destructive flex items-center justify-center mr-3 text-sm font-medium">1</span>
              {t('casos.concerns')}
            </h2>
            <ul className="space-y-4">
              {concerns.map((item, idx) => (
                <li key={idx} className="flex items-start bg-muted/40 p-4 rounded-apple">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-destructive/60 mr-3 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-warning/40 to-transparent rounded-full opacity-50" />
            <h2 className="text-2xl font-light text-foreground mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gold/5 text-gold flex items-center justify-center mr-3 text-sm font-medium">2</span>
              {t('casos.causes')}
            </h2>
            <ul className="space-y-4">
              {causes.map((item, idx) => (
                <li key={idx} className="flex items-start bg-muted/40 p-4 rounded-apple">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gold mr-3 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* approach & Results */}
        <div className="bg-foreground rounded-apple-xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-96 h-96 ${colorClass.bg.replace('bg-', 'bg-')} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-2xl font-light text-primary-foreground mb-6 flex items-center">
                <Activity01Icon className="w-6 h-6 text-primary-foreground/80 mr-3" />
                {t('casos.approach')}
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed text-lg font-light">
                {approach}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light text-primary-foreground mb-6 flex items-center">
                <CheckmarkCircle01Icon className="w-6 h-6 text-primary/80 mr-3" />
                {t('casos.results')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {results}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center pt-8 border-t border-border/10">
            <Link href={config.href}>
              <Button
                size="xl"
                variant="secondary"
                className="font-medium px-8 py-4"
              >
                {t('common.bookNow')}
                <ArrowRight01Icon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
