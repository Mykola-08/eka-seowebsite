import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences of \' with '
# This might break strings that are single quoted and contain single quotes
# But the lint errors are about "Unnecessary escape character", which usually means \' inside "..." or
# However, if we have 'It\'s', that IS necessary.
# The errors seem to be widespread.

# Strategy:
# 1. Use regex to find double quoted strings "..." and remove backslashes before single quotes inside them.
# 2. Use regex to find single quoted strings '...' and ensure internal single quotes ARE escaped (if not already).
#    Wait, the error is "no-useless-escape". This means escaping a character that doesn't need escaping.
#    e.g. "It\'s" -> "It's" is valid. 'It\'s' -> 'It\'s' is valid (escape needed). 'It"s' (no escape needed).

def fix_double_quoted(match):
    s = match.group(0)
    # Remove backslash before single quote
    return s.replace(r"\'", "'")

# Replace inside double quotes
content = re.sub(r'"([^"\]*(\.[^"\]*)*)"', fix_double_quoted, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed double quoted strings.")
