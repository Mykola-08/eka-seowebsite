const fs = require("fs");

const { translations, guaranteedTranslations } = require("./temp_trans/LanguageContext.cjs");
const extensions = require("./temp_trans/TranslationExtensions.cjs");
const rev360 = require("./temp_trans/Revision360Translations.cjs");
const technique = require("./temp_trans/TechniqueTranslations.cjs");
const agenyz = require("./temp_trans/AgenyzTranslations.cjs");
const bento = require("./temp_trans/BentoTranslations.cjs");

const allLangs = ["ca", "en", "es", "ru"];

// Build the complete dictionary for each language
const completeDict = { ca: {}, en: {}, es: {}, ru: {} };

const sources = [
  translations, 
  guaranteedTranslations,
  extensions.servicesTranslations,
  rev360.revision360Translations,
  technique.techniqueTranslations,
  agenyz.agenyzTranslations,
  bento.bentoTranslations
];

for (const lang of allLangs) {
  for (const src of sources) {
    if (src && src[lang]) {
      Object.assign(completeDict[lang], src[lang]);
    }
  }
}

// 1. Gather all keys known to exist in AT LEAST one language
const allDeclaredKeysRaw = new Set();
for (const lang of allLangs) {
  for (const k of Object.keys(completeDict[lang])) {
    allDeclaredKeysRaw.add(k);
  }
}

// 2. Load keys found in source code
let codeKeys = [];
try {
  codeKeys = JSON.parse(fs.readFileSync("found-keys.cjson", "utf8"));
} catch(e) {}

const unionKeys = new Set([...allDeclaredKeysRaw, ...codeKeys]);

// 3. Find missing keys per language AND missing from code but not declared!
const missing = { ca: {}, en: {}, es: {}, ru: {} };
for (const k of unionKeys) {
  for (const lang of allLangs) {
    if (!completeDict[lang][k]) {
      missing[lang][k] = "MISSING";
    }
  }
}

fs.writeFileSync("missing-keys-precise.cjson", JSON.stringify(missing, null, 2));

for (const lang of allLangs) {
  console.log(`Missing in ${lang}: ${Object.keys(missing[lang]).length}`);
}

const completelyUndefined = [];
for (const k of codeKeys) {
  if (!allDeclaredKeysRaw.has(k)) {
    completelyUndefined.push(k);
  }
}
console.log(`Total undefined in any lang object: ${completelyUndefined.length}`);
fs.writeFileSync("undefined-keys.cjson", JSON.stringify(completelyUndefined, null, 2));
