path = 'src/contexts/LanguageContext.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Non-regex simple state machine replacement
new_content = []
i = 0
length = len(content)
in_double_quote = False

while i < length:
    char = content[i]

    # Check if we are starting or ending a double quoted string
    # Need to make sure quote is not escaped
    is_quote = (char == '"')
    is_escaped = (i > 0 and content[i-1] == '\\')

    if is_quote and not is_escaped:
        in_double_quote = not in_double_quote
        new_content.append(char)
        i += 1
        continue

    if in_double_quote:
        # If inside double quotes, check for \'
        if char == '\\' and i + 1 < length and content[i+1] == "'":
            # Found backslash followed by single quote. Skip the backslash.
            # Effectively removing \ from \'
            i += 1 # skip backslash
            continue # next loop will append the single quote

    new_content.append(char)
    i += 1

with open(path, 'w', encoding='utf-8') as f:
    f.write("".join(new_content))

print("Fixed double quoted strings v7.")
