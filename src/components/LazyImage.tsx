"use client";

import { useState } from 'react';
import Image from 'next/image';

// Minimal 1×1 gray PNG — used as a blur placeholder for remote images
// so the browser renders a non-empty placeholder immediately.
const BLUR_PLACEHOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  /** Set true for above-the-fold images — tells the browser to preload eagerly */
  priority?: boolean;
  /** Responsive sizes hint for the browser */
  sizes?: string;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  onLoad,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
      />

      {/* Animated skeleton visible until the image finishes loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
}
