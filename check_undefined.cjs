const fs = require("fs");

function extractKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const dictionaries = { ca: new Set(), en: new Set(), es: new Set(), ru: new Set() };
  const langs = ["ca", "en", "es", "ru"];

  for (const lang of langs) {
    const regex = new RegExp(`\\b${lang}\\s*:\\s*\\{([\\s\\S]*?)(?:\\n\\s*\\},?|\\n\\s*\\};)`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      const block = match[1];
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

let codeKeys = [];
try {
  codeKeys = JSON.parse(fs.readFileSync("found-keys.json", "utf8"));
} catch (e) {}

const completelyUndefined = [];
for (const k of codeKeys) {
  if (!allDeclaredKeys.has(k) && !k.includes('$')) {
    completelyUndefined.push(k);
  }
}

console.log("Undefined keys used in source:", completelyUndefined);
fs.writeFileSync("undefined-keys.json", JSON.stringify(completelyUndefined, null, 2));
