'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface Step {
  id: string;
  title: string;
  description: string;
  path: string;
  stats: any[];
}

interface TDRContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  startPresentation: () => void;
  closePresentation: () => void;
}

const TDRContext = createContext<TDRContextType | undefined>(undefined);

export function TDRProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const startPresentation = () => {
    setIsOpen(true);
    router.push('/');
  };

  const closePresentation = () => {
    setIsOpen(false);
  };

  return (
    <TDRContext.Provider value={{ isOpen, setIsOpen, startPresentation, closePresentation }}>
      {children}
    </TDRContext.Provider>
  );
}

export function useTDR() {
  const context = useContext(TDRContext);
  if (context === undefined) {
    throw new Error('useTDR must be used within a TDRProvider');
  }
  return context;
}
