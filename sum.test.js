const sum = require('./sum');

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('sum(%i, %i) = %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});
