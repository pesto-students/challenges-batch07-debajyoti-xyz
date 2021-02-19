/**
 *
 * @param {any[]} chunked
 * @param {any[]} remaning
 * @param {number} chunkSize
 */
function arrayChunker(chunked, remaning, chunkSize) {
  if (remaning.length === 0) {
    return chunked;
  }
  if (remaning.length < chunkSize) {
    return [...chunked, remaning];
  }
  return arrayChunker(
    [...chunked, remaning.slice(0, chunkSize)],
    remaning.slice(chunkSize),
    chunkSize,
  );
}

function chunkArrayInGroups(array, chunkSize) {
  return arrayChunker([], array, chunkSize);
}

export { chunkArrayInGroups };
