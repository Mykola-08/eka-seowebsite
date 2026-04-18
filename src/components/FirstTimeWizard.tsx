'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight01Icon, 
  ArrowLeft01Icon, 
  SmileIcon, 
  FavouriteIcon, 
  ZapIcon, 
  Moon02Icon, 
  Money01Icon, 
  Location01Icon, 
  LaptopProgrammingIcon, 
  BodyPartMuscleIcon, 
  UserIcon, 
  Home01Icon, 
  Brain01Icon, 
  Activity01Icon,
  Clock01Icon,
  CheckCircle,
  SparklesIcon,
  FlashIcon,
  Message01Icon,
  StarIcon,
  HelpCircleIcon
} from '@/lib/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ProblemState } from '@/lib/funnel-data';

// -------------------------------------------------------------------------------- //
// TYPES & DATA
// -------------------------------------------------------------------------------- //

type Step = 'intro' | 'profile' | 'goals' | 'intensity' | 'duration' | 'energy' | 'mood' | 'location' | 'processing' | 'result';

type Profile = 'office' | 'athlete' | 'artist' | 'musician' | 'student' | 'parent' | 'other';
type Goal = 'stress' | 'pain' | 'posture' | 'sleep' | 'energy' | 'focus' | 'relationships' | 'family' | 'selfworth' | 'money';
type Intensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Duration = 'days' | 'weeks' | 'months' | 'years';
type Energy = 'low' | 'medium' | 'high';
type Mood = 'stressed' | 'sad' | 'frustrated' | 'calm';
type Location = 'barcelona' | 'rubi' | 'online';

interface AssessmentData {
  profile: Profile | null;
  goals: Goal[];
  intensity: Intensity;
  duration: Duration | null;
  energy: Energy | null;
  mood: Mood | null;
  location: Location | null;
}

const PROFILES: { id: Profile; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'office', labelKey: 'onboarding.userTypes.office', icon: LaptopProgrammingIcon },
  { id: 'athlete', labelKey: 'onboarding.userTypes.athlete', icon: Activity01Icon },
  { id: 'artist', labelKey: 'onboarding.userTypes.artist', icon: SmileIcon },
  { id: 'musician', labelKey: 'onboarding.userTypes.musician', icon: Activity01Icon },
  { id: 'student', labelKey: 'onboarding.userTypes.student', icon: Brain01Icon },
  { id: 'parent', labelKey: 'onboarding.userTypes.parent', icon: Home01Icon },
  { id: 'other', labelKey: 'onboarding.userTypes.other', icon: UserIcon },
];

const GOALS: { id: Goal; labelKey: string; icon: React.ComponentType<{ className?: string }>; category: 'physical' | 'mental' | 'systemic' }[] = [
  { id: 'stress', labelKey: 'onboarding.goals.stress', icon: Brain01Icon, category: 'mental' },
  { id: 'pain', labelKey: 'onboarding.goals.pain', icon: BodyPartMuscleIcon, category: 'physical' },
  { id: 'posture', labelKey: 'onboarding.goals.posture', icon: UserIcon, category: 'physical' },
  { id: 'sleep', labelKey: 'onboarding.goals.sleep', icon: Moon02Icon, category: 'mental' },
  { id: 'energy', labelKey: 'onboarding.goals.energy', icon: ZapIcon, category: 'mental' },
  { id: 'focus', labelKey: 'onboarding.goals.focus', icon: Activity01Icon, category: 'mental' },
  { id: 'relationships', labelKey: 'onboarding.goals.relationships', icon: FavouriteIcon, category: 'systemic' },
  { id: 'family', labelKey: 'onboarding.goals.family', icon: Home01Icon, category: 'systemic' },
  { id: 'selfworth', labelKey: 'onboarding.goals.selfworth', icon: SmileIcon, category: 'mental' },
  { id: 'money', labelKey: 'onboarding.goals.money', icon: Money01Icon, category: 'systemic' },
];

const DURATIONS: { id: Duration; labelKey: string }[] = [
  { id: 'days', labelKey: 'assessment.duration.days' },
  { id: 'weeks', labelKey: 'assessment.duration.weeks' },
  { id: 'months', labelKey: 'assessment.duration.months' },
  { id: 'years', labelKey: 'assessment.duration.years' },
];

