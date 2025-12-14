import React, { createContext } from 'react';
import { useNavigate } from 'react-router';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

interface BookingContextType {
  navigateToBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logEvent } = useAnalytics();

  const navigateToBooking = () => {
    logEvent('initiate_booking', { source: 'provider' });
    navigate('/booking');
  };

  return (
    <BookingContext.Provider value={{ navigateToBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
