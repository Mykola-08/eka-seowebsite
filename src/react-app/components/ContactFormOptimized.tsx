import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2, Clock, MessageCircle } from 'lucide-react';
import { useSupabaseAuth } from '@/react-app/hooks/useSupabaseAuth';
import { supabase } from '@/react-app/lib/supabase';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferred_contact: 'email' | 'phone' | 'whatsapp';
  preferred_time: string;
}

export default function ContactFormOptimized() {
  const { user } = useSupabaseAuth();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred_contact: 'email',
    preferred_time: ''
  });

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data } = await supabase
          .from('user_profiles')
          .select('full_name, email, phone')
          .eq('user_id', user.id)
          .single();
        
        if (data) {
          setFormData(prev => ({
            ...prev,
            name: data.full_name || prev.name,
            email: data.email || user.email || prev.email,
            phone: data.phone || prev.phone
          }));
        } else if (user.email) {
          setFormData(prev => ({
            ...prev,
            email: user.email || prev.email
          }));
        }
      };
      fetchProfile();
    }
  }, [user]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Massatge Bàsic (1h)',
    'Massatge Complet (1,5h)', 
    'Massatge Premium (2h)',
    'Kinesiologia Holística',
    'Nutrició Conscient',
    'Revisió 360°',
    'Plans VIP',
    'Altres consultes'
  ];

  const timeSlots = [
    'Matí (9:00 - 12:00)',
    'Migdia (12:00 - 15:00)', 
    'Tarda (15:00 - 18:00)',
    'Vespre (18:00 - 21:00)',
    'Sense preferència'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferred_contact: 'email',
          preferred_time: ''
        });
      } else {
        throw new Error('Error al enviar el formulari');
      }
    } catch (err) {
      setError('Hi ha hagut un error al enviar el missatge. Si us plau, torna-ho a intentar.');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 text-center border border-green-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Missatge enviat correctament!
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Gràcies per contactar amb nosaltres. Ens posarem en contacte amb tu molt aviat.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200"
          >
            Enviar un altre missatge
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Parla amb nosaltres
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Estem aquí per ajudar-te en el teu camí cap al benestar. Contacta amb nosaltres 
              i descobreix com podem millorar la teva qualitat de vida.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Telèfon i WhatsApp</h4>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+34658867133" className="hover:text-blue-600 transition-colors text-lg font-medium">
                    658 867 133
                  </a>
                </p>
                <p className="text-sm text-gray-500">WhatsApp disponible 24/7</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:contact@ekabalance.com" className="hover:text-purple-600 transition-colors text-lg">
                    contact@ekabalance.com
                  </a>
                </p>
                <p className="text-sm text-gray-500">Resposta en menys de 24h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Ubicació</h4>
                <p className="text-gray-600 mb-2">
                  Carrer Pelai, 12<br />
                  08001 Barcelona
                </p>
                <p className="text-sm text-gray-500">Metro: L1 i L2 (Universitat)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Horaris d'atenció</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dilluns - Divendres:</span>
                    <span className="font-medium text-gray-900">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dissabte:</span>
                    <span className="font-medium text-gray-900">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Diumenge:</span>
                    <span className="font-medium text-gray-900">10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Envia'ns un missatge
                </h3>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="El teu nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="el.teu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telèfon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servei d'interès
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona un servei</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Missatge *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Explica'ns com podem ajudar-te..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferència de contacte
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="email"
                        checked={formData.preferred_contact === 'email'}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                      />
                      <span className="ml-3 text-sm text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="phone"
                        checked={formData.preferred_contact === 'phone'}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                      />
                      <span className="ml-3 text-sm text-gray-700">Telèfon</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferred_contact"
                        value="whatsapp"
                        checked={formData.preferred_contact === 'whatsapp'}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500 w-4 h-4"
                      />
                      <span className="ml-3 text-sm text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                    Horari preferit
                  </label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecciona un horari</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Enviant...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar missatge
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4 text-sm">
                O contacta'ns directament:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/34658867133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="tel:+34658867133"
                  className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Trucar ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
