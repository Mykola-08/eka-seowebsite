const fs = require('fs');

const files = [
  'src/components/AgenyzContent.tsx',
  'src/components/revision360/LanguageSelector.tsx',
  'src/components/revision360/FinalInvitationSection.tsx',
  'src/components/revision360/BenefitsSection.tsx',
  'src/components/revision360/Why360Section.tsx',
  'src/components/revision360/VariantsSection.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log('Skipping ' + file);
    continue;
  }
  let content = fs.readFileSync(file, 'utf8');

  // Fix specific known bad patterns
  content = content.replace(/hover: hover:-[a-z0-9]+\/[0-9]+/g, 'hover:shadow-md');
  content = content.replace(/hover:-[a-z0-9]+\/[0-9]+/g, 'hover:shadow-md');
  content = content.replace(/ -[a-z0-9]+\/[0-9]+/g, ' shadow-md');
  content = content.replace(/ -none/g, ' shadow-none');
  content = content.replace(/ -xs/g, ' shadow-sm');
  content = content.replace(/backdrop-blur-xs/g, 'backdrop-blur-sm');
  content = content.replace(/  border-0/g, ' border-0'); 
  content = content.replace(/ hover:border-0/g, '');
  content = content.replace(/ hover:border-[a-zA-Z0-9-]+\/[0-9]+/g, '');
  content = content.replace(/drop-"/g, '"');

  fs.writeFileSync(file, content);
}
console.log('Fixed Tailwind patterns');
