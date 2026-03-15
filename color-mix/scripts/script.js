import { getFullColorSpace, isPolarColorSpace } from "./utils.js";

const mixerPreview = document.querySelector(".mixer__preview");

const firstColorPalette = document.querySelector("#palette-1");
const secondColorPalette = document.querySelector("#palette-2");
const firstColorFractionRange = document.querySelector("#fraction-1");
const firstColorFractionValue = document.querySelector("#fraction-value-1");
const secondColorFractionRange = document.querySelector("#fraction-2");
const secondColorFractionValue = document.querySelector("#fraction-value-2");
const colorSpaceSelect = document.querySelector("#color-space");
const interpolationMethodSelect = document.querySelector("#interpolation");

let colorSpace = colorSpaceSelect.value;
let interpolationMethod = interpolationMethodSelect.value;

function applyColorSpace() {
  const normalizedColorSpace = getFullColorSpace(
    colorSpace,
    interpolationMethod,
  );

  mixerPreview.style.setProperty("--color-space", normalizedColorSpace);
}

firstColorPalette.addEventListener("input", (e) => {
  const value = e.target.value;
  mixerPreview.style.setProperty("--first-color", value);
});

secondColorPalette.addEventListener("input", (e) => {
  const value = e.target.value;
  mixerPreview.style.setProperty("--second-color", value);
});

firstColorFractionRange.addEventListener("input", (e) => {
  const value = e.target.value + "%";
  mixerPreview.style.setProperty("--first-color-fraction", value);
  firstColorFractionValue.textContent = value;
});

secondColorFractionRange.addEventListener("input", (e) => {
  const value = e.target.value + "%";
  mixerPreview.style.setProperty("--second-color-fraction", value);
  secondColorFractionValue.textContent = value;
});

colorSpaceSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  const isPolar = isPolarColorSpace(value);

  colorSpace = value;
  applyColorSpace();

  if (isPolar) interpolationMethodSelect.removeAttribute("disabled");
  else interpolationMethodSelect.setAttribute("disabled", "true");
});

interpolationMethodSelect.addEventListener("change", (e) => {
  const value = e.target.value;

  interpolationMethod = value;
  applyColorSpace();
});
