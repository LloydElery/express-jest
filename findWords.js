// findWords.js

function canFormWord(word, letters) {
  const letterCount = {};

  // Count the frequency of each letter in the letters array
  letters.forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  // Check if the word can be formed with the available letters
  for (let char of word) {
    if (!letterCount[char] || letterCount[char] <= 0) {
      return false;
    }
    letterCount[char]--;
  }
  return true;
}

function findWords(letters, wordList) {
  return wordList.filter((word) => canFormWord(word, letters));
}

module.exports = findWords;
