'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { shimmerBlurDataURL } from '@/lib/image-utils';

interface ParallaxBackgroundProps {
  src: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
}

export default function ParallaxBackground({
  src,
  alt = 'Background image',
  children,
  className = '',
  overlayOpacity = 0.5
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ position: 'relative' }}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL={shimmerBlurDataURL()}
          sizes="100vw"
          quality={75}
        />
        <div
            className="absolute inset-0 bg-black transition-opacity duration-500"
            style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
