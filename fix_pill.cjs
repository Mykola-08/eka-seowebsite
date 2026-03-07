const fs = require('fs');
let content = fs.readFileSync('src/components/FooterPillMenu.tsx', 'utf8');
content = content.replace("t('nav.forBusiness')", "t('personalizedServices.business')");
fs.writeFileSync('src/components/FooterPillMenu.tsx', content);
