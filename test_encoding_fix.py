
import re
import sys

# Configure stdout to use utf-8 to avoid printing errors on Windows console
sys.stdout.reconfigure(encoding='utf-8')

def sloppy_encode(s):
    b = bytearray()
    for char in s:
        # Common CP1252 mappings for 0x80-0x9F range that might appear as Unicode chars
        if char == '\u20AC': b.append(0x80)
        elif char == '\u201A': b.append(0x82)
        elif char == '\u0192': b.append(0x83)
        elif char == '\u201E': b.append(0x84)
        elif char == '\u2026': b.append(0x85)
        elif char == '\u2020': b.append(0x86)
        elif char == '\u2021': b.append(0x87)
        elif char == '\u02C6': b.append(0x88)
        elif char == '\u2030': b.append(0x89)
        elif char == '\u0160': b.append(0x8A)
        elif char == '\u2039': b.append(0x8B)
        elif char == '\u0152': b.append(0x8C)
        elif char == '\u017D': b.append(0x8E)
        elif char == '\u2018': b.append(0x91)
        elif char == '\u2019': b.append(0x92)
        elif char == '\u201C': b.append(0x93)
        elif char == '\u201D': b.append(0x94)
        elif char == '\u2022': b.append(0x95)
        elif char == '\u2013': b.append(0x96)
        elif char == '\u2014': b.append(0x97)
        elif char == '\u02DC': b.append(0x98)
        elif char == '\u2122': b.append(0x99)
        elif char == '\u0161': b.append(0x9A)
        elif char == '\u203A': b.append(0x9B)
        elif char == '\u0153': b.append(0x9C)
        elif char == '\u017E': b.append(0x9E)
        elif char == '\u0178': b.append(0x9F)
        
        # If it's a latin1 char (including control chars U+0080..U+009F if they remained as such)
        elif ord(char) < 256:
            b.append(ord(char))
        else:
            # Cannot recover bytes, this might not be mojibake or is too damaged
            raise ValueError(f"Cannot encode char {char!r} U+{ord(char):04X}")
    return b

text = "Ð“Ð»Ð°Ð²Ð½Ð°Ñ"
try:
    decoded = sloppy_encode(text).decode('utf-8')
    print(f"Original 1: {text}")
    print(f"Decoded 1: {decoded}")
except Exception as e:
    print(f"Error 1: {e}")

text2 = "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ ÑƒÑÐ»ÑƒÐ³Ð¸" 
try:
    decoded2 = sloppy_encode(text2).decode('utf-8')
    print(f"Original 2: {text2}")
    print(f"Decoded 2: {decoded2}")
except Exception as e:
    print(f"Error 2: {e}")

text3 = "Ð—Ð°Ð±Ñ€Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ"
try: 
    decoded3 = sloppy_encode(text3).decode('utf-8')
    print(f"Original 3: {text3}")
    print(f"Decoded 3: {decoded3}")
except Exception as e:
    print(f"Error 3: {e}")
