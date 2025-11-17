import HeroHeader from '@/react-app/components/HeroHeader';
import SEOOptimized from '@/react-app/components/SEOOptimized';
import { OfflineIndicator } from '@/react-app/components/OfflineIndicator';
import ToastContainer from '@/react-app/components/Toast';

export default function HeroHeaderExample() {
  return (
    <SEOOptimized
      title="EKA Balance - Centre de Teràpies Holístiques a Barcelona"
      description="Descobreix el benestar integral a EKA Balance amb el nostre nou header hero funcional."
    >
      <div className="min-h-screen bg-white">
        <OfflineIndicator />
        
        {/* Hero Header Component */}
        <HeroHeader />
        
        {/* Example content sections */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                Els nostres serveis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descobreix la nostra àmplia gamma de teràpies personalitzades per al teu benestar integral
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Massatge Terapèutic
                </h3>
                <p className="text-gray-600">
                  Allibera tensions i recupera l'equilibri del teu cos amb les nostres tècniques especialitzades.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kinesiologia
                </h3>
                <p className="text-gray-600">
                  Escolta el teu cos i troba l'arrel dels desequilibris amb aquesta tècnica holística.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Plans VIP
                </h3>
                <p className="text-gray-600">
                  Experimenta el màxim nivell de cura personalitzada amb els nostres serveis premium.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Scroll per veure l'efecte de navegació
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Observa com la navegació es transforma d'un overlay transparent a una barra fixa 
              amb efecte de blur quan fas scroll cap avall.
            </p>
            
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Característiques del Hero Header
              </h3>
              <ul className="text-left space-y-3 text-gray-700 max-w-2xl mx-auto">
                <li>✅ Hero de pantalla completa amb imatges rotatives</li>
                <li>✅ Navegació adaptativa que canvia amb el scroll</li>
                <li>✅ Dropdowns funcionals per serveis personalitzats</li>
                <li>✅ Disseny responsiu amb menú mòbil</li>
                <li>✅ Animacions suaus estil Apple</li>
                <li>✅ Efectes de backdrop blur avançats</li>
                <li>✅ Indicadors de confiança integrats</li>
                <li>✅ Botons d'acció prominents</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Continua explorant
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aquest és un exemple de com el contingut apareix sota el header hero. 
              La navegació es mantindrà fixa mentre fas scroll.
            </p>
            
            <div className="h-96 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <p className="text-gray-600">Espai per a més contingut...</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 sm:py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <img 
                src="https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/eka_logo.png" 
                alt="EKA Balance Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-medium">EKA Balance</span>
            </div>
            
            <div className="space-y-2 mb-8 text-gray-300">
              <p>📍 Carrer Pelai, 12, Barcelona, Espanya</p>
              <p>✉️ contact@ekabalance.com</p>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-400">
                &copy; 2024 EKA Balance. Tots els drets reservats.
              </p>
            </div>
          </div>
        </footer>
        
        <ToastContainer />
      </div>
    </SEOOptimized>
  );
}
