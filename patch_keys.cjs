const fs = require("fs");

let langContext = fs.readFileSync("src/contexts/LanguageContext.tsx", "utf8");
let agenyzContext = fs.readFileSync("src/contexts/AgenyzTranslations.ts", "utf8");

// We can just append the text at the end of the `en: {`, `es: {`, etc. block
// by doing a targeted replace.
// E.g., replace `}, // END OF ca` or similar.
// Since these files might not have clear comments, we can find the start of the next language.
// Actually, `es: {` ... `  ru: {` is followed by it.

function patchBlock(code, lang, additions) {
  // Find where lang block is.
  // We look for \n  lang: {\n
  const regex = new RegExp(`\\n\\s*${lang}:\\s*\\{[\\s\\S]*?\\n\\s*\\},?`, '');
  const match = regex.exec(code);
  if (!match) {
    console.log(`Could not find block for ${lang}`);
    return code;
  }
  
  const block = match[0];
  // Replace the closing brace of the block
  // The block ends with \n  },
  const lastBraceIndex = block.lastIndexOf("}");
  
  if (lastBraceIndex === -1) return code;
  
  const newBlock = block.slice(0, lastBraceIndex) + additions + "\n  " + block.slice(lastBraceIndex);
  return code.replace(block, newBlock);
}

// ---------------- AGENYZ TRANSLATIONS ----------------
// ca
let agenyz_ca = `
    'agenyz.product.vitamin-d3.name': 'Vitamina D3 + XBi-A',
    'agenyz.product.vitamin-d3.desc': 'Fórmula avançada...',
    'agenyz.product.fungomax.name': 'Fungomax',
    'agenyz.product.fungomax.desc': 'Suport natural...',
    'agenyz.product.ferboost.name': 'Ferboost',
    'agenyz.product.ferboost.desc': 'Suport per a la salut...',
    'agenyz.product.Gummyz-KidYZ.features': 'Gummies naturals...',
    'agenyz.product.gummyz-KidYZ.features': 'Gummies naturals...',
`;
agenyzContext = patchBlock(agenyzContext, "ca", agenyz_ca);

let agenyz_en = `
    'agenyz.product.gummyz-KidYZ.features': 'Natural gummies...',
`;
agenyzContext = patchBlock(agenyzContext, "en", agenyz_en);

let agenyz_es = `
    'agenyz.product.gummyz-KidYZ.features': 'Gominolas naturales...',
`;
agenyzContext = patchBlock(agenyzContext, "es", agenyz_es);

let agenyz_ru = `
    'agenyz.product.gummyz-KidYZ.features': 'Натуральные мармеладки...',
`;
agenyzContext = patchBlock(agenyzContext, "ru", agenyz_ru);

fs.writeFileSync("src/contexts/AgenyzTranslations.ts", agenyzContext);


// ---------------- LANGUAGE CONTEXT ----------------
let lc_ca = `
    'nav.parents': 'Pares',
    'common.spanish': 'Espanyol',
    'common.english': 'Anglès',
    'common.catalan': 'Català',
    'common.russian': 'Rus',
`;
langContext = patchBlock(langContext, "ca", lc_ca);

let lc_en = `
    'common.spanish': 'Spanish',
    'common.english': 'English',
    'common.catalan': 'Catalan',
    'common.russian': 'Russian',
`;
langContext = patchBlock(langContext, "en", lc_en);

