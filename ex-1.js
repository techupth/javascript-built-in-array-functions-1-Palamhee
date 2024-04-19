let words = ["hello", "world"];

function getWordLengths(words) {
  return words.map(wordCount);
}
function wordCount(word) {
  return word.length;
}

const result = getWordLengths(words);

console.log(result);