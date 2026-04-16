const fs = require('fs');
const path = require('path');
function walk(r) {
  if (!fs.existsSync(r)) return;
  for (let f of fs.readdirSync(r)) {
    let p = path.join(r, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8'), o = c;
      const re = /<Button([^>]*?)className=["']([^"']+)["']/g;
      
      c = c.replace(re, (match, before, g1) => {
        // Only target utility classes that overwrite the button variant
        let toRemove = /\b(bg-[a-zA-Z0-9\-\[\]\#]+(\/[0-9]+)?|text-[a-zA-Z0-9\-\[\]\#]+(\/[0-9]+)?|border-[a-zA-Z0-9\-\[\]\#]+|border|hover:bg-[a-zA-Z0-9\-\[\]\#]+(\/[0-9]+)?|hover:text-[a-zA-Z0-9\-\[\]\#]+(\/[0-9]+)?)\b/g;
        let newG1 = g1.replace(toRemove, '').replace(/ +/g, ' ').trim();
        return `<Button${before}className="${newG1}"`;
      });

      // While we're at it, maybe convert some `<button>` to `<Button>`? No, that's dangerous. Let's just fix the CTAs.
      
      if (c !== o) fs.writeFileSync(p, c);
    }
  }
}
walk('src/components');
walk('src/app');
console.log('Buttons normalized safely');
