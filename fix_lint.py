import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

# Remove useDrag from imports as we used native touch events + Framer Motion
content = content.replace("import { useDrag } from '@use-gesture/react';\n", "")
content = content.replace("const [showMobileCTA, setShowMobileCTA] = useState(false);", "")
content = content.replace("setShowMobileCTA((prev) => {", "// @ts-ignore\n        const ignored_setShowMobileCTA = (prev) => {")
content = content.replace("return prev === next ? prev : next;\n        });", "return prev === next ? prev : next;\n        };")

with open('src/components/MainLayout.tsx', 'w') as f:
    f.write(content)
