import re

file_path = 'src/contexts/LanguageContext.tsx'

# Dictionary of new translations for 'services.*' sections
# Focusing on clearer, more professional, and less generic language.
new_translations = {
    'ca': {
        'services.title': 'Sessions Terapèutiques Personalitzades',
        'services.subtitle': "Enfocament somàtic i integratiu per mobilitat, regulació de l\'estrès i equilibri corporal sostenible.",
        'services.exploreOurServices': 'Explora la nostra gamma de serveis integrals',
        'services.descriptionPrefix': 'Des de massatges profunds fins a teràpies especialitzades de kinesiologia.',

        'services.massage.title': 'Massatge Terapèutic i Somàtic',
        'services.massage.subtitle': 'Alleujament profund i reeducació',
        'services.massage.description': 'Més que un massatge: un procés de restauració estructural que combina tècniques miofascials amb consciència corporal.',

        'services.kinesiology.title': 'Kinesiologia Holística',
        'services.kinesiology.subtitle': 'Diàleg amb el cos',
        'services.kinesiology.description': 'Utilitzem el test muscular per identificar i corregir desequilibris estructurals, químics i emocionals a l\'arrel.',

        'services.nutrition.title': 'Nutrició Conscient',
        'services.nutrition.subtitle': 'Alimentació per a la vitalitat',
        'services.nutrition.description': 'Estratègies nutricionals personalitzades per potenciar la teva energia, digestió i claredat mental.',

        'services.feldenkrais.title': 'Mètode Feldenkrais',
        'services.feldenkrais.subtitle': 'Consciència a través del moviment',
        'services.feldenkrais.description': 'Aprèn a moure\'t amb eficiència i sense dolor mitjançant la reeducació del sistema nerviós.',

        'services.osteobalance.title': 'Osteobalance',
        'services.osteobalance.subtitle': 'Equilibri estructural suau',
        'services.osteobalance.description': 'Tècnica manual precisa per corregir desalineacions òssies sense manipulacions brusques.',
    },
    'en': {
        'services.title': 'Personalized Therapeutic Sessions',
        'services.subtitle': 'Integrative somatic approach for mobility, stress regulation, and sustainable body balance.',
        'services.exploreOurServices': 'Explore our comprehensive range of services',
        'services.descriptionPrefix': 'From deep tissue work to specialized kinesiology therapies.',

        'services.massage.title': 'Therapeutic & Somatic Massage',
        'services.massage.subtitle': 'Deep relief and re-education',
        'services.massage.description': 'More than a massage: a structural restoration process combining myofascial techniques with body awareness.',

        'services.kinesiology.title': 'Holistic Kinesiology',
        'services.kinesiology.subtitle': 'Dialogue with the body',
        'services.kinesiology.description': 'We use muscle testing to identify and correct structural, chemical, and emotional imbalances at their root.',

        'services.nutrition.title': 'Conscious Nutrition',
        'services.nutrition.subtitle': 'Fueling for vitality',
        'services.nutrition.description': 'Personalized nutritional strategies to boost your energy, digestion, and mental clarity.',

        'services.feldenkrais.title': 'Feldenkrais Method',
        'services.feldenkrais.subtitle': 'Awareness through movement',
        'services.feldenkrais.description': 'Learn to move efficiently and without pain through nervous system re-education.',

        'services.osteobalance.title': 'Osteobalance',
        'services.osteobalance.subtitle': 'Gentle structural balance',
        'services.osteobalance.description': 'Precise manual technique to correct bone misalignments without forceful manipulation.',
    },
    'es': {
        'services.title': 'Sesiones Terapéuticas Personalizadas',
        'services.subtitle': 'Enfoque somático e integrativo para movilidad, regulación del estrés y equilibrio corporal sostenible.',
        'services.exploreOurServices': 'Explora nuestra gama de servicios integrales',
        'services.descriptionPrefix': 'Desde masajes profundos hasta terapias especializadas de kinesiología.',

        'services.massage.title': 'Masaje Terapéutico y Somático',
        'services.massage.subtitle': 'Alivio profundo y reeducación',
        'services.massage.description': 'Más que un masaje: un proceso de restauración estructural que combina técnicas miofasciales con conciencia corporal.',

        'services.kinesiology.title': 'Kinesiología Holística',
        'services.kinesiology.subtitle': 'Diálogo con el cuerpo',
        'services.kinesiology.description': 'Utilizamos el test muscular para identificar y corregir desequilibrios estructurales, químicos y emocionales en su raíz.',

        'services.nutrition.title': 'Nutrición Consciente',
        'services.nutrition.subtitle': 'Alimentación para la vitalidad',
        'services.nutrition.description': 'Estrategias nutricionales personalizadas para potenciar tu energía, digestión y claridad mental.',

        'services.feldenkrais.title': 'Método Feldenkrais',
        'services.feldenkrais.subtitle': 'Conciencia a través del movimiento',
        'services.feldenkrais.description': 'Aprende a moverte con eficiencia y sin dolor mediante la reeducación del sistema nervioso.',

        'services.osteobalance.title': 'Osteobalance',
        'services.osteobalance.subtitle': 'Equilibrio estructural suave',
        'services.osteobalance.description': 'Técnica manual precisa para corregir desalineaciones óseas sin manipulaciones bruscas.',
    },
    'ru': {
        'services.title': 'Персонализированные Терапевтические Сессии',
        'services.subtitle': 'Интегративный соматический подход для подвижности, регуляции стресса и устойчивого баланса тела.',
        'services.exploreOurServices': 'Изучите наш комплексный спектр услуг',
        'services.descriptionPrefix': 'От глубокого массажа до специализированной кинезиологии.',

        'services.massage.title': 'Терапевтический и Соматический Массаж',
        'services.massage.subtitle': 'Глубокое облегчение и переобучение',
        'services.massage.description': 'Больше, чем массаж: процесс структурного восстановления, сочетающий миофасциальные техники с осознанием тела.',

        'services.kinesiology.title': 'Холистическая Кинезиология',
        'services.kinesiology.subtitle': 'Диалог с телом',
        'services.kinesiology.description': 'Мы используем мышечное тестирование для выявления и коррекции структурных, химических и эмоциональных дисбалансов в их корне.',

        'services.nutrition.title': 'Осознанное Питание',
        'services.nutrition.subtitle': 'Питание для жизненной силы',
        'services.nutrition.description': 'Персонализированные стратегии питания для повышения энергии, улучшения пищеварения и ясности ума.',

        'services.feldenkrais.title': 'Метод Фельденкрайза',
        'services.feldenkrais.subtitle': 'Осознание через движение',
        'services.feldenkrais.description': 'Научитесь двигаться эффективно и без боли через переобучение нервной системы.',

        'services.osteobalance.title': 'Остеобаланс',
        'services.osteobalance.subtitle': 'Мягкий структурный баланс',
        'services.osteobalance.description': 'Точная мануальная техника для коррекции смещений костей без грубых манипуляций.',
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def update_translations(content, lang_code, new_keys):
    # Regex to find the language block
    pattern = re.compile(rf"^\s*{lang_code}:\s*\{{", re.MULTILINE)
    match = pattern.search(content)

    if not match:
        print(f"Could not find block for {lang_code}")
        return content

    start_idx = match.end()

    # Find end of block by brace counting
    brace_count = 1
    i = start_idx
    while i < len(content) and brace_count > 0:
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
        i += 1

    end_idx = i - 1
    block_content = content[start_idx:end_idx]

    # Replace existing keys or add new ones
    for key, value in new_keys.items():
        # Escape single quotes in value
        safe_val = value # Assuming manual escaping already done in dict above where needed

        # Regex for existing key: 'key': '...'
        # We need to be careful about multiline strings or different quote types
        # Assuming format 'key': 'value',

        key_pattern = re.compile(rf"^\s*'{re.escape(key)}':\s*(['\"])(.*?)\1,", re.MULTILINE)

        if key_pattern.search(block_content):
            # Replace existing
            # We use a lambda to avoid issues with backreferences in replacement string if any
            block_content = key_pattern.sub(f"    '{key}': '{safe_val}',", block_content)
        else:
            # Append new if not found (though usually we are updating existing)
            block_content += f"\n    '{key}': '{safe_val}',"

    return content[:start_idx] + block_content + content[end_idx:]

for lang in ['ca', 'en', 'es', 'ru']:
    content = update_translations(content, lang, new_translations[lang])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Services translations updated.")
