path = 'src/contexts/LanguageContext.tsx'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 57: # 0-indexed
            print(f"Line 58: {repr(line)}")
            break
