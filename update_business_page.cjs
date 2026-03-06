const fs = require('fs');

let content = fs.readFileSync('src/components/ForBusinessContent.tsx', 'utf8');

const tiersRegex = /\{\/\* Tiers \/ Plans Section[\s\S]*?(?=\{\/\* FAQ \*\/)/;

const newTiers = \{/* Tiers / Plans Section */}
        <section className="py-24 bg-white relative overflow-hidden" id="plans">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6">
                Tailored Solutions for Organizations
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Invest in your team's physical and mental well-being to achieve peak productivity and harmony in the workplace.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Background gradient blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Plan 1 - Teams */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/20 relative group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full bg-blue-400" />
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-3 relative z-10">Teams / Startups</h3>
                <p className="text-gray-500 font-medium mb-8 flex-grow relative z-10">Perfect for small groups and departments looking to improve synchronization and performance.</p>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900 tracking-tighter">€100</span>
                    <span className="text-xl text-gray-500 font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1 font-medium">Starting from</div>
                </div>

                <ul className="space-y-5 mb-10 relative z-10 flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Individual supplement testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Team cohesion training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Conflicts resolution support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Better effectivity & productivity</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-2xl py-6 text-lg relative z-10 bg-gray-900 hover:bg-black text-white">
                  <Link href="/contact?subject=teams">Get Started</Link>
                </Button>
              </motion.div>

              {/* Plan 2 - Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900 rounded-[2rem] p-8 sm:p-10 shadow-2xl relative group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20 rounded-bl-full bg-white" />
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 rounded-tr-full bg-blue-500" />
                
                <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 relative z-10">Office / Enterprise</h3>
                <p className="text-gray-300 font-medium mb-8 flex-grow relative z-10">Comprehensive solution for entire offices and companies requiring scalable wellness infrastructure.</p>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white tracking-tighter">€500</span>
                    <span className="text-xl text-gray-400 font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">Starting from</div>
                </div>

                <ul className="space-y-5 mb-10 relative z-10 flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Comprehensive individual supplement testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Advanced company-wide team cohesion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Complex conflicts resolution frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Maximized overall effectivity & throughput</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-2xl py-6 text-lg relative z-10 bg-white text-black hover:bg-gray-100">
                  <Link href="/contact?subject=office">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        \;

if (tiersRegex.test(content)) {
  content = content.replace(tiersRegex, newTiers);
  console.log('Tiers section replaced successfully.');
} else {
  console.log('Failed to match Tiers section.');
}

// Fade out gradients on hover so the explanation is visible
content = content.replace(/group-hover:opacity-90"/g, 'group-hover:opacity-0"');
content = content.replace(/group-hover:opacity-80"/g, 'group-hover:opacity-0"');

// Make text sections fade out on hover
content = content.replace(/<div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full">/g, 
'<div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 w-full transition-opacity duration-500 group-hover:opacity-0">');

content = content.replace(/<div className="absolute bottom-0 left-0 p-8 z-20">/g, 
'<div className="absolute bottom-0 left-0 p-8 z-20 transition-opacity duration-500 group-hover:opacity-0">');

// Add Hover Explanations into Box images
// Box 1
content = content.replace(
  /<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1522071820081-009f0129c71c\?auto=format&fit=crop&q=80&w=1200"[\s\S]*?\/>/,
  \<Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Team collaboration"
                  fill
                  className="object-cover transition-transform duration-700 "
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-8 text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">Team Building</h4>
                  <p className="text-lg text-gray-200">Our specialized activities help break the ice, foster communication, and build strong bonds within your team, leading to a more harmonious and effective work environment.</p>
                </div>\
);

// Box 2
content = content.replace(
  /<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1542744173-8e7e53415bb0\?auto=format&fit=crop&q=80&w=800"[\s\S]*?\/>/,
  \<Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                      alt="Productivity focus"
                      fill
                      className="object-cover transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-6 text-center">
                      <h4 className="text-xl font-bold text-white mb-3">Enhanced Focus</h4>
                      <p className="text-gray-200">Learn techniques for better concentration, improving individual output and overall team efficiency in daily tasks.</p>
                    </div>\
);

// Box 3
content = content.replace(
  /<Image\s+src="https:\/\/images\.pexels\.com\/photos\/3756679\/pexels-photo-3756679\.jpeg\?auto=compress&cs=tinysrgb&w=800"[\s\S]*?\/>/,
  \<Image
                      src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Focus and stress relief"
                      fill
                      className="object-cover transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-6 text-center">
                      <h4 className="text-xl font-bold text-white mb-3">Stress Relief</h4>
                      <p className="text-gray-200">Implement mindfulness and stress reduction practices to keep your team healthy, happy, and resilient under pressure.</p>
                    </div>\
);

// Box 4
content = content.replace(
  /<Image\s+src="https:\/\/images\.unsplash\.com\/photo-1497366216548-37526070297c\?auto=format&fit=crop&q=80&w=1200"[\s\S]*?\/>/,
  \<Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    alt="Holistic workplace environment"
                    fill
                    className="object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col justify-center items-center p-8 text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">Holistic Environment</h4>
                    <p className="text-gray-200 text-lg">Create a workspace that naturally encourages well-being. We help optimize physical environments with holistic practices for maximum employee satisfaction.</p>
                  </div>\
);

fs.writeFileSync('src/components/ForBusinessContent.tsx', content);
console.log('Update Complete.');
