const fs = require('fs');
const path = require('path');

function walk(dir, call) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full, call);
    } else {
      call(full);
    }
  }
}

walk('src/app', (file) => {
  if (file.endsWith('page.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('generateAppMetadata(')) {
      content = content.replace(/generateAppMetadata\((.*?),\s*(.*?)\)/g, (match, p1, p2) => {
         let safePath = file.replace(/\\/g, '/');
         safePath = safePath.replace('src/app', '');
         safePath = safePath.replace('/page.tsx', '');
         
         let key = p1.replace(/['"`]/g, '').trim();
         // Fix bad keys
         if (key.includes('src') || key.includes('page.tsx')) {
            key = safePath.split('/').pop().replace(/-/g, '');
            if (safePath === '') key = 'home';
         }
         return `generateAppMetadata('${key}', '${safePath}')`;
      });
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
});