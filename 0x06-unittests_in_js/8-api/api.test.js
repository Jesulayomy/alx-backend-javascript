const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('returns a string', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns 404', (done) => {
    request('http://localhost:7865/nope', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 404', (done) => {
    request('http://localhost:7865/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 404', (done) => {
    request('http://localhost:7865/hhh', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
