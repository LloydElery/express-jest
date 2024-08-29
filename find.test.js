const find = require('./find');

test.each([
  [
    ['g', 'u', 'r', 'k', 'a', 'l', 'o', 'm'],
    ['gurka', 'lagom'],
  ],
])('find([%j]) = [%j]', (input, expected) => {
  expect(find(input)).toEqual(expected);
});
