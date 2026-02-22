import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix function for regex replacement
def fix_double_quoted(match):
    s = match.group(0)
    # Replaces \' with '
    return s.replace(r"\'", "'")

# Correct regex for double quoted strings allowing for escaped characters
# " ( [^"\] | \. )* "
content = re.sub(r'"([^"\]|\.)*"', fix_double_quoted, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed double quoted strings v4.")
