import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { useDebouncedInput } from '../hooks/useDebouncedInput';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferred_contact: 'email' | 'phone';
  preferred_time: string;
}

export default function ContactFormEnhanced() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferred_contact: 'email',
    preferred_time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Debounced inputs to prevent focus loss
  const nameInput = useDebouncedInput(formData.name, {
    onCommit: (value) => setFormData(prev => ({ ...prev, name: value }))
  });
  
  const emailInput = useDebouncedInput(formData.email, {
    onCommit: (value) => setFormData(prev => ({ ...prev, email: value }))
  });
  
  const phoneInput = useDebouncedInput(formData.phone, {
    onCommit: (value) => setFormData(prev => ({ ...prev, phone: value }))
  });
  
  const messageInput = useDebouncedInput(formData.message, {
    onCommit: (value) => setFormData(prev => ({ ...prev, message: value }))
  });

  const services = [
    'Massatge Bàsic',
    'Massatge Complet', 
    'Massatge Premium',
    'Massatge VIP',
    'Kinesiologia Barcelona',
    'Revisió 360°',
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

    // Get final values from inputs
    const finalFormData = {
      ...formData,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      message: messageInput.value.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalFormData),
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
        // Reset input states
        nameInput.setValue('');
        emailInput.setValue('');
        phoneInput.setValue('');
        messageInput.setValue('');
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
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-green-50 rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Missatge enviat correctament!
          </h3>
          <p className="text-gray-600 mb-8">
            Gràcies per contactar amb nosaltres. Ens posarem en contacte amb tu molt aviat.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-4 rounded-xl transition-colors"
          >
            Enviar un altre missatge
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Informació de contacte
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Estem aquí per ajudar-te en el teu camí cap al benestar. Contacta amb nosaltres 
              i descobreix com podem millorar la teva qualitat de vida.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Ubicació</h4>
                <p className="text-gray-600">
                  Carrer Pelai, 12<br />
                  08001 Barcelona
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Telèfon</h4>
                <p className="text-gray-600">
                  <a href="tel:+34933123456" className="hover:text-blue-600 transition-colors">
                    +34 933 12 34 56
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:info@ekabalance.com" className="hover:text-purple-600 transition-colors">
                    info@ekabalance.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="font-medium text-gray-900 mb-4">Horaris d'atenció</h4>
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

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
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
                  {...nameInput.inputProps}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
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
                  {...emailInput.inputProps}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
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
                {...phoneInput.inputProps}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
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
                {...messageInput.inputProps}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                placeholder="Explica'ns com podem ajudar-te..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferència de contacte
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="email"
                      checked={formData.preferred_contact === 'email'}
                      onChange={handleChange}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="phone"
                      checked={formData.preferred_contact === 'phone'}
                      onChange={handleChange}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Telèfon</span>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
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
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
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
        </div>
      </div>
    </div>
  );
}
