import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Improved regex for finding double quoted strings
# Matches "..." where ... can contain escaped characters like \" or \ or \'
def fix_double_quoted(match):
    s = match.group(0)
    # Remove backslash before single quote
    # Replaces \' with ' inside the string
    return s.replace(r"\'", "'")

# This regex matches a double quote, followed by any number of (non-quote OR escaped char), followed by a double quote
content = re.sub(r'"([^"\]*(\.[^"\]*)*)"', fix_double_quoted, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed double quoted strings v3.")
