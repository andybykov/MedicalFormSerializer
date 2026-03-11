/* ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ */
// мапа для меню
const mapElements = new Map([
  ["index.html", "Главная страница"],
  ["anesth_consultation.html", "Осмотр ансетезиолога"],
  ["central_ven_catheter.html", "Протокол ЦВК"],
  ["#", "Протокол артерия"],
  ["#", "Протокол анесетезии"],
]);

/* ФУНКЦИИ */
function toggleMenu() {
  const menu = document.getElementById("main-menu"); // получаем main-menu
  //const elem = document.getElementById('toggle-menu'); // получаем элемент toggle-menu
  const pict = document.getElementById("toggle-pict");

  menu.classList.toggle("hidden"); // добавляем или убираем класс hidden в  класс menu
  pict.classList.toggle("rotated");
  /*  
  if (menu.classList.contains('hidden')) {
    elem.textContent = 'Показать меню';

  } else {
    elem.textContent = 'Скрыть меню';   
  }
  */
}

// получаем текущий год
function getCurrentYear() {
  return new Date().getFullYear();
}

// Получаем текущую дату
function getCurrentDate() {
  const currDate = new Date().toLocaleDateString("en-CA"); // en-CA YYYY-MM-DDD
  //DEBUG
  //console.log(dd);
  return currDate;
}

// вставка года в Span
function addCurrentYearInSpan(targetTagId) {
  targetTag = document.getElementById(targetTagId);
  const date = getCurrentYear();
  //targetTag.textContent = new Date().getFullYear();
  targetTag.innerText = date;
}

// добавляет текст в выбранный элемент
function addTexInElement(tagId, text){
  tag = document.getElementById(tagId);
  tag.innerText = text;
  console.warn(text);
}

/* ГЛАВНОЕ МЕНЮ */
// Строит меню: добавляет <ll><a href="LINK">TEXT</a></li>
// принимает targetTagId в качестве целевого объекта, куда размешать элементы меню
function addElementToMenu(targetTagId, link, text) {
  const menu = document.getElementById(targetTagId);

  // создание элементов
  const liTag = document.createElement("li");
  const aTag = document.createElement("a");

  // атрибут через свойство
  aTag.href = link;
  //aTag.className = 'mmm';

  // через setAttribute
  // newA.setAttribute('href', 'index.html');

  // СОЗДАЕМ текст
  text = document.createTextNode(text);

  // Собираем структуру
  aTag.appendChild(text); // текст внутри ссылки
  liTag.appendChild(aTag); // ссылка внутри li

  // собранный тег <li> с вложенным <a href="..
  menu.appendChild(liTag);
}

/* ФОРМА */

// Добавляет разделитель а также его атрибуты
// принимает массив!
function addSpacer(targetTag) {
  //const tag = document.querySelector(`.${targetTagClass}`);

  // проверка на масссив
  if (!Array.isArray(targetTag)) {
    console.warn("Argument must be Array!");

    return;
  }
  // проходимся по элементам
  for (let i = 0; i < targetTag.length; i++) {
    let tag = document.getElementById(targetTag[i]);
    // тег существует
    if (tag) {
      let spacer = document.createElement("div");

      spacer.className = "line-spacer";
      spacer.innerHTML = "<!-- ----------- spacer ----------- -->";
      tag.appendChild(spacer);

      // после элемента, а не внутрь
      // tag.parentNode.insertBefore(spacer, tag.nextSibling);
    } else {
      console.warn(
        `Adding spacer: target element: "${targetTag[i]}" is NOT found!`,
      );
    }
  }
}

// Строит меню: добавляет <ll><a href="LINK">TEXT</a></li>
// принимает targetTagId в качестве целевого объекта, куда размешать элементы меню
// принимает мапу: "LINK", "TEXT"
function addElementToMainMenu(targetTagId, classElement = "", mapElements) {
  const menu = document.getElementById(targetTagId);

  // проходимся по мапе
  mapElements.forEach(function (value, key) {
    //console.log(key, ":", value);
    var liTag = document.createElement("li");
    var aTag = document.createElement("a");

    if (!classElement) {
      aTag.setAttribute("class", "item");
    } else {
      aTag.setAttribute("class", classElement);
    }

    aTag.href = key;

    var text = document.createTextNode(value);

    aTag.appendChild(text);
    liTag.appendChild(aTag);

    // добавялем в меню
    menu.appendChild(liTag);
  });
}

