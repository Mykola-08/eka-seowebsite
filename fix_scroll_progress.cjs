const fs = require('fs');
const file = 'src/components/ScrollProgress.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure standard imports
content = content.replace(
  /export default function ScrollProgress\(\) \{/g,
  `export default function ScrollProgress() {`
);

fs.writeFileSync(file, content);
console.log('Done');
