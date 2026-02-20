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
      <section className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Option 1: Direct Contact */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-green-50/50 rounded-[2.5rem] p-8 sm:p-12 text-center hover:bg-green-50 transition-all duration-300 border border-green-100 shadow-sm group hover:scale-[1.01]"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-green-600 stroke-[1.5px]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                {t('booking.direct.title')}
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                {t('booking.direct.description')}
              </p>
              <a
                href="https://wa.me/34658867133"
                onClick={() => logEvent('booking_page_whatsapp_click')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('booking.direct.button')}
              </a>
            </motion.div>

            {/* Option 2: Form */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-blue-50/50 rounded-[2.5rem] p-8 sm:p-12 text-center hover:bg-blue-50 transition-all duration-300 border border-blue-100 shadow-sm group hover:scale-[1.01]"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-blue-600 stroke-[1.5px]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                {t('booking.form.title')}
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                {t('booking.form.description')}
              </p>
              <button
                onClick={() => {
                    logEvent('booking_page_toggle_form', { show: !showForm });
                    setShowForm(!showForm);
                }}
                className={`btn w-full py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  showForm 
                    ? 'btn-neutral shadow-none' 
                    : 'btn-primary shadow-blue-500/20'
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
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-16 overflow-hidden max-w-4xl mx-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                  {t('booking.form.quickTitle')}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-3 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
                  aria-label={t('booking.form.close')}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    {t('booking.form.nameRequired')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light"
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
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light appearance-none text-gray-600"
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
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light appearance-none text-gray-600"
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
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light appearance-none text-gray-600"
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
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light appearance-none text-gray-600"
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
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-all font-light"
                    placeholder={t('booking.form.objectivePlaceholder')}
                  />
                </div>
              </div>

              <button
                onClick={handleFormSubmit}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8 py-5 rounded-full transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-green-500/20 hover:shadow-green-500/30 flex items-center justify-center text-lg gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                {t('booking.form.submit')}
              </button>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-gray-50/50">
        <div className="section-container max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-12 tracking-tight">
            {t('booking.help.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">{t('booking.help.contactDirect')}</h4>
              <div className="space-y-2 text-gray-600 font-light">
                <p>{t('booking.help.email')}</p>
                <p>{t('booking.help.address')}</p>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">{t('booking.help.hours')}</h4>
              <div className="space-y-2 text-gray-600 font-light">
                <p>{t('booking.help.hours.weekdays')}</p>
                <p>{t('booking.help.hours.saturday')}</p>
                <p>{t('booking.help.hours.sunday')}</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm font-light">
            {t('booking.help.footer')}
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
