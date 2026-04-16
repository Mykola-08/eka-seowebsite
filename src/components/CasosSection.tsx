'use client';

import type React from 'react';
import Link from 'next/link';
import { ArrowRight01Icon, Activity01Icon, Brain01Icon, FavouriteIcon, FlashIcon, Moon01Icon } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import AnimateIn from './AnimateIn';
interface Problem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
}

export default function CasosSection() {
  const { t } = useLanguage();

  const featuredProblems: Problem[] = [
    {
      id: 'back-pain',
      titleKey: 'casos.problems.backPain.title',
      descriptionKey: 'casos.problems.backPain.description',
      icon: Activity01Icon,
      color: 'blue',
      href: '/cases/back-pain'
    },
    {
      id: 'stress-anxiety',
      titleKey: 'casos.problems.stress.title',
      descriptionKey: 'casos.problems.stress.description',
      icon: Brain01Icon,
      color: 'purple',
      href: '/cases/stress-anxiety'
    },
    {
      id: 'digestive-problems',
      titleKey: 'casos.problems.digestive.title',
      descriptionKey: 'casos.problems.digestive.description',
      icon: FavouriteIcon,
      color: 'green',
      href: '/cases/digestive-problems'
    },
    {
      id: 'migraines',
      titleKey: 'casos.problems.migraines.title',
      descriptionKey: 'casos.problems.migraines.description',
      icon: Brain01Icon,
      color: 'red',
      href: '/cases/migraines'
    },
    {
      id: 'low-energy',
      titleKey: 'casos.problems.lowEnergy.title',
      descriptionKey: 'casos.problems.lowEnergy.description',
      icon: FlashIcon,
      color: 'orange',
      href: '/cases/low-energy'
    },
    {
      id: 'sleep-difficulties',
      titleKey: 'casos.problems.sleep.title',
      descriptionKey: 'casos.problems.sleep.description',
      icon: Moon01Icon,
      color: 'indigo',
      href: '/cases/sleep-difficulties'
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-card text-foreground/80 text-xs font-medium uppercase tracking-wider mb-6">
            {t('casos.section.badge')}
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
            {t('casos.section.title')}
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            {t('casos.section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProblems.map((problem, index) => {
            
            return (
              <AnimateIn key={problem.id} delay={index * 0.05}>
                <Link
                  href={problem.href}
                  className="group block h-full apple-card p-8 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-muted/40 text-foreground flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/5 group-hover:text-primary">
                    <problem.icon className="w-6 h-6 stroke-[1.5px]" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 apple-title">
                    {t(problem.titleKey)}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 font-normal text-base">
                    {t(problem.descriptionKey)}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm mt-auto">
                    {t('casos.section.readMore')}
                    <ArrowRight01Icon className="w-4 h-4 ml-1 transition-colors duration-200" />
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Other Cases List */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-medium text-foreground mb-8">{t('casos.other.title')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'casos.other.money',
              'casos.other.relationships',
              'casos.other.selfworth',
              'casos.other.family',
              'casos.other.work',
              'casos.other.trauma'
            ].map((key) => (
              <span key={key} className="px-5 py-2.5 bg-card rounded-full text-foreground/80 text-sm font-medium hover:border-0 hover:text-primary transition-colors duration-200 cursor-default">
                {t(key)}
              </span>
            ))}
          </div>
        </div>

        {/* View All Cases */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/cases">
                {t('casos.section.viewAll')}
                <ArrowRight01Icon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/first-time">
                {t('casos.section.findYourCase')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
