export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(population) {
    this._size = population;
  }

  get location() {
    return this._location;
  }

  set location(pin) {
    this._location = pin;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') {
      return this.size;
    }
    if (cast === 'string') {
      return this.location;
    }
    return this;
  }
}
