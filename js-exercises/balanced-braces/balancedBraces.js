function getStartBrace(endBrace) {
  if (endBrace === ']') {
    return '[';
  }
  if (endBrace === '}') {
    return '{';
  }
  if (endBrace === ')') {
    return '(';
  }
  throw new Error(`INVALID_BRACE: ${endBrace}`);
}

/**
 * Test if all braces are balanced
 * @param {string} str
 */
function balancedBraces(str) {
  const patternStartBraces = /[({[]/;
  const patternEndBraces = /[)}\]]/;
  const bracesStack = [];
  for (const char of str) {
    if (char.match(patternStartBraces)) {
      bracesStack.push(char);
    } else if (char.match(patternEndBraces)) {
      const startBrace = getStartBrace(char);
      if (bracesStack.pop() !== startBrace) {
        return false;
      }
    }
  }
  return bracesStack.length === 0;
}

export { balancedBraces };
