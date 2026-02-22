import re

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Find all double quoted strings
    # This regex handles simple double quoted strings, assuming no escaped double quotes for simplicity
    # or minimal ones.
    def replacer(match):
        s = match.group(0)
        return s.replace("\'", "'")

    # Replace \' with ' only inside double quoted strings
    # Regex: " [^"]* "
    # We use a lambda to process the match
    line = re.sub(r'"[^"]*"', replacer, line)
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Fixed lint errors.")