//Создает и возвращает элемент < label > с автоматической генерацией ID
function addLabel(id, forElement = "", text = "") {
  // for
  // если forElement пустое
  let labelForId = "";

  if (!forElement) {
    labelForId = id;
  } else {
    labelForId = `${id}-${forElement}`;
  }

  const label = document.createElement("label");
  label.setAttribute("for", labelForId);
  //label.id = labelId;
  if (text) {
    label.textContent = text + " ";
  } else {
    label.innerHTML = "&nbsp; <!-- HTML space -->";
  }

  // bootstrap
  label.setAttribute("class", "form-label");

  return label;
}

// Создает и возвращает < span id="id" class="subtext" >text< /span >
function addSubText(id, subtext) {
  // id
  const addedTextId = `${id}-subtext`;

  const addedText = document.createElement("span");
  addedText.setAttribute("id", addedTextId);
  // bootstrap
  addedText.setAttribute("class", "form-text subtext");
  addedText.textContent = " " + subtext;

  return addedText;
}

// Создает и добавляет заголовок
function addHeading(targetTagId, text, size = "3") {
  const tag = document.getElementById(targetTagId);

  const sizes = ["1", "2", "3", "4", "5", "6"];
  if (!sizes.includes(size)) {
    console.warn(`Incorrect size of Heading: ${size}
                Set size = 6`);
    size = "6";
  }
  const heading = document.createElement(`h${size}`);

  heading.textContent = text;
  heading.className = "form-heading";
  tag.appendChild(heading);
}

// Добавляет <label> и <input> в указанный контейнер
function addLabelInput(
  targetTagId,
  name,
  value = "",
  subtext = "",
  placeholder,
  required = true,
) {
  const tag = document.getElementById(targetTagId);

  // IDs
  const inputId = `${targetTagId}-input`;

  const label = addLabel(targetTagId, "input", name);

  // input
  const type = "text"; // тип данных input
  const input = document.createElement("input");
  input.setAttribute("id", inputId);
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  if (placeholder) {
    input.placeholder = placeholder;
  }
  input.setAttribute("required", required);
  // bootstrap
  input.setAttribute("class", "form-control");

  const addedText = addSubText(targetTagId, subtext);

  // добавление
  tag.appendChild(label);
  tag.appendChild(input);
  tag.appendChild(addedText);
}

// input с типом данных
function addLabelInputWithType(
  targetTagId,
  type,
  name,
  value = "",
  subtext = "",
) {
  const tag = document.getElementById(targetTagId);

  // IDs
  const inputId = `${targetTagId}-input`;

  const label = addLabel(targetTagId, "input", name);

  // input
  const input = document.createElement("input");
  input.setAttribute("id", inputId);
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("value", value);

  const addedText = addSubText(targetTagId, subtext);

  // добавление
  tag.appendChild(label);
  tag.appendChild(input);
  tag.appendChild(addedText);
}

// Label + Radiobutton
function addLabelRadioButton(targetTagId, name, text, cheked, subtext = "") {
  const tag = document.getElementById(targetTagId);
  const type = "radio";

  // IDs
  const inputId = `${targetTagId}-input`;

  const label = addLabel(targetTagId, "input", text);

  const value = text;

  // input
  const input = document.createElement("input");
  input.setAttribute("id", inputId);
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("value", value);

  if (cheked) {
    input.checked = cheked;
  }

  //bootstrap
  input.setAttribute("class", "form-check-input");

  const addedText = addSubText(targetTagId, subtext);

  // добавление
  tag.appendChild(input);
  tag.appendChild(label);
  tag.appendChild(addedText);
}

