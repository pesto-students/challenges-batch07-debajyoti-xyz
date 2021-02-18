/**
 * Returns a new array filtering out all falsy values
 * @param {any[]} array
 */
function removeFalsyValues(array) {
  return array.filter(Boolean);
}

export {
  removeFalsyValues,
};
