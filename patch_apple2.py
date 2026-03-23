import re

with open('src/components/AppleHero.tsx', 'r') as f:
    content = f.read()

# Fix the paddings
content = content.replace(
    'pt-20 sm:pt-28 md:pt-24 pb-8 sm:pb-10',
    'pt-32 pb-16'
)

# Text and button paddings
content = content.replace(
    'mb-6 sm:mb-8 md:mb-6',
    'mb-12 sm:mb-16'
)

# Replace 'default' with 'primary' for Button variant
content = content.replace(
    'variant="default"',
    'variant="primary"'
)

with open('src/components/AppleHero.tsx', 'w') as f:
    f.write(content)
