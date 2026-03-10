import re

with open('src/components/MainLayout.tsx', 'r') as f:
    content = f.read()

content = content.replace("""        setIsScrolled((prev) => {
          const next = scrollTop > 20;
          return prev === next ? prev : next;
        };
        // @ts-ignore
        const ignored_setShowMobileCTA = (prev) => {
          const next = scrollPercent > 0.7;
          return prev === next ? prev : next;
        };""", """        setIsScrolled((prev) => {
          const next = scrollTop > 20;
          return prev === next ? prev : next;
        });""")

with open('src/components/MainLayout.tsx', 'w') as f:
    f.write(content)
