const fs = require('fs');
let code = fs.readFileSync('src/contexts/BentoTranslations.ts', 'utf8');

const additionalKeys = {
  ca: [
    ['home.bento.badge', 'Benestar Integral'],
    ['home.bento.title', 'El teu viatge cap a la salut.'],
    ['home.bento.featured', 'Servei Destacat'],
    ['home.bento.equilibri.title', 'Equilibri Integral'],
    ['home.bento.equilibri.desc', 'Harmonia entre cos, ment i benestar en cada sessió.'],
    ['home.bento.kinesiology.title', 'Kinesiologia Holística'],
    ['home.bento.kinesiology.desc', 'Diagnòstic per restablir el teu balanç energètic.'],
    ['home.bento.explore', 'Descobreix-ne més \\u2192'],
    ['home.bento.nutrition.title', 'Nutrició'],
    ['home.bento.nutrition.desc', 'Alimenta la teva millor versió'],
    ['home.bento.testimonial.quote', '"Un abans i un després en el meu benestar."'],
    ['home.bento.testimonial.author', 'Maria G.'],
    ['home.bento.testimonial.role', 'Pacient freqüent']
  ],
  es: [
    ['home.bento.badge', 'Bienestar Integral'],
    ['home.bento.title', 'Tu viaje hacia la salud.'],
    ['home.bento.featured', 'Servicio Destacado'],
    ['home.bento.equilibri.title', 'Equilibrio Integral'],
    ['home.bento.equilibri.desc', 'Armonía entre cuerpo, mente y bienestar en cada sesión.'],
    ['home.bento.kinesiology.title', 'Kinesiología Holística'],
    ['home.bento.kinesiology.desc', 'Diagnóstico para restablecer tu balance energético.'],
    ['home.bento.explore', 'Descubre más \\u2192'],
    ['home.bento.nutrition.title', 'Nutrición'],
    ['home.bento.nutrition.desc', 'Alimenta tu mejor versión'],
    ['home.bento.testimonial.quote', '"Un antes y un después en mi bienestar."'],
    ['home.bento.testimonial.author', 'Maria G.'],
    ['home.bento.testimonial.role', 'Paciente frecuente']
  ],
  en: [
    ['home.bento.badge', 'Integral Wellbeing'],
    ['home.bento.title', 'Your journey to health.'],
    ['home.bento.featured', 'Featured Service'],
    ['home.bento.equilibri.title', 'Integral Balance'],
    ['home.bento.equilibri.desc', 'Harmony between body, mind and wellbeing in every session.'],
    ['home.bento.kinesiology.title', 'Holistic Kinesiology'],
    ['home.bento.kinesiology.desc', 'Diagnosis to restore your energetic balance.'],
    ['home.bento.explore', 'Discover more \\u2192'],
    ['home.bento.nutrition.title', 'Nutrition'],
    ['home.bento.nutrition.desc', 'Fuel your best version'],
    ['home.bento.testimonial.quote', '"A before and after in my wellbeing."'],
    ['home.bento.testimonial.author', 'Maria G.'],
    ['home.bento.testimonial.role', 'Frequent patient']
  ],
  ru: [
    ['home.bento.badge', 'Комплексное Благополучие'],
    ['home.bento.title', 'Ваш путь к здоровью.'],
    ['home.bento.featured', 'Популярная услуга'],
    ['home.bento.equilibri.title', 'Комплексный Баланс'],
    ['home.bento.equilibri.desc', 'Гармония между телом, разумом и благополучием на каждом сеансе.'],
    ['home.bento.kinesiology.title', 'Холистическая Кинезиология'],
    ['home.bento.kinesiology.desc', 'Диагностика для восстановления вашего энергетического баланса.'],
    ['home.bento.explore', 'Узнать больше \\u2192'],
    ['home.bento.nutrition.title', 'Нутрициология'],
    ['home.bento.nutrition.desc', 'Питай свою лучшую версию'],
    ['home.bento.testimonial.quote', '"До и после в моем самочувствии."'],
    ['home.bento.testimonial.author', 'Мария Г.'],
    ['home.bento.testimonial.role', 'Постоянный клиент']
  ]
};

for (const lang of Object.keys(additionalKeys)) {
  const markerPattern = new RegExp('  ' + lang + ': \\{');
  const match = code.match(markerPattern);
  if (match) {
    let toInsert = '';
    for (let kv of additionalKeys[lang]) {
      if (!code.includes("'" + kv[0] + "'")) {
        toInsert += "    '" + kv[0] + "': '" + kv[1].replace(/'/g, "\\\\'") + "',\\n";
      }
    }
    if (toInsert) {
      code = code.replace(markerPattern, '  ' + lang + ': {\\n' + toInsert);
    }
  }
}

fs.writeFileSync('src/contexts/BentoTranslations.ts', code);
console.log('BentoTranslations updated');