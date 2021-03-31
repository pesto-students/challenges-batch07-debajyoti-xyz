class Cycled {
  /**
   * @param {any[]} array
   */
  constructor(array) {
    this._array = array;
    this._index = 0;
  }

  get length() {
    return this._array.length;
  }

  get index() {
    return this._index;
  }

  set index(n) {
    if (n >= 0 && n < this.length) {
      this._index = n;
    }
  }

  * [Symbol.iterator]() {
    let currentPosition = this._index;
    const N = this.length;
    for (let i = 0; i < N; i += 1) {
      yield this._array[currentPosition % N];
      currentPosition += 1;
    }
  }

  * reversed() {
    let currentPosition = (this._index + this.length - 1) % this.length;
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this._array[currentPosition];
      currentPosition -= 1;
      if (currentPosition < 0) {
        currentPosition = this.length - 1;
      }
    }
  }

  /**
   * @param {number} n
   */
  step(n) {
    const arrayLength = this.length;
    this._index = (arrayLength + (this._index + n)) % arrayLength;
    return this._array[this._index];
  }

  current() {
    return this._array[this._index];
  }

  next() {
    return this.step(1);
  }

  previous() {
    return this.step(-1);
  }

  indexOf(value) {
    return this._array.indexOf(value);
  }
}

export { Cycled };
