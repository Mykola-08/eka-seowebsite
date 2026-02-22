import re

path = 'src/contexts/LanguageContext.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

line = lines[57] # Line 58
print(f"Checking line 58: {repr(line)}")

def replacer(match):
    s = match.group(0)
    print(f"Matched string: {s}")
    if "\'" in s:
        print("Found \' inside string, replacing...")
        return s.replace("\'", "'")
    return s

new_line = re.sub(r'"[^"]*"', replacer, line)
print(f"Result: {new_line}")
