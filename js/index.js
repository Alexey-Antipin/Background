const background = document.getElementById("checkbox-background");
const boxRound = document.getElementById("box-round");

//Обработчик.
background.addEventListener("click", function () {
  let theme = window.localStorage.getItem("theme");

  //Меняем тему.
  if (theme == "white") {
    Storage("black");
  } else {
    Storage("white");
  }
});

function Storage(Colour, create) {
  //Получение доступа к :root.
  let root = document.documentElement;

  //Создание хранилища.
  if (!create) {
    window.localStorage.setItem("theme", Colour);
  }

  //Получение хранилища.
  let theme = window.localStorage.getItem("theme");

  //Анимация кнопки.
  if (theme == "white") {
    boxRound.classList.add("box__round--colour");
  } else {
    boxRound.classList.remove("box__round--colour");
  }

  //Изменияем тему.
  root.style.setProperty("--theme", theme);
}

//Вызываем при открытии страницы.
Storage("black", true);

////////////////////////////////////

//Area.
const area = document.getElementById("area");
const btn = document.querySelector("button");

//Обработчик.
area.addEventListener("keyup", function () {
  let text = window.localStorage.getItem("text");

  if (area.value !== text) {
    window.localStorage.setItem("text", area.value);
  }
});

//Удаление текста.
btn.addEventListener("click", () => {
  window.localStorage.removeItem("text");
  area.value = "";
});

//Вызываем при открытии страницы.
function loadText() {
  let text = window.localStorage.getItem("text");
  area.value = text;
}

loadText();
