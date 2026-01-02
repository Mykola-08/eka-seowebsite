
const fs = require('fs');
const path = require('path');

function extractKeys(content) {
    const keys = {};
    const lines = content.split('\n');
    let currentLang = null;
    let stack = 0;

    for (let line of lines) {
        const trimmed = line.trim();
        
        // Detect language start
        if (trimmed.match(/^(ca|en|es|ru):\s*\{/)) {
            currentLang = trimmed.match(/^(ca|en|es|ru)/)[0];
            keys[currentLang] = new Set();
            stack = 1;
            continue;
        }

        if (currentLang) {
            if (trimmed.includes('{')) stack++;
            if (trimmed.includes('}')) stack--;

            if (stack === 0) {
                currentLang = null;
                continue;
            }

            // Extract key
            const match = trimmed.match(/'([^']+)'\s*:/);
            if (match) {
                keys[currentLang].add(match[1]);
            }
        }
    }
    return keys;
}

function checkFile(filePath) {
    console.log(`Checking ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    const keys = extractKeys(content);
    
    const languages = ['ca', 'en', 'es', 'ru'];
    const baseLang = 'ca';
    
    if (!keys[baseLang]) {
        console.log(`Base language ${baseLang} not found in ${filePath}`);
        return;
    }

    const baseKeys = keys[baseLang];
    console.log(`Found ${baseKeys.size} keys for ${baseLang}`);

    languages.forEach(lang => {
        if (lang === baseLang) return;
        
        if (!keys[lang]) {
            console.log(`Language ${lang} not found in ${filePath}`);
            return;
        }

        const langKeys = keys[lang];
        const missing = [...baseKeys].filter(k => !langKeys.has(k));
        
        if (missing.length > 0) {
            console.log(`Missing keys in ${lang}:`);
            missing.forEach(k => console.log(`  - ${k}`));
        } else {
            console.log(`No missing keys in ${lang}`);
        }
    });
}

checkFile(path.join(__dirname, 'src/react-app/contexts/LanguageContext.tsx'));
checkFile(path.join(__dirname, 'src/react-app/contexts/TranslationExtensions.tsx'));
