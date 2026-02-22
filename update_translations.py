import re

file_path = 'src/contexts/LanguageContext.tsx'

new_content = {
    'ca': {
        # Students Method
        'personalized.students.method.step1.title': 'Descompressió Cognitiva',
        'personalized.students.method.step1.desc': 'Tècniques cranials per reduir la saturació mental i millorar la claredat.',
        'personalized.students.method.step2.title': 'Realineament d\'Estudi',
        'personalized.students.method.step2.desc': 'Correcció de la postura de cap i coll per prevenir la fatiga visual i cervical.',
        'personalized.students.method.step3.title': 'Activació del Focus',
        'personalized.students.method.step3.desc': 'Exercicis de kinesiologia per connectar els hemisferis cerebrals i potenciar la memòria.',

        # Students Benefit 4
        'personalized.students.benefit4': 'Millora de la qualitat del son pre-exàmens.',

        # Parents Method
        'personalized.parents.method.step1.title': 'Reseteig del Sistema Nerviós',
        'personalized.parents.method.step1.desc': 'Sortir del mode de supervivència per entrar en un estat de calma profunda.',
        'personalized.parents.method.step2.title': 'Restauració Energètica',
        'personalized.parents.method.step2.desc': 'Tècniques per recarregar les bateries vitals esgotades per la cura constant.',
        'personalized.parents.method.step3.title': 'Alliberament de Càrregues',
        'personalized.parents.method.step3.desc': 'Desbloqueig de la tensió a espatlles i esquena causada per carregar pesos (físics i emocionals).',

        # Parents Benefits
        'personalized.parents.benefit1': 'Recuperació de la paciència i la presència.',
        'personalized.parents.benefit2': 'Millora del descans nocturn fins i tot amb poques hores.',
        'personalized.parents.benefit3': 'Alleujament del dolor d\'esquena per carregar nens.',
        'personalized.parents.benefit4': 'Espai propi per reconnectar amb tu mateix/a.',

        # Benefit 4 for others
        'personalized.officeWorkers.benefit4': 'Prevenció del burnout digital i l\'esgotament.',
        'personalized.athletes.benefit4': 'Allargament de la vida esportiva activa.',
        'personalized.artists.benefit4': 'Desbloqueig del flux creatiu estancat.',
        'personalized.musicians.benefit4': 'Major confiança i presència escènica.',

        # Missing Artists Benefits
        'personalized.artists.benefit1': 'Prevenció de tendinitis i dolor articular.',
        'personalized.artists.benefit2': 'Correcció postural per a llargues sessions de treball.',
        'personalized.artists.benefit3': 'Relaxació de la tensió ocular i cervical.',

        # Missing Musicians Benefits
        'personalized.musicians.benefit1': 'Optimització de la postura amb l\'instrument.',
        'personalized.musicians.benefit2': 'Prevenció de lesions per moviments repetitius.',
        'personalized.musicians.benefit3': 'Control de l\'ansietat abans d\'actuacions.',

        # Missing Students Benefits 1-3 (Just in case)
        'personalized.students.benefit1': 'Reducció de l\'estrès i l\'ansietat acadèmica.',
        'personalized.students.benefit2': 'Millora de la concentració i la memòria.',
        'personalized.students.benefit3': 'Alleujament de la tensió cervical per l\'estudi.',
    },
    'en': {
        'personalized.students.method.step1.title': 'Cognitive Decompression',
        'personalized.students.method.step1.desc': 'Cranial techniques to reduce mental saturation and improve clarity.',
        'personalized.students.method.step2.title': 'Study Realignment',
        'personalized.students.method.step2.desc': 'Correction of head and neck posture to prevent visual and cervical fatigue.',
        'personalized.students.method.step3.title': 'Focus Activation',
        'personalized.students.method.step3.desc': 'Kinesiology exercises to connect brain hemispheres and boost memory.',
        'personalized.students.benefit4': 'Improved sleep quality before exams.',

        'personalized.parents.method.step1.title': 'Nervous System Reset',
        'personalized.parents.method.step1.desc': 'Shifting from survival mode into a state of deep calm.',
        'personalized.parents.method.step2.title': 'Energy Restoration',
        'personalized.parents.method.step2.desc': 'Techniques to recharge vital batteries drained by constant caregiving.',
        'personalized.parents.method.step3.title': 'Burden Release',
        'personalized.parents.method.step3.desc': 'Unlocking tension in shoulders and back caused by carrying weights (physical and emotional).',

        'personalized.parents.benefit1': 'Recovery of patience and presence.',
        'personalized.parents.benefit2': 'Better rest even with few hours of sleep.',
        'personalized.parents.benefit3': 'Relief from back pain caused by carrying children.',
        'personalized.parents.benefit4': 'Your own space to reconnect with yourself.',

        'personalized.officeWorkers.benefit4': 'Prevention of digital burnout and exhaustion.',
        'personalized.athletes.benefit4': 'Extension of active sports career.',
        'personalized.artists.benefit4': 'Unblocking of stagnant creative flow.',
        'personalized.musicians.benefit4': 'Greater confidence and stage presence.',

        'personalized.artists.benefit1': 'Prevention of tendonitis and joint pain.',
        'personalized.artists.benefit2': 'Postural correction for long work sessions.',
        'personalized.artists.benefit3': 'Relaxation of eye and neck tension.',

        'personalized.musicians.benefit1': 'Optimization of posture with the instrument.',
        'personalized.musicians.benefit2': 'Prevention of repetitive strain injuries.',
        'personalized.musicians.benefit3': 'Control of anxiety before performances.',

        'personalized.students.benefit1': 'Reduction of academic stress and anxiety.',
        'personalized.students.benefit2': 'Improvement of concentration and memory.',
        'personalized.students.benefit3': 'Relief of cervical tension from studying.',
    },
    'es': {
        'personalized.students.method.step1.title': 'Descompresión Cognitiva',
        'personalized.students.method.step1.desc': 'Técnicas craneales para reducir la saturación mental y mejorar la claridad.',
        'personalized.students.method.step2.title': 'Realineación de Estudio',
        'personalized.students.method.step2.desc': 'Corrección de la postura de cabeza y cuello para prevenir la fatiga visual y cervical.',
        'personalized.students.method.step3.title': 'Activación del Foco',
        'personalized.students.method.step3.desc': 'Ejercicios de kinesiología para conectar los hemisferios cerebrales y potenciar la memoria.',
        'personalized.students.benefit4': 'Mejora de la calidad del sueño pre-exámenes.',

        'personalized.parents.method.step1.title': 'Reinicio del Sistema Nervioso',
        'personalized.parents.method.step1.desc': 'Salir del modo supervivencia para entrar en un estado de calma profunda.',
        'personalized.parents.method.step2.title': 'Restauración Energética',
        'personalized.parents.method.step2.desc': 'Técnicas para recargar las baterías vitales agotadas por el cuidado constante.',
        'personalized.parents.method.step3.title': 'Liberación de Cargas',
        'personalized.parents.method.step3.desc': 'Desbloqueo de la tensión en hombros y espalda causada por cargar pesos (físicos y emocionales).',

        'personalized.parents.benefit1': 'Recuperación de la paciencia y la presencia.',
        'personalized.parents.benefit2': 'Mejor descanso nocturno incluso con pocas horas.',
        'personalized.parents.benefit3': 'Alivio del dolor de espalda por cargar niños.',
        'personalized.parents.benefit4': 'Espacio propio para reconectar contigo mismo/a.',

        'personalized.officeWorkers.benefit4': 'Prevención del burnout digital y el agotamiento.',
        'personalized.athletes.benefit4': 'Prolongación de la vida deportiva activa.',
        'personalized.artists.benefit4': 'Desbloqueo del flujo creativo estancado.',
        'personalized.musicians.benefit4': 'Mayor confianza y presencia escénica.',

        'personalized.artists.benefit1': 'Prevención de tendinitis y dolor articular.',
        'personalized.artists.benefit2': 'Corrección postural para largas sesiones de trabajo.',
        'personalized.artists.benefit3': 'Relajación de la tensión ocular y cervical.',

        'personalized.musicians.benefit1': 'Optimización de la postura con el instrumento.',
        'personalized.musicians.benefit2': 'Prevención de lesiones por movimientos repetitivos.',
        'personalized.musicians.benefit3': 'Control de la ansiedad antes de actuaciones.',

        'personalized.students.benefit1': 'Reducción del estrés y la ansiedad académica.',
        'personalized.students.benefit2': 'Mejora de la concentración y la memoria.',
        'personalized.students.benefit3': 'Alivio de la tensión cervical por el estudio.',
    },
    'ru': {
        'personalized.students.method.step1.title': 'Когнитивная Декомпрессия',
        'personalized.students.method.step1.desc': 'Краниальные техники для снижения ментальной перегрузки и улучшения ясности.',
        'personalized.students.method.step2.title': 'Учебное Выравнивание',
        'personalized.students.method.step2.desc': 'Коррекция осанки головы и шеи для предотвращения зрительной и шейной усталости.',
        'personalized.students.method.step3.title': 'Активация Фокуса',
        'personalized.students.method.step3.desc': 'Упражнения кинезиологии для соединения полушарий мозга и улучшения памяти.',
        'personalized.students.benefit4': 'Улучшение качества сна перед экзаменами.',

        'personalized.parents.method.step1.title': 'Перезагрузка Нервной Системы',
        'personalized.parents.method.step1.desc': 'Выход из режима выживания в состояние глубокого спокойствия.',
        'personalized.parents.method.step2.title': 'Восстановление Энергии',
        'personalized.parents.method.step2.desc': 'Техники для перезарядки жизненных батарей, истощенных постоянной заботой.',
        'personalized.parents.method.step3.title': 'Освобождение от Бремени',
        'personalized.parents.method.step3.desc': 'Разблокировка напряжения в плечах и спине, вызванного ношением тяжестей (физических и эмоциональных).',

        'personalized.parents.benefit1': 'Восстановление терпения и присутствия.',
        'personalized.parents.benefit2': 'Лучший отдых даже при малом количестве часов сна.',
        'personalized.parents.benefit3': 'Облегчение боли в спине от ношения детей.',
        'personalized.parents.benefit4': 'Собственное пространство для воссоединения с собой.',

        'personalized.officeWorkers.benefit4': 'Профилактика цифрового выгорания и истощения.',
        'personalized.athletes.benefit4': 'Продление активной спортивной карьеры.',
        'personalized.artists.benefit4': 'Разблокировка застоявшегося творческого потока.',
        'personalized.musicians.benefit4': 'Большая уверенность и сценическое присутствие.',

        'personalized.artists.benefit1': 'Профилактика тендинита и боли в суставах.',
        'personalized.artists.benefit2': 'Коррекция осанки для долгих сеансов работы.',
        'personalized.artists.benefit3': 'Расслабление глазного и шейного напряжения.',

        'personalized.musicians.benefit1': 'Оптимизация осанки с инструментом.',
        'personalized.musicians.benefit2': 'Профилактика травм от повторяющихся движений.',
        'personalized.musicians.benefit3': 'Контроль тревожности перед выступлениями.',

        'personalized.students.benefit1': 'Снижение учебного стресса и тревожности.',
        'personalized.students.benefit2': 'Улучшение концентрации и памяти.',
        'personalized.students.benefit3': 'Облегчение шейного напряжения от учебы.',
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to find where to insert
def insert_into_lang(content, lang_code, new_keys):
    # Regex to find the start of the language block
    # Looks for "  lang_code: {" or similar
    pattern = re.compile(rf"^\s*{lang_code}:\s*\{{", re.MULTILINE)
    match = pattern.search(content)

    if not match:
        print(f"Could not find language block for {lang_code}")
        return content

    start_idx = match.end()

    # Simple brace counting to find the end of this block
    brace_count = 1
    i = start_idx
    while i < len(content) and brace_count > 0:
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
        i += 1

    end_idx = i - 1 # Position of the closing brace

    # Prepare insertion string
    insertion = "\n"
    for k, v in new_keys.items():
        # Check if key already exists to avoid duplication (simple check)
        if f"'{k}':" not in content[match.start():end_idx]:
             # Escape single quotes in value
             safe_val = v.replace("'", "\'")
             insertion += f"    '{k}': '{safe_val}',\n"

    return content[:end_idx] + insertion + content[end_idx:]

for lang in ['ca', 'en', 'es', 'ru']:
    content = insert_into_lang(content, lang, new_content[lang])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Translations updated successfully.")
