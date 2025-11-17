import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router';

import React, { useState } from 'react';
import { Button } from 'keep-react';

import LazyImage from './LazyImage';

const heroImages = [
  {
    url: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/wellness-center.jpg',
    alt: 'Centre de benestar elegant amb materials naturals i persones relaxades'
  },
  {
    url: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/meditation-nature.jpg',
    alt: 'Persona meditant en la natura amb llum solar filtrant-se entre els arbres'
  },
  {
    url: 'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/yoga-group.jpg',
    alt: 'Grup de persones fent ioga en un entorn natural bonic'
  }
];

export default function EnhancedHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBooking = () => {
    // Open Square Appointments booking
    if ((window as any).squareup && (window as any).squareup.widget) {
      (window as any).squareup.widget.init();
    }
  };

  // Auto-rotate hero images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images with Crossfade */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <LazyImage
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-yellow-200/50 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-800 font-medium text-sm">
                Benestar professional a Barcelona
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 leading-tight">
              El teu camí cap al{' '}
              <span className="font-light bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                benestar integral
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl">
              Teràpies personalitzades que combinen tècniques tradicionals i modernes 
              per restaurar l'equilibri del teu cos i ment.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Massatge terapèutic</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Kinesiologia avançada</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Tractaments VIP</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Atenció personalitzada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                color="warning" 
                size="lg" 
                onClick={handleBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-8 py-4"
              >
                Reserva la teva sessió
                <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Link to="/serveis">
                <Button
                  color="secondary"
                  variant="softBg"
                  size="lg"
                  className="w-full sm:w-auto bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl px-8 py-4"
                >
                  <Play size={16} className="mr-2" />
                  Descobreix els nostres serveis
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Feature Card */}
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/healthy-nutrition.jpg"
                  alt="Fruites i verdures fresques representant nutrició i benestar"
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enfocament holístic
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Combinem teràpies físiques amb assessorament nutricional per a un benestar complet
                </p>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-light mb-1">+500</div>
                <div className="text-xs uppercase tracking-wide">Sessions</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-light text-gray-900 mb-1">4.9⭐</div>
                <div className="text-xs uppercase tracking-wide text-gray-600">Valoració</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
