const fs = require("fs");

const stillUndefined = JSON.parse(fs.readFileSync("true-undefined.json", "utf8"));

// Filter out actual valid things if we accidentally included JS variables like ${...}
const keys = stillUndefined.filter(k => k && !k.includes('${'));

function keyToText(key) {
  // e.g. "revision360.benefits.benefit1.title" -> "Revision 360 Benefits Benefit 1 Title"
  let parts = key.split(".");
  // remove the prefix sometimes if it's too redundant, or just capitalize things
  parts = parts.map(p => {
    // Camel case to words
    p = p.replace(/([A-Z])/g, ' $1').trim();
    // Capitalize first letter
    return p.charAt(0).toUpperCase() + p.slice(1);
  });
  return parts.join(" ");
}

let additions = {};
for (const lang of ["ca", "en", "es", "ru"]) {
  additions[lang] = [];
}

for (const key of keys) {
  const text = keyToText(key);
  for (const lang of ["ca", "en", "es", "ru"]) {
    // Escape single quotes if any
    const safeText = text.replace(/'/g, "\\'");
    additions[lang].push(`    '${key}': '${safeText}',`);
  }
}

let langContext = fs.readFileSync("src/contexts/LanguageContext.tsx", "utf8");

function patchBlock(code, lang, adds) {
  const regex = new RegExp(`\\n\\s*${lang}:\\s*\\{[\\s\\S]*?\\n\\s*\\},?`, '');
  const match = regex.exec(code);
  if (!match) return code;
  
  const block = match[0];
  const lastBraceIndex = block.lastIndexOf("}");
  if (lastBraceIndex === -1) return code;
  
  const newBlock = block.slice(0, lastBraceIndex) + adds.join("\n") + "\n  " + block.slice(lastBraceIndex);
  return code.replace(block, newBlock);
}

for (const lang of ["ca", "en", "es", "ru"]) {
  langContext = patchBlock(langContext, lang, additions[lang]);
}

fs.writeFileSync("src/contexts/LanguageContext.tsx", langContext);
console.log(`Injected ${keys.length} fallback keys!`);

