import { useParams, Link } from 'react-router';
import { ArrowLeft, ArrowRight, CheckCircle, Heart, Brain, Zap, Moon, Activity, Stethoscope, Shield } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEOOptimized from '@/react-app/components/SEOOptimized';

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
  successStory?: string;
}

export default function CasoDetail() {
  const { id } = useParams();

  const problems: Problem[] = [
    {
      id: 'dolor-esquena',
      title: 'Dolor d\'esquena i coll',
      category: 'fisic',
      description: 'Un dels motius més freqüents per venir a consulta. Dolor lumbar, contractures cervicals, rigidesa, o aquella sensació que "carregues el món a l\'esquena".',
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
      href: '/serveis/massatge',
      successStory: 'Anna, 34 anys, treballadora d\'oficina: "Després de 3 anys amb dolor cervical constant, en només 4 sessions vaig recuperar la mobilitat. Ara sé com cuidar la meva postura i el dolor ha desaparegut completament."'
    },
    {
      id: 'estres-ansietat',
      title: 'Estrès i ansietat',
      category: 'emocional',
      description: 'El cos entra en "alerta permanent" i no sab desconnectar. Moltes persones arriben amb palpitacions, tensió al pit, insomni o sensació d\'ofec.',
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
      href: '/serveis/kinesiologia',
      successStory: 'Marc, 28 anys, estudiant de màster: "L\'ansietat m\'estava paralitzant. Amb la Kinesiologia vaig descobrir que tenia bloquejos emocionals d\'una experiència passada. Ara em sento molt més tranquil i segur."'
    },
    {
      id: 'problemes-digestius',
      title: 'Problemes digestius',
      category: 'digestiu',
      description: 'Quan el sistema digestiu es bloqueja, no només costa digerir el menjar —també les emocions i el dia a dia.',
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
      href: '/serveis/nutritio',
      successStory: 'Laura, 41 anys, mare de família: "Anys de problemes digestius van desaparèixer quan vam descobrir les meves intoleràncies. La meva energia ha canviat completament i ara gaudeixo del menjar sense por."'
    },
    {
      id: 'migranyes',
      title: 'Migranyes i tensió cranial',
      category: 'fisic',
      description: 'Dolors recurrents al cap, fotofòbia, sorolls que molesten o cansament extrem. La ment no pot fluir quan el cos està tens.',
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
      href: '/serveis/massatge',
      successStory: 'Carla, 39 anys, dissenyadora: "Tenia migranyes 3-4 vegades per setmana. Després del tractament cranial, fa 6 mesos que no en tinc cap. Ha estat un canvi de vida total."'
    },
    {
      id: 'falta-energia',
      title: 'Falta d\'energia o rendiment baix',
      category: 'energetic',
      description: 'Quan tot costa, quan t\'aixeques cansada o sents que el cos "no respon". No és mandra —és falta de regulació interna.',
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
      href: '/serveis/kinesiologia',
      successStory: 'David, 45 anys, executiu: "Vivia exhaust constantment. Vam descobrir un problema de tiroide i desequilibris nutricionals. Ara em sento amb més energia que fa 10 anys."'
    },
    {
      id: 'problemes-hormonals',
      title: 'Problemes hormonals o cicles irregulars',
      category: 'hormonal',
      description: 'El cos femení parla a través del cicle. Quan hi ha dolor, desajust o esgotament, vol dir que alguna cosa no està en equilibri.',
      symptoms: [
        'Dolor menstrual, canvis d\'humor o regles irregulars',
        'Fatiga premenstrual o insomni',
        'Dificultat per quedar embarassada',
        'Símptomes de menopausa o premenopausa'
      ],
      causes: [
        'Estrès crònic que afecta l\'eix hormonal',
        'Dieta inadequada o desequilibris nutricionals',
        'Bloqueig a nivell d\'hipotàlem o glàndules endocrines',
        'Factors ambientals i disruptors endocrins'
      ],
      treatment: 'Amb Kinesiologia hormonal, osteobalance pèlvic i suport nutricional personalitzat. També treballem la relació amb el propi cos i la feminitat.',
      results: 'Millora el cicle, desapareix el dolor i es restableix un ritme natural i saludable.',
      icon: Shield,
      color: 'pink',
      href: '/serveis/kinesiologia',
      successStory: 'Sofia, 32 anys, professora: "Els meus cicles eren un caos i el dolor menstrual em paralitzava. Després del tractament hormonal, el meu cicle és regular i sense dolor. Em sento reconnectada amb el meu cos."'
    },
    {
      id: 'dificultats-dormir',
      title: 'Dificultats per dormir',
      category: 'son',
      description: 'La ment no para, el cos tampoc. El descans és essencial per regenerar-te i mantenir la salut física i mental.',
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
        'Problemes digestius o hormonals'
      ],
      treatment: 'Amb Feldenkrais, respiració guiada, tècniques vagals i kinesiologia per equilibrar el sistema hormonal.',
      results: 'Millora del son profund i descans reparador després de poques sessions.',
      icon: Moon,
      color: 'indigo',
      href: '/serveis/kinesiologia',
      successStory: 'Elena, 38 anys, advocada: "Fa anys que no dormia d\'un tret. Les tècniques de respiració i relaxació han canviat completament la qualitat del meu son. Ara descanto de veritat."'
    },
    {
      id: 'recuperacio-lesio',
      title: 'Recuperació després d\'una lesió',
      category: 'recuperacio',
      description: 'Després d\'una caiguda, una operació o un accident, el cos pot quedar amb rigidesa o por al moviment.',
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
      href: '/serveis/massatge',
      successStory: 'Jordi, 42 anys, esportista: "Després d\'una lesió de genoll, tenia por de moure\'m. El treball integral em va ajudar no només físicament, sinó també a recuperar la confiança en el meu cos."'
    }
  ];

  const problem = problems.find(p => p.id === id);

  if (!problem) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Problema no trobat</h1>
          <Link to="/casos" className="text-blue-600 hover:text-blue-700">
            Torna a la llista de casos
          </Link>
        </div>
      </Layout>
    );
  }

  const ProblemIcon = problem.icon;

  

  const getBgGradient = (color: string) => {
    const gradients = {
      blue: 'from-blue-600 via-blue-700 to-indigo-700',
      purple: 'from-purple-600 via-purple-700 to-indigo-700',
      green: 'from-green-600 via-green-700 to-emerald-700',
      orange: 'from-orange-600 via-orange-700 to-red-700',
      indigo: 'from-indigo-600 via-indigo-700 to-purple-700',
      pink: 'from-pink-600 via-pink-700 to-purple-700',
      red: 'from-red-600 via-red-700 to-pink-700'
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <SEOOptimized
      title={`${problem.title} | Tractament i solucions | EKA Balance`}
      description={`${problem.description} Descobreix com tractem ${problem.title.toLowerCase()} amb teràpies holístiques efectives.`}
      keywords={`${problem.title}, tractament, teràpia holística, Barcelona`}
      url={`https://ekabalance.com/casos/${problem.id}`}
    >
      <Layout>
        {/* Back navigation */}
        <div className="py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <Link
              to="/casos"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna als casos
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className={`py-20 sm:py-28 bg-gradient-to-br ${getBgGradient(problem.color)}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-lg">
              <ProblemIcon className="w-10 h-10 text-gray-700" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              {problem.title}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {problem.description}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            {/* Symptoms */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                Símptomes típics
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problem.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Causes */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                Causes habituals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problem.causes.map((cause, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                Com ho treballem
              </h2>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {problem.treatment}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                Resultats reals
              </h2>
              <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-200">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {problem.results}
                  </p>
                </div>
              </div>
            </div>

            {/* Success Story */}
            {problem.successStory && (
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
                  Cas d'èxit
                </h2>
                <div className="p-8 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-purple-700 font-semibold text-lg">💬</span>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed text-lg italic">
                        "{problem.successStory}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              El teu cos recorda, però també sap guarir-se
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Si reconeixes aquests símptomes, no cal esperar més. Hem ajudat moltes persones a recuperar el seu benestar físic, mental i emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={problem.href}
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                Més informació sobre el tractament
              </Link>
              <Link
                to="/booking"
                className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                Reserva la teva sessió
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </SEOOptimized>
  );
}
