import re
import os

def extract_keys_from_code():
    keys = set()
    # Use word boundary \b to avoid matching import() or other functions ending in 't'
    pattern = re.compile(r"\bt\(['\"]([^'\"]+)['\"]\)")
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith(('.ts', '.tsx')):
                # Skip the translation files themselves to avoid false positives
                if 'Translations' in file or 'dictionaries.ts' in file or 'TranslationExtensions' in file:
                    continue
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    for m in matches:
                        if m.strip(): # ignore empty
                            keys.add(m)
    return keys

def extract_keys_from_files(file_paths):
    all_dict_keys = set()
    key_pattern = re.compile(r"['\"]([a-zA-Z0-9._-]+)['\"]\s*:")
    for path in file_paths:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = key_pattern.findall(content)
                for m in matches:
                    all_dict_keys.add(m)
        else:
            print(f"Warning: File not found {path}")
    return all_dict_keys

translation_files = [
    'src/lib/dictionaries.ts',
    'src/contexts/TranslationExtensions.tsx',
    'src/contexts/Revision360Translations.ts',
    'src/contexts/TechniqueTranslations.ts',
    'src/contexts/AgenyzTranslations.ts',
    'src/contexts/BentoTranslations.ts',
    'src/contexts/FunnelTranslations.ts',
    'src/contexts/FirstTimeTranslations.ts',
    'src/contexts/ConstelacionesTranslations.ts',
    'src/contexts/AssessmentTranslations.ts'
]

code_keys = extract_keys_from_code()
dict_keys = extract_keys_from_files(translation_files)

missing = code_keys - dict_keys
untranslated_tags = [k for k in code_keys if 'untranslated' in k.lower() or k.endswith('.tag')]

print("Missing keys:")
for k in sorted(missing):
    print(f"- {k}")

print("\nUntranslated/Tag-like keys:")
for k in sorted(untranslated_tags):
    print(f"- {k}")

# Check for TODO/FIXME in all translation files
print("\nTODO/FIXME in translation files:")
for path in translation_files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            for i, line in enumerate(f, 1):
                if 'TODO' in line or 'FIXME' in line:
                    print(f"{path}:{i}: {line.strip()}")
