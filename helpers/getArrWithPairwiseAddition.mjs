export function getArrWithPairwiseAddition(num) {
  return Array.from(`${num}`, Number).reduce((result, int, index, arr) => {
    if ((index + 1) % 2 !== 0) return result;
    return [...result, int + arr[index - 1]];
  }, []);
}
