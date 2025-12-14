/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Layout from '@/react-app/components/Layout';
import SEOHead from '@/react-app/components/SEOHead';
import { ArrowRight, ArrowLeft, Heart, Brain, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

interface FormData {
  objective: string;
  tensionAreas: string[];
  specialCondition: string;
  emotionalState: string;
  timeCommitment: string;
  budget: string;
}

interface Recommendation {
  service: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
  icon: React.ComponentType<any>;
  color: string;
}

export default function DiscoveryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    objective: '',
    tensionAreas: [],
    specialCondition: '',
    emotionalState: '',
    timeCommitment: '',
    budget: ''
  });
  const [showRecommendation, setShowRecommendation] = useState(false);

  const objectives = [
    {
      id: 'relax',
      title: 'Relaxar-me i reduir l\'estrès',
      description: 'Senteixo molta tensió o nerviosisme i vull relaxar-me',
      type: 'emotional'
    },
    {
      id: 'pain',
      title: 'Alleujar dolor o contractures musculars',
      description: 'Tinc dolor o rigidesa a zones com coll, esquena, espatlles, etc.',
      type: 'physical'
    },
    {
      id: 'recovery',
      title: 'Millorar recuperació física',
      description: 'Post-lesió o esport: vull recuperar mobilitat i alleujar tensions profundes',
      type: 'physical'
    },
    {
      id: 'emotional',
      title: 'Reequilibrar l\'estat emocional',
      description: 'Em sento molt ansiós, trist o desmotivat i vull gestionar les meves emocions',
      type: 'emotional'
    },
    {
      id: 'other',
      title: 'Altres objectius',
      description: 'Tinc altres necessitats específiques',
      type: 'mixed'
    }
  ];

  const tensionOptions = [
    'Coll / Espatlles / Clatell',
    'Zona lumbar / Baix d\'esquena',
    'Cames / Genolls / Peus',
    'Cap (mal de cap, migranya, etc.)',
    'Tot el cos (tensió generalitzada)',
    'No tinc dolor muscular destacat'
  ];

  const specialConditions = [
    {
      id: 'pregnancy',
      title: 'Em trobo embarassada o en post-part',
      description: 'Necessito teràpia adaptada'
    },
    {
      id: 'injuries',
      title: 'He tingut lesions esportives o fractures recents',
      description: 'Requereixo atenció especialitzada'
    },
    {
      id: 'energetic',
      title: 'M\'interessa un enfocament molt energètic',
      description: 'Com reiki o teràpia floral'
    },
    {
      id: 'none',
      title: 'Cap de les anteriors',
      description: 'Continuar amb el procés normal'
    }
  ];

  const emotionalStates = [
    {
      id: 'stressed',
      title: 'Molt estressat/ansiós',
      description: 'Amb dificultat per relaxar-me'
    },
    {
      id: 'sad',
      title: 'Em sento trist/apatètic',
      description: 'I tinc ganes de canviar-ho'
    },
    {
      id: 'balanced',
      title: 'Em sento equilibrat',
      description: 'No hi ha un problema emocional fort actual'
    },
    {
      id: 'focus_physical',
      title: 'Prefereixo enfocar-me en l\'àmbit físic',
      description: 'No ho sé, però vull centrar-me en el cos'
    }
  ];

  const timeCommitments = [
    {
      id: 'short',
      title: 'Sessió curta (fins a 1h)',
      description: 'Ideal si tens poc temps'
    },
    {
      id: 'standard',
      title: 'Sessió estàndard (1-1,5h)',
      description: 'Temps habitual de massatge/teràpia'
    },
    {
      id: 'long',
      title: 'Sessió llarga o intensiva (fins a 2h)',
      description: 'Si vols una atenció molt completa'
    }
  ];

  const budgetOptions = [
    {
      id: 'basic',
      title: 'Fins a 60€',
      description: 'Opció bàsica'
    },
    {
      id: 'standard',
      title: '60-90€',
      description: 'Fins a 2h, modalitat plena'
    },
    {
      id: 'premium',
      title: 'Més de 90€',
      description: 'Sessió llarga premium'
    }
  ];

  const getRecommendation = (): Recommendation => {
    const selectedObjective = objectives.find(obj => obj.id === formData.objective);
    const isPhysical = selectedObjective?.type === 'physical';
    const isEmotional = selectedObjective?.type === 'emotional' || formData.emotionalState === 'stressed' || formData.emotionalState === 'sad';
    const hasPain = formData.tensionAreas.length > 0 && !formData.tensionAreas.includes('No tinc dolor muscular destacat');
    const wantsEnergetic = formData.specialCondition === 'energetic';

    if (wantsEnergetic || (isEmotional && !isPhysical)) {
      return {
        service: 'Reequilibri Emocional',
        description: 'Teràpia holística per gestionar estrès, ansietat o tristesa. Se centra a superar problemes emocionals i recuperar harmonia i felicitat.',
        price: '70€',
        duration: '1-1,5h',
        benefits: ['Reducció de l\'estrès', 'Equilibri emocional', 'Claredat mental', 'Pau interior'],
        icon: Brain,
        color: 'purple'
      };
    }

    if (hasPain && isPhysical) {
      return {
        service: 'Sessió Terapèutica Manual',
        description: 'Massatge terapèutic especialitzat per alleujar dolor i tensions musculars. Professionals amb experiència t\'ajudaran a relaxar contractures.',
        price: '60-75€',
        duration: '1-1,5h',
        benefits: ['Alleujament del dolor', 'Reducció de contractures', 'Millora de la mobilitat', 'Relaxació muscular'],
        icon: Heart,
        color: 'orange'
      };
    }

    if (formData.objective === 'recovery' || (hasPain && formData.tensionAreas.includes('Tot el cos (tensió generalitzada)'))) {
      return {
        service: 'Alleujament Tensional Integratiu (4 en 1)',
        description: 'Combina massatge, kinesiologia, osteopatia i moviments (Feldenkrais) per un alleujament profund de tensions cròniques.',
        price: '90-120€',
        duration: '1,5-2h',
        benefits: ['Tractament integral', 'Alleujament profund', 'Combinació de tècniques', 'Resultats duradors'],
        icon: Sparkles,
        color: 'blue'
      };
    }

    // Default: Massatge Relaxant Complet
    return {
      service: 'Massatge Relaxant Complet',
      description: 'Experiència de relaxació global (física i mental), ideal si el teu objectiu és senzillament descansar i recarregar energies.',
      price: '60-80€',
      duration: '1-1,5h',
      benefits: ['Relaxació profunda', 'Reducció de l\'estrès', 'Renovació d\'energia', 'Benestar general'],
      icon: Heart,
      color: 'green'
    };
  };

  const handleNext = () => {
    if (currentStep === 1) {
      const selectedObj = objectives.find(obj => obj.id === formData.objective);
      if (selectedObj?.type === 'physical') {
        setCurrentStep(2);
      } else {
        setCurrentStep(4);
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    } else if (currentStep === 5) {
      setCurrentStep(6);
    } else if (currentStep === 6) {
      setShowRecommendation(true);
    }
  };

  const handleBack = () => {
    if (currentStep === 4) {
      const selectedObj = objectives.find(obj => obj.id === formData.objective);
      if (selectedObj?.type === 'physical') {
        setCurrentStep(3);
      } else {
        setCurrentStep(1);
      }
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.objective !== '';
      case 2:
        return formData.tensionAreas.length > 0;
      case 3:
        return formData.specialCondition !== '';
      case 4:
        return formData.emotionalState !== '';
      case 5:
        return formData.timeCommitment !== '';
      case 6:
        return formData.budget !== '';
      default:
        return false;
    }
  };

  const recommendation = showRecommendation ? getRecommendation() : null;
  const Icon = recommendation?.icon;

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      green: 'bg-green-50 border-green-200 text-green-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (showRecommendation && recommendation) {
    return (
      <Layout>
        <SEOHead
          title="Recomanació Personalitzada - EKA Balance"
          description="Descobreix el servei perfecte per a les teves necessitats a EKA Balance"
        />

        <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full mb-8">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-700 font-medium">Recomanació personalitzada</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
                El teu servei ideal
              </h1>
              
              <p className="text-xl text-gray-600 mb-12">
                Basant-nos en les teves respostes, hem trobat el servei perfecte per a tu
              </p>
            </div>

            <div className={`bg-white rounded-3xl shadow-xl border-2 ${getColorClasses(recommendation.color)} p-8 sm:p-12 mb-8`}>
              <div className="text-center mb-8">
                {Icon && (
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-gray-700" />
                  </div>
                )}
                
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  {recommendation.service}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {recommendation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Preu</h4>
                    <p className="text-2xl font-bold text-gray-800">{recommendation.price}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Durada</h4>
                    <p className="text-2xl font-bold text-gray-800">{recommendation.duration}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Beneficis principals:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {recommendation.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
                >
                  Reserva ara
                </Link>
                <button
                  onClick={() => setShowRecommendation(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full transition-colors duration-200"
                >
                  Tornar al formulari
                </button>
              </div>
            </div>

            <div className="text-center text-gray-500">
              <p className="mb-4">Tens dubtes sobre aquesta recomanació?</p>
              <Link
                to="/contacte"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Parla amb el nostre equip
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Descobreix el teu servei ideal - EKA Balance"
        description="Formulari personalitzat per trobar el servei de teràpia holística que millor s'adapti a les teves necessitats específiques."
      />

      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Descobriment personalitzat</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
              👋 Benvingut/da a EKA Balance
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Trobem la sessió perfecta per a tu. Aquest formulari ràpid ens ajudarà a entendre 
              on et trobes, què vols aconseguir i què necessita el teu cos o emocions ara mateix.
            </p>

            {/* Progress indicator */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
            {/* Step 1: Objective */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  💡 Quin és el teu objectiu principal per la sessió?
                </h2>
                <p className="text-gray-600 mb-8">Selecciona l'opció que més s'assembli al que busques:</p>
                
                <div className="space-y-4">
                  {objectives.map((objective) => (
                    <button
                      key={objective.id}
                      onClick={() => setFormData({ ...formData, objective: objective.id })}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.objective === objective.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{objective.title}</h3>
                      <p className="text-gray-600 text-sm">{objective.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Tension Areas */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  📍 On tens més tensió o dolor físic?
                </h2>
                <p className="text-gray-600 mb-8">Pots seleccionar múltiples zones:</p>
                
                <div className="space-y-4">
                  {tensionOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        const newAreas = formData.tensionAreas.includes(option)
                          ? formData.tensionAreas.filter(area => area !== option)
                          : [...formData.tensionAreas, option];
                        setFormData({ ...formData, tensionAreas: newAreas });
                      }}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                        formData.tensionAreas.includes(option)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{option}</span>
                        {formData.tensionAreas.includes(option) && (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Special Conditions */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  ⚡ Tens alguna condició especial o preferència?
                </h2>
                
                <div className="space-y-4">
                  {specialConditions.map((condition) => (
                    <button
                      key={condition.id}
                      onClick={() => setFormData({ ...formData, specialCondition: condition.id })}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.specialCondition === condition.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{condition.title}</h3>
                      <p className="text-gray-600 text-sm">{condition.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Emotional State */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  🧘 Com et trobes en l'àmbit emocional?
                </h2>
                
                <div className="space-y-4">
                  {emotionalStates.map((state) => (
                    <button
                      key={state.id}
                      onClick={() => setFormData({ ...formData, emotionalState: state.id })}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.emotionalState === state.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{state.title}</h3>
                      <p className="text-gray-600 text-sm">{state.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Time Commitment */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  ⏰ Quant de temps tens i quant et vols implicar?
                </h2>
                
                <div className="space-y-4">
                  {timeCommitments.map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setFormData({ ...formData, timeCommitment: time.id })}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.timeCommitment === time.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{time.title}</h3>
                      <p className="text-gray-600 text-sm">{time.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Budget */}
            {currentStep === 6 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  💰 Quin pressupost tens per sessió?
                </h2>
                
                <div className="space-y-4">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget.id}
                      onClick={() => setFormData({ ...formData, budget: budget.id })}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.budget === budget.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{budget.title}</h3>
                      <p className="text-gray-600 text-sm">{budget.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={handleBack}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </button>

              <span className="text-sm text-gray-500">
                Pas {currentStep} de 6
              </span>

              <button
                onClick={handleNext}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  canProceed()
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!canProceed()}
              >
                {currentStep === 6 ? 'Veure recomanació' : 'Següent'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
