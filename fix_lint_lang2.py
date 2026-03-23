import sys

with open('src/contexts/LanguageContext.tsx', 'r') as f:
    content = f.read()

# Fix the quotes to use double quotes so that the single quote inside doesn't need to be escaped
content = content.replace(
    "'services.kinesiology.description': 'Using muscle response testing, we identify what\\'s behind your pain, stress, or imbalance — and correct it gently at the source for lasting change.',",
    '"services.kinesiology.description": "Using muscle response testing, we identify what\'s behind your pain, stress, or imbalance — and correct it gently at the source for lasting change.",'
)

content = content.replace(
    "'elena.quote': \"The body knows how to heal. My job is to remove what\\'s in the way.\",",
    '"elena.quote": "The body knows how to heal. My job is to remove what\'s in the way.",'
)

with open('src/contexts/LanguageContext.tsx', 'w') as f:
    f.write(content)
