/* Page Builder */
function pageBuilder() {
  //  addElementToMenu('main-menu-ul', 'index.html','TEXT')
  //addElementToMainMenu("main-menu-ul", "dropdown-item", mapElements);
  //builder('main-form');
  addLabelInputWithType("date", "date", "Дата", getCurrentDate() );
  addLabelInputWithType("time", "time", "Время", "11:00");
  addLabelRadioButton("male", "gender", "Мужчина", true);
  addLabelRadioButton("female", "gender", "Женщина");
  addLabelSelect("blood-gr", "Группа крови", bloodgr);
  addLabelDatalist("blood-gr-rh", "Резус фактор", bloodgrRh);

  addHeading("block-anthropometric-data", "Антропометрические данные", "5"); // Звголовок

  addLabelInput("growth", "Рост", "", "см", "170");
  addLabelInput("mass", "Масса", "", "кг", "80");
  addLabelInput("bsa-result", "ППТ", "", "м2");
  addTextarea("diagnosis", "Диагноз", "начните вводить...");
  addLabelInput("complaints", "Жалобы ", "нет", "");
  addLabelInput("allergy", "Аллергические реакции", "нет", "");
  addLabelInput("drugs", "Постоянный прием лекарственных препаратов", "нет");
  addLabelDatalist(
    "condition-of-veins",
    "Состояние вен нижних конечностей",
    conditionOfVeins,
  );
  addLabelInput("dentures", "Наличие съемных зубных протезов", "нет", "");
  addLabelInput("bad-habits", "Вредные привычки", "нет", "");
  addLabelInput("other-operations", "Операции, травмы", "нет", "");

  addHeading("block-physical-exam", "Физикальное обследование", "5"); // Заголовок

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
  addLabelInput("patient-ad", "АД", "", "mmHg", "");
  addLabelInput("patient-pulse", "ЧСС", "", "/min", "");
  addLabelDatalist("patient-ecg", "Ритм ЭКГ", patientEcg[0]);
  //two
  addLabelDatalist(
    "patient-auscultation-type-1",
    "Аускультативно дыхание",
    patientAuscultation[0],
  );
  addLabelDatalist("patient-auscultation-type-2", "", patientAuscultation[1]);

  addLabelInput("patient-breath-rate", "ЧД", "", "/min", "");
  addLabelInput("patient-spo2", "SpO2", "", "%", "");

  //two
  addLabelDatalist("patient-abdomen-1", "Живот", patientAbdomen[0]);
  addLabelDatalist("patient-abdomen-2", "", patientAbdomen[1]);
  addLabelInput("patient-dyspes", "Признаки диспепсии", "нет", "");
  addLabelDatalist("patient-urination", "Мочеиспускание", patientUrination);
  addLabelDatalist("patient-dialisis", "Гемодиализ", ["нет", "да"]);

  addLabelInput(
    "analiysis",
    "Данные лабораторных и инструментальных исследований ",
    "ЭКГ: ритм синусовый, частые желудочковые эктрасистолы, нормальное положение элеектрической оси сердца, частота сокращения желудочков 10212 в секунду",
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

  loadFormFromStorage("main-form"); // Загрузка из localStorage
  startEventListenFocusBsa("bsa-result-input"); // слушатель на ППТ
}

// обработчик события для кнопки копирования
document.getElementById("copy-button").addEventListener("click", function () {
  // Получаем текст ЗАНОВО при каждом клике
  const isValidForm = validateForm("main-form");
  
  if(isValidForm){
  const formArray = getArrayFromContainer("main-form");
  const str = getStringFromArray(formArray);
  const text = getTextFromString(str);
  copyToClipboard(text);
  }
  
});

// обработчик кнопки сохранить текст
document
  .getElementById("save-to-file-button")
  .addEventListener("click", function () {
    const formArray = getArrayFromContainer("main-form");
    const str = getStringFromArray(formArray);
    const text = getTextFromString(str);
    saveToFile(text);
  });

// Обработчик кнопки сохранения
document
  .getElementById("save-to-file-ls")
  .addEventListener("click", function () {
    saveFormStorage("main-form");
  });
