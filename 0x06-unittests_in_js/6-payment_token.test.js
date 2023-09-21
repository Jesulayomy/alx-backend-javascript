const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
  
describe('getPaymentTokenFromAPI', () => {
  it('promise resolves with success and data', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        chai
          .expect(response)
          .to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});