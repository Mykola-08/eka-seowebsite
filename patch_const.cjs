const fs = require('fs');
let code = fs.readFileSync('src/shared/constants.ts', 'utf8');

const str = `  {
    id: 'constelaciones',
    titleKey: 'services.constelaciones.title',
    subtitleKey: 'services.constelaciones.subtitle',
    descriptionKey: 'services.constelaciones.description',
    iconName: 'Users',
    color: 'pink',
    durations: [90],
    image: '/images/eka_logo.png',
    href: '/services/constelaciones',
    price: 90,
    benefitsKeys: ['services.constelaciones.benefit1', 'services.constelaciones.benefit2', 'services.constelaciones.benefit3', 'services.constelaciones.benefit4']
  },
`;
code = code.replace(/export const SERVICES_DATA: ServiceItem\[\] = \[\n/, 'export const SERVICES_DATA: ServiceItem[] = [\n' + str);

fs.writeFileSync('src/shared/constants.ts', code);