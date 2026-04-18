const fs = require('fs');
const content = fs.readFileSync('src/lib/dictionaries.ts', 'utf8');

function extractDict(lang, startPattern) {
    const sectionStart = content.indexOf(startPattern);
    if (sectionStart === -1) return new Set();
    
    // Find the start of the language object within this section
    let langIdx = content.indexOf('  ' + lang + ': {', sectionStart);
    if (langIdx === -1) {
        // Try alternate formatting
        langIdx = content.indexOf('    ' + lang + ': {', sectionStart);
    }
    if (langIdx === -1) return new Set();

    let braceCount = 1;
    let i = content.indexOf('{', langIdx) + 1;
    let dictContent = '';
    while (braceCount > 0 && i < content.length) {
        if (content[i] === '{') braceCount++;
        if (content[i] === '}') braceCount--;
        if (braceCount > 0) dictContent += content[i];
        i++;
    }
    const matches = dictContent.matchAll(/['"]([^'"]+)['"]\s*:/g);
    return new Set([...matches].map(m => m[1]));
}

const gCa = extractDict('ca', 'export const guaranteedTranslations');
const gEn = extractDict('en', 'export const guaranteedTranslations');
const gEs = extractDict('es', 'export const guaranteedTranslations');
const gRu = extractDict('ru', 'export const guaranteedTranslations');

const tCa = extractDict('ca', 'export const translations');
const tEn = extractDict('en', 'export const translations');
const tEs = extractDict('es', 'export const translations');
const tRu = extractDict('ru', 'export const translations');

const allCa = new Set([...gCa, ...tCa]);
const allEn = new Set([...gEn, ...tEn]);
const allEs = new Set([...gEs, ...tEs]);
const allRu = new Set([...gRu, ...tRu]);

const allKeys = new Set([...allCa, ...allEn, ...allEs, ...allRu]);

const missingReport = {};

['ca', 'en', 'es', 'ru'].forEach(lang => {
    const langKeys = {ca:allCa, en:allEn, es:allEs, ru:allRu}[lang];
    const missing = [...allKeys].filter(k => !langKeys.has(k));
    if (missing.length > 0) {
        missingReport[lang] = missing;
    }
});

console.log(JSON.stringify(missingReport, null, 2));
