const fs = require('fs');
const files = ['src/contexts/LanguageContext.tsx', 'src/contexts/AgenyzTranslations.ts'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  
  let keyMap = {};
  let currentLang = null;
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // detect language start (2 or 4 spaces)
    let langMatch = line.match(/^ {2,4}([a-z]{2}):\s*\{/);
    if (langMatch) {
      currentLang = langMatch[1];
      if (!keyMap[currentLang]) {
        keyMap[currentLang] = new Set();
      } else {
        // Just reset if it's another dict with same language (e.g. guaranteedTranslations, translations)
        keyMap[currentLang] = new Set(); 
      }
      newLines.push(line);
      continue;
    }
    
    if (line.match(/^ {2,4}\},?/)) {
      currentLang = null;
      newLines.push(line);
      continue;
    }
    
    if (currentLang != null) {
      // detect key
      let keyMatch = line.match(/^\s*'([^']+)'\s*:/);
      if (keyMatch) {
        let key = keyMatch[1];
        if (keyMap[currentLang].has(key)) {
            // Drop duplicate
            continue;
        }
        keyMap[currentLang].add(key);
      }
    }
    newLines.push(line);
  }
  
  fs.writeFileSync(file, newLines.join('\n'));
  console.log('Deduplicated', file);
}
