import { useContext } from 'react';
import { BookingContext } from '@/contexts/bookingContext';

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  
  // In our provider, navigateToBooking is the function that opens the popup
  const openBooking = () => context.navigateToBooking();

  return {
    ...context,
    openBooking
  };
}