let lc_es = `
    'nav.vip': 'VIP',
    'personalized.officeWorkers.method.title': 'Protocolo de Bienestar Corporativo',
    'personalized.officeWorkers.method.step1.title': 'Descompresión Postural',
    'personalized.officeWorkers.method.step1.desc': 'Nos enfocamos en las líneas fasciales acortadas por estar sentado.',
    'personalized.officeWorkers.method.step2.title': 'Reinicio del Sistema Nervioso',
    'personalized.officeWorkers.method.step2.desc': 'Cambiamos tu cuerpo del modo estrés al modo de recuperación.',
    'personalized.officeWorkers.method.step3.title': 'Realineamiento Ergonómico',
    'personalized.officeWorkers.method.step3.desc': 'Integramos señales somáticas para mantener la alineación neutral.',
    'personalized.officeWorkers.benefits.title': 'Beneficios',
    'personalized.officeWorkers.benefit1': 'Alivio del dolor crónico de cuello.',
    'personalized.officeWorkers.benefit2': 'Mejora en la concentración.',
    'personalized.officeWorkers.benefit3': 'Menos fatiga al final del día.',
    'personalized.officeWorkers.benefit4': 'Mayor bienestar general.',
    'personalized.officeWorkers.faq.title': 'Preguntas Frecuentes',
    'personalized.officeWorkers.faq.q1': '¿Cuántas sesiones necesito?',
    'personalized.officeWorkers.faq.a1': 'Depende de tus necesidades específicas.',
    'personalized.officeWorkers.faq.q2': '¿Es doloroso?',
    'personalized.officeWorkers.faq.a2': 'No, es una técnica suave.',
    'personalized.officeWorkers.faq.q3': '¿Puedo hacerlo online?',
    'personalized.officeWorkers.faq.a3': 'Algunas prácticas sí.',
    
    'personalized.musicians.method.title': 'Optimización para Músicos',
    'personalized.musicians.method.step1.title': 'Liberación de Tensión',
    'personalized.musicians.method.step1.desc': 'Liberamos la tensión en áreas clave.',
    'personalized.musicians.method.step2.title': 'Conciencia Corporal',
    'personalized.musicians.method.step2.desc': 'Mejoramos la conciencia del cuerpo al tocar.',
    'personalized.musicians.method.step3.title': 'Alineación Natural',
    'personalized.musicians.method.step3.desc': 'Encontramos la postura ideal para tu instrumento.',
    'personalized.musicians.benefits.title': 'Beneficios',
    'personalized.musicians.benefit1': 'Mayor fluidez al tocar.',
    'personalized.musicians.benefit2': 'Prevención de lesiones.',
    'personalized.musicians.benefit3': 'Expresión musical libre.',
    'personalized.musicians.benefit4': 'Menor fatiga en ensayos largos.',
    'personalized.musicians.faq.title': 'Preguntas Frecuentes',
    'personalized.musicians.faq.q1': '¿Sirve para cualquier instrumento?',
    'personalized.musicians.faq.a1': 'Sí, se adapta a tu instrumento.',
    'personalized.musicians.faq.q2': '¿Necesito traer mi instrumento?',
    'personalized.musicians.faq.a2': 'Puede ser útil en algunas sesiones.',
    'personalized.musicians.faq.q3': '¿Mejora mi técnica?',
    'personalized.musicians.faq.a3': 'Mejora el soporte físico de tu técnica.',

    'personalized.athletes.method.title': 'Recuperación Deportiva',
    'personalized.athletes.method.step1.title': 'Evaluación Funcional',
    'personalized.athletes.method.step1.desc': 'Analizamos tus patrones de movimiento.',
    'personalized.athletes.method.step2.title': 'Normalización',
    'personalized.athletes.method.step2.desc': 'Restauramos el rango de movimiento óptimo.',
    'personalized.athletes.method.step3.title': 'Integración',
    'personalized.athletes.method.step3.desc': 'Integramos la mejora en tu gesto deportivo.',
    'personalized.athletes.benefits.title': 'Beneficios',
    'personalized.athletes.benefit1': 'Recuperación más rápida.',
    'personalized.athletes.benefit2': 'Mejora del rendimiento.',
    'personalized.athletes.benefit3': 'Prevención de sobrecargas.',
    'personalized.athletes.benefit4': 'Mayor conciencia cinética.',
    'personalized.athletes.faq.title': 'Preguntas Frecuentes',
    'personalized.athletes.faq.q1': '¿Cuándo es mejor agendar sesión?',
    'personalized.athletes.faq.a1': 'Dependiendo de tu ciclo de entrenamiento.',
    'personalized.athletes.faq.q2': '¿Es un masaje deportivo clásico?',
    'personalized.athletes.faq.a2': 'Es un enfoque más integral y neurológico.',
    'personalized.athletes.faq.q3': '¿Trata lesiones específicas?',
    'personalized.athletes.faq.a3': 'Acompaña la recuperación estructural.',
    
    'personalized.artists.hero.title': 'Artistas',
`;
langContext = patchBlock(langContext, "es", lc_es);

