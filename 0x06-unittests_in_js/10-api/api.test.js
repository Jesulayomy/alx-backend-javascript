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
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 200', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns 200', (done) => {
    request('http://localhost:7865/cart/1', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it('returns 200', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('returns 200', (done) => {
    request('http://localhost:7865/cart/12345', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12345');
      done();
    });
  });

  it('returns 404', (done) => {
    request('http://localhost:7865/cart/123ab', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 404', (done) => {
    request('http://localhost:7865/cart/12/34', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 200', (done) => {
    request(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      }
    );
  });

  it('returns 200', (done) => {
    request(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('returns 200', (done) => {
    request(
      {
        url: 'http://localhost:7865/login',
        method: 'POST',
        form: { userName: 'Betty' }
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('returns 200', (done) => {
    request.post(
      'http://localhost:7865/login',
      { form: { userName: 'Betty' } },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('returns 200', (done) => {
    request.post(
      'http://localhost:7865/login',
      { form: { userName: 'Mic' } },
      (error, response, body) => {
        expect(body).to.equal('Welcome Mic');
        done();
      }
    );
  });
});
