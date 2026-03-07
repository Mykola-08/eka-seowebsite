const fs = require('fs');

let file = fs.readFileSync('src/components/SmartBookingPopup.tsx', 'utf8');

if (!file.includes('const [mounted, setMounted]')) {
  file = file.replace(
    if (!isOpen) return null;\n\n  return (,
    const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);\n\n  if (!isOpen) return null;\n\n  return mounted && typeof document !== 'undefined' ? createPortal(
  );
  
  file = file.replace(
          </motion.div>\n    </div>\n  );\n},
          </motion.div>\n    </div>,\n    document.body\n  ) : null;\n}
  );

  fs.writeFileSync('src/components/SmartBookingPopup.tsx', file);
  console.log('Fixed popup with portal');
}
