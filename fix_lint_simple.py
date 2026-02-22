path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '"' in line:
        # Check if quotes are balanced (even number)
        if line.count('"') % 2 == 0:
            parts = line.split('"')
            for i in range(len(parts)):
                if i % 2 == 1: # Inside double quotes
                    parts[i] = parts[i].replace("\'", "'")
            line = '"'.join(parts)
    new_lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Fixed lint via split.")
