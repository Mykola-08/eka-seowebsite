const fs = require('fs');

let file = fs.readFileSync('src/components/ui/service-bento.tsx', 'utf8');

file = file.replace(
                          <div className="relative w-full md:w-2/5 lg:w-1/2 h-[35vh] md:h-full shrink-0">,
                          <div className="relative w-full md:w-2/5 lg:w-1/2 h-[20vh] md:h-full shrink-0">
);

file = file.replace(
                          <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto overscroll-contain customize-scrollbar">,
                          <div className="flex-1 p-5 sm:p-8 md:p-12 flex flex-col overflow-y-auto overscroll-contain customize-scrollbar">
);

file = file.replace(
                                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-900 mb-6 sm:mb-8">{description}</p>,
                                <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-900 mb-4 sm:mb-8">{description}</p>
);

file = file.replace(
                             <div className="flex flex-col xl:flex-row gap-4 pt-6 mt-auto border-t border-gray-100 shrink-0">,
                             <div className="flex flex-col xl:flex-row gap-3 pt-4 sm:pt-6 mt-auto border-t border-gray-100 shrink-0">
);

fs.writeFileSync('src/components/ui/service-bento.tsx', file);
console.log('Fixed image size for bento drawer');
