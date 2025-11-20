import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';

interface BookingContextType {
  navigateToBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

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
