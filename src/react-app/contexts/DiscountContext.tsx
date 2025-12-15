import React, { useState, useEffect, createContext } from 'react';
import { supabase } from '@/react-app/lib/supabase';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

export interface Discount {
  id: string;
  name: string;
  percentage: number;
  code: string;
  description?: string;
  isActive: boolean;
}

export interface DiscountContextType {
  selectedDiscount: Discount | null;
  availableDiscounts: Discount[];
  applyDiscount: (code: string) => Promise<boolean>;
  removeDiscount: () => void;
  calculateDiscountedPrice: (originalPrice: number) => number;
  getDiscountAmount: (originalPrice: number) => number;
  isLoading: boolean;
}

export const DiscountContext = createContext<DiscountContextType | undefined>(undefined);

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
        } else {
          // Fallback discounts if Supabase returns no data
          const fallbackDiscounts: Discount[] = [
            { id: '1', name: 'Amic Mykola', percentage: 20, code: 'MYKOLA20', description: 'Descompte especial del 20% per a amics de Mykola', isActive: true },
            { id: '2', name: 'Conegut Mykola', percentage: 10, code: 'MYKOLA10', description: 'Descompte del 10% per a coneguts de Mykola', isActive: true },
            { id: '3', name: 'Benvinguda', percentage: 20, code: 'WELCOME20', description: 'Descompte de benvinguda', isActive: true }
          ];
          setAvailableDiscounts(fallbackDiscounts);
        }
      } catch (error) {
        console.error('Error fetching discounts:', error);
        // Fallback discounts on error
        const fallbackDiscounts: Discount[] = [
          { id: '1', name: 'Amic Mykola', percentage: 20, code: 'MYKOLA20', description: 'Descompte especial del 20% per a amics de Mykola', isActive: true },
          { id: '2', name: 'Conegut Mykola', percentage: 10, code: 'MYKOLA10', description: 'Descompte del 10% per a coneguts de Mykola', isActive: true },
          { id: '3', name: 'Benvinguda', percentage: 20, code: 'WELCOME20', description: 'Descompte de benvinguda', isActive: true }
        ];
        setAvailableDiscounts(fallbackDiscounts);
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

