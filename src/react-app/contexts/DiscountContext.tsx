import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Discount {
  id: string;
  name: string;
  percentage: number;
  code: string;
  isActive: boolean;
}

interface DiscountContextType {
  selectedDiscount: Discount | null;
  availableDiscounts: Discount[];
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
  calculateDiscountedPrice: (originalPrice: number) => number;
  getDiscountAmount: (originalPrice: number) => number;
}

const DiscountContext = createContext<DiscountContextType | undefined>(undefined);

// Available discounts
const AVAILABLE_DISCOUNTS: Discount[] = [
  {
    id: 'mykola-friend',
    name: 'Mykola\'s Friend',
    percentage: 20,
    code: 'MYKOLA20',
    isActive: true
  },
  {
    id: 'conocido-mykola',
    name: 'Conocido de Mykola',
    percentage: 10,
    code: 'CONOCIDO10',
    isActive: true
  }
];

export function DiscountProvider({ children }: { children: React.ReactNode }) {
  const [selectedDiscount, setSelectedDiscount] = useState<Discount | null>(null);

  // Load discount from localStorage on mount
  useEffect(() => {
    const savedDiscountCode = localStorage.getItem('eka-applied-discount');
    if (savedDiscountCode) {
      const discount = AVAILABLE_DISCOUNTS.find(d => d.code === savedDiscountCode && d.isActive);
      if (discount) {
        setSelectedDiscount(discount);
      } else {
        // Clean up invalid discount
        localStorage.removeItem('eka-applied-discount');
      }
    }
  }, []);

  const applyDiscount = (code: string): boolean => {
    const discount = AVAILABLE_DISCOUNTS.find(
      d => d.code.toLowerCase() === code.toLowerCase() && d.isActive
    );
    
    if (discount) {
      setSelectedDiscount(discount);
      localStorage.setItem('eka-applied-discount', discount.code);
      return true;
    }
    
    return false;
  };

  const removeDiscount = () => {
    setSelectedDiscount(null);
    localStorage.removeItem('eka-applied-discount');
  };

  const calculateDiscountedPrice = (originalPrice: number): number => {
    if (!selectedDiscount) return originalPrice;
    const discountAmount = (originalPrice * selectedDiscount.percentage) / 100;
    return Math.round((originalPrice - discountAmount) * 100) / 100;
  };

  const getDiscountAmount = (originalPrice: number): number => {
    if (!selectedDiscount) return 0;
    return Math.round((originalPrice * selectedDiscount.percentage) / 100 * 100) / 100;
  };

  return (
    <DiscountContext.Provider value={{
      selectedDiscount,
      availableDiscounts: AVAILABLE_DISCOUNTS.filter(d => d.isActive),
      applyDiscount,
      removeDiscount,
      calculateDiscountedPrice,
      getDiscountAmount
    }}>
      {children}
    </DiscountContext.Provider>
  );
}

export function useDiscount() {
  const context = useContext(DiscountContext);
  if (context === undefined) {
    throw new Error('useDiscount must be used within a DiscountProvider');
  }
  return context;
}
