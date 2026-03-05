const fs = require('fs');
let content = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');
for (let key of ['services.integralWellbeingFor', 'services.ourServices', 'services.wellnessPath']) {
  console.log(key + ': ' + content.includes(key));
}
