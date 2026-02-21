import os
import re

def fix_file(filepath, replacements):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

# Fix AdultsContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\AdultsContent.tsx', [
    ('import { ArrowRight, HeartPulse, Salad } from \'lucide-react\';', 'import {  } from \'lucide-react\';'),
    ('import { HeartPulse, Salad } from \'lucide-react\';', ''),
    ('import { ArrowRight } from \'lucide-react\';', ''),
    ('import Image from \'next/image\';', '')
])

# Fix ArtistsContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ArtistsContent.tsx', [
    ('const { t } = useLanguage();', '')
])

# Fix BookingContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\BookingContent.tsx', [
    ('import { ArrowRight, Users, Clock, ShieldCheck } from \'lucide-react\';', 'import { Users, Clock, ShieldCheck } from \'lucide-react\';')
])

# Fix CasosContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\CasosContent.tsx', [
    ('import CTASection from \'@/components/CTASection\';', '')
])

# Fix ChildrenContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ChildrenContent.tsx', [
    ('import { ArrowRight, Brain, HeartPulse } from \'lucide-react\';', 'import { } from \'lucide-react\';')
])

# Fix ContactContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ContactContent.tsx', [
    ('import { Button } from \'@/components/ui/button\';', '')
])

# Fix FamiliesContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\FamiliesContent.tsx', [
    ('import { ArrowRight, HeartPulse, Salad } from \'lucide-react\';', 'import { } from \'lucide-react\';')
])

# Fix ForParentsContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ForParentsContent.tsx', [
    ('import { useLanguage } from \'@/contexts/LanguageContext\';', '')
])

# Fix ForStudentsContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ForStudentsContent.tsx', [
    ('import { useLanguage } from \'@/contexts/LanguageContext\';', '')
])

# Fix MainLayout.tsx
fix_file(r'C:\eka-seowebsite\src\components\MainLayout.tsx', [
    ('item.dropdownItems?.map((dropdownItem, index) =>', 'item.dropdownItems?.map((dropdownItem) =>')
])

# Fix ServicesContent.tsx
fix_file(r'C:\eka-seowebsite\src\components\ServicesContent.tsx', [
    ('import { Star, Shield, Clock } from \'lucide-react\';', 'import { Shield, Clock } from \'lucide-react\';')
])

# Fix LanguageContext.tsx
fix_file(r'C:\eka-seowebsite\src\contexts\LanguageContext.tsx', [
    ('des d\\\'un cos', "des d'un cos"),
    ('d\\\'oficina', "d'oficina"),
    ('l\\\'estrès', "l'estrès"),
    ('mal d\\\'esquena', "mal d'esquena")
])

# Cleanup empty imports
def remove_empty_imports():
    for root, _, files in os.walk(r'C:\eka-seowebsite\src\components'):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                new_content = re.sub(r'import\s*{\s*}\s*from\s*[\'"].*?[\'"];?\n?', '', content)
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)

remove_empty_imports()

print("Done")
