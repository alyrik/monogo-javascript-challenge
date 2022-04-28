export function sortByPrice(arr) {
  return arr.sort((prev, next) => prev.price - next.price);
}