// Создает и добавляет label + select
function addLabelSelect(targetTagId, name, options = [], subtext = "") {
  const tag = document.getElementById(targetTagId);

  // id
  const selectId = `${targetTagId}-select`;

  // label, select
  const label = addLabel(targetTagId, "select", name);
  const select = document.createElement("select");

  select.id = selectId;
  select.name = name;
  // subtext
  const addedText = addSubText(targetTagId, subtext);
  // проходимся по массиву и создаем и добавляем option
  for (var i = 0; i < options.length; ++i) {
    const option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    select.appendChild(option);
  }

  select.value = options[0]; // выбираем первый элемент массива

  tag.appendChild(label);
  tag.appendChild(select);
  tag.appendChild(addedText);
}

// Создание и добавление label + datalist
function addLabelDatalist(
  targetTagId,
  name,
  options = [],
  subtext = "",
  required = true,
) {
  // ID
  const inputId = `${targetTagId}-input`;
  const datalistId = `${targetTagId}-datalist`;

  const tag = document.getElementById(targetTagId);

  const label = addLabel(targetTagId, "input", name);

  const input = document.createElement("input");
  input.id = inputId;
  input.name = name; // NAME!!

  input.setAttribute("list", datalistId);
  input.placeholder = options[0];

  input.setAttribute("required", required);
  // DEBUG!!!!!
  //input.value = options[0];

  // bootstrap
  input.setAttribute("class", "form-control");

  const datalist = document.createElement("datalist");

  datalist.id = `${targetTagId}-datalist`;

  const addedText = addSubText(targetTagId, subtext);

  // проходимся по массиву и создаем и добавляем option
  for (var i = 0; i < options.length; ++i) {
    const option = document.createElement("option");
    option.value = options[i];
    datalist.appendChild(option);
  }

  tag.appendChild(label);
  tag.appendChild(input);
  tag.appendChild(datalist);
  tag.appendChild(addedText);
}

// Создание и добавление textarea
function addTextarea(targetTag, name, placeholder = "", required = true) {
  // id
  const textareaId = `${targetTag}-textarea`;
  const tag = document.getElementById(targetTag);

  const textarea = document.createElement("textarea");
  textarea.name = name;
  textarea.id = textareaId;
  textarea.rows = 5;
  textarea.cols = 100;
  textarea.placeholder = placeholder;
  // DEBUG!!!!!
  //textarea.value = "ИБС. СН 2 ФК. ГБ 3ст, 4ст, р4.";

  textarea.setAttribute("required", required);

  const textareaLabel = addLabel(textareaId, "", name);

  tag.appendChild(textareaLabel);
  tag.appendChild(textarea);
}

// Рассчитывает ППТ и вызывает updateBsa()
function calcBsa(tagId) {
  const growthInput = document.getElementById("growth-input");
  const massInput = document.getElementById("mass-input");

  // получение из поля и преобразование
  const growthValue = parseFloat(growthInput.value);
  const massValue = parseFloat(massInput.value);

  // формула Дюбуа
  let bsa =
    0.007184 * Math.pow(growthValue, 0.725) * Math.pow(massValue, 0.425);
  bsa = bsa.toPrecision(3);

  updateBsa(tagId, bsa);
  // DEBUG!
  console.log(`BSA = ${bsa} m2`);
}

// Обновляет поле ППТ
function updateBsa(tagId, bsa) {
  const bsaTag = document.getElementById(tagId);
  //console.log(bsaTag);
  bsaTag.value = bsa;
}

// Обработчик фокуса для поля ППТ - вызыается однокартно!!!!!!!!!!!!!!!!!1
function startEventListenFocusBsa(tagId) {
  const bsaTag = document.getElementById(tagId);

  // Обработчик фокуса bsaTag
  bsaTag.addEventListener("focus", function () {
    bsaTag.style.borderColor = "#4CAF50";
    bsaTag.style.backgroundColor = "#c1ffc1";
    calcBsa(tagId); // Пересчет при фокусе
  });

  // Обработчик потери фокуса
  bsaTag.addEventListener("blur", function () {
    // задержка 1 сек
    setTimeout(function () {
      bsaTag.style.borderColor = ""; //  исходный цвет
      bsaTag.style.backgroundColor = "";
    }, 1000);
  });
}

