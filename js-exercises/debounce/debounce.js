/**
 * Creates a debounced function that delays invoking fn
 * until after ms milliseconds have elapsed since the
 * last time the debounced function was invoked.
 * @param {function} fn The function to debounce.
 * @param {number} ms The number of milliseconds to delay.
 * @return {function} A debounced function which invokes fn
 */
const debounce = (fn, ms) => {
  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a function');
  }
  if (typeof ms !== 'number' || !Number.isFinite(ms)) {
    throw new TypeError('ms must be a finite number');
  }
  let lastTimeout;
  return (...args) => {
    clearTimeout(lastTimeout);
    lastTimeout = setTimeout(fn, ms, ...args);
  };
};

export { debounce };
