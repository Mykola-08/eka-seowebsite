const fs = require('fs');
let code = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');
code = code.replace(
  "localStorage.setItem('eka-language', lang);",
  "localStorage.setItem('eka-language', lang);\n        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;"
);
fs.writeFileSync('src/contexts/LanguageContext.tsx', code);
console.log('Patched');