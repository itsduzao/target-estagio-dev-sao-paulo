export function containsLetter(word) {
  const slicedWord = word.split('');

  const count = slicedWord.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.toLowerCase() == "a"),
    0
  );

  return count;
}
