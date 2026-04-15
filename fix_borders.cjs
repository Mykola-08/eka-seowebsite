const fs = require('fs');
const { execSync } = require('child_process');

try {
  const fileLines = execSync('dir /s /b "src\\components\\*.tsx"').toString().split('\r\n').filter(Boolean);

  for (const file of fileLines) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // e.g. "border border-gray-100" -> "shadow-sm"
    content = content.replace(/\bborder\s+border-[a-z]+(-[0-9]+)?(\/[0-9]+)?\b/g, 'shadow-sm border-0');
    // e.g. "border-t border-gray-100/50" -> "mt-auto pt-4 shadow-sm border-0"
    content = content.replace(/\bborder-[tb]\s+border-[a-z]+(-[0-9]+)?(\/[0-9]+)?\b/g, 'shadow-sm border-0');
    // e.g. "border-gray-200/50" standing alone
    content = content.replace(/\bborder-([a-z]+-[0-9]+(\/[0-9]+)?)\b/g, 'border-0');
    
    // specifically target custom border-white/6, etc
    content = content.replace(/\bborder-white\/[0-9]+\b/g, 'border-0');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
} catch(e) {
  console.error(e);
}
