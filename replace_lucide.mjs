import fs from 'fs';
import path from 'path';

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes("'lucide-react'") || content.includes('"lucide-react"')) {
        let newContent = content.replace(/['"]lucide-react['"]/g, "'@/lib/icons'");
        fs.writeFileSync(p, newContent);
        console.log('Updated', p);
      }
    }
  }
}

walk('src');
console.log('Replacement complete.');
