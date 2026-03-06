const fs = require('fs');

let c = fs.readFileSync('src/components/ForBusinessContent.tsx', 'utf8');

c = c.replace(/<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1522071820081-009f0129c71c\?auto=format&fit=crop&q=80&w=1200"[\s\S]*?\/>/, 
  `<Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-8 text-center pointer-events-none">
                  <h4 className="text-2xl font-bold text-white mb-4">Team Cohesion</h4>
                  <p className="text-lg text-gray-200">Our specialized activities help break the ice, foster communication, and build strong bonds within your team.</p>
                </div>`);

c = c.replace(/<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1542744173-8e7e53415bb0\?auto=format&fit=crop&q=80&w=800"[\s\S]*?\/>/, 
  `<Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                      alt="Productivity focus"
                      fill
                      className="object-cover transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-6 text-center pointer-events-none">
                      <h4 className="text-xl font-bold text-white mb-3">Enhanced Focus</h4>
                      <p className="text-gray-200">Learn techniques to improve individual output and overall team efficiency.</p>
                    </div>`);

c = c.replace(/<Image\s+src="https:\/\/images\.pexels\.com\/photos\/3756679\/pexels-photo-3756679\.jpeg\?auto=compress&cs=tinysrgb&w=800"[\s\S]*?\/>/, 
  `<Image
                      src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Focus and stress relief"
                      fill
                      className="object-cover transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-6 text-center pointer-events-none">
                      <h4 className="text-xl font-bold text-white mb-3">Stress Relief</h4>
                      <p className="text-gray-200">Implement mindfulness practices to keep your team healthy and resilient.</p>
                    </div>`);

c = c.replace(/<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1497366216548-37526070297c\?auto=format&fit=crop&q=80&w=1200"[\s\S]*?\/>/, 
  `<Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    alt="Holistic workplace environment"
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-8 text-center pointer-events-none">
                    <h4 className="text-2xl font-bold text-white mb-4">Holistic Environment</h4>
                    <p className="text-gray-200 text-lg">Create a workspace that naturally encourages well-being.</p>
                  </div>`);

c = c.replace(/group-hover:opacity-90/g, 'group-hover:opacity-0');
c = c.replace(/group-hover:opacity-80/g, 'group-hover:opacity-0');

c = c.replace(/<div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">/g, '<div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full transition-opacity duration-500 group-hover:opacity-0">');
c = c.replace(/<div className="absolute bottom-0 left-0 p-8 z-20">/g, '<div className="absolute bottom-0 left-0 p-8 z-20 transition-opacity duration-500 group-hover:opacity-0">');

fs.writeFileSync('src/components/ForBusinessContent.tsx', c);
