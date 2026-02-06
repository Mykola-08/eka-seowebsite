
import re

file_path = r"c:\Users\Mykola\eka-seowebsite\src\contexts\LanguageContext.tsx"

# Dictionary of spelling fixes for CATALAN
fixes_ca = {
    r"\bsomatic\b": "somàtic",
    r"\bestres\b": "estrès",
    r"\bsessio\b": "sessió",
    r"\bSessio\b": "Sessió",
    r"\bnutricio\b": "nutrició",
    r"\bNutricio\b": "Nutrició",
    r"\bregulacio\b": "regulació",
    r"\bfrequents\b": "freqüents",
    r"\bmetodes\b": "mètodes",
    r"\btecnica\b": "tècnica",
    r"\bTecknica\b": "Tècnica", # Guessing typos
    r"\bfisic\b": "físic",
    r"\bintegracio\b": "integració",
    r"\bopcio\b": "opció",
    r"\bvaloracio\b": "valoració",
    r"\bconnexio\b": "connexió",
    r"\bacompanyament\b": "acompanyament", # Seems ok
    r"\bl estres\b": "l'estrès",
    r"\bL estres\b": "L'estrès",
}

# Dictionary of spelling fixes for SPANISH
fixes_es = {
    r"\bsomatic\b": "somático",
    r"\bsomatico\b": "somático",
    r"\bestres\b": "estrés",
    r"\bacompanamiento\b": "acompañamiento",
    r"\bAcompanamiento\b": "Acompañamiento",
    r"\bacompanamos\b": "acompañamos",
    r"\bnutricion\b": "nutrición",
    r"\bsesion\b": "sesión",
    r"\bSesion\b": "Sesión",
    r"\bregulacion\b": "regulación",
    r"\bmetodo\b": "método",
    r"\bMetodo\b": "Método",
    r"\btecnica\b": "técnica",
    r"\bTecknica\b": "Técnica",
    r"\bfisico\b": "físico",
    r"\bintegracion\b": "integración",
    r"\bopcion\b": "opción",
    r"\bvaloracion\b": "valoración",
    r"\bconexion\b": "conexión",
    r"\bmas\b": "más", # Be careful with this one
    r"\besta\b": "está", # ambiguous with demonstrative
}

def fix_line_cp1252(line):
    # Heuristic: if line has enough "suspicious" chars, try to fix
    try:
        # Try cp1252 first (handles smart quotes etc)
        return line.encode('cp1252').decode('utf-8')
    except UnicodeEncodeError:
        try:
            # Fallback to latin1 (iso-8859-1) which maps 00-FF 1:1
            return line.encode('latin1').decode('utf-8')
        except:
            return line
    except UnicodeDecodeError:
        return line

def process_file():
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    current_lang = None
    
    # Regex to detect lang sections
    lang_start = re.compile(r"^\s*(ca|en|es|ru):\s*\{")
    
    for line in lines:
        match = lang_start.match(line)
        if match:
            current_lang = match.group(1)
            print(f"Entering block: {current_lang}")
        
        processed_line = line
        
        if current_lang == 'ru':
            if 'Ð' in line or 'Ñ' in line:
                fixed = fix_line_cp1252(line)
                if fixed != line:
                    if any('\u0400' <= c <= '\u04FF' for c in fixed):
                        print(f"Fixed RU line: {line.strip()} -> {fixed.strip()}")
                        processed_line = fixed
                    else:
                         print(f"RU fix rejected (no cyrillic): {fixed.strip()}")
                else:
                    pass # print(f"RU fix failed for: {line.strip()}")

        elif current_lang == 'ca':
            for pattern, replacement in fixes_ca.items():
                new_l = re.sub(pattern, replacement, processed_line)
                if new_l != processed_line:
                    print(f"Fixed CA: {pattern} -> {replacement}")
                processed_line = new_l

                
        elif current_lang == 'es':
            for pattern, replacement in fixes_es.items():
                # Skip 'mas' and 'esta' to be safe unless we are sure, but the list above is mostly safe.
                if pattern in [r"\bmas\b", r"\besta\b"]: continue
                processed_line = re.sub(pattern, replacement, processed_line)

        new_lines.append(processed_line)

    if new_lines != lines:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print("File updated with language-specific fixes.")
    else:
        print("No changes made.")

process_file()
