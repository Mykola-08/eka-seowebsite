const fs = require('fs');

const file = 'src/hooks/useScrollLock.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /window\.lenis/g,
  `(window as any).lenis`
);

fs.writeFileSync(file, content);
console.log('useScrollLock types fixed');
