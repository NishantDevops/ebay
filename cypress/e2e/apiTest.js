describe('CoinDesk API Test', () => {
  
    it('Should verify the response from /v1/bpi/currentprice.json', () => {
      // Send GET request to the CoinDesk API
      cy.request('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          expect(response.status).to.eq(200);
  
          // Verify the response contains 3 BPIs (USD, GBP, EUR)
          const bpi = response.body.bpi;
          expect(bpi).to.have.property('USD');
          expect(bpi).to.have.property('GBP');
          expect(bpi).to.have.property('EUR');
  
          // Verify the description of GBP equals 'British Pound Sterling'
          expect(bpi.GBP.description).to.eq('British Pound Sterling');
        });
    });
  
  });
  