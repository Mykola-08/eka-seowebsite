import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodríguez',
    role: 'Directora Marketing',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'Després de mesos amb dolor d\'esquena crònic, Elena va aconseguir alleujar el meu dolor amb només tres sessions de kinesiologia. El seu enfocament integral m\'ha canviat la vida.',
    service: 'Kinesiologia'
  },
  {
    id: 2,
    name: 'Jordi Martínez',
    role: 'Enginyer de Software',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'L\'estrès laboral m\'estava afectant molt. Amb les sessions d\'osteobalance i els exercicis personalitzats, he recuperat l\'equilibri emocional i físic.',
    service: 'Osteobalance'
  },
  {
    id: 3,
    name: 'Anna Fernández',
    role: 'Professora',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'El tractament per al meu fill amb necessitats especials ha estat increïble. Elena té una sensibilitat especial per tractar nens i ha millorat molt la seva mobilitat.',
    service: 'Massatge Familiar'
  },
  {
    id: 4,
    name: 'Carles Miró',
    role: 'Empresari',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'Com a client VIP Silver, l\'experiència ha estat excepcional. Les sessions a domicili i el seguiment personalitzat han millorat significativament la meva qualitat de vida.',
    service: 'Pla VIP Silver'
  },
  {
    id: 5,
    name: 'Laura Soler',
    role: 'Artista',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'Les sessions de moviment conscient m\'han ajudat enormement amb les tensions musculars dels assajos. Ara puc actuar amb més llibertat i confiança.',
    service: 'Lliçons de Moviment'
  }
];

interface TestimonialSliderProps {
  backgroundImage?: string;
}

export default function TestimonialSlider({ backgroundImage = 'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop' }: TestimonialSliderProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  

  return (
    <section 
      className="bg-section-full relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-overlay-dark" />
      
      <div className="relative z-10 apple-section">
        <div className="apple-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="apple-headline text-white mb-6">
              {t('testimonials.sliderTitle')}
            </h2>
            <p className="apple-subtitle text-white/90 max-w-3xl mx-auto">
              {t('testimonials.sliderSubtitle')}
            </p>
          </div>
          
          {/* Slider Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="squircle-card bg-white/95 backdrop-blur-sm p-8 md:p-12 text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl text-gray-900 italic leading-relaxed mb-8 font-light">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
                          {testimonial.service}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              >
                <div className="w-3 h-3 border-l-2 border-t-2 border-white transform -rotate-45"></div>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
              >
                <div className="w-3 h-3 border-r-2 border-t-2 border-white transform rotate-45"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
