/* Page Builder */
function pageBuilder() {
  addCurrentYearInSpan("current-year");
  //  addElementToMenu('main-menu-ul', 'index.html','TEXT')
  addElementToMainMenu("main-menu-ul", "dropdown-item", mapElements);
  addElementToMainMenu("menu-ul", "dropdown-item", mapElements);
  //builder('main-form');
  addLabelInputWithType("date", "date", "Дата", "2026-01-01", "dd.mm.yyyy");
  addLabelInputWithType("time", "time", "Время", "11:00", "hh:mm");
  addLabelRadioButton("male", "gender", "Мужчина", true);
  addLabelRadioButton("female", "gender", "Женщина");
  addLabelSelect("blood-gr", "Группа крови", bloodgr);
  addLabelDatalist("blood-gr-rh", "Резус фактор", bloodgrRh);

  addHeading("block-anthropometric-data", "Антропометрические данные", "5"); // Звголовок

  addLabelInput("growth", "Рост", "170", "см");
  addLabelInput("mass", "Масса", "70", "кг");
  addLabelInput("bsa-result", "ППТ", "", "м2");
  addTextarea("diagnosis", "Диагноз", "начните вводить...");
  addLabelInput("complaints", "Жалобы ", "нет", "");
  addLabelInput("allergy", "Аллергические реакции", "нет", "");
  addLabelInput("drugs", "Постоянный прием лекарственных препаратов", "нет");
  addLabelInput(
    "condition-of-veins",
    "Состояние вен нижних конечностей",
    conditionOfVeins,
  );
  addLabelInput("dentures", "Наличие съемных зубных протезов", "нет", "");
  addLabelInput("bad-habits", "Вредные привычки", "нет", "");
  addLabelInput("other-operations", "Операции, травмы", "нет", "");

  addHeading("block-physical-exam", "Физикальное обследование", "4"); // Заголовок

  addLabelDatalist("patient-state", "Состояние", patientState);
  addLabelDatalist("patient-consciousness", "Сознание", patientConsciousness);
  addLabelInput(
    "patient-status-neuro",
    "Неврологический статус",
    "без признаков острой неврологической симптоматики",
  );
  addLabelDatalist(
    "patient-status-cognitive",
    "Когнитивные функции",
    patientStatusCognitive,
  );
  addLabelDatalist(
    "patient-skin",
    "Кожные покровы и видимые слизистые",
    patientSkin,
  );
  addLabelDatalist("patient-edema", "Периферические отеки", patientEdema);
  // two
  addLabelDatalist(
    "patient-heart-tones-1",
    "Тоны сердца",
    patientHeartTones[0],
  );
  addLabelDatalist("patient-heart-tones-2", "", patientHeartTones[1]);
  addLabelInput("patient-ad", "АД", "120/75", "mmHg");
  addLabelInput("patient-pulse", "ЧСС", "65", "/min");
  addLabelDatalist("patient-ecg", "Ритм ЭКГ", patientEcg[0]);
  //two
  addLabelDatalist(
    "patient-auscultation-type-1",
    "Аускультативно дыхание",
    patientAuscultation[0],
  );
  addLabelDatalist("patient-auscultation-type-2", "", patientAuscultation[1]);

  addLabelInput("patient-breath-rate", "ЧД", "16", "/min");
  addLabelInput("patient-spo2", "SpO2", "97", "%");

  //two
  addLabelDatalist("patient-abdomen-1", "Живот", patientAbdomen[0]);
  addLabelDatalist("patient-abdomen-2", "", patientAbdomen[1]);
  addLabelInput("patient-dyspes", "Признаки диспепсии", "нет", "");
  addLabelDatalist("patient-urination", "Мочеиспускание", patientUrination);
  addLabelDatalist("patient-dialisis", "Гемодиализ", ["нет", "да"]);

  addLabelInput(
    "analiysis",
    "Данные лабораторных и инструментальных исследований ",
    "В пределах референсных значений",
  );
  addLabelInput("deep-examination", "Необходимость дообследования", "нет", "");
  addLabelInput("planned-operation", "Планируемая операция");
  addLabelDatalist("planned-anesth", "Планируемая анестезия", plannedAnesth);
  addLabelDatalist(
    "asa",
    "Анестезиологический риск ASA",
    anesthConsultRisk,
    "",
  );
  addLabelDatalist(
    "mallampati",
    "Прогнозирование трудного дыхательного пути",
    mallampati,
  );
  addLabelInput(
    "planned-monitoring",
    "Планируемый мониторинг",
    plannedMonitoring,
  );
  addLabelInput("premedecation", " Премедикация", premedecation);
  addLabelInput("recomendations", "Рекомендации", recomendations);

  // Разделители
  addSpacer(["block-1", "block-2", "block-3", "block-5", "block-6"]);
}