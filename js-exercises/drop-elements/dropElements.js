/**
 * @template T
 * @param {T[]} elements
 * @param {(T) => boolean} predicate
 * @return {T[]}
 */
function dropElements(elements, predicate) {
  const firstTrueIndex = elements.findIndex(predicate);
  if (firstTrueIndex === -1) {
    return [];
  }
  return elements.slice(firstTrueIndex);
}

export { dropElements };
