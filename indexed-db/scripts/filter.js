const searchField = document.querySelector('[data-el="search"]');
const minPriceField = document.querySelector('[data-el="min-price"]');
const maxPriceField = document.querySelector('[data-el="max-price"]');

function handleMinFieldUpdate(event) {
  const minFieldValue = Number(event.target.value);
  const maxFieldValue = Number(maxPriceField.value);

  if (!minFieldValue) {
    minPriceField.setAttribute("value", "");
  }

  if (maxFieldValue && minFieldValue > maxFieldValue) {
    minPriceField.setAttribute("value", minFieldValue);
  }

  maxPriceField.setAttribute("min", minFieldValue);
}

minPriceField.addEventListener("input", handleMinFieldUpdate);
minPriceField.addEventListener("change", handleMinFieldUpdate);
