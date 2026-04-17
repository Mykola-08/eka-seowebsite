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

walk('src/components', (file) => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('SEOUpdater')) {
      content = content.replace(/import SEOUpdater.*?;\n?/g, '');
      content = content.replace(/<SEOUpdater[\s\S]*?\/>\n?/g, '');
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
});