import Layout from '@/react-app/components/Layout';
import SEOOptimized from '@/react-app/components/SEOOptimized';
import ContactFormOptimized from '@/react-app/components/ContactFormOptimized';
import { Star, MessageCircle, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <SEOOptimized
      title="Contacte - EKA Balance | Centre de Teràpies Holístiques a Barcelona"
      description="Contacta amb EKA Balance per reserves i consultes. Centres a Barcelona i Rubí. Telefon 658 867 133, email contact@ekabalance.com"
      keywords="contacte EKA Balance, reserves massatge Barcelona, teràpies holístiques Rubí, centre benestar Barcelona"
      url="https://ekabalance.mocha.app/contacte"
    >
      <Layout>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Estem aquí per tu</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Contacta amb{' '}
              <span className="text-blue-600 font-medium">nosaltres</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Estem aquí per ajudar-te en el teu camí cap al benestar. Contacta'ns per reserves, 
              consultes o qualsevol dubte sobre els nostres serveis.
            </p>

            {/* Quick contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="https://wa.me/34658867133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp 658 867 133
              </a>
              <a
                href="tel:+34658867133"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Trucar ara
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-light text-gray-900">4.93</span>
                  <Star className="w-6 h-6 text-yellow-400 fill-current ml-1" />
                </div>
                <p className="text-gray-600">Valoració dels clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  1500+
                </div>
                <p className="text-gray-600">Sessions realitzades</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  96
                </div>
                <p className="text-gray-600">Clients feliços</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  500
                </div>
                <p className="text-gray-600">Casos resolts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <ContactFormOptimized />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              Preguntes freqüents
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Com puc reservar una cita?</h3>
                <p className="text-gray-600">
                  Pots reservar una cita escrivint per WhatsApp o Telegram al 658 867 133, trucant-nos al mateix número o enviant-nos un email.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quina és la política de cancel·lació?</h3>
                <p className="text-gray-600">
                  Les cancel·lacions gratuïtes es poden fer fins a 24 hores abans de la cita. Els usuaris VIP poden cancel·lar fins a 12 hores abans.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Oferiu descomptes o plans VIP?</h3>
                <p className="text-gray-600">
                  Sí, tenim plans VIP amb descomptes de fins al 25% i avantatges exclusius com reserves prioritàries i consultes telefòniques gratuïtes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Què he de portar a la primera sessió?</h3>
                <p className="text-gray-600">
                  Porta roba còmoda, qualsevol informe mèdic rellevant i una llista dels medicaments que prens actualment. Les tovalloles les proporcionem nosaltres.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </SEOOptimized>
  );
}
