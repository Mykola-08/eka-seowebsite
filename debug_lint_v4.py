import re

path = 'src/contexts/LanguageContext.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

line = lines[57] # Line 58

def replacer(match):
    s = match.group(0)
    print(f"Matched repr: {repr(s)}")
    if "\'" in s:
        print("Found backslash-quote, replacing...")
        return s.replace("\'", "FOO")
    return s

new_line = re.sub(r'"[^"]*"', replacer, line)
print(f"Result: {new_line}")
