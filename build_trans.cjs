const { execSync } = require("child_process");
const fs = require("fs");

console.log("Compiling translators...");
execSync("npx tsc src/contexts/LanguageContext.tsx src/contexts/TranslationExtensions.tsx src/contexts/Revision360Translations.ts src/contexts/TechniqueTranslations.ts src/contexts/AgenyzTranslations.ts src/contexts/BentoTranslations.ts --esModuleInterop --jsx react --module commonjs --outDir ./temp_trans --skipLibCheck", { stdio: "inherit" });
console.log("Done.");
