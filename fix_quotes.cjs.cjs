const fs = require('fs');
let code = fs.readFileSync('src/components/Revision360Content.tsx', 'utf8');
code = code.replace(/''/g, "'");
fs.writeFileSync('src/components/Revision360Content.tsx', code);
