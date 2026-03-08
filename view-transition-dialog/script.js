/*
  Dialog.show() - Открывает элемент в режиме диалога, т.е. все лежащие
  под ним элементы доступны для взаимодействия

  Dialog.showModal() - Открываеь элемент в режиме модального окна. В этом
  случае нижележащие элементы недоступны, появляется ::backdrop

  Диалог может быть открыт по-умолчанию с помощью атрибута open
*/

/*
  View Transition API позволяет анимировать переход между двумя состояниями
  DOM-дерева.

  Для запуска перехода используется метод document.startViewTransition(),
  который принимает коллбэк. Внутри коллбэка необходимо произвести изменение
  DOM, чтобы увидеть сам переход.

  Для трансформации одного DOM-узла в другой, необходимо использовать свойство
  viewTransitionName в JS или view-transition-name в CSS. Оно указывает на связь
  двух узлов и на необходимость анимировать переход между ними. Узла должно быть
  ровно 2, иначе переход будет проигнорирован.

  Внутри CSS файлов мы можем задавать дополнительные стили для переходов с помощью
  псевдоэлементов ::view-transition-group, ::view-transition, ::view-transition-group,
  ::view-transition-old и ::view-transition-new

  Помимо этого существуют типы переходов, которые определяются самостоятельно пользователем.
  Единственный встроенный тип - navigation.
*/

const VIEW_TRANSITION_NAME = "fullscreen";

const galleryContainer = document.querySelector(".gallery");

const fullscreenDialog = document.querySelector(".gallery__fullscreen");
const fullscreenImage = fullscreenDialog.querySelector(".gallery__image");
const fullscreenButton = fullscreenDialog.querySelector(".gallery__button");

let currentGalleryCard = null;
let currentGalleryImage = null;
let currentGalleryButton = null;

function setCurrentCardElements(card) {
  currentGalleryCard = card;
  currentGalleryImage = card.querySelector(".gallery__image");
  currentGalleryButton = card.querySelector(".gallery__button");
}

function copyDataToFullscreen() {
  const currentCardImagePath = currentGalleryImage.src;
  fullscreenImage.src = currentCardImagePath;
}

function setName(type, active) {
  if (type === "dialog") {
    return (fullscreenDialog.style.viewTransitionName = active
      ? VIEW_TRANSITION_NAME
      : "");
  }

  if (type === "card") {
    return (currentGalleryCard.style.viewTransitionName = active
      ? VIEW_TRANSITION_NAME
      : "");
  }
}

function openFullScreenDialog(event) {
  const target = event.target;
  const isFullScreenButton =
    !!target.closest(".gallery__button") &&
    !target.closest(".gallery__fullscreen");

  if (!isFullScreenButton) return;

  const card = target.closest(".gallery__item");
  setCurrentCardElements(card);
  copyDataToFullscreen();

  setName("card", true);

  document.startViewTransition(() => {
    setName("card", false);
    setName("dialog", true);
    fullscreenDialog.showModal();
  });
}

async function closeFullScreenDialog(event) {
  if (!currentGalleryCard) return;

  event.preventDefault();
  setName("dialog", true);

  const transition = document.startViewTransition(() => {
    setName("dialog", false);
    setName("card", true);

    fullscreenDialog.close();
  });

  await transition.finished;
  setName("card", false);
}

galleryContainer.addEventListener("click", openFullScreenDialog);
fullscreenButton.addEventListener("click", closeFullScreenDialog);
fullscreenDialog.addEventListener("cancel", closeFullScreenDialog);
