
import re

file_path = r"c:\Users\Mykola\eka-seowebsite\src\contexts\LanguageContext.tsx"

replacements = {
    "Ã ": "à",
    "Ã¡": "á",
    "Ã¢": "â",
    "Ã£": "ã",
    "Ã¤": "ä",
    "Ã¥": "å",
    "Ã¦": "æ",
    "Ã§": "ç",
    "Ã¨": "è",
    "Ã©": "é",
    "Ãª": "ê",
    "Ã«": "ë",
    "Ã¬": "ì",
    "Ã­": "í",
    "Ã®": "î",
    "Ã¯": "ï",
    "Ã°": "ð",
    "Ã±": "ñ",
    "Ã²": "ò",
    "Ã³": "ó",
    "Ã´": "ô",
    "Ãµ": "õ",
    "Ã¶": "ö",
    "Ã¸": "ø",
    "Ã¹": "ù",
    "Ãº": "ú",
    "Ã»": "û",
    "Ã¼": "ü",
    "Ã½": "ý",
    "Ã¾": "þ",
    "Ã¿": "ÿ",
    "Ã€": "À",
    "Ãƒ": "Ã",
    "Ã‚": "Â",
    "Ã…": "Å",
    "Ã†": "Æ",
    "Ã‡": "Ç",
    "Ãˆ": "È",
    "Ã‰": "É",
    "ÃŠ": "Ê",
    "Ã‹": "Ë",
    "ÃŒ": "Ì",
    "ÃŽ": "Î",
    "Ã‘": "Ñ",
    "Ã’": "Ò",
    "Ã“": "Ó",
    "Ã”": "Ô",
    "Ã•": "Õ",
    "Ã–": "Ö",
    "Ã—": "×",
    "Ã˜": "Ø",
    "Ã™": "Ù",
    "Ãš": "Ú",
    "Ã›": "Û",
    "Ãœ": "Ü",
    "Ãž": "Þ",
    "ÃŸ": "ß",
    # Common punctuation weirdness
    "â€™": "’",
    "â€œ": "“",
    "â€": "”", # Note: this might match â€• or similar, check length
    "â€“": "–",
    "â€”": "—",
    "â€¦": "…",
    "Â ": " ", # Non-breaking space often shows up as Â + space in some encodings or just Â
    "Â": "", # Sometimes Â is just an artifact before a space or punctuation
}

def fix_encoding(text):
    # Sort keys by length so we match longer sequences first (e.g. â€™ before â)
    keys = sorted(replacements.keys(), key=len, reverse=True)
    
    new_text = text
    for k in keys:
        new_text = new_text.replace(k, replacements[k])
    
    return new_text

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = fix_encoding(content)
    
    if content != new_content:
        print("Changes detected.")
        # Print a sample of changes
        lines = content.split('\n')
        new_lines = new_content.split('\n')
        diff_count = 0
        for i in range(len(lines)):
            if lines[i] != new_lines[i]:
                print(f"Line {i+1} original: {lines[i].strip()}")
                print(f"Line {i+1} fixed   : {new_lines[i].strip()}")
                diff_count += 1
                if diff_count > 10:
                    break
        
        # Save the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"File saved. Total lines changed: {sum(1 for a, b in zip(lines, new_lines) if a != b)}")
        
    else:
        print("No encoding issues found with the current map.")

except Exception as e:
    print(f"Error: {e}")
