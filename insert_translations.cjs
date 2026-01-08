const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/react-app/contexts/LanguageContext.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// --- English Additions ---
const enAdditions = `
    // Hero Split
    'hero.title.part1': 'Restore Your',
    'hero.title.part2': 'Systemic Vitality',
    'hero.cta.primary': 'Book Your Session',
    'hero.cta.secondary': 'Discover Your Path',
    'hero.stats.rating': '5 Star Rating',

    // About
    'about.badge': 'My Journey',
    'about.title': 'Elena Kucherova',
    'about.role': 'Somatic Integration Specialist',
    'about.description1': 'With over 15 years of clinical practice, I have refined a method that goes beyond conventional treatment. My mission is to decode your body language to unlock its innate regeneration capacity.',
    'about.description2': 'I fuse neuroscience precision with manual therapy depth. Each session is a strategic intervention in your nervous system to deactivate pain patterns and restore vital balance.',
    'about.cta': 'Discover the Method',

    // Services General
    'services.badge': 'Therapeutic Excellence',
    'services.title': 'High Impact Interventions',
    'services.subtitle': 'Advanced protocols integrating structural manipulation, neurological rebalancing, and metabolic optimization.',
    'services.cta': 'Explore Protocols',

    // Service: Massage
    'massage.title': 'Advanced Manual Therapy',
    'massage.desc': 'Reconstruction of body architecture. Fusion of deep tissue techniques and myofascial release to eliminate chronic restrictions.',
    'massage.benefit1': 'Structural decompression',
    'massage.benefit2': 'Postural realignment',
    'massage.benefit3': 'Nervous system regulation',
    'massage.benefit4': 'Tissue regeneration',

    // Service: Kinesiology
    'kinesiology.title': 'Clinical Kinesiology',
    'kinesiology.desc': 'Precision biofeedback. We use neurological muscle testing to decode and correct structural, biochemical, and emotional dysfunctions.',
    'kinesiology.benefit1': 'Causal diagnosis',
    'kinesiology.benefit2': 'Neurological optimization',
    'kinesiology.benefit3': 'Structural integration',
    'kinesiology.benefit4': 'Systemic stability',

    // Service: Nutrition
    'nutrition.title': 'Functional Nutrition',
    'nutrition.desc': 'Biochemistry for performance. Nutritional strategies designed to enhance cognitive function, hormonal stability, and cellular vitality.',
    'nutrition.benefit1': 'Metabolic optimization',
    'nutrition.benefit2': 'Microbiota health',
    'nutrition.benefit3': 'Cognitive performance',
    'nutrition.benefit4': 'Hormonal regulation',

    // Problems
    'problems.badge': 'Diagnosis & Resolution',
    'problems.title': 'Pathology Identification',
    'problems.subtitle': 'Clinical approach to common dysfunctions via somatic integration protocols.',
    'problems.backpain.title': 'Chronic Vertebral Dysfunction',
    'problems.backpain.desc': 'Persistent structural compromise limiting functionality.',
    'problems.backpain.solution': 'Clinical Protocol',
    'problems.backpain.solutionDesc': 'Axial decompression and neuromuscular reeducation.',
    'problems.stress.title': 'Nervous System Dysregulation',
    'problems.stress.desc': 'Sympathetic hyperactivation, systemic anxiety, and sleep disruption.',
    'problems.stress.solution': 'Clinical Protocol',
    'problems.stress.solutionDesc': 'Vagal tone restoration and stress response modulation.',
    'problems.fatigue.title': 'Systemic Exhaustion',
    'problems.fatigue.desc': 'Chronic energy deficit and inefficient metabolic recovery.',
    'problems.fatigue.solution': 'Clinical Protocol',
    'problems.fatigue.solutionDesc': 'Mitochondrial reactivation and metabolic unblocking.',
    'problems.injuries.title': 'Sports Traumatology',
    'problems.injuries.desc': 'Biomechanical limitations compromising athletic performance.',
    'problems.injuries.solution': 'Clinical Protocol',
    'problems.injuries.solutionDesc': 'Accelerated functional rehabilitation.',

    // Office
    'office.stats.pain': 'Pain Reduction',
    'office.stats.posture': 'Posture Improvement',
    'office.stats.stress': 'Less Stress',
    'office.session.title': 'Therapeutic Session for Office Workers',
    'office.session.plans': 'View Plans',

    // Students
    'students.challenge3.title': 'Exam Stress',
    'students.challenge3.desc': 'Anxiety and pressure affecting performance',
    'students.result.title': 'Expected Results',
    'students.result.desc': 'Improved focus and calmness',
    'students.stats.concentration': 'Concentration',
    'students.stats.tension': 'Tension Relief',
    'students.stats.stress': 'Stress Mgmt',
    'students.session.title': 'Student Session',

    // VIP
    'vip.plan.platinum': 'Platinum VIP',
    'vip.plan.bronze.desc': 'VIP entry level',
    'vip.plan.silver.desc': 'Perfect for professionals',
    'vip.plan.gold.desc': 'The ultimate VIP experience',
    'vip.plan.platinum.desc': 'Exclusive elite access',
    'vip.feature.priority': 'Priority Access',
    'vip.feature.extended': 'Extended Sessions',
    'vip.feature.support': '24/7 Support',
    'vip.feature.events': 'Exclusive Events',
    'vip.feature.home': 'Home Service',
    'vip.feature.all': 'All Benefits Included',
    'vip.feature.gift': 'Gift Session',
    'vip.feature.consultation': 'Quarterly Consultation',
    'vip.feature.kit': 'Premium Kit',
    'vip.feature.concierge': 'Personal Wellness Manager',
    'vip.feature.retreat': 'Retreat Discount',
`;

