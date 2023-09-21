const sinon = require('sinon');
const { expect } = require('chai');
const { afterEach, beforeEach } = require('mocha');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;
  let spyConsole;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
    spyConsole.restore();
  });

  it('should call calculateNumber', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call calculateNumber', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
