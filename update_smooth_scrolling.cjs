const fs = require('fs');

const file = 'src/components/SmoothScrolling.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure Lenis sets itself globally for useScrollLock to pause it
if (!content.includes('window.lenis = lenis;')) {
  content = content.replace(
    /lenis = new Lenis\(\{([\s\S]*?)\}\);/m,
    `lenis = new Lenis({$1});\n      // Expose globally for hooks like useScrollLock to access .stop() and .start()\n      (window as any).lenis = lenis;`
  );
  fs.writeFileSync(file, content);
  console.log('SmoothScrolling updated');
} else {
  console.log('SmoothScrolling already updated');
}
