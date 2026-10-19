const products = require('../../src/data/products');
const {searchProducts} = require('../../src/catalog');

const getProductId = (list) => list.map((p) => p.id);
const all = [1, 2, 3, 4, 5, 6];

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(getProductId(searchProducts(products, 'Наушники'))).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(getProductId(searchProducts(products, 'Чистый код'))).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(getProductId(searchProducts(products, 'Настольная лампа'))).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    expect(getProductId(searchProducts(products, 'javascript'))).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(getProductId(searchProducts(products, 'ЧЕХОЛ'))).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    expect(getProductId(searchProducts(products, 'наушники'))).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(searchProducts(products, ''))).toEqual(all);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(searchProducts(products, '   '))).toEqual(all);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getProductId(searchProducts(products, '\t\n'))).toEqual(all);
  });
});
