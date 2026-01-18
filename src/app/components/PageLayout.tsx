'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  hero?: {
    title: string;
    subtitle?: string;
    badge?: string;
    icon?: React.ReactNode;
  };
  className?: string;
}

export default function PageLayout({ children, hero, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50/50 ${className}`}>
      {/* Hero Section */}
      {hero && (
        <section className="relative pt-32 pb-16 overflow-hidden">
           {/* Background Elements */}
           <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
           <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            {hero.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8 border border-primary-100/50 backdrop-blur-sm"
              >
                {hero.icon && <span className="mr-2">{hero.icon}</span>}
                {hero.badge}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              {hero.title}
            </motion.h1>

            {hero.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                {hero.subtitle}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
