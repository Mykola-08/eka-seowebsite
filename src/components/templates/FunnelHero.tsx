'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FUNNEL_DATA, type ProblemState } from '@/lib/funnel-data';

interface FunnelHeroProps {
  currentProblem: ProblemState;
  onProblemChange: (value: ProblemState) => void;
  className?: string;
}

export function FunnelHero({ currentProblem, onProblemChange, className }: FunnelHeroProps) {
  const content = FUNNEL_DATA[currentProblem];

  return (
    <section className={cn("relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background -z-10" />
      
      <div className="container px-4 md:px-6 z-10 flex flex-col items-center text-center">
        {/* Main Headline (Adaptive) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`headline-${currentProblem}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              {content.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {content.heroSubheadline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Sentence */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg max-w-3xl w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-xl sm:text-2xl font-medium"
        >
          <span className="shrink-0">I am looking for help with</span>
          <Select 
            value={currentProblem} 
            onValueChange={(v) => onProblemChange(v as ProblemState)}
          >
            <SelectTrigger className="h-auto py-3 px-5 text-xl sm:text-2xl bg-muted/50 border-primary/20 hover:border-primary/50 transition-colors w-full sm:w-auto font-medium shadow-none focus:ring-primary/20 whitespace-normal text-left min-h-12 rounded-xl">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50 shadow-xl overflow-hidden p-1 min-w-70 max-w-[95vw]">
              {Object.entries(FUNNEL_DATA).map(([key, data]) => (
                <SelectItem 
                  key={key} 
                  value={key} 
                  className="text-base font-medium py-3 px-4 cursor-pointer data-highlighted:bg-muted/80 rounded-lg transition-colors whitespace-normal"
                >
                  ...{data.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg h-auto shadow-md hover:shadow-lg transition-all" asChild>
            <a href="#solutions">See The Solution</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
