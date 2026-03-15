const POLAR_COLOR_SPACES = ["hsl", "hwb", "lch", "oklch"];

export function isPolarColorSpace(space) {
  return POLAR_COLOR_SPACES.includes(space);
}

export function getFullColorSpace(
  space = "srgb",
  interpolaton = "shorter hue",
) {
  if (isPolarColorSpace(space)) return space + " " + interpolaton;
  else return space;
}
