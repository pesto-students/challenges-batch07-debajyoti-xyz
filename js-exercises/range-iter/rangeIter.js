function withValidation(fn, validator) {
  return (...args) => {
    validator(...args);
    return fn(...args);
  };
}

function paramValidatorNumber(value, paramName) {
  const paramType = typeof value;
  if (paramType !== 'number') {
    throw new TypeError(
      `${value} is not a number. Expected a number in parameter ${paramName}`,
    );
  }
}

function rangeIter(lb, ub) {
  return {
    [Symbol.iterator]: function* generator() {
      for (let i = lb; i <= ub; i += 1) {
        yield i;
      }
    },
  };
}

const rangeIterWithValidation = withValidation(rangeIter, (lb, ub) => {
  paramValidatorNumber(lb, 'lb');
  paramValidatorNumber(ub, 'ub');
});

export { rangeIterWithValidation as rangeIter };
