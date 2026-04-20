'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function BentoCard({ 
  href, 
  className = "", 
  children, 
  delay = 0 
}: { 
  href: string, 
  className?: string, 
  children: React.ReactNode, 
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative h-full w-full ${className}`}
    >
      <motion.div 
        className="w-full h-full"
      >
        <Link 
          href={href} 
          className="relative block w-full h-full rounded-apple overflow-hidden group outline-none isolate bg-muted/10 border border-border hover:bg-muted/20 hover:border-primary/30 transition-colors duration-300"
        >
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
}
