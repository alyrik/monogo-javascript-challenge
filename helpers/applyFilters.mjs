import { getIntersectionSet } from './getIntersectionSet.mjs';

export function applySelectedFilters(selectedFilters, dataIndex) {
  return Object.entries(selectedFilters).reduce(
    (result, [filterName, filterValues], index) => {
      const filteredByValue = filterValues.reduce(
        (filterValuesResult, selectedFilterValue) => [
          ...filterValuesResult,
          ...dataIndex[filterName].get(selectedFilterValue),
        ],
        [],
      );

      return index === 0
        ? filteredByValue
        : getIntersectionSet(result, new Set(filteredByValue));
    },
    new Set(),
  );
}
