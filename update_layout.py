import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

# Add useDrag to imports
import_insert = "import { useDrag } from '@use-gesture/react';\nimport { useState, useEffect, useRef, useCallback } from 'react';"
content = content.replace("import { useState, useEffect, useRef, useCallback } from 'react';", import_insert)

# Add useDrag hooks inside the component
drag_code = """
  // Global drag handler for opening menu from right edge
  const bindGlobalDrag = useDrag(({ down, movement: [mx, my], xy: [x, y], velocity: [vx, vy], direction: [dx, dy] }) => {
    // Check if we started near the right edge (e.g., within 40px of the screen width)
    const isFromRightEdge = x > window.innerWidth - 40;

    // If swiping left fast enough or far enough from right edge
    if (isFromRightEdge && dx < 0 && (vx > 0.5 || mx < -50) && !isMenuOpen) {
      setIsMenuOpen(true);
    }
  }, {
    target: typeof window !== "undefined" ? window : null,
    enabled: !isMenuOpen,
    axis: 'x'
  });

  // Mobile menu drag handler for closing (swipe down)
  const [{ y }, api] = useState({ y: 0 }); // To track visual drag offset if needed, but we can just use Framer Motion's drag
"""

with open('src/components/MainLayout.tsx', 'w') as f:
    f.write(content)
