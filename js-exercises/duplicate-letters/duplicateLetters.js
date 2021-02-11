function countCharsInWordList(words) {
  const charCounts = {};
  const N = words.length;
  for (let i = 0; i < N; i += 1) {
    const word = words[i];
    const Nw = word.length;
    for (let j = 0; j < Nw; j += 1) {
      const char = word[j];
      if (!charCounts[char]) {
        charCounts[char] = 0;
      }
      charCounts[char] += 1;
    }
  }
  return charCounts;
}

function findMostFrequentChar(charCounts) {
  let mxFeqChar = '';
  let mxFeqCount = 0;
  for (const charKey in charCounts) {
    if (Object.prototype.hasOwnProperty.call(charCounts, charKey)) {
      const feqCount = charCounts[charKey];
      if (feqCount > mxFeqCount) {
        mxFeqCount = feqCount;
        mxFeqChar = charKey;
      }
    }
  }
  return { char: mxFeqChar, count: mxFeqCount };
}

function duplicateLetters(...args) {
  const charCounts = countCharsInWordList([...args]);
  const { count } = findMostFrequentChar(charCounts);
  if (count <= 1) {
    return false;
  }
  return count;
}

export { duplicateLetters };
