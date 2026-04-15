
const fs = require('fs');
const oldCode = fs.readFileSync('old_home.tsx', 'utf8');
const curCode = fs.readFileSync('src/components/HomeContent.tsx', 'utf8');

// 1. AppleHero import
let curCode2 = curCode.replace(
  'import { shimmerBlurDataURL } from \'@/lib/image-utils\';',
  'import { shimmerBlurDataURL } from \'@/lib/image-utils\';\nimport AppleHero from \'@/components/AppleHero\';'
);

// 2. stats definition
curCode2 = curCode2.replace(
  'const [problem, setProblem] = useState<ProblemState>(\'back_pain\');',
  'const [problem, setProblem] = useState<ProblemState>(\'back_pain\');\n\n  const stats = [\n    { value: 1500, suffix: \+\, label: t(\'hero.stats.sessions\') },\n    { value: 10, suffix: \+\, label: t(\'hero.stats.experience\') },\n    { value: 96, suffix: \%\, label: t(\'hero.stats.clients\') },\n    { value: 9, suffix: \\, label: t(\'hero.stats.countries\') }\n  ];'
);

// 3. AppleHero, Stats, and Bento block
const marker = '      {/* Hero Section */}';
const startIdx = oldCode.indexOf(marker);
const endIdx = oldCode.indexOf('      {/* Elena Introduction Section - REDESIGNED */}');
const blocks = oldCode.substring(startIdx, endIdx);

curCode2 = curCode2.replace(
  '<FunnelHero currentProblem={problem} onProblemChange={setProblem} />',
  blocks + '\n      <FunnelHero currentProblem={problem} onProblemChange={setProblem} />'
);

fs.writeFileSync('src/components/HomeContent.tsx', curCode2);
console.log('Fixed');

