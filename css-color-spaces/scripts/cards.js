import {
  createColorCard,
  createColorChannelRangeInput,
  openColorSpaceDialog,
} from "./utils.js";

const DEFAULT_RGB_COLOR = [86, 42, 82, 1];
const DEFAULT_HSL_COLOR = [260, 80, 80, 1];
const DEFAULT_HWB_COLOR = [348, 18, 5, 1];
const DEFAULT_LAB_COLOR = [65, 35, -80, 1];
const DEFAULT_LCH_COLOR = [80, 95, 80, 1];
const DEFAULT_OKLAB_COLOR = [0.68, -0.31, 0.11, 1];
const DEFAULT_OKLCH_COLOR = [0.6, 0.3, 178, 1];

const RGB_IMAGE = "./images/rgb_color_space.png";
const HSL_IMAGE = "./images/hsl_color_space.png";
const HWB_IMAGE = "./images/hwb_color_space.png";
const LAB_IMAGE = "./images/lab_color_space.png";
const LCH_IMAGE = "./images/lch_color_space.png";

export function createRGBCard() {
  const color = [...DEFAULT_RGB_COLOR];

  function getColorValue() {
    return `rgb(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "RGB",
    colorValue: getColorLabel(),
  });

  const rChannel = createColorChannelRangeInput({
    label: "R",
    tip: "Red (0 - 255)",
    value: color[0],
    min: 0,
    max: 255,
    step: 1,
  });

  const gChannel = createColorChannelRangeInput({
    label: "G",
    tip: "Green (0 - 255)",
    value: color[1],
    min: 0,
    max: 255,
    step: 1,
  });

  const bChannel = createColorChannelRangeInput({
    label: "B",
    tip: "Blue (0 - 255)",
    value: color[2],
    min: 0,
    max: 255,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  rChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();

    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  gChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  bChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(RGB_IMAGE, "Test");
  });

  parameters.appendChild(rChannel);
  parameters.appendChild(gChannel);
  parameters.appendChild(bChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createHSLCard() {
  const color = [...DEFAULT_HSL_COLOR];

  function getColorValue() {
    return `hsl(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "HSL",
    colorValue: getColorLabel(),
  });

  const hChannel = createColorChannelRangeInput({
    label: "H",
    tip: "Hue (0 - 360)",
    value: color[0],
    min: 0,
    max: 360,
    step: 1,
  });

  const sChannel = createColorChannelRangeInput({
    label: "S",
    tip: "Saturation (0 - 100)",
    value: color[1],
    min: 0,
    max: 100,
    step: 1,
  });

  const lChannel = createColorChannelRangeInput({
    label: "L",
    tip: "Lightness (0 - 100)",
    value: color[2],
    min: 0,
    max: 100,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  hChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;

    output.textContent = getColorLabel();
  });

  sChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  lChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(HSL_IMAGE, "Test");
  });

  parameters.appendChild(hChannel);
  parameters.appendChild(sChannel);
  parameters.appendChild(lChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createHWBCard() {
  const color = [...DEFAULT_HWB_COLOR];

  function getColorValue() {
    return `hwb(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "HWB",
    colorValue: getColorLabel(),
  });

  const hChannel = createColorChannelRangeInput({
    label: "H",
    tip: "Hue (0 - 360)",
    value: color[0],
    min: 0,
    max: 360,
    step: 1,
  });

  const wChannel = createColorChannelRangeInput({
    label: "W",
    tip: "White (0 - 100)",
    value: color[1],
    min: 0,
    max: 100,
    step: 1,
  });

  const bChannel = createColorChannelRangeInput({
    label: "B",
    tip: "Black (0 - 100)",
    value: color[2],
    min: 0,
    max: 100,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  hChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;

    output.textContent = getColorLabel();
  });

  wChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  bChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(HWB_IMAGE, "Test");
  });

  parameters.appendChild(hChannel);
  parameters.appendChild(wChannel);
  parameters.appendChild(bChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createLABCard() {
  const color = [...DEFAULT_LAB_COLOR];

  function getColorValue() {
    return `lab(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "LAB",
    colorValue: getColorLabel(),
  });

  const lChannel = createColorChannelRangeInput({
    label: "L",
    tip: "Lightness (0 - 100)",
    value: color[0],
    min: 0,
    max: 100,
    step: 1,
  });

  const aChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Диапазон от зеленого до красного (-125 - 125)",
    value: color[1],
    min: -125,
    max: 125,
    step: 1,
  });

  const bChannel = createColorChannelRangeInput({
    label: "B",
    tip: "Диапазон от синего до желтого (-125 - 125)",
    value: color[2],
    min: -125,
    max: 125,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  lChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  aChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  bChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(LAB_IMAGE, "Test");
  });

  parameters.appendChild(lChannel);
  parameters.appendChild(aChannel);
  parameters.appendChild(bChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createLCHCard() {
  const color = [...DEFAULT_LCH_COLOR];

  function getColorValue() {
    return `lch(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "LCH",
    colorValue: getColorLabel(),
  });

  const lChannel = createColorChannelRangeInput({
    label: "L",
    tip: "Lightness (0 - 100)",
    value: color[0],
    min: 0,
    max: 100,
    step: 1,
  });

  const cChannel = createColorChannelRangeInput({
    label: "C",
    tip: "Chroma (0 - 100)",
    value: color[1],
    min: 0,
    max: 100,
    step: 1,
  });

  const hChannel = createColorChannelRangeInput({
    label: "H",
    tip: "Hue (0 - 360)",
    value: color[2],
    min: 0,
    max: 360,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  lChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  cChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  hChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(LCH_IMAGE, "Test");
  });

  parameters.appendChild(lChannel);
  parameters.appendChild(cChannel);
  parameters.appendChild(hChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createOKLABCard() {
  const color = [...DEFAULT_OKLAB_COLOR];

  function getColorValue() {
    return `oklab(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "OKLAB",
    colorValue: getColorLabel(),
  });

  const lChannel = createColorChannelRangeInput({
    label: "L",
    tip: "Lightness (0 - 1)",
    value: color[0],
    min: 0,
    max: 1,
    step: 0.01,
  });

  const aChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Диапазон от зеленого до красного (-0.4 - 0.4)",
    value: color[1],
    min: -0.4,
    max: 0.4,
    step: 0.01,
  });

  const bChannel = createColorChannelRangeInput({
    label: "B",
    tip: "Диапазон от синего до желтого (-0.4 - 0.4)",
    value: color[2],
    min: -0.4,
    max: 0.4,
    step: 0.01,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  lChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  aChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  bChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(LAB_IMAGE, "Test");
  });

  parameters.appendChild(lChannel);
  parameters.appendChild(aChannel);
  parameters.appendChild(bChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createOKLCHCard() {
  const color = [...DEFAULT_OKLCH_COLOR];

  function getColorValue() {
    return `oklch(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  function getColorLabel() {
    return `(${color[0]} ${color[1]} ${color[2]} / ${color[3]})`;
  }

  const { root, output, preview, parameters, button } = createColorCard({
    colorSpace: "OKLCH",
    colorValue: getColorLabel(),
  });

  const lChannel = createColorChannelRangeInput({
    label: "L",
    tip: "Lightness (0 - 1)",
    value: color[0],
    min: 0,
    max: 1,
    step: 0.01,
  });

  const cChannel = createColorChannelRangeInput({
    label: "C",
    tip: "Chroma (0 - 0.4)",
    value: color[1],
    min: 0,
    max: 0.4,
    step: 0.01,
  });

  const hChannel = createColorChannelRangeInput({
    label: "H",
    tip: "Hue (0 - 360)",
    value: color[2],
    min: 0,
    max: 360,
    step: 1,
  });

  const afChannel = createColorChannelRangeInput({
    label: "A",
    tip: "Alpha (0 - 1)",
    value: color[3],
    min: 0,
    max: 1,
    step: 0.01,
  });

  lChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[0] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  cChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[1] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  hChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[2] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  afChannel.addEventListener("input", (e) => {
    const value = e.target.value;
    color[3] = value;

    const newColorValue = getColorValue();
    preview.style.backgroundColor = newColorValue;
    output.textContent = getColorLabel();
  });

  button.addEventListener("click", () => {
    openColorSpaceDialog(LCH_IMAGE, "Test");
  });

  parameters.appendChild(lChannel);
  parameters.appendChild(cChannel);
  parameters.appendChild(hChannel);
  parameters.appendChild(afChannel);

  return root;
}

export function createContrastCard() {
  function getContrastColor(color) {
    return `contrast-color(${color})`;
  }

  const card = createRGBCard();

  const preview = card.querySelector(".color-card__preview");
  const info = card.querySelector(".color-card__info");
  const graphButton = card.querySelector(".color-card__graph");
  const channels = card.querySelectorAll(".color-card__parameter");

  info.style.color = getContrastColor(preview.style.backgroundColor);

  channels.forEach((channel) => {
    channel.addEventListener("input", () => {
      const newColor = preview.style.backgroundColor;
      info.style.color = getContrastColor(newColor);
    });
  });

  graphButton.remove();

  return card;
}
