const fs = require('fs');
let file = fs.readFileSync('src/components/FooterPillMenu.tsx', 'utf8');

file = file.replace(
  'px-2 py-2 flex justify-between items-center ring-1 ring-black/5',
  'px-1.5 py-1.5 sm:px-2 sm:py-2 flex justify-between items-center ring-1 ring-black/5 gap-1'
);

file = file.replace(
  '"flex flex-col items-center justify-center w-full py-1 rounded-full transition-all duration-300 relative group"',
  '"flex flex-col items-center justify-center w-auto min-w-[3.5rem] flex-1 py-1 rounded-full transition-all duration-300 relative group"'
);

file = file.split('"p-2 rounded-full transition-all duration-300 relative"').join('"p-1.5 sm:p-2 rounded-full transition-all duration-300 relative"');

file = file.split('className={cn("w-5 h-5", isActive && "fill-current")}').join('className={cn("w-4 h-4 sm:w-5 sm:h-5", isActive && "fill-current")}');

file = file.split('<span className="text-[10px] mt-1">{item.label}</span>').join('<span className="text-[9px] sm:text-[10px] mt-0.5 text-center leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[4rem] sm:max-w-none">{item.label}</span>');

fs.writeFileSync('src/components/FooterPillMenu.tsx', file);
console.log('Fixed FooterPillMenu size');
