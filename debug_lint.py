import re

line = '\'hero.subtitle\': "Acompanyament somàtic i de benestar per millorar la mobilitat, reduir l\\'estrès i recuperar equilibri.",'

def replacer(match):
    s = match.group(0)
    print(f"Matched: {s}")
    new_s = s.replace("\'", "'")
    print(f"Replaced: {new_s}")
    return new_s

new_line = re.sub(r'"[^"]*"', replacer, line)
print(f"Result: {new_line}")
