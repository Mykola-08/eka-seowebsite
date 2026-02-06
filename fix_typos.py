
import os

file_path = 'src/contexts/LanguageContext.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Address
new_content = content.replace('Carrer pelai', 'Carrer Pelai')

# Fix Email
new_content = new_content.replace('Contact@ekabalance.Com', 'contact@ekabalance.com')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {file_path}")
