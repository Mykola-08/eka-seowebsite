'use client';

import Link from 'next/link';
import { ArrowRight, Activity, Brain, Heart, Moon, Shield, Stethoscope, Zap, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import SEOUpdater from '@/components/SEOUpdater';

interface Problem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  color: string;
  href: string;
}

export default function CasosContent() {
  const { t } = useLanguage();

  const additionalProblemsKeys = [
    'casos.additionalProblems.bruxism',
    'casos.additionalProblems.tmj',
    'casos.additionalProblems.sciatica',
    'casos.additionalProblems.shoulderPain',
    'casos.additionalProblems.dizziness',
    'casos.additionalProblems.irritability',
    'casos.additionalProblems.intestinalProblems',
    'casos.additionalProblems.chronicFatigue',
    'casos.additionalProblems.socialAnxiety',
    'casos.additionalProblems.concentrationDifficulty',
    'casos.additionalProblems.headaches',
    'casos.additionalProblems.insomnia',
    'casos.additionalProblems.posture',
    'casos.additionalProblems.contractures',
    'casos.additionalProblems.emotionalBlock',
    'casos.additionalProblems.rsi',
    'casos.additionalProblems.carpalTunnel',
    'casos.additionalProblems.plantarFasciitis',
  ];

  const mainProblems: Problem[] = [
    {
      id: 'back-pain',
      title: t('casos.problems.backPain.title'),
      category: 'fisic',
      description: t('casos.problems.backPain.description'),
      icon: Activity,
      color: 'blue',
      href: '/services/massage'
    },
    {
      id: 'stress-anxiety',
      title: t('casos.problems.stress.title'),
      category: 'emocional',
      description: t('casos.problems.stress.description'),
      icon: Brain,
      color: 'purple',
      href: '/services/kinesiology'
    },
    {
      id: 'digestive-problems',
      title: t('casos.problems.digestive.title'),
      category: 'fisic',
      description: t('casos.problems.digestive.description'),
      icon: Heart,
      color: 'green',
      href: '/services/nutrition'
    },
    {
      id: 'migraines',
      title: t('casos.problems.migraines.title'),
      category: 'fisic',
      description: t('casos.problems.migraines.description'),
      icon: Brain,
      color: 'red',
      href: '/services/massage'
    },
    {
      id: 'low-energy',
      title: t('casos.problems.lowEnergy.title'),
      category: 'energia',
      description: t('casos.problems.lowEnergy.description'),
      icon: Zap,
      color: 'orange',
      href: '/services/kinesiology'
    },
    {
      id: 'hormonal-problems',
      title: t('casos.problems.hormonal.title'),
      category: 'hormonal',
      description: t('casos.problems.hormonal.description'),
      icon: Shield,
      color: 'pink',
      href: '/services/kinesiology'
    },
    {
      id: 'sleep-difficulties',
      title: t('casos.problems.sleep.title'),
      category: 'son',
      description: t('casos.problems.sleep.description'),
      icon: Moon,
      color: 'indigo',
      href: '/services/kinesiology'
    },
    {
      id: 'injury-recovery',
      title: t('casos.problems.recovery.title'),
      category: 'recuperacio',
      description: t('casos.problems.recovery.description'),
      icon: Stethoscope,
      color: 'red',
      href: '/services/massage'
    }
  ];

  const Hero = (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 mb-8 border border-gray-200">
            <Search className="w-4 h-4" />
            <span className="font-medium">{t('casos.hero.badge') || "What brings you here?"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
            {t('casos.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-8 leading-relaxed font-normal max-w-2xl mx-auto">
            {t('casos.subtitle')}
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('casos.description')}
          </p>
        </div>
      </div>
  );

  return (
    <>
      <SEOUpdater 
        titleKey="casos.seo.title"
        descriptionKey="casos.seo.desc"
        keywordsKey="casos.seo.keywords"
      />
      <PageLayout hero={Hero}>
      {/* Main Problems Grid */}
      <div className="bg-[#f5f5f7] py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">{t('casos.frequentCases')}</h2>
            <p className="text-xl text-gray-500">{t('casos.frequentCasesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProblems.map((problem) => {
              const Icon = problem.icon;

              return (
                <Link
                  key={problem.id}
                  href={`/cases/${problem.id}`}
                  className="group relative apple-card p-8 flex flex-col h-full hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 text-gray-900">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">
                    {problem.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    <span>{t('casos.seeDetails')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Problems List - Modernized */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">{t('casos.otherCases')}</h2>
            <p className="text-xl text-gray-500">{t('casos.otherCasesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProblemsKeys.map((key) => (
              <div 
                key={key} 
                className="flex items-center p-4 rounded-2xl bg-gray-50/80 hover:bg-gray-100 transition-colors duration-200 group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500/30 mr-4 group-hover:bg-blue-500 transition-colors" />
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Apple Style */}
      <div className="bg-black py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            {t('casos.ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            {t('casos.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/booking">
                <Button 
                  size="xl" 
                  variant="primary" // Assuming primary works on dark, otherwise custom white
                  className="bg-white text-black hover:bg-gray-100 border-none px-8 py-4 h-auto text-lg rounded-full"
                >
                  {t('casos.bookSession')}
                </Button>
             </Link>
             <Link href="/services">
                <Button 
                  size="xl" 
                  variant="secondary"
                  className="bg-transparent border-gray-600 text-white hover:bg-white/10 hover:border-white px-8 py-4 h-auto text-lg rounded-full"
                >
                  {t('casos.discoverIdeal')}
                </Button>
             </Link>
          </div>
        </div>
      </div>
    </PageLayout>
    </>
  );
}
