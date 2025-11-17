import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router';

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

  const navigateToBooking = () => {
    navigate('/booking');
  };

  return (
    <BookingContext.Provider value={{ navigateToBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
