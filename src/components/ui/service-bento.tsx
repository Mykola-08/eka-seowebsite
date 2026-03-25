'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollLock } from '@/hooks/useScrollLock';

interface BentoItemProps {
  title: string;
  description: string;
  image?: string;
  details?: React.ReactNode;
  benefits?: string[];
  delay?: number;
  className?: string;
  bookUrl?: string;
  bookText?: string;
  readMoreUrl?: string;
  readMoreText?: string;
}

export function ServiceBentoItem({ 
  title, 
  description, 
  image, 
  details, 
  benefits,
  delay = 0, 
  className = "",
  bookUrl,
  bookText = "Book Now",
  readMoreUrl,
  readMoreText = "Full details"
}: BentoItemProps) {
  const [isOpen, setIsOpen] = useState(false);  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useScrollLock(isOpen);

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
          className="relative text-left flex flex-col justify-end w-full h-full min-h-[260px] md:min-h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group outline-none isolate border border-secondary/50 bg-[#fbfbfd] transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
               <Image src={image} fill alt={title} className="object-cover  transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50" />
          )}
          
          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-end h-full w-full">
             <motion.div
               className="transform transition-transform duration-500 group-hover:-translate-y-2 pr-16 md:pr-20"
             >
               <h3 className={`text-2xl sm:text-3xl font-semibold mb-3 tracking-tight ${image ? 'text-white drop-shadow-md' : 'text-black'}`}>
                  {title}
               </h3>
                 <p className={`text-base tracking-tight leading-relaxed line-clamp-4 md:line-clamp-none mt-2 ${image ? 'text-white/95 drop-shadow-sm' : 'text-gray-600'}`}>
                  {description}
               </p>
               {benefits && benefits.length > 0 && (
                 <div className="flex flex-wrap gap-2 mt-4 opacity-90">
                   {benefits.slice(0, 3).map((benefit, i) => (
                     <span key={i} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${image ? 'border-white/30 text-white bg-black/40' : 'border-gray-200 text-gray-700 bg-gray-50'} backdrop-blur-md`}>
                       {benefit}
                     </span>
                   ))}
                 </div>
               )}
             </motion.div>
             <div className={`absolute bottom-8 right-8 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md border transition-all duration-500 group-hover:scale-110 group-hover:bg-opacity-100 group-active:scale-95 z-20  ${image ? 'bg-white/20 border-white/40 text-white group-hover:bg-white group-hover:text-black group-hover:border-white' : 'bg-black/5 border-black/10 text-black group-hover:bg-black group-hover:text-white group-hover:border-black'}`}
             >
                <svg className="w-6 h-6 transition-transform duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
             </div>
          </div>
        </button>
      </motion.div>

      {/* Modal */}
      {mounted && typeof document !== 'undefined' ? createPortal(
        <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
               initial={{ opacity: 0, y: "100%" }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: "100%" }}
               transition={{ type: "spring", bounce: 0, duration: 0.5 }}
               className="relative w-full max-w-6xl bg-white rounded-t-[2rem] sm:rounded-[2.5rem] overflow-hidden z-10 h-[96svh] sm:h-[90vh] flex flex-col"
               onClick={(e) => e.stopPropagation()}
            >
               {/* Mobile drag handle */}
               <div className="w-full flex justify-center pt-3 pb-1 sm:hidden absolute top-0 z-30 pointer-events-none">
                 <div className="w-10 h-1 bg-black/20 rounded-full" />
               </div>

               <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-xl transition-colors text-white"
               >
                 <X size={18} />
               </button>

               <div className="flex flex-col md:flex-row w-full h-full min-h-0">
                 {image ? (
                    <>
                      {/* Image panel */}
                      <div className="relative w-full md:w-[42%] h-[22vh] sm:h-[26vh] md:h-full shrink-0 flex flex-col justify-end">
                         <Image src={image} fill alt={title} className="object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                         <div className="relative z-10 p-5 sm:p-7 flex flex-col justify-end w-full">
                           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-2 leading-tight">{title}</h2>
                           {/* CTA buttons inside image (desktop only) */}
                           <div className="hidden md:flex flex-col gap-2.5 mt-3 w-full">
                              {bookUrl && (
                                  <Link href={bookUrl}>
                                      <span className="flex items-center justify-center w-full px-5 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition shadow-lg">
                                          {bookText}
                                      </span>
                                  </Link>
                              )}
                              {readMoreUrl && (
                                  <Link href={readMoreUrl}>
                                      <span className="flex items-center justify-center w-full px-5 py-2.5 bg-black/40 text-white backdrop-blur-md rounded-full font-medium text-sm hover:bg-black/60 transition border border-white/20">
                                          {readMoreText} <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                                      </span>
                                  </Link>
                              )}
                           </div>
                         </div>
                      </div>

                      {/* Content panel — scrollable only if content overflows */}
                      <div className="flex-1 min-h-0 flex flex-col p-5 sm:p-6 md:p-8 overflow-y-auto overscroll-contain">
                         <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-900 mb-4">{description}</p>
                         <div className="flex-1 min-h-0">
                           {details}
                         </div>

                         {/* CTA buttons (mobile/tablet) */}
                         <div className="flex md:hidden flex-col gap-2.5 pt-4 mt-3 border-t border-gray-100 shrink-0">
                            {bookUrl && (
                                <Link href={bookUrl} className="w-full">
                                    <span className="flex items-center justify-center w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition">
                                        {bookText}
                                    </span>
                                </Link>
                            )}
                            {readMoreUrl && (
                                <Link href={readMoreUrl} className="w-full">
                                    <span className="flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-black rounded-full font-medium text-sm hover:bg-gray-200 transition">
                                        {readMoreText} <ArrowRight className="ml-1.5 w-3.5 h-3.5 inline" />
                                    </span>
                                </Link>
                            )}
                         </div>
                      </div>
                    </>
                 ) : (
                    <div className="flex-1 min-h-0 flex flex-col p-5 sm:p-7 overflow-y-auto overscroll-contain pt-10 sm:pt-7">
                       <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black mb-3">{title}</h2>
                       <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-900 mb-4">{description}</p>
                       <div className="flex-1 min-h-0">
                         {details}
                       </div>

                       <div className="flex flex-col sm:flex-row gap-2.5 pt-4 mt-3 border-t border-gray-100 shrink-0">
                          {bookUrl && (
                              <Link href={bookUrl} className="flex-1">
                                  <span className="flex items-center justify-center w-full px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition">
                                      {bookText}
                                  </span>
                              </Link>
                          )}
                          {readMoreUrl && (
                              <Link href={readMoreUrl} className="flex-1">
                                  <span className="flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-black rounded-full font-medium text-sm hover:bg-gray-200 transition">
                                      {readMoreText} <ArrowRight className="ml-1.5 w-3.5 h-3.5 inline" />
                                  </span>
                              </Link>
                          )}
                       </div>
                    </div>
                 )}
               </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>,
        document.body
      ) : null}
    </>
  );
}

