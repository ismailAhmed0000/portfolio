export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}
