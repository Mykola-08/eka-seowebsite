import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 1,
    number: '01',
    name: 'Kinesiologia',
    description: 'Troba totes les respostes',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    number: '02',
    name: 'Lliçons de moviment',
    description: 'Viu sense dolor',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    number: '03',
    name: 'Flors de Bach',
    description: 'Les emocions en ordre',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 4,
    number: '04',
    name: 'Massatge',
    description: 'Zen per al cos i l\'ànima',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 5,
    number: '05',
    name: 'Nutrició conscient',
    description: 'Som el que mengem',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 6,
    number: '06',
    name: 'Osteobalance',
    description: 'Cos en equilibri',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    href: '/services',
    color: 'from-indigo-600 to-indigo-800'
  }
];

export default function ServiceCategoryPills() {
  return (
    <section className="apple-section bg-white">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="apple-headline mb-6">
            Els nostres serveis
          </h2>
          <p className="apple-subtitle max-w-3xl mx-auto">
            Descobreix la nostra gamma completa de teràpies personalitzades 
            per restaurar l'equilibri i promoure el teu benestar integral
          </p>
        </div>
        
        {/* Service Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {serviceCategories.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group service-pill relative block"
              style={{
                backgroundImage: `url(${service.image})`
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white">
                {/* Top content */}
                <div className="flex justify-between items-start">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                    <span className="text-2xl font-light">{service.number}</span>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Bottom content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {service.name}
                  </h3>
                  <p className="text-white/90 font-medium group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Veure tots els serveis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
