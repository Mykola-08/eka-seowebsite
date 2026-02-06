
import os

file_path = 'src/contexts/LanguageContext.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Email Variations
new_content = content.replace('contact@ekabalance.Com', 'contact@ekabalance.com')
new_content = new_content.replace('Info@ekabalance.Com', 'info@ekabalance.com')
new_content = new_content.replace('Contact@ekabalance.com', 'contact@ekabalance.com')

# Fix Address Variations (Just to be safe if any slipped through)
new_content = new_content.replace('Carrer pelai', 'Carrer Pelai')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {file_path} with final fixes")
