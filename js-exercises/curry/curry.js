/**
 * Returns curried function
 * @param {function} fn
 */
function curry(fn) {
  return function curriedWrapper(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    }
    return (...argsFn) => curriedWrapper(...[...args, ...argsFn]);
  };
}

export { curry };
