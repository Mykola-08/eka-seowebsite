const fs = require('fs');
const file = 'src/components/AppleHero.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /priority=\{index === 0\}/g,
  `priority={index < 3}`
);

content = content.replace(
  /loading=\{index === 0 \? 'eager' : 'lazy'\}/g,
  `loading={index < 3 ? 'eager' : 'lazy'}`
);

fs.writeFileSync(file, content);
console.log('AppleHero.tsx updated');
