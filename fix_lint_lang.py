import sys

with open('src/contexts/LanguageContext.tsx', 'r') as f:
    content = f.read()

content = content.replace("identify what's behind your", "identify what\\'s behind your")
content = content.replace("remove what's in the way.", "remove what\\'s in the way.")

with open('src/contexts/LanguageContext.tsx', 'w') as f:
    f.write(content)
