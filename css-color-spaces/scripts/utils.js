const dialog = document.querySelector(".colors__dialog");
const dialogClose = dialog.querySelector(".color-space__close");

export function createColorChannelRangeInput({
  value,
  min,
  max,
  step,
  label,
  tip,
}) {
  const template = document.querySelector("#color-slider");
  const templateContent = template.content.firstElementChild;
  const root = templateContent.cloneNode(true);

  const caption = root.querySelector(".color-card__channel");
  const range = root.querySelector(".color-card__range");

  caption.textContent = label.toUpperCase();
  caption.setAttribute("title", tip);

  range.setAttribute("value", String(value ?? 0));
  range.setAttribute("min", String(min ?? 0));
  range.setAttribute("max", String(max ?? 1));
  range.setAttribute("step", String(step ?? 1));

  return root;
}

export function createColorCard({ colorValue, colorSpace }) {
  const template = document.querySelector("#color-card");
  const templateContent = template.content.firstElementChild;
  const root = templateContent.cloneNode(true);

  const preview = root.querySelector(".color-card__preview");
  const parameters = root.querySelector(".color-card__parameters");
  const type = root.querySelector(".color-card__info span");
  const output = root.querySelector(".color-card__info output");
  const button = root.querySelector(".color-card__graph");

  type.textContent = colorSpace + " ";
  output.textContent = colorValue;
  preview.style.background = colorSpace.toLowerCase() + colorValue;

  return {
    root,
    output,
    preview,
    parameters,
    button,
  };
}

export function openColorSpaceDialog(image, alt) {
  const imageElement = dialog.querySelector(".color-space__image");
  const blurElement = dialog.querySelector(".color-space__blur");

  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", alt);

  blurElement.style.backgroundImage = `url(${image})`;
  dialog.show();
}

dialogClose.addEventListener("click", () => {
  dialog.close();
});
