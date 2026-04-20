'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function FooterUncover({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Main Content Container */}
      <div
        className="relative z-10 bg-secondary min-h-dvh rounded-b-apple shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        {children}
      </div>

      {/* Fixed Footer */}
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0"
      >
        {footer}
      </div>
    </div>
  );
}