const ENERGIES: { id: Energy; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'low', labelKey: 'assessment.energy.low', icon: Moon02Icon },
  { id: 'medium', labelKey: 'assessment.energy.medium', icon: Activity01Icon },
  { id: 'high', labelKey: 'assessment.energy.high', icon: ZapIcon },
];

const MOODS: { id: Mood; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'stressed', labelKey: 'assessment.mood.stressed', icon: FlashIcon },
  { id: 'sad', labelKey: 'assessment.mood.sad', icon: Moon02Icon },
  { id: 'frustrated', labelKey: 'assessment.mood.frustrated', icon: FlashIcon },
  { id: 'calm', labelKey: 'assessment.mood.calm', icon: SmileIcon },
];

const LOCATIONS: { id: Location; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'barcelona', labelKey: 'form.location.barcelona', icon: Location01Icon },
  { id: 'rubi', labelKey: 'form.location.rubi', icon: Location01Icon },
  { id: 'online', labelKey: 'form.location.online', icon: LaptopProgrammingIcon },
];

// -------------------------------------------------------------------------------- //
// RECOMMENDATION LOGIC
// -------------------------------------------------------------------------------- //

interface FinalRecommendation {
  serviceId: string;
  titleKey: string;
  descKey: string;
  image: string;
  duration: string;
  price: string;
  href: string;
  whyKeys: string[];
  tags: string[];
  gradient: string;
}

function calculateRecommendation(data: AssessmentData): FinalRecommendation {
  const isChronic = data.duration === 'months' || data.duration === 'years';
  const highIntensity = data.intensity >= 7;
  const systemicFocus = data.goals.some(g => GOALS.find(goal => goal.id === g)?.category === 'systemic');
  const lowEnergy = data.energy === 'low';

  // 1. VIP/360 REVISION (Highest level)
  if (isChronic && highIntensity) {
    return {
      serviceId: 'revision-360',
      titleKey: 'services.revision360.title',
      descKey: 'services.revision360.description',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4-9 sessions',
      price: 'From 280€',
      href: '/360-revision',
      whyKeys: ['assessment.why.chronic', 'assessment.why.intensity'],
      tags: ['Premium', 'Comprehensive'],
      gradient: 'from-blue-600/20 to-indigo-600/20'
    };
  }

  // 2. FAMILY CONSTELLATIONS (Systemic)
  if (systemicFocus || data.mood === 'sad') {
    return {
      serviceId: 'constelaciones',
      titleKey: 'services.constelaciones.title',
      descKey: 'services.constelaciones.description',
      image: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '90 min',
      price: '90€',
      href: '/services/constelaciones',
      whyKeys: ['assessment.why.systemic', 'assessment.why.emotional'],
      tags: ['Systemic', 'Deep'],
      gradient: 'from-purple-600/20 to-pink-600/20'
    };
  }

  // 3. NUTRITION (Bioenergetic)
  if (lowEnergy) {
    return {
      serviceId: 'nutrition',
      titleKey: 'services.nutrition.title',
      descKey: 'services.nutrition.description',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '60 min',
      price: '70€',
      href: '/services/nutrition',
      whyKeys: ['assessment.why.energy', 'assessment.why.biochemical'],
      tags: ['Metabolic', 'Vitality'],
      gradient: 'from-green-600/20 to-emerald-600/20'
    };
  }

  // 4. KINESIOLOGY (Balanced/Default)
  if (data.profile === 'office' || data.profile === 'student' || data.mood === 'stressed') {
    return {
      serviceId: 'kinesiology',
      titleKey: 'services.kinesiology.title',
      descKey: 'services.kinesiology.description',
      image: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '60-90 min',
      price: '70-90€',
      href: '/services/kinesiology',
      whyKeys: ['assessment.why.balanced', 'assessment.why.stress'],
      tags: ['Holistic', 'Precision'],
      gradient: 'from-primary/20 to-primary/5'
    };
  }

  // 5. MASSAGE (Physical Focus)
  return {
    serviceId: 'massage',
    titleKey: 'services.massage.title',
    descKey: 'services.massage.description',
    image: 'https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '60-90 min',
    price: '70-90€',
    href: '/services/massage',
    whyKeys: ['assessment.why.physical', 'assessment.why.tension'],
    tags: ['Restorative', 'Manual'],
    gradient: 'from-orange-600/20 to-amber-600/20'
  };
}