// Получение массива из контейнера-ФОРМЫ
function getArrayFromContainer(containerId) {
  let container = document.getElementById(containerId);
  const result = [];

  // полуучаем все элементы
  const containers = container.querySelectorAll("*");

  // проходим ВСЕ элементы внутри ОДИН РАЗ
  for (container of containers) {
    // получаем САМИ контейнеры по условию
    if (
      container.tagName === "INPUT" ||
      container.tagName === "SELECT" ||
      container.tagName === "TEXTAREA"
    ) {
      if (container.name === "gender") {
        // пол не обрабатывааем
        continue;
      }

      let name = container.name;
      let value = container.value;

      // если пустое имя, значит это продолжение предыдущего input
      if (!name) {
        // получаем предыдущее значение name
        name = result[result.length - 1][0];
        // получаем предыдущее значение value
        const lastValue = result[result.length - 1][1];
        value = `${lastValue.trim()}, ${value.trim()}`; // добавялем текущее значение
        result.pop(); // удаляем последний элемент
      }
      // если это дата
      if (container.type === "date") {
        value = formatDateToHumanView(container.value); // меняем в человеческий формат
      }

      result.push([name, value]);
    }

    // совпадение по классу subtext.
    if (container.classList.contains("subtext")) {
      const subtext = container.textContent;
      // получаем последнй элемент
      let value = result[result.length - 1][1];

      // добавляем доп текст
      value = `${value.trim()} ${subtext.trim()}`;

      // меняем значение второго элемента в последнем массиве
      result[result.length - 1][1] = value;

      continue; // на следующую итерацию
    }
    // совпадение по классу заголовка form-heading
    if (container.classList.contains("form-heading")) {
      const headingText = container.textContent;

      result.push(["heading", headingText]);
    }

    // совпадение по разделителю
    if (container.classList.contains("line-spacer")) {
      const spacer = "-".repeat(50);

      result.push(["spacer", spacer]);
    }
  }

  return result;
}

// Форматирование массива в строку
function getStringFromArray(array) {
  let result = "";
  const exp = /[.]/; // регулярное выражение

  array.forEach(([name, value]) => {
    // если не разделитель и не заголовок, значит обычный текст
    if (!(name == "spacer") && !(name == "heading")) {
      let line = "";
      line += name.trim() + ":  " + value.trim();

      const endLine = line[line.length - 1]; // конец строки
      // проверяем наличие в строке выражения exp
      if (!exp.test(endLine)) {
        line += "."; // добавляем точку
      }
      result += line + "\n";
    }
    // разделитель
    if (name == "spacer") {
      result += "-".repeat(100) + "\n";
    }
    // заголовок
    if (name == "heading") {
      result += "***" + value.trim() + "\n";
    }
  });

  return result;
}

// Форматирование даты в человеческий вид: DD.MM.YYYY
function formatDateToHumanView(date) {
  if (!date) {
    return "";
  }

  date = date.split("-");
  const day = date[2];
  const month = date[1];
  const year = date[0];

  const result = `${day}.${month}.${year}`;
  //DEBUG
  //console.log(result);

  return result;
}

// Форматирование строки в текст
function getTextFromString(str) {
  //разбивает строку на массив подстрок по "\n"
  const lines = str.split("\n");

  const spacer = "----"; // разделитель

  // счетчик разделителей
  let spacerConnter = 0;

  let result = "";

  // Обрабатываем каждую строку
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (!line) continue; // пустая строка - пропускаем

    // это заголовок
    if (line.startsWith("***")) {
      const header = line.replace("***", " "); // убираем лишнее
      result += "\n" + header + "\n";
      continue; // на следующую итерацию
    }

    // считаем разделители
    if (line.includes(spacer)) {
      spacerConnter++;
      result += line.trim() + "\n";
      continue;
    }

    // Форматирование между разделитлями
    switch (spacerConnter) {
      case 2:
        result += line.trim() + "\n"; // обработка текста после второго разделителя
        break;

      case 3:
        if (line.length > 100) {
          const tmpLine = line.split(" "); // разеделям на массив по пробелу
          const idxCenter = parseInt(tmpLine.length / 2); // половина массива

          for (let idx = 0; idx < tmpLine.length; idx++) {
            result += tmpLine[idx] + " "; // добвляем по одному слову
            // первая половина
            if (idx == idxCenter - 1) {
              result += "\n";
            }
            // вторая половина
            if (idx == tmpLine.length - 1) {
              result += "\n";
            }
          }
        } else {
          if (line.length < 20) {
            result += line.trim() + " ";
          } else {
            result += line + "\n";
          }
        }
        break;

      default:
        result += line.trim() + "\n";
    }
  }

  return result;
}

