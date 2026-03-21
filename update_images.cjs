const fs = require('fs');

// Update AppleHero.tsx to load first 3 images eagerly
const heroFile = 'src/components/AppleHero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');
heroContent = heroContent.replace(
  /priority=\{index === 0\}\n\s*loading=\{index === 0 \? 'eager' : 'lazy'\}/g,
  `priority={index < 3}\n                loading={index < 3 ? 'eager' : 'lazy'}`
);
fs.writeFileSync(heroFile, heroContent);
console.log('AppleHero.tsx updated');

// Update HomeContent.tsx images to preload them fully
const homeFile = 'src/components/HomeContent.tsx';
let homeContent = fs.readFileSync(homeFile, 'utf8');

// Bento Image 1
homeContent = homeContent.replace(
  /<Image \s*src="https:\/\/images\.pexels\.com\/photos\/3997989\/pexels-photo-3997989\.jpeg\?auto=compress&cs=tinysrgb&w=1200" \s*alt="Integrative Wellness" \s*fill\s*priority=\{true\}\s*sizes="\(max-width: 768px\) 100vw, \(max-width: 1200px\) 50vw, 600px"\s*className="absolute inset-0 w-full h-full object-cover" \s*\/>/g,
  `<Image \n                src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200" \n                alt="Integrative Wellness" \n                fill\n                priority={true}\n                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"\n                className="absolute inset-0 w-full h-full object-cover" \n              />`
);

// Bento Image 2
homeContent = homeContent.replace(
  /<Image \s*src="https:\/\/images\.pexels\.com\/photos\/4506105\/pexels-photo-4506105\.jpeg\?auto=compress&cs=tinysrgb&w=800" \s*alt="Kinesiology" \s*fill\s*sizes="\(max-width: 768px\) 100vw, \(max-width: 1200px\) 50vw, 400px"\s*className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" \s*\/>/g,
  `<Image \n                  src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800" \n                  alt="Kinesiology" \n                  fill\n                  priority={true}\n                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"\n                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" \n                />`
);

// Bento Image 3
homeContent = homeContent.replace(
  /<Image \s*src="https:\/\/images\.pexels\.com\/photos\/1640777\/pexels-photo-1640777\.jpeg\?auto=compress&cs=tinysrgb&w=600" \s*alt="Healthy Lifestyle" \s*fill\s*sizes="\(max-width: 768px\) 100vw, 300px"\s*className="absolute inset-0 w-full h-full object-cover" \s*\/>/g,
  `<Image \n                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" \n                alt="Healthy Lifestyle" \n                fill\n                priority={true}\n                sizes="(max-width: 768px) 100vw, 300px"\n                className="absolute inset-0 w-full h-full object-cover" \n              />`
);

// Therapist Photo
homeContent = homeContent.replace(
  /<Image\s*src="\/images\/therapist_photo\.jpg"\s*alt=\{t\('home\.elenaAlt'\)\}\s*fill\s*sizes="\(max-width: 640px\) 100vw, \(max-width: 1024px\) 50vw, 500px"\s*className="object-cover"\s*\/>/g,
  `<Image\n                  src="/images/therapist_photo.jpg"\n                  alt={t('home.elenaAlt')}\n                  fill\n                  priority={true}\n                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"\n                  className="object-cover"\n                />`
);

fs.writeFileSync(homeFile, homeContent);
console.log('HomeContent.tsx updated');
