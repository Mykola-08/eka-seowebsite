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

const LOCATIONS: { id: Location; labelKey?: string, fallback: string; icon: React.ComponentType<{ className?: string }>; available: boolean }[] = [
  { id: 'barcelona', fallback: 'Barcelona (Sant Gervasi)', icon: Location01Icon, available: true },
  { id: 'rubi', fallback: 'Rubí (Bosc Tancat)', icon: Location01Icon, available: true },
  { id: 'online', fallback: 'Online / Remote', icon: LaptopProgrammingIcon, available: true },
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
      titleKey: 'services.kinesiologia.online', // Fallback mapping, ideally have dedicated online coaching key
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

// -------------------------------------------------------------------------------- //
// COMPONENT
// -------------------------------------------------------------------------------- //

export default function FirstTimeWizard() {
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
    if (step === 2 && selectedLocation) setStep(3);
  };
  
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const wizardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-125 flex flex-col relative">
      
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              step >= s ? "bg-primary" : "bg-muted"
            )} />
          ))}
        </div>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
           Step {step} of 3
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden px-1">
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
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
                  {t('personalized.booking.step1') || "What brings you here today?"}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t('personalized.booking.step1Desc') || "Select all the areas you would like to focus on or improve. This helps me suggest the perfect starting point for your journey."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {GOALS.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.id);
                  const Icon = goal.icon;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-[2rem] border border-border/20 transition-all duration-200 text-center gap-3 h-32 outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isSelected 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-muted"
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

              <div className="flex justify-end mt-8">
                <Button 
                  onClick={handleNext} 
                  disabled={selectedGoals.length === 0}
                  className="gap-2"
                  size="lg"
                >
                  Continue <ArrowRight01Icon className="w-4 h-4" />
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
              className="flex flex-col gap-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
                   Where would you prefer to meet?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                   Select the setting that is most convenient for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation === loc.id;
                  const Icon = loc.icon;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={cn(
                        "flex flex-col items-center p-8 rounded-[2rem] border border-border/20 transition-all duration-200 gap-4 text-center outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isSelected 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-border bg-card text-card-foreground hover:border-primary/50 hover:bg-muted"
                      )}
                    >
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-2",
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-lg font-medium">
                        {loc.labelKey ? t(loc.labelKey) : loc.fallback}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handleBack} className="gap-2">
                  <ArrowLeft01Icon className="w-4 h-4" /> Back
                </Button>
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedLocation}
                  className="gap-2"
                  size="lg"
                >
                  See Recommendation <ArrowRight01Icon className="w-4 h-4" />
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
                <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">Your Personalized Recommendation</Badge>
                <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4 leading-tight">
                   The Perfect First Step For You
                </h2>
                <p className="text-lg text-muted-foreground">
                   Based on your focus areas and preferred setting, we recommend starting here.
                </p>
              </div>

              <div className="w-full max-w-md">
                {(() => {
                  const recommendation = getRecommendation(selectedGoals, selectedLocation);
                  return (
                    <Card className="overflow-hidden border-border/60 transition-all flex flex-col group hover:bg-surface-muted">
                      <div className="aspect-4/3 relative overflow-hidden">
                        <Image
                          src={recommendation.image}
                          alt={t(recommendation.titleKey) || "Recommended Service"}
                          fill
                          sizes="(max-width: 768px) 100vw, 28rem"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 text-primary-foreground">
                          <h3 className="text-2xl font-serif font-medium mb-1">
                            {t(recommendation.titleKey) || recommendation.titleKey}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1 gap-4">
                        <div className="flex flex-wrap gap-2">
                          {recommendation.tagsKeys.map((tagKey, idx) => (
                            <Badge key={idx} variant="outline" className="bg-background/50 backdrop-blur-xs">
                              {t(tagKey)}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {t(recommendation.descKey) || recommendation.descKey}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm font-medium mt-auto pt-4 border-t border-border">
                          <span>{recommendation.duration}</span>
                          <span className="text-primary">{recommendation.price}</span>
                        </div>

                        <Button asChild size="lg" className="w-full mt-2 group/btn">
                          <Link href={`/booking?service=${recommendation.id}`}>
                            Book First Session
                            <ArrowRight01Icon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  );
                })()}
              </div>

              <div className="mt-8 flex gap-4">
                 <Button variant="ghost" onClick={() => setStep(1)} className="text-muted-foreground">
                  Start Over
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
