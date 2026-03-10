/* ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ */
const mapElements = new Map([
  ["index.html", "Главная"],
  ["#", "Осмотр"],
  ["#", "Протокол ЦВК"],
  ["test1.html", "Test1"],
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

// вставка года в Span
function addCurrentYearInSpan(targetTagId) {
  targetTag = document.getElementById(targetTagId);
  const date = getCurrentYear();
  //targetTag.textContent = new Date().getFullYear();
  targetTag.innerText = date;
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
function addLabelInput(targetTagId, name, value = "", subtext = "") {
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
function addLabelDatalist(targetTagId, name, options = [], subtext = "") {
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
  // DEBUG!!!!!
  input.value = options[0];

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
function addTextarea(targetTag, name, placeholder = "") {
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
  textarea.value = "ИБС. СН 2 ФК. ГБ 3ст, 4ст, р4.";

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

// Получение данных из контейнера-ФОРМЫ
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

      if (container.name  === "gender"){
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

// Получение полей формы
/*
function getArrayFromForm(formId) {
  const form = document.getElementById(formId);

  //единцы измерения
  const units = new Map([
    ["Рост", "см"],
    ["Масса", "кг"],
    ["ППТ", "м²"],
    ["АД", "mmHg"],
    ["ЧД", "в мин"],
    ["ЧСС", "в мин"],
    ["SpO2", "%"],
  ]);

  // Собираем все значения в объект
  const formData = {};
  // преобразование в массив
  const elementsArr = Array.from(form.elements);
  console.log(form);
  // Перебираем все элементы
  elementsArr.forEach((element, index) => {
    // временная переменная для значения
    let currentVal = element.value;

    console.log();

    let nameArr = element.name.trim();
    let unit = units.get(nameArr); // получаем значение по ключу

    // имя совпадает с ключом из мапы
    if (nameArr && unit) {
      currentVal = `${currentVal} ${unit}`; // собираем с единицами измерения
    }

    if (!element.name) {
      // получаем предыдущий элемент
      let prevElement = elementsArr[index - 1];

      //значение предыдущего элемента
      let prevVal = prevElement.value;
      //имя предыдущего элемента
      let pervName = prevElement.name;

      // правим текущее значение (предыдущее + текущее)
      currentVal = `${prevVal} ${currentVal}`;

      formData[pervName] = currentVal;
    } else {
      formData[element.name] = currentVal;
    }

    // console.log(`${element.name.trim()}: ${val || "(no units!)"}`);

    //if (element.name) {

    //console.log(`${element.name}: ${element.value} (${element.tagName})`);
    //console.log(`${element.name}: ${element.value}`);
    //}
  });

  //console.log(formData);

  const formArr = Object.entries(formData);
}
*/

// Форматирование массива в строку
function textFromArray(array) {
  let result = "";
  array.forEach(([name, value]) => {
    // если не разделитель и не заголовок
    if (!(name == "spacer") && !(name == "heading"))
      result += name.trim() + ":  " + value.trim() + "\n";

    // разделитель
    if (name == "spacer") {
      result += "-".repeat(100) + "\n\n";
    }
    // заголовок
    if (name == "heading") {
      result += value.trim() + "\n";
    }
  });
  console.log(result);
}

// Рапечатка массива
function printArray(array) {
  array.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
/* Автозапуск при загрузке DOM */
function onLoadPage() {
  pageBuilder();
  startEventListenFocusBsa("bsa-result-input");

  const formArray = getArrayFromContainer("main-form");
  //printArray(formArray);
  textFromArray(formArray);
}
// Обработчки события загрузки всего DOM - DOMContentLoaded
document.addEventListener("DOMContentLoaded", onLoadPage);
