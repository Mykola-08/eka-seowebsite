import re

path = 'src/contexts/LanguageContext.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '"' in line:
        def replacer(match):
            s = match.group(0)
            # Remove any backslash before single quote inside double quoted string
            # Replaces \' with '
            return s.replace(r"\'", "'")

        line = re.sub(r'"[^"]*"', replacer, line)
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Fixed lint errors.")