// Копирование в буфер-обмена
function copyToClipboard(text) {
  //Clipboard API
  try {
    navigator.clipboard.writeText(text);
    console.log("Text copied!");
    window.alert("Текст скопирован в буфер обмена!");
  } catch (err) {
    console.error("Failed to copy:", err);
  }
}

// сохранение в файл
function saveToFile(data, filename = "data") {
  const timeStamp = new Date().getTime();
  //  Упаковываем данные в Blob-контейнер
  const blob = new Blob([data], { type: "text/plain" });

  //  временная ссылка на Blob
  const url = URL.createObjectURL(blob);

  // Создаем виртуальную ссылку и кликаем по ней
  const link = document.createElement("a");
  link.href = url;
  link.download = filename + timeStamp + ".txt";
  link.click();

  //очищаеим память
  URL.revokeObjectURL(url);
}

// Рапечатка массива
function printArray(array) {
  array.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
// поиск по HTML тексту
function handleSearch(event) {
  event.preventDefault(); // ОСТАНОВИТЬ отправку формы, чтобы не перезагружалась страница
  // Получаем значение из input
  const searchInput = event.target.querySelector('input[type="search"]');
  const searchText = searchInput.value;

  if (searchText.trim()) {
    if (window.find) {
      window.find(searchText); //  браузерный поиск
    } else {
      alert("Search not supported!");
    }
  }
}

// Сохранение в localStorage
function saveFormStorage(formId) {
  const form = document.getElementById(formId);
  const elementsArr = Array.from(form.elements); // массив

  const formData = {};

  elementsArr.forEach((element) => {
    //  есть name
    if (element.name) {
      // radio выбранное значение
      if (element.type === "radio") {
        if (element.checked) {
          formData[element.name] = element.value;
        }
      }
      // Для остальных полей -значение
      else {
        formData[element.name] = element.value;        
      }
    }
  });

  // Сохраняем в localStorage
  localStorage.setItem("formData", JSON.stringify(formData)); //в JSON
  alert("Данные сохранены!");
}

// загрузка из localStorage
function loadFormFromStorage(formId) {
  const form = document.getElementById(formId);
  const savedData = localStorage.getItem("formData");

  if (!savedData) return; // пусто!

  const formData = JSON.parse(savedData);
  //DEBUG!
  //console.log(formData);
  const elementsArr = Array.from(form.elements);

  elementsArr.forEach((element) => {
    if (element.name && formData.hasOwnProperty(element.name)) {
      if (element.type === "radio") {
        // Для radio нужно установить checked, если значение совпадает
        element.checked = element.value === formData[element.name];
      } else {
        element.value = formData[element.name];
      }
    }
  });
}

// валидцаия формы
function validateForm(formId) {
  const form = document.getElementById(formId);

  if (form.checkValidity()) {
    // все required поля заполнены
    console.log("Форма валидна");
    return true;
  } else {
    // Форма невалидна
    form.reportValidity();
    console.log("Заполните обязательные поля");
    return false;
  }
}

// полная дата с месяцами
function getHumanablerDate() {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const today = new Date();
  const result = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}, ${days[today.getDay()]}`;
  //console.log(`Сегодня: ${result}`);
  return result
}

// Очистка localStorage
function clearLocalStorage() {
  alert("Хранилище очищено!");
  localStorage.clear();
  location.reload(); //перезагрузка страницы
}

/* Автозапуск при загрузке DOM */
function onLoadPage() {
  pageBuilder();
  const date = `Сегодня: ${getHumanablerDate()}`;
  addTexInElement("upper-header-text", date);
  addCurrentYearInSpan("current-year");
  addElementToMainMenu("menu-ul", "dropdown-item", mapElements);
  loadFormFromStorage("main-form"); // Загрузка из localStorage  
}
// Обработчки события загрузки всего DOM - DOMContentLoaded
document.addEventListener("DOMContentLoaded", onLoadPage);
