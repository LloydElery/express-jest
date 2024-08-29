const findWords = require('./findWords');

const wordList = [
  'cat',
  'bat',
  'rat',
  'tar',
  'art',
  'car',
  'tab',
  'bar',
  'at',
  'ta',
];

test.each([
  [
    ['a', 'r', 't', 'c'],
    ['cat', 'rat', 'tar', 'art', 'car', 'at', 'ta'],
  ],
  [
    ['b', 'a', 't'],
    ['bat', 'tab', 'at', 'ta'],
  ],
  [
    ['a', 't'],
    ['at', 'ta'],
  ],
])('findWords(%j) = %j', (letters, expected) => {
  const result = findWords(letters, wordList);
  expect(result).toEqual(expected);
});
