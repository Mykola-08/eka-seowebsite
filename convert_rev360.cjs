const fs = require("fs");

const content = fs.readFileSync("src/contexts/Revision360Translations.ts", "utf8");

// Extract the object
const matches = content.match(/export const revision360Translations[^\{]+\{([\s\S]+)\};/);
if (!matches) {
  console.log("Could not find object");
  process.exit(1);
}

const lines = matches[1].split("\n");
const ca = [];
const en = [];
const es = [];
const ru = [];

let currentKey = null;

for (let line of lines) {
  let tk = line.trim();
  if (tk.startsWith("'revision") && tk.includes("': {")) {
    currentKey = tk.split("':")[0].replace(/^'/, "");
  } else if (currentKey) {
    if (tk.startsWith("ca:")) {
      ca.push(`    '${currentKey}': ${tk.substring(3).trim()}`);
    } else if (tk.startsWith("en:")) {
      en.push(`    '${currentKey}': ${tk.substring(3).trim()}`);
    } else if (tk.startsWith("es:")) {
      es.push(`    '${currentKey}': ${tk.substring(3).trim()}`);
    } else if (tk.startsWith("ru:")) {
      ru.push(`    '${currentKey}': ${tk.substring(3).trim()}`);
    } else if (tk === "}," || tk === "}") {
      currentKey = null;
    }
  }
}

const newFileContent = `import { Language } from './LanguageTypes';

export const revision360Translations: Record<Language, Record<string, string>> = {
  ca: {
${ca.join("\n").replace(/,$/, "") + ","}
  },
  en: {
${en.join("\n").replace(/,$/, "") + ","}
  },
  es: {
${es.join("\n").replace(/,$/, "") + ","}
  },
  ru: {
${ru.join("\n").replace(/,$/, "") + ","}
  }
};
`;

fs.writeFileSync("src/contexts/Revision360Translations.ts", newFileContent);
console.log("Converted successfully!");
