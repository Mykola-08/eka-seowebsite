import { useState } from 'react';
import { PaperPlaneTilt, Phone, EnvelopeSimple, MapPin, Clock, CheckCircle, CircleNotch } from 'phosphor-react';
import { Button, Alert, Input, Textarea } from 'keep-react';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
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
  const [error, setError] = useState<string | null>(null);

  const services = [
    'Massatge Bàsic (1h)',
    'Massatge Complet (1,5h)',
    'Massatge Premium (2h)',
    'Kinesiologia Barcelona (1h)',
    'Plans VIP (Bronze/Silver/Gold)',
    'Consulta general'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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
        throw new Error('Error enviant el formulari');
      }
    } catch (err) {
      setError('No s\'ha pogut enviar el missatge. Si us plau, truca\'ns directament.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-3xl shadow-sm border border-gray-100 p-8 ${className}`}>
        <Alert color="success" withBg className="mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-medium text-green-900 mb-4">
              Missatge enviat correctament!
            </h3>
            <p className="text-green-700 mb-6">
              T'intentarem contactar el més aviat possible. Si és urgent, pots trucar-nos directament.
            </p>
            <Button color="success" size="lg" className="shadow-lg">
              <Phone size={16} className="mr-2" />
              658 867 133
            </Button>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-gray-100 ${className}`}>
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Contacta amb nosaltres
          </h2>
          <p className="text-gray-600">
            T'ajudem a trobar el millor tractament per a tu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="El teu nom"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="email@exemple.com"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telèfon
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="658 867 133"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Servei d'interès
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">Selecciona un servei</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Missatge
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Explica'ns què necessites o qualsevol dubte que tinguis..."
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Com prefereixes que et contactem?
              </label>
              <select
                name="preferred_contact"
                value={formData.preferred_contact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="email">Email</option>
                <option value="phone">Telèfon</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Millor hora per contactar
              </label>
              <select
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">Qualsevol hora</option>
                <option value="morning">Matí (9:00-12:00)</option>
                <option value="afternoon">Tarda (12:00-18:00)</option>
                <option value="evening">Vespre (18:00-21:00)</option>
              </select>
            </div>
          </div>

          {error && (
            <Alert color="error" withBg>
              <p className="text-sm">{error}</p>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            color="warning"
            size="lg"
            className="w-full shadow-lg"
          >
            {isSubmitting ? (
              <>
                <CircleNotch size={20} className="mr-2 animate-spin" />
                Enviant...
              </>
            ) : (
              <>
                <PaperPlaneTilt size={20} className="mr-2" />
                Enviar missatge
              </>
            )}
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                <Phone size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Telèfon</h4>
              <a 
                href="tel:+34658867133"
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                658 867 133
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                <EnvelopeSimple size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Email</h4>
              <a 
                href="mailto:contact@ekabalance.com"
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                contact@ekabalance.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3">
                <MapPin size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Adreça</h4>
              <p className="text-gray-600 text-sm">
                Carrer Pelai, 12<br />
                Barcelona
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start">
              <Clock size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Horaris d'atenció:</p>
                <p>Dilluns-Divendres: 9:00-20:00</p>
                <p>Dissabtes: 9:00-14:00</p>
                <p>Diumenges: Tancat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
