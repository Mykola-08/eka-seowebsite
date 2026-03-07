const fs = require('fs');
let file = fs.readFileSync('src/components/FooterPillMenu.tsx', 'utf8');

file = file.replace(
  'px-2 py-2 flex justify-between items-center ring-1 ring-black/5',
  'px-1.5 py-1 sm:px-2 sm:py-2 flex justify-between items-center ring-1 ring-black/5 gap-1'
);

file = file.replace(
  '\"flex flex-col items-center justify-center w-full py-1 rounded-full transition-all duration-300 relative group\"',
  '\"flex flex-col items-center justify-center w-[20%] min-w-[50px] sm:min-w-[65px] flex-1 py-1 rounded-full transition-all duration-300 relative group\"'
);

file = file.replace(
  /\"p-2 rounded-full transition-all duration-300 relative\"/g,
  '\"p-1.5 sm:p-2 rounded-full transition-all duration-300 relative\"'
);

file = file.replace(
  /className={cn\(\"w-5 h-5\", isActive && \"fill-current\"\)}/g,
  'className={cn(\"w-4 h-4 sm:w-5 sm:h-5\", isActive && \"fill-current\")}'
);

file = file.replace(
  /<span className=\"text-\\[10px\\] mt-1\">\{item.label\}<\\/span>/g,
  '<span className=\"text-[9px] sm:text-[10px] mt-0.5 text-center leading-tight px-0.5 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-full\">{item.label}</span>'
);

fs.writeFileSync('src/components/FooterPillMenu.tsx', file);
console.log('Fixed FooterPillMenu size');
