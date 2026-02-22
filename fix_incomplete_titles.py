import re

path = 'src/contexts/LanguageContext.tsx'

replacements = [
    # Russian fix
    ("'casos.section.title': 'Проблемы, которые мы'", "'casos.section.title': 'Проблемы, которые мы решаем'"),
    ("'casos.section.titleHighlight': 'решаем каждый день'", "'casos.section.titleHighlight': 'каждый день'"), # Adjust highlight to flow naturally or keep as is?
    # "Проблемы, которые мы решаем каждый день" vs "Проблемы, которые мы" + "решаем каждый день"
    # The original was likely split. The request says "title is uncomplete".
    # If the UI joins them, it might be fine, but "Проблемы, которые мы" on its own looks cut off.
    # Let's make the first part complete if possible or clearer.
    # User specifically complained about "Проблемы, которые мы" being incomplete.

    # English check
    ("'casos.section.title': 'Problems we'", "'casos.section.title': 'Problems we solve'"),
    ("'casos.section.titleHighlight': 'solve every day'", "'casos.section.titleHighlight': 'every day'"),
]

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

for old, new in replacements:
    content = content.replace(old, new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed titles.")
