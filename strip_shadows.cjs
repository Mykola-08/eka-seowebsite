const fs = require('fs');
const path = require('path');
function walk(r) {
  if (!fs.existsSync(r)) return;
  for (let f of fs.readdirSync(r)) {
    let p = path.join(r, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8'), o = c;
      const re = /className=(["'`])([\s\S]*?)\1/g;
      c = c.replace(re, (match, quote, g1) => {
        let newG1 = g1.replace(/\b(hover:)?(shadow-[a-zA-Z0-9\-\[\]\.\/\#]+|shadow)\b/g, '');
        newG1 = newG1.replace(/\b(hover:)?(drop-shadow-[a-zA-Z0-9\-\[\]\.\/\#]+|drop-shadow)\b/g, '');
        return `className=${quote}${newG1.replace(/ +/g, ' ').trim()}${quote}`;
      });
      if (c !== o) fs.writeFileSync(p, c);
    }
  }
}
walk('src/components');
walk('src/app');
console.log('Shadows stripped safely');
