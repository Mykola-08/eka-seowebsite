import { createContext } from 'react';

export interface BookingContextType {
  navigateToBooking: (service?: string) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);