const enMarker = "'vip.cta.guarantee': 'SATISFACTION GUARANTEED',";
if (content.includes(enMarker)) {
    content = content.replace(enMarker, enMarker + '\n' + enAdditions);
    console.log('Added English translations');
} else {
    console.error('Could not find English marker');
}


// --- Spanish Additions ---
const esAdditions = `
    // Casos details (partial)
    'casos.problems.backPain.symptom1': 'Dolor punzante, rigidez o tensión constante.',
    'casos.problems.backPain.symptom2': 'Limitación de movimiento.',
    'casos.problems.backPain.symptom3': 'Fatiga postural.',
    'casos.problems.backPain.symptom4': 'Sensación de pesadez.',
    'casos.problems.backPain.cause1': 'Posturas mantenidas y ergonomía deficiente.',
    'casos.problems.backPain.cause2': 'Carga emocional somatizada.',
    'casos.problems.backPain.cause3': 'Sedentarismo.',

    // Onboarding
    'onboarding.questions.userType.title': '¿Cómo te defines?',
    'onboarding.userTypes.student': 'Estudiante',
    'onboarding.userTypes.office': 'Oficina / Ejecutivo',
    'onboarding.userTypes.artist': 'Artista / Creativo',
    'onboarding.userTypes.musician': 'Músico',
    'onboarding.userTypes.athlete': 'Deportista',
    'onboarding.userTypes.parent': 'Padre / Madre',
    'onboarding.userTypes.entrepreneur': 'Emprendedor',
    'onboarding.userTypes.therapist': 'Terapeuta',
    'onboarding.userTypes.senior': 'Senior',
    'onboarding.userTypes.other': 'Otro',
    'onboarding.questions.goals.title': '¿Cuál es tu objetivo principal?',
    'onboarding.goals.stress': 'Estrés y Ansiedad',
    'onboarding.goals.pain': 'Dolor o Molestias',
    'onboarding.goals.posture': 'Mejorar Postura',
    'onboarding.goals.sleep': 'Dormir mejor',
    'onboarding.goals.energy': 'Más Energía',
    'onboarding.goals.focus': 'Enfoque Mental',
    'onboarding.goals.bodyAwareness': 'Conciencia Corporal',
    'onboarding.goals.feelGood': 'Sentirme bien',
    'onboarding.questions.preferredFeeling.title': '¿Cómo quieres sentirte?',
    'onboarding.feelings.calm': 'Calmado/a',
    'onboarding.feelings.light': 'Ligero/a',
    'onboarding.feelings.energized': 'Con energía',
    'onboarding.feelings.focused': 'Enfocado/a',
    'onboarding.feelings.confident': 'Seguro/a',
    'onboarding.questions.approach.title': '¿Qué enfoque prefieres?',
    'onboarding.approaches.massage': 'Masaje / Manual',
    'onboarding.approaches.kinesiology': 'Kinesiología / Test',
    'onboarding.approaches.feldenkrais': 'Movimiento / Feldenkrais',
    'onboarding.approaches.energy': 'Energético',
    'onboarding.approaches.open': 'Abierto a sugerencias',
    'onboarding.questions.timePreference.title': 'Duración preferida',
    'onboarding.time.60min': '60 minutos',
    'onboarding.time.90min': '90 minutos',
    'onboarding.time.120min': '120 minutos',

    // Recommendations
    'recommendations.massage.description': 'Terapia manual para liberar tensión y restaurar la estructura.',
    'recommendations.kinesiology.description': 'Equilibrio del sistema nervioso y emocional mediante test muscular.',
    'recommendations.feldenkrais.description': 'Reeducación del movimiento para una vida sin dolor.',

    // VIP (missing)
    'vip.plan.platinum': 'Platino VIP',
    'vip.plan.bronze.desc': 'Entrada al mundo VIP',
    'vip.plan.silver.desc': 'Perfecto para profesionales',
    'vip.plan.gold.desc': 'La experiencia VIP definitiva',
    'vip.plan.platinum.desc': 'Acceso élite exclusivo',
    'vip.feature.priority': 'Acceso Prioritario',
    'vip.feature.extended': 'Sesiones Extendidas',
    'vip.feature.support': 'Soporte 24/7',
    'vip.feature.events': 'Eventos Exclusivos',
    'vip.feature.home': 'Servicio a Domicilio',
    'vip.feature.all': 'Todos los beneficios',
    'vip.feature.gift': 'Sesión de regalo',
    'vip.feature.consultation': 'Consulta trimestral',
    'vip.feature.kit': 'Kit Premium',
    'vip.feature.concierge': 'Gestor personal',
    'vip.feature.retreat': 'Descuento en retiros',
`;

