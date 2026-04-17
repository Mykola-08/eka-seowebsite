import * as fs from 'fs';
import { guaranteedTranslations as gT, translations as t } from './temp_data.ts';
fs.writeFileSync('src/lib/dictionaries.json', JSON.stringify({ guaranteedTranslations: gT, translations: t }, null, 2));