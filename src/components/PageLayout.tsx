'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  mainClassName?: string;
}

export default function PageLayout({ children, hero, className = '', mainClassName = 'bg-white rounded-t-[3rem]' }: PageLayoutProps) {
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
    <div className={`min-h-screen bg-[#fbfbfd] ${className}`}>
      {/* Hero Section */}
      {isCustomHero ? (
        hero
      ) : (heroData && (
        heroData.backgroundImage ? (
          <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            <motion.div
               initial={{ scale: 1.05 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
               className="absolute inset-0 z-0"
            >
              <Image 
                src={heroData.backgroundImage} 
                alt={heroData.title} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"></div>
            </motion.div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-16">
              {heroData.badge && (
                <motion.div
                  initial={{ opacity: 1, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-white/90 mb-6 bg-black/30 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full "
                >
                  {heroData.icon && <span className="mr-2 text-white">{heroData.icon}</span>}
                  {heroData.badge}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 1, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-4xl sm:text-6xl lg:text-[5.5rem] font-semibold text-white mb-6 tracking-tighter text-balance pb-2 leading-[1.05]"
              >
                {heroData.title}
              </motion.h1>

              {heroData.subtitle && (
                <motion.p
                  initial={{ opacity: 1, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-lg sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed text-balance font-medium tracking-tight"
                >
                  {heroData.subtitle}
                </motion.p>
              )}
            </div>
            
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center animate-bounce"
            >
               <div className="w-[30px] h-[50px] rounded-full border-2 border-white/40 flex justify-center p-2">
                 <div className="w-1.5 h-3 bg-white rounded-full"></div>
               </div>
            </motion.div>
          </section>
        ) : (
          <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#fbfbfd]">
            <div className="section-container text-center z-20 relative max-w-4xl mx-auto px-6">
              {heroData.badge && (
                <motion.div
                  initial={{ opacity: 1, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6 bg-white/50 backdrop-blur-md border border-gray-200 px-4 py-1.5 rounded-full "
                >
                  {heroData.icon && <span className="mr-2 text-gray-700">{heroData.icon}</span>}
                  {heroData.badge}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 1, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-4xl sm:text-6xl lg:text-[5.5rem] font-semibold text-black mb-6 tracking-tighter text-balance pb-2 leading-[1.05]"
              >
                {heroData.title}
              </motion.h1>

              {heroData.subtitle && (
                <motion.p
                  initial={{ opacity: 1, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-lg sm:text-2xl text-gray-500/90 max-w-3xl mx-auto leading-relaxed text-balance font-medium tracking-tight"
                >
                  {heroData.subtitle}
                </motion.p>
              )}
            </div>
          </section>
        )
      ))}

      {/* Main Content */}
      <main className={`relative z-20 -mt-8 pt-12 pb-0 ${mainClassName}`}>     
        {children}
      </main>
    </div>
  );
}
