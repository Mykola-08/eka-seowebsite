const fs = require('fs');
const lines = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8').split('\n');
const out = lines.filter(l => !l.match(/^\s*'revision360\.[^']+':/));
fs.writeFileSync('src/contexts/LanguageContext.tsx', out.join('\n'));
console.log('Removed ' + (lines.length - out.length) + ' lines of revision360 fallbacks');
