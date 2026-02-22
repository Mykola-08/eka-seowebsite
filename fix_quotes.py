import sys

path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("Prevenció del burnout digital i l'esgotament", "Prevenció del burnout digital i l\'esgotament"),
    ("Optimització de la postura amb l'instrument", "Optimització de la postura amb l\'instrument"),
    ("Control de l'ansietat abans d'actuacions", "Control de l\'ansietat abans d\'actuacions"),
    ("Reducció de l'estrès i l'ansietat acadèmica", "Reducció de l\'estrès i l\'ansietat acadèmica"),
    ("Alleujament de la tensió cervical per l'estudi", "Alleujament de la tensió cervical per l\'estudi")
]

for old, new in replacements:
    content = content.replace(old, new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed quotes.")
