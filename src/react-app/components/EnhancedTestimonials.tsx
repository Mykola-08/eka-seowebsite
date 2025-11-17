import { useState } from 'react';
import { Star, CheckCircle, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  age?: number;
  image: string;
  rating: number;
  title: string;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  location: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  externalLinks?: {
    google?: string;
    trustpilot?: string;
    facebook?: string;
  };
  therapist?: string;
  tags?: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Fernández",
    age: 38,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Una experiència transformadora",
    text: "Després de la Revisió 360°, per fi vaig entendre què necessitava el meu cos. L'Elena va ser increïble, va detectar tensions que ni jo sabia que tenia. Ara dormo millor i tinc molta més energia durant el dia.",
    service: "Revisió 360°",
    date: "Fa 2 setmanes",
    verified: true,
    location: "Rubí",
    therapist: "Elena Martínez",
    beforeAfter: {
      before: "Dolor constant d'esquena i insomni",
      after: "Dolor reduït 90% i somni reparador"
    },
    externalLinks: {
      google: "https://g.page/r/example",
      trustpilot: "https://trustpilot.com/review/example"
    },
    tags: ["Dolor d'esquena", "Estrès", "Insomni"]
  },
  {
    id: 2,
    name: "Jordi Puig",
    age: 45,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Adéu als dolors d'esquena",
    text: "Anys patint amb hernies discals i havia provat de tot. El massatge terapèutic del Marc ha estat la solució definitiva. En 6 sessions he passat de no poder aixecar-me del llit a córrer maratons.",
    service: "Massatge Terapèutic",
    date: "Fa 1 mes",
    verified: true,
    location: "Barcelona",
    therapist: "Marc Puig",
    beforeAfter: {
      before: "Dolor 8/10 diari",
      after: "Completament sense dolor"
    },
    externalLinks: {
      google: "https://g.page/r/example2",
      facebook: "https://facebook.com/review/example"
    },
    tags: ["Hérnies discals", "Dolor crònic", "Running"]
  },
  {
    id: 3,
    name: "Laura Vidal",
    age: 32,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Kinesiologia que canvia vides",
    text: "Tenia ansietat i atacs de pànic constants. La kinesiologia no només va tractar els símptomes, va anar a la causa. Ara tinc eines per gestionar l'estrès i em sento com una persona nova.",
    service: "Kinesiologia",
    date: "Fa 3 setmanes",
    verified: true,
    location: "Rubí",
    therapist: "Elena Martínez",
    beforeAfter: {
      before: "3-4 atacs de pànic setmanals",
      after: "Cap atac en 2 mesos"
    },
    externalLinks: {
      trustpilot: "https://trustpilot.com/review/example3"
    },
    tags: ["Ansietat", "Atacs de pànic", "Estrès laboral"]
  },
  {
    id: 4,
    name: "Anna i David García",
    image: "https://images.unsplash.com/photo-1516627145497-ae4e4b4e3c84?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Sessió de parella màgica",
    text: "La sessió familiar va ser exactament el que necessitàvem. Vam aprendre tècniques per relaxar-nos junts i va millorar molt la nostra comunicació. Els nostres fills també van participar i va ser divertidíssim.",
    service: "Sessió Familiar",
    date: "Fa 1 setmana",
    verified: true,
    location: "Barcelona",
    therapist: "Marc Puig",
    beforeAfter: {
      before: "Estrès i tensions de parella",
      after: "Connexió més profunda"
    },
    tags: ["Parella", "Família", "Comunicació"]
  },
  {
    id: 5,
    name: "Carles Miró",
    age: 52,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Feldenkrais per a seniors",
    text: "A la meva edat pensava que els dolors eren normals. El mètode Feldenkrais m'ha ensenyat a moure'm millor i he recuperat mobilitat que creia perduda per sempre. Recomanadíssim per a gent gran.",
    service: "Mètode Feldenkrais",
    date: "Fa 5 dies",
    verified: true,
    location: "Rubí",
    therapist: "Marc Puig",
    beforeAfter: {
      before: "Mobilitat molt limitada",
      after: "Flexibilitat de fa 20 anys"
    },
    externalLinks: {
      google: "https://g.page/r/example5"
    },
    tags: ["Seniors", "Mobilitat", "Artritis"]
  },
  {
    id: 6,
    name: "Marta Soler",
    age: 28,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format",
    rating: 5,
    title: "Perfecte per a embarassades",
    text: "Durant l'embaràs tenia molts dolors lumbars. Els massatges especialitzats per embarassades van ser la salvació. L'Elena té molta experiència i et fa sentir súper segura.",
    service: "Massatge Prenatal",
    date: "Fa 2 mesos",
    verified: true,
    location: "Barcelona",
    therapist: "Elena Martínez",
    beforeAfter: {
      before: "Dolor lumbar constant",
      after: "Embaràs confortable"
    },
    tags: ["Embaràs", "Dolor lumbar", "Prenatal"]
  }
];

