const fs = require('fs');
const code = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');

const ctxIdx = code.indexOf('const LanguageContext = createContext');

const top = code.slice(0, ctxIdx);
const bot = code.slice(ctxIdx);

// top has imports and translations
fs.writeFileSync('src/contexts/LanguageData.ts', top.replace('\'use client\';\n', '').replace('const guaranteedTranslations', 'export const guaranteedTranslations').replace('const translations:', 'export const translations:'));

const newCtx = `'use client';\nimport React, { useState, useEffect, createContext, useContext } from 'react';\nimport { Language, LanguageContextType } from './LanguageTypes';\nimport { guaranteedTranslations, translations } from './LanguageData';\n\n\n` + bot;

fs.writeFileSync('src/contexts/LanguageContext.tsx', newCtx);
