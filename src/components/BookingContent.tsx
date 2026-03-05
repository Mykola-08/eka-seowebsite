'use client';

import { useState } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import PageLayout from './PageLayout';
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
  const { logEvent } = useAnalytics();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    service: '',
    objective: '',
    location: '',
    availability: '',
    timeSlot: ''
  });

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


    const whatsappUrl = `https://wa.me/34658867133?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <PageLayout
      hero={{
        title: t('booking.hero.title') || "Reserva la teva cita",
        subtitle: t('booking.hero.subtitle') || "Tria l'opció que et sigui més còmoda per començar el teu camí cap al benestar.",
        badge: t('booking.badge') || "Reserves",
        icon: <Calendar className="w-4 h-4" />
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 sm:p-12 text-center border border-gray-100/50 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600 stroke-[2px]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                {t('booking.direct.title')}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-normal text-base">
                {t('booking.direct.description')}
              </p>
              <a
                href="https://wa.me/34658867133"
                onClick={() => logEvent('booking_page_whatsapp_click')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="xl" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent">
                  {t('booking.direct.button')}
                </Button>
              </a>
            </motion.div>

            {/* Option 2: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 sm:p-12 text-center border border-gray-100/50 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-blue-600 stroke-[2px]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                {t('booking.form.title')}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-normal text-base">
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
            </motion.div>
          </div>

          {/* Quick Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12 overflow-hidden max-w-3xl mx-auto"
              >
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    {t('booking.form.quickTitle')}
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
                    aria-label={t('booking.form.close')}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.nameRequired')}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal outline-none"
                      placeholder={t('booking.form.namePlaceholder')}
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.serviceRequired')}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleFormChange('service', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal appearance-none text-gray-600 outline-none"
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
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.location')}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => handleFormChange('location', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal appearance-none text-gray-600 outline-none"
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
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.timeSlot')}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => handleFormChange('timeSlot', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal appearance-none text-gray-600 outline-none"
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
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.availability')}
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => handleFormChange('availability', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal appearance-none text-gray-600 outline-none"
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
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t('booking.form.objective')}
                    </label>
                    <input
                      type="text"
                      value={formData.objective}
                      onChange={(e) => handleFormChange('objective', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition font-normal outline-none"
                      placeholder={t('booking.form.objectivePlaceholder')}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleFormSubmit}
                  size="xl"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('booking.form.submit')}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info - Revised */}
      <section className="py-16 sm:py-24 border-t border-gray-200/50">
        <div className="section-container max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-12 tracking-tight">
            {t('booking.help.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('booking.help.contactDirect')}</h4>
              <div className="space-y-1 text-gray-500 text-sm">
                <p>{t('booking.help.email')}</p>
                <p>{t('booking.help.address')}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('booking.help.hours')}</h4>
              <div className="space-y-1 text-gray-500 text-sm">
                <p>{t('booking.help.hours.weekdays')}</p>
                <p>{t('booking.help.hours.saturday')}</p>
                <p>{t('booking.help.hours.sunday')}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm font-normal">
            {t('booking.help.footer')}
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
