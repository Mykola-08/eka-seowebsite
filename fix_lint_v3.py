import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

count = 0
new_lines = []
for i, line in enumerate(lines):
    # Only process lines with double quotes
    if '"' in line:
        # Check if we have unnecessary escape \' inside double quotes
        # Simple heuristic: if line has " and \', remove         # Be careful not to break legitimate escapes like \" or \

        # Regex to find \' inside double quotes
        # We find strings "..." and replace inside them

        def replacer(match):
            s = match.group(0)
            if "\'" in s:
                return s.replace("\'", "'")
            return s

        new_line = re.sub(r'"[^"]*"', replacer, line)

        if new_line != line:
            print(f"Fixed line {i+1}:")
            print(f"  Old: {line.strip()}")
            print(f"  New: {new_line.strip()}")
            count += 1
            line = new_line

    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Fixed {count} lines.")
