import { groupProducts } from './helpers/groupProducts.mjs';
import { applySelectedFilters } from './helpers/applyFilters.mjs';
import { pipe } from './helpers/pipe.mjs';
import { sortByPrice } from './helpers/sortByPrice.mjs';
import { getLowestAndHighestPriceMultiplication } from './helpers/getLowestAndHighestPriceMultiplication.mjs';
import { applyPriceThreshold } from './helpers/applyPriceThreshold.mjs';
import { getArrWithPairwiseAddition } from './helpers/getArrWithPairwiseAddition.mjs';
import { loadData } from './helpers/loadData.mjs';

const DATA_URL = 'https://www.monogo.pl/competition/input.txt';
const PRICE_THRESHOLD = 200;
const BUILDING_NUMBER = 14;
const COMPANY_NAME = 'Monogo';

process.on('uncaughtException', (err) => {
  console.error('Please check your internet connection and try again\n', err);
  process.exit(1);
});

const data = await loadData(DATA_URL);

const dataIndex = {
  colors: groupProducts(data.colors),
  sizes: groupProducts(data.sizes),
};
const firstResult = pipe(
  applySelectedFilters(data.selectedFilters, dataIndex),
  applyPriceThreshold.bind(null, data.products, PRICE_THRESHOLD),
  sortByPrice,
  getLowestAndHighestPriceMultiplication,
);
const secondResult = getArrWithPairwiseAddition(firstResult);
const finalResult =
  secondResult.indexOf(BUILDING_NUMBER) * firstResult * COMPANY_NAME.length;

console.log(finalResult);
