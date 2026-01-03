import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/react-app/hooks/useLanguage';

export default function BackButton() {
  const { t } = useLanguage();
  const [showBackButton] = useState(() => {
    // Check if there's a referrer from ekabalance.com (including subdomains)
    const referrer = document.referrer;
    
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        // Check for ekabalance.com or any subdomain like 360revision.ekabalance.com
        if (referrerUrl.hostname.endsWith('ekabalance.com') || referrerUrl.hostname === 'ekabalance.com') {
          return true;
        }
      } catch {
        // If we can't parse the referrer URL, don't show the button
      }
    }

    // Check if there's a ref parameter pointing to ekabalance.com
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    
    if (refParam) {
      try {
        // Check if ref parameter contains ekabalance.com
        if (refParam.includes('ekabalance.com')) {
          return true;
        }
      } catch {
        // If we can't process the ref parameter, don't show the button
      }
    }
    
    return false;
  });

  const handleBack = () => {
    // Check if we have a ref parameter to know where to go back
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    
    if (refParam) {
      // If we have a ref parameter, try to navigate to it
      try {
        const targetUrl = refParam.startsWith('http') ? refParam : `https://${refParam}`;
        window.location.href = targetUrl;
        return;
      } catch {
        // If ref parameter is invalid, fall back to history
      }
    }
    
    // Check if document.referrer is available (user came from another page)
    if (document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        // If referrer is from ekabalance.com domain, navigate back to it
        if (referrerUrl.hostname.endsWith('ekabalance.com') || referrerUrl.hostname === 'ekabalance.com') {
          window.location.href = document.referrer;
          return;
        }
      } catch {
        // If we can't parse referrer, continue to history fallback
      }
    }
    
    // Fall back to browser history
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Ultimate fallback - navigate to ekabalance.com
      window.location.href = 'https://ekabalance.com';
    }
  };

  return (
    <AnimatePresence>
      {showBackButton && (
        <motion.button
          onClick={handleBack}
          className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center space-x-2 px-3 sm:px-4 py-2 bg-zinc-800/90 border border-amber-500/30 text-amber-200 rounded-lg backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            backgroundColor: "rgba(39, 39, 42, 0.95)",
            borderColor: "rgba(245, 158, 11, 0.5)",
            scale: 1.02
          }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t('back.return')}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
