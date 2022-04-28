export function getLowestAndHighestPriceMultiplication(arr) {
  return Math.round(arr.at(0).price * arr.at(-1).price);
}
