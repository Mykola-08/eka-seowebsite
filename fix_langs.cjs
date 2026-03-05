const fs = require('fs');
let content = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');

content = content.replace(/(ca: \{[\s\S]*?)'services\.integralWellbeingFor': 'Services Integral Wellbeing For',\s*'services\.ourServices': 'Services Our Services',\s*'services\.wellnessPath': 'Services Wellness Path',/, "$1'services.integralWellbeingFor': 'Benestar integral per a',\n    'services.ourServices': 'Els nostres serveis',\n    'services.wellnessPath': 'Camí de benestar',");

content = content.replace(/(en: \{[\s\S]*?)'services\.integralWellbeingFor': 'Services Integral Wellbeing For',\s*'services\.ourServices': 'Services Our Services',\s*'services\.wellnessPath': 'Services Wellness Path',/, "$1'services.integralWellbeingFor': 'Integral wellbeing for',\n    'services.ourServices': 'Our services',\n    'services.wellnessPath': 'A journey towards your optimal wellbeing',");

content = content.replace(/(es: \{[\s\S]*?)'services\.integralWellbeingFor': 'Services Integral Wellbeing For',\s*'services\.ourServices': 'Services Our Services',\s*'services\.wellnessPath': 'Services Wellness Path',/, "$1'services.integralWellbeingFor': 'Bienestar integral para',\n    'services.ourServices': 'Nuestros servicios',\n    'services.wellnessPath': 'Un viaje hacia tu bienestar óptimo',");

content = content.replace(/(ru: \{[\s\S]*?)'services\.integralWellbeingFor': 'Services Integral Wellbeing For',\s*'services\.ourServices': 'Services Our Services',\s*'services\.wellnessPath': 'Services Wellness Path',/, "$1'services.integralWellbeingFor': 'Комплексное благополучие для',\n    'services.ourServices': 'Наши услуги',\n    'services.wellnessPath': 'Путь к вашему оптимальному благополучию',");

fs.writeFileSync('src/contexts/LanguageContext.tsx', content);
console.log('Replaced placeholder keys in LanguageContext.tsx');
