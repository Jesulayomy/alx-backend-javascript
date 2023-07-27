export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(nick) {
    this._name = nick;
  }

  get code() {
    return this._code;
  }

  set code(sign) {
    this._code = sign;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
