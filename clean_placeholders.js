const fs = require('fs');
let content = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');

// Match lines that define properties inside an object. We'll look for placeholder values.
// A placeholder value in this context is something like 'Revision360 Hero Title'
// We can just find keys starting with:
const prefixesToRemove = [
  'revision360.',
  'casos.',
  'contact.',
  'personalized.',
  'service.',
  'onboarding.',
  'recommendations.',
  'whatsapp.',
  'cta.',
  'labels.',
  'services.',
  'vip.',
  'nav.',
  'elena.',
  'home.',
  'about.',
  'booking.',
  'adult.',
  'children.',
  'families.',
  'form.',
  'personalizedServices.',
  'kinesiology.',
  'massage.',
  'nutrition.',
  'common.'
];

// Let's inspect the actual lines first
const lines = content.split('\n');

const cleanedLines = lines.filter(line => {
  const match = line.match(/^\s*'([^']+)':\s*'([^']+)'/);
  if (match) {
    const key = match[1];
    const val = match[2];
    
    // Check if value looks like title case placeholder
    const isTitleCasePlaceholder = /^[A-Z][a-zA-Z0-9]*(\s[A-Z0-9][a-zA-Z0-9]*)*(\s\d)?$/.test(val) || /^Revision360/.test(val) || val.includes('Placeholder');
    return !isTitleCasePlaceholder;
  }
  return true;
});

console.log('Original lines:', lines.length);
console.log('Cleaned lines:', cleanedLines.length);

fs.writeFileSync('src/contexts/LanguageContext.tsx', cleanedLines.join('\n'));
