'use client';

import Link from 'next/link';
import { ArrowRight, Activity, Brain, Heart, Zap, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
      icon: Activity,
      color: 'blue',
      href: '/cases/back-pain'
    },
    {
      id: 'stress-anxiety',
      titleKey: 'casos.problems.stress.title',
      descriptionKey: 'casos.problems.stress.description',
      icon: Brain,
      color: 'purple',
      href: '/cases/stress-anxiety'
    },
    {
      id: 'digestive-problems',
      titleKey: 'casos.problems.digestive.title',
      descriptionKey: 'casos.problems.digestive.description',
      icon: Heart,
      color: 'green',
      href: '/cases/digestive-problems'
    },
    {
      id: 'migraines',
      titleKey: 'casos.problems.migraines.title',
      descriptionKey: 'casos.problems.migraines.description',
      icon: Brain,
      color: 'red',
      href: '/cases/migraines'
    },
    {
      id: 'low-energy',
      titleKey: 'casos.problems.lowEnergy.title',
      descriptionKey: 'casos.problems.lowEnergy.description',
      icon: Zap,
      color: 'orange',
      href: '/cases/low-energy'
    },
    {
      id: 'sleep-difficulties',
      titleKey: 'casos.problems.sleep.title',
      descriptionKey: 'casos.problems.sleep.description',
      icon: Moon,
      color: 'indigo',
      href: '/cases/sleep-difficulties'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            {t('casos.section.badge')}
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            {t('casos.section.title')}
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t('casos.section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {featuredProblems.map((problem, index) => {
            const ProblemIcon = problem.icon;
            return (
              <AnimateIn key={problem.id} delay={index * 0.05}>
                <Link
                  href={problem.href}
                  className="group block h-full bg-gray-50/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-xl active:scale-[0.98] hover:scale-[1.01]"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-900 flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors duration-300">
                    <ProblemIcon className="w-6 h-6 stroke-[1.5px]" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(problem.titleKey)}
                  </h3>

                  <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3 font-light text-base">
                    {t(problem.descriptionKey)}
                  </p>

                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    {t('casos.section.readMore')}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        {/* Other Cases List */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 text-center">
          <h3 className="text-xl sm:text-2xl font-light text-eka-dark mb-6 sm:mb-8">{t('casos.other.title')}</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              'casos.other.money',
              'casos.other.relationships',
              'casos.other.selfworth',
              'casos.other.family',
              'casos.other.work',
              'casos.other.trauma'
            ].map((key) => (
              <span key={key} className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-full text-sm sm:text-base text-gray-600 shadow-sm hover:shadow-md hover:border-primary-200 hover:text-primary-600 transition-all duration-200 ease-out-quart cursor-default">
                {t(key)}
              </span>
            ))}
          </div>
        </div>

        {/* View All Cases */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/cases"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-accent hover:bg-accent-dark text-eka-dark font-semibold px-8 py-4 rounded-full transition-all duration-200 ease-out-quart shadow-lg hover:shadow-xl active:scale-[0.98] hover:scale-[1.02]"
            >
              {t('casos.section.viewAll')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-200 ease-out-quart active:scale-[0.98]"
            >
              {t('casos.section.findYourCase')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
