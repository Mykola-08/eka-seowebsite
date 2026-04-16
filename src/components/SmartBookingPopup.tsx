'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, MessageCircle, FileText, ArrowLeft } from '@/lib/icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useScrollLock } from '@/hooks/useScrollLock';

interface SmartBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function SmartBookingPopup({ isOpen, onClose, preselectedService }: SmartBookingPopupProps) {
  const { t } = useLanguage();
  const { logEvent } = useAnalytics();
  const [step, setStep] = useState<'choice' | 'form'>('choice');
  const [formData, setFormData] = useState({
    name: '',
    service: preselectedService || '',
    timePreference: ''
  });
  const dialogRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);

  // Keyboard escape handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];
    
    firstEl.focus();
    
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    dialog.addEventListener('keydown', handleTab);
    return () => dialog.removeEventListener('keydown', handleTab);
  }, [isOpen, step]);

  const handleQuickWhatsApp = useCallback(() => {
    logEvent('booking_whatsapp_click', { type: 'quick' });
    // Track lead in HubSpot
    fetch('/api/hubspot/track-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service: preselectedService }),
    }).catch(() => {});
    const message = encodeURIComponent(t('booking.whatsapp.greetingGeneric'));
    window.open(`https://wa.me/34644506377?text=${message}`, '_blank');
    onClose();
  }, [logEvent, t, onClose, preselectedService]);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    logEvent('booking_whatsapp_click', { 
        type: 'form',
        service: formData.service 
    });
    // Track lead in HubSpot
    fetch('/api/hubspot/track-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        service: formData.service,
        timePreference: formData.timePreference,
      }),
    }).catch(() => {});
    const message = encodeURIComponent(
      t('booking.whatsapp.greetingGeneric') + '\n\n' +
      t('booking.whatsapp.name') + `: ${formData.name}\n` +
      t('booking.whatsapp.serviceLabel') + `: ${formData.service}\n` +
      t('booking.whatsapp.preference') + `: ${formData.timePreference}`
    );
    window.open(`https://wa.me/34644506377?text=${message}`, '_blank');
    onClose();
  }, [logEvent, t, formData, onClose]);

  const services = [
    t('booking.service.consultation'),
    t('services.massage.title'),
    t('services.kinesiology.title'),
    t('services.nutrition.title'),
    t('services.revision360.title'),
    t('technique.movement_lesson.title'),
    t('technique.jka.title'),
    t('technique.osteobalance.title'),
    t('booking.service.other')
  ];

  if (!isOpen) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-90 flex items-center justify-center p-4 overflow-y-hidden" onClick={onClose} role="presentation">
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('booking.smart.title')}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-zinc-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t('booking.smart.close') || 'Close'}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted dark:bg-zinc-800 hover:bg-muted dark:hover:bg-zinc-700 flex items-center justify-center transition-colors z-10"
        >
          <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5 text-foreground/80 dark:text-muted-foreground"  />
        </button>

        <div className="p-5 sm:p-8">
          <AnimatePresence mode="wait">
            {step === 'choice' ? (
              <motion.div
                key="choice"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-light text-foreground dark:text-white">
                    {t('booking.smart.title')}
                  </h2>
                  <p className="text-muted-foreground dark:text-muted-foreground">
                    {t('booking.smart.subtitle')}
                  </p>
                </div>

                <div className="grid gap-4">
                  <button
                    onClick={handleQuickWhatsApp}
                    className="flex items-center p-4 rounded-3xl border-2 border-0 hover:border-0 bg-green-50/50 hover:bg-green-50 transition duration-200 group text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 transition-colors">
                      <HugeiconsIcon icon={Message01Icon} className="w-6 h-6 text-green-600"  />
                    </div>
                    <div>
                      <h3 className="font-normal text-gray-900 dark:text-gray-100">
                        {t('booking.smart.quick')}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        {t('booking.smart.quickDesc')}
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setStep('form')}
                    className="flex items-center p-4 rounded-3xl border-2 border-0 hover:border-0 bg-blue-50/50 hover:bg-blue-50 transition duration-200 group text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 transition-colors">
                      <HugeiconsIcon icon={File01Icon} className="w-6 h-6 text-blue-600"  />
                    </div>
                    <div>
                      <h3 className="font-normal text-gray-900 dark:text-gray-100">
                        {t('booking.smart.form')}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        {t('booking.smart.formDesc')}
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setStep('choice')}
                    className="mr-4 p-2 hover:bg-muted dark:hover:bg-zinc-800 rounded-full transition-colors"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} className="w-5 h-5 text-foreground/80 dark:text-muted-foreground"  />
                  </button>
                  <h2 className="text-xl font-normal text-gray-900 dark:text-white">
                    {t('booking.smart.form')}
                  </h2>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-normal text-gray-700 dark:text-gray-300 mb-1">
                      {t('booking.smart.name')}
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl  border-0 dark:border-0 bg-muted/40 dark:bg-zinc-800 focus:ring-2 focus:ring-amber-500 outline-hidden transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-service" className="block text-sm font-normal text-gray-700 dark:text-gray-300 mb-1">
                      {t('booking.smart.service')}
                    </label>
                    <select
                      id="booking-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl  border-0 dark:border-0 bg-muted/40 dark:bg-zinc-800 focus:ring-2 focus:ring-amber-500 outline-hidden transition"
                    >
                      <option value="">{t('booking.smart.service.placeholder')}</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-time" className="block text-sm font-normal text-gray-700 dark:text-gray-300 mb-1">
                      {t('booking.smart.time')}
                    </label>
                    <input
                      id="booking-time"
                      type="text"
                      placeholder={t('booking.smart.time.placeholder')}
                      value={formData.timePreference}
                      onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-3xl  border-0 dark:border-0 bg-muted/40 dark:bg-zinc-800 focus:ring-2 focus:ring-amber-500 outline-hidden transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-normal transition-colors flex items-center justify-center"
                  >
                    <HugeiconsIcon icon={Message01Icon} className="w-5 h-5 mr-2"  />
                    {t('booking.smart.send')}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>,
    document.body
  ) : null;
}