const esMarker = "'firstTime.seo.keywords': 'no sé qué elegir, formulario personalizado, recomendaciones terapia, servicio ideal, Barcelona, onboarding inteligente',";
if (content.includes(esMarker)) {
    content = content.replace(esMarker, esMarker + '\n' + esAdditions);
    console.log('Added Spanish translations');
} else {
    console.error('Could not find Spanish marker');
}

// --- Russian Additions (Cleaned) ---
const ruAdditions = `
    // Hero Missing
    'hero.title.part1': 'Восстановите',
    'hero.title.part2': 'Системную Витальность',
    'hero.cta.primary': 'Записаться на сеанс',
    'hero.cta.secondary': 'Узнать свой путь',
    'hero.stats.rating': 'Рейтинг 5 звезд',

    // VIP Missing Details
    'vip.plan.platinum': 'Platinum VIP',
    'vip.plan.bronze.desc': 'Вход в VIP',
    'vip.plan.silver.desc': 'Для профессионалов',
    'vip.plan.gold.desc': 'Максимальный опыт',
    'vip.plan.platinum.desc': 'Элитный доступ',
    'vip.feature.priority': 'Приоритет',
    'vip.feature.extended': 'Длинные сессии',
    'vip.feature.support': '24/7 Поддержка',
    'vip.feature.events': 'События',
    'vip.feature.home': 'Выезд на дом',
    'vip.feature.all': 'Все включено',
    'vip.feature.gift': 'Подарочный сеанс',
    'vip.feature.consultation': 'Консультация',
    'vip.feature.kit': 'Premium набор',
    'vip.feature.concierge': 'Личный менеджер',
    'vip.feature.retreat': 'Скидка на ретриты',
`;

const ruMarker = "'vip.cta.guarantee': 'ПОЛНАЯ ГАРАНТИЯ',";
if (content.includes(ruMarker)) {
    content = content.replace(ruMarker, ruMarker + '\n' + ruAdditions);
    console.log('Added Russian translations');
} else {
    // Try without full quote matching if needed, but strict is safer
    console.error('Could not find Russian marker');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Translations updated successfully');
