const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Must resolve to 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('Must resolve to 5 when adding 1.4 and 3.7', () => {
    expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
  });
  it('Must resolve to 5 when adding 1.2 and 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('Must resolve to 6 when adding 1.5 and 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('Must resolve to 0 when adding 0.0 and 0.0', () => {
    expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
  });
  it('Must resolve to 0 when adding -0.4 and 0.4', () => {
    expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
  });
  it('Must resolve to -5 when adding -1.4 and -3.7', () => {
    expect(calculateNumber('SUM', -1.4, -3.7)).to.equal(-5);
  });
  it('Must resolve to -5 when adding -1.2 and -3.7', () => {
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });
  it('Must resolve to -6 when adding -1.5 and -3.7', () => {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
  it('Must resolve to -4 when adding -1 and -3', () => {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
  });
  it('Must resolve to -5 when adding -1.4 and -3.7', () => {
    expect(calculateNumber('SUM', -1.4, -3.7)).to.equal(-5);
  });
  it('Must resolve to -5 when adding -1.2 and -3.7', () => {
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });
  it('Must resolve to -5 when adding -1.5 and -3.7', () => {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
  it('Must resolve to -4 when adding 0 and -4', () => {
    expect(calculateNumber('SUM', 0, -4)).to.equal(-4);
  });
  it('Must resolve to -5 when adding 0.4 and -4.4', () => {
    expect(calculateNumber('SUM', 0.4, -4.4)).to.equal(-4);
  });
  it('Must resolve to 2 when subtracting 1 from 3', () => {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
  });
  it('Must resolve to 3 when subtracting 1.4 from 3.7', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.4)).to.equal(3);
  });
  it('Must resolve to 2 when subtracting 1.2 from 3.7', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
  });
  it('Must resolve to 2 when subtracting 1.5 from 3.7', () => {
    expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
  });
  it('Must resolve to 0 when subtracting 0.0 from 0.0', () => {
    expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
  });
  it('Must resolve to 0 when subtracting 0.4 from 0.4', () => {
    expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
  });
  it('Must resolve to -3 when subtracting -1.4 from -3.7', () => {
    expect(calculateNumber('SUBTRACT', -3.7, -1.4)).to.equal(-3);
  });
  it('Must resolve to -3 when subtracting -1.2 from -3.7', () => {
    expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
  });
  it('Must resolve to -2 when subtracting -1 from -3', () => {
    expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
  });
  it('Must resolve to -3 when subtracting -1.4 from -3.7', () => {
    expect(calculateNumber('SUBTRACT', -3.7, -1.4)).to.equal(-3);
  });
  it('Must resolve to -3 when subtracting -1.2 from -3.7', () => {
    expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
  });
  it('Must resolve to -4 when subtracting 0 from -4', () => {
    expect(calculateNumber('SUBTRACT', -4, 0)).to.equal(-4);
  });
  it('Must resolve to -4 when subtracting 0.4 from -4.4', () => {
    expect(calculateNumber('SUBTRACT', -4.4, 0.4)).to.equal(-4);
  });
  it('Must resolve to 0.5 when dividing 1 by 2', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
  });
  it('Must resolve to 0.25 when dividing 1.4 by 3.7', () => {
    expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.equal(0.25);
  });
  it('Must resolve to 0.25 when dividing 1.2 by 3.7', () => {
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
  });
  it('Must resolve to 0.5 when dividing 1.5 by 3.7', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('Must resolve to Error when dividing 0.0 by 0.0', () => {
    expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
  });
  it('Must resolve to 0 when dividing 0.4 by 0.4', () => {
    expect(calculateNumber('DIVIDE', 0.4, 0.4)).to.equal('Error');
  });
  it('Must resolve to 2 when dividing 4 by 2', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('Must resolve to -2.5 when dividing -10 by 4.3', () => {
    expect(calculateNumber('DIVIDE', -10, 4.3)).to.equal(-2.5);
  });
  it('Must resolve to undefined when type is not SUM, SUBTRACT or DIVIDE', () => {
    expect(calculateNumber('NOT_VALID', 1, 2)).to.equal(undefined);
  });
});
