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

const colorMap: Record<string, { badge: string; badgeText: string; titleGradient: string }> = {
  orange: {
    badge: 'bg-orange-50 border-orange-100',
    badgeText: 'text-orange-700',
    titleGradient: 'from-orange-600 to-red-600'
  },
  blue: {
    badge: 'bg-blue-50 border-blue-100',
    badgeText: 'text-blue-700',
    titleGradient: 'from-blue-600 to-indigo-600'
  },
  green: {
    badge: 'bg-green-50 border-green-100',
    badgeText: 'text-green-700',
    titleGradient: 'from-green-600 to-emerald-600'
  },
  purple: {
    badge: 'bg-purple-50 border-purple-100',
    badgeText: 'text-purple-700',
    titleGradient: 'from-purple-600 to-violet-600'
  },
  pink: {
    badge: 'bg-pink-50 border-pink-100',
    badgeText: 'text-pink-700',
    titleGradient: 'from-pink-600 to-rose-600'
  },
  amber: {
    badge: 'bg-amber-50 border-amber-100',
    badgeText: 'text-amber-700',
    titleGradient: 'from-amber-600 to-yellow-600'
  },
   red: { // Fallback/Extra
    badge: 'bg-red-50 border-red-100',
    badgeText: 'text-red-700',
    titleGradient: 'from-red-600 to-orange-600'
  }
};

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

  const theme = (heroData?.themeColor && colorMap[heroData.themeColor]) || {
    badge: 'bg-white/80 border-primary-100/70',
    badgeText: 'text-primary-700',
    titleGradient: 'from-gray-900 via-gray-800 to-gray-900' // Default text color style
  };

  return (
    <div className={`min-h-screen ${className}`}>
      {/* Hero Section */}
      {isCustomHero ? (
        hero
      ) : (heroData && (
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 overflow-hidden">
           {/* Background Elements */}
           {heroData.backgroundImage ? (
             <>
               <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
               />
               <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0" />
               <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-transparent z-0" />
             </>
           ) : (
             <>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-white/30 to-transparent" />
             </>
           )}

          <div className="relative section-container text-center z-10">
            {heroData.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center px-4 py-2 rounded-full ${theme.badge} ${theme.badgeText} text-sm font-medium mb-8 border backdrop-blur-sm shadow-sm`}
              >
                {heroData.icon && <span className="mr-2">{heroData.icon}</span>}
                {heroData.badge}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.titleGradient} mb-6 tracking-tight text-balance pb-2`}
            >
              {heroData.title}
            </motion.h1>

            {heroData.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance font-medium"
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
