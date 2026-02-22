import re

file_path = 'src/contexts/LanguageContext.tsx'

new_translations = {
    'ca': {
        # Office
        'personalized.officeWorkers.hero.title': 'Salut Corporativa i Ergonomia',
        'personalized.officeWorkers.hero.description': "Gestió integral de la patologia sedentària. Tractem el \"tech neck\", la tensió repetitiva i l\'esgotament digital.",
        'personalized.officeWorkers.understanding.title': 'Descodificant el Síndrome d\'Oficina',
        'personalized.officeWorkers.understanding.description1': "L\'entorn corporatiu modern imposa una càrrega biomecànica constant: coll avançat, espatlles elevades i compressió lumbar.",
        'personalized.officeWorkers.understanding.description2': "No és només cansament; és una adaptació estructural a l\'estrès que requereix una intervenció precisa per restaurar la funcionalitat.",
        'personalized.officeWorkers.method.title': 'Protocol de Descompressió Executiva',

        # Athletes
        'personalized.athletes.hero.title': 'Alt Rendiment i Recuperació',
        'personalized.athletes.hero.description': 'Optimització biomecànica avançada. Accelerem la regeneració tissular, corregim asimetries funcionals i prevenim lesions.',
        'personalized.athletes.understanding.title': 'La Ciència del Rendiment Sostenible',
        'personalized.athletes.understanding.description1': "L\'entrenament d\'elit exigeix un equilibri precís entre càrrega i capacitat de recuperació.",
        'personalized.athletes.understanding.description2': "Intervenim en el sistema neuromusculoesquelètic per eliminar restriccions fascials i potenciar l\'eficiència del moviment.",
        'personalized.athletes.method.title': 'Protocol de Bio-Optimització',

        # Musicians
        'personalized.musicians.hero.title': 'Medicina de les Arts Escèniques',
        'personalized.musicians.hero.description': 'Atenció especialitzada per a instrumentistes. Tractem distonia focal, síndromes de sobreús i ansietat escènica mitjançant biomecànica funcional.',
        'personalized.musicians.understanding.title': 'Ergonomia de l\'Instrument',
        'personalized.musicians.understanding.description1': "Tocar un instrument és una proesa atlètica de motricitat fina. Les hores de pràctica generen patrons de tensió asimètrica.",
        'personalized.musicians.understanding.description2': "Restaurim la llibertat de moviment sense alterar la teva tècnica, permetent una interpretació sense dolor ni restriccions.",

        # Students
        'personalized.students.hero.title': 'Rendiment Cognitiu i Neuro-Regulació',
        'personalized.students.hero.description': 'Optimització cognitiva i regulació de l\'estrès per a estudiants d\'alta exigència.',
        'personalized.students.understanding.title': 'Neurofisiologia de l\'Estudi',
        'personalized.students.understanding.description1': "L\'estrès acadèmic no és només mental; es manifesta com a bloqueig cervical, fatiga visual i esgotament sistèmic.",
        'personalized.students.understanding.description2': "Utilitzem tècniques d\'integració cerebral i relaxació profunda per potenciar la memòria i la claredat mental.",

        # Parents
        'personalized.parents.hero.title': 'Restauració Vital per a Cuidadors',
        'personalized.parents.hero.description': "Recuperació profunda per a qui sosté la família. Reequilibri del sistema nerviós i recàrrega energètica.",
        'personalized.parents.understanding.title': 'Cuidar al Cuidador',
        'personalized.parents.understanding.description1': "La criança és un marató de resistència física i emocional. El teu cos acumula la tensió de la responsabilitat constant.",
        'personalized.parents.understanding.description2': "Creem un espai de contenció on pots deixar anar el pes, restaurar el teu eix i recuperar la teva pròpia identitat corporal.",
    },
    'en': {
        # Office
        'personalized.officeWorkers.hero.title': 'Corporate Health & Ergonomics',
        'personalized.officeWorkers.hero.description': 'Comprehensive management of sedentary pathology. We treat "tech neck", repetitive strain, and digital burnout.',
        'personalized.officeWorkers.understanding.title': 'Decoding Office Syndrome',
        'personalized.officeWorkers.understanding.description1': 'The modern corporate environment imposes a constant biomechanical load: forward head posture, elevated shoulders, and lumbar compression.',
        'personalized.officeWorkers.understanding.description2': 'It is not just fatigue; it is a structural adaptation to stress requiring precise intervention to restore functionality.',
        'personalized.officeWorkers.method.title': 'Executive Decompression Protocol',

        # Athletes
        'personalized.athletes.hero.title': 'High Performance & Recovery',
        'personalized.athletes.hero.description': 'Advanced biomechanical optimization. We accelerate tissue regeneration, correct functional asymmetries, and prevent injury.',
        'personalized.athletes.understanding.title': 'The Science of Sustainable Performance',
        'personalized.athletes.understanding.description1': 'Elite training demands a precise balance between load and recovery capacity.',
        'personalized.athletes.understanding.description2': 'We intervene in the neuromusculoskeletal system to eliminate fascial restrictions and enhance movement efficiency.',
        'personalized.athletes.method.title': 'Bio-Optimization Protocol',

        # Musicians
        'personalized.musicians.hero.title': 'Performing Arts Medicine',
        'personalized.musicians.hero.description': 'Specialized care for instrumentalists. We treat focal dystonia, overuse syndromes, and performance anxiety through functional biomechanics.',
        'personalized.musicians.understanding.title': 'Instrument Ergonomics',
        'personalized.musicians.understanding.description1': 'Playing an instrument is an athletic feat of fine motor skills. Hours of practice generate asymmetrical tension patterns.',
        'personalized.musicians.understanding.description2': 'We restore freedom of movement without altering your technique, allowing for pain-free and unrestricted performance.',

        # Students
        'personalized.students.hero.title': 'Cognitive Performance & Neuro-Regulation',
        'personalized.students.hero.description': 'Cognitive optimization and stress regulation for high-demand students.',
        'personalized.students.understanding.title': 'The Neurophysiology of Study',
        'personalized.students.understanding.description1': 'Academic stress is not just mental; it manifests as cervical blockage, visual fatigue, and systemic exhaustion.',
        'personalized.students.understanding.description2': 'We use brain integration techniques and deep relaxation to boost memory and mental clarity.',

        # Parents
        'personalized.parents.hero.title': 'Vital Restoration for Caregivers',
        'personalized.parents.hero.description': 'Deep recovery for those who support the family. Nervous system rebalancing and energy recharge.',
        'personalized.parents.understanding.title': 'Caring for the Caregiver',
        'personalized.parents.understanding.description1': 'Parenting is a marathon of physical and emotional endurance. Your body accumulates the tension of constant responsibility.',
        'personalized.parents.understanding.description2': 'We create a holding space where you can release the weight, restore your axis, and recover your own bodily identity.',
    },
    'es': {
        # Office
        'personalized.officeWorkers.hero.title': 'Salud Corporativa y Ergonomía',
        'personalized.officeWorkers.hero.description': 'Gestión integral de la patología sedentaria. Tratamos el "tech neck", la tensión repetitiva y el agotamiento digital.',
        'personalized.officeWorkers.understanding.title': 'Decodificando el Síndrome de Oficina',
        'personalized.officeWorkers.understanding.description1': 'El entorno corporativo moderno impone una carga biomecánica constante: cuello adelantado, hombros elevados y compresión lumbar.',
        'personalized.officeWorkers.understanding.description2': 'No es solo cansancio; es una adaptación estructural al estrés que requiere una intervención precisa para restaurar la funcionalidad.',
        'personalized.officeWorkers.method.title': 'Protocolo de Descompresión Ejecutiva',

        # Athletes
        'personalized.athletes.hero.title': 'Alto Rendimiento y Recuperación',
        'personalized.athletes.hero.description': 'Optimización biomecánica avanzada. Aceleramos la regeneración tisular, corregimos asimetrías funcionales y prevenimos lesiones.',
        'personalized.athletes.understanding.title': 'La Ciencia del Rendimiento Sostenible',
        'personalized.athletes.understanding.description1': 'El entrenamiento de élite exige un equilibrio preciso entre carga y capacidad de recuperación.',
        'personalized.athletes.understanding.description2': 'Intervenimos en el sistema neuromusculoesquelético para eliminar restricciones fasciales y potenciar la eficiencia del movimiento.',
        'personalized.athletes.method.title': 'Protocolo de Bio-Optimización',

        # Musicians
        'personalized.musicians.hero.title': 'Medicina de las Artes Escénicas',
        'personalized.musicians.hero.description': 'Atención especializada para instrumentistas. Tratamos distonía focal, síndromes de sobreuso y ansiedad escénica mediante biomecánica funcional.',
        'personalized.musicians.understanding.title': 'Ergonomía del Instrumento',
        'personalized.musicians.understanding.description1': 'Tocar un instrumento es una proeza atlética de motricidad fina. Las horas de práctica generan patrones de tensión asimétrica.',
        'personalized.musicians.understanding.description2': 'Restauramos la libertad de movimiento sin alterar tu técnica, permitiendo una interpretación sin dolor ni restricciones.',

        # Students
        'personalized.students.hero.title': 'Rendimiento Cognitivo y Neuro-Regulación',
        'personalized.students.hero.description': 'Optimización cognitiva y regulación del estrés para estudiantes de alta exigencia.',
        'personalized.students.understanding.title': 'Neurofisiología del Estudio',
        'personalized.students.understanding.description1': 'El estrés académico no es solo mental; se manifiesta como bloqueo cervical, fatiga visual y agotamiento sistémico.',
        'personalized.students.understanding.description2': 'Utilizamos técnicas de integración cerebral y relajación profunda para potenciar la memoria y la claridad mental.',

        # Parents
        'personalized.parents.hero.title': 'Restauración Vital para Cuidadores',
        'personalized.parents.hero.description': 'Recuperación profunda para quien sostiene a la familia. Reequilibrio del sistema nervioso y recarga energética.',
        'personalized.parents.understanding.title': 'Cuidar al Cuidador',
        'personalized.parents.understanding.description1': 'La crianza es un maratón de resistencia física y emocional. Tu cuerpo acumula la tensión de la responsabilidad constante.',
        'personalized.parents.understanding.description2': 'Creamos un espacio de contención donde puedes soltar el peso, restaurar tu eje y recuperar tu propia identidad corporal.',
    },
    'ru': {
        # Office
        'personalized.officeWorkers.hero.title': 'Корпоративное Здоровье и Эргономика',
        'personalized.officeWorkers.hero.description': 'Комплексное управление патологиями сидячего образа жизни. Лечим "tech neck", повторяющееся напряжение и цифровое выгорание.',
        'personalized.officeWorkers.understanding.title': 'Декодирование Офисного Синдрома',
        'personalized.officeWorkers.understanding.description1': 'Современная корпоративная среда накладывает постоянную биомеханическую нагрузку: выдвинутая шея, поднятые плечи и поясничная компрессия.',
        'personalized.officeWorkers.understanding.description2': 'Это не просто усталость; это структурная адаптация к стрессу, требующая точного вмешательства для восстановления функциональности.',
        'personalized.officeWorkers.method.title': 'Протокол Исполнительной Декомпрессии',

        # Athletes
        'personalized.athletes.hero.title': 'Высокая Производительность и Восстановление',
        'personalized.athletes.hero.description': 'Продвинутая биомеханическая оптимизация. Ускоряем регенерацию тканей, исправляем функциональные асимметрии и предотвращаем травмы.',
        'personalized.athletes.understanding.title': 'Наука Устойчивой Производительности',
        'personalized.athletes.understanding.description1': 'Элитные тренировки требуют точного баланса между нагрузкой и способностью к восстановлению.',
        'personalized.athletes.understanding.description2': 'Мы вмешиваемся в нейромышечную систему для устранения фасциальных ограничений и повышения эффективности движения.',
        'personalized.athletes.method.title': 'Протокол Био-Оптимизации',

        # Musicians
        'personalized.musicians.hero.title': 'Медицина Исполнительских Искусств',
        'personalized.musicians.hero.description': 'Специализированная помощь для инструменталистов. Лечим фокальную дистонию, синдромы перегрузки и сценическую тревогу через функциональную биомеханику.',
        'personalized.musicians.understanding.title': 'Эргономика Инструмента',
        'personalized.musicians.understanding.description1': 'Игра на инструменте — это атлетический подвиг мелкой моторики. Часы практики создают паттерны асимметричного напряжения.',
        'personalized.musicians.understanding.description2': 'Мы восстанавливаем свободу движения, не изменяя вашу технику, позволяя исполнять музыку без боли и ограничений.',

        # Students
        'personalized.students.hero.title': 'Когнитивная Производительность и Нейрорегуляция',
        'personalized.students.hero.description': 'Когнитивная оптимизация и регуляция стресса для студентов с высокой нагрузкой.',
        'personalized.students.understanding.title': 'Нейрофизиология Учебы',
        'personalized.students.understanding.description1': 'Академический стресс не только ментальный; он проявляется как шейный блок, зрительная усталость и системное истощение.',
        'personalized.students.understanding.description2': 'Мы используем техники интеграции мозга и глубокой релаксации для улучшения памяти и ясности ума.',

        # Parents
        'personalized.parents.hero.title': 'Жизненное Восстановление для Опекунов',
        'personalized.parents.hero.description': 'Глубокое восстановление для тех, кто поддерживает семью. Ребалансировка нервной системы и энергетическая подзарядка.',
        'personalized.parents.understanding.title': 'Забота о Заботящемся',
        'personalized.parents.understanding.description1': 'Воспитание — это марафон физической и эмоциональной выносливости. Ваше тело накапливает напряжение постоянной ответственности.',
        'personalized.parents.understanding.description2': 'Мы создаем пространство поддержки, где вы можете сбросить груз, восстановить свою ось и вернуть собственную телесную идентичность.',
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def update_translations(content, lang_code, new_keys):
    # Same update function as before
    pattern = re.compile(rf"^\s*{lang_code}:\s*\{{", re.MULTILINE)
    match = pattern.search(content)

    if not match:
        return content

    start_idx = match.end()

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

    for key, value in new_keys.items():
        safe_val = value.replace("'", "\'") # Ensure escaped quotes

        # We need to replace single quotes that are NOT already escaped
        # But since we are replacing the whole string value, we just need to provide a correct python string

        # Regex to match key: 'key': '...'
        key_pattern = re.compile(rf"^\s*'{re.escape(key)}':\s*['\"](.*?)['\"],", re.MULTILINE)

        if key_pattern.search(block_content):
            # Replace
            block_content = key_pattern.sub(f"    '{key}': '{safe_val}',", block_content)
        else:
            # Append
            block_content += f"\n    '{key}': '{safe_val}',"

    return content[:start_idx] + block_content + content[end_idx:]

for lang in ['ca', 'en', 'es', 'ru']:
    content = update_translations(content, lang, new_translations[lang])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Personalized translations updated.")
