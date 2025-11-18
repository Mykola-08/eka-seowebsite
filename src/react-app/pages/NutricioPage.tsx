import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { Clock } from 'lucide-react';
import { useBooking } from '../components/BookingProvider';

export default function NutricioPage() {
  const { navigateToBooking } = useBooking();

  const benefits = [
    'Hàbits alimentaris clars i sostenibles',
    'Més energia i vitalitat',
    'Suport en la gestió del pes i la composició corporal',
    'Prevenció i salut a llarg termini'
  ];

  const testimonials = [
    {
      name: 'Carla Ferrer',
      text: 'L\'assessorament nutricional ha canviat completament la meva relació amb el menjar. Ara tinc més energia i em sento molt millor.',
      rating: 5
    },
    {
      name: 'Pere Castell', 
      text: 'Els consells personalitzats m\'han ajudat a crear hàbits saludables que puc mantenir fàcilment. Resultat: més vitalitat cada dia.',
      rating: 5
    }
  ];

  const sessionTypes = [
    {
      name: 'Primera sessió',
      duration: '60 min',
      description: 'Avaluació completa i pla personalitzat'
    },
    {
      name: 'Seguiment',
      duration: '45 min', 
      description: 'Ajust del pla i resolució de dubtes'
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Assessorament Nutricional Personalitzat a Barcelona | EKA Balance"
        description="Nutrició conscient i personalitzada a Barcelona. Menjar bé per viure millor. Sessió inicial i seguiment personalitzat. Reserva ara."
        keywords="nutrició Barcelona, assessorament nutricional, hàbits alimentaris, energia, gestió pes, salut alimentària"
      />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-700 font-medium text-sm">Alimentació conscient</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Nutrició conscient
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Menjar amb sentit per tenir energia real.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Assessorament personalitzat per hàbits clars, digestió i energia. Beneficis clau: hàbits sostenibles, vitalitat i suport a la composició corporal.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={navigateToBooking}
                  className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                >
                  Reserva ara
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Fruites i verdures fresques representant una alimentació saludable i colorida"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Nutrició personalitzada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Reserva la teva sessió
            </h2>
            <p className="text-xl text-gray-600">
              Omple el formulari i t'enviarem un missatge preparat per WhatsApp
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={navigateToBooking}
              className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              Reserva ara
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Beneficis de l'assessorament nutricional
            </h2>
            <p className="text-xl text-gray-600">
              Descobreix com una bona alimentació pot transformar la teva vida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-2xl">
                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Tipus de sessions
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Acompanyament personalitzat per als teus objectius nutricionals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {sessionTypes.map((session, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {session.name}
                </h3>
                <p className="text-lg text-green-600 font-medium mb-4">
                  {session.duration}
                </p>
                <p className="text-gray-600 mb-6">
                  {session.description}
                </p>
                <button
                  onClick={navigateToBooking}
                  className="w-full bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-3 rounded-full transition-colors duration-200"
                >
                  Reserva ara
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Què diuen els nostres clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-50 rounded-3xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-green-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            Comença a menjar millor avui mateix
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserva la teva sessió d'assessorament nutricional i descobreix com alimentar-te per viure millor
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={navigateToBooking}
              className="bg-white text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              Reserva ara
            </button>
          </div>
        </div>
      </section>

      
    </Layout>
  );
}
