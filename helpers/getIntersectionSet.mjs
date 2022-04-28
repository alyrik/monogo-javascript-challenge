export function getIntersectionSet(baseSet, nextSet) {
  return new Set([...baseSet].filter((val) => nextSet.has(val)));
}
