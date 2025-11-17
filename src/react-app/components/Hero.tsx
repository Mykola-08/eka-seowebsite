import { ArrowRight } from 'phosphor-react';

import { Button } from 'keep-react';
import LazyImage from './LazyImage';
import { useBooking } from './BookingProvider';

export default function Hero() {
  const { navigateToBooking } = useBooking();

  

  return (
    <>
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src="https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/wellness-center.jpg"
            alt="Centre de benestar elegant amb materials naturals, plantes i persones gaudint de la relaxació"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        </div>

        {/* Aurora Orbs - more subtle on image background */}
        <div className="aurora-orb aurora-orb-large absolute top-20 sm:top-40 right-10 sm:right-20 opacity-30"></div>
        <div className="aurora-orb aurora-orb-medium absolute bottom-10 sm:bottom-20 left-10 sm:left-20 opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
          {/* Simple badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm border border-yellow-200 rounded-full mb-8 sm:mb-16 shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-yellow-800">
              ✨ Benestar Professional
            </span>
          </div>
          
          {/* Clean headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Recupera el teu equilibri amb{' '}
            <span className="text-yellow-500 font-medium">
              teràpies personalitzades
            </span>
          </h1>
          
          {/* Simple subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light px-2 sm:px-0">
            Massatge terapèutic, kinesiologia i plans VIP personalitzats. 
            Centre de benestar al cor de Barcelona, prop de Plaça Universitat.
          </p>

          {/* Keep React CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-24 px-4 sm:px-0">
            <Button 
              color="primary"
              size="lg"
              onClick={navigateToBooking}
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl bg-blue-600 hover:bg-blue-700"
            >
              És la teva primera vegada?
              <ArrowRight size={20} className="ml-2" />
            </Button>
            
            <Button
              color="warning"
              size="lg"
              onClick={navigateToBooking}
              className="w-full sm:w-auto bg-[#FFB405] hover:bg-[#e8a204] shadow-sm hover:shadow-md transition-all duration-200 rounded-xl"
            >
              Reserva ara
            </Button>
          </div>

          {/* Clean stats with enhanced contrast */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                1500+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                sessions realitzades
              </div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                4.93
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                valoració mitjana
              </div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                96
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                clients feliços
              </div>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                anys experiència
              </div>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                9
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                països estudis
              </div>
            </div>

            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">
                500
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                casos resolts
              </div>
            </div>
          </div>         
        </div>
      </section>

      
    </>
  );
}
