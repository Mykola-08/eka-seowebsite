const fs = require('fs');

const d = {
  // META / SEO
  'revision360.seo.title': {
    ca: 'Revisió 360° - Diagnòstic Integral Avançat | EKA Balance',
    en: '360° Review - Advanced Integral Diagnosis | EKA Balance',
    es: 'Revisión 360° - Diagnóstico Integral Avanzado | EKA Balance',
    ru: 'Обзор 360° - Передовая Интегральная Диагностика | EKA Balance'
  },
  'revision360.seo.description': {
    ca: 'Avaluació completa del teu benestar: estructural, químic, emocional i energètic. Descobreix l\'origen real dels teus símptomes amb la nostra metodologia exclusiva.',
    en: 'Complete assessment of your well-being: structural, chemical, emotional, and energetic. Discover the real origin of your symptoms with our exclusive methodology.',
    es: 'Evaluación completa de tu bienestar: estructural, químico, emocional y energético. Descubre el origen real de tus síntomas con nuestra metodología exclusiva.',
    ru: 'Полная оценка вашего самочувствия: структурная, химическая, эмоциональная и энергетическая. Узнайте истинную причину ваших симптомов с помощью нашей эксклюзивной методологии.'
  },
  'revision360.seo.keywords': {
    ca: 'revisió 360, diagnòstic integral, kinesiologia avançada, salut holística, anàlisi postural, benestar emocional, barcelona',
    en: '360 review, integral diagnosis, advanced kinesiology, holistic health, postural analysis, emotional wellness, barcelona',
    es: 'revisión 360, diagnóstico integral, kinesiología avanzada, salud holística, análisis postural, bienestar emocional, barcelona',
    ru: 'обзор 360, интегральная диагностика, продвинутая кинезиология, холистическое здоровье, анализ осанки, эмоциональное благополучие, барселона'
  },
  
  // HERO
  'revision360.hero.badge': {
    ca: 'Metodologia Exclusiva EKA', en: 'Exclusive EKA Methodology', es: 'Metodología Exclusiva EKA', ru: 'Эксклюзивная Методология EKA'
  },
  'revision360.hero.title': {
    ca: 'Revisió 360°', en: '360° Review', es: 'Revisión 360°', ru: 'Обзор 360°'
  },
  'revision360.hero.title.part1': {
    ca: 'Revisió', en: '360°', es: 'Revisión', ru: 'Обзор'
  },
  'revision360.hero.title.part2': {
    ca: '360°', en: 'Review', es: '360°', ru: '360°'
  },
  'revision360.hero.subtitle': {
    ca: 'No és només un diagnòstic. És el mapa complet del teu cos, la teva bioquímica i les teves emocions per trobar l\'origen real del que et passa.',
    en: 'It\'s not just a diagnosis. It\'s the complete map of your body, your biochemistry, and your emotions to find the real origin of what\'s happening to you.',
    es: 'No es solo un diagnóstico. Es el mapa completo de tu cuerpo, tu bioquímica y tus emociones para encontrar el origen real de lo que te pasa.',
    ru: 'Это не просто диагностика. Это полная карта вашего тела, вашей биохимии и ваших эмоций, чтобы найти истинную причину того, что с вами происходит.'
  },
  'revision360.whatsapp.booking': {
    ca: 'Hola, vull reservar una Revisió 360°', en: 'Hi, I want to book a 360° Review', es: 'Hola, quiero reservar una Revisión 360°', ru: 'Здравствуйте, я хочу забронировать Обзор 360°'
  },
  'revision360.hero.cta': {
    ca: 'Reserva la teva revisió', en: 'Book your review', es: 'Reserva tu revisión', ru: 'Забронировать обзор'
  },
  'revision360.hero.cta.book': {
    ca: 'Reservar la meva Revisió 360°', en: 'Book my 360° Review', es: 'Reservar mi Revisión 360°', ru: 'Забронировать мой Обзор 360°'
  },
  'revision360.hero.cta.learn': {
    ca: 'Com funciona?', en: 'How does it work?', es: '¿Cómo funciona?', ru: 'Как это работает?'
  },
  'revision360.hero.quote': {
    ca: 'El cos recorda el que la ment oblida.', en: 'The body remembers what the mind forgets.', es: 'El cuerpo recuerda lo que la mente olvida.', ru: 'Тело помнит то, что забывает разум.'
  },

  // BENEFITS SECTION
  'revision360.benefits.badge': { ca: 'Resultats Reals', en: 'Real Results', es: 'Resultados Reales', ru: 'Реальные Результаты' },
  'revision360.benefits.title': { ca: 'Descobreix què canviarà al teu cos', en: 'Discover what will change in your body', es: 'Descubre qué cambiará en tu cuerpo', ru: 'Узнайте, что изменится в вашем теле' },
  'revision360.benefits.subtitle': { ca: 'Una intervenció profunda amb beneficis immediats i duradors.', en: 'A deep intervention with immediate and lasting benefits.', es: 'Una intervención profunda con beneficios inmediatos y duraderos.', ru: 'Глубокое вмешательство с немедленными и долгосрочными преимуществами.' },
  'revision360.benefits.philosophy': { ca: 'El benestar és la convergència d\'art i ciència', en: 'Wellness is the convergence of art and science', es: 'El bienestar es la convergencia de arte y ciencia', ru: 'Благополучие - это слияние искусства и науки' },
  
  // benefit 1: Ment
  'revision360.benefits.benefit1.title': { ca: 'Claredat Mental i Foc', en: 'Mental Clarity and Focus', es: 'Claridad Mental y Foco', ru: 'Ясность ума и Фокус' },
  'revision360.benefits.benefit1.description': { ca: 'Allibera la boira mental equilibrant la connexió neuromotora.', en: 'Clear brain fog by balancing your neuromotor connection.', es: 'Libera la niebla mental equilibrando la conexión neuromotora.', ru: 'Избавьтесь от тумана в голове за счет балансировки нейромоторных связей.' },
  'revision360.benefits.benefit1.science': { ca: 'Impacte directe en el còrtex prefrontal', en: 'Direct impact on the prefrontal cortex', es: 'Impacto directo en el córtex prefrontal', ru: 'Прямое влияние на префронтальную кору' },

  // benefit 2: Heart
  'revision360.benefits.benefit2.title': { ca: 'Equilibri Emocional', en: 'Emotional Balance', es: 'Equilibrio Emocional', ru: 'Эмоциональный Баланс' },
  'revision360.benefits.benefit2.description': { ca: 'Desbloqueja traumes guardats al cos restablint el sistema nerviós.', en: 'Unblock traumas stored in the body by resetting the nervous system.', es: 'Desbloquea traumas guardados en el cuerpo restableciendo el sistema nervioso.', ru: 'Снимает блокировки травм в теле путем перезагрузки нервной системы.' },
  'revision360.benefits.benefit2.science': { ca: 'Regulació de l\'eix vagal', en: 'Vagal axis regulation', es: 'Regulación del eje vagal', ru: 'Регуляция вагусной оси' },

  // benefit 3: Zap
  'revision360.benefits.benefit3.title': { ca: 'Activació Vital', en: 'Vital Activation', es: 'Activación Vital', ru: 'Жизненная Активация' },
  'revision360.benefits.benefit3.description': { ca: 'Recupera l\'energia optimitzant la teva resposta bioquímica.', en: 'Recover energy by optimizing your biochemical response.', es: 'Recupera la energía optimizando tu respuesta bioquímica.', ru: 'Восстанавливает энергию за счет оптимизации биохимической реакции.' },
  'revision360.benefits.benefit3.science': { ca: 'Respiració cel·lular mitocondrial', en: 'Mitochondrial cellular respiration', es: 'Respiración celular mitocondrial', ru: 'Митохондриальное клеточное дыхание' },

  // benefit 4: Shield
  'revision360.benefits.benefit4.title': { ca: 'Prevenció i Immunitat', en: 'Prevention and Immunity', es: 'Prevención e Inmunidad', ru: 'Профилактика и Иммунитет' },
  'revision360.benefits.benefit4.description': { ca: 'Reforça les defenses naturals per prevenir disfuncions.', en: 'Reinforce natural defenses to prevent dysfunctions.', es: 'Refuerza las defensas naturales para prevenir disfunciones.', ru: 'Укрепляет естественные защитные силы для предотвращения дисфункций.' },
  'revision360.benefits.benefit4.science': { ca: 'Sistema limfàtic actiu', en: 'Active lymphatic system', es: 'Sistema linfático activo', ru: 'Активная лимфатическая система' },

  // benefit 5: Moon
  'revision360.benefits.benefit5.title': { ca: 'Descans Reparador', en: 'Restorative Sleep', es: 'Descanso Reparador', ru: 'Восстанавливающий Сон' },
  'revision360.benefits.benefit5.description': { ca: 'Reestableix ritmes circadians per aconseguir un son profund.', en: 'Reset circadian rhythms to achieve deep sleep.', es: 'Reestablece ritmos circadianos para lograr un sueño profundo.', ru: 'Восстанавливает циркадные ритмы для глубокого сна.' },
  'revision360.benefits.benefit5.science': { ca: 'Homeòstasi hormonal', en: 'Hormonal homeostasis', es: 'Homeostasis hormonal', ru: 'Гормональный гомеостаз' },

  // benefit 6: Smile
  'revision360.benefits.benefit6.title': { ca: 'Benestar Integral', en: 'Comprehensive Wellbeing', es: 'Bienestar Integral', ru: 'Комплексное Благополучие' },
  'revision360.benefits.benefit6.description': { ca: 'Harmonitza ment i cos per fluir amb la rutina.', en: 'Harmonize mind and body to flow with your routine.', es: 'Armoniza mente y cuerpo para fluir con la rutina.', ru: 'Гармонизирует ум и тело, чтобы легко справляться с рутиной.' },
  'revision360.benefits.benefit6.science': { ca: 'Coherència holística', en: 'Holistic coherence', es: 'Coherencia holística', ru: 'Холистическая согласованность' },

  // benefit 7: Activity
  'revision360.benefits.benefit7.title': { ca: 'Llibertat Física', en: 'Physical Freedom', es: 'Libertad Física', ru: 'Физическая Свобода' },
  'revision360.benefits.benefit7.description': { ca: 'Augmenta la mobilitat alliberant tensions estructurals.', en: 'Increase mobility by releasing structural tensions.', es: 'Aumenta la movilidad liberando tensiones estructurales.', ru: 'Увеличивает подвижность, снимая структурные напряжения.' },
  'revision360.benefits.benefit7.science': { ca: 'Biomecànica postural', en: 'Postural biomechanics', es: 'Biomecánica postural', ru: 'Постуральная биомеханика' },

  // benefit 8: Compass
  'revision360.benefits.benefit8.title': { ca: 'Propòsit i Direcció', en: 'Purpose and Direction', es: 'Propósito y Dirección', ru: 'Цель и Направление' },
  'revision360.benefits.benefit8.description': { ca: 'Estableix un nord clar alliberant bloquejos energètics.', en: 'Set a clear true north by releasing energetic blockages.', es: 'Establece un norte claro liberando bloqueos energéticos.', ru: 'Устанавливает ясное направление жизни, снимая энергетические блоки.' },
  'revision360.benefits.benefit8.science': { ca: 'Flux de meridians', en: 'Meridian flow', es: 'Flujo de meridianos', ru: 'Поток меридианов' },

  // benefit 9: Sparkles
  'revision360.benefits.benefit9.title': { ca: 'Vitalitat Radiant', en: 'Radiant Vitality', es: 'Vitalidad Radiante', ru: 'Сияющая Жизненная Сила' },
  'revision360.benefits.benefit9.description': { ca: 'Renovació cel·lular i rejoveniment del sistema intern.', en: 'Cellular renewal and rejuvenation of the internal system.', es: 'Renovación celular y rejuvenecimiento del sistema interno.', ru: 'Клеточное обновление и омоложение внутренней системы.' },
  'revision360.benefits.benefit9.science': { ca: 'Medicina regenerativa', en: 'Regenerative medicine', es: 'Medicina regenerativa', ru: 'Регенеративная медицина' },

  // WHY360
  'revision360.why360.badge': { ca: 'Per què Funciona', en: 'Why it Works', es: 'Por qué Funciona', ru: 'Почему это Работает' },
  'revision360.why360.title': { ca: 'L\'arrel del problema, no només el símptoma', en: 'The root of the problem, not just the symptom', es: 'La raíz del problema, no solo el síntoma', ru: 'Корень проблемы, а не только симптом' },
  'revision360.why360.subtitle': { ca: 'Entenem el teu cos com un tot connectat, on cada sistema influeix en l\'altre.', en: 'We understand your body as a connected whole, where each system influences the other.', es: 'Entendemos tu cuerpo como un todo conectado, donde cada sistema influye en el otro.', ru: 'Мы понимаем ваше тело как единое целое, где каждая система влияет на другую.' },
  'revision360.why360.philosophy': { ca: 'Ciència adaptada a l\'espiritualitat del cos', en: 'Science adapted to the spirituality of the body', es: 'Ciencia adaptada a la espiritualidad del cuerpo', ru: 'Наука, адаптированная к духовности тела' },
  'revision360.why360.layers.physical': { ca: 'Sistema Muscular', en: 'Muscular System', es: 'Sistema Muscular', ru: 'Мышечная Система' },
  'revision360.why360.physical.desc': { ca: 'Manteniment de l\'estructura bàsica i el moviment.', en: 'Maintenance of basic structure and movement.', es: 'Mantenimiento de la estructura básica y el movimiento.', ru: 'Поддержание базовой структуры и движения.' },
  'revision360.why360.layers.structural': { ca: 'Alineació Òssia', en: 'Bone Alignment', es: 'Alineación Ósea', ru: 'Костное Выравнивание' },
  'revision360.why360.structural.desc': { ca: 'Estabilitat que prevé càrregues i desgast.', en: 'Stability that prevents loads and wear.', es: 'Estabilidad que previene cargas y desgaste.', ru: 'Стабильность, предотвращающая нагрузки и износ.' },
  'revision360.why360.layers.emotional': { ca: 'Emocional', en: 'Emotional', es: 'Emocional', ru: 'Эмоциональный' },
  'revision360.why360.emotional.desc': { ca: 'Alliberament de patrons atrapats als teixits.', en: 'Release of patterns trapped in the tissues.', es: 'Liberación de patrones atrapados en los tejidos.', ru: 'Освобождение паттернов, застрявших в тканях.' },
  'revision360.why360.layers.energetic': { ca: 'Cos Energètic', en: 'Energetic Body', es: 'Cuerpo Energético', ru: 'Энергетическое Тело' },
  'revision360.why360.energetic.desc': { ca: 'Fluxe de la informació sistèmica del cos.', en: 'Flow of systemic information of the body.', es: 'Flujo de la información sistémica del cuerpo.', ru: 'Поток системной информации тела.' },

  'revision360.why360.modal.title': { ca: 'Impacte 360°', en: '360° Impact', es: 'Impacto 360°', ru: 'Влияние 360°' },
  'revision360.why360.modal.intro': { ca: 'Dins l\'ecosistema de curació', en: 'Within the healing ecosystem', es: 'Dentro del ecosistema de curación', ru: 'Внутри экосистемы исцеления' },
  'revision360.why360.modal.integration.title': { ca: 'Integració Profunda', en: 'Deep Integration', es: 'Integración Profunda', ru: 'Глубокая Интеграция' },
  'revision360.why360.modal.integration.description': { ca: 'Una nova visió neurològica i fisiològica.', en: 'A new neurological and physiological vision.', es: 'Una nueva visión neurológica y fisiológica.', ru: 'Новое неврологическое и физиологическое видение.' },
  'revision360.why360.modal.dimensions.title': { ca: 'Les Quatre Dimensions', en: 'The Four Dimensions', es: 'Las Cuatro Dimensiones', ru: 'Четыре Измерения' },
  'revision360.why360.modal.importance.title': { ca: 'La Importància', en: 'The Importance', es: 'La Importancia', ru: 'Важность' },
  'revision360.why360.modal.importance.description': { ca: 'Crucial per mantenir el fràgil equilibri corporal de per vida.', en: 'Crucial to maintain the fragile bodily balance for life.', es: 'Crucial para mantener el frágil equilibrio corporal de por vida.', ru: 'Крайне важно для поддержания хрупкого баланса тела на всю жизнь.' },

  // SERVICE
  'revision360.service.badge': { ca: 'Com Funciona', en: 'How it Works', es: 'Cómo Funciona', ru: 'Как это Работает' },
  'revision360.service.title': { ca: 'El Procés Integral', en: 'The Integral Process', es: 'El Proceso Integral', ru: 'Интегральный Процесс' },
  'revision360.service.subtitle': { ca: 'Una metodologia precisa i curosament orquestrada en diverses fases per garantir resultats òptims.', en: 'A precise methodology carefully orchestrated in several phases to ensure optimal results.', es: 'Una metodología precisa y cuidadosamente orquestada en diversas fases para garantizar resultados óptimos.', ru: 'Точная методология, тщательно спланированная в несколько этапов для обеспечения оптимальных результатов.' },
  'revision360.service.expect': { ca: 'Què esperar', en: 'What to expect', es: 'Qué esperar', ru: 'Чего ожидать' },
  'revision360.service.step': { ca: 'Fase', en: 'Phase', es: 'Fase', ru: 'Фаза' },

  'revision360.service.step1.title': { ca: 'Entrevista Bio-Clínica', en: 'Bio-Clinical Interview', es: 'Entrevista Bio-Clínica', ru: 'Био-Клиническое Интервью' },
  'revision360.service.step1.description': { ca: 'Definim l\'estat de salut general abans d\'actuar.', en: 'We define the general health status before acting.', es: 'Definimos el estado de salud general antes de actuar.', ru: 'Мы определяем общее состояние здоровья до начала действий.' },
  'revision360.service.step1.details.1': { ca: 'Historial metge detallat', en: 'Detailed medical history', es: 'Historial médico detallado', ru: 'Подробная история болезни' },
  'revision360.service.step1.details.2': { ca: 'Hàbits dietètics', en: 'Dietary habits', es: 'Hábitos dietéticos', ru: 'Диетические привычки' },
  'revision360.service.step1.details.3': { ca: 'Mapa de dolor primari', en: 'Primary pain map', es: 'Mapa de dolor primario', ru: 'Карта первичной боли' },
  'revision360.service.step1.details.4': { ca: 'Anàlisi context psicosocial', en: 'Psychosocial context analysis', es: 'Análisis del contexto psicosocial', ru: 'Анализ психосоциального контекста' },

  'revision360.service.step2.title': { ca: 'Avaluació Kinesiològica', en: 'Kinesiological Evaluation', es: 'Evaluación Kinesiológica', ru: 'Кинезиологическая Оценка' },
  'revision360.service.step2.description': { ca: 'Interroguem la informació cel·lular i muscular en temps real.', en: 'We interrogate the cellular and muscular information in real time.', es: 'Interrogamos la información celular y muscular en tiempo real.', ru: 'Мы запрашиваем клеточную и мышечную информацию в режиме реального времени.' },
  'revision360.service.step2.details.1': { ca: 'Testing neuromuscular', en: 'Neuromuscular testing', es: 'Testing neuromuscular', ru: 'Нейромышечное тестирование' },
  'revision360.service.step2.details.2': { ca: 'Identificació de bloquejos', en: 'Identification of blockages', es: 'Identificación de bloqueos', ru: 'Выявление блокировок' },
  'revision360.service.step2.details.3': { ca: 'Filtre de prioritats estructurals', en: 'Filter of structural priorities', es: 'Filtro de prioridades estructurales', ru: 'Фильтр структурных приоритетов' },
  'revision360.service.step2.details.4': { ca: 'Definició del vector central', en: 'Definition of the central vector', es: 'Definición del vector central', ru: 'Определение центрального вектора' },

  'revision360.service.step3.title': { ca: 'Sincronització i Tractament', en: 'Synchronization and Treatment', es: 'Sincronización y Tratamiento', ru: 'Синхронизация и Лечение' },
  'revision360.service.step3.description': { ca: 'Apliquem protocols de reajustament adaptats als resultats.', en: 'We apply readjustment protocols adapted to the results.', es: 'Aplicamos protocolos de reajuste adaptados a los resultados.', ru: 'Мы применяем протоколы корректировки, адаптированные к результатам.' },
  'revision360.service.step3.details.1': { ca: 'Manipulació osteopàtica subtil', en: 'Subtle osteopathic manipulation', es: 'Manipulación osteopática sutil', ru: 'Тонкие остеопатические манипуляции' },
  'revision360.service.step3.details.2': { ca: 'Descompressió fascial avançada', en: 'Advanced fascial decompression', es: 'Descompresión fascial avanzada', ru: 'Продвинутая декомпрессия фасций' },
  'revision360.service.step3.details.3': { ca: 'Tècniques de polaritat magnètica', en: 'Polarity and magnetic techniques', es: 'Técnicas de polaridad magnética', ru: 'Техники магнитной полярности' },
  'revision360.service.step3.details.4': { ca: 'Equilibrat orgànic-visceral', en: 'Organic-visceral balancing', es: 'Equilibrado orgánico-visceral', ru: 'Органо-висцеральное балансирование' },

  'revision360.service.step4.title': { ca: 'Integració i Ruta de Salut', en: 'Integration and Health Roadmap', es: 'Integración y Ruta de Salud', ru: 'Интеграция и План Здоровья' },
  'revision360.service.step4.description': { ca: 'Prescripció de les rutines post-sessió i tancament del cicle.', en: 'Prescription of post-session routines and closing of the cycle.', es: 'Prescripción de las rutinas post-sesión y cierre del ciclo.', ru: 'Назначение послесессионных процедур и завершение цикла.' },
  'revision360.service.step4.details.1': { ca: 'Esquema de suplementació o dieta', en: 'Supplementation or diet scheme', es: 'Esquema de suplementación o dieta', ru: 'Схема добавок или диеты' },
  'revision360.service.step4.details.2': { ca: 'Recomanacions bio-mecàniques', en: 'Biomechanical recommendations', es: 'Recomendaciones bio-mecánicas', ru: 'Биомеханические рекомендации' },
  'revision360.service.step4.details.3': { ca: 'Planificació propera sessió', en: 'Planning next session', es: 'Planificación próxima sesión', ru: 'Планирование следующей сессии' },
  'revision360.service.step4.details.4': { ca: 'Informe general d\'assoliments', en: 'General achievements report', es: 'Informe general de logros', ru: 'Общий отчет о достижениях' },

  'revision360.service.total.title': { ca: 'Temps Total', en: 'Total Time', es: 'Tiempo Total', ru: 'Общее Время' },
  'revision360.service.total.duration': { ca: 'De 60 a 90 minuts depenent del pla', en: '60 to 90 minutes depending on plan', es: 'De 60 a 90 minutos dependiendo del plan', ru: 'От 60 до 90 минут в зависимости от плана' },
  'revision360.service.total.note': { ca: '(Cada organisme requereix el seu ritme)', en: '(Every organism requires its own pace)', es: '(Cada organismo requiere su ritmo)', ru: '(Каждому организму требуется свой темп)' },

  // VARIANTS
  'revision360.variants.badge': { ca: 'Plans de Servei', en: 'Service Plans', es: 'Planes de Servicio', ru: 'Планы Обслуживания' },
  'revision360.variants.title': { ca: 'Adapta la revisió a la teva realitat', en: 'Adapt the review to your reality', es: 'Adapta la revisión a tu realidad', ru: 'Адаптируйте обзор к вашей реальности' },
  'revision360.variants.subtitle': { ca: 'Opcions pensades per a cada fase de l\'evolució corporal.', en: 'Options designed for each phase of body evolution.', es: 'Opciones pensadas para cada fase de la evolución corporal.', ru: 'Варианты, разработанные для каждого этапа эволюции тела.' },
  'revision360.variants.idealFor': { ca: 'Ideal per a', en: 'Ideal for', es: 'Ideal para', ru: 'Идеально для' },
  'revision360.variants.includes': { ca: 'Aquesta variant inclou', en: 'This variant includes', es: 'Esta variante incluye', ru: 'Этот вариант включает' },
  'revision360.variants.sessionDuration': { ca: 'Durada', en: 'Duration', es: 'Duración', ru: 'Продолжительность' },
  'revision360.variants.investment': { ca: 'Inversió', en: 'Investment', es: 'Inversión', ru: 'Инвестиции' },

  // variant: reset
  'revision360.variants.reset.title': { ca: 'Reset Tàctic', en: 'Tactical Reset', es: 'Reset Táctico', ru: 'Тактический Сброс' },
  'revision360.variants.reset.subtitle': { ca: 'Intervenció de xoc breu i eficaç.', en: 'Short and effective shock intervention.', es: 'Intervención de choque breve y eficaz.', ru: 'Краткое и эффективное шоковое вмешательство.' },
  'revision360.variants.reset.description': { ca: 'Apropiat quan un dolor puntual ens bloqueja ràpidament.', en: 'Appropriate when isolated pain blocks us quickly.', es: 'Apropiado cuando un dolor puntual nos bloquea rápidamente.', ru: 'Подходит, когда острая боль быстро блокирует нас.' },
  'revision360.variants.reset.idealFor.1': { ca: 'Dolors aguts i recents', en: 'Acute and recent pain', es: 'Dolores agudos y recientes', ru: 'Острая и недавняя боль' },
  'revision360.variants.reset.idealFor.2': { ca: 'Lesions esportives de grau lleu', en: 'Mild sports injuries', es: 'Lesiones deportivas de grado leve', ru: 'Легкие спортивные травмы' },
  'revision360.variants.reset.idealFor.3': { ca: 'Contractures d\'oficina', en: 'Office contractures', es: 'Contracturas de oficina', ru: 'Офисные контрактуры' },
  'revision360.variants.reset.idealFor.4': { ca: 'Descens sobtat d\'energia', en: 'Sudden drop in energy', es: 'Descenso repentino de energía', ru: 'Внезапный упадок сил' },
  'revision360.variants.reset.duration': { ca: '~45 minuts', en: '~45 minutes', es: '~45 minutos', ru: '~45 минут' },
  'revision360.variants.reset.includes.1': { ca: 'Diagnòstic Kinesiològic Exprés', en: 'Express Kinesiological Diagnosis', es: 'Diagnóstico Kinesiológico Exprés', ru: 'Экспресс Кинезиологическая Диагностика' },
  'revision360.variants.reset.includes.2': { ca: 'Test estructural muscular', en: 'Muscular structural test', es: 'Test estructural muscular', ru: 'Мышечный структурный тест' },
  'revision360.variants.reset.includes.3': { ca: 'Alineació vertebral bàsica', en: 'Basic vertebral alignment', es: 'Alineación vertebral básica', ru: 'Базовое выравнивание позвоночника' },
  'revision360.variants.reset.includes.4': { ca: 'Recomanacions al moment', en: 'On-the-spot recommendations', es: 'Recomendaciones al momento', ru: 'Рекомендации на месте' },

  // variant: mapping
  'revision360.variants.mapping.title': { ca: 'Mapping Complet', en: 'Complete Mapping', es: 'Mapping Completo', ru: 'Полное Картирование' },
  'revision360.variants.mapping.subtitle': { ca: 'Visió profunda del teu cos.', en: 'Deep vision of your body.', es: 'Visión profunda de tu cuerpo.', ru: 'Глубокое видение вашего тела.' },
  'revision360.variants.mapping.description': { ca: 'Escaneig complert per a símptomes de llarg recorregut que no troben orígen en proves habituals.', en: 'Complete scan for long-term symptoms that do not find an origin in usual tests.', es: 'Escaneo completo para síntomas de largo recorrido que no encuentran origen en pruebas habituales.', ru: 'Полное сканирование для хронических симптомов, которые не находят причину в обычных анализах.' },
  'revision360.variants.mapping.idealFor.1': { ca: 'Migranyes cròniques', en: 'Chronic migraines', es: 'Migrañas crónicas', ru: 'Хронические мигрени' },
  'revision360.variants.mapping.idealFor.2': { ca: 'Trastorns digestius repetitius', en: 'Recurrent digestive disorders', es: 'Trastornos digestivos repetitivos', ru: 'Рецидивирующие проблемы с пищеварением' },
  'revision360.variants.mapping.idealFor.3': { ca: 'Insomni prolongat', en: 'Long-term insomnia', es: 'Insomnio prolongado', ru: 'Длительная бессонница' },
  'revision360.variants.mapping.idealFor.4': { ca: 'Quadres d\'ansietat o burnout', en: 'Anxiety or burnout issues', es: 'Cuadros de ansiedad o burnout', ru: 'Тревожность или выгорание' },
  'revision360.variants.mapping.duration': { ca: '60 - 75 minuts', en: '60 - 75 minutes', es: '60 - 75 minutos', ru: '60 - 75 минут' },
  'revision360.variants.mapping.includes.1': { ca: 'Mapping Bioquímic Complet', en: 'Complete Biochemical Mapping', es: 'Mapping Bioquímico Completo', ru: 'Полное Биохимическое Картирование' },
  'revision360.variants.mapping.includes.2': { ca: 'Tractament emocional i alliberament fascial', en: 'Emotional treatment and fascial release', es: 'Tratamiento emocional y liberación fascial', ru: 'Эмоциональное лечение и фасциальное освобождение' },
  'revision360.variants.mapping.includes.3': { ca: 'Test de toxicitats i elements en deficiència', en: 'Toxicity and element deficiency test', es: 'Test de toxicidades y elementos en deficiencia', ru: 'Тест на токсичность и дефицит элементов' },
  'revision360.variants.mapping.includes.4': { ca: 'Planificació nutricional (Agenda d\'1 mes)', en: 'Nutritional planning (1-month schedule)', es: 'Planificación nutricional (Agenda de 1 mes)', ru: 'Планирование питания (график на 1 месяц)' },

  // variant: alignment
  'revision360.variants.alignment.title': { ca: 'Alineació i Expansió', en: 'Alignment and Expansion', es: 'Alineación y Expansión', ru: 'Выравнивание и Расширение' },
  'revision360.variants.alignment.subtitle': { ca: 'Per als qui ja estant bé, volen estar millor.', en: 'For those who are already well and want to be better.', es: 'Para los que ya estando bien, quieren estar mejor.', ru: 'Для тех, кто уже чувствует себя хорошо и хочет быть еще лучше.' },
  'revision360.variants.alignment.description': { ca: 'Un protocol orientat al manteniment i al descobriment del màxim potencial del cos humà.', en: 'A protocol aimed at maintenance and discovering the maximum potential of the human body.', es: 'Un protocolo orientado al mantenimiento y al descubrimiento del máximo potencial del cuerpo humano.', ru: 'Протокол, направленный на поддержание и раскрытие максимального потенциала человеческого тела.' },
  'revision360.variants.alignment.idealFor.1': { ca: 'Esportistes preparant fites', en: 'Athletes preparing for goals', es: 'Deportistas preparando metas', ru: 'Спортсмены, готовящиеся к целям' },
  'revision360.variants.alignment.idealFor.2': { ca: 'Executives d\'alt rendiment', en: 'High-performance executives', es: 'Ejecutivas de alto rendimiento', ru: 'Высокоэффективные руководители' },
  'revision360.variants.alignment.idealFor.3': { ca: 'Artistes buscant centrabilitat', en: 'Artists seeking centeredness', es: 'Artistas buscando centrabilidad', ru: 'Артисты, ищущие концентрацию' },
  'revision360.variants.alignment.idealFor.4': { ca: 'Manteniment vital proactiu', en: 'Proactive vital maintenance', es: 'Mantenimiento vital proactivo', ru: 'Проактивное поддержание жизненного тонуса' },
  'revision360.variants.alignment.duration': { ca: '90 minuts', en: '90 minutes', es: '90 minutos', ru: '90 минут' },
  'revision360.variants.alignment.includes.1': { ca: 'Auditoria avançada de 4 capes', en: 'Advanced 4-layer audit', es: 'Auditoría avanzada de 4 capas', ru: 'Продвинутый аудит 4 уровней' },
  'revision360.variants.alignment.includes.2': { ca: 'Optimització de circuits energètics', en: 'Energetic circuit optimization', es: 'Optimización de circuitos energéticos', ru: 'Оптимизация энергетических контуров' },
  'revision360.variants.alignment.includes.3': { ca: 'Regulació profunda del nervi vague', en: 'Deep vagus nerve regulation', es: 'Regulación profunda del nervio vago', ru: 'Глубокая регуляция блуждающего нерва' },
  'revision360.variants.alignment.includes.4': { ca: 'Suport suplementari superior inclòs', en: 'Premium supplement support included', es: 'Apoyo suplementario superior incluido', ru: 'Премиальная поддержка добавками включена' },

  // variant: integral
  'revision360.variants.integral.title': { ca: 'Experiència Integral 360', en: 'Full 360 Integral Experience', es: 'Experiencia Integral 360', ru: 'Полный 360 Интегральный Опыт' },
  'revision360.variants.integral.subtitle': { ca: 'El zenit del seguiment clínic terapèutic.', en: 'The zenith of clinical therapeutic follow-up.', es: 'El cénit del seguimiento clínico terapéutico.', ru: 'Вершина клинического терапевтического наблюдения.' },
  'revision360.variants.integral.description': { ca: 'Un programa complert no només de revisió, sinó acompanyament sostingut per donar un gir absolut.', en: 'A complete program of not only review, but sustained support to completely turn things around.', es: 'Un programa completo no solo de revisión, sino acompañamiento sostenido para dar un giro absoluto.', ru: 'Полная программа не только оценки, но и постоянной поддержки для полного поворота в жизни.' },
  'revision360.variants.integral.idealFor.1': { ca: 'Rehabilitació post-operatòria', en: 'Post-operative rehabilitation', es: 'Rehabilitación post-operatoria', ru: 'Послеоперационная реабилитация' },
  'revision360.variants.integral.idealFor.2': { ca: 'Quadres autoimmunes severs', en: 'Severe autoimmune conditions', es: 'Cuadros autoinmunes severos', ru: 'Тяжелые аутоиммунные состояния' },
  'revision360.variants.integral.idealFor.3': { ca: 'Desequilibri metabòlic global', en: 'Global metabolic imbalance', es: 'Desequilibrio metabólico global', ru: 'Глобальный метаболический дисбаланс' },
  'revision360.variants.integral.idealFor.4': { ca: 'Compromís absolut amb la pròpia salut', en: 'Absolute commitment to one\'s health', es: 'Compromiso absoluto con la propia salud', ru: 'Абсолютная приверженность своему здоровью' },
  'revision360.variants.integral.duration': { ca: 'Múltiples sessions (a definir)', en: 'Multiple sessions (to be defined)', es: 'Múltiples sesiones (a definir)', ru: 'Несколько сессий (будет определено)' },
  'revision360.variants.integral.includes.1': { ca: 'Primera sessió de 120 minuts', en: 'First 120-minute session', es: 'Primera sesión de 120 minutos', ru: 'Первая закрытая сессия на 120 минут' },
  'revision360.variants.integral.includes.2': { ca: '5 sessions de seguiment', en: '5 follow-up sessions', es: '5 sesiones de seguimiento', ru: '5 сессий наблюдения' },
  'revision360.variants.integral.includes.3': { ca: 'Contacte prioritari via WhatsApp', en: 'Priority WhatsApp contact', es: 'Contacto prioritario vía WhatsApp', ru: 'Приоритетный контакт через WhatsApp' },
  'revision360.variants.integral.includes.4': { ca: 'Caixa de Suplements personalitzada EKA', en: 'Personalized EKA Supplement Box', es: 'Caja de Suplementos personalizada EKA', ru: 'Персонализированная коробка добавок EKA' },

  // FINAL & FOOTER
  'revision360.final.title': { ca: 'Pren el Control de la Teva Fisiologia Avui', en: 'Take Control of Your Physiology Today', es: 'Toma el Control de Tu Fisiología Hoy', ru: 'Возьмите Контроль над Своей Физиологией Сегодня' },
  'revision360.final.subtitle': { ca: 'Només necessites el primer pas per iniciar la cadena de reacció positiva.', en: 'You only need the first step to start the positive reaction chain.', es: 'Solo necesitas el primer paso para iniciar la cadena de reacción positiva.', ru: 'Вам нужен только первый шаг, чтобы запустить положительную цепную реакцию.' },
  
  'revision360.alt.ekaLogo': { ca: 'Logotip d\'EKA Balance', en: 'EKA Balance Logo', es: 'Logotipo de EKA Balance', ru: 'Логотип EKA Balance' },
  'revision360.footer.brand': { ca: 'EKA. La ciència del benestar.', en: 'EKA. The science of wellness.', es: 'EKA. La ciencia del bienestar.', ru: 'EKA. Наука благополучия.' },
  'revision360.footer.description': { ca: 'Teràpia integrada i enfocament holístic de la mà d\'Elena, on l\'empatia coneix a l\'evidència científica.', en: 'Integrated therapy and holistic approach guided by Elena, where empathy meets scientific evidence.', es: 'Terapia integrada y enfoque holístico de la mano de Elena, donde la empatía conoce a la evidencia científica.', ru: 'Интегрированная терапия и холистический подход под руководством Елены, где эмпатия встречается с научными доказательствами.' },
  'revision360.footer.healingWithIntention': { ca: 'Curant amb intenció absoluta', en: 'Healing with absolute intention', es: 'Curando con intención absoluta', ru: 'Исцеление с абсолютным намерением' },
  'revision360.footer.contact': { ca: 'Formes de trobar-nos', en: 'Ways to find us', es: 'Formas de encontrarnos', ru: 'Способы найти нас' },
  'revision360.labels.presentialConsultations': { ca: 'Consultes a Barcelona', en: 'Consultations in Barcelona', es: 'Consultas en Barcelona', ru: 'Консультации в Барселоне' },
  'revision360.labels.onlineSessionsAvailable': { ca: 'Sessions online també disponibles', en: 'Online sessions also available', es: 'Sesiones online también disponibles', ru: 'Также доступны онлайн-сессии' },
  'revision360.footer.services': { ca: 'Catàleg de Serveis', en: 'Service Catalog', es: 'Catálogo de Servicios', ru: 'Каталог Услуг' },
  'revision360.services.completeReview': { ca: 'L\'Experiència Completa 360°', en: 'The Complete 360° Experience', es: 'La Experiencia Completa 360°', ru: 'Полный Опыт 360°' },
  'revision360.services.reset360': { ca: 'Reajustament Global (Reset)', en: 'Global Readjustment (Reset)', es: 'Reajuste Global (Reset)', ru: 'Глобальная Корректировка (Сброс)' },
  'revision360.services.mapping360': { ca: 'Mapeig Cel·lular (Mapping)', en: 'Cellular Mapping (Mapping)', es: 'Mapeo Celular (Mapping)', ru: 'Клеточное Картирование' },
  'revision360.services.alignment360': { ca: 'Centrament Biològic', en: 'Biological Centering', es: 'Centramiento Biológico', ru: 'Биологическое Центрирование' },
  'revision360.services.followUpConsultations': { ca: 'Seguiment i Acompanyament', en: 'Follow-up and Accompaniment', es: 'Seguimiento y Acompañamiento', ru: 'Наблюдение и Сопровождение' },
  'revision360.footer.copyright': { ca: '© 2026 EKA Balance. Tots els dret reservats.', en: '© 2026 EKA Balance. All rights reserved.', es: '© 2026 EKA Balance. Todos los derechos reservados.', ru: '© 2026 EKA Balance. Все права защищены.' },
  'revision360.footer.madeWith': { ca: 'Realisat amb passió a Barcelona', en: 'Crafted with passion in Barcelona', es: 'Realizado con pasión en Barcelona', ru: 'Сделано с любовью в Барселоне' },
  'revision360.footer.forHealing': { ca: 'Per l\'evolució integrativa', en: 'For integrative evolution', es: 'Por la evolución integrativa', ru: 'Для интегративной эволюции' }
};

const caEntries = [];
const enEntries = [];
const esEntries = [];
const ruEntries = [];

for (const [key, t] of Object.entries(d)) {
  caEntries.push(`    '${key}': ${JSON.stringify(t.ca)}`);
  enEntries.push(`    '${key}': ${JSON.stringify(t.en)}`);
  esEntries.push(`    '${key}': ${JSON.stringify(t.es)}`);
  ruEntries.push(`    '${key}': ${JSON.stringify(t.ru)}`);
}

const fileContent = `import { Language } from './LanguageTypes';

export const revision360Translations: Record<Language, Record<string, string>> = {
  ca: {
${caEntries.join(',\n')}
  },
  en: {
${enEntries.join(',\n')}
  },
  es: {
${esEntries.join(',\n')}
  },
  ru: {
${ruEntries.join(',\n')}
  }
};
`;

fs.writeFileSync('src/contexts/Revision360Translations.ts', fileContent, 'utf-8');
console.log('Translations successfully written in tree format!');
