"use client";

import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  priority?: boolean;
  sizes?: string;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  onLoad,
  priority = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: LazyImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onLoad={onLoad}
      />
    </div>
  );
}
