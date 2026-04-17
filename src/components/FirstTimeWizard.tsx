'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight01Icon, ArrowLeft01Icon, SmileIcon, FavouriteIcon, ZapIcon, Moon02Icon, Money01Icon, Location01Icon, LaptopProgrammingIcon, BodyPartMuscleIcon, UserIcon, Home01Icon, Brain01Icon, Activity01Icon } from '@/lib/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ProblemState } from '@/lib/funnel-data';

// -------------------------------------------------------------------------------- //
// DATA & TYPES
// -------------------------------------------------------------------------------- //

type Goal = 'stress' | 'pain' | 'posture' | 'sleep' | 'energy' | 'focus' | 'relationships' | 'family' | 'selfworth' | 'money';
type Location = 'barcelona' | 'rubi' | 'online';

interface GoalMeta {
  id: Goal;
  translationKey: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'physical' | 'mental' | 'systemic';
}

const GOALS: GoalMeta[] = [
  { id: 'stress', translationKey: 'onboarding.goals.stress', icon: Brain01Icon, category: 'mental' },
  { id: 'pain', translationKey: 'onboarding.goals.pain', icon: BodyPartMuscleIcon, category: 'physical' },
  { id: 'posture', translationKey: 'onboarding.goals.posture', icon: UserIcon, category: 'physical' },
  { id: 'sleep', translationKey: 'onboarding.goals.sleep', icon: Moon02Icon, category: 'mental' },
  { id: 'energy', translationKey: 'onboarding.goals.energy', icon: ZapIcon, category: 'mental' },
  { id: 'focus', translationKey: 'onboarding.goals.focus', icon: Activity01Icon, category: 'mental' },
  { id: 'relationships', translationKey: 'onboarding.goals.relationships', icon: FavouriteIcon, category: 'systemic' },
  { id: 'family', translationKey: 'onboarding.goals.family', icon: Home01Icon, category: 'systemic' },
  { id: 'selfworth', translationKey: 'onboarding.goals.selfworth', icon: SmileIcon, category: 'mental' },
  { id: 'money', translationKey: 'onboarding.goals.money', icon: Money01Icon, category: 'systemic' },
];

const LOCATIONS: { id: Location; labelKey: string; icon: React.ComponentType<{ className?: string }>; available: boolean }[] = [
  { id: 'barcelona', labelKey: 'form.location.bcn', icon: Location01Icon, available: true },
  { id: 'rubi', labelKey: 'form.location.rubi', icon: Location01Icon, available: true },
  { id: 'online', labelKey: 'form.location.online', icon: LaptopProgrammingIcon, available: true },
];

// -------------------------------------------------------------------------------- //
// RECOMMENDATION LOGIC
// -------------------------------------------------------------------------------- //

interface RecommendedService {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  duration: string;
  price: string;
  tagsKeys: string[];
}

function getRecommendation(selectedGoals: Goal[], location: Location | null): RecommendedService {
  const goalMetas = selectedGoals.map(gId => GOALS.find(g => g.id === gId)!);
  const physicalCount = goalMetas.filter(g => g.category === 'physical').length;
  const systemicCount = goalMetas.filter(g => g.category === 'systemic').length;
  const mentalCount = goalMetas.filter(g => g.category === 'mental').length;

  if (location === 'online') {
    if (systemicCount > 0) {
      return {
        id: 'constelaciones',
        titleKey: 'services.constelaciones.title',
        descKey: 'services.constelaciones.desc',
        image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
        duration: '90-120 min',
        price: '110€',
        tagsKeys: ['home.services.badges.systemic', 'home.services.badges.online']
      };
    }
    return {
      id: 'online_session',
      titleKey: 'services.kinesiologia.online',
      descKey: 'services.kinesiologia.desc',
      image: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg',
      duration: '60 min',
      price: '50€',
      tagsKeys: ['home.services.badges.online', 'home.services.badges.development']
    };
  }

  // In-person specific recommendations
  if (physicalCount > 0 && physicalCount >= mentalCount && physicalCount >= systemicCount) {
    if (selectedGoals.includes('pain')) {
      return {
        id: 'quiromasaje',
        titleKey: 'services.masaje.title',
        descKey: 'services.masaje.desc',
        image: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg',
        duration: '60 min',
        price: '50€',
        tagsKeys: ['home.services.badges.physical', 'home.services.badges.inPerson']
      };
    }
    return {
      id: 'kinesiologia',
      titleKey: 'services.kinesiologia.title',
      descKey: 'services.kinesiologia.desc',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
      duration: '60-90 min',
      price: '60€',
      tagsKeys: ['home.services.badges.physical', 'home.services.badges.emotional']
    };
  }

  if (systemicCount > 0) {
    return {
      id: 'constelaciones',
      titleKey: 'services.constelaciones.title',
      descKey: 'services.constelaciones.desc',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
      duration: '90-120 min',
      price: '110€',
      tagsKeys: ['home.services.badges.systemic', 'home.services.badges.relationship']
    };
  }

  // Default mental/emotional
  if (selectedGoals.includes('stress') || selectedGoals.includes('sleep')) {
    return {
      id: 'barras_access',
      titleKey: 'services.barras.title',
      descKey: 'services.barras.desc',
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
      duration: '60 min',
      price: '55€',
      tagsKeys: ['home.services.badges.mind', 'home.services.badges.energy']
    };
  }

  // Fallback
  return {
    id: 'kinesiologia',
    titleKey: 'services.kinesiologia.title',
    descKey: 'services.kinesiologia.desc',
    image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
    duration: '60-90 min',
    price: '60€',
    tagsKeys: ['home.services.badges.physical', 'home.services.badges.emotional']
  };
}

