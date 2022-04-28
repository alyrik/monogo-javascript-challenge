export function applyPriceThreshold(products, priceThreshold, productIds) {
  return products.filter(
    ({ id, price }) => productIds.has(Number(id)) && price > priceThreshold,
  );
}
