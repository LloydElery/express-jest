function find(characters) {
  const words = ['gurka', 'lagom'];
  return words.filter((word) =>
    word.split('').every((letter) => characters.includes(letter))
  );
}

module.exports = find;
