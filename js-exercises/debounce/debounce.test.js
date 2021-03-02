/* eslint-disable global-require, no-plusplus */

jest.useFakeTimers();

describe('debounce', () => {
  it('should not invoke callback immedieatly', () => {
    const { debounce } = require('./debounce');
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 0);
    debouncedFn();
    expect(callback).not.toBeCalled();
  });
  it('should invoke callback after timeout with given arguments', () => {
    expect.assertions(3);
    const { debounce } = require('./debounce');
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 1000);
    const param = 1234;
    debouncedFn(param);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(callback).toBeCalledWith(param);
    expect(callback).toHaveBeenCalledTimes(1);
  });
  it('should invoke callback only after the last timeout with last given arguments', () => {
    const { debounce } = require('./debounce');
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 1000);
    for (let i = 0; i < 10; i++) {
      setTimeout(debouncedFn, 900 * i, i);
    }
    for (let i = 0; i < 9; i++) {
      jest.advanceTimersByTime(900);
    }
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(9 * 1000);
    expect(callback).toBeCalledWith(9);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
