import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Button } from 'keep-react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
const heroImages = [
  'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7187991/pexels-photo-7187991.jpeg?auto=compress&cs=tinysrgb&w=1920'
];
export default function AppleHero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-full">
      {/* Background Image with smooth transitions */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {heroImages.map((image, index) => <div key={image} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} style={{
        backgroundImage: `url(${image})`
      }} />)}
      </div>
      
      {/* Overlay for text readability */}
      <div className="bg-overlay-dark" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <span className="font-medium">{t('hero.badge')}</span>
        </div>
        
        {/* Main Title */}
        <h1 className="apple-large-title text-white mb-8">{t('hero.title')}</h1>
        
        {/* Subtitle */}
        <p className="apple-subtitle text-white/90 mb-12 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/primer-cop" className="group">
            <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl">
              {t('hero.firstTime')}
            </Button>
          </Link>
          
          <Link to="/services" className="group">
            <Button size="xl" className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl">
              {t('hero.discoverServices')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        
      </div>
      
      
    </section>;
}
