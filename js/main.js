/* Фильтр на мобильных устройствах */
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

// клик по кнопке для скрытия/показа фильтра и изменение иконки
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon--active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

/* Показать еще три карточки */
const btnShowMoreCards = document.querySelector(".btn-more");
const cardLinkHidden = document.querySelectorAll(".card-link--hidden");

// клик по кнопке и показ трех скрытых карточек
btnShowMoreCards.addEventListener("click", function () {
  cardLinkHidden.forEach(function (card) {
    card.classList.remove("card-link--hidden");
  });
});

/* Показать/скрыть контент внутри виджетов */

const widgets = document.querySelectorAll(".widget");

// находим все виджеты на странице
widgets.forEach(function (widget) {
  // слушаем клик внутри виджета
  widget.addEventListener("click", function (event) {
    // если клик по заголовку, то скрываем/показываем тело виджета
    if (event.target.classList.contains("widget__title")) {
      event.target.classList.toggle("widget__title--active");
      event.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

/* Location - кнопка Любая */

const checkBoxAny = document.querySelector("#location-05");
const topLocationCheckboxes = document.querySelectorAll(
  "[data-location-param]"
);

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener("change", function (e) {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
  }
});

// отключаем кнопку Любая, при клике по других параметров
topLocationCheckboxes.forEach(function (item) {
  item.addEventListener("change", function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

/* показать еще 3 доп опции с чекбоксами в фильтре */

const showMoreOptons = document.querySelector(".widget__show-hidden");
const hiddenCheckboxes = document.querySelectorAll(".checkbox--hidden");
showMoreOptons.onclick = function () {
  // если блоки были скрыты - значит показываем
  if (showMoreOptons.dataset.options == "hidden") {
    hiddenCheckboxes.forEach(function (item) {
      item.style.display = "block";
    });
    showMoreOptons.innerText = "Скрыть дополнительные опции";
    showMoreOptons.dataset.options = "visible";
    // если блоки были видны - скрываем
  } else if (showMoreOptons.dataset.options == "visible") {
    hiddenCheckboxes.forEach(function (item) {
      item.style.display = "none";
    });
    showMoreOptons.innerText = "Показать ещё";
    showMoreOptons.dataset.options = "hidden";
  }
};
