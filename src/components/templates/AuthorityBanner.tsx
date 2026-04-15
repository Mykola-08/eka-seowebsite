'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AuthorityBannerProps {
  label: string;
}

export function AuthorityBanner({ label }: AuthorityBannerProps) {
  return (
    <section className="w-full py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          {label}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center opacity-80 mix-blend-luminosity grayscale">
          {/* Using placeholder badges to signify trust / authority */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-4xl font-extrabold text-foreground tracking-tighter">10+</div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-4xl font-extrabold text-foreground tracking-tighter">1500+</div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Clients Helped</span>
          </div>
           <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-4xl font-extrabold text-foreground tracking-tighter">100%</div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Personalized</span>
          </div>
           <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-4xl font-extrabold text-foreground tracking-tighter">4.9/5</div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}