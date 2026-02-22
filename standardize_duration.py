import re

path = 'src/contexts/LanguageContext.tsx'

# Note: The grep above showed I missed some "Sessions d'1 hora per 70€" in the previous step because of single quotes in grep output vs file content.
# Also need to standardize "1 hora" to "1.5h" where appropriate as per pricing update "All sessions... 1.5h".

replacements = [
    # Pricing corrections missed or reverting if needed
    (r"Sessions d\'1 hora per 70€", "Sessions d\'1.5h per 60€"),
    (r"Sessions d'1 hora per 70€", "Sessions d\'1.5h per 60€"),

    # Discovery/Form
    (r"'discovery.time.short.title': 'Sessió express \(60 min\)'", "'discovery.time.short.title': 'Sessió standard (1.5h)'"),
    (r"'discovery.time.short.title': 'Express session \(60 min\)'", "'discovery.time.short.title': 'Standard session (1.5h)'"),
    (r"'discovery.time.short.title': 'Sesión exprés \(60 min\)'", "'discovery.time.short.title': 'Sesión estándar (1.5h)'"),
    (r"'discovery.time.short.title': 'Экспресс сессия \(60 мин\)'", "'discovery.time.short.title': 'Стандартная сессия (1.5ч)'"),

    # Standardizing durations in plan descriptions
    (r"'pricing.plan.basic.desc': 'Una sessió completa de 60 minuts'", "'pricing.plan.basic.desc': 'Una sessió completa de 1.5h'"),
    (r"'pricing.plan.basic.desc': 'A complete 60 minute session'", "'pricing.plan.basic.desc': 'A complete 1.5h session'"),
    (r"'pricing.plan.basic.desc': 'Una sesión completa de 60 minutos'", "'pricing.plan.basic.desc': 'Una sesión completa de 1.5h'"),

    # Update "60 min" to "1.5h" generally for session lengths if they refer to the standard session
    (r"60 minuts", "1.5h"),
    (r"60 minutes", "1.5h"),
    (r"60 minutos", "1.5h"),
    (r"60 мин", "1.5ч"),

    # Fix the "1 hora" remaining
    (r"Sessions d\'1 hora", "Sessions d\'1.5h"),
    (r"Sesiones de 1 hora", "Sesiones de 1.5h"),
    (r"Sessions of 1 hour", "Sessions of 1.5h"),
]

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Durations standardized.")
