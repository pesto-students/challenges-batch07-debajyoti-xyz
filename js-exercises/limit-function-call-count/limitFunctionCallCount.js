const noop = () => {};

/**
 * Returns a function which wrapes cb
 * @param {function} cb callback function to be wrapped
 * @param {number} callLimit max number of times cb can be invoked
 */
const limitFunctionCallCount = (cb = noop, callLimit = 0) => {
  if (typeof cb !== 'function') {
    throw new TypeError(`cb must be a function, got ${typeof cb}`);
  }
  if (!Number.isFinite(callLimit)) {
    throw new TypeError(`callLimit must be a finite integer, got ${callLimit}`);
  }
  let remaining = callLimit;
  return (...args) => {
    remaining -= 1;
    return remaining > 0 ? cb(...args) : null;
  };
};

export { limitFunctionCallCount };
