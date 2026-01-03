import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAnalytics } from '@/react-app/hooks/useAnalytics';
import { BookingContext } from '@/react-app/contexts/bookingContext';
import SmartBookingPopup from './SmartBookingPopup';

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logEvent } = useAnalytics();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const navigateToBooking = (service?: string) => {
    logEvent('initiate_booking', { source: 'provider', service });
    setPreselectedService(service);
    setIsPopupOpen(true);
  };

  return (
    <BookingContext.Provider value={{ navigateToBooking }}>
      {children}
      <SmartBookingPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        preselectedService={preselectedService}
      />
    </BookingContext.Provider>
  );
}
