/* function isAlphabet(ch) {
  const capA = 'A'.charCodeAt(0);
  const smallA = 'a'.charCodeAt(0);
  const capZ = 'Z'.charCodeAt(0);
  const smallZ = 'z'.charCodeAt(0);
  const code = ch.charCodeAt(0);
  return (code >= capA && code <= capZ) || (code >= smallA && code <= smallZ);
} */

function rotate(number) {
  const capA = 'A'.charCodeAt(0);
  const smallA = 'a'.charCodeAt(0);
  const capZ = 'Z'.charCodeAt(0);
  const smallZ = 'z'.charCodeAt(0);
  return (ch) => {
    const code = ch.charCodeAt(0);
    if (code >= smallA && code <= smallZ) {
      return String.fromCharCode(smallA + ((code - smallA + number) % 26));
    } if (code >= capA && code <= capZ) {
      return String.fromCharCode(capA + ((code - capA + number) % 26));
    }
    return ch;
  };
}

const rotate13 = rotate(13);

function rot13(str) {
  if (typeof str !== 'string') {
    throw new TypeError(`param str must be string. Received ${typeof str}`);
  }
  const N = str.length;
  let chiper = '';
  for (let i = 0; i < N; i += 1) {
    chiper += rotate13(str[i]);
  }
  return chiper;
}

export {
  rot13,
};
