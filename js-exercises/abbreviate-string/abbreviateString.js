import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error(`arg str must be a string. Received ${typeof str}`);
  }
  const words = str.split(' ');
  if (words.length <= 1) {
    return str;
  }
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  return `${firstWord} ${lastWord[0].toUpperCase()}.`;
}

export { abbreviateString };
