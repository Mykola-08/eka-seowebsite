import re

file_path = 'src/contexts/LanguageContext.tsx'

# Define replacements for pricing and duration
# We need to find SEO descriptions and update "1 hora per 70€" to "1.5h per 60€" (or 75€ for massage)
# Note: The request says "All sessions 60€ per 1.5h" and "Massage 75€ for 1.5h".
# The SEO descriptions found are for Office, Athletes, Artists, Musicians, Students.
# These seem to be general sessions, so 60€.

replacements = [
    # Catalan
    (r"Sessions d\'1 hora per 70€", "Sessions d\'1.5h per 60€"),
    (r"Sessions d'1 hora per 70€", "Sessions d\'1.5h per 60€"), # Handle unescaped if any left

    # Spanish
    (r"Sesiones de 1 hora por 70€", "Sesiones de 1.5h por 60€"),

    # Discovery Budget (Updating ranges to reflect new pricing)
    # Basic: <60, Standard: 60-75 (covers both), Premium: >75
    # Currently: <60, 60-90, >90.
    # Let's align with new pricing: 60€ is the base.

    # CA
    (r"'discovery.budget.basic.title': 'Fins a 60€'", "'discovery.budget.basic.title': 'Fins a 60€'"), # Keep or adjust? 60 is standard.
    (r"'discovery.budget.standard.title': '60-90€'", "'discovery.budget.standard.title': '60€ - 75€'"),
    (r"'discovery.budget.premium.title': 'Més de 90€'", "'discovery.budget.premium.title': 'Més de 75€'"),

    # EN
    (r"'discovery.budget.basic.title': 'Essential \(up to 60€\)'", "'discovery.budget.basic.title': 'Essential (up to 60€)'"),
    (r"'discovery.budget.standard.title': 'Standard \(60-90€\)'", "'discovery.budget.standard.title': 'Standard (60€ - 75€)'"),
    (r"'discovery.budget.premium.title': 'Premium \(90€\+\)'", "'discovery.budget.premium.title': 'Premium (75€+)'"),

    # ES
    (r"'discovery.budget.basic.title': 'Esencial \(hasta 60€\)'", "'discovery.budget.basic.title': 'Esencial (hasta 60€)'"),
    (r"'discovery.budget.standard.title': 'Estándar \(60-90€\)'", "'discovery.budget.standard.title': 'Estándar (60€ - 75€)'"),
    (r"'discovery.budget.premium.title': 'Premium \(90€\+\)'", "'discovery.budget.premium.title': 'Premium (75€+)'"),

    # RU
    (r"'discovery.budget.basic.title': 'До 60€'", "'discovery.budget.basic.title': 'До 60€'"),
    (r"'discovery.budget.standard.title': '60-90€'", "'discovery.budget.standard.title': '60€ - 75€'"), # RU didn't have this key in grep but let's be safe
    (r"'discovery.budget.premium.title': 'Более 90€'", "'discovery.budget.premium.title': 'Более 75€'"),
]

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

for pattern, replacement in replacements:
    # Use re.sub for flexible matching if needed, but simple replace might miss regex patterns
    # The patterns above are regex ready (escaped parens)
    content = re.sub(pattern, replacement, content)

# Also update any "90 min" or "1 hora" references in SEO descriptions if they imply price
# The grep showed "Sessions d'1 hora per 70€".
# We replaced those.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Pricing updated.")
