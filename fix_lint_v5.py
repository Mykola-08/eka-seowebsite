import re

path = 'src/contexts/LanguageContext.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

count = 0
new_lines = []
for i, line in enumerate(lines):
    if '"' in line:
        def replacer(match):
            s = match.group(0)
            if "\'" in s:
                # Use raw string for replacement target: backslash then quote
                return s.replace(r"\'", "'")
            return s

        new_line = re.sub(r'"[^"]*"', replacer, line)

        if new_line != line:
            count += 1
            line = new_line

    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Fixed {count} lines.")
