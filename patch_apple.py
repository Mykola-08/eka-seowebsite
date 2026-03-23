import re

with open('src/components/AppleHero.tsx', 'r') as f:
    content = f.read()

# Restore rounded styles
content = content.replace(
    'rounded-apple md:rounded-apple-lg',
    'rounded-[32px] md:rounded-[48px]'
)

# Restore full background overlay instead of boxed
content = content.replace(
    'w-full max-w-[92%] md:max-w-6xl aspect-[4/3] sm:aspect-video md:aspect-auto md:flex-1 md:min-h-[380px]',
    'w-full max-w-[90%] md:max-w-6xl aspect-video md:aspect-[21/9]'
)

content = content.replace(
    'min-h-[100svh] md:h-[100svh] bg-[#fdfdfd]',
    'min-h-[90vh] bg-secondary'
)

with open('src/components/AppleHero.tsx', 'w') as f:
    f.write(content)
