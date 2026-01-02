import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({ isOpen, onClose, children, title, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  

  const sizeClasses = {
    sm: 'max-w-sm sm:max-w-md',
    md: 'max-w-lg sm:max-w-xl lg:max-w-2xl',
    lg: 'max-w-xl sm:max-w-2xl lg:max-w-4xl',
    xl: 'max-w-2xl sm:max-w-4xl lg:max-w-6xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              className={`relative w-full ${sizeClasses[size]} transform rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-amber-500/20 shadow-2xl shadow-amber-500/10`}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              onClick={(e) => e.stopPropagation()}
            >
          {/* Golden glow effect */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 rounded-2xl blur-sm"
            animate={{ 
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative p-6 sm:p-8 lg:p-10">
            {title && (
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-amber-100">{title}</h2>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-800/50 text-amber-200"
                  whileHover={{ 
                    backgroundColor: "rgba(39, 39, 42, 0.7)",
                    color: "rgb(252, 211, 77)",
                    scale: 1.1
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
            {!title && (
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/50 text-amber-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ 
                  backgroundColor: "rgba(39, 39, 42, 0.7)",
                  color: "rgb(252, 211, 77)",
                  scale: 1.1
                }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
      )}
    </AnimatePresence>
  );
}
