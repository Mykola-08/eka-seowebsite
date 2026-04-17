'use client';

import React, { useState, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from '@/lib/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { VisuallyHidden } from 'radix-ui';

interface BentoItemProps {
  title: string;
  description: string;
  image?: string;
  sizes?: string;
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
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  details, 
  benefits,
  delay = 0, 
  className = "",
  bookUrl,
  bookText = "Book Now",
  readMoreUrl,
  readMoreText = "Full details"
}: BentoItemProps) {
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
          className="relative text-left flex flex-col justify-end w-full h-full min-h-56 sm:min-h-64 md:min-h-80 rounded-apple overflow-hidden group outline-hidden isolate bg-card transition-colors duration-300 ease-out active:scale-[0.98] border border-border hover:border-foreground/25"
        >
          {/* Spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-60 mix-blend-overlay"
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
               <Image src={image} fill sizes={sizes} alt={title} className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                 <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-linear-to-br from-muted/50 to-muted opacity-50" />
          )}
          
          <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full w-full">
             <motion.div
               className="transform transition-transform duration-500 group-hover:-translate-y-3 md:pr-20"
             >
               <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 tracking-tight ${image ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {title}
               </h3>
                 <p className={`text-base sm:text-lg tracking-tight leading-relaxed line-clamp-3 md:line-clamp-4 mt-2 ${image ? 'text-primary-foreground/95' : 'text-muted-foreground'}`}>
                  {description}
               </p>
               {benefits && benefits.length > 0 && (
                 <div className="flex flex-wrap gap-2 mt-5 opacity-90">
                   {benefits.slice(0, 3).map((benefit, i) => (
                     <span key={i} className={`text-xs font-medium px-4 py-2 rounded-full border-0 ${image ? 'text-primary-foreground bg-foreground/40' : 'text-foreground bg-background'} backdrop-blur-md`}>
                       {benefit}
                     </span>
                   ))}
                 </div>
               )}
             </motion.div>
               <div className={`absolute bottom-8 right-8 flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md border-0 transition-all duration-500 group-hover:scale-110 group-hover:bg-opacity-100 z-20 ${image ? 'bg-card/20 text-primary-foreground group-hover:bg-card group-hover:text-foreground' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'}`}
               >
                <svg className="w-6 h-6 transition-transform duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
             </div>
          </div>
        </button>
      </motion.div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="p-0 overflow-hidden sm:max-w-3xl lg:max-w-4xl max-h-[92svh] flex flex-col gap-0"
        >
          <VisuallyHidden.Root>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </VisuallyHidden.Root>

          <div className="flex flex-col md:flex-row min-h-0 flex-1 overflow-hidden">
            {image ? (
              <div className="relative w-full md:w-2/5 aspect-4/3 md:aspect-auto md:min-h-112 shrink-0 flex flex-col justify-end bg-muted">
                <Image
                  src={image}
                  fill
                  alt={title}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-primary-foreground leading-tight">
                    {title}
                  </h2>
                </div>
              </div>
            ) : null}

            <div className="flex-1 min-h-0 flex flex-col overflow-y-auto overscroll-contain">
              <div className={`flex-1 p-6 sm:p-8 md:p-10 ${image ? 'text-left' : 'text-center flex flex-col items-center'}`}>
                {!image && (
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-4">
                    {title}
                  </h2>
                )}
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
                  {description}
                </p>
                {details && (
                  <div className={`space-y-4 ${image ? '' : 'w-full'}`}>
                    {details}
                  </div>
                )}
              </div>

              {(bookUrl || readMoreUrl) && (
                <div className="flex flex-col sm:flex-row gap-3 p-6 sm:p-8 md:px-10 md:pb-10 md:pt-0 border-t border-border md:border-t-0 bg-card">
                  {bookUrl && (
                    <Button asChild size="lg" className="flex-1 rounded-full">
                      <Link href={bookUrl}>{bookText}</Link>
                    </Button>
                  )}
                  {readMoreUrl && (
                    <Button asChild size="lg" variant="outline" className="flex-1 rounded-full">
                      <Link href={readMoreUrl}>
                        {readMoreText}
                        <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

