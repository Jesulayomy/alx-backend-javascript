export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(maker) {
    this._brand = maker;
  }

  get motor() {
    return this._motor;
  }

  set motor(model) {
    this._motor = model;
  }

  get color() {
    return this._color;
  }

  set color(hex) {
    this._color = hex;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
