import { useState, useEffect } from 'react';
import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Calendar, Clock, CheckCircle, MessageCircle, ChevronDown, X } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';
import { useSupabaseAuth } from '@/react-app/hooks/useSupabaseAuth';
import { supabase } from '@/react-app/lib/supabase';

interface FormData {
  name: string;
  service: string;
  objective: string;
  location: string;
  availability: string;
  timeSlot: string;
}

export default function BookingPage() {
  const { t } = useLanguage();
  const { user } = useSupabaseAuth();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    service: '',
    objective: '',
    location: '',
    availability: '',
    timeSlot: ''
  });

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data } = await supabase
          .from('user_profiles')
          .select('full_name')
          .eq('user_id', user.id)
          .single();
        
        if (data?.full_name) {
          setFormData(prev => ({ ...prev, name: data.full_name }));
        } else if (user.email) {
          // Fallback to email username if no profile name
          setFormData(prev => ({ ...prev, name: user.email!.split('@')[0] }));
        }
      };
      fetchProfile();
    }
  }, [user]);

  const services = [
    'Massatge',
    'Kinesiologia',
    'Osteobalance', 
    'Movement Lesson',
    'Feldenkrais',
    'Consulta Online',
    'Altres'
  ];

  const locations = [
    'Barcelona',
    'Rubí',
    'Online'
  ];

  const availabilityOptions = [
    'Demà',
    'Demà passat',
    'Setmana vinent',
    'Cap de setmana',
    'Flexible'
  ];

  const timeSlots = [
    'Matí (9:00-12:00)',
    'Migdia (12:00-15:00)',
    'Tarda (15:00-18:00)',
    'Vespre (18:00-21:00)'
  ];

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Hola, sóc ${formData.name}.

M'interessa: ${formData.service}
Necessito: ${formData.objective}
Preferència de lloc: ${formData.location}
Disponibilitat: ${formData.availability} – ${formData.timeSlot}

Gràcies!`;

    return encodeURIComponent(message);
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.service) {
      alert('Si us plau, omple almenys el nom i el servei d\'interès.');
      return;
    }

    const whatsappUrl = `https://wa.me/34658867133?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <SEOHead
        title={t('booking.title')}
        description={t('booking.description')}
        keywords="reservar sessió Barcelona, cita teràpia, massatge Barcelona, kinesiologia reserva"
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">{t('booking.badge')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            {t('booking.hero.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-blue-600 font-medium">{t('booking.hero.title').split(' ').slice(-1)[0]}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('booking.hero.subtitle')}
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm">
              <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-gray-700 font-medium">{t('booking.benefits.whatsapp')}</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-700 font-medium">{t('booking.benefits.flexible')}</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-700 font-medium">{t('booking.benefits.confirmation')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          {/* WhatsApp Contact Options */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 text-center mb-2">
                {t('booking.contact.title')}
              </h2>
              <p className="text-gray-600 text-center">
                {t('booking.contact.subtitle')}
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option 1: Direct Contact */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.direct.title')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('booking.direct.description')}
                  </p>
                  <a
                    href="https://wa.me/34658867133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('booking.direct.button')}
                  </a>
                </div>

                {/* Option 2: Form */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.form.title')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('booking.form.description')}
                  </p>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {showForm ? t('booking.form.hide') : t('booking.form.button')}
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showForm ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Quick Form */}
              {showForm && (
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl relative">
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {t('booking.form.quickTitle')}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('booking.form.nameRequired')}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('booking.form.namePlaceholder')}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('booking.form.serviceRequired')}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleFormChange('service', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferència de lloc
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => handleFormChange('location', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un lloc</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Franja horària
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => handleFormChange('timeSlot', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona una franja</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Disponibilitat
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) => handleFormChange('availability', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Quan pots venir?</option>
                        {availabilityOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Objective */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objectiu o tipus de dolor
                      </label>
                      <input
                        type="text"
                        value={formData.objective}
                        onChange={(e) => handleFormChange('objective', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: mal d'esquena, estrès, relaxació..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleFormSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 inline" />
                    {t('booking.form.submit')}
                  </button>
                </div>
              )}
            </div>
          </div>

          
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
            Necessites ajuda amb la reserva?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Contacta'ns directament</h4>
              <div className="space-y-2 text-gray-600">
                <p>📧 contact@ekabalance.com</p>
                <p>📍 Carrer Pelai, 12, Barcelona</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Horari d'atenció</h4>
              <div className="space-y-2 text-gray-600">
                <p>Dilluns - Divendres: 9:00 - 20:00</p>
                <p>Dissabte: 9:00 - 14:00</p>
                <p>Diumenge: Tancat</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Si tens qualsevol dubte sobre els nostres serveis o necessites ajuda amb la reserva, 
            no dubtis en contactar-nos. Estem aquí per ajudar-te.
          </p>
        </div>
      </section>
    </Layout>
  );
}
