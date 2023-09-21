const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

    spy.restore();
    spyConsole.restore();
  });
});
