const fs = require("fs");

function extractKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const dictionaries = { ca: new Set(), en: new Set(), es: new Set(), ru: new Set() };
  const langs = ["ca", "en", "es", "ru"];

  for (const lang of langs) {
    // Regex looking for `lang: {`
    const regex = new RegExp(`\\b${lang}\\s*:\\s*\\{([\\s\\S]*?)(?:\\n\\s*\\},?|\\n\\s*\\};)`, 'g');
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

const allDeclaredKeys = new Set();
for (const lang of Object.keys(allDicts)) {
  for (const key of allDicts[lang]) {
    allDeclaredKeys.add(key);
  }
}

const missingPerLang = { ca: [], en: [], es: [], ru: [] };

for (const key of allDeclaredKeys) {
  for (const lang of Object.keys(allDicts)) {
    if (!allDicts[lang].has(key)) {
      missingPerLang[lang].push(key);
    }
  }
}

for (const lang of Object.keys(missingPerLang)) {
  console.log(`Missing in ${lang} (declared in at least one other lang): ${missingPerLang[lang].length}`);
}

fs.writeFileSync("pure-missing-keys.json", JSON.stringify(missingPerLang, null, 2));

