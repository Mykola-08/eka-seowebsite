'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  hero?: React.ReactNode | {
    title: string;
    subtitle?: string;
    badge?: string;
    icon?: React.ReactNode;
    backgroundImage?: string;
    themeColor?: string;
  };
  className?: string;
}

export default function PageLayout({ children, hero, className = '' }: PageLayoutProps) {
  const isCustomHero = React.isValidElement(hero);
  const heroData = !isCustomHero ? (hero as {
    title: string;
    subtitle?: string;
    badge?: string;
    icon?: React.ReactNode;
    backgroundImage?: string;
    themeColor?: string;
  } | undefined) : undefined;

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Hero Section */}
      {isCustomHero ? (
        hero
      ) : (heroData && (
        <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white">
          <div className="section-container text-center z-10">
            {heroData.badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-blue-600 mb-4"
              >
                {heroData.icon && <span className="mr-2">{heroData.icon}</span>}
                {heroData.badge}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-black mb-6 tracking-tight text-balance pb-2"
            >
              {heroData.title}
            </motion.h1>

            {heroData.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed text-balance font-normal"
              >
                {heroData.subtitle}
              </motion.p>
            )}
          </div>
        </section>
      ))}

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
