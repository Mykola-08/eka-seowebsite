const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/ForBusinessContent.tsx');
let source = fs.readFileSync(file, 'utf8');

if (!source.includes("import { ServiceBentoItem }")) {
    source = source.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport { ServiceBentoItem } from '@/components/ui/service-bento';");
}

// Fix Hero Image
source = source.replace("backgroundImage: '/images/services/business.jpg',", "backgroundImage: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600',");

// Extract the layout section
const newBentoCode = `            {/* Service Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceBentoItem
                title={t('personalized.business.bento.box1.title')}
                description={t('personalized.business.bento.box1.desc')}
                image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="md:col-span-2"
                details={
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Team Cohesion</h4>
                    <p className="text-gray-600 leading-relaxed">Our specialized activities help break the ice, foster communication, and build strong bonds within your team. We provide tailored workshops focusing on interpersonal dynamics, ensuring every team member feels valued and understood, which dramatically improves collaboration and mutual trust.</p>
                  </div>
                }
                bookUrl="/contact?subject=teams"
                bookText="Enquire Now"
              />

              <ServiceBentoItem
                title={t('personalized.business.bento.box2.title')}
                description={t('personalized.business.bento.box2.desc')}
                image="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="col-span-1"
                delay={0.1}
                details={
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Enhanced Focus</h4>
                    <p className="text-gray-600 leading-relaxed">Learn techniques to improve individual output and overall team efficiency. We train your staff on how to manage their energy rather than just their time. By implementing simple daily habits and mindset shifts, employees experience fewer distractions and extended periods of deep work.</p>
                  </div>
                }
                bookUrl="/contact?subject=office"
                bookText="Enquire Now"
              />

              <ServiceBentoItem
                title={t('personalized.business.bento.box3.title')}
                description={t('personalized.business.bento.box3.desc')}
                image="https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="col-span-1"
                delay={0.2}
                details={
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Stress Relief</h4>
                    <p className="text-gray-600 leading-relaxed">Strategies and practices aimed at reducing pressure and maintaining strong mental health. Burnout prevention is crucial for employee retention. We offer guided relaxation sessions, stress-management workshops, and actionable tools your team can use instantly during high-pressure situations.</p>
                  </div>
                }
                bookUrl="/contact?subject=teams"
                bookText="Enquire Now"
              />

              <ServiceBentoItem
                title={t('personalized.business.bento.box4.title')}
                description={t('personalized.business.bento.box4.desc')}
                image="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="md:col-span-2"
                delay={0.3}
                details={
                  <div className="space-y-4">
                     <h4 className="text-xl font-bold text-gray-900">Holistic Environment</h4>
                     <p className="text-gray-600 leading-relaxed">Create a workspace that naturally encourages well-being. We audit your current environment and provide recommendations for ergonomic improvements, lighting optimizations, and dedicated spaces that foster both energetic collaboration and peaceful reflection, leading to a healthier organizational culture.</p>
                  </div>
                }
                bookUrl="/contact?subject=office"
                bookText="Enquire Now"
              />
            </div>`;

const startTag = "{/* Rounded Colorful Bento Grid */}";
const endTag = "{/* Tiers / Plans Section - Rounded Style */}";

if (source.includes(startTag) && source.includes(endTag)) {
    const startIndex = source.indexOf(startTag);
    const endIndex = source.indexOf(endTag);
    source = source.substring(0, startIndex) + newBentoCode + '\n          </div>\n        </section>\n\n        ' + source.substring(endIndex);
    fs.writeFileSync(file, source, 'utf8');
    console.log("Updated!");
} else {
    console.log("Hooks not found", source.includes(startTag), source.includes(endTag));
}
