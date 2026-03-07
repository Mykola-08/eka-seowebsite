const fs = require('fs');

let file = fs.readFileSync('src/components/SmartBookingPopup.tsx', 'utf8');

// Add createPortal requirement
if (!file.includes('createPortal')) {
  file = file.replace(
    "import { motion, AnimatePresence } from 'framer-motion';",
    "import { motion, AnimatePresence } from 'framer-motion';\nimport { createPortal } from 'react-dom';"
  );
}

// Ensure the modal state is using createPortal for stacking contexts
if (file.includes('return (') && file.includes('<AnimatePresence>')) {
    // Add mounted state just before return
    file = file.replace(
        "if (!isOpen) return null;\n\n  return (",
        "const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);\n\n  if (!isOpen) return null;\n\n  return mounted && typeof document !== 'undefined' ? createPortal("
    );
    
    // adjust closing tag to match createPortal
    file = file.replace(
        "    </AnimatePresence>\n  );\n}",
        "    </AnimatePresence>,\n    document.body\n  ) : null;\n}"
    );
}

fs.writeFileSync('src/components/SmartBookingPopup.tsx', file);
console.log('Fixed smart booking popup portal stacking');