let lc_ru = `
    'personalized.officeWorkers.method.title': 'Протокол Корпоративного Велнеса',
    'personalized.officeWorkers.method.step1.title': 'Постуральная Декомпрессия',
    'personalized.officeWorkers.method.step1.desc': 'Мы работаем с фасциальными линиями.',
    'personalized.officeWorkers.method.step2.title': 'Перезагрузка Нервной Системы',
    'personalized.officeWorkers.method.step2.desc': 'Переводим тело в режим восстановления.',
    'personalized.officeWorkers.method.step3.title': 'Эргономичное Выравнивание',
    'personalized.officeWorkers.method.step3.desc': 'Помогаем поддерживать нейтральное положение.',
    'personalized.officeWorkers.benefits.title': 'Преимущества',
    'personalized.officeWorkers.benefit1': 'Снятие болей в шее.',
    'personalized.officeWorkers.benefit2': 'Улучшение концентрации.',
    'personalized.officeWorkers.benefit3': 'Меньше усталости к концу дня.',
    'personalized.officeWorkers.benefit4': 'Общее улучшение самочувствия.',
    'personalized.officeWorkers.faq.title': 'Частые Вопросы',
    'personalized.officeWorkers.faq.q1': 'Сколько сеансов нужно?',
    'personalized.officeWorkers.faq.a1': 'Зависит от ваших конкретных нужд.',
    'personalized.officeWorkers.faq.q2': 'Это больно?',
    'personalized.officeWorkers.faq.a2': 'Нет, методики очень мягкие.',
    'personalized.officeWorkers.faq.q3': 'Можно ли онлайн?',
    'personalized.officeWorkers.faq.a3': 'Некоторые практики можно.',
    
    'personalized.musicians.method.title': 'Оптимизация для Музыкантов',
    'personalized.musicians.method.step1.title': 'Снятие Напряжения',
    'personalized.musicians.method.step1.desc': 'Работаем с ключевыми зонами напряжений.',
    'personalized.musicians.method.step2.title': 'Осознанность Тела',
    'personalized.musicians.method.step2.desc': 'Улучшаем осознанность при игре.',
    'personalized.musicians.method.step3.title': 'Естественное Выравнивание',
    'personalized.musicians.method.step3.desc': 'Находим идеальную позу.',
    'personalized.musicians.benefits.title': 'Преимущества',
    'personalized.musicians.benefit1': 'Больше свободы в игре.',
    'personalized.musicians.benefit2': 'Профилактика травм.',
    'personalized.musicians.benefit3': 'Свободное музыкальное выражение.',
    'personalized.musicians.benefit4': 'Меньше усталости на долгих репетициях.',
    'personalized.musicians.faq.title': 'Частые Вопросы',
    'personalized.musicians.faq.q1': 'Подходит для любого инструмента?',
    'personalized.musicians.faq.a1': 'Да, мы адаптируем под ваш инструмент.',
    'personalized.musicians.faq.q2': 'Нужно ли приносить инструмент?',
    'personalized.musicians.faq.a2': 'Иногда это бывает полезно.',
    'personalized.musicians.faq.q3': 'Улучшает ли это технику?',
    'personalized.musicians.faq.a3': 'Улучшает физическую базу для техники.',

    'personalized.athletes.method.title': 'Спортивное Восстановление',
    'personalized.athletes.method.step1.title': 'Функциональная Оценка',
    'personalized.athletes.method.step1.desc': 'Анализируем паттерны движений.',
    'personalized.athletes.method.step2.title': 'Нормализация',
    'personalized.athletes.method.step2.desc': 'Восстанавливаем амплитуду движений.',
    'personalized.athletes.method.step3.title': 'Интеграция',
    'personalized.athletes.method.step3.desc': 'Интеграция в спортивный жест.',
    'personalized.athletes.benefits.title': 'Преимущества',
    'personalized.athletes.benefit1': 'Более быстрое восстановление.',
    'personalized.athletes.benefit2': 'Повышение производительности.',
    'personalized.athletes.benefit3': 'Профилактика перегрузок.',
    'personalized.athletes.benefit4': 'Лучшее осознание тела.',
    'personalized.athletes.faq.title': 'Частые Вопросы',
    'personalized.athletes.faq.q1': 'Когда лучше приходить?',
    'personalized.athletes.faq.a1': 'В зависимости от тренировочного цикла.',
    'personalized.athletes.faq.q2': 'Это спортивный массаж?',
    'personalized.athletes.faq.a2': 'Это более комплексный подход.',
    'personalized.athletes.faq.q3': 'Лечите ли вы травмы?',
    'personalized.athletes.faq.a3': 'Мы сопровождаем структурное восстановление.',
`;
langContext = patchBlock(langContext, "ru", lc_ru);

fs.writeFileSync("src/contexts/LanguageContext.tsx", langContext);

console.log("Patch completed!");
