import fs from 'fs';
import * as core from '@hugeicons/core-free-icons';

let code = `import React from 'react';\nimport { HugeiconsIcon } from '@hugeicons/react';\nimport * as Icons from '@hugeicons/core-free-icons';\n\n`;

for (const key of Object.keys(core)) {
  code += `export const ${key} = (props: any) => <HugeiconsIcon icon={(Icons as any)[${JSON.stringify(key)}]} {...props} />;\n`;
}
code += `export type LucideIcon = React.FC<any>;\n`;

fs.writeFileSync('src/lib/icons.tsx', code);
console.log('generated src/lib/icons.tsx', Object.keys(core).length, 'icons');