interface EnhancedTestimonialsProps {
  maxVisible?: number;
  showFilters?: boolean;
  showExternalLinks?: boolean;
}

export default function EnhancedTestimonials({ 
  maxVisible = 3, 
  showFilters = false,
  showExternalLinks = true 
}: EnhancedTestimonialsProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string>('all');
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  const services = ['all', ...new Set(testimonials.map(t => t.service))];
  
  const filteredTestimonials = testimonials.filter(
    t => selectedService === 'all' || t.service === selectedService
  );

  const visibleTestimonials = filteredTestimonials.slice(currentIndex, currentIndex + maxVisible);

  const nextTestimonials = () => {
    if (currentIndex + maxVisible < filteredTestimonials.length) {
      setCurrentIndex(currentIndex + maxVisible);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - maxVisible));
    } else {
      setCurrentIndex(Math.max(0, filteredTestimonials.length - maxVisible));
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const toggleExpanded = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-light text-gray-900">4.93/5</span>
            <span className="text-gray-500">• 347 {t('testimonials.ratings')}</span>
          </div>
        </div>

        {/* Service Filter */}
        {showFilters && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${
                    selectedService === service
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-600 hover:bg-yellow-50'
                  }`}
                >
                  {service === 'all' ? t('testimonials.all') : service}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-gray-400" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">
                      {testimonial.name}
                      {testimonial.age && `, ${testimonial.age}`}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {testimonial.date} • {testimonial.location}
                  </p>
                </div>

                {/* Title & Review */}
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {testimonial.title}
                </h3>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Service & Therapist */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                  {testimonial.therapist && (
                    <span className="text-gray-600">
                      {t('testimonials.with')} {testimonial.therapist}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {testimonial.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Before/After - Expandable */}
                {testimonial.beforeAfter && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      {expandedTestimonial === testimonial.id ? t('testimonials.hide') : t('testimonials.show')} {t('testimonials.beforeAfter')}
                    </button>
                    
                    {expandedTestimonial === testimonial.id && (
                      <div className="mt-3 p-4 bg-gray-50 rounded-xl">
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <span className="text-xs font-medium text-red-600 uppercase tracking-wide">{t('testimonials.before')}</span>
                            <p className="text-sm text-gray-700">{testimonial.beforeAfter.before}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-green-600 uppercase tracking-wide">{t('testimonials.after')}</span>
                            <p className="text-sm text-gray-700">{testimonial.beforeAfter.after}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* External Links */}
                {showExternalLinks && testimonial.externalLinks && (
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{t('testimonials.also')}</span>
                    {testimonial.externalLinks.google && (
                      <a
                        href={testimonial.externalLinks.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        Google <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                    {testimonial.externalLinks.trustpilot && (
                      <a
                        href={testimonial.externalLinks.trustpilot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-green-600 hover:text-green-700 flex items-center"
                      >
                        Trustpilot <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                    {testimonial.externalLinks.facebook && (
                      <a
                        href={testimonial.externalLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        Facebook <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {filteredTestimonials.length > maxVisible && (
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                onClick={prevTestimonials}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="text-sm text-gray-500">
                {currentIndex + 1} - {Math.min(currentIndex + maxVisible, filteredTestimonials.length)} de {filteredTestimonials.length}
              </div>
              
              <button
                onClick={nextTestimonials}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {/* External Review Links */}
        {showExternalLinks && (
          <div className="text-center mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              {t('testimonials.externalReviews')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/search?q=eka+balance+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Google Reviews
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://www.trustpilot.com/review/ekabalance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-600 font-medium px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Trustpilot
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://www.facebook.com/ekabalance/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-medium px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Facebook
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
