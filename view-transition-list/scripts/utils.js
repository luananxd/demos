export function generateId() {
  const timestamp = Date.now();
  const random = Math.random();

  return "card-" + Math.round(timestamp * random).toString();
}

export function getRandomNumberFromRange(min, max) {
  const range = max - min;
  const random = Math.random();
  return Math.round(min + range * random);
}

export function getRandomColor() {
  const ACCEPTED_COLORS = [
    "LightSkyBlue",
    "DodgerBlue",
    "RoyalBlue",
    "SkyBlue",
    "SteelBlue",
    "CornFlowerBlue",
  ];

  const randomIndex = getRandomNumberFromRange(0, ACCEPTED_COLORS.length - 1);
  return ACCEPTED_COLORS[randomIndex];
}
