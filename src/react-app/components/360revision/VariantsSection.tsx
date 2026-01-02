import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { RotateCcw, MapPin, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';

interface Variant {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  duration: string;
  includes: string[];
  price: string;
}

export default function VariantsSection() {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const { t } = useLanguage();

  const variants: Variant[] = [
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: t('variants.reset.title'),
      subtitle: t('variants.reset.subtitle'),
      description: t('variants.reset.description'),
      idealFor: [
        t('variants.reset.idealFor.1'),
        t('variants.reset.idealFor.2'),
        t('variants.reset.idealFor.3'),
        t('variants.reset.idealFor.4')
      ],
      duration: t('variants.reset.duration'),
      includes: [
        t('variants.reset.includes.1'),
        t('variants.reset.includes.2'),
        t('variants.reset.includes.3'),
        t('variants.reset.includes.4')
      ],
      price: "€450"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t('variants.mapping.title'), 
      subtitle: t('variants.mapping.subtitle'),
      description: t('variants.mapping.description'),
      idealFor: [
        t('variants.mapping.idealFor.1'),
        t('variants.mapping.idealFor.2'),
        t('variants.mapping.idealFor.3'),
        t('variants.mapping.idealFor.4')
      ],
      duration: t('variants.mapping.duration'),
      includes: [
        t('variants.mapping.includes.1'),
        t('variants.mapping.includes.2'),
        t('variants.mapping.includes.3'),
        t('variants.mapping.includes.4')
      ],
      price: "€350"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: t('variants.alignment.title'),
      subtitle: t('variants.alignment.subtitle'),
      description: t('variants.alignment.description'),
      idealFor: [
        t('variants.alignment.idealFor.1'),
        t('variants.alignment.idealFor.2'),
        t('variants.alignment.idealFor.3'),
        t('variants.alignment.idealFor.4')
      ],
      duration: t('variants.alignment.duration'), 
      includes: [
        t('variants.alignment.includes.1'),
        t('variants.alignment.includes.2'),
        t('variants.alignment.includes.3'),
        t('variants.alignment.includes.4')
      ],
      price: "€280"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('variants.integral.title'),
      subtitle: t('variants.integral.subtitle'),
      description: t('variants.integral.description'),
      idealFor: [
        t('variants.integral.idealFor.1'),
        t('variants.integral.idealFor.2'),
        t('variants.integral.idealFor.3'),
        t('variants.integral.idealFor.4')
      ],
      duration: t('variants.integral.duration'),
      includes: [
        t('variants.integral.includes.1'),
        t('variants.integral.includes.2'),
        t('variants.integral.includes.3'),
        t('variants.integral.includes.4')
      ],
      price: "€750"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('variants.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('variants.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {variants.map((variant, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/60 border border-amber-500/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
              onClick={() => setSelectedVariant(variant)}
              whileHover={{ 
                borderColor: "rgba(245, 158, 11, 0.5)",
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Golden frame effect */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 rounded-2xl blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative p-6 lg:p-8 h-full flex flex-col">
                <motion.div 
                  className="text-amber-400 mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    color: "rgb(252, 211, 77)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {variant.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl lg:text-2xl font-semibold text-amber-100 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {variant.title}
                </motion.h3>
                
                <motion.p 
                  className="text-amber-300/80 text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {variant.subtitle}
                </motion.p>
                
                <motion.p 
                  className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {variant.description}
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-between mt-auto pt-4 border-t border-amber-500/20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-amber-200 font-semibold">
                    {variant.duration}
                  </span>
                  <motion.span 
                    className="text-2xl font-light text-amber-100"
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {variant.price}
                  </motion.span>
                </motion.div>
                
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-amber-300/70 text-xs">
                    {t('variants.clickForDetails')}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedVariant && (
        <Modal 
          isOpen={!!selectedVariant} 
          onClose={() => setSelectedVariant(null)}
          title={selectedVariant.title}
          size="lg"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-amber-400">
                {selectedVariant.icon}
              </div>
              <div>
                <h3 className="text-xl text-amber-200">{selectedVariant.subtitle}</h3>
                <p className="text-zinc-300">{selectedVariant.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-amber-200">{t('variants.idealFor')}:</h4>
                <ul className="space-y-2">
                  {selectedVariant.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-amber-200">{t('variants.includes')}:</h4>
                <ul className="space-y-2">
                  {selectedVariant.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-zinc-800/50 rounded-lg border border-amber-500/20">
              <div>
                <p className="text-amber-200 font-medium">{t('variants.sessionDuration')}</p>
                <p className="text-2xl font-light text-amber-100">{selectedVariant.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-amber-200 font-medium">{t('variants.investment')}</p>
                <p className="text-3xl font-light text-amber-100">{selectedVariant.price}</p>
              </div>
            </div>

            <motion.a
              href={`https://wa.me/34658867133?text=Hola%2C%20m%27agradaria%20reservar%20una%20sessi%C3%B3%20${encodeURIComponent(selectedVariant.title)}.%20Podr%C3%ADem%20parlar%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-900 font-semibold text-lg rounded-lg shadow-lg shadow-amber-500/30 text-center"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(245, 158, 11, 0.5)",
                backgroundColor: "linear-gradient(to right, rgb(251, 191, 36), rgb(245, 158, 11))"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {t('variants.bookSession')}
            </motion.a>
          </div>
        </Modal>
      )}
    </section>
  );
}