// -------------------------------------------------------------------------------- //
// COMPONENT
// -------------------------------------------------------------------------------- //

interface FirstTimeWizardProps {
  onComplete?: (problem: ProblemState) => void;
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

export default function FirstTimeWizard({ onComplete }: FirstTimeWizardProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState<Step>('intro');
  const [data, setData] = useState<AssessmentData>({
    profile: null,
    goals: [],
    intensity: 5,
    duration: null,
    energy: null,
    mood: null,
    location: null,
  });

  const [processingState, setProcessingState] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance for processing
  useEffect(() => {
    if (step === 'processing') {
      const timer = setInterval(() => {
        setProcessingState(prev => {
          if (prev >= 3) {
            clearInterval(timer);
            setStep('result');
            // Trigger completion callback when analysis is done
            if (onComplete) {
              onComplete(getProblemStateFromGoals(data.goals));
            }
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
      return () => clearInterval(timer);
    }
  }, [step, onComplete, data.goals]);

  const toggleGoal = (goal: Goal) => {
    setData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter(g => g !== goal) : [...prev.goals, goal]
    }));
  };

  const stepsOrder: Step[] = ['intro', 'profile', 'goals', 'intensity', 'duration', 'energy', 'mood', 'location'];
  const currentIndex = stepsOrder.indexOf(step);
  // stepsOrder.length - 2 because 'processing' and 'result' are not part of the sequential progress
  const totalSteps = stepsOrder.length; 

  const nextStep = () => {
    if (currentIndex < stepsOrder.length - 1) {
      setStep(stepsOrder[currentIndex + 1]);
    } else {
      setStep('processing');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setStep(stepsOrder[currentIndex - 1]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wizardVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return (
          <motion.div key="intro" {...wizardVariants} className="max-w-4xl mx-auto space-y-12 py-12">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="outline" className="rounded-full px-6 py-1.5 uppercase tracking-[0.3em] text-[10px] font-black bg-primary/5 text-primary border-primary/10">
                   {t('assessment.badge')}
                </Badge>
              </motion.div>
              <h1 className="apple-headline text-5xl md:text-8xl leading-[0.95] mb-8 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t('assessment.intro.title')}
              </h1>
              <p className="apple-subtitle max-w-2xl mx-auto text-xl md:text-2xl opacity-80">
                {t('assessment.intro.subtitle')}
              </p>
            </div>
            
            <div className="apple-card p-10 md:p-16 bg-muted/20 border-border/40 text-center space-y-10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto relative z-10">
                 {t('assessment.intro.desc')}
               </p>
               
               <div className="flex flex-col items-center gap-6 relative z-10">
                 <Button size="xl" className="rounded-full px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/20 group/btn relative overflow-hidden" onClick={nextStep}>
                   <span className="relative z-10 flex items-center gap-2">
                     {t('assessment.intro.start')}
                     <ArrowRight01Icon className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                   <motion.div 
                     className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary"
                     whileHover={{ scale: 1.05 }}
                   />
                 </Button>
                 <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                   <Clock01Icon className="w-4 h-4" />
                   {t('assessment.intro.duration')}
                 </div>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-10">
               {[
                 { icon: SparklesIcon, title: "Personalized", desc: "Results tailored to your specific physical and emotional state." },
                 { icon: Activity01Icon, title: "Data-Driven", desc: "Based on 15+ years of clinical experience and somatic research." },
                 { icon: CheckCircle, title: "Actionable", desc: "Get a clear plan and direct pre-filled booking options." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 + (i * 0.1) }}
                   className="text-center space-y-4"
                 >
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                     <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold text-lg">{item.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        );

      case 'profile':
        return (
          <motion.div key="profile" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('form.step1.question')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('discovery.step1.subtitle')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PROFILES.map((p, i) => (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setData(prev => ({ ...prev, profile: p.id })); nextStep(); }}
                  className={cn(
                    "apple-card p-10 flex flex-col items-center gap-6 group transition-all duration-500 relative overflow-hidden",
                    data.profile === p.id ? "bg-primary/5 border-primary ring-4 ring-primary/10" : "hover:bg-muted/40 hover:scale-[1.02]"
                  )}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-700",
                    data.profile === p.id ? "bg-primary text-white scale-110 shadow-2xl shadow-primary/40" : "bg-muted text-muted-foreground group-hover:bg-background group-hover:rotate-3"
                  )}>
                    <p.icon className="w-10 h-10" />
                  </div>
                  <span className="font-black text-center text-base uppercase tracking-wider">{t(p.labelKey)}</span>
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center pt-10">
               <Button variant="ghost" onClick={prevStep} className="rounded-full text-muted-foreground hover:text-foreground">
                 <ArrowLeft01Icon className="mr-2 w-5 h-5" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'goals':
        return (
          <motion.div key="goals" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('onboarding.questions.goals.title')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('form.step2.question')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {GOALS.map((g, i) => (
                <motion.button
                  key={g.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => toggleGoal(g.id)}
                  className={cn(
                    "apple-card p-8 flex flex-col items-center gap-5 relative transition-all duration-500",
                    data.goals.includes(g.id) ? "bg-primary/5 border-primary ring-2 ring-primary/10 scale-[1.05]" : "hover:bg-muted/40 hover:translate-y-[-4px]"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                    data.goals.includes(g.id) ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  )}>
                    <g.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-center leading-tight uppercase tracking-tight">{t(g.labelKey)}</span>
                  {data.goals.includes(g.id) && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4">
                      <div className="bg-primary text-white rounded-full p-1 shadow-lg">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center gap-6 pt-10">
               <Button variant="ghost" size="xl" className="rounded-full px-10" onClick={prevStep}>
                 <ArrowLeft01Icon className="mr-2 w-6 h-6" /> {t('common.back')}
               </Button>
               <Button size="xl" className="rounded-full px-16 h-18 text-lg font-bold shadow-xl shadow-primary/10" disabled={data.goals.length === 0} onClick={nextStep}>
                 {t('common.next')} <ArrowRight01Icon className="ml-2 w-6 h-6" />
               </Button>
            </div>
          </motion.div>
        );

      case 'intensity':
        return (
          <motion.div key="intensity" {...wizardVariants} className="space-y-16 max-w-3xl mx-auto py-10">
            <div className="text-center space-y-6">
              <h2 className="apple-title text-4xl md:text-7xl tracking-tighter">{t('assessment.step.intensity.title')}</h2>
              <p className="apple-subtitle text-xl opacity-60 max-w-xl mx-auto">{t('assessment.step.intensity.desc')}</p>
            </div>
            <div className="space-y-12 bg-muted/20 p-12 rounded-[40px] border border-border/40">
               <div className="flex justify-between items-center px-4">
                  <div className="text-center">
                    <span className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">{t('assessment.intensity.mild')}</span>
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center font-black text-xl">1</div>
                  </div>
                  <motion.div 
                    key={data.intensity}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <div className={cn(
                      "w-32 h-32 rounded-[40px] flex items-center justify-center font-black text-6xl shadow-2xl transition-colors duration-500",
                      data.intensity > 7 ? "bg-destructive text-white shadow-destructive/20" : "bg-primary text-white shadow-primary/20"
                    )}>
                      {data.intensity}
                    </div>
                  </motion.div>
                  <div className="text-center">
                    <span className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">{t('assessment.intensity.severe')}</span>
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center font-black text-xl">10</div>
                  </div>
               </div>
               <div className="relative px-2">
                 <input 
                   type="range" 
                   min="1" 
                   max="10" 
                   step="1" 
                   value={data.intensity}
                   onChange={(e) => setData(prev => ({ ...prev, intensity: parseInt(e.target.value) as Intensity }))}
                   className="w-full h-4 bg-background rounded-full appearance-none cursor-pointer accent-primary border border-border/40"
                 />
                 <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-primary/20 -z-10 rounded-full" />
               </div>
            </div>
            <div className="flex justify-center gap-6">
               <Button variant="ghost" size="xl" className="rounded-full px-10" onClick={prevStep}>
                 <ArrowLeft01Icon className="mr-2 w-6 h-6" /> {t('common.back')}
               </Button>
               <Button size="xl" className="rounded-full px-20 h-18 text-lg font-bold" onClick={nextStep}>
                 {t('common.next')} <ArrowRight01Icon className="ml-2 w-6 h-6" />
               </Button>
            </div>
          </motion.div>
        );

      case 'duration':
        return (
          <motion.div key="duration" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('assessment.step.duration.title')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('assessment.step.duration.desc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {DURATIONS.map((d, i) => (
                 <motion.button
                   key={d.id}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   onClick={() => { setData(prev => ({ ...prev, duration: d.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-12 text-2xl font-black uppercase tracking-tight transition-all duration-500 hover:scale-[1.03]",
                     data.duration === d.id ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-[1.05] z-10" : "hover:bg-muted/40 bg-muted/10 border-border/20"
                   )}
                 >
                   {t(d.labelKey)}
                 </motion.button>
               ))}
            </div>
            <div className="flex justify-center pt-10">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-5 h-5" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'energy':
        return (
          <motion.div key="energy" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('assessment.step.energy.title')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('assessment.step.energy.desc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               {ENERGIES.map((e, i) => (
                 <motion.button
                   key={e.id}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   onClick={() => { setData(prev => ({ ...prev, energy: e.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-12 flex flex-col items-center gap-8 group transition-all duration-700",
                     data.energy === e.id ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10 scale-[1.05]" : "hover:bg-muted/40 border-border/20"
                   )}
                 >
                    <div className={cn(
                      "w-24 h-24 rounded-[40px] flex items-center justify-center transition-all duration-700",
                      data.energy === e.id ? "bg-primary text-white scale-110 shadow-xl shadow-primary/30 rotate-6" : "bg-muted text-muted-foreground group-hover:bg-background group-hover:-rotate-6"
                    )}>
                      <e.icon className="w-12 h-12" />
                    </div>
                    <span className="font-black text-xl text-center leading-tight uppercase tracking-tight">{t(e.labelKey)}</span>
                 </motion.button>
               ))}
            </div>
            <div className="flex justify-center pt-10">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-5 h-5" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'mood':
        return (
          <motion.div key="mood" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('assessment.step.mood.title')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('assessment.step.mood.desc')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {MOODS.map((m, i) => (
                 <motion.button
                   key={m.id}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.05 }}
                   onClick={() => { setData(prev => ({ ...prev, mood: m.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-12 flex flex-col items-center gap-6 group transition-all duration-500",
                     data.mood === m.id ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-[1.05]" : "hover:bg-muted/40 bg-muted/10"
                   )}
                 >
                   <div className={cn(
                     "w-16 h-16 rounded-full flex items-center justify-center transition-colors mb-2",
                     data.mood === m.id ? "bg-white/20" : "bg-primary/5"
                   )}>
                    <m.icon className={cn("w-10 h-10 transition-colors", data.mood === m.id ? "text-white" : "text-primary")} />
                   </div>
                   <span className="font-black text-sm text-center uppercase tracking-widest">{t(m.labelKey)}</span>
                 </motion.button>
               ))}
            </div>
            <div className="flex justify-center pt-10">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-5 h-5" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'location':
        return (
          <motion.div key="location" {...wizardVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="apple-title text-4xl md:text-6xl tracking-tight">{t('discovery.step.location.title')}</h2>
              <p className="apple-subtitle text-lg opacity-60">{t('discovery.step.location.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               {LOCATIONS.map((l, i) => (
                 <motion.button
                   key={l.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   onClick={() => { setData(prev => ({ ...prev, location: l.id })); nextStep(); }}
                   className={cn(
                     "apple-card p-12 flex flex-col items-center gap-8 group relative overflow-hidden transition-all duration-700",
                     data.location === l.id ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10" : "hover:bg-muted/40 border-border/20"
                   )}
                 >
                    <div className={cn(
                      "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 relative z-10",
                      data.location === l.id ? "bg-primary text-white scale-110 shadow-xl shadow-primary/40" : "bg-muted text-muted-foreground group-hover:bg-background"
                    )}>
                      <l.icon className="w-12 h-12" />
                    </div>
                    <span className="font-black text-xl text-center leading-tight uppercase tracking-widest relative z-10">{t(l.labelKey)}</span>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                 </motion.button>
               ))}
            </div>
            <div className="flex justify-center pt-10">
               <Button variant="ghost" onClick={prevStep} className="rounded-full">
                 <ArrowLeft01Icon className="mr-2 w-5 h-5" /> {t('common.back')}
               </Button>
            </div>
          </motion.div>
        );

      case 'processing':
        return (
          <motion.div key="processing" {...wizardVariants} className="py-32 flex flex-col items-center justify-center space-y-16">
            <div className="relative w-64 h-64">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border-t-4 border-primary/40 border-r-4 border-primary/20 border-b-4 border-primary/10"
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-6 rounded-full border-b-2 border-primary/30 border-l-2 border-primary/10"
                />
                <motion.div 
                   animate={{ 
                     scale: [1, 1.15, 1],
                     opacity: [0.7, 1, 0.7] 
                   }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                >
                   <SparklesIcon className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                   <span className="font-black text-sm tracking-[0.4em] text-primary/60">ANALYZING</span>
                </motion.div>
            </div>
            <div className="text-center space-y-8 max-w-md">
               <h2 className="apple-title text-4xl bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">{t('assessment.processing.title')}</h2>
               <div className="flex flex-col items-center gap-6">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={processingState}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="bg-muted/40 border border-border/50 px-8 py-3 rounded-full shadow-sm"
                    >
                      <p className="text-primary font-black uppercase tracking-[0.25em] text-[11px]">
                        {t(`assessment.processing.step${Math.min(processingState + 1, 3)}`)}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="flex gap-3">
                     {[0, 1, 2].map(i => (
                        <motion.div 
                          key={i} 
                          animate={{ 
                            scale: i === processingState ? 1.5 : 1,
                            backgroundColor: i <= processingState ? "var(--primary)" : "var(--muted)" 
                          }}
                          className="w-2.5 h-2.5 rounded-full transition-colors" 
                        />
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        );

      case 'result': {
        const recommendation = calculateRecommendation(data);
        return (
          <motion.div key="result" {...wizardVariants} className="space-y-20 py-10">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
               >
                 <Badge variant="outline" className="rounded-full px-6 py-2 uppercase tracking-[0.3em] text-[11px] font-black bg-primary/5 text-primary border-primary/20 shadow-sm">
                   {t('assessment.result.badge')}
                 </Badge>
               </motion.div>
               <h2 className="apple-headline text-5xl md:text-8xl leading-[0.95] tracking-tight bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                 {t('assessment.result.match')}
               </h2>
               <p className="apple-subtitle text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">
                 {t('form.recommendation.subtitle')}
               </p>
            </div>

            {/* Premium Result Card */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="apple-card overflow-hidden grid lg:grid-cols-12 min-h-[700px] border-primary/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative group"
            >
                {/* Background Decoration */}
                <div className={cn("absolute inset-0 bg-linear-to-br transition-opacity duration-1000", recommendation.gradient)} />
                
                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={recommendation.image} 
                      alt={t(recommendation.titleKey)} 
                      fill 
                      className="object-cover" 
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-12 left-12 right-12 space-y-10">
                     <div className="flex flex-wrap gap-3">
                        {recommendation.tags.map((tag, i) => (
                          <Badge key={i} className="bg-white/10 backdrop-blur-2xl border-white/20 text-white uppercase tracking-[0.2em] text-[10px] font-black px-4 py-1.5">
                            {tag}
                          </Badge>
                        ))}
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-white/70 text-sm font-black uppercase tracking-[0.25em]">
                           <Clock01Icon className="w-5 h-5 text-primary" /> {recommendation.duration}
                        </div>
                        <div className="text-white text-6xl font-black tracking-tighter drop-shadow-2xl">
                          {recommendation.price}
                        </div>
                     </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-12 md:p-24 flex flex-col justify-center space-y-16 bg-card/80 backdrop-blur-md relative z-10">
                   <div className="space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="h-px flex-1 bg-primary/20" />
                         <Badge variant="secondary" className="bg-primary/10 text-primary font-black uppercase tracking-[0.2em] text-[9px] px-3 py-1">Recommended</Badge>
                         <div className="h-px flex-1 bg-primary/20" />
                      </div>
                      <h3 className="apple-title text-4xl md:text-6xl leading-[1.1] tracking-tight">{t(recommendation.titleKey)}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed font-medium">{t(recommendation.descKey)}</p>
                   </div>

                   <div className="space-y-10">
                      <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                         <HelpCircleIcon className="w-5 h-5" /> {t('assessment.result.why')}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-8">
                         {recommendation.whyKeys.map((key, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + (i * 0.1) }}
                              className="flex gap-5 items-start group/item"
                            >
                               <div className="w-8 h-8 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                  <CheckCircle className="w-4 h-4" />
                               </div>
                               <p className="text-base font-bold text-foreground/80 leading-snug group-hover/item:text-foreground transition-colors">{t(key)}</p>
                            </motion.div>
                         ))}
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-6 pt-10">
                      <Button asChild size="xl" className="flex-2 rounded-full h-22 text-xl font-black shadow-2xl shadow-primary/30 group/btn relative overflow-hidden">
                         <Link href={`/booking?service=${recommendation.serviceId}&assessment=complete&intensity=${data.intensity}&mood=${data.mood}&energy=${data.energy}&profile=${data.profile}`}>
                            <span className="relative z-10 flex items-center gap-3">
                              {t('assessment.result.book.prefilled')}
                              <ArrowRight01Icon className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                            </span>
                            <motion.div 
                              className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary"
                              whileHover={{ scale: 1.05 }}
                            />
                         </Link>
                      </Button>
                      <Button asChild variant="outline" size="xl" className="flex-1 rounded-full h-22 px-12 border-border/60 hover:bg-muted bg-background/40 backdrop-blur-sm text-lg font-bold">
                         <Link href={recommendation.href}>{t('common.learnMore')}</Link>
                      </Button>
                   </div>
                </div>
            </motion.div>

            {/* Social Proof & Contact */}
            <div className="grid lg:grid-cols-2 gap-8">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="apple-card p-10 bg-muted/20 border-border/40 flex flex-col justify-center space-y-6"
               >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
                  </div>
                  <h4 className="text-2xl font-black tracking-tight leading-tight">Trusted by 1500+ clients seeking somatic relief in Barcelona.</h4>
                  <div className="flex items-center gap-4 pt-4">
                     <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted overflow-hidden relative">
                             <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" fill />
                          </div>
                        ))}
                     </div>
                     <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">JOIN OUR COMMUNITY</p>
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.6 }}
                 className="apple-card p-10 bg-primary/5 border-primary/20 flex flex-col md:flex-row items-center gap-10"
               >
                  <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shadow-xl shadow-primary/5 shrink-0">
                     <Message01Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-4">
                     <h4 className="font-black text-2xl tracking-tight">{t('assessment.contact.title')}</h4>
                     <p className="text-muted-foreground font-semibold leading-relaxed">{t('assessment.contact.desc')}</p>
                     <Button asChild variant="secondary" className="rounded-full px-10 h-16 text-lg font-black shadow-lg shadow-primary/5 hover:scale-105 transition-transform">
                        <a href="https://wa.me/34658867133" target="_blank" rel="noopener noreferrer">
                          {t('assessment.contact.btn')}
                        </a>
                     </Button>
                  </div>
               </motion.div>
            </div>

            <div className="flex flex-col items-center gap-8 py-10">
               <button 
                 onClick={() => { setStep('intro'); setData({ profile: null, goals: [], intensity: 5, duration: null, energy: null, mood: null, location: null }); }}
                 className="text-muted-foreground hover:text-foreground font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-300 flex items-center gap-3 group"
               >
                 <ArrowLeft01Icon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                 <span className="underline underline-offset-8 decoration-border group-hover:decoration-primary">{t('form.startOver')}</span>
               </button>
            </div>
          </motion.div>
        );
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6" ref={containerRef}>
      
      {/* Dynamic Progress Indicator */}
      {step !== 'processing' && step !== 'result' && step !== 'intro' && (
        <div className="max-w-xl mx-auto mb-24 space-y-8">
           <div className="flex justify-between items-end">
              <div className="space-y-1">
                 <motion.p 
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="text-[11px] font-black uppercase tracking-[0.3em] text-primary"
                 >
                   {t('assessment.progress.title')}
                 </motion.p>
                 <h3 className="font-black text-lg tracking-tight">{t('assessment.progress.subtitle')}</h3>
              </div>
              <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest bg-muted/40 px-3 py-1 rounded-md">
                {t('assessment.progress.step')} {currentIndex} {t('assessment.progress.of')} {totalSteps - 1}
              </p>
           </div>
           <div className="h-2 w-full bg-muted/40 rounded-full overflow-hidden p-[2px] border border-border/20 shadow-inner">
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${(currentIndex / (totalSteps - 1)) * 100}%` }}
                 className="h-full bg-linear-to-r from-primary/60 to-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
                 transition={{ type: "spring", stiffness: 40, damping: 15 }}
              />
           </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
