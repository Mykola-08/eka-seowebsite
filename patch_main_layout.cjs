const fs = require('fs');

const path = 'src/components/MainLayout.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes("import FooterUncover")) {
  content = content.replace("import dynamic from 'next/dynamic';", "import dynamic from 'next/dynamic';\nimport FooterUncover from '@/components/FooterUncover';");
}

const returnRegex = /return \([\s\r\n]*<div className="min-h-screen bg-secondary">/;
const match = content.match(returnRegex);
const footerStart = content.indexOf('{/* Footer */}');
const footerPillMenuStart = content.indexOf('<FooterPillMenu />');

if (match && footerStart !== -1 && footerPillMenuStart !== -1) {
  const startReturn = match.index;
  const beforeReturn = content.substring(0, startReturn);
  
  const returnStartString = match[0];
  const newReturnStartString = 'return (\n    <>\n      <FooterUncover\n        footer={\n          <>\n';
  
  const footerString = content.substring(footerStart, footerPillMenuStart);
  
  let contentPart = content.substring(startReturn + returnStartString.length, footerStart);
  
  const modifiedContent = beforeReturn + newReturnStartString + 
    '          ' + footerString.trim().replace(/^/, '') + '\n' +
    '          </>\n' +
    '        }\n' +
    '      >\n' +
    '        {/* Main Content Container inside Uncover */}\n' +
    contentPart + 
    '      </FooterUncover>\n' +
    '      <FooterPillMenu />\n' +
    '    </>\n' +
    '  );\n' +
    '}\n';

  fs.writeFileSync(path, modifiedContent, 'utf8');
  console.log('MainLayout patched successfully.');
} else {
  console.log('Could not find markers');
}
