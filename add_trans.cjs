const fs = require('fs');

const path = 'src/contexts/LanguageContext.tsx';
let content = fs.readFileSync(path, 'utf8');

const translationsToAdd = {
  ca: [
    ["'common.enquireNow'", "'Consultar Ara'"],
    ["'personalized.business.bento.box1.details.title'", "'Cohesió d\\'Equip'"],
    ["'personalized.business.bento.box1.details.desc'", "'Les nostres activitats especialitzades ajuden a trencar el gel, fomentar la comunicació i construir vincles sòlids.'"],
    ["'personalized.business.bento.box2.details.title'", "'Més Concentració'"],
    ["'personalized.business.bento.box2.details.desc'", "'Aprèn tècniques per millorar el rendiment individual i l\\'eficiència de l\\'equip.'"],
    ["'personalized.business.bento.box3.details.title'", "'Alliberament de l\\'Estrès'"],
    ["'personalized.business.bento.box3.details.desc'", "'Estratègies i pràctiques per reduir la pressió i mantenir una salut mental forta.'"],
    ["'personalized.business.bento.box4.details.title'", "'Entorn Holístic'"],
    ["'personalized.business.bento.box4.details.desc'", "'Crea un espai de treball que fomenti el benestar. Auditem el teu entorn actual i proporcionem recomanacions.'"],
    ["'personalized.business.plans.title'", "'Solucions a Mida per a Organitzacions'"],
    ["'personalized.business.plans.subtitle'", "'Inverteix en el benestar físic i mental del teu equip per assolir la màxima productivitat i harmonia.'"],
    ["'personalized.business.plans.teams.title'", "'Equips / Startups'"],
    ["'personalized.business.plans.teams.desc'", "'Perfecte per a grups petits i departaments que busquen millorar la sincronització i el rendiment.'"],
    ["'personalized.business.plans.teams.price'", "'A partir de'"],
    ["'personalized.business.plans.teams.feature1'", "'Proves de suplements individuals'"],
    ["'personalized.business.plans.teams.feature2'", "'Sessions d\\'equip'"],
    ["'personalized.business.plans.teams.feature3'", "'Gestió de conflictes'"],
    ["'personalized.business.plans.teams.feature4'", "'Efectivitat operativa'"],
    ["'personalized.business.plans.enterprise.title'", "'Empreses / Corporacions'"],
    ["'personalized.business.plans.enterprise.desc'", "'Integració integral de benestar per a organitzacions completes.'"],
    ["'personalized.business.plans.enterprise.price'", "'Preus a Mida'"],
    ["'personalized.business.plans.enterprise.feature1'", "'Gestió de l\\'estrès'"],
    ["'personalized.business.plans.enterprise.feature2'", "'Auditories ergonòmiques'"],
    ["'personalized.business.plans.enterprise.feature3'", "'Indicadors de salut'"],
    ["'personalized.business.plans.enterprise.feature4'", "'Dies de teràpia presencial'"]
  ],
  en: [
    ["'common.enquireNow'", "'Enquire Now'"],
    ["'personalized.business.bento.box1.details.title'", "'Team Cohesion'"],
    ["'personalized.business.bento.box1.details.desc'", "'Our specialized activities help break the ice, foster communication, and build strong bonds within your team.'"],
    ["'personalized.business.bento.box2.details.title'", "'Enhanced Focus'"],
    ["'personalized.business.bento.box2.details.desc'", "'Learn techniques to improve individual output and overall team efficiency.'"],
    ["'personalized.business.bento.box3.details.title'", "'Stress Relief'"],
    ["'personalized.business.bento.box3.details.desc'", "'Strategies and practices aimed at reducing pressure and maintaining strong mental health.'"],
    ["'personalized.business.bento.box4.details.title'", "'Holistic Environment'"],
    ["'personalized.business.bento.box4.details.desc'", "'Create a workspace that naturally encourages well-being. We audit your current environment and provide recommendations.'"],
    ["'personalized.business.plans.title'", "'Tailored Solutions for Organizations'"],
    ["'personalized.business.plans.subtitle'", "'Invest in your team\\'s physical and mental well-being to achieve peak productivity and harmony in the workplace.'"],
    ["'personalized.business.plans.teams.title'", "'Teams / Startups'"],
    ["'personalized.business.plans.teams.desc'", "'Perfect for small groups and departments looking to improve synchronization and performance.'"],
    ["'personalized.business.plans.teams.price'", "'Starting from'"],
    ["'personalized.business.plans.teams.feature1'", "'Individual supplement testing'"],
    ["'personalized.business.plans.teams.feature2'", "'Team cohesion sessions'"],
    ["'personalized.business.plans.teams.feature3'", "'Conflicts resolution'"],
    ["'personalized.business.plans.teams.feature4'", "'Operational effectivity'"],
    ["'personalized.business.plans.enterprise.title'", "'Enterprises / Corporations'"],
    ["'personalized.business.plans.enterprise.desc'", "'Comprehensive wellness integration for entire organizations seeking to build a health-first culture.'"],
    ["'personalized.business.plans.enterprise.price'", "'Custom Pricing'"],
    ["'personalized.business.plans.enterprise.feature1'", "'Company-wide stress management'"],
    ["'personalized.business.plans.enterprise.feature2'", "'Ergonomic workplace audits'"],
    ["'personalized.business.plans.enterprise.feature3'", "'Health indicators tracking'"],
    ["'personalized.business.plans.enterprise.feature4'", "'Regular on-site therapy days'"]
  ],
  es: [
    ["'common.enquireNow'", "'Consultar Ahora'"],
    ["'personalized.business.bento.box1.details.title'", "'Cohesión de Equipo'"],
    ["'personalized.business.bento.box1.details.desc'", "'Nuestras actividades especializadas ayudan a romper el hielo, fomentar la comunicación y construir vínculos sólidos dentro del equipo.'"],
    ["'personalized.business.bento.box2.details.title'", "'Mayor Enfoque'"],
    ["'personalized.business.bento.box2.details.desc'", "'Aprende técnicas para mejorar el rendimiento individual y la eficiencia general del equipo.'"],
    ["'personalized.business.bento.box3.details.title'", "'Alivio del Estrés'"],
    ["'personalized.business.bento.box3.details.desc'", "'Estrategias y prácticas para reducir la presión y mantener una salud mental fuerte.'"],
    ["'personalized.business.bento.box4.details.title'", "'Entorno Holístico'"],
    ["'personalized.business.bento.box4.details.desc'", "'Crea un espacio de trabajo que fomente el bienestar de forma natural. Auditamos tu entorno y proporcionamos recomendaciones.'"],
    ["'personalized.business.plans.title'", "'Soluciones a Medida para Organizaciones'"],
    ["'personalized.business.plans.subtitle'", "'Invierte en el bienestar físico y mental de tu equipo para alcanzar el máximo de productividad y armonía en el trabajo.'"],
    ["'personalized.business.plans.teams.title'", "'Equipos / Startups'"],
    ["'personalized.business.plans.teams.desc'", "'Perfecto para grupos pequeños y departamentos que buscan mejorar la sincronización y el rendimiento.'"],
    ["'personalized.business.plans.teams.price'", "'A partir de'"],
    ["'personalized.business.plans.teams.feature1'", "'Pruebas de suplementos'"],
    ["'personalized.business.plans.teams.feature2'", "'Sesiones de cohesión'"],
    ["'personalized.business.plans.teams.feature3'", "'Marcos de resolución de conflictos'"],
    ["'personalized.business.plans.teams.feature4'", "'Mejor enfoque y efectividad'"],
    ["'personalized.business.plans.enterprise.title'", "'Empresas / Corporaciones'"],
    ["'personalized.business.plans.enterprise.desc'", "'Integración integral de bienestar para organizaciones completas.'"],
    ["'personalized.business.plans.enterprise.price'", "'Precios a Medida'"],
    ["'personalized.business.plans.enterprise.feature1'", "'Manejo del estrés'"],
    ["'personalized.business.plans.enterprise.feature2'", "'Auditorías ergonómicas'"],
    ["'personalized.business.plans.enterprise.feature3'", "'Seguimiento de indicadores'"],
    ["'personalized.business.plans.enterprise.feature4'", "'Días de terapia presencial'"]
  ],
  ru: [
    ["'common.enquireNow'", "'Связаться'"],
    ["'personalized.business.bento.box1.details.title'", "'Сплоченность Команды'"],
    ["'personalized.business.bento.box1.details.desc'", "'Наши специализированные мероприятия помогают растопить лед, наладить общение и создать крепкие связи.'"],
    ["'personalized.business.bento.box2.details.title'", "'Осознанный Фокус'"],
    ["'personalized.business.bento.box2.details.desc'", "'Изучите техники для повышения личной результативности и эффективности команды в целом.'"],
    ["'personalized.business.bento.box3.details.title'", "'Снятие Стресса'"],
    ["'personalized.business.bento.box3.details.desc'", "'Стратегии и практики для снижения давления и поддержания крепкого психического здоровья.'"],
    ["'personalized.business.bento.box4.details.title'", "'Комплексная Среда'"],
    ["'personalized.business.bento.box4.details.desc'", "'Создайте рабочее пространство, которое естественным образом способствует благополучию.'"],
    ["'personalized.business.plans.title'", "'Индивидуальные Решения для Организаций'"],
    ["'personalized.business.plans.subtitle'", "'Инвестируйте в физическое и психическое благополучие вашей команды для достижения максимальной продуктивности и гармонии на рабочем месте.'"],
    ["'personalized.business.plans.teams.title'", "'Команды / Стартапы'"],
    ["'personalized.business.plans.teams.desc'", "'Идеально подходит для небольших групп и отделов, стремящихся улучшить синхронизацию и производительность.'"],
    ["'personalized.business.plans.teams.price'", "'От'"],
    ["'personalized.business.plans.teams.feature1'", "'Индивидуальное тестирование'"],
    ["'personalized.business.plans.teams.feature2'", "'Мероприятия по сплочению команды'"],
    ["'personalized.business.plans.teams.feature3'", "'Разрешение конфликтов'"],
    ["'personalized.business.plans.teams.feature4'", "'Улучшение операционной эффективности'"],
    ["'personalized.business.plans.enterprise.title'", "'Предприятия / Корпорации'"],
    ["'personalized.business.plans.enterprise.desc'", "'Комплексная интеграция велнеса для целых организаций.'"],
    ["'personalized.business.plans.enterprise.price'", "'Индивидуальные Цены'"],
    ["'personalized.business.plans.enterprise.feature1'", "'Управление стрессом в компании'"],
    ["'personalized.business.plans.enterprise.feature2'", "'Эргономический аудит'"],
    ["'personalized.business.plans.enterprise.feature3'", "'Отслеживание показателей здоровья'"],
    ["'personalized.business.plans.enterprise.feature4'", "'Регулярная терапия в офисе'"]
  ]
};

for (const lang of Object.keys(translationsToAdd)) {
  const lineToFind = '  ' + lang + ': {';
  const startIndex = content.indexOf(lineToFind);
  if (startIndex !== -1) {
    let blockStart = startIndex + lineToFind.length;
    let insertion = '\n';
    for (const [key, val] of translationsToAdd[lang]) {
       // See if it is in the language block
       const nextLang = lang === 'ca' ? '  en: {' : (lang === 'en' ? '  es: {' : (lang === 'es' ? '  ru: {' : 'function'));
       const blockEnd = content.indexOf(nextLang, blockStart);
       let langBlock = content.substring(startIndex, blockEnd > -1 ? blockEnd : content.length);
       
       if (!langBlock.includes(key + ':')) {
         insertion += "    " + key + ": " + val + ",\n";
       }
    }
    content = content.substring(0, blockStart) + insertion + content.substring(blockStart);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Translations Updated!');
