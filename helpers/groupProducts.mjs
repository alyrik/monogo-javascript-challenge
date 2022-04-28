export function groupProducts(items) {
  return items.reduce(
    (result, { value, id }) =>
      result.set(
        value,
        result.get(value)?.add(Number(id)) ?? new Set([Number(id)]),
      ),
    new Map(),
  );
}
