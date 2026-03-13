import {
  createRGBCard,
  createHSLCard,
  createHWBCard,
  createLABCard,
  createLCHCard,
  createOKLABCard,
  createOKLCHCard,
  createContrastCard,
} from "./cards.js";

const cardsList = document.querySelector(".colors__list");
const constrastList = document.querySelector(".colors__contrast");

function init() {
  const rgbCard = createRGBCard();
  const hslCard = createHSLCard();
  const hwbCard = createHWBCard();
  const labCard = createLABCard();
  const lchCard = createLCHCard();
  const oklabCard = createOKLABCard();
  const oklchCard = createOKLCHCard();

  cardsList.appendChild(rgbCard);
  cardsList.appendChild(hslCard);
  cardsList.appendChild(hwbCard);
  cardsList.appendChild(labCard);
  cardsList.appendChild(lchCard);
  cardsList.appendChild(oklabCard);
  cardsList.appendChild(oklchCard);

  const contrastCard = createContrastCard();

  constrastList.appendChild(contrastCard);
}

init();
