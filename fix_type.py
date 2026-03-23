import sys

with open('src/components/AppleHero.tsx', 'r') as f:
    content = f.read()

content = content.replace('variant="primary"', 'variant="default"')

with open('src/components/AppleHero.tsx', 'w') as f:
    f.write(content)
