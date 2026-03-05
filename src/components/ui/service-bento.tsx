'use client';

import React, { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  image?: string;
  details?: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ServiceBentoItem({ title, description, image, details, delay = 0, className = "" }: BentoItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`relative h-full w-full ${className}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          onMouseMove={handleMouseMove}
          className="relative text-left flex flex-col justify-end w-full h-full min-h-[350px] rounded-[2.5rem] overflow-hidden group outline-none isolate shadow-sm border border-secondary/50 bg-[#fbfbfd] hover:shadow-xl transition-all duration-500 will-change-transform active:scale-[0.98]"
        >
          {/* Spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-[60] mix-blend-overlay"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.4),
                  transparent 40%
                )
              `,
            }}
          />

          {/* Background Image */}
          {image ? (
            <div className="absolute inset-0 z-0">
               <Image src={image} fill alt={title} className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50" />
          )}
          
          <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full w-full">
             <motion.div 
               className="transform transition-transform duration-500 group-hover:-translate-y-2"
             >
               <h3 className={`text-2xl sm:text-3xl font-semibold mb-3 tracking-tight ${image ? 'text-white' : 'text-black'}`}>
                  {title}
               </h3>
               <p className={`text-base tracking-tight leading-relaxed max-w-md line-clamp-3 ${image ? 'text-white/80' : 'text-gray-500'}`}>
                  {description}
               </p>
             </motion.div>
             <div className={`mt-4 flex items-center text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${image ? 'text-white' : 'text-[#06c]'}`}>
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
             </div>
          </div>
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 10 }}
               transition={{ type: "spring", bounce: 0, duration: 0.4 }}
               className="relative w-full max-w-3xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
               onClick={(e) => e.stopPropagation()}
            >
               <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md transition-colors text-black"
               >
                 <X size={20} />
               </button>
               
               {image && (
                  <div className="relative w-full h-72 sm:h-96 shrink-0">
                     <Image src={image} fill alt={title} className="object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-8 right-8">
                       <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">{title}</h2>
                     </div>
                  </div>
               )}
               
               <div className="p-8 sm:p-12 overflow-y-auto customize-scrollbar">
                 {!image && (
                    <h2 className="text-4xl font-semibold tracking-tight text-black mb-6">{title}</h2>
                 )}
                 <div className="prose prose-lg prose-apple max-w-none text-gray-600">
                    <p className="text-xl leading-relaxed font-medium text-gray-900 mb-8">{description}</p>
                    {details}
                 </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
