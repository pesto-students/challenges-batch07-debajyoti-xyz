/**
 * Wraps a function, hard binding its thisArg to given ctx object
 * @param {function} fn Function to wrap
 * @param {Object} ctx Object to set as context of fn
 */
function bind(fn, ctx) {
  return (...args) => fn.apply(ctx, args);
}

module.exports = { bind };
