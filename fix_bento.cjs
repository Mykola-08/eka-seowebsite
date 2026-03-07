const fs = require('fs');

let file = fs.readFileSync('src/components/ui/service-bento.tsx', 'utf8');

// 1. Add createPortal, useEffect, useState
if (!file.includes('createPortal')) {
  file = file.replace(
    import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';,
    import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';\nimport { createPortal } from 'react-dom';\nimport { useEffect, useState } from 'react';
  );
}

// 2. Add mounted state to ServiceBentoCard component
if (!file.includes('const [mounted, setMounted]')) {
  file = file.replace(
    xport function ServiceBentoCard({,
    xport function ServiceBentoCard({
  ).replace(
    const [isOpen, setIsOpen] = useState(false);,
    const [isOpen, setIsOpen] = useState(false);\n  const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);
  );
}

// 3. Wrap AnimatePresence with createPortal
file = file.replace(
  {/* Modal */}\n        <AnimatePresence>,
  {/* Modal */}\n        {mounted && document.body ? createPortal(\n        <AnimatePresence>
);
file = file.replace(
  </AnimatePresence>\n      </>\n    );\n  },
  </AnimatePresence>,\n        document.body\n        ) : null}\n      </>\n    );\n  }
);

fs.writeFileSync('src/components/ui/service-bento.tsx', file);
console.log('Fixed service bento');
