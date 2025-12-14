import { useContext } from 'react';
import { DiscountContext } from '@/react-app/contexts/DiscountContext';

export const useDiscount = () => {
  const context = useContext(DiscountContext);
  if (context === undefined) {
    throw new Error('useDiscount must be used within a DiscountProvider');
  }
  return context;
};
