'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, MessageCircle, Calendar01Icon, Message01Icon, Cancel01Icon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import PageLayout from './PageLayout';
import FAQ from '@/components/FAQ';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  service: string;
  objective: string;
  location: string;
  availability: string;
  timeSlot: string;
}

export default function BookingContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const { logEvent } = useAnalytics();
  
  // Get initial service from URL if present
  const initialService = searchParams.get('service') || '';
  const initialShowForm = searchParams.has('service');

  const [showForm, setShowForm] = useState(initialShowForm);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    service: initialService,
    objective: '',
    location: '',
    availability: '',
    timeSlot: ''
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceParam !== formData.service) {
      // Defer state updates to avoid synchronous setState in effect body
      const timer = setTimeout(() => {
        setFormData(prev => ({ ...prev, service: serviceParam }));
        setShowForm(true);
        const formElement = document.getElementById('booking-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [searchParams, formData.service]);

  const services = [
    t('booking.options.service.massage'),
    t('booking.options.service.kinesiology'),
    t('booking.options.service.osteobalance'),
    t('booking.options.service.movementLesson'),
    t('booking.options.service.feldenkrais'),
    t('booking.options.service.online'),
    t('booking.options.service.other')
  ];

  const locations = [
    t('booking.options.location.barcelona'),
    t('booking.options.location.rubi'),
    t('booking.options.location.online')
  ];

  const availabilityOptions = [
    t('booking.options.availability.tomorrow'),
    t('booking.options.availability.dayAfterTomorrow'),
    t('booking.options.availability.nextWeek'),
    t('booking.options.availability.weekend'),
    t('booking.options.availability.flexible')
  ];

  const timeSlots = [
    t('booking.options.timeSlot.morning'),
    t('booking.options.timeSlot.noon'),
    t('booking.options.timeSlot.afternoon'),
    t('booking.options.timeSlot.evening')
  ];

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `${t('booking.whatsapp.greeting', { name: formData.name })}

${t('booking.whatsapp.service', { service: formData.service })}
${t('booking.whatsapp.comments', { comments: formData.objective })}
${t('booking.whatsapp.location', { location: formData.location })}
${t('booking.whatsapp.date', { date: formData.availability })}
${t('booking.whatsapp.time', { time: formData.timeSlot })}`;

    return encodeURIComponent(message);
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.service) {
      alert(t('booking.form.validationError'));
      return;
    }
    logEvent('booking_page_submit', {
      service: formData.service,
      location: formData.location
    });

    // Track lead in HubSpot
    fetch('/api/hubspot/track-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        service: formData.service,
        location: formData.location,
        timePreference: formData.timeSlot || formData.availability,
      }),
    }).catch(() => {});

    const whatsappUrl = `https://wa.me/34658867133?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageLayout
      hero={{
        title: t('booking.hero.title') || "Reserva la teva cita",
        subtitle: t('booking.hero.subtitle') || "Tria l'opció que et sigui més còmoda per començar el teu camí cap al benestar.",
        badge: t('booking.badge') || "Reserves",
        icon: <Calendar01Icon className="w-4 h-4" />
      }}
      className="bg-secondary"
    >
      {/* Booking Options Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Option 1: Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            >
            <Card className="rounded-3xl p-8 sm:p-12 text-center border-border/50 transition duration-300 h-full">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Message01Icon className="w-8 h-8 text-primary stroke-[2px]" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                {t('booking.direct.title')}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-normal text-base">
                {t('booking.direct.description')}
              </p>
              <a
                href="https://wa.me/34658867133"
                onClick={() => {
                  logEvent('booking_page_whatsapp_click');
                  // Track lead in HubSpot
                  fetch('/api/hubspot/track-booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({}),
                  }).catch(() => {});
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="xl" className="w-full ] ]">
                  {t('booking.direct.button')}
                </Button>
              </a>
            </Card>
            </motion.div>

            {/* Option 2: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
            <Card className="rounded-3xl p-8 sm:p-12 text-center border-border/50 transition duration-300 h-full">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar01Icon className="w-8 h-8 text-primary stroke-[2px]" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                {t('booking.form.title')}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-normal text-base">
                {t('booking.form.description')}
              </p>
              <Button
                onClick={() => {
                  logEvent('booking_page_toggle_form', { show: !showForm });
                  setShowForm(!showForm);
                }}
                variant={showForm ? "outline" : "default"}
                size="xl"
                className="w-full"
              >
                {showForm ? t('booking.form.close') : t('booking.form.button')}
              </Button>
            </Card>
            </motion.div>
          </div>

          {/* Quick Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                id="booking-form"
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
              <Card className="rounded-3xl border border-border p-8 sm:p-12 overflow-hidden max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                    {t('booking.form.quickTitle')}
                  </h3>
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="ghost"
                    size="icon"
                    aria-label={t('booking.form.close')}
                  >
                    <Cancel01Icon className="w-6 h-6" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.nameRequired')}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder={t('booking.form.namePlaceholder')}
                      className="bg-muted/40 border-0 focus:bg-card"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.serviceRequired')}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleFormChange('service', e.target.value)}
                      className="flex h-12 w-full rounded-3xl bg-muted/40 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:bg-card focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors text-foreground/80 appearance-none outline-hidden"
                    >
                      <option value="">{t('booking.form.servicePlaceholder')}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.location')}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => handleFormChange('location', e.target.value)}
                      className="flex h-12 w-full rounded-3xl bg-muted/40 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:bg-card focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors text-foreground/80 appearance-none outline-hidden"
                    >
                      <option value="">{t('booking.form.locationPlaceholder')}</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Time Slot */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.timeSlot')}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => handleFormChange('timeSlot', e.target.value)}
                      className="flex h-12 w-full rounded-3xl bg-muted/40 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:bg-card focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors text-foreground/80 appearance-none outline-hidden"
                    >
                      <option value="">{t('booking.form.timeSlotPlaceholder')}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Availability */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.availability')}
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => handleFormChange('availability', e.target.value)}
                      className="flex h-12 w-full rounded-3xl bg-muted/40 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:bg-card focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors text-foreground/80 appearance-none outline-hidden"
                    >
                      <option value="">{t('booking.form.availabilityPlaceholder')}</option>
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Objective */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-foreground/80 ml-1">
                      {t('booking.form.objective')}
                    </label>
                    <Input
                      type="text"
                      value={formData.objective}
                      onChange={(e) => handleFormChange('objective', e.target.value)}
                      placeholder={t('booking.form.objectivePlaceholder')}
                      className="bg-muted/40 border-0 focus:bg-card"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleFormSubmit}
                  variant="default"
                  size="xl"
                  className="w-full ] ]"
                >
                  <Message01Icon className="w-5 h-5 mr-2" />
                  {t('booking.form.submit')}
                </Button>
              </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info - Revised */}
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-12 tracking-tight">
            {t('booking.help.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-8 rounded-3xl border border-border">
              <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{t('booking.help.contactDirect')}</h4>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>{t('booking.help.email')}</p>
                <p>{t('booking.help.address')}</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border">
              <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{t('booking.help.hours')}</h4>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>{t('booking.help.hours.weekdays')}</p>
                <p>{t('booking.help.hours.saturday')}</p>
                <p>{t('booking.help.hours.sunday')}</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm font-normal">
            {t('booking.help.footer')}
          </p>
        </div>
      </section>

      {/* FAQ Section from Contact page merged here */}
      <FAQ 
        title={t('contact.faq.title')}
        subtitle={t('contact.faq.subtitle') || 'Everything you need to know about contacting us'}
        items={[
            { id: '1', question: t('contact.faq.q1.title'), answer: t('contact.faq.q1.answer') },
            { id: '2', question: t('contact.faq.q2.title'), answer: t('contact.faq.q2.answer') },
            { id: '3', question: t('contact.faq.q3.title'), answer: t('contact.faq.q3.answer') },
            { id: '4', question: t('contact.faq.q4.title'), answer: t('contact.faq.q4.answer') }
        ]}
      />
    </PageLayout>
  );
}
