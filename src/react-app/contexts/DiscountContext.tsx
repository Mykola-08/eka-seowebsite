import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/react-app/lib/supabase';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

/* eslint-disable react-refresh/only-export-components */
export interface Discount {
  id: string;
  name: string;
  percentage: number;
  code: string;
  description?: string;
  isActive: boolean;
}

interface DiscountContextType {
  selectedDiscount: Discount | null;
  availableDiscounts: Discount[];
  applyDiscount: (code: string) => Promise<boolean>;
  removeDiscount: () => void;
  calculateDiscountedPrice: (originalPrice: number) => number;
  getDiscountAmount: (originalPrice: number) => number;
  isLoading: boolean;
}

const DiscountContext = createContext<DiscountContextType | undefined>(undefined);

export function DiscountProvider({ children }: { children: React.ReactNode }) {
  const [selectedDiscount, setSelectedDiscount] = useState<Discount | null>(null);
  const [availableDiscounts, setAvailableDiscounts] = useState<Discount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { logEvent } = useAnalytics();

  // Load discounts from Supabase
  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const { data, error } = await supabase
          .from('discounts')
          .select('*')
          .eq('is_active', true);

        if (error) throw error;

        if (data) {
          const mappedDiscounts: Discount[] = data.map(d => ({
            id: d.id,
            name: d.name,
            percentage: d.percentage,
            code: d.code,
            description: d.description || undefined,
            isActive: d.is_active || false
          }));
          setAvailableDiscounts(mappedDiscounts);

          // Check for saved discount
          const savedDiscountCode = localStorage.getItem('eka-applied-discount');
          if (savedDiscountCode) {
            const discount = mappedDiscounts.find(d => d.code === savedDiscountCode);
            if (discount) {
              setSelectedDiscount(discount);
            } else {
              localStorage.removeItem('eka-applied-discount');
            }
          }
        }
      } catch (error) {
        console.error('Error fetching discounts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiscounts();
  }, []);

  const applyDiscount = async (code: string): Promise<boolean> => {
    const discount = availableDiscounts.find(
      d => d.code.toLowerCase() === code.toLowerCase()
    );
    
    if (discount) {
      setSelectedDiscount(discount);
      localStorage.setItem('eka-applied-discount', discount.code);

      // Log the interaction
      logEvent('apply_discount', {
        discount_id: discount.id,
        discount_name: discount.name,
        percentage: discount.percentage,
        success: true
      }, code);

      return true;
    }
    
    // Log failed attempt
    logEvent('apply_discount_failed', {
      success: false,
      reason: 'Invalid code'
    }, code);

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
      availableDiscounts,
      applyDiscount,
      removeDiscount,
      calculateDiscountedPrice,
      getDiscountAmount,
      isLoading
    }}>
      {children}
    </DiscountContext.Provider>
  );
}

export const useDiscount = () => {
  const context = useContext(DiscountContext);
  if (context === undefined) {
    throw new Error('useDiscount must be used within a DiscountProvider');
  }
  return context;
};
