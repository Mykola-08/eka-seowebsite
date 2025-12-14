import { createContext } from 'react';

export interface BookingContextType {
  navigateToBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);
