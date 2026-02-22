import re

services = ['officeWorkers', 'athletes', 'artists', 'musicians', 'students', 'parents']
langs = ['ca', 'en', 'es', 'ru']

# Read file content
with open('src/contexts/LanguageContext.tsx', 'r') as f:
    content = f.read()

# Helper to find keys
def check_key(lang, key):
    # Regex to find key within language block (simplified check for now)
    # Since checking context is hard with simple regex, just check if the key exists at all in the file.
    # A better approach for a single file context is just check global existence for now.
    if f"'{key}'" not in content and f'"{key}"' not in content:
        return False
    return True

print("Checking for missing keys...")

missing_count = 0

for service in services:
    print(f"\n--- Service: {service} ---")

    # Check Method Steps (1-3)
    for i in range(1, 4):
        key_base = f"personalized.{service}.method.step{i}"
        if not check_key('all', f"{key_base}.title"):
            print(f"MISSING: {key_base}.title")
            missing_count += 1
        if not check_key('all', f"{key_base}.desc"):
            print(f"MISSING: {key_base}.desc")
            missing_count += 1

    # Check Benefits (1-4)
    # The current template expects a list but the file has individual keys.
    # I will check for individual keys to ensure content exists to be used.
    for i in range(1, 5):
        key = f"personalized.{service}.benefits.benefit{i}"
        if not check_key('all', key):
            # Check if maybe it's under 'benefit' without 's' or under 'personalizedServices'
            alt_key = f"personalizedServices.{service}.benefit{i}"
            if not check_key('all', alt_key):
                 print(f"MISSING: {key} (and {alt_key})")
                 missing_count += 1

print(f"\nTotal missing keys found: {missing_count}")
