const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Must return 3 when adding 1 and 2', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('Must return 6 when adding 2.7 and 3.1', () => {
    assert.equal(calculateNumber(2.7, 3.1), 6);
  });
  it('Must return 5 when adding 2.1 and 3.3', () => {
    assert.equal(calculateNumber(2.1, 3.3), 5);
  });
  it('Must return 0 when adding 0.0 and 0.0', () => {
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
  it('Must return 0 when adding 0.4 and 0.1', () => {
    assert.equal(calculateNumber(0.4, 0.1), 0);
  });
  it('Must return 0 when adding -0.4 and 0.4', () => {
    assert.equal(calculateNumber(-0.4, 0.4), 0);
  });
  it('Must return -4 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
  });
  it('Must return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });
  it('Must return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
  it('Must return -4 when adding -1 and -3', () => {
    assert.equal(calculateNumber(-1, -3), -4);
  });
  it('Must return -5 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
  });
  it('rounding down a\'s floating point fractional number', () => {
    assert.equal(calculateNumber(1.4, 2.0), 3);
  });
  it('rounding up b\'s floating point fractional numbers', () => {
    assert.equal(calculateNumber(1.0, 2.5), 4);
  });
  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.equal(calculateNumber(2.6, 2.5), 6);
  });
  it('rounding up a\'s floating point fractional numbers', () => {
    assert.equal(calculateNumber(2.6, 2.0), 5);
  });
  it('rounding floating point fractional numbers with trailing 9\'s', () => {
    assert.equal(calculateNumber(2.499999, 3.499999), 5);
  });
  it('Must return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });
  it('Must return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
  it('Must return -4 when adding 0 and -4', () => {
    assert.equal(calculateNumber(0, -4), -4);
  });
  it('Must return -5 when adding 0.4 and -4.4', () => {
    assert.equal(calculateNumber(0.4, -4.4), -4);
  });
});
