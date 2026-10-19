const products = require('../../src/data/products');
const {filterByCategory} = require('../../src/catalog');

const getProductId = (list) => list.map((p) => p.id);

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(filterByCategory(products, 'all'))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(filterByCategory(products, undefined))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(filterByCategory(products, ''))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(getProductId(filterByCategory(products, 'electronics'))).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(getProductId(filterByCategory(products, 'books'))).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(getProductId(filterByCategory(products, 'home'))).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
