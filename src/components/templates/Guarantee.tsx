'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProblemState, FUNNEL_DATA } from '@/lib/funnel-data';
import { Button } from '@/components/ui/button';
import { SecurityCheckIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface GuaranteeProps {
  problem: ProblemState;
}

export function Guarantee({ problem }: GuaranteeProps) {
  const content = FUNNEL_DATA[problem];

  return (
    <section className="bg-muted py-24 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-background shadow-md border border-border">
             <HugeiconsIcon icon={SecurityCheckIcon} className="w-12 h-12 text-primary" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          The 100% Clarity Guarantee
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          I don't just treat symptoms. We will find exactly what is causing your {content.label}. If you don't feel a noticeable shift in understanding your body's needs after your first 360° Assessment, I will happily reassess completely free. No risk, just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto h-14 text-lg font-bold px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
            Book Your Assessment Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4">
            Secure checkout. Spots are limited.
          </p>
        </div>
      </div>
    </section>
  );
}