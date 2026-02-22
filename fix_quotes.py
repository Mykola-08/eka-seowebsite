import re

filepath = r'C:\eka-seowebsite\src\contexts\LanguageContext.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# This regex finds all translation keys that look like:
# 'some.key': 'Some text with l'apostrophe'
# and replaces the outer single quotes around the text with double quotes.
# It matches lines exactly like:  'key': 'text'
# Breakdown:
# (^s*)                -> group 1: leading whitespace
# ('?[a-zA-Z0-9_.-]+'?) -> group 2: the key (e.g. 'services.title' or just status)
# :\s*                 -> colon and spaces
# '(.*?)'              -> group 3: the value inside single quotes
# (,?)$                -> group 4: optional comma at the end

def repl(match):
    whitespace = match.group(1)
    key = match.group(2)
    val = match.group(3)
    comma = match.group(4)
    
    # If there is a single quote inside the string, we MUST wrap it in double quotes instead.
    if "'" in val:
        # Before we wrap in double quotes, we need to escape any existing double quotes inside.
        val = val.replace('"', '\\"')
        return f'{whitespace}{key}: "{val}"{comma}'
    return match.group(0) # No change needed

new_text = re.sub(r'(^\s*)(\'?[a-zA-Z0-9_\.-]+\'?):\s*\'(.*?)\'(,?)$', repl, text, flags=re.MULTILINE)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Quotes fixed successfully.")
