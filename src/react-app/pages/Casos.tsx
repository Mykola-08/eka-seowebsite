/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, Heart, Brain, Zap, Moon, Activity, Stethoscope } from 'lucide-react';
import { Link } from 'react-router';
import Layout from '@/react-app/components/Layout';
import SEOOptimized from '@/react-app/components/SEOOptimized';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

interface Problem {
  id: string;
  title: string;
  category: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatment: string;
  results: string;
  icon: React.ComponentType<any>;
  color: string;
  href: string;
}

export default function Casos() {
  const { t } = useLanguage();

  const additionalProblemsKeys = [
    'casos.additionalProblems.bruxism',
    'casos.additionalProblems.tmj',
    'casos.additionalProblems.sciatica',
    'casos.additionalProblems.shoulderPain',
    'casos.additionalProblems.dizziness',
    'casos.additionalProblems.irritability',
    'casos.additionalProblems.intestinalProblems',
    'casos.additionalProblems.chronicFatigue',
    'casos.additionalProblems.socialAnxiety',
    'casos.additionalProblems.concentrationDifficulty',
    // Add more as needed...
  ];

  

  const featuredProblems: Problem[] = [
    {
      id: 'dolor-esquena',
      title: t('casos.problems.backPain.title'),
      category: 'fisic',
      description: t('casos.problems.backPain.description'),
      symptoms: [
        'Dolor punxant o tensió constant a la zona lumbar o cervical',
        'Dificultat per girar el coll o aixecar el braç',
        'Fatiga després d\'estar assegut o dret molta estona',
        'Sensació de pressió a les espatlles o cap'
      ],
      causes: [
        'Postures mantingudes i mala ergonomia',
        'Estrès emocional acumulat',
        'Falta de moviment i sedentarisme',
        'Respiració bloquejada o superficial'
      ],
      treatment: 'Amb massatge terapèutic, alliberament miofascial, Kinesiologia per trobar la causa profunda (estrès, bloqueig articular o visceral), i tècniques de reeducació postural (Feldenkrais).',
      results: 'Moltes persones noten alleujament immediat i més mobilitat després de la primera sessió. Amb el temps, el cos reaprèn a sostenir-se amb menys esforç i més fluïdesa.',
      icon: Activity,
      color: 'blue',
      href: '/serveis/massatge'
    },
    {
      id: 'estres-ansietat',
      title: t('casos.problems.stress.title'),
      category: 'emocional',
      description: t('casos.problems.stress.description'),
      symptoms: [
        'Pensaments constants i bucle mental',
        'Dificultat per relaxar-se o dormir',
        'Dolor cervical, tensió mandibular, fatiga al matí',
        'Emocions intenses sense motiu aparent'
      ],
      causes: [
        'Excés de responsabilitats i pressió',
        'Estrès crònic i falta de temps per un mateix',
        'Traumes no resolts o experiències difícils',
        'Desajust del sistema nerviós autònom'
      ],
      treatment: 'Amb Kinesiologia emocional i tècniques del sistema vagal per calmar el sistema nerviós. Afegim treball corporal suau (Feldenkrais, respiració conscient) per ensenyar al cos a "sortir de la lluita".',
      results: 'La persona torna a dormir millor, disminueix la tensió interna i recupera la sensació de control i serenitat.',
      icon: Brain,
      color: 'purple',
      href: '/serveis/kinesiologia'
    },
    {
      id: 'problemes-digestius',
      title: t('casos.problems.digestive.title'),
      category: 'digestiu',
      description: t('casos.problems.digestive.description'),
      symptoms: [
        'Inflor abdominal, gasos, reflux o dolor després de menjar',
        'Cansament o somnolència postprandial',
        'Canvis d\'humor o irritabilitat sense motiu',
        'Intoleràncies alimentàries o sensibilitats'
      ],
      causes: [
        'Intoleràncies alimentàries no detectades',
        'Alimentació irregular o estrès durant els àpats',
        'Estrès emocional que afecta la digestió',
        'Bloquejos viscerals que afecten la mobilitat dels òrgans'
      ],
      treatment: 'Amb Kinesiologia nutricional per detectar intoleràncies o dèficits, tècniques de massatge visceral suau i recomanacions alimentàries personalitzades.',
      results: 'Millora la digestió, desapareix la inflor i augmenta l\'energia diària. El client aprèn a escoltar el seu cos i a adaptar la seva alimentació.',
      icon: Heart,
      color: 'green',
      href: '/serveis/nutritio'
    },
    {
      id: 'migranyes',
      title: t('casos.problems.migraines.title'),
      category: 'fisic',
      description: t('casos.problems.migraines.description'),
      symptoms: [
        'Dolor intens d\'un costat del cap o al clatell',
        'Pressió ocular o sensació de casc',
        'Marejos o nàusees',
        'Sensibilitat a la llum i als sorolls'
      ],
      causes: [
        'Bloqueig cervical i tensió muscular',
        'Tensió mandibular (bruxisme)',
        'Falta de descans o excés d\'estimulació mental',
        'Desequilibris hormonals o alimentaris'
      ],
      treatment: 'Amb Osteobalance cranial, descàrrega muscular i tècniques vagals per equilibrar el sistema nerviós. També revisem la respiració i la postura.',
      results: 'Reducció de la freqüència i intensitat de les migranyes. En molts casos, desapareixen completament després de regular el coll i el crani.',
      icon: Brain,
      color: 'red',
      href: '/serveis/massatge'
    },
    {
      id: 'falta-energia',
      title: t('casos.problems.lowEnergy.title'),
      category: 'energetic',
      description: t('casos.problems.lowEnergy.description'),
      symptoms: [
        'Cansament constant malgrat dormir bé',
        'Baixa concentració i memòria',
        'Irritabilitat o apatia',
        'Sensació de "funcionar amb el pilot automàtic"'
      ],
      causes: [
        'Estrès prolongat i burnout',
        'Dèficits nutricionals o desequilibris metabòlics',
        'Problemes hormonals (tiroide, adrenals)',
        'Desgast emocional i falta de propòsit'
      ],
      treatment: 'Amb Kinesiologia per identificar desequilibris químics o emocionals, suplementació natural i tècniques de moviment conscient.',
      results: 'Millora notable de l\'energia, claredat mental i estat d\'ànim més estable.',
      icon: Zap,
      color: 'orange',
      href: '/serveis/kinesiologia'
    },
    
    {
      id: 'dificultats-dormir',
      title: t('casos.problems.sleep.title'),
      category: 'son',
      description: t('casos.problems.sleep.description'),
      symptoms: [
        'Dificultat per adormir-se o despertes nocturns',
        'Fatiga matinal, tensió o somnis intensos',
        'Pensaments recurrents abans de dormir',
        'Son lleuguer o poc reparador'
      ],
      causes: [
        'Excés d\'estrès i hiperactivació mental',
        'Desajust del sistema nerviós i ritmes circadians',
        'Manca de rutina o higiene del son',
        'Problemes digestius o hormonal'
      ],
      treatment: 'Amb Feldenkrais, respiració guiada, tècniques vagals i kinesiologia per equilibrar el sistema hormonal.',
      results: 'Millora del son profund i descans reparador després de poques sessions.',
      icon: Moon,
      color: 'indigo',
      href: '/serveis/kinesiologia'
    },
    {
      id: 'recuperacio-lesio',
      title: t('casos.problems.recovery.title'),
      category: 'recuperacio',
      description: t('casos.problems.recovery.description'),
      symptoms: [
        'Dolor residual o limitació articular',
        'Sensació de debilitat o desequilibri',
        'Bloquejos emocionals associats a la lesió',
        'Por al moviment o reactivitat'
      ],
      causes: [
        'Cicatrius internes i adherències',
        'Compensacions musculars i posturals',
        'Trauma físic amb component emocional',
        'Memòria corporal de l\'experiència traumàtica'
      ],
      treatment: 'Amb Osteobalance, reeducació postural i treball del sistema fascial. Acompanyem també la confiança corporal i la memòria del cos.',
      results: 'Recuperació de la mobilitat, alleujament del dolor i sensació de seguretat en el moviment.',
      icon: Stethoscope,
      color: 'red',
      href: '/serveis/massatge'
    }
  ];

  

  

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      pink: 'bg-pink-50 border-pink-200 text-pink-700',
      red: 'bg-red-50 border-red-200 text-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <SEOOptimized
      title="Problemes que resolem | Casos reals de teràpia holística | EKA Balance"
      description="Descobreix com podem ajudar-te amb dolor d'esquena, estrès, problemes digestius, migranyes i molts altres casos. Casos reals amb resultats comprovats."
      keywords="dolor esquena, estrès ansietat, problemes digestius, migranyes, fatiga crònica, teràpia holística Barcelona"
      url="https://ekabalance.com/casos"
    >
      <Layout>
        {/* Hero Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                {t('casos.title')}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('casos.subtitle')}
              </p>
              
              <div className="prose prose-lg mx-auto text-gray-700">
                <p>
                  {t('casos.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Featured Problems */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                {t('casos.frequentCases')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('casos.frequentCasesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProblems.map((problem) => {
                const ProblemIcon = problem.icon;
                return (
                  <Link
                    key={problem.id}
                    to={`/casos/${problem.id}`}
                    className="group bg-white rounded-[24px] p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl ${getColorClasses(problem.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <ProblemIcon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {problem.description}
                    </p>

                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      {t('casos.seeDetails')}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Problems List */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                {t('casos.otherCases')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('casos.otherCasesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {additionalProblemsKeys.map((problemKey, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span className="text-gray-800 text-sm">{t(problemKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              {t('casos.ctaTitle')}
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('casos.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/primer-cop"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                {t('casos.discoverIdeal')}
              </Link>
              <Link
                to="/booking"
                className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                {t('casos.bookSession')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </SEOOptimized>
  );
}
