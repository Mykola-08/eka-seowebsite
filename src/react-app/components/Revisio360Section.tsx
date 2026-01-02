import { ArrowRight, Sparkles, Clock, Star, CheckCircle, Shield, Heart, Brain, Users } from 'lucide-react';
import { Link } from 'react-router';

const processSteps = [
  {
    step: '01',
    title: 'Entrevista inicial',
    description: 'Parlem del teu estat actual, necessitats i objectius',
    duration: '20-30 min'
  },
  {
    step: '02', 
    title: 'Valoració completa',
    description: 'Avaluació física, emocional i energètica personalitzada',
    duration: '15-20 min'
  },
  {
    step: '03',
    title: 'Tractament integral',
    description: 'Combinació de tècniques adaptades específicament per a tu',
    duration: '60-80 min'
  },
  {
    step: '04',
    title: 'Pla personalitzat',
    description: 'Recomanacions i seguiment per optimitzar els resultats',
    duration: '10-15 min'
  }
];

const benefits = [
  {
    icon: Users,
    title: 'Entrevista personalitzada',
    description: 'Per entendre com estàs: cos, emocions, estrès...'
  },
  {
    icon: Brain,
    title: 'Valoració completa',
    description: 'Amb tècniques de kinesiologia i observació somàtica'
  },
  {
    icon: Heart,
    title: 'Tractament integral',
    description: 'Combinant massatge, Feldenkrais, respiració i més'
  },
  {
    icon: Shield,
    title: 'Seguiment especialitzat',
    description: 'Opcional segons les teves necessitats'
  }
];

export default function Revisio360Section() {
  return (
    <section className="py-32 aurora-section-warm relative overflow-hidden">
      {/* Aurora Orbs */}
      <div className="aurora-orb aurora-orb-large absolute top-20 right-20"></div>
      <div className="aurora-orb aurora-orb-medium absolute bottom-20 left-20"></div>
      <div className="aurora-orb aurora-orb-small absolute top-1/2 left-1/4"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-8 backdrop-blur-sm border border-amber-200/30">
            <Sparkles className="w-5 h-5 text-amber-600 mr-3 animate-pulse" />
            <span className="text-amber-800 font-medium">Servei exclusiu</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight">
            Revisió
            <span className="block font-light bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              360°
            </span>
          </h2>
          
          <p className="text-2xl font-light text-gray-700 mb-8 leading-relaxed">
            Un enfocament global només per a tu
          </p>
          
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Tens massa càrrega i no saps per on començar? Amb la Revisió 360°, 
            no has de decidir res. Et rebem, t'escoltem i ens encarreguem de tot. 
            Tu només cal que vinguis.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left side - Benefits */}
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              Què inclou la Revisió 360°
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Process */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">
              Com funciona
            </h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-white font-light text-lg rounded-xl flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-xs text-amber-600 font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Duration */}
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              90-120 min
            </div>
            <p className="text-gray-600 text-sm">
              Sessió completa integral
            </p>
          </div>

          {/* Investment */}
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              €150
            </div>
            <p className="text-gray-600 text-sm">
              Experiència completa
            </p>
          </div>

          {/* Guarantee */}
          <div className="text-center bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-light text-gray-900 mb-2">
              100%
            </div>
            <p className="text-gray-600 text-sm">
              Garantia satisfacció
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/80 backdrop-blur-sm rounded-3xl p-12 text-center mb-16 border border-white/20">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-current mx-1" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed mb-8">
            "No sabia què necessitava. Vaig sortir amb llum als ulls i cos lleuger. 
            Em van cuidar de veritat."
          </blockquote>
          
          <div className="text-lg font-medium text-gray-900 mb-2">
            Carla, 42 anys
          </div>
          <div className="text-gray-600">
            Barcelona
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100/60 to-teal-100/60 rounded-full mb-8 backdrop-blur-sm border border-emerald-200/30">
            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
            <span className="text-emerald-700 font-medium">
              Experiència garantida • Atenció personalitzada
            </span>
          </div>
          
          <h3 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
            Estàs preparada per descobrir el que realment necessites?
          </h3>
          
          <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
            No cal que decideixis res més. Només vine i deixa que ens ocupem de tot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/revisio-360"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Descobreix més detalls
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            
            <Link
              to="/revisio-360"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 font-medium rounded-2xl border border-white/20 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Reserva la teva Revisió 360°
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
