
text = "Ð“Ð»Ð°Ð²Ð½Ð°Ñ"
try:
    # Attempt to reverse the mojibake
    # It looks like it was UTF-8 bytes interpreted as Windows-1252 (or latin1)
    # So we encode to Windows-1252 to get back the bytes, then decode as UTF-8
    decoded = text.encode('latin1').decode('utf-8')
    print(f"Original: {text}")
    print(f"Decoded: {decoded}")
except Exception as e:
    print(f"Error: {e}")

text2 = "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ ÑƒÑÐ»ÑƒÐ³Ð¸"
try:
    decoded2 = text2.encode('latin1').decode('utf-8')
    print(f"Original: {text2}")
    print(f"Decoded: {decoded2}")
except Exception as e:
    print(f"Error 2: {e}")
