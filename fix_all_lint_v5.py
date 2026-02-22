import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix function for regex replacement
def fix_double_quoted(match):
    s = match.group(0)
    # Replaces \' with '
    return s.replace(r"\'", "'")

# Use a non-regex approach for replacement to avoid escaping issues in pattern
# Simple iteration
new_content = ""
i = 0
length = len(content)
in_double_quote = False
while i < length:
    char = content[i]
    if char == '"' and (i == 0 or content[i-1] != '\'):
        in_double_quote = not in_double_quote
        new_content += char
    elif in_double_quote and char == '\' and i + 1 < length and content[i+1] == "'":
        # Found \' inside double quotes, skip the backslash
        pass
    else:
        new_content += char
    i += 1

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed double quoted strings v5.")
