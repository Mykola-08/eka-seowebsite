const fs = require('fs');
const content = fs.readFileSync('src/components/AgenyzContent.tsx', 'utf8');

const startRegex = /\{\/\* Catalogue \*\/\}.*?\{\/\* CTA \*\/\}/s;
const newBlock = \{/* General Product Info */}
        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-balance text-foreground">
              {t('agenyz.general.title') || 'Advanced Nutrition & Biohacking'}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground tracking-tight font-medium mb-12">
              {t('agenyz.general.subtitle') || 'A complete range of supplements designed to optimize your body and mind.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              <div className="bg-background rounded-3xl p-8 border border-border">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('agenyz.general.desc1') || 'Agenyz products stand out for their innovative approach to health. Using premium natural ingredients and the patented XBi-A® absorption technology, each formula is designed for maximum bioavailability and effectiveness at the cellular level.'}
                </p>
              </div>
              <div className="bg-background rounded-3xl p-8 border border-border">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('agenyz.general.desc2') || 'From immune support and sustained energy to cognitive clarity and cellular regeneration, discover how the Agenyz product ecosystem can elevate your quality of life.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}\;

const updated = content.replace(startRegex, newBlock);
fs.writeFileSync('src/components/AgenyzContent.tsx', updated);
console.log('Catalogue block replaced successfully.');
