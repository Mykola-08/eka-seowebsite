const fs = require('fs');
const file = 'src/components/HomeContent.tsx';
let content = fs.readFileSync(file, 'utf8');

// Bento Image 1
content = content.replace(
  /src="https:\/\/images\.pexels\.com\/photos\/3997989\/pexels-photo-3997989\.jpeg\?auto=compress&cs=tinysrgb&w=1200"[\s\S]*?className="absolute inset-0 w-full h-full object-cover" \s*\/>/m,
  `src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200" \n                alt="Integrative Wellness" \n                fill\n                priority={true}\n                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"\n                className="absolute inset-0 w-full h-full object-cover" \n              />`
);

// Bento Image 2
content = content.replace(
  /src="https:\/\/images\.pexels\.com\/photos\/4506105\/pexels-photo-4506105\.jpeg\?auto=compress&cs=tinysrgb&w=800"[\s\S]*?className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" \s*\/>/m,
  `src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800" \n                  alt="Kinesiology" \n                  fill\n                  priority={true}\n                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"\n                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" \n                />`
);

// Bento Image 3
content = content.replace(
  /src="https:\/\/images\.pexels\.com\/photos\/1640777\/pexels-photo-1640777\.jpeg\?auto=compress&cs=tinysrgb&w=600"[\s\S]*?className="absolute inset-0 w-full h-full object-cover" \s*\/>/m,
  `src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" \n                alt="Healthy Lifestyle" \n                fill\n                priority={true}\n                sizes="(max-width: 768px) 100vw, 300px"\n                className="absolute inset-0 w-full h-full object-cover" \n              />`
);

// Therapist Photo
content = content.replace(
  /src="\/images\/therapist_photo\.jpg"[\s\S]*?className="object-cover"\s*\/>/m,
  `src="/images/therapist_photo.jpg"\n                  alt={t('home.elenaAlt')}\n                  fill\n                  priority={true}\n                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"\n                  className="object-cover"\n                />`
);

fs.writeFileSync(file, content);
console.log('Done');
