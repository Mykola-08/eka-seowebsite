import { ArrowRight, Heart, Users, Briefcase, Star } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Heart,
    title: 'Sessions Individuals',
    description: 'Tractaments personalitzats adaptats a les teves necessitats específiques',
    features: ['Massatge terapèutic', 'Kinesiologia', 'Osteobalance', 'Feldenkrais'],
    color: 'from-pink-400 to-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/10'
  },
  {
    icon: Users,
    title: 'Teràpia Familiar',
    description: 'Sessions especials per a famílies amb nens amb necessitats especials',
    features: ['Enfocament integral', 'Ambient familiar', 'Tècniques adaptades', 'Seguiment continu'],
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10'
  },
  {
    icon: Briefcase,
    title: 'Serveis Corporatius',
    description: 'Programes de benestar per a empreses i equips de treball',
    features: ['Sessions al lloc de treball', 'Programes grupals', 'Gestió de l\'estrès', 'Productivitat'],
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/10'
  }
];

const locations = [
  {
    name: 'Barcelona',
    address: 'Plaça Universitat',
    description: 'Metro L1 i L2, múltiples connexions de transport'
  }
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/50 dark:to-gray-900/50"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Els nostres serveis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
            Oferim una gamma completa de teràpies per ajudar-te a recuperar l'equilibri físic i emocional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="inline-flex items-center text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 font-medium transition-colors"
                >
                  Més informació
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Locations Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            La nostra ubicació
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Centre especialitzat a Barcelona per oferir-te proximitat i comoditat
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center"
            >
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                {location.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {location.address}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {location.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-6 italic">
            "L'Elena té un do especial per trobar exactament el que necessita el teu cos. 
            Després de les seves sessions, sempre surto renovada i amb més energia."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
              alt="Maria Rodríguez"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-medium text-gray-900 dark:text-white">Maria Rodríguez</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Client habitual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
