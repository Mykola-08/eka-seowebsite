const fs = require('fs');

let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Replace the entire export const metadata block
content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};\n/, '');

fs.writeFileSync('src/app/layout.tsx', content);
console.log('Removed static metadata from layout.tsx');