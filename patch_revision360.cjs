const fs = require('fs');

let code = fs.readFileSync('src/contexts/Revision360Translations.ts', 'utf8');

code = code.replace(
  "'revision360.footer.forHealing': \"Per l'evolució integrativa\"",
  "'revision360.footer.forHealing': \"Per l'evolució integrativa\",\n    'revision360.faq.title': \"Preguntes Freqüents\",\n    'revision360.faq.q1': \"Què he de portar a la sessió?\",\n    'revision360.faq.a1': \"Et recomanem portar roba còmoda que et permeti moure't lliurement, com roba esportiva o llegings.\",\n    'revision360.faq.q2': \"Es pot fer a distància?\",\n    'revision360.faq.a2': \"Parts del diagnòstic i recomanacions es poden fer online, però la manipulació osteopàtica i kinesiològica requereix presencialitat per a una eficiència òptima.\",\n    'revision360.faq.q3': \"Quantes sessions necessito?\",\n    'revision360.faq.a3': \"Això depèn del pla triat i de la resposta del teu cos. Un Reset Tàctic és només una sessió, mentre que l'Experiència Integral n'inclou diverses per a un acompanyament complet.\""
);

code = code.replace(
  "'revision360.footer.forHealing': \"For integrative evolution\"",
  "'revision360.footer.forHealing': \"For integrative evolution\",\n    'revision360.faq.title': \"Frequently Asked Questions\",\n    'revision360.faq.q1': \"What should I wear to the session?\",\n    'revision360.faq.a1': \"We recommend wearing comfortable clothing that allows you to move freely, such as sportswear or leggings.\",\n    'revision360.faq.q2': \"Can this be done remotely?\",\n    'revision360.faq.a2': \"Parts of the diagnosis and recommendations can be done online, but osteopathic and kinesiological manipulation requires in-person attendance for optimal efficiency.\",\n    'revision360.faq.q3': \"How many sessions do I need?\",\n    'revision360.faq.a3': \"This depends on the chosen plan and your body's response. A Tactical Reset is just one session, while the Integral Experience includes several for complete support.\""
);

code = code.replace(
  "'revision360.footer.forHealing': \"Por la evolución integrativa\"",
  "'revision360.footer.forHealing': \"Por la evolución integrativa\",\n    'revision360.faq.title': \"Preguntas Frecuentes\",\n    'revision360.faq.q1': \"¿Qué debo llevar a la sesión?\",\n    'revision360.faq.a1': \"Te recomendamos llevar ropa cómoda que te permita moverte libremente, como ropa deportiva o leggings.\",\n    'revision360.faq.q2': \"¿Se puede hacer a distancia?\",\n    'revision360.faq.a2': \"Partes del diagnóstico y recomendaciones se pueden hacer online, pero la manipulación osteopática y kinesiológica requiere presencialidad para una eficiencia óptima.\",\n    'revision360.faq.q3': \"¿Cuántas sesiones necesito?\",\n    'revision360.faq.a3': \"Esto depende del plan elegido y de la respuesta de tu cuerpo. Un Reset Táctico es solo una sesión, mientras que la Experiencia Integral incluye varias para un acompañamiento completo.\""
);

code = code.replace(
  "'revision360.footer.forHealing': \"Для интегративной эволюции\"",
  "'revision360.footer.forHealing': \"Для интегративной эволюции\",\n    'revision360.faq.title': \"Часто Задаваемые Вопросы\",\n    'revision360.faq.q1': \"Что мне нужно надеть на сеанс?\",\n    'revision360.faq.a1': \"Мы рекомендуем надеть удобную одежду, которая позволяет свободно двигаться, например, спортивную одежду или леггинсы.\",\n    'revision360.faq.q2': \"Можно ли это сделать дистанционно?\",\n    'revision360.faq.a2': \"Часть диагностики и рекомендаций можно сделать онлайн, но остеопатическая и кинезиологическая манипуляция требует личного присутствия для оптимальной эффективности.\",\n    'revision360.faq.q3': \"Сколько сеансов мне нужно?\",\n    'revision360.faq.a3': \"Это зависит от выбранного плана и реакции вашего тела. Тактический Сброс — это всего один сеанс, тогда как Интегральный Опыт включает несколько для полного сопровождения.\""
);

fs.writeFileSync('src/contexts/Revision360Translations.ts', code, 'utf8');
