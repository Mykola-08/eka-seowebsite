const fs = require('fs');

let content = fs.readFileSync('src/components/ForBusinessContent.tsx', 'utf8');

const regex = /\{\/\* Tiers \/ Plans Section[\s\S]*?(?=\s*<FAQ)/;

const replacement = `{/* Tiers / Plans Section - Rounded Style */}
        <section className="py-24 bg-white relative overflow-hidden" id="plans">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6">
                Tailored Solutions for Organizations
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Invest in your team's physical and mental well-being to achieve peak productivity and harmony in the workplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Background gradient blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Plan 1 - Teams */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/20 relative transition-all duration-300 flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full bg-blue-400 pointer-events-none" />
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
                    <span className="text-gray-700 leading-snug">Team cohesion sessions & events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Conflicts resolution frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">Better operational effectivity & focus</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-2xl py-6 text-lg relative z-10 bg-gray-900 hover:bg-black text-white">
                  <Link href="/contact?subject=teams">Get Started</Link>
                </Button>
              </div>

              {/* Plan 2 - Office */}
              <div className="bg-gray-900 rounded-[2rem] p-8 sm:p-10 shadow-2xl relative transition-transform duration-300 flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20 rounded-bl-full bg-white pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 rounded-tr-full bg-blue-500 pointer-events-none" />
                
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
                    <span className="text-gray-100 leading-snug">Advanced individual supplement testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Company-wide team cohesion programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Complex conflict resolution frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
                    <span className="text-gray-100 leading-snug">Maximized overall effectivity & throughput</span>
                  </li>
                </ul>

                <Button asChild className="w-full rounded-2xl py-6 text-lg relative z-10 bg-white text-black hover:bg-gray-100">
                  <Link href="/contact?subject=office">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
`;

if (content.match(regex)) {
   content = content.replace(regex, replacement);
   console.log("Replaced Tiers");
} else {
   console.log("No match found for Tiers!");
}

fs.writeFileSync('src/components/ForBusinessContent.tsx', content);
