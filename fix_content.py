import os
import re

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    
    # 1. info@ekabalance.com -> contact@ekabalance.com
    new_content = new_content.replace('info@ekabalance.com', 'contact@ekabalance.com')
    # Prevent duplicate
    new_content = new_content.replace('contactcontact@', 'contact@') 

    # 2. Address: Carrer Pelai, 12, Barcelona -> Carrer Pelai, 12, 08001 Barcelona
    new_content = new_content.replace("Carrer Pelai, 12, Barcelona',", "Carrer Pelai, 12, 08001 Barcelona',")
    new_content = new_content.replace("Carrer Pelai, 12, Barcelona", "Carrer Pelai, 12, 08001 Barcelona")
    new_content = new_content.replace("Carrer de pelai", "Carrer Pelai, 12, 08001 Barcelona")

    # Double check for 08001 08001
    new_content = new_content.replace("08001 08001", "08001")

    # 3. Phone number: 658 867 133 -> +34 658 867 133
    # Look for literal string without +34 prefix
    # Be careful not to replace inside tel:+34... or urls
    
    # First, let's just do straightforward regex for the visible text
    # e.g., 'WhatsApp 658 867 133' -> 'WhatsApp +34 658 867 133'
    # 'Telefon 658 867 133' -> 'Telefon +34 658 867 133'
    new_content = new_content.replace("WhatsApp 658 867 133", "WhatsApp +34 658 867 133")
    new_content = new_content.replace("Telegram al 658 867 133", "Telegram al +34 658 867 133")
    new_content = new_content.replace("Telegram at 658 867 133", "Telegram at +34 658 867 133")
    new_content = new_content.replace("Telegram по номеру 658 867 133", "Telegram по номеру +34 658 867 133")
    new_content = new_content.replace("Telefon 658 867 133", "Telefon +34 658 867 133")
    new_content = new_content.replace("content: \"658 867 133\"", "content: \"+34 658 867 133\"")

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {path}")

def main():
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx') or file.endswith('.js') or file.endswith('.jsx'):
                fix_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
