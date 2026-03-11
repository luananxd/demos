import { getRandomColor, generateId } from "./utils.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const ACTIVE_CARD_ID = "active-card";
const START_CARD_COUNT = 3;

const addColorCardButton = document.querySelector(".colors__add");
const colorsList = document.querySelector(".colors__list");

function createSVGIcon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  const use = document.createElementNS(SVG_NS, "use");
  const link = `../shared/icons/sprite.svg#${name}`;

  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  use.setAttribute("href", link);

  svg.append(use);

  return svg;
}

function createColorCard(color) {
  const wrapper = document.createElement("li");
  const button = document.createElement("button");
  const icon = createSVGIcon("delete");

  wrapper.classList.add("colors__item");
  wrapper.style.backgroundColor = color;

  button.classList.add("colors__delete");
  button.setAttribute("type", "button");

  button.append(icon);
  wrapper.append(button);

  button.addEventListener("click", () => {
    wrapper.style.viewTransitionName = ACTIVE_CARD_ID;

    document.startViewTransition(() => {
      wrapper.remove();
    });
  });

  return wrapper;
}

async function addCardToList() {
  const id = generateId();
  const color = getRandomColor();
  const colorCard = createColorCard(color);

  colorCard.style.viewTransitionName = ACTIVE_CARD_ID;

  const transition = document.startViewTransition(() => {
    colorsList.appendChild(colorCard);
  });

  await transition.ready;
  colorCard.style.viewTransitionName = id;
}

function createInitialCards() {
  const colors = new Array(START_CARD_COUNT).fill(null).map(getRandomColor);

  colors.forEach((color) => {
    const id = generateId();
    const card = createColorCard(color);

    card.style.viewTransitionName = id;

    colorsList.appendChild(card);
  });
}

createInitialCards();

addColorCardButton.addEventListener("click", addCardToList);
