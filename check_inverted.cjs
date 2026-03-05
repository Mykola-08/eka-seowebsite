const fs = require("fs");

function extractInvertedKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const keys = new Set();
  const keyRegex = /['"]([^'"]+)['"]\s*:\s*\{/g;
  let match;
  while ((match = keyRegex.exec(content)) !== null) {
      if (match[1].includes('.')) {
        keys.add(match[1]);
      }
  }
  return keys;
}

const rev360 = extractInvertedKeys("src/contexts/Revision360Translations.ts");
const ext = extractInvertedKeys("src/contexts/TranslationExtensions.tsx");

let codeKeys = [];
try {
  codeKeys = JSON.parse(fs.readFileSync("undefined-keys.json", "utf8"));
} catch (e) {}

const stillUndefined = [];
for (const k of codeKeys) {
  if (!rev360.has(k) && !ext.has(k) && !k.includes('${')) {
    stillUndefined.push(k);
  }
}
console.log("Truly undefined keys:", stillUndefined.length);
fs.writeFileSync("true-undefined.json", JSON.stringify(stillUndefined, null, 2));
