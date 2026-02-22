import sys

path = 'src/contexts/LanguageContext.tsx'
lines = []

with open(path, 'r', encoding='utf-8') as f:
    for line in f:
        original = line

        # 1. Office Workers
        if "l'esgotament" in line and "\'esgotament" not in line:
            line = line.replace("l'esgotament", "l\'esgotament")

        # 2. Musicians 1
        if "l'instrument" in line and "\'instrument" not in line:
            line = line.replace("l'instrument", "l\'instrument")

        # 3. Musicians 3 (two quotes)
        if "l'ansietat" in line and "\'ansietat" not in line:
            line = line.replace("l'ansietat", "l\'ansietat")
        if "d'actuacions" in line and "\'actuacions" not in line:
            line = line.replace("d'actuacions", "d\'actuacions")

        # 4. Students 1 (two quotes)
        if "l'estrès" in line and "\'estrès" not in line:
            line = line.replace("l'estrès", "l\'estrès")
        # l'ansietat is handled above if the string is same, but let's be safe
        if "l'ansietat" in line and "\'ansietat" not in line:
             line = line.replace("l'ansietat", "l\'ansietat")

        # 5. Students 3
        if "l'estudi" in line and "\'estudi" not in line:
            line = line.replace("l'estudi", "l\'estudi")

        if line != original:
            print(f"Fixed: {original.strip()} -> {line.strip()}")

        lines.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Done.")
