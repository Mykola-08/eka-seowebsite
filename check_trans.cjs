const fs = require("fs");
const path = require("path");

function extractKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const dictionaries = { ca: new Set(), en: new Set(), es: new Set(), ru: new Set() };
  
  const langs = Object.keys(dictionaries);
  let currentLang = null;
  
  // A simple regex approach won't handle nesting well, so let's just find everything like: 'key.name': "value"
  // Wait, the files are mostly structured as:
  // ca: { ... }, en: { ... }
  // So we can split the file by language keys.
  
  for (const lang of langs) {
    // Find where the block starts: `lang: {`
    const regex = new RegExp(`\\b${lang}:\\s*\\{([\\s\\S]*?)\\n  \\},?`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      const block = match[1];
      // extract keys inside block
      const keyRegex = /['"]([^'"]+)['"]\s*:/g;
      let keyMatch;
      while ((keyMatch = keyRegex.exec(block)) !== null) {
        dictionaries[lang].add(keyMatch[1]);
      }
    }
  }
  return dictionaries;
}

const transFiles = [
  "src/contexts/LanguageContext.tsx",
  "src/contexts/TranslationExtensions.ts",
  "src/contexts/Revision360Translations.ts",
  "src/contexts/TechniqueTranslations.ts",
  "src/contexts/AgenyzTranslations.ts",
  "src/contexts/BentoTranslations.ts"
];

const allDicts = { ca: new Set(), en: new Set(), es: new Set(), ru: new Set() };

for (const file of transFiles) {
  if (fs.existsSync(file)) {
    const dicts = extractKeys(file);
    for (const lang of Object.keys(allDicts)) {
      dicts[lang].forEach(k => allDicts[lang].add(k));
    }
  }
}

// Check found keys from find_keys.js
let codeKeys = [];
try {
  codeKeys = JSON.parse(fs.readFileSync("found-keys.json", "utf8"));
} catch (e) {}

const missingPerLang = { ca: [], en: [], es: [], ru: [] };
const allUnionKeys = new Set([...codeKeys]);

Object.values(allDicts).forEach(set => {
  set.forEach(k => allUnionKeys.add(k));
});

console.log("Total unique translation keys found anywhere:", allUnionKeys.size);

for (const key of allUnionKeys) {
  for (const lang of ["ca", "en", "es", "ru"]) {
    if (!allDicts[lang].has(key)) {
      missingPerLang[lang].push(key);
    }
  }
}

for (const lang of ["ca", "en", "es", "ru"]) {
  console.log(`Missing in ${lang}: ${missingPerLang[lang].length}`);
}

fs.writeFileSync("missing-keys.json", JSON.stringify(missingPerLang, null, 2));
