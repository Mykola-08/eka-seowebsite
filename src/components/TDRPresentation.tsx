'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  X,
  Code,
  Cpu,
  Layers,
  Zap,
  Globe,
  Database
} from 'lucide-react';
import { useTDR } from './TDRContext';
import { useRouter, usePathname } from 'next/navigation';

type Stat = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

type Step = {
  id: string;
  title: string;
  description: string;
  path: string;
  stats: Stat[];
  highlightSelector?: string; // CSS selector to highlight if possible (advanced)
};

const presentationSteps: Step[] = [
  {
    id: 'intro',
    title: 'Project Architecture: TDR',
    description: 'Welcome to the technical presentation of the EKA Balance platform. A full-stack Next.js application tailored for high-performance wellness services.',
    path: '/',
    stats: [
      { label: 'Framework', value: 'Next.js 14 App Router', icon: <Layers className="w-4 h-4 text-blue-400" /> },
      { label: 'Hosting', value: 'Vercel Edge + Cloudflare', icon: <Zap className="w-4 h-4 text-yellow-400" /> },
      { label: 'Total LOC', value: '~12,500', icon: <Code className="w-4 h-4 text-green-400" /> },
    ]
  },
  {
    id: 'galaxy',
    title: 'Advanced Animations: The Galaxy',
    description: 'A custom-built particle system using Framer Motion to represent "Systemic Vitality". Recently optimized for higher visibility and ethereal aesthetics.',
    path: '/360-revision',
    stats: [
      { label: 'Animation Lib', value: 'Framer Motion', icon: <Zap className="w-4 h-4 text-purple-400" /> },
      { label: 'Orbs', value: 'Dynamic Blur Filters', icon: <Layers className="w-4 h-4 text-pink-400" /> },
      { label: 'Performance', value: '60 FPS', icon: <Cpu className="w-4 h-4 text-green-400" /> },
    ]
  },
  {
    id: 'agenyz',
    title: 'Internationalization & Dynamic Data',
    description: 'A scalable product catalog architecture. Data is decoupled from UI, supporting 4 languages (EN, ES, CA, RU) via a custom context-based i18n system.',
    path: '/agenyz',
    stats: [
      { label: 'Languages', value: '4 (Context API)', icon: <Globe className="w-4 h-4 text-blue-400" /> },
      { label: 'Products', value: '25+ Dynamic Items', icon: <Database className="w-4 h-4 text-orange-400" /> },
      { label: 'Data Source', value: 'Structured JSON', icon: <Code className="w-4 h-4 text-gray-400" /> },
    ]
  },
  {
    id: 'services',
    title: 'Routing & Dynamic Segments',
    description: 'Complex routing structure handling various personalized services. Uses Next.js dynamic imports for optimal bundle splitting.',
    path: '/personalized-services',
    stats: [
      { label: 'Routes', value: '15+ Static Pages', icon: <Layers className="w-4 h-4 text-indigo-400" /> },
      { label: 'Components', value: 'Atomic Design', icon: <Code className="w-4 h-4 text-teal-400" /> },
    ]
  },
  {
    id: 'booking',
    title: 'Business Logic & Conversion',
    description: 'Smart booking interface integrated with WhatsApp API for immediate conversion. Features conditional logic based on user selection.',
    path: '/booking',
    stats: [
      { label: 'Conversion', value: 'WhatsApp API', icon: <Zap className="w-4 h-4 text-green-500" /> },
      { label: 'State', value: 'Global Context', icon: <Cpu className="w-4 h-4 text-red-400" /> },
    ]
  }
];

export default function TDRPresentation() {
  const { isOpen, setIsOpen } = useTDR();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle navigation when step changes
  const handleStepChange = useCallback((index: number) => {
    setCurrentStep(index);
    const step = presentationSteps[index];
    if (step.path !== pathname) {
      router.push(step.path);
    }
  }, [pathname, router]);

  // Auto-play logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        if (currentStep < presentationSteps.length - 1) {
          handleStepChange(currentStep + 1);
        } else {
          setIsPlaying(false); // Stop at end
        }
      }, 8000); // 8 seconds per slide
    }

    return () => clearInterval(interval);
  }, [isPlaying, isOpen, currentStep, handleStepChange, pathname, router]);

  if (!isOpen) return null;

  const step = presentationSteps[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-24 right-6 z-[9999] w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-white"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500/20 to-purple-600/20 p-4 border-b border-white/5 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">TDR Presentation Mode</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full text-gray-400 hover:text-white transition-colors">
               <X className="w-4 h-4" />
             </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/5 w-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-amber-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / presentationSteps.length) * 100}%` }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {step.title}
              </h2>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                {currentStep + 1}/{presentationSteps.length}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-amber-500/50 pl-3">
              {step.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {step.stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 rounded-xl p-3 flex items-center justify-between group hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-mono">{stat.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <button 
                onClick={() => handleStepChange(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  isPlaying 
                    ? 'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 ml-1" /> Auto Play
                  </>
                )}
              </button>

              <button 
                onClick={() => handleStepChange(Math.min(presentationSteps.length - 1, currentStep + 1))}
                disabled={currentStep === presentationSteps.length - 1}
                className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
