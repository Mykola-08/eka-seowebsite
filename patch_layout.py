import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

# Add a drag hook that doesn't rely on target: window since that requires proper ref binding
# Or use useDrag hooked to document/window via useEffect
# Let's use framer-motion's drag properties on the mobile menu container.

# Wait, the user wants "swipe from the right you get the burger menu in mobile".
# So we need to track screen edge swipes on the document/window.

code_to_insert = """
  // Gesture support: swipe left from right edge to open menu
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Start within 40px of right edge, swipe left at least 50px, not too much vertical
      if (
        touchStartX > window.innerWidth - 40 &&
        deltaX < -50 &&
        Math.abs(deltaY) < 50 &&
        !isMenuOpen
      ) {
        setIsMenuOpen(true);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMenuOpen]);
"""

# Find where to insert it: after log page views useEffect
insert_point = "  // Log page views\n  useEffect(() => {\n    if (pathname) {\n      logPageView(pathname);\n    }\n  }, [pathname, logPageView]);"
content = content.replace(insert_point, insert_point + "\n" + code_to_insert)

with open('src/components/MainLayout.tsx', 'w') as f:
    f.write(content)
