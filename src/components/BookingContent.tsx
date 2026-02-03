'use client';

import { useState } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
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
    >
      {/* Booking Options Section */}
      <section className="py-12 relative">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Option 1: Direct Contact */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-green-100 shadow-sm group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 heading-3">
                {t('booking.direct.title')}
              </h3>
              <p className="text-body mb-8">
                {t('booking.direct.description')}
              </p>
              <a
                href="https://wa.me/34658867133"
                onClick={() => logEvent('booking_page_whatsapp_click')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg py-4 rounded-xl"
              >
                {t('booking.direct.button')}
              </a>
            </motion.div>

            {/* Option 2: Form */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-blue-100 shadow-sm group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 heading-3">
                {t('booking.form.title')}
              </h3>
              <p className="text-body mb-8">
                {t('booking.form.description')}
              </p>
              <button
                onClick={() => {
                    logEvent('booking_page_toggle_form', { show: !showForm });
                    setShowForm(!showForm);
                }}
                className={`btn w-full py-4 rounded-xl shadow-md ${
                  showForm 
                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                    : 'btn-primary'
                }`}
              >
                {showForm ? t('booking.form.close') : t('booking.form.button')}
              </button>
            </motion.div>
          </div>

          {/* Quick Form */}
          <AnimatePresence>
          {showForm && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-light text-gray-900 heading-3">
                  {t('booking.form.quickTitle')}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                  aria-label={t('booking.form.close')}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div>
                  <label className="label-text">
                    {t('booking.form.nameRequired')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="input-field"
                    placeholder={t('booking.form.namePlaceholder')}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="label-text">
                    {t('booking.form.serviceRequired')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleFormChange('service', e.target.value)}
                    className="input-field"
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
                <div>
                  <label className="label-text">
                    {t('booking.form.location')}
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                    className="input-field"
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
                <div>
                  <label className="label-text">
                    {t('booking.form.timeSlot')}
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => handleFormChange('timeSlot', e.target.value)}
                    className="input-field"
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
                <div className="md:col-span-2">
                  <label className="label-text">
                    {t('booking.form.availability')}
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => handleFormChange('availability', e.target.value)}
                    className="input-field"
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
                    <div className="md:col-span-2">
                      <label className="label-text">
                        {t('booking.form.objective')}
                      </label>
                      <input
                        type="text"
                        value={formData.objective}
                        onChange={(e) => handleFormChange('objective', e.target.value)}
                        className="input-field"
                        placeholder={t('booking.form.objectivePlaceholder')}
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleFormSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-md hover:shadow-lg flex items-center justify-center btn"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('booking.form.submit')}
                  </button>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="section-container text-center">
          <h3 className="heading-3 mb-8">
            {t('booking.help.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8 hover:shadow-md">
              <h4 className="font-medium text-gray-900 mb-4">{t('booking.help.contactDirect')}</h4>
              <div className="space-y-2 text-body">
                <p>{t('booking.help.email')}</p>
                <p>{t('booking.help.address')}</p>
              </div>
            </div>
            
            <div className="card p-8 hover:shadow-md">
              <h4 className="font-medium text-gray-900 mb-4">{t('booking.help.hours')}</h4>
              <div className="space-y-2 text-body">
                <p>{t('booking.help.hours.weekdays')}</p>
                <p>{t('booking.help.hours.saturday')}</p>
                <p>{t('booking.help.hours.sunday')}</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            {t('booking.help.footer')}
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