function getProblemStateFromGoals(goals: Goal[]): ProblemState {
  if (goals.includes('pain')) return 'back_pain';
  if (goals.includes('stress')) return 'stress_anxiety';
  if (goals.includes('sleep')) return 'sleep';
  if (goals.includes('posture')) return 'posture_office';
  if (goals.includes('energy')) return 'fatigue';
  if (goals.includes('focus')) return 'headaches';
  if (goals.some(g => ['relationships', 'family', 'selfworth', 'money'].includes(g))) return 'emotional_block';
  return 'back_pain';
}

// -------------------------------------------------------------------------------- //
// COMPONENT
// -------------------------------------------------------------------------------- //

interface FirstTimeWizardProps {
  onComplete?: (problem: ProblemState) => void;
}

export default function FirstTimeWizard({ onComplete }: FirstTimeWizardProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const toggleGoal = (goal: Goal) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedGoals.length > 0) setStep(2);
    if (step === 2 && selectedLocation) {
      setStep(3);
      if (onComplete) {
        onComplete(getProblemStateFromGoals(selectedGoals));
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleStartOver = () => {
    setStep(1);
    setSelectedGoals([]);
    setSelectedLocation(null);
  };

  const wizardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.05, y: -10 }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-none shadow-none md:border md:shadow-md md:rounded-apple overflow-hidden bg-card relative min-h-125 flex flex-col md:p-10 z-10 transition-all duration-300">
      
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8 px-4 md:px-0 pt-4 md:pt-0">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={cn(
              "w-12 h-1.5 rounded-full transition-colors duration-300",
              step >= s ? "bg-primary" : "bg-muted"
            )} />
          ))}
        </div>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
           {t('form.step')} {step} / 3
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative px-4 md:px-0">
        <AnimatePresence mode="wait">
          {/* STEP 1: GOALS */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={wizardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center mb-6">
                <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">{t('form.badge')}</Badge>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
                  {t('form.step1.title')}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t('form.step1.desc')}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pb-8">
                {GOALS.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.id);
                  const Icon = goal.icon;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 text-center gap-3 h-32 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-sm"
                          : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className={cn("w-8 h-8", isSelected ? "text-primary" : "text-muted-foreground")} />
                      <span className="text-sm font-medium leading-tight">
                        {t(goal.translationKey)}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end mt-auto pt-4 pb-8 md:pb-0 border-t border-transparent md:border-none">
                <Button
                  onClick={handleNext}
                  disabled={selectedGoals.length === 0}
                  className="gap-2 rounded-full px-8 w-full md:w-auto"
                  size="lg"
                >
                  {t('form.next')} <ArrowRight01Icon className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: LOCATION */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={wizardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 h-full"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
                   {t('form.step2.title')}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                   {t('form.step2.desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
                {LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation === loc.id;
                  const Icon = loc.icon;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={cn(
                        "flex flex-col items-center p-8 rounded-xl border transition-all duration-200 gap-4 text-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-sm"
                          : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-colors",
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-medium mb-1">
                          {t(loc.labelKey)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {t(loc.labelKey + '.desc')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col-reverse md:flex-row justify-between mt-auto pt-4 pb-8 md:pb-0 gap-4 md:gap-0">
                <Button variant="outline" onClick={handleBack} className="gap-2 rounded-full w-full md:w-auto" size="lg">
                  <ArrowLeft01Icon className="w-4 h-4" /> {t('form.previous')}
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedLocation}
                  className="gap-2 rounded-full px-8 w-full md:w-auto"
                  size="lg"
                >
                  {t('form.seeRecommendation')} <ArrowRight01Icon className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: RECOMMENDATION */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={wizardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 items-center"
            >
              <div className="text-center max-w-2xl mx-auto mb-6">
                <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">{t('form.recommendation.title')}</Badge>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4 leading-tight pb-2">
                   {t('form.recommendation.subtitle')}
                </h2>
                <p className="text-lg text-muted-foreground">
                   {t('form.recommendation.desc')}
                </p>
              </div>

              <div className="w-full max-w-md pb-8">
                {(() => {
                  const recommendation = getRecommendation(selectedGoals, selectedLocation);
                  return (
                    <Card className="overflow-hidden border border-border shadow-md transition-all flex flex-col group hover:bg-accent/5">
                      <div className="aspect-4/3 relative overflow-hidden">
                        <Image
                          src={recommendation.image}
                          alt={t(recommendation.titleKey) || "Recommended Service"}
                          fill
                          sizes="(max-width: 768px) 100vw, 28rem"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-background/20 bg-linear-to-t from-background/95 to-transparent flex flex-col justify-end p-6 text-foreground">
                          <h3 className="text-2xl font-serif font-medium mb-1 drop-shadow-sm">
                            {t(recommendation.titleKey) || recommendation.titleKey}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1 gap-4 bg-card">
                        <div className="flex flex-wrap gap-2">
                          {recommendation.tagsKeys.map((tagKey, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-muted text-muted-foreground font-normal">
                              {t(tagKey)}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {t(recommendation.descKey) || recommendation.descKey}
                        </p>

                        <div className="flex items-center justify-between text-sm font-medium pt-4 border-t border-border mt-2">
                          <span className="text-muted-foreground">{recommendation.duration}</span>
                          <span className="text-primary font-semibold">{recommendation.price}</span>
                        </div>

                        <Button asChild size="lg" className="w-full mt-2 group/btn rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link href={`/booking?service=${recommendation.id}`}>
                            {t('form.recommendation.bookBtn')}
                            <ArrowRight01Icon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  );
                })()}
              </div>

              <div className="mt-2 flex gap-4 pb-8 md:pb-0">
                 <Button variant="ghost" onClick={handleStartOver} className="text-muted-foreground hover:text-foreground rounded-full">
                  {t('form.startOver')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </Card>
  );
}